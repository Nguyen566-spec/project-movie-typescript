import http from "../constant/api";
import { FieldValues } from "react-hook-form/dist/types";

export type GetUserResponse = {
  accessToken?: string;
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  matKhau: string;
  maLoaiNguoiDung: string;
};

export const quanLyNguoiDungService = {
  register: (payload: FieldValues) =>
    http.post<HttpResponse<GetUserResponse>>("QuanLyNguoiDung/DangKy", payload),
  login: (payload: FieldValues) =>
    http.post<HttpResponse<GetUserResponse>>(
      "QuanLyNguoiDung/DangNhap",
      payload
    ),
  edit: (payload: FieldValues) =>
    http.post<HttpResponse<GetUserResponse>>(
      "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      payload
    ),
};
