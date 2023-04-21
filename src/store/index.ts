import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { quanLyNguoiDungActions, quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";
import { quanLyPhimReducer } from "./quanLyPhim/slice";

export const store = configureStore({
  reducer: {
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyPhim: quanLyPhimReducer,
  },
});

store.dispatch(quanLyNguoiDungActions.getUser())

export type RootState = ReturnType<typeof store["getState"]>;
export type AppDispatch = typeof store["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
