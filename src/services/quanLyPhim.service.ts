import http from "../constant/api";

export type GetMovieResponse = {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: Date;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
};

export const quanLyPhimService = {
  getMovieList: (query = "") =>
    http.get<HttpResponse<GetMovieResponse[]>>(
      `QuanLyPhim/LayDanhSachPhim${query}`
    ),
};
