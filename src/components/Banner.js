import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";


const Banner = () => {
  return (
    <div className=" sm:block">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide>
          <img className="block w-full h-full object-cover" src="/assets/banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="block w-full h-full object-cover" src="/assets/banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="block w-full h-full object-cover" src="/assets/banner.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner