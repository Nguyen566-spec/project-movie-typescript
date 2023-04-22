import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { getMovieList } from "../store/quanLyPhim/thunkAction";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { QuanLyPhimInitialState } from "../store/quanLyPhim/slice";

const MovieList = () => {
  const { register, handleSubmit } = useForm<QuanLyPhimInitialState>();
  const { movieList } = useSelector((state: RootState) => state.quanLyPhim);
  const appDispatch = useAppDispatch();
  useEffect(() => {
    appDispatch(getMovieList(""));
  }, [appDispatch]);
  return (
    <div className="p-8">
      <div className="flex justify-between items-center pb-8">
        <h1 className="font-bold text-4xl text-center">Movie list</h1>
        <NavLink
          to="/admin/movie/add"
          className="px-4 py-2 rounded-lg bg-green-500 text-white"
        >
          Thêm mới
        </NavLink>
      </div>
      <form
        className="pb-8"
        onSubmit={handleSubmit((value) => {
          appDispatch(getMovieList(value.timKiem));
        })}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Tìm kiếm
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            {...register("timKiem")}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Tìm kiếm
          </button>
        </div>
      </form>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="p-3 w-20">Mã phim</th>
              <th className="p-3 w-24">Hình ảnh</th>
              <th className="p-3 w-40">Tên phim</th>
              <th className="p-3">Mô tả</th>
              <th className="p-3 w-40">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {movieList?.map((movie) => (
              <tr className="bg-white border-b" key={movie.maPhim}>
                <td className="p-3">{movie.maPhim}</td>
                <td className="p-3">
                  <img src={movie.hinhAnh as string} alt={movie.tenPhim} />
                </td>
                <td className="p-3">{movie.tenPhim}</td>
                <td className="p-3">{movie.moTa}</td>
                <td className="p-3">
                  <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">
                    Sửa
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-red-500 text-white">
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MovieList;
