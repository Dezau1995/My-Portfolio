import "./SliderProject.css";
import "./SliderProject.css";
import { Link } from "react-router-dom";
import SwiperP2 from "./SwiperP2";

function SliderProject1() {
  return (
    <section className="display-slider">
      <h1 className="title-section-website">Petit coup d'oeil sur la réalisation</h1>
      <SwiperP2/>
      <section className="section-website-link">
        <p className="p-website-link">Venez visiter le site :</p>
        <Link
          className="link-website"
          to="https://film-fusion-three.vercel.app/"
          target="_blank"
        >
          Film Fusion !
        </Link>
      </section>
    </section>
  );
}

export default SliderProject1;
