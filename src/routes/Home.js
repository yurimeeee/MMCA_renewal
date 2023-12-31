import React from "react";
import BranchData from "../data/branch.json";
import ExhibitonSlide from "../components/ExhibitionSlide";
import collectionData from "../data/collection.json";
import digitalGallery from "../data/digitalGallery.json";
// import newsletter from "../data/newsletter.json";
import NewsLetter from "../components/NewsLetter";
import { ChevronRight } from "react-bootstrap-icons";

const Home = () => {
  // console.log(BranchData);
  return (
    <main>
      <div className="home-img"></div>
      <section className="sec1 ">
        <div className="container d-flex justify-content-between">
          <div>
            <h2>국립현대미술관 관람 예약하기</h2>
            <p>화요일-일요일 10:00-18:00 (월요일 서울 개관)</p>
            <p>서울·덕수궁:수요일, 토요일 야간개장 10:00-21:00</p>
          </div>
          <div>
            <a className="reservation btns" href="">
              전시예약 바로가기
            </a>
          </div>
        </div>
      </section>
      <section className="sec2 container">
        <h2 className="sec-tt">INFORMATION</h2>
        <div className="container">
          <div className="row card_wrap">
            {BranchData.map((item, index) => (
              <div className="info col-md-3 col-sm-6" key={index}>
                <img
                  src={process.env.PUBLIC_URL + item.img}
                  alt={item.imgDesc}
                />
                <h3>{item.name}</h3>
                <div className="operating">
                  <p>
                    {item.operating} <span> {item["operating-time"]} </span>
                  </p>
                  <p>
                    {item["night-operating"]}{" "}
                    <span>{item["night-operating-time"]}</span>
                  </p>
                </div>
                <div className="event-tag">
                  {item.tags.map((tag, index) => (
                    <span key={index}>
                      <a href="">{tag}</a>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec3 container">
        <h2 className="sec-tt">EXHIBITION</h2>
        <div className="container">
          <ExhibitonSlide />
        </div>
      </section>
      <section className="sec4">
        <h2 className="sec-tt">COLLECTION</h2>
        <p className="see-more container">
          <a href="">
            소장품 모두보기
            <ChevronRight />
          </a>
        </p>
        <div className="">
          <div className="row coll-wrap">
            {collectionData.map((item, index) => (
              <div className="col coll-box" key={index}>
                <div className="coll-bg">
                  <p>{item.year}</p>
                  <img
                    src={process.env.PUBLIC_URL + item.img}
                    alt={item.imgDesc}
                  />
                </div>
                <h3>{item.name}</h3>
                <p>{item.artist}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec5 container">
        <h2 className="sec-tt">DIGITAL GALLERY</h2>
        <p className="see-more container">
          <a href="">
            디지털미술관 모두보기
            <ChevronRight />
          </a>
        </p>
        <div className="row digital-gallery ">
          {digitalGallery.map((item, index) => (
            <div className="video-wrap boxs col-md-4" key={index}>
              <embed src={item.url}></embed>
              <h3>{item.name}</h3>
              <p className="gall-desc">
                <span>{item.upload}</span>
                <span>조회수 {item.view}회</span>
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="sec6 container">
        <h2 className="sec-tt">NEWS LETTER</h2>
        <p className="see-more container">
          <a href="">
            뉴스레터 모두보기
            <ChevronRight />
          </a>
        </p>
        <NewsLetter />
        {/* <div className="row coll-wrap">
          {newsletter.map((item, index) => (
            <div className="col coll-box" key={index}>
              <div className="coll-bg">
                <p>{item.year}</p>
                <img
                  src={process.env.PUBLIC_URL + item.img}
                  alt={item.imgDesc}
                />
              </div>
              <h3>{item.name}</h3>
              <p>{item.artist}</p>
            </div>
          ))}
        </div> */}
      </section>
    </main>
  );
};

export default Home;
