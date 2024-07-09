import "./ProProject.css";
import Footer from "./Footer";
import filmFusion_whireframe from "../assets/image/picture-ff/FilmFusion-Whireframe.png";
import filmFusion_Models from "../assets/image/picture-ff/FilmFusion-Models.png";
import logo_desktop from "../assets/image/picture-ff/Logo-Desktop.svg";
import logo_mobile from "../assets/image/picture-ff/Logo-Mobile.svg";
import SliderProject2 from "./SliderProject2";
import { motion, useScroll, useSpring } from "framer-motion";

function ProProject2() {
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
          Projet :
          <br />
          Film Fusion
        </h1>
      </section>
      <section className="section-presentation">
        <section className="section-introduction-description">
          <h2 className="title-introduction">Introduction</h2>
          <p className="paragraph-project">
            Voici mon deuxième projet de site web après deux mois de formation
            en tant qu'étudiante en développement web.
          </p>
          <p className="paragraph-project">
            Ce projet a été développé en 4 semaines par 3 personnes : Mickaël
            Beaugrand, Ryadh Yoldi et moi-même.
          </p>
          <p className="paragraph-project">
            L'objectif était de construire un site web en utilisant les
            technologies suivantes : HTML, CSS, React.js, et de récupérer des
            données à partir d'une API.
          </p>
        </section>
        <section className="section-introduction-description">
          <h2 className="title-description-pro-project">Description</h2>
          <p className="paragraph-project">
            Nous avons réalisé un site web sur les films et avons décidé de nous
            démarquer en mettant en place une section forum où les utilisateurs
            et les invités peuvent discuter et échanger des idées, ou simplement
            parler de leur passion.
          </p>
        </section>
      </section>
      <section className="section-wireframe-models">
        <h3 className="title-section-wireframe">Wireframe & Maquettes</h3>
        <div className="display-image">
          <img
            src={filmFusion_whireframe}
            alt="whireframe"
            className="picture-wireframe"
          />
          <img
            src={filmFusion_Models}
            alt="models"
            className="picture-models"
          />
          <section className="section-display-logo">
            <img
              src={logo_desktop}
              alt="logo-desktop"
              className="logo-desktop"
            />
            <img src={logo_mobile} alt="logo-mobile" className="logo-mobile" />
          </section>
        </div>
      </section>
      <SliderProject2 />
    </main>
  );
}

export default ProProject2;
