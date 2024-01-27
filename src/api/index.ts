import axios from "axios";

export const instance = axios.create({
  baseURL: "http://15.164.38.42:8080",
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: any) => {
    const accessToken = localStorage.getItem("access_token");
    const returnConfig = { ...config };
    if (accessToken) {
      returnConfig.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: any) => Promise.reject(error)
);
