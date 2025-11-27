import { createBrowserRouter, Outlet } from "react-router-dom";
import TaskWrapper from "../src/components/TaskWrapper";
import Edit from "../src/components/Edit";
import Header from "../src/components/Header";
import { LanguageContextProvider } from "../src/context/LanguageContext";

const router = createBrowserRouter([
  {
    element: (
      <LanguageContextProvider>
        <Header />
        <Outlet />
      </LanguageContextProvider>
    ),
    children: [
      {
        element: <TaskWrapper />,
        path: "/",
      },
      {
        element: <Edit />,
        path: "/update/:taskId",
      },
    ],
  },
]);
export default router;
