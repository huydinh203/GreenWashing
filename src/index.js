import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Khởi tạo root React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 🔽 Đặt đoạn code thêm hiệu ứng scroll sau khi render xong
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

reportWebVitals();
