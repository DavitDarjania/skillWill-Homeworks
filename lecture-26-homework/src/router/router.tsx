import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage";
import ContactPage from "../pages/ContactPage";
import AboutPage, { aboutAction, aboutLoader } from "../pages/AboutPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <MainPage />,
        path: "/",
      },
      {
        element: <ContactPage />,
        path: "/contact",
      },
      {
        element: <AboutPage />,
        path: "/about",
        loader: aboutLoader,
        action: aboutAction,
        errorElement: <h1>Error Page</h1>,
      },
    ],
  },
]);
