import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "../router/routers";

const App = () => {
  return <RouterProvider router={routers} />;
};

export default App;
