import React from "react";
import "../styles/courseList.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactAddress from "../components/ContactAddress";

const courses = [
  {
    id: 1,
    title: "パーソナルケアアドバイザー講座",
    img: "/images/course1.png",
    description:
      "「6ヶ月でお客様に合わせたアドバイスが出来る」を目指すプログラムです。成功するサロンに必要な「知識と技術とサロンワーク」の3つの軸で、「緒々ネイル」が店舗で実践しているプロのノウハウを実践的に習得していただくことができますので、修了後には確実なステージアップを実感していただけます。 ",
    amount: "全6回[6ヶ月] 237,600円[税込]",
  },
  {
    id: 2,
    title: "パーソナルケアアドバイザー講座［座学コース］",
    img: "/images/course2.jpg",
    description:
      "パーソナルケアアドバイザー講座の「座学」のみを抜粋し、「爪肌美容の専門家」に必要な「知識」を集中して学ぶコースです。",
    amount: "全6回[6ヶ月] 142,560円[税込]",
  },
  {
    id: 3,
    title: "パーソナルケアアドバイザー講座［単発受講］",
    img: "/images/course3.png",
    description:
      "パーソナルケアアドバイザー講座の中の必要なステージだけを単発で選んで受講いただける「単発講座」です。",
    amount: "座学:1回150分 13,500円[税込]",
  },
  {
    id: 4,
    title: "セラピスト講座",
    img: "/images/course4.png",
    description:
      "ハンドトリートメントやフットトリートメントに必要な、知識と技術を学びます。",
    amount: "120分オンライン講座×2回 10,000円[税込]",
  },
  {
    id: 5,
    title: "nutritionアドバイザー講座[栄養学]",
    img: "/images/course5.jpg",
    description: "栄養学に特化したコースです。 ※ただいま準備中・・・",
    amount: "",
  },
  {
    id: 6,
    title: "特別講座",
    img: "/images/course6.png",
    description:
      "一般社団法人日本爪肌検定協会の講座や、特別講師によるサロンワーク向上の為のマニアック講座を不定期開催。",
    amount: "",
  },
  {
    id: 7,
    title: "技術レッスン",
    img: "/images/course7.png",
    description:
      "ネイルケア技術にご不安がある方向けの技術レッスンです。単発受講ができますので、ネイルケア技術の復習やスキルアップしたい方に。検定対策の技術レッスンとしてもご活用ください。",
    amount: "3時間×1回 16,500円[税込]",
  },
];

function CourseList() {
  return (
    <div className="courseList-page">
      <Header />
      <div className="course-list">
        {courses.map((course, index) => {
          return (
            <div key={course.id} className="course-item">
              <h5 className="course-title">{course.title}</h5>
              <img src={course.img} />
              <p className="course-description">{course.description}</p>
              <p className="course-amount">{course.amount}</p>
              <button className="course-list-btn">詳しくみる</button>
            </div>
          );
        })}
      </div>
      <ContactAddress />
      <Footer />
    </div>
  );
}

export default CourseList;