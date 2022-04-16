import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
// import { Home } from "../Pages/Home";
// import { Login } from "../Pages/Login";
// import { Register } from "../Pages/Register";
import { MainLayout } from "./layouts/MainLayout";

export const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
