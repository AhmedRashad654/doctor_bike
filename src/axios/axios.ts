import axios from "axios";
import Cookies from "js-cookie";

export const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

request.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token_doctor_bike");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
