import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastMessage = () => {
  const toastClone = {
    error: (message: string) => toast(message, { type: "error" }),
    success: (message: string) => toast(message, { type: "success" }),
    info: (message: string) => toast(message, { type: "info" }),
  };
  Object.assign(message, toastClone);
  return <ToastContainer position="top-right" />;
};

export const message = {};
