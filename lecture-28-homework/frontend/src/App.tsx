import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ContextProvider } from "./context/userAuth/auth";

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
