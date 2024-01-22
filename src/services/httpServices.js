import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.json";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    const expectedError =
      error.response && error.response >= 400 && error.response < 500;
    if (!expectedError) {
      toast.error("an unexpexted error occured.");
      return Promise.reject(error);
    }
    if (
      expectedError &&
      originalRequest.url === config.apiUrl + "token/refresh/"
    ) {
      window.location.href = "/login";
      return Promise.reject(error);
    }
    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
        const now = Math.ceil(Date.now() / 1000);

        console.log(tokenParts.exp);
        if (tokenParts.exp > now) {
          return httpHeader
            .post(`/token/refresh/`, { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);
              localStorage.setItem("refresh_token", response.data.refresh);

              httpHeader.defaults.headers["Authorization"] =
                "JWT " + response.data.access;
              originalRequest.headers["Authorization"] =
                "JWT " + response.data.access;
              return httpHeader(originalRequest);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login";
        }
      } else {
        console.log("Refresh token is not available");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

const httpHeader = axios.create({
  baseURL: config.apiUrl,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default {
  get: axios.get,
  post: axios.post,
  header: httpHeader,
  //   put: axios.put,
  //   delete: axios.delete,
};
