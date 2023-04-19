import http from "../constant/api";
import { FieldValues } from "react-hook-form/dist/types";

export type GetUserResponse = {
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
};
