import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../src/Components/NavBar.jsx";
import "./App.css";
import logo from "./assets/image/Logo-P.svg";
import Footer from "./Components/Footer.jsx";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="display-nav-bar">
        <img
          src={logo}
          alt="logo"
          className="logo-portfolio"
          role="presentation"
          onClick={() => {
            navigate("/");
          }}
        />
        <NavBar />
      </section>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
