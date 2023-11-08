import React from "react";
// import newsletter from "../data/newsletter.json";

function NewsLetter() {
  return (
    <div className="row news-wrap">
      {/* {newsletter.map((item, index) => (
        <div className="col coll-box" key={index}>
          <div className="coll-bg">
            <p>{item.name}</p>
            <img src={process.env.PUBLIC_URL + item.img} alt={item.imgDesc} />
          </div>
          <h3>{item.name}</h3>
        </div>
      ))} */}

      <div className="col-md-3 col-sm-6 news-box">
        <div className="news-bg">
          <div className="news-info">
            <h3>
              "발꾸락으로 했냐 했지만, 자유롭게 작품을 한 거예요" 이신자 작가
            </h3>
            <p>
              한 달 전 막을 연 «이신자, 실로 그리다» 전시의 주인공 이신자 작가를
              국립현대미술관 과천에서 만났을 때, 그는 93세의 고령에도 꼿꼿한
              자세로 50여 년 작업이 망라된 전시실을 걸었다.
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/news/news_1.png"}
            alt="이신자 작가"
          />
        </div>
      </div>
      <div className="col-md-3 col-sm-6 news-box">
        <div className="news-bg">
          <div className="news-info">
            <h3>
              장욱진과 장기하의 운명적 만남 &lsaquo;MMCA 라이브 X 장기하&rsaquo;
            </h3>
            <p>
              국립현대미술관 덕수궁의 고요한 전시실에서 대중음악가 장기하의
              독보적인 목소리가 울려 퍼졌다. «가장 진지한 고백: 장욱진 회고전»과
              연계한 &lsaquo;MMCA 라이브 X 장기하&rsaquo; 공연이 펼쳐진 것이다.
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/news/news_2.png"}
            alt="<MMCA 라이브 X 장기하>에 참여한 장기하"
          />
        </div>
      </div>
      <div className="col-md-3 col-sm-6 news-box">
        <div className="news-bg">
          <div className="news-info">
            <h3>
              네 개의 평행우주가 열린다 &lsaquo;올해의 작가상 2023&rsaquo;
            </h3>
            <p>
              &lsaquo;올해의 작가상 2023&rsaquo;에서 만날 수 있는 권병준, 갈라
              포라스-김, 이강승, 전소정 4인은 조각, 설치, 사진, 영상 분야에서
              각기 다양한 활동을 펼쳐온 작가들이다.
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/news/news_3.png"}
            alt="<올해의 작가상 2023> 출품작 (1 권병준, 2 갈라 포라스-김, 3 이강승, 4 전소정)"
          />
        </div>
      </div>
      <div className="col-md-3 col-sm-6 news-box">
        <div className="news-bg">
          <div className="news-info">
            <h3>
              다원예술 2023 연계 오디오북 &lsaquo;음악의 숲: 당신, 편안함에
              이르렀나요?&rsaquo; 출간
            </h3>
            <p>
              국립현대미술관과 독서 플랫폼 ‘밀리의 서재’가 손을 잡고 다원예술
              2023 «전자적 숲; 소진된 인간» 전시의 오디오북 콘텐츠
              &lsaquo;음악의 숲&rsaquo;을 공개했다.
            </p>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/news/news_4.png"}
            alt="<음악의 숲: 당신, 편안함에 이르렀나요?>"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
