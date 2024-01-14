import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./AppLayout";
import DashboardLayout from "./DashboardLayout";

import Challenges from "./pages/Challenges";
import PageNotFound from "./pages/PageNotFound";
import RegisterUser from "./pages/RegisterUser";
import UserSignIn from "./pages/UserSignIn";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import UserResolutions from "./pages/UserResolutions";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  // const buttons = [
  //   { label: "Button 1", onClick: () => console.log("Button 1 clicked") },
  //   { label: "Button 2", onClick: () => console.log("Button 2 clicked") },
  //   { label: "Button 3", onClick: () => console.log("Button 3 clicked") },
  // ];

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RegisterUser />} />
          <Route path="sign-in" element={<UserSignIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/challenges" element={<Challenges />} />
          <Route path="/dashboard/profile" element={<UserProfile />} />
          <Route path="/dashboard/resolutions" element={<UserResolutions />} />
        </Route>
      </Route>

    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
