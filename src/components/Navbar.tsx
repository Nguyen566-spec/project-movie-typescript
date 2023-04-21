import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../store'
import { NavLink, Navigate } from 'react-router-dom'
import { quanLyNguoiDungActions } from '../store/quanLyNguoiDung/slice'

const Navbar = () => {
  const { user } = useSelector((state: RootState) => state.quanLyNguoiDung)
  const appDispatch = useAppDispatch();
  if(!user || user.maLoaiNguoiDung !== "QuanTri"){
    return <Navigate to="/"/>
  }
  return (
    <div className='bg-blue-500 text-white sticky top-0 z-50 p-4 flex justify-end gap-4'>
      <NavLink to="/">Hello, {user.hoTen}</NavLink>
      <button onClick={() => appDispatch(quanLyNguoiDungActions.logout())}>Logout</button>
    </div>
  )
}

export default Navbar