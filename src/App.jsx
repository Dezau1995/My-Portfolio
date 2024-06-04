import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/image/Logo-P.svg";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="display-logo">
        <img
          src={logo}
          alt="logo"
          className="logo-portfolio"
          role="presentation"
          onClick={() => {
            navigate("/");
          }}
        />
      </section>
      <Outlet />
    </div>
  );
}

export default App;
