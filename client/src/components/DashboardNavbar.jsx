import { useContext } from "react";
import { Link } from "react-router-dom";
import { DashboardContext } from "../contexts/DashboardContext";

const DashboardNavbar = () => {
  const { handleLogout } = useContext(DashboardContext);
  return (
    <nav className="bg-gray-700/25 flex justify-between items-center py-3 px-8 navbar">
      <Link to="/" className="text-3xl font-semibold text-white">
        <p>Name of App</p>
      </Link>
      <div>
        <div className="flex gap-5">
          <Link to="/dashboard" className="text-xl font-medium text-white">
            <p>Dashboard</p>
          </Link>
          <Link
            onClick={handleLogout}
            className="text-xl font-medium text-white"
          >
            <p>Logout </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
