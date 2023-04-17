import axios from "axios";

const http = axios.create();
const tokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3NCIsIkhldEhhblN0cmluZyI6IjE2LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDgyMjQwMDAwMCIsIm5iZiI6MTY2ODI3MjQwMCwiZXhwIjoxNjk0OTcwMDAwfQ.3TXoqM7cOKUQgRGc0plbpUsV406snlZBBeHlA7RxJYk";
const baseURL = "https://movienew.cybersoft.edu.vn/api/";

http.interceptors.request.use((config: any) => {
  return {
    ...config,
    headers: {
      tokenCybersoft,
    },
    baseURL,
  };
});

export default http;
