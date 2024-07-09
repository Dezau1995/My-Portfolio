import "./About.css";
import image_one from "../assets/image/IMG_3371.jpg";
import image_two from "../assets/image/IMG_3576 2.jpg";

import { motion, useScroll, useSpring } from "framer-motion";

function About() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="body-about">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="header">
        <section className="section-header-about">
          <h1 className="header-about">À propos</h1>
        </section>
      </div>
      <section className="section-image-profile">
        <img src={image_one} alt="image-profile" className="image-profile" />
        <img src={image_two} alt="image-profile" className="image-profile" />
      </section>
      <section className="section-boxes-information">
        <section className="section-infos">
          <div className="profile-container">
            <h2 className="title-infos">Qui suis-je ?</h2>
            <p className="paragraph-about">
              Je suis une jeune femme de 28 ans originaire de Caen, en
              Normandie.
            </p>
            <p className="paragraph-about">
              J'ai étudié l'art et suivi une classe préparatoire artistique.
              Bien que j'aurais pu continuer mes études en design graphique,
              j'ai choisi de débuter ma carrière en tant que vendeuse. Depuis,
              j'ai acquis de l'expérience dans plusieurs magasins avant
              d'évoluer au poste d'assistante responsable chez Carhartt.
            </p>
            <p className="paragraph-about">
              Après plusieurs années dans le secteur de la vente, j'ai entrepris
              une évaluation de mes compétences pour déterminer ma voie
              professionnelle. Ce processus m'a rapidement dirigée vers le
              développement web, et j'ai ensuite intégré une formation
              spécialisée dans ce domaine. Je suis actuellement engagée dans un
              bootcamp pour approfondir mes connaissances.
            </p>
            <p className="paragraph-about">
              * P.S. : Le logo "DEZAU" dans ma barre de navigation est dérivé de
              mon surnom. Il s'agit de mon prénom inversé, avec l'ajout d'un Z
              pour en faciliter la prononciation.
            </p>
          </div>
          <div className="profile-container">
            <h2 className="title-infos">Fun Facts</h2>
            <p className="paragraph-about">
              Je suis tellement passionnée par les tatouages que j'ai voyagé,
              seule, à Miami à l'âge de 19 ans pour faire un apprentissage et
              perfectionner mes compétences pour devenir artiste tatoueuse.
            </p>
            <p className="paragraph-about">
              Je suis une grande fan des requins ! Je sais que c'est bizarre,
              mais je les trouve magnifiques. J'ai déjà nagé avec des requins
              gris à Hawaï et une fois avec un grand requin blanc en Afrique du
              Sud (toujours dans une cage bien sûr). C'était incroyable !
            </p>
          </div>
        </section>
        <div className="description-about">
          <section className="section-description-about">
            <h2 className="title-description-about">Description</h2>
            <p className="paragraph-about">
              J'ai choisi d'apprendre JavaScript comme premier langage de
              programmation, mais toutes les technologies m'intéressent.
            </p>
            <p className="paragraph-about">
              Chaque jour, j'utilise Visual Studio Code pour travailler et
              j'utilise Figma sur chaque projet pour concevoir le design des
              sites web ou des applications. En outre, j'intègre les
              méthodologies agiles, notamment la méthode Scrum, en utilisant
              Miro et Trello.
            </p>
            <p className="paragraph-about">
              J'ai acquis de l'expérience dans le développement d'interfaces
              utilisateur dynamiques avec React.js.
            </p>
            <p className="paragraph-about">
              Je suis compétente dans l'utilisation de Node.js ainsi que
              d'Express.js, et je possède des compétences approfondies en
              SQL/MySQL.
            </p>
          </section>
        </div>
      </section>
      <section className="web-skills">
        <section className="section-web-skills">
          <h2 className="title-web-skills">Technologies et Outils</h2>
          <div className="display-subtitle">
            <div className="display-skills">
              <p className="subtitle-web-skills">Langages :</p>
              <p className="skills-dev-web">Javascript - HTML - CSS - SQL</p>
            </div>
            <div className="display-skills">
              <p className="subtitle-web-skills">Frameworks :</p>
              <p className="skills-dev-web">React.js - Node.js - Express;js</p>
            </div>
            <div className="display-skills">
              <p className="subtitle-web-skills">Plateformes :</p>
              <p className="skills-dev-web">Git/GitHub - MySQL - Figma</p>
            </div>
            <div className="display-skills">
              <p className="subtitle-web-skills">Méthodologies Agiles </p>
              <p className="skills-dev-web">Scrum</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default About;
