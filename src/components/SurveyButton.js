import React from "react";
import "./SurveyButton.css";

function SurveyButton() {
  const surveyLink = "https://docs.google.com/forms/d/e/1FAIpQLSeJDlxJ3CTCMqqUddtRZkfFQJ4rDDQOm3Cy5Jk8WKhooDpZcA/viewform?usp=dialog"; // Cập nhật link thật

  return (
    <div className="survey-button">
      <a href={surveyLink} target="_blank" rel="noopener noreferrer" className="survey-btn">
        <span className="emoji">📝</span>
        <span className="text">Tham gia khảo sát</span>
      </a>
    </div>
  );
}

export default SurveyButton;
