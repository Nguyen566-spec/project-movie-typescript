import http from "../constant/api";

export const quanLyPhimService = {
  getMovieList: (query = "") => http.get(`QuanLyPhim/LayDanhSachPhim${query}`),
};
