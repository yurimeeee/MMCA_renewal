import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { X } from "react-bootstrap-icons";

function NoticePopUp() {
  const [cookies, setCookie] = useCookies(["hidePopup"]);
  const [showPopup, setShowPopup] = useState(!cookies.hidePopup);
  // const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    //쿠키 생성
    setCookie("hidePopup", true, { maxAge: 60 * 60 * 24 });
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-info">
          <h2>NOTICE</h2>
          <h3>MMCA_renewal project</h3>
          <p>
            본 사이트는 상업적 목적이 아닌 개인 포트폴리오로, <br />
            MMCA와 무관함을 알려드립니다. <br />
            사이트의 일부 내용과 이미지 등은 그 출처가 따로 있음을 밝힙니다.
          </p>
          <ul>
            <li>제작기간 : 2023. 11. 04 ~ 2023. 11. 08</li>
            <li>STACK : REACT, CSS3, JAVASCRIPT</li>
            <li>
              CODE :{" "}
              <a
                href="https://github.com/yurimeeee/MMCA_renewal"
                target="_blank"
                rel="noreferrer"
              >
                깃허브
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="popup-btns">
          <button onClick={handleClose} className="cookie-btn">
            오늘 하루 보지 않음
          </button>
          <button onClick={() => setShowPopup(false)}>
            <X size={34} />
          </button>
        </div>
      </div>
    )
  );
}

export default NoticePopUp;
