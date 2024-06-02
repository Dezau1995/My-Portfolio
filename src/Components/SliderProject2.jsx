import "./SliderProject.css";
import "./SliderProject.css";
import { Link } from "react-router-dom";
import SwiperP2 from "./SwiperP2";

function SliderProject1() {
  return (
    <section className="display-slider">
      <h1 className="title-section-website">THE WEBSITE</h1>
      <SwiperP2/>
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
