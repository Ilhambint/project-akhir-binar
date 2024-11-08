import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Carousel = ({ images }) => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper w-[600px] h-[436px] pl-[100px] mobile:w-[300px] mobile:h-[230px] mt-10 mobile:static  mobile:-mt-7">
        {images.map((image) => (
          <SwiperSlide>
            <img src={image.path} alt=""
              className=" p-2 mobile:p-2 mobile:w-[360px] mobile:h-[240px] mobile:fixed" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel