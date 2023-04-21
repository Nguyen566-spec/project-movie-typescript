import { createSlice } from "@reduxjs/toolkit";
import { getMovieList } from "./thunkAction";
import { GetMovieResponse } from "../../services/quanLyPhim.service";

type QuanLyPhimInitialState = {
  movieList?: GetMovieResponse[];
};

const initialState: QuanLyPhimInitialState = {
  movieList: [],
};

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    name: "quanLyPhim",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder.addCase(getMovieList.fulfilled, (state, action) => {
        state.movieList = action.payload;
      });
    },
  });
