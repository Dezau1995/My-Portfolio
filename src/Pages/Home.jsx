import NavBar from "../Components/NavBar";
import "./Home.css";

function Home() {
  return (
    <div className="home-display">
      <div className="title-name">
        <h1>AUDE SEDILLO</h1>
      </div>
      <div className="header-job">
        <h1 className="text-decoration">WEB DEVELOPER FULLSTACK</h1>
      </div>
      <div className="description-job">
        <p>
          Looking for a work-study program as a front-end, back-end or
          full-stack developer
        </p>
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
