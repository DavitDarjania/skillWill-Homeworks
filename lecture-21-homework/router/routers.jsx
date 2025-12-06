import { createBrowserRouter } from "react-router-dom";
import CreateTask from "../src/components/CreateTask";
import TasksPage from "../src/components/TasksPage";

export const routers = createBrowserRouter([
  {
    element: <CreateTask />,
    path: "/",
  },
  {
    element: <TasksPage />,
    path: "/tasks",
  },
]);
