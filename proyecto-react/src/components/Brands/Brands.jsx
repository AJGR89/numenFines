import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { brands } from "../../api/data-api";

export default function Slider() {
  const slideArray = brands.map((el, index) => (
    <SwiperSlide className="sm:mt-6 sm:mb-6">
      {" "}
      <img src={el.url} alt={el.alt} className="h-20 w-full sm:h-36" />{" "}
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
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={60}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Autoplay]}
        className="mySwiper bg-contain bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-500 mt-4 mb-4 sm:mx-28 sm:rounded-2xl "
      >
        {slideArray}
      </Swiper>
    </>
  );
}
