import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "./config/apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
