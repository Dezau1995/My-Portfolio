import ff_home from "../assets/image/picture-ff/ff-home-header.png";
import ff_search_bar from "../assets/image/picture-ff/ff-search-bar.png";
import ff_slider from "../assets/image/picture-ff/ff-home-slider.png";
import ff_categories from "../assets/image/picture-ff/ff-categories.png";
import ff_film_template from "../assets/image/picture-ff/ff-film-template.png";
import ff_trailer from "../assets/image/picture-ff/ff-trailer.png";
import ff_film_synopsis from "../assets/image/picture-ff/ff-film-synopsis.png";
import ff_forum_home from "../assets/image/picture-ff/ff-forumhome.png";
import ff_forum_film from "../assets/image/picture-ff/ff-forum-film.png";
import ff_forum_comments from "../assets/image/picture-ff/ff-forum-comments.png";
import "./SliderProject.css";

import "./SliderProject.css";
import { Link } from "react-router-dom";

function SliderProject1() {
  return (
    <section className="display-slider">
      <h1 className="title-section-website">THE WEBSITE</h1>
      <section className="section-slider">
        <img
          src={ff_home}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_search_bar}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_slider}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_categories}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_film_template}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_trailer}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_film_synopsis}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_forum_home}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_forum_film}
          alt="picture-film-fusion"
          className="picture-slider"
        />
        <img
          src={ff_forum_comments}
          alt="picture-film-fusion"
          className="picture-slider"
        />
      </section>
      <section className="section-website-link">
        <p className="p-website-link">COME HAVE A LOOK ON THE WEBSITE :</p>
        <Link
          className="link-website"
          to="https://film-fusion-three.vercel.app/"
          target="_blank"
        >
          CLICK HERE !
        </Link>
      </section>
    </section>
  );
}

export default SliderProject1;
