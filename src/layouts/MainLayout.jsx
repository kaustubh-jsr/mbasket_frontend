import React from "react";
import { MainNav } from "../components/MainNav";
import { Footer } from "../components/Footer";
// This component renders the main navbar and footer common to all pages.
// Wrap all individual pages in the MainLayout component.
export const MainLayout = ({ children }) => {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  );
};
