import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const MainLayots = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-screen-xl mx-auto w-full px-4 md:px-8 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayots;
