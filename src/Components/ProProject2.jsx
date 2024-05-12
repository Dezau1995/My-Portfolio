import "./ProProject.css";
import FooterProject from "./FooterProject";
import filmFusion_whireframe from "../assets/image/picture-ff/FilmFusion-Whireframe.png";
import filmFusion_Models from "../assets/image/picture-ff/FilmFusion-Models.png";
import logo_desktop from "../assets/image/picture-ff/Logo-Desktop.svg";
import logo_mobile from "../assets/image/picture-ff/Logo-Mobile.svg";
import SliderProject2 from "./SliderProject2";

function ProProject2() {
  return (
    <div className="display-pro-project-page">
      <section className="section-title-project">
        <h1 className="title-pro-project">
          PROJECT 2 :
          <br />
          FILM FUSION
        </h1>
      </section>
      <section className="section-presentation">
        <section className="section-introduction">
          <h2 className="title-introduction">INTRODUCTION</h2>
          <p className="paragraph-project">
            I PRESENT TO YOU MY SECOND WEBSITE PROJECT AFTER TWO MONTH OF
            TRAINING AS A WEB DEVELOPMENT STUDENT.
            <br />
            <br />
            THIS PROJECT WAS DEVELOPED IN 4 WEEKS BY 3 PEOPLE: MICKAEL
            BEAUGRAND, RYADH YOLDI AND MYSELF.
            <br />
            <br />
            THE OBJECTIVE WAS TO BUILD A WEBSITE USING THE FOLLOWING
            TECHNOLOGIES : HTML, CSS, REACT JS, AND FETCHING DATA FROM API.
          </p>
        </section>
        <section className="section-description-pro">
          <h2 className="title-description-pro-project">DESCRIPTION</h2>
          <p className="paragraph-project">
            WE DID A WEBSITE ABOUT MOVIES AND DECIDED TO STAND OUT BY SETTING UP
            A FORUM SECTION WHERE USERS AND GUESTS CAN DISCUSS AND CHAT TOGETHER
            TO FIND IDEAS OR JUST ABOUT THEIR PASSION.
          </p>
        </section>
      </section>
      <section className="section-whireframe-models">
        <h3 className="title-section-whireframe">WHIREFRAME & MODELS</h3>
        <div className="display-image">
          <img
            src={filmFusion_whireframe}
            alt="whireframe"
            className="picture-whireframe"
          />
          <img
            src={filmFusion_Models}
            alt="models"
            className="picture-models"
          />
          <section className="section-display-logo">
            <img src={logo_desktop} alt="logo-desktop" className="logo-desktop"/>
            <img src={logo_mobile} alt="logo-mobile" className="logo-mobile" />
          </section>
        </div>
      </section>
      <SliderProject2 />
      <FooterProject />
    </div>
  );
}

export default ProProject2;
