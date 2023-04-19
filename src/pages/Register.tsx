import { useForm } from "react-hook-form";
import {
  GetUserResponse,
  quanLyNguoiDungService,
} from "../services/quanLyNguoiDung.service";
import { message } from "../module/ToastMessage";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GetUserResponse>();
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold p-8">Register</h1>
      <form
        onSubmit={handleSubmit(async (value) => {
          try {
            const res = await quanLyNguoiDungService.register(value);
            if (res.data.statusCode !== 400) {
              console.log("Đăng ký thành công");
            }
            navigate("/login");
          } catch (error) {
            console.log("Đăng ký thất bại");
          }
        })}
      >
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
            Your email
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
        <div className="mb-6">
          <label
            htmlFor="maLoaiNguoiDung"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mã loại người dùng
          </label>
          <select
            {...register("maLoaiNguoiDung")}
            id="maLoaiNguoiDung"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Quản trị</option>
            <option>Khách hàng</option>
          </select>
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

export default Register;

// import React from 'react';
// import { useForm, Resolver } from 'react-hook-form';

// type FormValues = {
//   firstName: string;
//   lastName: string;
// };

// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: (values.firstName && values.lastName) ? values : {},
//     errors: !values.firstName
//       ? {
//           firstName: {
//             type: 'required',
//             message: 'This is required.',
//           },
//           lastName: {
//             type: 'required',
//             message: 'This is required.',
//           },
//         }
//       : {},
//   };
// };

// export default function App() {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
//   const onSubmit = handleSubmit((data) => console.log(data));

//   return (
//     <form onSubmit={onSubmit}>
//       <input {...register("firstName")} placeholder="Bill" />
//       {errors?.firstName && <p>{errors.firstName.message}</p>}

//       <input {...register("lastName")} placeholder="Luo" />
//       {errors?.lastName && <p>{errors.lastName.message}</p>}
//       <input type="submit" />
//     </form>
//   );
// }
