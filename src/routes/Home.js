import React from "react";
import BranchData from "../data/branch.json";
import ExhibitonSlide from "../components/ExhibitionSlide";

const Home = () => {
  // console.log(BranchData);
  return (
    <main>
      <div className="home-img"></div>
      <section className="sec1 container">
        <div>
          <h2>국립현대미술관 관람 예약하기</h2>
          <p>화요일-일요일 10:00-18:00 (월요일 서울 개관)</p>
          <p>서울·덕수궁:수요일, 토요일 야간개장 10:00-21:00</p>
        </div>
        <a className="reservation btns" href="#">
          전시 예약
        </a>
      </section>
      <section className="sec2 container">
        <h2 className="sec-tt">INFORMATION</h2>
        <div className="container">
          <div className="row card_wrap">
            {BranchData.map((item, index) => (
              <div className="info col-md-3 col-sm-6" key={index}>
                <img src={item.img} alt={item.imgDesc} />
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
                      <a href="#">{tag}</a>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec2 container">
        <h2 className="sec-tt">EXHIBITION</h2>
        <div className="container">
          <ExhibitonSlide />
        </div>
      </section>
    </main>
  );
};

export default Home;
