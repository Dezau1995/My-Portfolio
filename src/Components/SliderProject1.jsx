import lrw_home from "../assets/image/picture-lrw/LRW-Home.png";
import lrw_sidebar from "../assets/image/picture-lrw/LRW-SideBar.png";
import lrw_caroussel from "../assets/image/picture-lrw/LRW-Caroussel.png";
import lrw_semainierheader from "../assets/image/picture-lrw/LRW-Semainier-Header.png";
import lrw_semainierbody from "../assets/image/picture-lrw/LRW-Semainier-body.png";
import lrw_recipeheader from "../assets/image/picture-lrw/LRW-Recipe-Header.png";
import lrw_recipebody from "../assets/image/picture-lrw/LRW-recipe-body.png";
import lrw_recipecomments from "../assets/image/picture-lrw/LRW-recipe-comments.png";

import "./SliderProject.css";
import { Link } from "react-router-dom";

function SliderProject1() {
  return (
    <section className="display-slider">
      <h1 className="title-section-website">THE WEBSITE</h1>
      <section className="section-slider">
        <img
          src={lrw_home}
          alt="picture-les-recettes-wild"
          className="picture-slider"
        />
        <img
          src={lrw_sidebar}
          alt="picture-les-recettes-wild"
          className="picture-slider"
        />
        <img
          src={lrw_caroussel}
          alt="picture-les-recettes-wild"
          className="picture-slider"
        />
        <img
          src={lrw_semainierheader}
          alt="picture-les-recettes-wild"
          className="picture-slider"
        />
        <img
          src={lrw_semainierbody}
          alt="picture-les-recettes-wild"
          className="picture-slider"
        />
        <img
          src={lrw_recipeheader}
          alt="picture-les-recettes-wild"
          className="picture-slider"
        />
        <img
          src={lrw_recipebody}
          alt="picture-les-recettes-wild"
          className="picture-slider"
        />
        <img
          src={lrw_recipecomments}
          alt="picture-les-recettes-wild"
          className="picture-slider"
        />
      </section>
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
