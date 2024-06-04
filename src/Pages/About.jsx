import Footer from "../Components/Footer";
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
    <div className="body-about">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="header">
        <section className="section-header-about">
          <h1 className="header-about">A LITTLE FEW THINGS ABOUT ME</h1>
        </section>
      </div>
      <section className="section-image-profile">
        <img src={image_one} alt="image-profile" className="image-profile" />
        <img src={image_two} alt="image-profile" className="image-profile" />
      </section>
      <section className="section-boxes-information">
        <section className="section-infos">
          <div className="profile-container">
            <h2 className="title-infos">WHO AM I ?</h2>
            <p>
              I’M 28, I’M FROM CAEN (IN NORMANDY) BUT I LIVE IN PARIS SINCE I'M
              9 YEARS OLD.
              <br />
              <br />
              I'VE STUDIED ART, I WAS IN ART PREPARATORY CLASS AND I COULD HAVE
              CONTINUED MY STUDIES IN GRAPHIC DESIGN, BUT I STARTED WORKING AS A
              SALESWOMAN. SINCE THEN I WORKED IN DIFFERENT SHOP AS A SALER, THEN
              I EVOLVED AS AN ASSISTANT MANAGER.
              <br />
              <br />
              AFTER A FEW YEARS IN STORES, I DECIDED TO SEEK MY WAY AND DO A
              SKILLS ASSESSMENT. I QUICKLY FOUND THE PATH TO WEB DEVELOPMENT,
              THEN DECIDED TO START A PROFESSIONAL FORMATION TO BECOME ONE. (I'M
              STILL IN THIS BOOTCAMP)
            </p>
          </div>
          <div className="profile-container">
            <h2 className="title-infos">FUN FACTS</h2>
            <p>
              I’D LIKE TO BE TATTOOED FROM HEAD TO TOE.
              <br />
              <br />
              I’M A HUGE FAN OF SHARK, I HAVE ALREADY SWIN WITH SHARK AND ONCE
              WITH A WHITE SHARK (IN A CAGE OF COURSE).
            </p>
          </div>
        </section>
        <div className="description-about">
          <section className="section-description-about">
            <h2 className="title-description-about">DESCRIPTION</h2>
            <p>
              I CHOOSED TO LEARN JAVASCRIPT IN FIRST PROGRAMMING LANGUAGE BUT
              ALL WEB & MOBILE TECHNOLOGIES INTEREST ME.
              <br />
              <br />I DAILY USE VISUAL STUDIO CODE TO CODE, I ALSO USE FIGMA ON
              EVERY PROJECT TO CREATE THE DESIGN CONCEPTION OF WEBSITE OR
              APPLICATION. I HAVE TO USE MIRO AND TRELLO TO PUT INTO PRACTICE
              AGILES METHODOLOGIES, I ESPECIALLY LEARN THE SCRUM METHODE.
              <br />
              <br />I CODE WITH THE PROGRAMMATION LANGUAGE JAVASCRIPT, I
              ACQUIRED EXPERIENCE FOR THE DEVELOPMENT OF DYNAMIC USER INTERFACES
              WITH REACT.JS.
              <br />
              <br />I MASTER THE NODE.JS AND EXPRESS.JS FRAMEWORKS AND I HAVE
              SQL SKILLS.
            </p>
          </section>
        </div>
      </section>
      <div className="web-skills">
        <section className="section-web-skills">
          <h2 className="title-web-skills">WEB SKILLS</h2>
          <div className="display-subtitle">
            <div className="display-skills">
              <p className="subtitle-web-skills">LANGUAGES :</p>
              <p className="skills-dev-web">JAVASCRIPT - HTML - CSS - SQL</p>
            </div>
            <div className="display-skills">
              <p className="subtitle-web-skills">FRAMEWORKS :</p>
              <p className="skills-dev-web">REACT - NODE.JS - EXPRESS.JS</p>
            </div>
            <div className="display-skills">
              <p className="subtitle-web-skills">PLATEFORMS :</p>
              <p className="skills-dev-web">GITHUB - MySQL - FIGMA</p>
            </div>
            <div className="display-skills">
              <p className="subtitle-web-skills">AGILE METHODOLOGIES </p>
              <p className="skills-dev-web">(SCRUM)</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
