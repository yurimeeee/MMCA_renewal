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
            <img src={item.img} alt={item.name} />
            <div className="ex-info">
              <div>
                <p>{item.branch}</p>
                <h4>{item.date}</h4>
              </div>

              <div>
                <h3>{item.name}</h3>
                <a href="">
                  티켓 예매{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58"
                    height="10"
                    viewBox="0 0 58 10"
                    fill="none"
                  >
                    <path d="M0.5 9.5H56.5L45.5 1" stroke="white" />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
