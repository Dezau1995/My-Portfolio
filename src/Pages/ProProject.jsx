import Footer from "../Components/Footer";
import "./ProProject.css";
import whireframe_P1 from "../assets/image/whireframe-lesrecetteswild.png";
import maquette_P1 from "../assets/image/maquette-lesrecetteswild.png";

function ProProject() {
  return (
    <div className="display-pro-project-page">
      <section className="section-title-project">
        <h1 className="title-pro-project">
          PROJECT 1 :
          <br />
          LES RECETTES WILD
        </h1>
      </section>
      <section className="section-presentation">
        <section className="section-introduction">
          <h2 className="title-introduction">INTRODUCTION</h2>
          <p>
            I PRESENT TO YOU MY FIRST MY FIRST WEBSITE PROJECT AFTER A MONTH OF
            TRAINING AS A WEB DEVELOPMENT STUDENT.
            <br />
            <br />
            THIS PROJECT WAS DEVELOPED IN 2 WEEKS BY 3 PEOPLE: EMMANUELLE
            CURIANT, MAXIME MAUFRONT AND MYSELF.
            <br />
            <br />
            THE OBJECTIVE OF THE PROJECT WAS TO DEVELOP TECHNICAL SKILLS ON
            HTML, CSS AND THE BASICS OF JAVASCRIPT.
          </p>
        </section>
        <section className="section-description">
          <h2 className="title-description">DESCRIPTION</h2>
          <p></p>
        </section>
      </section>
      <section>
        <h3>WHIREFRAME & MODELS</h3>
        <div className="display-image">
          <img src={whireframe_P1} alt="whireframe" />
          <img src={maquette_P1} alt="maquette" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProProject;
