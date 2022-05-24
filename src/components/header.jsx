import React from "react";
import { Link } from "react-router-dom";
import photo from "../images/header.jpg";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-3/4 relative">
        <h1
          className="absolute top-1/2 left-1/2 text-success text-9xl"
          style={{ transform: "translateX(-50%) translateY(-50%)" }}
        >
          Modyfi
        </h1>
        <img src={photo} alt="header" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full md:flex-1 bg-success flex items-center md:ml-4">
        <Link
          to="/new"
          className="text-black text-3xl ml-4 font-bold hover:text-primary duration-300 ease-in-out"
        >
          Shop now
          <i className="fa fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
