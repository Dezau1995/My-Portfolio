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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swipers.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SwiperP2() {
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
          {" "}
          <img
            src={ff_home}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={ff_search_bar}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ff_slider}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ff_categories}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ff_film_template}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={ff_trailer}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={ff_film_synopsis}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={ff_forum_home}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={ff_forum_film}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={ff_forum_comments}
            alt="picture-film-fusion"
            className="picture-slider-swiper"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default SwiperP2;
