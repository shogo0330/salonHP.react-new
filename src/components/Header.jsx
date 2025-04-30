import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 1175);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    const handleResize = () => {
      const smallScreen = window.innerWidth <= 1175;
      setIsSmall(smallScreen);
      if (!smallScreen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header>
        {isSmall ? (
          <div className="small-width-header">
            <div className="small-width-header-inner">
              <Link to="/" className="header-logo">
                <img src="/images/logo.png" alt="ロゴ" />
              </Link>
              <button
                className="hamburger-btn"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {isOpen ? "✖️" : "☰"}
              </button>
              {isOpen && (
                <div className={`menu ${isOpen ? "open" : ""}`}>
                  <ul>
                    <li>
                      <Link to="/School">スクールについて</Link>
                    </li>
                    <li>
                      <Link to="/courseList">講座一覧</Link>
                    </li>
                    <li>
                      <Link to="/instructor">講師紹介</Link>
                    </li>
                    <li>
                      <Link to="/Menu">サロンメニュー</Link>
                    </li>
                    <li>
                      <Link to="/access">アクセス</Link>
                    </li>
                    <li>
                      <a href="/Reserve" className="contact" target="_blank" rel="noopener noreferrer">
                        ご予約・お問い合わせ
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="header-inner">
            <Link to="/" className="header-logo">
              <img src="/images/logo.png" alt="ロゴ" />
            </Link>
            <ul className="header-list">
              <li>
                <Link to="/School">スクールについて</Link>
              </li>
              <li>
                <Link to="/courseList">講座一覧</Link>
              </li>
              <li>
                <Link to="/instructor">講師紹介</Link>
              </li>
              <li>
                <Link to="/Menu">サロンメニュー</Link>
              </li>
              <li>
                <Link to="/access">アクセス</Link>
              </li>
              <li>
                <a href="/Reserve" className="contact" target="_blank" rel="noopener noreferrer">
                  ご予約・お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {!isSmall && (
        <header className={`scroll-header ${showHeader ? "shown" : ""}`}>
          <div id="header-scroll">
            <ul class="header-scroll-list">
              <li>
                <Link to="/School">スクールについて</Link>
              </li>
              <li>
                <Link to="/courseList">講座一覧</Link>
              </li>
              <li>
                <Link to="/instructor">講師紹介</Link>
              </li>
              <li>
                <Link to="/Menu">サロンメニュー</Link>
              </li>
              <li>
                <Link to="/access">アクセス</Link>
              </li>
            </ul>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;