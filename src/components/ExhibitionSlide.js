import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ExSlideData from "../data/ExSlide.json";

import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function ExhibitonSlide() {
  console.log(ExSlideData);
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {ExSlideData[0].Seoul.map((item, idx) => (
          <SwiperSlide>
            <img src={item.img} alt={item.img} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
