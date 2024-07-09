import "../Components/ProProject.css";
import maquette_rr from "../assets/image/picture-rr/maquette-rr.png";
import maquette_rr_2 from "../assets/image/picture-rr/maquette-rr-2.png";
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
    <main>
      <section className="display-pro-project-page">
        <motion.div className="progress-bar" style={{ scaleX }} />
        <section className="section-title-project">
          <h1 className="title-pro-project">
            Hackathon
            <br />
            Rigol'App
          </h1>
        </section>
        <section className="section-presentation">
          <section className="section-introduction-description">
            <h2 className="title-introduction">Introduction</h2>
            <p className="paragraph-project">
              Laissez moi vous présenter mon premier hackathon après deux mois
              de formation en tant qu'étudiante en développement web. Développé
              en 36 heures par 5 personnes : Coline Grosso, Maxime Maufront,
              Yann Lahellec, Ryadh Yoldi et moi-même.
            </p>
            <p className="paragraph-project">
              Le thème du hackathon était "Déconnexion et Nature". L'objectif
              était de créer un site web ou une application web mobile basé sur
              n'importe quelle idée que nous pouvions avoir autour de ce sujet.
            </p>
            <p className="paragraph-project">
              Nous voulions créer quelque chose de drôle et sur un sujet avec
              lequel nous nous amusons habituellement. Mais avec détermination,
              nous voulions aussi prouver que nous pouvions réaliser un projet
              sérieux.
            </p>
          </section>
          <section className="section-introduction-description">
            <h2 className="title-description-pro-project">Description</h2>
            <p className="paragraph-project">
              Nous avons eu l'idée de créer une application basée sur le Yoga du
              Rire. Le Yoga du Rire réduit le stress, renforce le système
              immunitaire et améliore l'humeur.
              <br />
              <br />
              Nous voulions promouvoir le bien-être mental et physique, donc
              nous avons créé cette application pour permettre aux utilisateurs
              d'y accéder plus facilement et de rendre la pratique quotidienne
              plus flexible.
              <br />
              <br />
              Le rire est souvent négligé au quotidien. Avec cette application,
              nous offrons un moyen simple de l'intégrer dans la routine
              quotidienne.
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
      </section>
    </main>
  );
}

export default Hackathon1;
