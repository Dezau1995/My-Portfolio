import "./SliderProject.css";
import { Link } from "react-router-dom";
import SwiperHackathon1 from "./SwiperHackathon";

function SliderHackathon1(){
    return (
        <section className="display-slider">
        <h1 className="title-section-website">THE WEBSITE</h1>
        <SwiperHackathon1 />
        <section className="section-website-link">
          <p className="p-website-link">COME HAVE A LOOK ON THE WEBSITE :</p>
          <Link
            className="link-website"
            to="https://rigol-app-three.vercel.app/"
            target="_blank"
          >
            CLICK HERE !
          </Link>
        </section>
      </section>
    );
}

export default SliderHackathon1;