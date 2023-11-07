import React, { useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";
export default function Footer() {
  const [isVisible, setISvisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setISvisible(true);
    } else {
      setISvisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <aside
        className={isVisible ? "visible top-btn" : "top-btn"}
        onClick={backToTop}
      >
        <ChevronUp size={30} />
      </aside>
      <footer>
        <div className="container d-flex justify-content-between">
          <div className="d-flex gap-4">
            <h2 className="logo">국립현대미술관</h2>
            <div>
              <h3>국립현대미술관</h3>
              <ul>
                <li>대표자: 김성희, 사업자등록번호: 138-83-00313</li>
                <li>대표전화: (서울) 02-3701-9500</li>
                <li>(과천) 02-2188-6000</li>
                <li>(덕수궁) 02-2022-0600</li>
                <li>(청주) 043-261-1400</li>
              </ul>
            </div>
          </div>

          <div>
            <ul>
              <li>
                <a href="">개인정보처리방침</a>
              </li>
              <li>
                <a href="">이용약관</a>
              </li>
              <li>
                <a href="">자주 묻는 질문</a>
              </li>
              <li>
                <a href="">개인정보처리방침</a>
              </li>
              <li>
                <a href="">저작권 정책</a>
              </li>
            </ul>
          </div>
        </div>
        <p>&copy; 2021 National Museum of Modern and Contemporary Art, Korea</p>
      </footer>
    </>
  );
}
