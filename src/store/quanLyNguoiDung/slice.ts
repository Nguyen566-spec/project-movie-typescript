import { createSlice } from "@reduxjs/toolkit";
import { GetUserResponse } from "../../services/quanLyNguoiDung.service";
import { login } from "./thunkAction";

type QuanLyNguoiDungInitialState = {
  user: GetUserResponse | null;
};

const initialState: QuanLyNguoiDungInitialState = {
  user: null,
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
    getUser: (state) => {
      const data = localStorage.getItem("user");
      if (data) {
        state.user = JSON.parse(data);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    });
  },
});
