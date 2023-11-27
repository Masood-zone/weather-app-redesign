import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";

function Layout() {
  return (
    <div className="max-w-lg h-screen  mx-auto">
      <Navbar />
      <Home />
    </div>
  );
}

export default Layout;
