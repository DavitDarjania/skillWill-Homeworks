import { createBrowserRouter } from "react-router-dom";
import TaskWrapper from "../src/components/TaskWrapper";
import Edit from "../src/components/Edit";

const router = createBrowserRouter([
  {
    element: <TaskWrapper />,
    path: "/",
  },
  {
    element: <Edit />,
    path: "/update/:taskId",
  },
]);
export default router;
