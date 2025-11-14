import React from "react";
import "./About.css";
import aboutImage from "../assets/images/about.png"; // Đặt hình vào thư mục assets

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="Greenwashing Awareness" />
        </div>
        <div className="about-content">
          <h2>GIỚI THIỆU DỰ ÁN</h2>
          <p>
            Dự án <strong>Greenwashing Awareness</strong> được tạo ra nhằm giúp cộng đồng hiểu rõ hơn về hiện tượng “greenwashing” — khi các thương hiệu cố tình quảng bá sản phẩm là thân thiện với môi trường trong khi thực tế không phải vậy.
          </p>
          <p>
            Trang web này được thiết kế để nâng cao nhận thức, chia sẻ dữ liệu và mời mọi người cùng tham gia khảo sát để đóng góp vào báo cáo nghiên cứu xanh.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
