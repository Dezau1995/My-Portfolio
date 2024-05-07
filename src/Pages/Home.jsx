import "./Home.css"
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
const navigate = useNavigate();

  return (
    <div className="home-display">
      <div className="title-name">
        <h1>AUDE SEDILLO</h1>
      </div>
      <div className="header-job">
        <h1>WEB DEVELOPER FULLSTACK
       <br/> JUNIOR</h1>
      </div>
      <div className="description-job">
        <p>Looking for a work-study program as a front-end, back-end or full-stack developer</p>
      </div>
      <div className="btns-nav">
        <button className="btn-navigation" onClick={() => {navigate("/about")}}>ABOUT</button>
        <button className="btn-navigation" onClick={() => {navigate("/pro-project")}}>PRO PROJECT</button>
        <button className="btn-navigation" onClick={() => {navigate("/personnal-project")}}>PERSONNAL PROJECT</button>
        <button className="btn-navigation" onClick={() => {navigate("/contact")}}>CONTACT</button>
        <button className="link-btn"><Link className="linkedin-btn" to="https://www.linkedin.com/in/aude-sedillo-abb68b2b9/" target="_blank">in</Link></button>
        <button className="btn-email"><MdOutlineMail /></button>
      </div>
    </div>
  );
}

export default Home;
