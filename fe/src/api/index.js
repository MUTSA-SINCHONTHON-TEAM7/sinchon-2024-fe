import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "localhost:8000",
    headers: {
      'Content-Type': 'application/json',
    }
});