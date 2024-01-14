import { Outlet } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import DashboardContextProvider from "./contexts/DashboardContext";

import DashboardNavbar from "./components/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="App bg-center bg-contain pb-48 min-h-screen">
      <AuthContextProvider>
        <DashboardContextProvider>
          <DashboardNavbar />
          <Outlet />
        </DashboardContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default DashboardLayout;
