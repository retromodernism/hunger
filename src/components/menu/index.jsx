import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectFade } from "swiper/core";
import "./index.scss";
import "swiper/components/pagination/pagination.scss";
// import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/effect-fade/effect-fade.scss";
import Truncate from "react-truncate";
import menuItems from "./menuItems";

SwiperCore.use({ Pagination, EffectFade });

const swiperParams = {
  effect: "fade",
  pagination: {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        menuItems[index].category +
        "</span>"
      );
    },
  },
  slidesPerView: 1,
};

const Menu = (props) => {
  return (
    <section className="menu">
      <h2 className="menu__h2">delicious menu</h2>
      <p className="menu__p">
        <b className="menu__p_b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
          maximus, molestie est a, tempor magna.
        </b>
      </p>
      <Swiper className="menu__swiper" {...swiperParams} effect="fade">
        {menuItems.map((category, i) => (
          <SwiperSlide className="menu__swiper-slide" key={i}>
            {category.items.map((item, j) => (
              <div className="menu__item" key={j}>
                <h3 className="menu__item-h3 menu__item-title">
                  <Truncate
                    trimWhitespace={true}
                    width={255}
                    ellipsis=" . . . . "
                  >
                    {item.dish}
                  </Truncate>
                </h3>
                <h3 className="menu__item-h3 menu__item-price">
                  {item.price} USD
                </h3>
                <p className="menu__item-description">{item.description}</p>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Menu;
