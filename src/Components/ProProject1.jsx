import "./ProProject.css";
import whireframe_P1 from "../assets/image/picture-lrw/whireframe-lesrecetteswild.png";
import maquette_P1 from "../assets/image/picture-lrw/maquette-lesrecetteswild.png";
import FooterProject from "./FooterProject";
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
    <section className="display-pro-project-page">
      <motion.div className="progress-bar" style={{ scaleX }} />
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
          <p className="paragraph-project">
            I PRESENT TO YOU MY FIRST WEBSITE PROJECT AFTER A MONTH OF TRAINING
            AS A WEB DEVELOPMENT STUDENT.
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
          <p className="paragraph-project">
            WE HAD THE IDEA OF MAKING A RECIPE SITE TO HELP THE WILDERS (THE
            PEOPLE AT THE WILD CODE SCHOOL) TO PREPARE THEIR LUNCH MORE OFTEN.
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
      <SliderProject1 />
      <FooterProject />
    </section>
  );
}

export default ProProject1;
