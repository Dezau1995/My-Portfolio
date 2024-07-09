import "./SliderProject.css";
import { Link } from "react-router-dom";
import SwiperHackathon1 from "./SwiperHackathon";

function SliderHackathon1(){
    return (
        <section className="display-slider">
        <h1 className="title-section-website">Petit coup d'oeil sur la réalisation</h1>
        <SwiperHackathon1 />
        <section className="section-website-link">
          <p className="p-website-link">Venez voir l'application juste ici :</p>
          <Link
            className="link-website"
            to="https://rigol-app-three.vercel.app/"
            target="_blank"
          >
            Rigol'App!
          </Link>
        </section>
      </section>
    );
}

export default SliderHackathon1;