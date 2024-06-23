import rr_accueil from "../assets/image/picture-rr/rr-accueil.png"
import rr_instruction from "../assets/image/picture-rr/rr-instruction.png"
import rr_instruction_2 from "../assets/image/picture-rr/rr-instruction-2.png"
import rr_jeu_solo from "../assets/image/picture-rr/rr-jeu-solo.png"
import rr_jeu_solo_2 from "../assets/image/picture-rr/rr-jeu-solo-2.png"
import rr_multi_add from "../assets/image/picture-rr/rr-multi-add.png"
import rr_multi from "../assets/image/picture-rr/rr-multi.png"
import rr_multi_jeu from "../assets/image/picture-rr/rr-multi-jeu.png"
import rr_multi_jeu_2 from "../assets/image/picture-rr/rr-multi-jeu-2.png"
import rr_multi_jeu_3 from "../assets/image/picture-rr/rr-multi-jeu-3.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swipers.css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SwiperHackathon1(){
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
              src={rr_accueil}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={rr_instruction}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={rr_instruction_2}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={rr_jeu_solo}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={rr_jeu_solo_2}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={rr_multi}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={rr_multi_add}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={rr_multi_jeu}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
            </SwiperSlide>
          <SwiperSlide>
            <img
              src={rr_multi_jeu_2}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
            </SwiperSlide>
          <SwiperSlide>
            <img
              src={rr_multi_jeu_3}
              alt="picture-rigol'app"
              className="picture-slider-swiper"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    );
}

export default SwiperHackathon1;