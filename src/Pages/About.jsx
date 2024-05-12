import Footer from "../Components/Footer";
import "./About.css";
import aboutImageProfil from "../assets/image/image-profil.png";

function About() {
  return (
    <div className="body-about">
      <section className="section-header-about">
        <h1 className="header-about">A LITTLE FEW THINGS ABOUT ME</h1>
      </section>
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
            I STUDIES ART, I WAS IN ART PREPARATORY CLASS AND I COULD HAVE
            CONTINUED MY STUDIES IN GRAPHIC DESIGN, BUT I STARTED WORKING AS A
            SALESWOMAN. SINCE THEN I WAS WORKING IN DIFFERENT SHOP AS A SALER,
            THEN I EVOLVED AS AN ASSISTANT MANAGER.
            <br />
            <br />
            AFTER A FEW YEARS IN STORES, I DECIDED TO SEEK MY WAY AND DO A
            SKILLS ASSESSMENT. I QUICKLY FOUND THE PATH TO WEB DEVELOPMENT, THEN
            DECIDED TO START A PROFESSIONAL FORMATION TO BECOME ONE.
            <br />
            <br />
            NOW, I LOVE WHAT I DO AND I HOPE TO FIND A JOB TO CONTINUE EVERY DAY
            DOING WHAT I LOVE !
          </p>
        </section>
      </section>
      <section className="section-about-more">
        <button className="btn-more">MORE</button>
        <button className="btn-more">MORE</button>
        <button className="btn-more">MORE</button>
      </section>
      <Footer />
    </div>
  );
}

export default About;
