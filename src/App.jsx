import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/image/Logo-P.svg";

function App() {
  const navigate = useNavigate();
  return (
    <div>
       <img
          src={logo}
          alt="logo"
          className="logo-portfolio"
          role="presentation"
          onClick={() => {
            navigate("/");
          }}
        />
      <Outlet />
    </div>
  );
}

export default App;
