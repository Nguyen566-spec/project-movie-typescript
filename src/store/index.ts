import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";

export const store = configureStore({
  reducer: {
    quanLyNguoiDung: quanLyNguoiDungReducer,
  },
});

export type RootState = ReturnType<typeof store["getState"]>;
export type AppDispatch = typeof store["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
