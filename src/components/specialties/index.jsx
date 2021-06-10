import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

import ImageComponent from "../imageComponent";
import "./index.scss";
import specialtiesImg from "./src/specialties.png";

SwiperCore.use([Autoplay, Pagination]);

const sliderParams = {
  pagination: {
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  slidesPerView: 1,
  // effect: "fade",
};

const Specialties = (props) => {
  return (
    <section className="specialties">
      <h4 className="specialties__h4">Specialties</h4>
      <Swiper className="specialties__swiper" {...sliderParams}>
        <SwiperSlide className="specialties__slide" key={1}>
          <ImageComponent src={specialtiesImg} frame="left" />
          <div className="specialties__slide-info">
            <h2 className="specialties__slide-info-h2">Chocolate Pancakes</h2>
            <p className="specialties__slide-info-p">
              <b className="specialties__slide-info-p_b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                velit maximus, molestie est a, tempor magna.
              </b>
            </p>
            <p className="specialties__slide-info-p">
              Integer ullamcorper neque eu purus euismod, ac faucibus mauris
              posuere. Morbi non ultrices ligula. Sed dictum, enim sed
              ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
              quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
              Nulla facilisis semper laoreet.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="specialties__slide" key={2}>
          <ImageComponent src={specialtiesImg} frame="left" />
          <div className="specialties__slide-info">
            <h2 className="specialties__slide-info-h2">Chocolate Pancakes</h2>
            <p className="specialties__slide-info-p">
              <b className="specialties__slide-info-p_b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                velit maximus, molestie est a, tempor magna.
              </b>
            </p>
            <p className="specialties__slide-info-p">
              Integer ullamcorper neque eu purus euismod, ac faucibus mauris
              posuere. Morbi non ultrices ligula. Sed dictum, enim sed
              ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
              quam nec sem. Mauris tincidunt feugiat diam convallis pharetra.
              Nulla facilisis semper laoreet.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Specialties;
