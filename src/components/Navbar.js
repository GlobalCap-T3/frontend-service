import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let activeStyle = "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 sm:mx-6"
  let inactiveStyle = "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6"

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between bg-white shadow dark:bg-gray-800 py-4">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <ul className="flex flex-col pl-0 list-style-none mr-auto">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle }>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : inactiveStyle }>About</NavLink>
          </li>
        </ul>

        <div className="flex items-center relative">
          <NavLink to="/login" className={({ isActive }) => isActive ? activeStyle : inactiveStyle }>Log In</NavLink>
          <NavLink to="/signup" className={({ isActive }) => isActive ? activeStyle : inactiveStyle }>Sign Up</NavLink>
        </div>
      </div>
    </nav>
  );
}