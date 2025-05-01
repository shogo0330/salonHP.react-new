import React, { useState, useEffect } from "react";

function Info() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/c/c447-1864-49c2-8a45")
      .then((response) => response.json())
      .then((data) => {
        console.log("取得したデータ:", data);
        const infoData = data.info;
        setInfo(infoData);
      })
      .catch((error) => {
        console.error("エラー:", error);
      });
  }, []);

  return (
    <div className="information">
      <div className="info-top">
        <h3>INFORMATION</h3>
        <p>お知らせ</p>
      </div>
      <a href="" className="info-link">
        <div className="info-about">
          <img src="/images/top.jpg" />
          <div className="info-text">
            <ul id="info-list">
              {info.map((item) => {
                return (
                  <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.date}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </a>
      <div className="info-btn">
        <a href="">お知らせ一覧</a>
      </div>
    </div>
  );
}

export default Info;