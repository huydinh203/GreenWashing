import React from "react";
import "./Survey.css";

function Survey() {
  return (
    <section className="survey" id="survey">
      <h2>Tham gia khảo sát</h2>
      <p>
        Hãy chia sẻ ý kiến của bạn về mức độ nhận thức greenwashing để chúng tôi
        có thể tổng hợp và công bố báo cáo thống kê minh bạch.
      </p>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSeJDlxJ3CTCMqqUddtRZkfFQJ4rDDQOm3Cy5Jk8WKhooDpZcA/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="survey-link"
      >
        Mở khảo sát
      </a>
    </section>
  );
}

export default Survey;
