import { createSlice } from "@reduxjs/toolkit";
import { addMovie, getMovieList } from "./thunkAction";
import { GetMovieResponse } from "../../services/quanLyPhim.service";

export type QuanLyPhimInitialState = {
  movieList?: GetMovieResponse[];
  timKiem: string;
  // isLoading: boolean;
  // error: any;
};

const initialState: QuanLyPhimInitialState = {
  movieList: [],
  timKiem: "",
  // isLoading: true,
  // error: undefined,
};

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } =
  createSlice({
    name: "quanLyPhim",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        // .addCase(getMovieList.pending, (state) => {
        //   state.isLoading = true;
        // })
        .addCase(getMovieList.fulfilled, (state, action) => {
          state.movieList = action.payload;
        })
        // .addCase(getMovieList.rejected, (state, action) => {
        //   state.error = action.payload;
        //   state.isLoading = false;
        // })
        .addCase(addMovie.fulfilled, (state, action) => {
          state.movieList?.push(action.payload as GetMovieResponse);
        });
    },
  });
