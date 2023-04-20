import React from "react";
import { useForm } from "react-hook-form";
import {
  GetUserResponse,
} from "../services/quanLyNguoiDung.service";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { login } from "../store/quanLyNguoiDung/thunkAction";

const Login = () => {
  const { user } = useSelector((state: RootState) => state.quanLyNguoiDung);
  const appDispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetUserResponse>();
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-semibold p-8">Login</h1>
      <form onSubmit={handleSubmit(async (value) => appDispatch(login(value)))}>
        <div className="mb-6">
          <label
            htmlFor="taiKhoan"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tài khoản
          </label>
          <input
            {...register("taiKhoan", {
              required: "Vui lòng nhập tài khoản",
            })}
            type="text"
            id="taiKhoan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.taiKhoan?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="matKhau"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            {...register("matKhau", {
              required: "Vui lòng nhập mật khẩu",
            })}
            type="password"
            id="matKhau"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.matKhau?.message}</p>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
