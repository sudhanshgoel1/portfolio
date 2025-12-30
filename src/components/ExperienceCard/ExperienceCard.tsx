import React from "react";
import "./ExperienceCard.css";
import { FaBriefcase } from "react-icons/fa";

interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  responsibilities: string[][];
  tech: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  location,
  duration,
  description,
  responsibilities,
  tech,
}) => {
  return (
    <div className="experience-timeline-item" data-aos="fade-up">
      {/* Timeline Connector */}
      <div className="timeline-connector">
        <div className="timeline-dot">
          <div className="timeline-dot-inner"></div>
        </div>
        <div className="timeline-line"></div>
      </div>

      {/* Experience Card */}
      <div className="experience-card-modern">
        <div className="experience-header">
          <div className="experience-title-section">
            <h3 className="experience-role">{role}</h3>
            <div className="experience-company">
              <span className="company-name">{company}</span>
              <span className="company-location">{location}</span>
            </div>
            <div className="experience-duration">{duration}</div>
          </div>
          <div className="experience-icon">
            <FaBriefcase />
          </div>
        </div>

        <div className="experience-description">
          {description}
        </div>

        {/* Responsibilities */}
        <div className="experience-section">
          <h4 className="section-title">Key Responsibilities</h4>
          <div className="responsibilities-grid">
            {responsibilities.map((col, i) => (
              <div key={i} className="responsibility-column">
                {col.map((item, idx) => (
                  <div key={idx} className="responsibility-item">
                    <div className="responsibility-bullet"></div>
                    <span className="responsibility-text">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="experience-section">
          <h4 className="section-title">Technologies & Tools</h4>
          <div className="tech-stack">
            {tech.map((technology, i) => (
              <span 
                key={i} 
                className="tech-badge"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
