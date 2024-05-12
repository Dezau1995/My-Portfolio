import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { CiHome } from "react-icons/ci";

function FooterProject() {
  const navigate = useNavigate();

  return (
    <footer className="display-btn-close">
      <CiHome onClick={() => navigate("/")} className="home-icon" />
      <p className="btn-close" onClick={() => navigate("/pro-project")}>
        CLOSE
      </p>
    </footer>
  );
}

export default FooterProject;
