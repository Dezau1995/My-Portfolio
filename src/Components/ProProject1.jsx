import "./ProProject.css";
import whireframe_P1 from "../assets/image/picture-lrw/whireframe-lesrecetteswild.png";
import maquette_P1 from "../assets/image/picture-lrw/maquette-lesrecetteswild.png";
import Footer from "./Footer";
import SliderProject1 from "./SliderProject1";
import { motion, useScroll, useSpring } from "framer-motion";

function ProProject1() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="display-pro-project-page">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <section className="section-title-project">
        <h1 className="title-pro-project">
          PROJECT :
          <br />
          LES RECETTES WILD
        </h1>
      </section>
      <section className="section-presentation">
        <section className="section-introduction-description">
          <h2 className="title-introduction">INTRODUCTION</h2>
          <p className="paragraph-project">
            I PRESENT TO YOU MY FIRST WEBSITE PROJECT AFTER A MONTH OF TRAINING
            AS A WEB DEVELOPMENT STUDENT.
          </p>
          <p className="paragraph-project">
            THIS PROJECT WAS DEVELOPED IN 2 WEEKS BY 3 PEOPLE: EMMANUELLE
            CURIANT, MAXIME MAUFRONT AND MYSELF.
          </p>
          <p className="paragraph-project">
            THE OBJECTIVE OF THE PROJECT WAS TO DEVELOP TECHNICAL SKILLS ON
            HTML, CSS AND THE BASICS OF JAVASCRIPT.
          </p>
        </section>
        <section className="section-introduction-description">
          <h2 className="title-description-pro-project">DESCRIPTION</h2>
          <p className="paragraph-project">
            WE HAD THE IDEA OF MAKING A RECIPE SITE TO HELP THE WILDERS (STUDENT
            AND PEOPLE AT THE WILD CODE SCHOOL) TO PREPARE THEIR LUNCH MORE
            OFTEN.
          </p>
          <p className="paragraph-project">BECAUSE OF LACK OF IDEA, TIME AND DESIRE.</p>
          <p className="paragraph-project">HOW ? WITH SIMPLE, FUN AND ECONOMIC RECIPES.</p>
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
      <SliderProject1 />
      <Footer />
    </main>
  );
}

export default ProProject1;
