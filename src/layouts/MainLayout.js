import React from "react";
import { MainNav } from "../components/MainNav";
import { Footer } from "../components/Footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  );
};
