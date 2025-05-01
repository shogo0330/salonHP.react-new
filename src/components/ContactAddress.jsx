import React from "react";
import "../styles/contactAddress.css";

function ContactAddress() {
    const handleClick = () => {
        window.open("/Reserve", "_blank", "noopener");
    };

    return (
        <div className="contact-address-page">
            <div className="contact-address">
                <div className="form-reservation">
                    <p>電話でのお問い合わせ</p>
                    <p>ご予約はこちら</p>
                </div>
                <div className="phone">
                    <p className="telephone">TEL.<span>000-555-1111</span></p>
                    <p className="time">受付時間 / 10:00 - 20:00 ［不定休］</p>
                </div>
                <div className="web-form">
                    <p>WEBからのご予約・お問合せはこちら</p>
                </div>
                <div className="web-form-btn">
                    <button onClick={handleClick}>ご予約・お問い合わせ</button>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;