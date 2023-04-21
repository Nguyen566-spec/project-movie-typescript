import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from "../../services/quanLyPhim.service";

export const getMovieList = createAsyncThunk(
  "quanLyPhim/getMovieList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimService.getMovieList("?maNhom=GP13");
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
