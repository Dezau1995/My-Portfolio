import "../Components/ProProject.css";
import maquette_rr from "../assets/image/picture-rr/maquette-rr.png";
import maquette_rr_2 from "../assets/image/picture-rr/maquette-rr-2.png";
import Footer from "../Components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import SliderHackathon1 from "../Components/SliderHackathon1";

function Hackathon1() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <section className="display-pro-project-page">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <section className="section-title-project">
          <h1 className="title-pro-project">
            HACKATHON
            <br />
            RIGOL'APP
          </h1>
        </section>
        <section className="section-presentation">
          <section className="section-introduction">
            <h2 className="title-introduction">INTRODUCTION</h2>
            <p className="paragraph-project">
              I PRESENT TO YOU MY FIRST WEBSITE PROJECT AFTER A MONTH OF
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
          <h3 className="title-section-whireframe">MODELS</h3>
          <div className="display-image">
            <img
              src={maquette_rr}
              alt="whireframe"
              className="picture-whireframe"
            />
            <img src={maquette_rr_2} alt="models" className="picture-models" />
          </div>
        </section>
        <SliderHackathon1 />
        <Footer />
      </section>
    </div>
  );
}

export default Hackathon1;
