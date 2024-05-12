import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import "./ProProjectHome.css";

function ProProjectHome() {
  const navigate = useNavigate();

  return (
    <div className="display-pro-home">
      <section className="section-title-pro-home">
        <h1 className="title-pro-home">
          WELCOME ON MY PROJECTS, COME HAVE A LOOK
        </h1>
      </section>
      <section className="section-pro-project-btns">
        <section
          onClick={() => navigate("/pro-project-1")}
          className="section-btn-pro"
        >
            <h2 className="title-project-pro-home">PROJECT 1</h2>
            <p className="title-site-pro">
              LES
              <br /> RECETTES
              <br /> WILD
            </p>
        </section>
        <section
          onClick={() => navigate("/pro-project-2")}
          className="section-btn-pro"
        >
          <div>
            <h2 className="title-project-pro-home">PROJECT 2</h2>
            <p className="title-site-pro">
              FILM
              <br /> FUSION
            </p>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default ProProjectHome;
