import "./SliderProject.css";
import { Link } from "react-router-dom";
import Swipers from "./Swipers";

function SliderProject1() {
  return (
    <section className="display-slider">
      <h1 className="title-section-website">THE WEBSITE</h1>

    
        <Swipers />

      <section className="section-website-link">
        <p className="p-website-link">COME HAVE A LOOK ON THE WEBSITE :</p>
        <Link
          className="link-website"
          to="https://dezau1995.github.io/Les-recettes-Wild/"
          target="_blank"
        >
          CLICK HERE !
        </Link>
      </section>
    </section>
  );
}

export default SliderProject1;
