import React from "react";
import menuIcon from "../assets/svgs/menu-icon.svg";

function Navbar() {
  return (
    <div className="navbar">
      <main className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
            <img src={menuIcon} alt="menu-icon" />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-52">
            <li>
              <a href="#!">About</a>
            </li>
            {/* Theme changer here */}
            <li></li>
          </ul>
        </div>
        <h1 className="text-xl mx-2 font-medium">Kirito Weather App</h1>
      </main>
    </div>
  );
}

export default Navbar;
