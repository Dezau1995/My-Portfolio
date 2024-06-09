import "./SliderProject.css";
import { Link } from "react-router-dom";
import SwiperWorkshop from "./SwiperWorkshop";

const SliderWorkshop = () => {
  return (
    <section className="display-slider">
      <h1 className="title-section-website">THE WEBSITE</h1>
      <SwiperWorkshop />
      <section className="section-website-link">
        <p className="p-website-link">COME HAVE A LOOK ON THE WEBSITE :</p>
        <Link
          className="link-website"
          to="https://rick-morty-nine-delta.vercel.app/"
          target="_blank"
        >
          CLICK HERE !
        </Link>
      </section>
    </section>
  );
};

export default SliderWorkshop;
