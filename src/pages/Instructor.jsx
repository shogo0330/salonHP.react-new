import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/instructor.css";
import ContactAddress from "../components/ContactAddress";

function Instructor() {
  return (
    <div>
      <Header />
      <div className="instructor-page">
        <div className="instructor-top">
          <img src="/images/instructor-1.jpeg" />
          <div className="instructor-introduction">
            <div className="instructor-name">
              <h3>佐々木 加代</h3>
              <p>sasaki kayo</p>
            </div>
            <div className="instructor-license">
              <h5>〈資格〉</h5>
              <p>
                ◎［一般社団法人爪肌美容検定協会］認定講師/爪肌育成カウンセラー
                <br />
                ◎［一般社団法人スキンケア協会］スキンケアカウンセラー
                <br />
                ◎［公益財団法人日本ネイリスト協会］本部認定講師
                <br />
                ◎栄養士
                <br />
                ◎［一般社団法人化粧品検定協会］コスメコンシェルジュ◎その他、美容資格諸々…
              </p>
            </div>
          </div>
        </div>
        <div className="instructor-career">
          <h5>〈受賞歴・経歴〉</h5>
          <h7>2014年</h7>
          <p>
            <span>|</span>大人の女性の為のネイルサロン「緒々」開業
          </p>
          <p>
            <span>|</span>基礎力向上を目的としたネイルスクール開校
          </p>
          <p>※コンテスト出場や知識の勉強を本格的に始める</p>
          <h7>2017年</h7>
          <p>
            <span>|</span>ネイルケアや爪や肌に関する講座を自校・他校で開催
          </p>
          <p>
            <span>|</span>
            ANSEM主催「ネイルケアと皮膚科学」1デイ講座を全国3都市で開催現在
          </p>
          <p>西日本地区プロフェッショナル部門</p>
          <p>ネイルケア チャンピオン受賞</p>
          <h7>2018年</h7>
          <p>
            <span>|</span>
            さらにステップアップの為「緒々one+」に屋号変更し、移転オープン(現在サロン)
          </p>
          <p>
            <span>|</span>基礎力向上を目的としたネイルスクール開校
          </p>
          <p>
            <span>|</span>
            東京ネイルエキスポ 全日本ネイリスト選手権プロフェッショナル部門ネイルケア準優勝
          </p>
          <p>
            <span>|</span>その他、ネイルコンテスト入賞多数…
          </p>
          <h7>2019年</h7>
          <p>
            <span>|</span>
            スキンケアが学べる肌育成カレッジ講師として、主に栄養学を担当
          </p>
          <h7>2020年</h7>
          <p>
            <span>|</span>
            ネイルケアスペシャリスト養成プログラムをスタート
          </p>
        </div>
        <div className="instructor-message">
          <h5>〈ご挨拶〉</h5>
          <p>
            こんにちは。
            <br />
            ケアスペシャリスト養成プログラムの代表講師をしております、佐々木加代でございます。
          </p>
          <p>
            この度はケアプログラムにご興味をお持ち頂きまして誠にありがとうございます。
          </p>
          <p>『爪』は、どう生活していたか…の結果がでる場所。</p>
          <p>
            そう、結果でしかありません。
            <br />
            爪といえど、みるべきポイントはもっと広く
            <br />
            そして答えは１つではなく、十人十色。
            <br />
            ２つ３つの事柄が合わさってその結果（例えば二枚爪など）になっている事が多いです。
          </p>
          <p>
            『爪』を深く知る事からスタートし、
            <br />
            『皮膚』を知ることで、さらに爪に詳しくなり
            <br />
            『栄養』を知ることで、さらに爪と肌に詳しくなり
            <br />
            『ホルモンバランス』を知ることで、さらに爪と肌に詳しくなり…
            <br />
            『化粧品』を知ることで、扱う材料やオススメ商品が変わります。
          </p>
          <p>
            大好きなネイリストという職業
            <br />
            本質は【健康な爪の維持】だと思っています。
            <br />
            （デザインやARTはその上に成り立つもの）
          </p>
          <p>
            １つの結果から
            <br />
            視野広く原因を探れる「考える知識」を身につけ
            <br />
            「自分の言葉」でお客様にアドバイスが出来る
            <br />
            ことを目的として
          </p>
          <p>講座は『楽しく学ぶ』をモットーに開催しております！</p>
          <p>
            ネイリストさまも
            <br />
            ネイル講師の方々にも
            <br />
            これから育つネイリストの方達の為に
            <br />
            プロとしてぜひ知って欲しい内容です
          </p>
          <p>
            ネイリストが知るべきは技術だけではありません。
            <br />
            ご興味をお持ちくださりありがとうございます。
            <br />
            一緒にレベルアップ出来ます事を楽しみにしております。
          </p>
          <p>
            緒々one+
            <br />
            ケアスペシャリスト養成プログラム
            <br />
            代表講師 佐々木加代
          </p>
        </div>
      </div>
      <ContactAddress />
      <Footer />
    </div>
  );
}

export default Instructor;