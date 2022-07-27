import React from "react";
import { Outlet } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

export const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
