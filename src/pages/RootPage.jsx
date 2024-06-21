import React from "react";
import Navbar from "../componenets/navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default RootPage;
