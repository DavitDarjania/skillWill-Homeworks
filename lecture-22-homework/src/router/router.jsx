import { createBrowserRouter } from "react-router-dom";
import FormTasks from "../pages/FormTasks";
import EditTask from "../pages/EditTask";

export const router = createBrowserRouter([
  {
    element: <FormTasks />,
    path: "/",
  },
  {
    element: <EditTask />,
    path: "edit/:id",
  },
]);
