import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import gallery_img_1 from "./src/galery1.png";
import gallery_img_2 from "./src/galery2.png";
import gallery_img_3 from "./src/galery3.png";
import gallery_img_4 from "./src/galery4.png";

SwiperCore.use([Autoplay]);

const swiperOptions = {
  slidesPerView: 4,
  loop: true,
  pauseOnMouseEnter: true,
  speed: 6000,
  autoplay: {
    delay: 0,
    // disableOnInteraction: true,
  },
};

const Gallery = (props) => {
  return (
    <section className="gallery">
      <Swiper className="gallery__swiper" {...swiperOptions}>
        <SwiperSlide className="gallery__swiper-slide" key={1}>
          <picture className="gallery__swiper-slide-picture">
            <source media="(min-width: 0)" srcSet={gallery_img_1} />
            <img src="#" className="gallery__swiper-slide-img" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="gallery__swiper-slide" key={2}>
          <picture className="gallery__swiper-slide-picture">
            <source media="(min-width: 0)" srcSet={gallery_img_2} />
            <img src="#" className="gallery__swiper-slide-img" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="gallery__swiper-slide" key={3}>
          <picture className="gallery__swiper-slide-picture">
            <source media="(min-width: 0)" srcSet={gallery_img_3} />
            <img src="#" className="gallery__swiper-slide-img" alt="" />
          </picture>
        </SwiperSlide>
        <SwiperSlide className="gallery__swiper-slide" key={4}>
          <picture className="gallery__swiper-slide-picture">
            <source media="(min-width: 0)" srcSet={gallery_img_4} />
            <img src="#" className="gallery__swiper-slide-img" alt="" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
