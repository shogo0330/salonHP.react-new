import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/menu.css";
import ContactAddress from "../components/ContactAddress";

function Menu() {
  const menuItems = [
    {
      title: "【ジェル】",
      items: [
        {
          title: "▪【セット】ジェルベーシック",
          description:
            "ジェル +美爪ケアorハンドリフレのどちらかをア選びいただけます",
          price: "9,900円(税込)",
        },
        {
          title: "▪【セット】ジェルリラックス",
          description: "ジェル +美爪ケア+ハンドリフレ",
          price: "12,100円(税込)",
        },
        {
          title: "▪【セット】ジェルアート",
          description: "ジェル +お好きなメインART2本",
          price: "8,800円(税込)",
        },
        {
          title: "▪ワンカラー・グラデーション",
          description:
            "ドライケアメインの丁寧なお手入れ後、ワンカラーかグラデーションを美しく仕上げていきます(美爪ケアに変更の場合はオプションを追加ください)",
          price: "7,700円(税込)",
        },
        {
          title: "▪フレンチ",
          description:
            "ドライケアメインの丁寧なお手入れ後、プロの技で美しいフレンチネイルを仕上げていきます(美爪ケアに変更の場合はオプションを追加ください)",
          price: "8,250円(税込)",
        },
      ],
    },
    {
      title: "【ハンドオプション】",
      items: [
        {
          title: "▪【ハンドオプション】亀裂補正・・長さだし",
          description:
            "二枚爪・亀裂・折れた爪の補正をし、強度と安定感のある形にしていきます。",
          price: "550円(税込)",
        },
        {
          title: "▪【ハンドオプション】亀裂補正・長さだし10本",
          description:
            "二枚爪・亀裂・折れた爪の補正をし、強度と安定感のある形にしていきます。",
          price: "5,500円(税込)",
        },
        {
          title: "▪【ハンドオプション】美爪ケア",
          description:
            "ささくれ・指先の硬くなった角質・伸びすぎて爪に張り付いてる不要な角質など、爪と爪周りをしっとり艶のある指先へとケアしていきます。",
          price: "2,200円(税込)",
        },
      ],
    },
    {
      title: "【ケアカラー】",
      items: [
        {
          title: "▪【セット】ケアベーシック",
          description:
            "【2回目以降!3週間以内のご来店早期割り】 ●美爪ケア+ハンドリフレ",
          price: "8,800円(税込)",
        },
        {
          title: "▪【セット】ケアリラックス",
          description:
            "【2回目以降!3週間以内のご来店早期割り】 ● 美爪ケア+スクラブ+ハンドマスク",
          price: "10,450円(税込)",
        },
        {
          title: "▪基本の美爪ケア",
          description:
            "【2回目以降!3週間以内のご来店早期割り】二枚爪や爪トラブルになりにくい形に爪を整え、ささくれ・硬くなった角質の丁寧にケアし整えていきます。",
          price: "6,600円(税込)",
        },
        {
          title: "▪【メンズケア】メンズケアベーシック",
          description:
            "【2回目以降!3週間以内のご来店早期割り】爪の身だしなみケア+ハンドリフレがついたリラクゼーションメニュー。",
          price: "8,800円(税込)",
        },
      ],
    },
  ];

  const footCareMenus = [
    {
      title: "【フットジェル】",
      items: [
        {
          title: "▪【フットジェルセット】フットジェル+かかとケア",
          description:
            "フットジェルワンカラー＋かかとの角質ケアがついたプラン。※アートは別途",
          price: "12,100円(税込)",
        },
        {
          title: "▪【フットジェルセット】フットジェル+フットリフレ",
          description:
            "フットジェル+フットリフレ40分のキレイと癒しのプラン。※アートは別途",
          price: "12,650円(税込)",
        },
        {
          title: "フットジェルセット】フットジェル＋かかとケア・フットリフレ",
          description: "",
          price: "15,950円(税込)",
        },
        {
          title: "【フットジェル】ワンカラー",
          description:
            "フットジャンプー、整爪、美爪育成キューティクルケア、ジェルワンカラー、クリーム&オイル保湿仕上げ",
          price: "8,800円(税込)",
        },
        {
          title: "【フットジェル】親指アートコース",
          description: "フットジェルワンカラーに、親指アートがついたコース。",
          price: "9,900円(税込)",
        },
      ],
    },
    {
      title: "【フットケア】",
      items: [
        {
          title: "【フットケア】ベーシックフットケア",
          description:
            "フットシャンプー・整爪・爪周りの角質ケア・かかとケア・保湿コーティング・クイックトリートメント",
          price: "9,900円(税込)",
        },
        {
          title: "▪【フットケア】ペディキュアコース",
          description:
            "《足のケアとカラーリング》ベーシックフットケア+ペディキュアカラーリング※ビーチサンダルなど指先の出る履物でお越しください",
          price: "11,550円(税込)",
        },
        {
          title: "▪【フットケア】リラックスフットケアコース",
          description:
            "《夕方の足の疲れや冷えを感じる方に》ベーシックフットケア+数種のハーブ配合の保湿クリーム・オイルで膝下～足裏まで丁寧にほぐしていきます",
          price: "13,750円(税込)",
        },
      ],
    },
    {
      title: "【フットオプション】",
      items: [
        {
          title: "▪【フットオプション】ペディキュア",
          description: "",
          price: "2,200円(税込)",
        },
        {
          title: "▪【フットオプション】もっちりかかと角質ケア",
          description:
            "フット専用美容液で保湿をしながら不要な角質のみを取り除いていきます",
          price: "3,850円(税込)",
        },
        {
          title: "▪【フットオプション】フットリフレ20分",
          description: "",
          price: "2,750円(税込)",
        },
        {
          title: "▪【フットオプション】フットリフレ40分",
          description: "",
          price: "4,400円(税込)",
        },
        {
          title: "▪【オプション】巻き爪ケア",
          description: "",
          price: "1本2,750円~(税込)",
        },
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className="Menu-page">
        <div className="Menu-top">
          <div className="top-img">
            <h5>salon concept</h5>
          </div>
          <p>
            『指先には色気と品格を』をコンセプトに、シンプルで上質・上品で艶っぽさのある手元が『キレイ』と定義する緒々one+のネイル。指先だけにとどまらず、手元全体を美しく清潔に見せる為に、何よりも大切にしている丁寧なケアをベースに指先～手の甲、そしてお肌のトーンアップに繋がる＋αのメニューを幅広くご用意しております全てのメニューで使用する材料や施術工程は、爪肌カウンセリングに基づきお客様に合わせてカスタムしております。またホームケアアドバイスもホームケア~食事アドバイスまでしっかりと丁寧にお伝えしております。
          </p>
        </div>
        <div className="menu-top">
          <div className="menu-top-message">
            <h5>Hand care</h5>
            <p>極上匠の技で爪と肌が喜ぶ一歩先のキレイを磨けるメニュー</p>
          </div>
          <div className="menu-sections">
            {menuItems.map((section, i) => {
              return (
                <div className="menu-section" key={i}>
                  <h5>{section.title}</h5>
                  <ul className="menu-items">
                    {section.items.map((item, j) => {
                      return (
                        <li className="menu-item" key={j}>
                          <p className="item-title">{item.title}</p>
                          <p className="item-description">{item.description}</p>
                          <p className="item-price">{item.price}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="foot-care">
            <div className="foot-care-message">
              <h5>Foot care</h5>
              <p>”美”は足先から。</p>
            </div>
            <div className="foot-care-sections">
              {footCareMenus.map((section, t) => {
                return (
                  <div className="foot-care-section" key={t}>
                    <h5>{section.title}</h5>
                    <ul className="foot-care-items">
                      {section.items.map((item, u) => {
                        return (
                          <li className="menu-item" key={u}>
                            <p className="item-title">{item.title}</p>
                            <p className="item-description">
                              {item.description}
                            </p>
                            <p className="item-price">{item.price}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ContactAddress />
      <Footer />
    </div>
  );
}

export default Menu;