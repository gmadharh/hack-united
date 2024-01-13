import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./AppLayout";

import SpinWheel from "./pages/SpinWheel";
import PageNotFound from "./pages/PageNotFound";
import RegisterUser from "./pages/RegisterUser";
import UserSignIn from "./pages/UserSignIn";
import Home from "./pages/Home";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
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
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<SpinWheel />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="sign-in" element={<UserSignIn />} />
        <Route path="*" element={<PageNotFound />} />
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
