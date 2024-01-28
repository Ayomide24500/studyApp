import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import LandingPage from "../pages/HomeScreen";
import React from "react";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Verification from "../pages/Auth/Verify";
import Dashboard from "../pages/Dashboard";
import StudyForm from "../pages/testing";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <Verification />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/test",
    element: <StudyForm />,
  },
]);
