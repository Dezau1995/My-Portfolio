import { motion, useScroll, useSpring } from "framer-motion";
import aboutImageProfil from "../assets/image/image-profil.png";
import NavBar from "../Components/NavBar";
import "./Home.css";

function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="home-display">
      <div className="nav-bar-home">
      <div className="title-name">
        <h1>AUDE SEDILLO</h1>
      </div>
        <NavBar/>
        </div>
      <div className="header-job">
        <h1 className="text-decoration">
          WEB DEVELOPER FULLSTACK
          <br /> JUNIOR
        </h1>
      </div>
      <div className="description-job">
        <p>
          Looking for a work-study program as a front-end, back-end or
          full-stack developer
        </p>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
   
      <section className="section-image-profile">
        <img
          src={aboutImageProfil}
          alt="image-profile"
          className="image-profile"
        />
      </section>
      <section className="section-boxes-information">
        <section className="section-infos">
          <div className="who-container">
            <h2 className="title-infos">WHO AM I ?</h2>
            <p>
              I’M 28, I’M FROM CAEN (IN NORMANDY) BUT I LIVE IN PARIS SINCE 20
              YEARS NOW.
            </p>
          </div>
          <div className="fun-facts-container">
            <h2 className="title-infos">FUN FACTS</h2>
            <p>
              I’D LIKE TO BE TATTOOED FROM HEAD TO TOE
              <br />
              (IT’S ALMOST DONE).
              <br />
              <br />
              I’M A HUGE FAN OF SHARK, I HAVE ALREADY SWIN WITH SHARK AND ONCE
              WITH A WHITE SHARK (IN A CAGE OF COURSE).
            </p>
          </div>
        </section>
        <section className="section-description-about">
          <h2 className="title-description-about">DESCRIPTION</h2>
          <p>
            I'VE STUDIED ART, I WAS IN ART PREPARATORY CLASS AND I COULD HAVE
            CONTINUED MY STUDIES IN GRAPHIC DESIGN, BUT I STARTED WORKING AS A
            SALESWOMAN. SINCE THEN I WORKED IN DIFFERENT SHOP AS A SALER, THEN I
            EVOLVED AS AN ASSISTANT MANAGER.
            <br />
            <br />
            AFTER A FEW YEARS IN STORES, I DECIDED TO SEEK MY WAY AND DO A
            SKILLS ASSESSMENT. I QUICKLY FOUND THE PATH TO WEB DEVELOPMENT, THEN
            DECIDED TO START A PROFESSIONAL FORMATION TO BECOME ONE. (I'M STILL
            IN THIS BOOTCAMP)
            <br />
            <br />I CHOOSED TO LEARN JAVASCRIPT IN FIRST PROGRAMMING LANGUAGE
            BUT ALL WEB & MOBILE TECHNOLOGIES INTEREST ME.
          </p>
        </section>
      </section>
      <section className="section-web-skills">
        <h2 className="title-web-skills">WEB SKILLS</h2>
        <div className="display-subtitle">
          <div className="display-skills">
            <p className="subtitle-web-skills">LANGUAGES :</p>
            <p>JAVASCRIPT - HTML - CSS - SQL</p>
          </div>
          <div className="display-skills">
            <p className="subtitle-web-skills">FRAMEWORKS :</p>
            <p>REACT</p>
          </div>
          <div className="display-skills">
            <p className="subtitle-web-skills">PLATEFORMS :</p>
            <p>GITHUB - MySQL</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
