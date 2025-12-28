import { FC } from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import './JourneyItem.css';

interface JourneyItemProps {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  description: string;
  subjects: string[];
  status: "In Progress" | "Completed";
}

const JourneyItem: FC<JourneyItemProps> = ({
  degree,
  institution,
  location,
  duration,
  description,
  subjects,
  status,
}) => {
  return (
    <div className="journey-item">
      <div className="journey-header">
        <h3 className="journey-degree">
          <FaGraduationCap /> {degree}
        </h3>
        <span
          className={`journey-status ${
            status === "In Progress" ? "in-progress" : "completed"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="journey-institution">{institution}</p>
      <div className="journey-location-duration">
        <div className="journey-location">
          <FaMapMarkerAlt /> {location}
        </div>
        <div className="journey-duration">
          <FaCalendarAlt /> {duration}
        </div>
      </div>
      <p className="journey-description">{description}</p>
      <div className="journey-subjects">
        {subjects.map((sub, i) => (
          <span key={i} className="journey-subject-tag">
            {sub}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JourneyItem;
