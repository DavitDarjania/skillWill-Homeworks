import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import Client from "../pages/Client";
import { Cart } from "../types/Cart";

export const router = createBrowserRouter([
  { element: <Client />, path: "/" },
  {
    element: <Admin />,
    path: "/admin",
  },
  { element: <Cart />, path: "/cart" },
]);
