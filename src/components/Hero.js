import React from "react";
import "./Hero.css";
import SurveyButton from "./SurveyButton";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Hiểu rõ hơn về <span>GREENWASHING</span></h1>
        <p>
          GREENWASHING là khi các thương hiệu “giả vờ xanh” để đánh lừa người tiêu dùng.
          Hãy cùng tham gia khảo sát để nâng cao nhận thức và tạo ra thay đổi tích cực 🌱
        </p>
        <SurveyButton />
      </div>
    </section>  
  );
}

export default Hero;
