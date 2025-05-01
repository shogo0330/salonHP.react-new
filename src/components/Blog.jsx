import React, { useState, useEffect } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/c/c447-1864-49c2-8a45")
      .then((response) => response.json())
      .then((data) => {
        console.log("取得したデータ:", data);
        const latestData = data.blog.slice(0, 4);
        console.log("最新データ:", latestData);
        setBlogs(latestData);
      })
      .catch((error) => {
        console.error("ブログエラー:", error);
      });
  }, []);

  return (
    <div class="blog">
      <div class="blog-title">
        <h3>BLOG</h3>
        <p>ブログ</p>
      </div>
      <div class="blog-list">
        {blogs.map((item) => {
          return (
            <div className="blog-items" key={item.id}>
              <a className="blog-item" href="">
                <h2>{item.title}</h2>
                <p>{item.date}</p>
              </a>
            </div>
          );
        })}
      </div>
      <div class="info-btn">
        <a href="">ブログ一覧</a>
      </div>
    </div>
  );
}

export default Blog;