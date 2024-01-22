import httpServices from "./httpServices";
import config from "../config.json";

export function login(data) {
  return httpServices.post(`${config.apiUrl}/registration/token/obtain`, data);
}

export function logout() {
  localStorage.clear();
}
