import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main-page/MainPage";
import ProductsPage from "../pages/products-page/ProductsPage";

export const router = createBrowserRouter([
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <ProductsPage />,
    path: "/products",
  },
]);
