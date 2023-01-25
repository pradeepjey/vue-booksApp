import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (res) => {
    return res.data
  }
)

export default apiClient;
