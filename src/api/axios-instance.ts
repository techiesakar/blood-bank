import { API_URL } from "@/lib/constants";
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized access. Please log in again.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
