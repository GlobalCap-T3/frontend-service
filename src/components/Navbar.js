import React from "react";
import { NavLink } from "react-router-dom";

function StyledNavLink(props) {
  let activeStyle = "text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 sm:mx-6";
  let inactiveStyle = "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6";
  return <NavLink to={ props.to } className={({ isActive }) => isActive ? activeStyle : inactiveStyle }>{ props.html }</NavLink>;
}

export default function Navbar() {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between bg-white shadow dark:bg-gray-800 py-4">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <ul className="flex items-center list-style-none mr-auto">
          <li><StyledNavLink to="/" html="Home" /></li>
          <li><StyledNavLink to="/about" html="About" /></li>
        </ul>

        <ul className="flex items-center relative list-style-none">
          <li><StyledNavLink to="/login" html="Log In" /></li>
          <li><StyledNavLink to="/signup" html="Sign Up" /></li>
        </ul>
      </div>
    </nav>
  );
}