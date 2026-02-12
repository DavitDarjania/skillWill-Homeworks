import { createBrowserRouter } from "react-router-dom";
import Authors from "../pages/Authors.page";
import Author from "../pages/Author.page";
import HeadFoot from "../layouts/HeadFoot.layout";

export const router = createBrowserRouter([
  {
    element: <HeadFoot />,
    children: [
      {
        element: <Authors />,
        path: "/",
      },
      {
        element: <Author />,
        path: "/:id",
      },
    ],
  },
]);
