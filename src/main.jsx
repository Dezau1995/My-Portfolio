import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ProProject1 from "./Components/ProProject1.jsx";
import PersoProjectHome from "./Pages/PersoProjectHome.jsx";
import ProProjectHome from "./Pages/ProProjectHome.jsx";
import Contact from "./Pages/Contact.jsx";
// import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pro-project",
        element: <ProProjectHome />,
      },
      {
        path: "/pro-project-1",
        element: <ProProject1 />,
      },
      {
        path: "/personnal-project",
        element: <PersoProjectHome />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
