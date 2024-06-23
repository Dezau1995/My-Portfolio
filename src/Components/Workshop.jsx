import Footer from "./Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import "./ProProject.css";
import SliderWorkshop from "./SliderWorkshop.jsx";

function Workshop() {
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
          WORKSHOP :
          <br />
          RICK & MORTY
        </h1>
      </section>
      <section className="section-presentation">
        <section className="section-introduction-description">
          <h2 className="title-introduction">INTRODUCTION</h2>
          <p className="paragraph-project">
            I WANTED TO HIGHLIGHT THIS WORKSHOP CAUSE IT WAS USEFUL TO PRACTICE
            SKILLS THAT I DIDN'T USED ON MY PROJECTS, LIKE CREATE A CONTEXT.
          </p>
          <p className="paragraph-project">
            I WORKED WITH MAP AND FILTER METHODS, FETCHING API AND USECONTEXT.
            CONTEXT HERE IS USEFUL TO CHANGE THEMES (DARK OR LIGHT).
          </p>
          <p className="paragraph-project">
            I WANTED TO HAVE FUN ON RECREATE ALL THE DESIGN OF THIS PROJECT WITH
            CSS.
          </p>
        </section>
      </section>
      <SliderWorkshop />
      <Footer />
    </main>
  );
}

export default Workshop;
