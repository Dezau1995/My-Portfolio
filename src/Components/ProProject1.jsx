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
          Projet :
          <br />
          Les Recettes Wild
        </h1>
      </section>
      <section className="section-presentation">
        <section className="section-introduction-description">
          <h2 className="title-introduction">Introduction</h2>
          <p className="paragraph-project">
            Je vous présente mon premier projet de site web après un mois de
            formation en tant qu'étudiante en développement web.
          </p>
          <p className="paragraph-project">
            Ce projet a été développé en 2 semaines par 3 personnes : Emmanuelle
            Curiant, Maxime Maufront et moi-même.
          </p>
          <p className="paragraph-project">
            L'objectif du projet était de développer des compétences techniques
            en HTML, CSS et les bases de JavaScript.
          </p>
        </section>
        <section className="section-introduction-description">
          <h2 className="title-description-pro-project">Description</h2>
          <p className="paragraph-project">
            Nous avons eu l'idée de créer un site de recettes pour aider les
            Wilders (étudiants et personnes à la Wild Code School) à préparer
            leur déjeuner plus facilement.
          </p>
          <p className="paragraph-project">
            En raison d'un manque d'idées, de temps et de motivation.
          </p>
          <p className="paragraph-project">
            Comment ? Avec des recettes simples, amusantes et économiques.
          </p>
        </section>
      </section>
      <section className="section-wireframe-models">
        <h3 className="title-section-wireframe">Wireframes & Maquettes</h3>
        <div className="display-image">
          <img
            src={whireframe_P1}
            alt="whireframe"
            className="picture-wireframe"
          />
          <img src={maquette_P1} alt="models" className="picture-models" />
        </div>
      </section>
      <SliderProject1 />
    </main>
  );
}

export default ProProject1;
