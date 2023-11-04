import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  // let menuItems = document.querySelectorAll(".menu > ul > li");
  let header = document.querySelector("header");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // menuItems.forEach((item) => {
  //   item.addEventListener("mouseover", () => {
  //     header.style.height = "120px";
  //     header.style.background = "rgba(14, 18, 42, 0.8)";
  //   });
  //   item.addEventListener("mouseout", () => {
  //     header.style.height = "0";
  //     header.style.background = "transparent"; // 또는 원하는 배경 스타일로 변경
  //   });
  // });

  return (
    <nav className="menu">
      <ul>
        <li
          className={`${isHovered ? "active" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/Preview">관람 참여</Link>
          <ul className="submenu">
            <li>서울</li>
            <li>과천</li>
            <li>덕수궁</li>
            <li>청주</li>
            <li>어린이 미술관</li>
          </ul>
        </li>
        <li>
          <Link to="/exhibit">전시</Link>
        </li>
        <li>
          <Link to="/education">교육</Link>
        </li>
        <li>
          <Link to="/collection">소장품</Link>
        </li>
        <li>
          <Link to="/research">미술연구</Link>
        </li>
        <li>
          <Link to="/digital">디지털 미술관</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
