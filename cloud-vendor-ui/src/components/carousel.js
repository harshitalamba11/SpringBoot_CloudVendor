import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/photo01.jpg" alt="slide1" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/photo02.jpg" alt="slide2" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/photo03.jpg" alt="slide3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
