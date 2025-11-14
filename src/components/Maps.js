import React from "react";
import "./Maps.css";

function GoogleMap() {
  return (
    <section className="google-map-section">
      <div className="google-map-wrapper">
        <h3 className="map-title">Địa điểm khảo sát</h3>
        <p className="map-description">
          Trường Đại học Văn Lang - Cơ sở chính (TP. Hồ Chí Minh)
        </p>

        <div className="google-map-container">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7928068705937!2d106.6978398!3d10.8271621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f4a62fce9b%3A0xc99902aa1e26ef02!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBWxINuIExhbmcgLSBDxqEgc-G7nyBjaMOtbmg!5e0!3m2!1svi!2s!4v1762088341017!5m2!1svi!2s"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default GoogleMap;
