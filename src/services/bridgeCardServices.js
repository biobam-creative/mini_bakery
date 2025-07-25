import axios from "axios";
import httpServices from "./httpServices";
import config from "../config.json";

// const baseUrl = "https://issuecards.api.bridgecard.co/v1/issuing/sandbox/";
export const getCardHolder = () => {
  // Ensure that config.apiUrl is defined and valid
  if (!config.apiUrl) {
    throw new Error("API URL is not defined in the configuration");
  }
  console.log(config.apiUrl);
  return httpServices.header.get(`${config.apiUrl}/cards/cardholder`);
};

// const uploadHeaders = httpServices.header();

export const createCardHolder = (data) => {
  // Ensure data is an object and has the required properties
  if (typeof data !== "object" || !data) {
    throw new Error("Invalid data provided for card holder creation");
  }
  if (!data.first_name || !data.last_name) {
    throw new Error("First name, last name, and email are required fields");
  }
  // Log the data to be sent
  // Ensure the URL is correct and matches the API endpoint
  if (!config.apiUrl) {
    throw new Error("API URL is not defined in the configuration");
  }
  // Ensure that httpServices.header.post is correctly set up to handle the request
  if (
    !httpServices ||
    !httpServices.header ||
    typeof httpServices.header.post !== "function"
  ) {
    throw new Error(
      "httpServices.header.post is not defined or is not a function"
    );
  }

  return httpServices.header.post(`${config.apiUrl}/cards/cardholder`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
