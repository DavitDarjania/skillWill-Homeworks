import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Register from "../pages/Register";
import Protected from "../pages/Protected";
import Layout from "../layout/Layout";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <MainPage />,
        path: "/",
      },
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: <Protected />,
        path: "/protected",
      },
    ],
  },
]);
