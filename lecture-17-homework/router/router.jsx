import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/pages/Layout";
import MainPage from "../src/pages/MainPage";
import AboutPage from "../src/pages/AboutPage";
import FactPage from "../src/pages/FactPage";
import InfoDartangan from "../src/pages/InfoDartangan";
import ErrorPage from "../src/pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <MainPage />,
        path: "/",
        children: [
          {
            element: <InfoDartangan />,
            index: true,
          },
          {
            element: <AboutPage />,
            path: "about",
          },
          {
            element: <FactPage />,
            path: ":factId",
          },
        ],
      },
    ],
  },
  {
    element: <ErrorPage />,
    path: "*",
  },
]);

export default router;
