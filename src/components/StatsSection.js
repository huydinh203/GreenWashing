import React from "react";
import "./StatsSection.css";

import labelImg from "../assets/images/eco.png";
import natureImg from "../assets/images/issues.png";
import hideImg from "../assets/images/nature-fake.png";

function GreenwashingTactics() {
  return (
    <section className="tactics" id="tactics">
      <h2>Các thủ đoạn Greenwashing phổ biến</h2>
      <p className="tactics-subtitle">
        Nhận biết những dấu hiệu cảnh báo để bảo vệ bản thân khỏi marketing lừa đảo
      </p>
      <div className="tactics-grid">
        <div className="tactic-card">
          <img src={labelImg} alt="Nhãn không rõ ràng" />
          <h3>Nhãn "Eco-Friendly" không rõ ràng</h3>
          <p>Sử dụng thuật ngữ mơ hồ như "thân thiện môi trường" mà không có chứng nhận cụ thể.</p>
          <a href="#learn-more" className="learn-more-btn">Tìm hiểu thêm</a>
        </div>
        <div className="tactic-card">
          <img src={natureImg} alt="Hình ảnh thiên nhiên gây hiểu lầm" />
          <h3>Hình ảnh thiên nhiên gây hiểu lầm</h3>
          <p>Sử dụng màu xanh lá, hình ảnh lá cây trong khi sản phẩm gây hại môi trường.</p>
          <a href="#learn-more" className="learn-more-btn">Tìm hiểu thêm</a>
        </div>
        <div className="tactic-card">
          <img src={hideImg} alt="Che giấu thông tin" />
          <h3>Che giấu thông tin quan trọng</h3>
          <p>Quảng cáo một khía cạnh "xanh" nhỏ trong khi che giấu tác động xấu lớn hơn.</p>
          <a href="#learn-more" className="learn-more-btn">Tìm hiểu thêm</a>
        </div>
        <div className="tactic-card">
          <img src={hideImg} alt="Che giấu thông tin" />
          <h3>Che giấu thông tin quan trọng</h3>
          <p>Quảng cáo một khía cạnh "xanh" nhỏ trong khi che giấu tác động xấu lớn hơn.</p>
          <a href="#learn-more" className="learn-more-btn">Tìm hiểu thêm</a>
        </div>
      </div>
    </section>
  );
}

export default GreenwashingTactics;
