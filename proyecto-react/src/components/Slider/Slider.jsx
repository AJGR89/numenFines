import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { slides } from "../../api/data-api";

export default function Slider() {
  const slideArray = slides.map((el, index) => (
    <SwiperSlide>
      {" "}
      <img
        src={el.url}
        alt={el.alt}
        className="object-cover h-121 w-full"
      />{" "}
    </SwiperSlide>
  ));
  console.log("slideArray", slideArray);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-122 justify "
      >
        {slideArray}
      </Swiper>
    </>
  );
}
