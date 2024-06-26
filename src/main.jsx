import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ProProject1 from "./Components/ProProject1.jsx";
import PersoProjectHome from "./Pages/PersoProjectHome.jsx";
import Contact from "./Pages/Contact.jsx";
import ProProject2 from "./Components/ProProject2.jsx";
import Hackathon1 from "./Pages/Hackathon1.jsx";
import Workshop from "./Components/Workshop.jsx";

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
        path: "/pro-project-1",
        element: <ProProject1 />,
      },
      {
        path: "/pro-project-2",
        element: <ProProject2 />,
      },
      {
        path: "/hackathon-1",
        element: <Hackathon1 />,
      },
      {
        path: "/workshop-1",
        element: <Workshop />,
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
