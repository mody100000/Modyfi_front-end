import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import Products from "./products";

const NavBar = () => {
  return (
    <div class="flex flex-row items-center p-1 justify-between bg-white shadow-xs">
      <Link to="/" class="ml-8 text-lg text-gray-700 hidden md:flex">
        Modyfi
      </Link>
      <span class="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
        <i class="fa fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>
      </span>
      <div class="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i class="fa fa-bars"></i>
      </div>
      <div class="flex flex-row-reverse mr-8 hidden md:flex">
        <Link
          class="btn mx-2 bg-blue-700 border-0 text-gray-50 text-gray-700 text-center px-4 py-2 m-2"
          to="register"
        >
          Register
        </Link>
        <Link
          class="btn mx-2 bg-blue-700 border-0 text-gray-50 text-gray-700 text-center px-4 py-2 m-2"
          to="login"
        >
          Login
        </Link>
        <Link
          class="btn mx-2 bg-blue-700 border-0 text-gray-50 text-gray-700 text-center px-4 py-2 m-2"
          to="/New"
        >
          Products
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
