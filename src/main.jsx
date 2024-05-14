import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <h2>Project</h2>

      },
      {
        path: 'contact',
        element: <h2>Contact</h2>

      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<RouterProvider router={router}/>  

</React.StrictMode>
);
