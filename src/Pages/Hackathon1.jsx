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
          <section className="section-introduction-description">
            <h2 className="title-introduction">INTRODUCTION</h2>
            <p className="paragraph-project">
              LET ME INTRODUCE YOU TO MY FIRST HACKATHON AFTER A TWO MOUNTH OF
              TRAINING AS A WEB DEVELOPMENT STUDENT. DEVELOPED IN 36 HOURS BY 5
              PEOPLE: COLINE GROSSO, MAXIME MAUFRONT, YANN LAHELLEC, RYADH YOLDI
              AND MYSELF.
            </p>
            <p className="paragraph-project">
              THE THEME OF THE HACKATHON WAS "DECONNEXION AND NATURE", THE
              OBJECTIF WAS TO BUILD A WEBSITE OR WEB MOBILE APPLICATION BASED ON
              ANY IDEA WE CAN HAVE AROUND THE SUBJECT.
            </p>
            <p className="paragraph-project">
              WE WANT TO CREATE SOMETHING FUNNY AND ON A SUBJECT WE USUALLY HAVE
              FUN ON IT. BUT WITH DETERMINATION, PROVE THAT WE CAN BUILD A
              SERIOUS PROJECT.
            </p>
          </section>
          <section className="section-introduction-description">
            <h2 className="title-description-pro-project">DESCRIPTION</h2>
            <p className="paragraph-project">
              WE HAD THE IDEA OF MAKING A APPLICATION BASED ON SOMETHING CALLED
              IN FRENCH "YOGA DU RIRE", "LAUGHTER YOGA". THE "YOGA DU RIRE"
              REDUCE STRESS, STRENGTHEN THE IMMUNE SYSTEM AND IMPROVED THE MOOD.
              <br />
              <br />
              WE WANTED TO PROMOTE MENTAL AND PHYSICAL WELL-BEING SO WE CREATED
              THIS APPLICATION TO ALLOW USERS TO HAVE EASIESTLY ACCES AND MAKE
              IT MORE FLEXIBLE FOR DAILY PRACTICE.
              <br />
              <br />
              LAUGHT IS OFTEN NEGLECT EVERYDAY, WITH THIS APPLICATION WE OFFERT
              A SIMPLE WAY TO INTEGRATE IT IN DAILY ROUTING.
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
