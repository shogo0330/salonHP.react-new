import React from "react";
import "../styles/access.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactAddress from "../components/ContactAddress";

function Access() {
  return (
    <div className="access-page">
      <Header />
      <div className="access">
        <div className="access-top">
          <h5>《アクセス》</h5>
          <p className="access-logo">緒々one+</p>
          <p>〒669-1512 兵庫県三田市高次1丁目2-11 さくらマンション102</p>
          <p>営業時間 / 10:00 - 20:00</p>
          <p>定休日 / 不定休</p>
        </div>
        <div className="parking-guide">
          <h5>《お車でお越しの方へ》</h5>
          <p>
            専用駐車場ございます。<a href="#">駐車場案内はコチラ»</a>
          </p>
        </div>
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6545.291822705676!2d135.22787197585848!3d34.890236873019425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600066a44138beef%3A0x82a4c5c756b0457a!2z44CSNjY5LTE1MTIg5YW15bqr55yM5LiJ55Sw5biC6auY5qyh77yR5LiB55uu77yS4oiS77yR77yRIOOBleOBj-OCieODnuODs-OCt-ODp-ODsyAxMDI!5e0!3m2!1sja!2sjp!4v1740046994065!5m2!1sja!2sjp"
            className="google-map"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactAddress />
      <Footer />
    </div>
  );
}

export default Access;