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
          Workshop :
          <br />
          Rick & Morty
        </h1>
      </section>
      <section className="section-presentation">
        <section className="section-introduction-description">
          <h2 className="title-introduction">Introduction</h2>
          <p className="paragraph-project">
            Je voulais mettre en avant cet atelier car il m'a permis de
            pratiquer des compétences que je n'avais pas utilisées dans mes
            projets, comme la création d'un contexte.
          </p>
          <p className="paragraph-project">
            J'ai travaillé avec les méthodes map et filter, j'ai récupéré des
            API avec fetch et utilisé useContext. Le contexte est ici utile pour
            changer les thèmes (sombre ou clair).
          </p>
          <p className="paragraph-project">
            Je voulais m'amuser à recréer tout le design de ce projet avec CSS.
          </p>
        </section>
      </section>
      <SliderWorkshop />
    </main>
  );
}

export default Workshop;
