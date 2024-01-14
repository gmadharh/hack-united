import { useContext } from "react";
import { Link } from "react-router-dom";
import { DashboardContext } from "../contexts/DashboardContext";

const DashboardNavbar = () => {
  return (
    <nav className="bg-gray-700/25 flex justify-between items-center py-3 px-8 navbar">
      <Link to="/" className="text-3xl font-semibold text-white">
        <p>Name of App</p>
      </Link>
      <div>
        <div className="flex gap-5">
          <Link to="/dashboard" className="text-xl font-medium text-white hover:underline">
            <p>Find Resolutions</p>
          </Link>
          <Link to="/dashboard/profile" className="text-xl font-medium text-white hover:underline">
            <p>Profile</p>
          </Link>
          <Link to="/dashboard/resolutions" className="text-xl font-medium text-white hover:underline">
            <p>Saved Resolutions</p>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
