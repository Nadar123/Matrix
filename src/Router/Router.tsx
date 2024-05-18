import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <h2 style={{ textAlign: "center", padding: "4rem" }}>
          404 Page not found
        </h2>
      ),
    },
    {
      path: "/",
      element: <Home />,
      children: [],
    },
  ]);
  return <RouterProvider router={router} />;
}
