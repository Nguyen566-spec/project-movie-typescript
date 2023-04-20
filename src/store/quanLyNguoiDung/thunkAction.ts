import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyNguoiDungService } from "../../services/quanLyNguoiDung.service";
import { FieldValues } from "react-hook-form";

export const login = createAsyncThunk(
  "quanLyNguoiDung/login",
  async (payload: FieldValues, { rejectWithValue }) => {
    try {
      const res = await quanLyNguoiDungService.login(payload);
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
