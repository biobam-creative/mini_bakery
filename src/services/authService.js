import httpServices from "./httpServices";
import config from "../config.json";

export function login(data) {
  return httpServices.post(`${config.apiUrl}/user/token/obtain`, data);
}

export function signup(data) {
  return httpServices.post(`${config.apiUrl}/user/signup`, data);
}

export function logout() {
  localStorage.clear();
}
