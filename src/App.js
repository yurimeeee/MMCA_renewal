import "./App.css";
import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// const { basename } = useContext(SomeContext) || {}; // null인 경우 빈 객체 반환

function App() {
  const [isSticky, setIsSticky] = useState(false);
  let header = document.querySelector(".header");
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 20) {
        setIsSticky(true); // 스크롤 위치가 100보다 아래일 때 스티키 상태로 변경
        header.style.backgroundColor = "#000";
        header.style.height = "55px";
      } else {
        setIsSticky(false); // 스크롤 위치가 100 이상일 때 스티키 상태 해제
        header.style.backgroundColor = "transparent";
        header.style.height = "0";
      }
    };

    // 윈도우에 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <h1>MMCA</h1>
          <Nav />
        </div>
      </header>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
