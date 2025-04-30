import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div class="footer-list">
        <ul class="footer-items">
          <li>
            <nav class="footer-item">
              <Link to="/School">スクールについて</Link>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <Link to="/courseList">講座一覧</Link>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <Link to="/instructor">講師紹介</Link>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <Link to="/Menu">サロンメニュー</Link>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
              <Link to="/access">アクセス</Link>
            </nav>
          </li>
          <li>
            <nav class="footer-item">
            <a href="/Reserve" target="_blank" rel="noopener noreferrer">contact</a>
            </nav>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;