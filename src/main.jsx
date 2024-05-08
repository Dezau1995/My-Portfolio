import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.jsx'; 
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ProProject from "./Pages/ProProject.jsx";
import PersoProject from './Pages/PersoProject.jsx';
import Contact from "./Pages/Contact.jsx";
// import './index.css'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/pro-project",
        element: <ProProject />,
      },
      {
        path:"/personnal-project",
        element: <PersoProject/>
      },
      {
        path:"/contact",
        element: <Contact/>,
      }
    ]

  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);