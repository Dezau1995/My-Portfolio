import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="display-btn-close">
      <p
        className="btn-close"
        onClick={() => {
          navigate("/");
        }}
      >
        CLOSE
      </p>
    </footer>
  );
}

export default Footer;
