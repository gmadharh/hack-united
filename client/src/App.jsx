import "./App.css";
import ButtonTile from "./components/ButtonTile";

import AppLayout from "./AppLayout";

import SpinWheel from "./pages/SpinWheel";
import PageNotFound from "./pages/PageNotFound";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  // const buttons = [
  //   { label: "Button 1", onClick: () => console.log("Button 1 clicked") },
  //   { label: "Button 2", onClick: () => console.log("Button 2 clicked") },
  //   { label: "Button 3", onClick: () => console.log("Button 3 clicked") },
  // ];

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />} >
        <Route index element={<SpinWheel />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
    // <div className="App bg-center bg-contain pb-48 min-h-screen">
    //   <SpinWheel />
    // </div>
  );
}

export default App;
