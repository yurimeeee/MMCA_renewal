import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppRouter from "./Router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NoticePopUp from "./components/NoticePopUp";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  // let header = document.querySelector(".header");
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
        setIsSticky(true);
        header.style.backgroundColor = "#000";
        header.style.height = "55px";
      } else {
        setIsSticky(false);
        header.style.backgroundColor = "transparent";
        header.style.height = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 새로고침
  const handleRefresh = () => {
    window.location.reload();
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="App">
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        <NoticePopUp />
        <div className="container">
          <Link to="/">
            <h1 onClick={handleRefresh}>MMCA</h1>
          </Link>
          <Nav />
        </div>
      </header>

      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
