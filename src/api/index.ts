import axios from "axios";

export const instance = axios.create({
  baseURL: "https://15.164.38.42",
  withCredentials: true,
});
