// import dataPro from "../data/proproject"
import whireframe_P1 from "../assets/image/picture-lrw/whireframe-lesrecetteswild.png";
import maquette_P1 from "../assets/image/picture-lrw/maquette-lesrecetteswild.png";
import Footer from "./Footer";
import SliderProject1 from "./SliderProject1";
import { motion, useScroll, useSpring } from "framer-motion";
import "./ProProject.css";

function Workshop() {
  // const data = dataPro;
  // console.log(data)

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
          WORKSHOP :
          <br />
          RICK & MORTY
        </h1>
      </section>
      <section className="section-presentation">
        <section className="section-introduction">
          <h2 className="title-introduction">INTRODUCTION</h2>
          <p className="paragraph-project">
            IT'S WAS A WORKSHOP TO PRACTICE FETCHING API, USE MAP AND FILTER
            METHODS.
            <br />
            <br />I REDESIGN ALL THE CSS SECTION TO MAKE SOMETHING COOL AND LOOK
            LIKE THE UNIVERSE OF THE TV SHOW TO DEVELOP MY CSS SKILLS.
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
      <Footer />
    </section>
  );
}

export default Workshop;
