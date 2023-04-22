import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { GetMovieResponse } from "../services/quanLyPhim.service";
import { addMovie } from "../store/quanLyPhim/thunkAction";
import { useAppDispatch } from "../store";

const MovieAdd = () => {
  const [imgSrc, setImgSrc] = useState("");
  // const { movieList } = useSelector((state: RootState) => state.quanLyPhim);
  const appDispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      // if (e.target.files) {
      //   let file = e.target.files[0];
      //   if (
      //     file.type === "image/jpg" ||
      //     file.type === "image/png" ||
      //     file.type === "image/gif"
      //   ) {
      //     let reader = new FileReader();
      //     reader.readAsDataURL(file);
      //     reader.onload = (e) => {
      //       setImgSrc(e.target?.result as string);
      //     };
      //   }
      // }
      e.target.files && setImgSrc(URL.createObjectURL(e.target.files[0]));
    } catch (error) {
      setImgSrc("");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetMovieResponse>();
  return (
    <div className="p-8">
      <h1 className="pb-8 text-center font-bold text-4xl">Add new</h1>
      <form
        onSubmit={handleSubmit((value) => {
          try {
            console.log(value);
            appDispatch(addMovie(value));
          } catch (error) {}
        })}
      >
        <div className="mb-6">
          <label
            htmlFor="tenPhim"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Tên phim
          </label>
          <input
            {...register("tenPhim", {
              required: "Vui lòng nhập tên phim",
            })}
            type="text"
            id="tenPhim"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.tenPhim?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="biDanh"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Bí danh
          </label>
          <input
            {...register("biDanh", {
              required: "Vui lòng nhập bí danh",
            })}
            type="text"
            id="biDanh"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.biDanh?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="trailer"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Trailer
          </label>
          <input
            {...register("trailer", {
              required: "Vui lòng nhập trailer",
            })}
            type="text"
            id="trailer"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.trailer?.message}</p>
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="hinhAnh"
          >
            Hình ảnh
          </label>
          <input
            {...register("hinhAnh", {
              required: "Vui lòng chọn hình ảnh",
            })}
            onChange={handleChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:border-none file:cursor-pointer file:px-4 file:py-2.5 file:mr-4 file:bg-black file:text-white file:font-semibold file:hover:bg-gray-700"
            id="hinhAnh"
            type="file"
            accept="image/jpg, image/png, image/gif"
          />
          {imgSrc && <img src={imgSrc} alt={imgSrc} width={200} height={150} />}
          <p className="text-red-500">{errors.hinhAnh?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="moTa"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Mô tả
          </label>
          <textarea
            {...register("moTa", {
              required: "Vui lòng nhập mô tả",
            })}
            id="moTa"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-red-500">{errors.moTa?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="ngayKhoiChieu"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ngày khởi chiếu
          </label>
          <input
            {...register("ngayKhoiChieu", {
              required: "Vui lòng chọn ngày khởi chiếu",
            })}
            type="date"
            id="ngayKhoiChieu"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.ngayKhoiChieu?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="danhGia"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Đánh giá
          </label>
          <input
            {...register("danhGia", {
              required: "Vui lòng nhập số sao",
            })}
            type="number"
            id="danhGia"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <p className="text-red-500">{errors.danhGia?.message}</p>
        </div>
        <div className="mb-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              {...register("hot")}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Hot
            </span>
          </label>
        </div>
        <div className="mb-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              {...register("dangChieu")}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Đang chiếu
            </span>
          </label>
        </div>
        <div className="mb-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              {...register("sapChieu")}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all" />
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Sắp chiếu
            </span>
          </label>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieAdd;
