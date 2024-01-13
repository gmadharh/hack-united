import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <div className="App bg-center bg-contain pb-48 min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
