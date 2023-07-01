import React from "react";
import "./app.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
