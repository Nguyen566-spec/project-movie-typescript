import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Edit from "../pages/Edit";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import MovieList from "../pages/MovieList";
import MovieAdd from "../pages/MovieAdd";

const Router = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "edit",
          element: <Edit />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: '/admin',
      element: <AdminLayout/>,
      children: [
        {
          path: "",
          element: <Dashboard/>,
        },
        {
          path: 'movie',
          element: <MovieList/>,
        },
        {
          path: 'movie/add',
          element: <MovieAdd/>,
        },
      ]
    }
  ]);
  return elements;
};

export default Router;
