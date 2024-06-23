import accueil_dark from "../assets/image/rick-morty/accueil-dark.png";
import accueil_light from "../assets/image/rick-morty/accueil-light.png";
import card_dark from "../assets/image/rick-morty/card-dark.png";
import card_light from "../assets/image/rick-morty/card-light.png";
import searchbar_dark from "../assets/image/rick-morty/search-bar-dark.png";
import searchbar_light from "../assets/image/rick-morty/search-bar-light.png";
import connexion_dark from "../assets/image/rick-morty/connexion-dark.png";
import connexion_light from "../assets/image/rick-morty/connexion-light.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swipers.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SwiperWorkshop() {
  return (
    <section className="list-swiper">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          1200: { slidesPerView: 1, spaceBetween: 20 },
          770: { slidesPerView: 1, spaceBetween: 20 },
          425: { slidesPerView: 1, spaceBetween: 20 },
          320: { slidesPerView: 1, spaceBetween: 20 },
          280: { slidesPerView: 1, spaceBetween: 20 },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={accueil_dark}
            alt="picture-rigol'app"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={accueil_light}
            alt="picture-rigol'app"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={card_dark}
            alt="picture-rigol'app"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={card_light}
            alt="picture-rigol'app"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={searchbar_dark}
            alt="picture-rigol'app"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={searchbar_light}
            alt="picture-rigol'app"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={connexion_dark}
            alt="picture-rigol'app"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={connexion_light}
            alt="picture-rigol'app"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default SwiperWorkshop;
