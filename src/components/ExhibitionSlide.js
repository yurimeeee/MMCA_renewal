import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ExSlideData from "../data/ExSlide.json";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper.use([Pagination, Navigation]);

export default function ExhibitonSlide() {
  const [activeTab, setActiveTab] = useState("Seoul");
  const [showAll, setShowAll] = useState(false); // 전체 보기 상태를 나타내는 상태
  const [swiper, setSwiper] = useState(null);

  const tabData = [
    { label: "서울", value: "Seoul" },
    { label: "과천", value: "Gwacheon" },
    { label: "덕수궁", value: "Deoksugung" },
    { label: "청주", value: "Cheongju" },
  ];

  const getAllExhibitions = () => {
    // 모든 전시 데이터를 모으는 함수
    const allExhibitions = [];
    ExSlideData.forEach((branchData) => {
      Object.values(branchData).forEach((branchExhibitions) => {
        allExhibitions.push(...branchExhibitions);
      });
    });

    return allExhibitions;
  };

  const getBranchData = () => {
    const branchData = ExSlideData.find((data) => data[activeTab]);
    // console.log(branchData[activeTab]);
    return branchData ? branchData[activeTab] : [];
  };

  const handleShowAllClick = () => {
    setShowAll(true); // 전체 보기 버튼을 클릭하면 전체 보기 상태로 설정
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowAll(false); // 탭을 변경하면 전체 보기 상태를 해제
  };

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  // console.log(ExSlideData);
  return (
    <div className="slide">
      <div className="tab-btns">
        <button
          onClick={handleShowAllClick}
          className={showAll ? "active" : ""}
        >
          전체
        </button>
        {tabData.map((tabItem) => (
          <button
            key={tabItem.value}
            onClick={() => handleTabClick(tabItem.value)}
            className={tabItem.value === activeTab && !showAll ? "active" : ""}
          >
            {tabItem.label}
          </button>
        ))}
      </div>

      <Swiper
        onSwiper={setSwiper}
        slidesPerView={4}
        spaceBetween={0}
        autoplay={{
          speed: 1500,
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          type: "fraction",
          el: ".pagination2",
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        // navigation={true}
        // navigation={{
        //   nextEl: ".swiper-button-next", // 다음 버튼
        //   prevEl: ".swiper-button-prev", // 이전 버튼
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper container"
      >
        {showAll
          ? // 전체 보기 상태일 때
            getAllExhibitions().map((item, idx) => (
              <SwiperSlide key={idx}>
                <img src={item.img} alt={item.name} />
                <div className="ex-info">
                  <div>
                    <p>{item.branch}</p>
                    <h4>{item.date}</h4>
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <a href="">
                      <span>티켓 예매</span>
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
            ))
          : // 전체 보기 상태가 아닐 때
            getBranchData().map((item, idx) => (
              <SwiperSlide key={idx}>
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
      {/* <div className="nav-btns">
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div> */}
      <div className="nav-btns">
        <button onClick={goPrev} className="prev-btn"></button>
        <div className="pagination2"></div>
        <button onClick={goNext} className="next-btn"></button>
      </div>
      {/* <div className="pagination2"></div> */}
    </div>
  );
}
