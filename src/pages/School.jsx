import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "../styles/school.css";
import { Link } from "react-router-dom";
import "../styles/header.css";
import ContactAdoress from "../components/ContactAdoress";

function School() {
  const features = [
    {
      name: "①知識と技術の連動",
      explanation:
        "幅広い知識（皮膚科学>栄養学成分学材料学など）と技術を連動させて学ぶ事で、多角的なアドバイス力が身に付き、さらによりリアルなサロンワークをイメージしながら実践練習に取り組めます。１つ１つバラバラだったものを繋ぐ事ができることで格段に上達へ繋がります。",
    },
    {
      name: "②インプットとアウトプットの連動",
      explanation:
        "受講したらそのまま…になりがちで誰もが苦手なアウトプット。学びっぱなしにならないように6ヶ月しっかりサポートで確実に上達を目指します。",
    },
    {
      name: "③施術内容や価格設定はそのままサロンメニューへ導入できます",
      explanation:
        "施術内容～価格設定まで学べるので自分であれやこれや考える手間がなく、受講後そのままメニューへ導入できます。",
    },
    {
      name: "④特別講座開催でさらにサロンワーク向上",
      explanation:
        "特別講師の方からサロンワーク向上に繋がる講座を予定しております。（不定期）",
    },
  ];

  return (
    <div>
      <Header />
      <div className="School-page">
        <h2>concept</h2>
        <h4>\お客様に合わせたアドバイスが出来る/</h4>
        <div className="concept-abouts">
          <div className="concept-about">
            <img src="/images/school1.png" />
            <p>ケアで来られるお客様にもっと喜んで頂きたい</p>
          </div>
          <div className="concept-about">
            <img src="/images/school2.png" />
            <p>爪肌の健康にしっかり対応出来るネイリストになりたい</p>
          </div>
          <div className="concept-about">
            <img src="/images/school3.png" />
            <p>座学をしっかりと説明できるようになりたい</p>
          </div>
        </div>
        <p>
          そんなネイリストの方を応援し、確実にレベルアップして頂く為に『知識』と『技術』と『サロンワーク』を連動して学び、お客様に喜んで頂けて売上アップにも繋がる実践型のプログラムです。
        </p>
        <Link to="/courseList">
          <button className="course-btn">講座一覧へ→</button>
        </Link>
        <div className="worries">
          <h2>こんなお悩みないですか⁇</h2>
          <img src="/images/school4.png" className="worries-img" />
          <div className="worries-list">
            <ul>
              <li>
                <span>✔︎</span>
                ケアメニューをもっと入れたいけど、不安があるから一歩踏み出せない
              </li>
              <li>
                <span>✔︎</span>
                爪周りだけでなく手全体を綺麗にしたい
              </li>
              <li>
                <span>✔︎</span>
                お客様の爪肌にしっかりた対応出来るネイリストになりたい
              </li>
              <li>
                <span>✔︎</span>
                ケアのモヤモヤを解消したい
              </li>
              <li>
                <span>✔︎</span>
                サロンの売り上げをあげたい
              </li>
              <li>
                <span>✔︎</span>
                サロン価値をあげたい
              </li>
              <li>
                <span>✔︎</span>
                生徒さんからの質問に上手く答える事が出来ない
              </li>
            </ul>
          </div>
        </div>
        <img src="/images/school5.png" className="recommendation" />
        <h2>ネイルの座学知識・ケアを強化したい方にオススメです。</h2>
        <div className="school-features">
          <h2>当スクール[4つの特徴]</h2>
          <div className="school-feature">
            {features.map((feature, index) => {
              return (
                <div className="feature-item" key={index}>
                  <h5>{feature.name}</h5>
                  <p>{feature.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="school-get">
          <h2>講座で得られること</h2>
          <img src="/images/school6.jpg" />
          <p>
            学びっぱなしでは意味がなく、お客様の前でサービスとして形に出来てお客様に喜んで頂き、始めて「価値」がでる！と考えます。
          </p>
          <p>
            様々な分野の『知識』と『技術』を連動して学ぶ事で多角的なアドバイスが出来るようになり、無理なく確実にレベルアップ出来る実践型プログラムです。
          </p>
          <p className="school-get-p">その結果</p>
          <p className="school-get-p">
            <span>✔︎</span>マーク苦手意識を克服（自信）
          </p>
          <p className="school-get-p">
            <span>✔︎</span>仕事の幅が広がる（強み）
          </p>
          <p className="school-get-p">
            <span>✔︎</span>売上が上がる（利益UP）
          </p>
          <p className="school-get-p">
            <span>✔︎</span>
            理論的アドバイスが出来るので、言葉に説得力がでる（信頼感）
          </p>
          <p className="school-get-p">
            <span>✔︎</span>お客様からの信頼が高まる（リピート率UP）
          </p>
          <p className="school-get-p">に繋がります。</p>
          <p>
            また、講座内容はそのままサロンワークでご提供出来る内容となっておりますので、すぐに導入して頂けます。
          </p>
        </div>
        <div className="school-benefits">
          <h2>【コース受講特典】</h2>
          <p>
            <span>✔︎</span>課題やグループセッション
          </p>
          <p>
            <span>✔︎</span>LINEサポート
          </p>
          <p>
            <span>✔︎</span>再受講割引
          </p>
          <p>
            <span>✔︎</span>特別講座ご優待etc…
          </p>
        </div>
        <div className="school-care">
          <h2>何が違うの⁇何故ケアなの⁇</h2>
          <img src="/images/school7.png" />
          <p>
            お客様はサロンに何を求めてご来店くださるのでしょうか。
            <br />
            身だしなみだったり
            <br />
            気分転換だったり
            <br />
            癒しの場所だったり
            <br />
            リフレッシュできる場所だったり…
            <br />
            ネイルのその奥にある＋αの思いはそれぞれ。
            <br />
            ですが、
            <br />
            スキンケアと同じで何もしていなくても手元が綺麗だと単純にそれだけで気分が上がりますし、手元が綺麗だからこそARTも映えると思います。
          </p>
          <p>
            そして
            <br />
            土台がしっかりとあるプロだから出来るのが
            <br />
            【手元そのものを綺麗にするケア】
            <br />
            お客様満足度が上がる＋αの部分をケアメニューでサポート出来ればと思いこのプログラムを立ち上げました。
            <br />
            ケアメニューで今よりお客様に喜んでいただく為には、
          </p>
          <div className="school-care-lists">
            <ul className="school-care-list">
              <li>①原因をリサーチできるカウンセリング力（知識）</li>
              <li>②施術プランを立てられる（知識）</li>
              <li>③1.2をカタチにする施術（技術）</li>
              <li>④セルフケアのアドバイス</li>
            </ul>
          </div>
          <p>
            などが必要です。
            <br />
            知識だけがあってカタチに出来ないとダメですし技術だけあって知識が無いと施術プランが立てられません。
            <br />
            その為に必要な知識を知り、その知識をカタチにする技術を身につけ、
            <br />
            サロンワークで活かし確実にお客様に喜んで頂けるように、【知識】と【技術】と【サロンワーク】を連動した実践型のプログラムです。
          </p>
          <p>
            現在のサロンにぜひ各活用して頂きお客様にもっと喜んで頂けるサロンにしていきましょう！
          </p>
        </div>
      </div>
      <ContactAdoress />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default School;