import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContext";

const AppLayout = () => {
  return (
    <div className="App bg-center bg-contain pb-48 min-h-screen">
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </div>
  );
};

export default AppLayout;
