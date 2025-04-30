import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactAdoress from "../components/ContactAdoress";
import "../styles/reserve.css";

function Reserve () {
    useEffect(() => {document.title="Salon HP-予約ページ-"},[])

    const [ schoolFormData, setSchoolFormData ] = useState({
        selectedServices: [],
        dates: [
            {date:"", time:""},
            {date:"", time:""},
            {date:"", time:""},
        ],
        name: "", furigana: "", phone: "", adress: "", email: "", emailConfirm: "", message: "",
        agree: false,
    });

    const [ neilFormData, setNeilFormData ] = useState({
        selectedServices: [],
        dates: [
            {date:"", time:""},
            {date:"", time:""},
            {date:"", time:""},
        ],
        name: "", furigana: "", phone: "", adress: "", email: "", emailConfirm: "", message: "",
        agree: false,
    });

    const services = [
        "パーソナルケアアドバイザー講座",
        "パーソナルケアアドバイザー講座［座学］",
        "パーソナルケアアドバイザー講座［単発］",
        "セラピスト講座",
        "［ANSEM］スキンケア指導士（爪肌美容検定1級）",
        "［ANSEM］日本爪肌美容検定2級対策講座",
        "［ANSEM］皮膚及びケラチンの基礎知識",
        "［ANSEM］美容材料の基礎知識",
        "技術レッスン", "個別カウンセリング", "その他お問合わせ",
    ];

    const neilServices = [ "ネイル予約", "お問合せ", ];

    const handleChangeSchool = (e) => {
        const { value, checked } = e.target;
        if(checked) {
            setSchoolFormData({...schoolFormData,selectedServices: [...schoolFormData.selectedServices,value],});
        } else {
            setSchoolFormData({...schoolFormData,selectedServices: schoolFormData.selectedServices.filter((service) => {
                return service !== value;
            }),});
        }
    };

    const handleChangeNeil = (e) => {
        const { value, checked } = e.target;
        if(checked) {
            setNeilFormData({...neilFormData,selectedServices: [...neilFormData.selectedServices,value],});
        } else {
            setNeilFormData({...neilFormData,selectedServices: neilFormData.selectedServices.filter((service) => {
                return service !== value;
            }),});
        }
    };

    const handleSchoolDateChange = (index, field, value) => {
        const newDates = [...schoolFormData.dates];
        newDates[index][field] = value;
        setSchoolFormData({...schoolFormData,dates: newDates,});
    };

    const handleNeilDateChange = (index, field, value) => {
        const newDates = [...neilFormData.dates];
        newDates[index][field] = value;
        setNeilFormData({...neilFormData,dates: newDates,});
    };

    const timeOptions = [
        "10:00-11:00",
        "11:00-12:00",
        "13:00-14:00",
        "14:00-15:00",
        "15:00-16:00",
    ];

    const handleSubmitSchool = (e) => {
        e.preventDefault();

        const formData = {
            selectedServices: schoolFormData.selectedServices,
            dates: schoolFormData.dates,
            name: schoolFormData.name,
            furigana: schoolFormData.furigana,
            phone: schoolFormData.phone,
            adress: schoolFormData.adress,
            email: schoolFormData.email,
            emailConfirm: schoolFormData.emailConfirm,
            message: schoolFormData.message,
            agree: schoolFormData.agree,
        }

        console.log("送信データ:",formData)
    };

    const handleSubmitNeil = (e) => {
        e.preventDefault();

        const formData = {
            selectedServices: neilFormData.selectedServices,
            dates: neilFormData.dates,
            name: neilFormData.name,
            furigana: neilFormData.furigana,
            phone: neilFormData.phone,
            adress: neilFormData.adress,
            email: neilFormData.email,
            emailConfirm: neilFormData.emailConfirm,
            message: neilFormData.message,
            agree: neilFormData.agree,
        }

        console.log("送信データ:",formData)
    };

    return(
        <div>
            <Header />
            <div className="reserve-page">
                <div className="reserve-top">
                    <button className="line-btn">LINEご予約</button>
                    <p className="reserve-top-message">ご予約の方はメッセージにてお名前・ご希望日時・ご希望の内容を送信ください。</p>
                </div>
                <div className="inquiry-reserve">
                    <div className="school-inquiry">
                        <h6>《スクールのお問合わせ》</h6>
                        <div className="school-form">
                            <form className="item-selection" onSubmit={handleSubmitSchool}>
                                <p>項目を選択してください (必須)</p>
                                <div className="school-item">
                                    {services.map((service) => {
                                        return(
                                            <label key={service}>
                                                <input
                                                    type="checkbox"
                                                    value={service}
                                                    checked={schoolFormData.selectedServices.includes(service)}
                                                    onChange={handleChangeSchool}
                                                />
                                                {service}
                                            </label>
                                        );
                                    })}
                                </div>
                                <div className="form-input">
                                    {schoolFormData.dates.map((item,index) => {
                                        return(
                                            <div className="date-selection">
                                                <p>■ 第{index +1}希望</p>
                                                <input
                                                    type="date"
                                                    value={item.date}
                                                    onChange={(e) => {handleSchoolDateChange(index, "date", e.target.value)}}
                                                    className="date-selection-date"
                                                />
                                                <select
                                                    value={item.time}
                                                    onChange={(e) => {handleSchoolDateChange(index, "time", e.target.value)}}
                                                    className="date-selection-time"
                                                >
                                                    {timeOptions.map((time) => {
                                                        return(
                                                            <option key={time} value={time}>
                                                                {time}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        );
                                    })}
                                    <div className="input-selections">
                                        <label>お名前 (必須)
                                            <input
                                                type="text"
                                                value={schoolFormData.name}
                                                onChange={(e) => {setSchoolFormData({...schoolFormData,name: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>フリガナ (必須)
                                            <input
                                                type="text"
                                                value={schoolFormData.furigana}
                                                onChange={(e) => {setSchoolFormData({...schoolFormData,furigana: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>電話番号 (必須)
                                            <input
                                                type="tel"
                                                value={schoolFormData.phone}
                                                onChange={(e) => {setSchoolFormData({...schoolFormData,phone: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>ご住所 (必須)
                                            <input
                                                type="text"
                                                value={schoolFormData.adress}
                                                onChange={(e) => {setSchoolFormData({...schoolFormData,adress: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>メールアドレス (必須)
                                            <input
                                                type="email"
                                                value={schoolFormData.email}
                                                onChange={(e) => {setSchoolFormData({...schoolFormData,email: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>メールアドレス (確認用)
                                            <input
                                                type="email"
                                                value={schoolFormData.emailConfirm}
                                                onChange={(e) => {setSchoolFormData({...schoolFormData,emailConfirm: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>お問合せ内容
                                            <textarea
                                                value={schoolFormData.message}
                                                onChange={(e) => {setSchoolFormData({...schoolFormData,message: e.target.value})}}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <p>当サイトは、 お客様の個人情報について、お客様の承諾がない限り第三者に開示、提供を一切行いません。ご提供いただいた個人情報を取り扱うにあたり管理責任者を置いて、適切な管理を行っております。</p>
                                <label className="concent">
                                    <input type="checkbox" checked={schoolFormData.agree} onChange={(e) => {setSchoolFormData({...schoolFormData,agree: e.target.checked})}} />個人情報の取扱いについて、同意の上送信します。（確認画面は表示されません）
                                </label>
                                <button type="submit" disabled={!schoolFormData.agree} className="send-btn">送信する</button>
                                <p>※上記のフォームよりうまく送信できない場合は、お電話またはinfo.neil@chochonail.jpまでお問合せください。</p>
                            </form>
                        </div>
                    </div>
                    <div className="neil-reserve">
                        <h6>《ネイルのご予約》</h6>
                        <div className="neil-form">
                        <form className="item-selection" onSubmit={handleSubmitNeil}>
                                <p>項目を選択してください (必須)</p>
                                    <div className="school-item">
                                        {neilServices.map((service) => {
                                            return(
                                                <label key={service}>
                                                    <input
                                                        type="checkbox"
                                                        value={service}
                                                        checked={neilFormData.selectedServices.includes(service)}
                                                        onChange={handleChangeNeil}
                                                    />
                                                    {service}
                                                </label>
                                            );
                                        })}
                                    </div>
                                <div className="form-input">
                                    {neilFormData.dates.map((item,index) => {
                                        return(
                                            <div className="date-selection">
                                                <p>■ 第{index +1}希望</p>
                                                <input
                                                    type="date"
                                                    value={item.date}
                                                    onChange={(e) => {handleNeilDateChange(index, "date", e.target.value)}}
                                                    className="date-selection-date"
                                                />
                                                <select
                                                    value={item.time}
                                                    onChange={(e) => {handleNeilDateChange(index, "time", e.target.value)}}
                                                    className="date-selection-time"
                                                >
                                                    {timeOptions.map((time) => {
                                                        return(
                                                            <option key={time} value={time}>
                                                                {time}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        );
                                    })}
                                    <div className="input-selections">
                                        <label>お名前 (必須)
                                            <input
                                                type="text"
                                                value={neilFormData.name}
                                                onChange={(e) => {setNeilFormData({...neilFormData,name: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>フリガナ (必須)
                                            <input
                                                type="text"
                                                value={neilFormData.furigana}
                                                onChange={(e) => {setNeilFormData({...neilFormData,furigana: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>電話番号 (必須)
                                            <input
                                                type="tel"
                                                value={neilFormData.phone}
                                                onChange={(e) => {setNeilFormData({...neilFormData,phone: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>ご住所 (必須)
                                            <input
                                                type="text"
                                                value={neilFormData.adress}
                                                onChange={(e) => {setNeilFormData({...neilFormData,adress: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>メールアドレス (必須)
                                            <input
                                                type="email"
                                                value={neilFormData.email}
                                                onChange={(e) => {setNeilFormData({...neilFormData,email: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>メールアドレス (確認用)
                                            <input
                                                type="email"
                                                value={neilFormData.emailConfirm}
                                                onChange={(e) => {setNeilFormData({...neilFormData,emailConfirm: e.target.value})}}
                                                required
                                            />
                                        </label>
                                        <label>お問合せ内容
                                            <textarea
                                                value={neilFormData.message}
                                                onChange={(e) => {setNeilFormData({...neilFormData,message: e.target.value})}}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <p>当サイトは、 お客様の個人情報について、お客様の承諾がない限り第三者に開示、提供を一切行いません。ご提供いただいた個人情報を取り扱うにあたり管理責任者を置いて、適切な管理を行っております。</p>
                                <label className="concent">
                                    <input type="checkbox" checked={neilFormData.agree} onChange={(e) => {setNeilFormData({...neilFormData,agree: e.target.checked})}} />個人情報の取扱いについて、同意の上送信します。（確認画面は表示されません）
                                </label>
                                <button type="submit" disabled={!neilFormData.agree} className="send-btn">送信する</button>
                                <p>※上記のフォームよりうまく送信できない場合は、お電話またはinfo.neil@chochonail.jpまでお問合せください。</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ContactAdoress />
            <Footer />
        </div>
    );
};

export default Reserve;