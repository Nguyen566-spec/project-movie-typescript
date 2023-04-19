import { createSlice } from "@reduxjs/toolkit";
import { GetUserResponse } from "../../services/quanLyNguoiDung.service";

type QuanLyNguoiDungInitialState = {
  user: GetUserResponse | null
}

const initialState: QuanLyNguoiDungInitialState = {
  user: null,
};

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } =
  createSlice({
    name: "quanLyNguoiDung",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      
    },
  });
