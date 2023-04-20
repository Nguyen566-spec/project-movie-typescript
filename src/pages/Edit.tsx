import React, { useEffect } from "react";
import {
  GetUserResponse,
  quanLyNguoiDungService,
} from "../services/quanLyNguoiDung.service";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<GetUserResponse>();
  const { user } = useSelector((state: RootState) => state.quanLyNguoiDung);
  useEffect(() => {
    if (!user) return;
    reset({ ...user });
  }, [user, reset]);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-semibold p-8">Edit user</h1>
      <form
        onSubmit={handleSubmit(async (value) => {
          try {
            const res = await quanLyNguoiDungService.edit(value);
            if (res.data.statusCode !== 403) {
              navigate("/");
            }
          } catch (error) {}
        })}
      >
        <div className="mb-6">
          <label
            htmlFor="hoTen"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Họ tên
          </label>
          <input
            {...register("hoTen", {
              required: "Vui lòng nhập họ tên",
            })}
            type="text"
            id="hoTen"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.hoTen?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Vui lòng nhập email",
            })}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="soDT"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Số điện thoại
          </label>
          <input
            {...register("soDT", {
              required: "Vui lòng nhập số điện thoại",
            })}
            type="number"
            id="soDT"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.soDT?.message}</p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
