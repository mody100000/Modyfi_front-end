import React from "react";
import { Link } from "react-router-dom";
import LinkItem from "../common/LinkItemDashboard";
import avatar from "../images/no-image.jpg";
const Sidebar = () => {
  return (
    <div
      id="dashboard-sidebar"
      className="bg-accent w-full md:w-1/4 h-auto  md:min-h-screen flex flex-col justify-between"
    >
      <div className="dropdown absolute top-3 left-3 z-10">
        <label tabIndex="0" className="btn m-1 btn-accent">
          <i className="fa fa-bars"></i>
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Log out</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col w-full py-10 pb-14 mb-5 bg-neutral/25 items-center dashboard-header">
        <img
          className="w-40 h-40 md:w-28 md:h-28 rounded-full my-3 p-1 mx-auto ring ring-primary ring-offset-info ring-offset-4 object-cover"
          src={avatar}
          alt="profile picture"
        />
        <h1 className="text-gray-300 font-bold text-xl my-3">John smith</h1>
        <p className="text-gray-400 text-md">Admin manager</p>
        <span className="badge badge-info mb-7">super admin</span>
      </div>
      <div className="flex-1 flex flex-col flex-wrap overflow-y-auto">
        <LinkItem
          name="Home"
          url="dashboard"
          icon={<i className="fa fa-home"></i>}
        />
        <LinkItem
          name="Products"
          url="dashboard/products"
          icon={<i className="fa-brands fa-shopify"></i>}
        />

        <LinkItem
          name="Categories"
          url="dashboard/categories"
          icon={<i className="fa fa-table-cells"></i>}
        />

        <div className="bg-primary/50 py-4 text-gray-300 text-sm text-center">
          &copy; 2022 , All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
