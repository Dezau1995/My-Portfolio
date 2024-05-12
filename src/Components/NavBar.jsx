import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="btns-nav">
        <button
          className="btn-navigation"
          onClick={() => {
            navigate("/about");
          }}
        >
          ABOUT
        </button>
        <button
          className="btn-navigation"
          onClick={() => {
            navigate("/pro-project");
          }}
        >
          PRO PROJECT
        </button>
        <button
          className="btn-navigation"
          onClick={() => {
            navigate("/personnal-project");
          }}
        >
          PERSONNAL PROJECT
        </button>
        <button
          className="btn-navigation"
          onClick={() => {
            navigate("/contact");
          }}
        >
          CONTACT
        </button>
        <button className="link-btn">
          <Link
            className="linkedin-btn"
            to="https://www.linkedin.com/in/aude-sedillo-abb68b2b9/"
            target="_blank"
          >
            in
          </Link>
        </button>
        <button className="send-email-btn">
          {" "}
          <Link className="btn-email" to="mailto:aude.sedillo@gmail">
            {" "}
            <MdOutlineMail />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;