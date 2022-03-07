import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { items } from "../../api/data-api";
import Card from "./card";

export default function Slider() {
  const slideArray = items.map((el, index) => (
    <SwiperSlide>
      <Card prop={el}></Card>
    </SwiperSlide>
  ));
  console.log("slideArray", slideArray);
  return (
    <>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper justify "
      >
        {slideArray}
      </Swiper>
    </>
  );
}
