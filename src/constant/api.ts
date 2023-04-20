import axios from "axios";
import { toast } from "react-toastify";
import { GetUserResponse } from "../services/quanLyNguoiDung.service";

const http = axios.create();
const tokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3NCIsIkhldEhhblN0cmluZyI6IjE2LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDgyMjQwMDAwMCIsIm5iZiI6MTY2ODI3MjQwMCwiZXhwIjoxNjk0OTcwMDAwfQ.3TXoqM7cOKUQgRGc0plbpUsV406snlZBBeHlA7RxJYk";
const baseURL = "https://movienew.cybersoft.edu.vn/api/";
const data: GetUserResponse = JSON.parse(
  localStorage.getItem("user") as string
);

http.interceptors.request.use((config: any) => {
  return {
    ...config,
    headers: {
      tokenCybersoft,
      Authorization: `Bearer ${data?.accessToken}`,
    },
    baseURL,
  };
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 403) {
      toast.error("Bạn không có quyền truy cập");
    }
    if (error?.response?.status === 400) {
      toast.error(error?.response?.data.content);
    }
    if (error?.response?.status === 404) {
      toast.error(error?.response?.data.content);
    }
  }
);

export default http;
