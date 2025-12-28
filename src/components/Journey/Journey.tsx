import React from "react";
import './Journey.css';

const Journey: React.FC = () => {
  return (
    <div className="journey-container">
      <h4 className="journey-title">My Journey</h4>
      <p className="journey-text">
        I have 2+ years of experience in software development and specialize in
        the areas of .NET Core, JavaScript, and React Native. My professional
        knowledge and problem-solving attitude help me to break through every
        barrier.
      </p>
      <p className="journey-text">
        I would like to work in a place where I can improve my knowledge and
        contribute to meaningful projects. I have developed applications for
        Legal Firms, Fleet Management, EOS, Political Campaign management, and
        Project Management Tools.
      </p>
      <p className="journey-text">
        Currently working at Ginilytics IT Solution as a Software Engineer,
        where I use industry-leading tools such as Git and CI/CD pipelines to
        streamline development and ensure high-quality outcomes.
      </p>

      {/* Strengths */}
      <h5 className="journey-strengths-title">My Strengths</h5>
      <ul className="journey-strengths-list">
        <li>Always ready for change</li>
        <li>Decision making quality</li>
        <li>Dedication to work</li>
        <li>Keeping a friendly environment among everyone</li>
      </ul>
    </div>
  );
};

export default Journey;
