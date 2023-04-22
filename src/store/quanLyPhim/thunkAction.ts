import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from "../../services/quanLyPhim.service";
import { FieldValues } from "react-hook-form";
import { GROUP_ID } from "../../constant/api";

export const getMovieList = createAsyncThunk(
  "quanLyPhim/getMovieList",
  async (payload: string, { rejectWithValue }) => {
    try {
      if (payload !== "") {
        const res = await quanLyPhimService.getMovieList(
          `?maNhom=${GROUP_ID}&tenPhim=${payload}`
        );
        return res.data.content;
      }
      const res = await quanLyPhimService.getMovieList(`?maNhom=${GROUP_ID}`);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addMovie = createAsyncThunk(
  "quanLyPhim/addMovie",
  async (payload: FieldValues, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimService.addMovie(payload);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
