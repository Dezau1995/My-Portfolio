import lrw_home from "../assets/image/picture-lrw/LRW-Home.png";
import lrw_sidebar from "../assets/image/picture-lrw/LRW-SideBar.png";
import lrw_caroussel from "../assets/image/picture-lrw/LRW-Caroussel.png";
import lrw_semainierheader from "../assets/image/picture-lrw/LRW-Semainier-Header.png";
import lrw_semainierbody from "../assets/image/picture-lrw/LRW-Semainier-body.png";
import lrw_recipeheader from "../assets/image/picture-lrw/LRW-Recipe-Header.png";
import lrw_recipebody from "../assets/image/picture-lrw/LRW-recipe-body.png";
import lrw_recipecomments from "../assets/image/picture-lrw/LRW-recipe-comments.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swipers.css';
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


function SwiperP1() {
    return (
        <div className="list-swiper">
      <Swiper
      modules={[Navigation]}
      navigation={true}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
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
      <SwiperSlide><img
          src={lrw_home}
          alt="picture-les-recettes-wild"
          className="picture-slider-swiper"
        /></SwiperSlide>
      <SwiperSlide> <img
          src={lrw_sidebar}
          alt="picture-les-recettes-wild"
          className="picture-slider-swiper"
        /></SwiperSlide>
      <SwiperSlide> <img
          src={lrw_caroussel}
          alt="picture-les-recettes-wild"
          className="picture-slider-swiper"
        /></SwiperSlide>
      <SwiperSlide> <img
          src={lrw_semainierheader}
          alt="picture-les-recettes-wild"
          className="picture-slider-swiper"
        /></SwiperSlide>
      <SwiperSlide><img
          src={lrw_semainierbody}
          alt="picture-les-recettes-wild"
          className="picture-slider-swiper"
        /></SwiperSlide>
      <SwiperSlide><img
          src={lrw_recipeheader}
          alt="picture-les-recettes-wild"
          className="picture-slider-swiper"
        /></SwiperSlide>
      <SwiperSlide><img
          src={lrw_recipebody}
          alt="picture-les-recettes-wild"
          className="picture-slider-swiper"
        /></SwiperSlide>
      <SwiperSlide><img
          src={lrw_recipecomments}
          alt="picture-les-recettes-wild"
          className="picture-slider-swiper"
        /></SwiperSlide>

    </Swiper>
        </div>
    );
}

export default SwiperP1;