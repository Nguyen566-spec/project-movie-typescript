import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "quanLyNguoiDung/login",
  async (payload, { rejectWithValue }) => {
    try {
        
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
