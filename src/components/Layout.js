import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";

function Layout() {
  return (
    <div className=" h-screen">
      <Navbar />
      <div className="max-w-xl mx-auto">
        <Home />
      </div>
    </div>
  );
}

export default Layout;
