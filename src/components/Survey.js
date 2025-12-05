// Survey.jsx
import React from "react";
// Đảm bảo bạn import file CSS đã tách
import './Survey.css'; 
import SurveyPoster from '../assets/images/the 7 sins of greenwashing.png'
import VideoMp4 from '../assets/skrtt.mp4' 
function Survey() {
  return (
    <section className="survey" id="survey">
      {/* Decorative Elements */}
      <div className="leaf-decoration leaf-top-left">🍃</div>
      <div className="leaf-decoration leaf-top-right">🌿</div>
      <div className="leaf-decoration leaf-bottom-left">🌱</div>
      <div className="leaf-decoration leaf-bottom-right">🍀</div>
            
      {/* Main Title */}
      <div className="survey-title-section">
        <h1 className="main-title">
          <span className="title-number">7</span>
          <span className="title-text">Sins of Greenwashing</span>
        </h1>
        <div className="title-underline"></div>
      </div>

      <div className="survey-content">
        <h2>Tham gia khảo sát</h2>
        <p>
          Hãy chia sẻ ý kiến của bạn về mức độ nhận thức greenwashing để chúng tôi          có thể tổng hợp và công bố báo cáo thống kê minh bạch.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJDlxJ3CTCMqqUddtRZkfFQJ4rDDQOm3Cy5Jk8WKhooDpZcA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="survey-link"
        >
          <span>Mở khảo sát</span>
          <span className="link-arrow">→</span>
        </a>
      </div>

      {/* Media Section: Sử dụng cấu trúc JSX mới bạn cung cấp */}
      <div className="survey-media">
        {/* Poster */}
        <div className="survey-media-item poster-container">
          <div className="media-label">Infographic Poster</div>
          <img 
            // Sử dụng biến import (hoặc placeholder URL)
            src={SurveyPoster} 
            alt="7 Sins of Greenwashing Poster" 
            className="survey-poster" 
          />
        </div>
                
        {/* Video */}
        <div className="survey-media-item video-wrapper">
          <div className="media-label">Video Giải Thích</div>
          <div className="video-container">
            <video className="self-hosted-video" controls poster={SurveyPoster}>
              {/* Sử dụng biến import (hoặc placeholder URL) */}
              <source src={VideoMp4} type="video/mp4" />
              {/* Thêm source WebM nếu có, sử dụng biến import nếu bạn có file WebM */}
              {/* <source src={VideoWebm} type="video/webm" /> */}
              Trình duyệt của bạn không hỗ trợ thẻ video HTML5.
            </video>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="wave-decoration">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C300,80 600,0 900,40 C1050,60 1100,80 1200,60 L1200,120 L0,120 Z" fill="#a5d6a7" opacity="0.3"/>
          <path d="M0,60 C300,20 600,80 900,50 C1050,40 1100,30 1200,50 L1200,120 L0,120 Z" fill="#81c784" opacity="0.3"/>
        </svg>
      </div>
    </section>
  );
}

export default Survey;