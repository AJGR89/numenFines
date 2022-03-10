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
          1200: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        spaceBetween={60}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper sm:mx-8 mt-3 mb-3"
      >
        {slideArray}
      </Swiper>
    </>
  );
}
