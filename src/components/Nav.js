import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Plus, X, Search } from "react-bootstrap-icons";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const mobileMenuRef = useRef(null);

  //브라우저 너비 확인
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 501);
    };
    //초기화
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //메뉴 여닫기
  useEffect(() => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.left = isMenuOpen
        ? "calc(-100vw + 52px)"
        : "100%";
      mobileMenuRef.current.style.display = isMenuOpen ? "block" : "none";
    }
  }, [isMenuOpen]);

  //서브메뉴 토글
  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };
  return (
    <div>
      {isMobile ? (
        //모바일 메뉴 구성
        <div className="menu-wrap">
          <button onClick={toggleMenu} className="m-menu-btn">
            <Plus size={40} />
          </button>
          <div className="m-menu-bg container" ref={mobileMenuRef}>
            <div className="m-btn-wrap">
              <button onClick={toggleMenu} className="menu-close">
                <X size={40} />
              </button>
            </div>
            <div className="menu-inner">
              <nav className="m-menu">
                <ul>
                  <li onClick={() => toggleSubMenu("관람 참여")}>
                    관람 참여
                    <ul
                      className={
                        activeSubMenu === "관람 참여"
                          ? "m-submenu active"
                          : "m-submenu"
                      }
                    >
                      <li>서울</li>
                      <li>과천</li>
                      <li>덕수궁</li>
                      <li>청주</li>
                      <li>어린이 미술관</li>
                    </ul>
                  </li>
                  <li onClick={() => toggleSubMenu("전시")}>
                    전시
                    <ul
                      className={
                        activeSubMenu === "전시"
                          ? "m-submenu active"
                          : "m-submenu"
                      }
                    >
                      <li>현재 전시</li>
                      <li>예정 전시</li>
                      <li>과거 전시</li>
                    </ul>
                  </li>
                  <li onClick={() => toggleSubMenu("교육")}>
                    교육
                    <ul
                      className={
                        activeSubMenu === "교육"
                          ? "m-submenu active"
                          : "m-submenu"
                      }
                    >
                      <li>미술관 교육소개</li>
                    </ul>
                  </li>
                  <li onClick={() => toggleSubMenu("소장품")}>
                    소장품
                    <ul
                      className={
                        activeSubMenu === "소장품"
                          ? "m-submenu active"
                          : "m-submenu"
                      }
                    >
                      <li>소장품 검색</li>
                      <li>소장품 탐색</li>
                      <li>보존 과학</li>
                    </ul>
                  </li>
                  <li onClick={() => toggleSubMenu("미술연구")}>
                    미술연구
                    <ul
                      className={
                        activeSubMenu === "미술연구"
                          ? "m-submenu active"
                          : "m-submenu"
                      }
                    >
                      <li>도서와 아카이브</li>
                      <li>연구</li>
                      <li>발간 자료</li>
                    </ul>
                  </li>
                  <li onClick={() => toggleSubMenu("디지털 미술관")}>
                    디지털 미술관
                    <ul
                      className={
                        activeSubMenu === "디지털 미술관"
                          ? "m-submenu active"
                          : "m-submenu"
                      }
                    >
                      <li>맞춤 검색</li>
                      <li>오디오 가이드</li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div>
                <form className="search">
                  <label className="hidden"></label>
                  <input></input>
                  <button>
                    <Search size={24} />
                  </button>
                </form>
                <span className="m-login-signup">
                  <a href="" className="m-signup">
                    회원가입
                  </a>
                  <a href="" className="m-login">
                    로그인
                  </a>
                  <a href="" className="m-language">
                    KO
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        //pc, 테블릿 메뉴 구성
        <div className="nav-wrap">
          <nav className="menu">
            <ul>
              <li>
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
                <ul className="submenu">
                  <li>현재 전시</li>
                  <li>예정 전시</li>
                  <li>과거 전시</li>
                </ul>
              </li>
              <li>
                <Link to="/education">교육</Link>
                <ul className="submenu">
                  <li>미술관 교육소개</li>
                </ul>
              </li>
              <li>
                <Link to="/collection">소장품</Link>
                <ul className="submenu">
                  <li>소장품 검색</li>
                  <li>소장품 탐색</li>
                  <li>보존 과학</li>
                </ul>
              </li>
              <li>
                <Link to="/research">미술연구</Link>
                <ul className="submenu">
                  <li>도서와 아카이브</li>
                  <li>연구</li>
                  <li>발간 자료</li>
                </ul>
              </li>
              <li>
                <Link to="/digital">디지털 미술관</Link>
                <ul className="submenu">
                  <li>맞춤 검색</li>
                  <li>오디오 가이드</li>
                </ul>
              </li>
            </ul>
          </nav>
          <span className="login-signup">
            <a href="" className="signup">
              회원가입
            </a>
            <a href="" className="login">
              로그인
            </a>
            <a href="" className="language">
              KO
            </a>
          </span>
        </div>
      )}
    </div>
  );
};

export default Nav;
