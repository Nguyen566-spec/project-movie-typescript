import { FieldValues } from "react-hook-form";
import http from "../constant/api";

export type GetMovieResponse = {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string | File;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};

// export type GetPageResponse<T> = {
//   currentPage: number;
//   count: number;
//   totalPages: number;
//   totalCount: number;
//   items: T;
// };

export const quanLyPhimService = {
  getMovieList: (query = "") =>
    http.get<HttpResponse<GetMovieResponse[]>>(
      `QuanLyPhim/LayDanhSachPhim${query}`
    ),
  addMovie: (payload: FieldValues) =>
    http.post<HttpResponse<GetMovieResponse>>(
      "QuanLyPhim/ThemPhimUploadHinh",
      payload
    ),
};
