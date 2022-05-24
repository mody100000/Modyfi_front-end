import React from "react";
import Sidebar from "../components/sidebar";
const Dashboard = (Component) => {
  return (
    <div class="flex flex-col md:flex-row">
      <Sidebar />
      <div class="w-full md:h-screen overflow-y-auto" id="dashboard-content">
        <Component />
      </div>
    </div>
  );
};

export default Dashboard;
