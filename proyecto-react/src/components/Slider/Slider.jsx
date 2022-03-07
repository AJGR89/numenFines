import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-122 justify  "
      >
        <SwiperSlide>
          {" "}
          <img
            src="https://i.pinimg.com/originals/6e/38/08/6e3808084636e7287e28eb15a8fe40a5.jpg"
            alt="setup"
            className="object-cover h-121 w-full"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1493/innergigabyteimages/banner.jpg"
            alt="mother"
            className="object-fill h-121 w-full"
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://www.tecnofullchile.cl/images/baner-msi2.png"
            alt="notebook"
            className="object-cover h-121 w-full"
          />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
