import Footer from "./Footer";
import "./ProProject1.css";
import whireframe_P1 from "../assets/image/whireframe-lesrecetteswild.png";
import maquette_P1 from "../assets/image/maquette-lesrecetteswild.png";

function ProProject1() {
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
        <section className="section-description-pro">
          <h2 className="title-description-pro-project">DESCRIPTION</h2>
          <p>
            WE HAD THE IDEA OF MAKING A RECIPE SITE TO HELP THE WILDERS (THE
            PEOPLE AT THE WILD CODE SCHOOL).
            <br />
            <br />
            BECAUSE OF LACK OF IDEA, TIME AND DESIRE.
            <br />
            <br />
            HOW ? WITH SIMPLE, FUN AND ECONOMIC RECIPES.
          </p>
        </section>
      </section>
      <section className="section-whireframe-models">
        <h3 className="title-section-whireframe">WHIREFRAME & MODELS</h3>
        <div className="display-image">
          <img
            src={whireframe_P1}
            alt="whireframe"
            className="picture-whireframe"
          />
          <img src={maquette_P1} alt="models" className="picture-models" />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProProject1;
