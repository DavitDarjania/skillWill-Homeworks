import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Layout from "../pages/layout/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout isVertical={true} />,
    children: [
      {
        element: <MainPage />,
        path: "/",
      },
      {
        element: <AboutPage />,
        path: "/about",
      },
      {
        element: <ContactPage />,
        path: "/contact",
      },
    ],
  },
]);
