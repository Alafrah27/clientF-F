import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://flowerandfirewood.onrender.com/api/v1",
  withCredentials: true,
});
