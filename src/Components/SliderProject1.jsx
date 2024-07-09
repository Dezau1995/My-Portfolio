import "./SliderProject.css";
import { Link } from "react-router-dom";
import SwiperP1 from "./SwiperP1";

function SliderProject1() {
  return (
    <section className="display-slider">
      <h1 className="title-section-website">Petit coup d'oeil sur la réalisation</h1>
      <SwiperP1 />
      <section className="section-website-link">
        <p className="p-website-link">Venez visiter le site :</p>
        <Link
          className="link-website"
          to="https://dezau1995.github.io/Les-recettes-Wild/"
          target="_blank"
        >
          Les Recettes Wild
        </Link>
      </section>
    </section>
  );
}

export default SliderProject1;
