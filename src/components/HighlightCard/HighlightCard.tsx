import { FC } from "react";
import { FaGraduationCap } from "react-icons/fa";
import './HighlightCard.css';

interface HighlightCardProps {
  title: string;
  description: string;
}

const HighlightCard: FC<HighlightCardProps> = ({ title, description }) => {
  return (
    <div className="highlight-card-modern">
      <div className="highlight-icon">
        <FaGraduationCap />
      </div>
      <h3 className="highlight-title">{title}</h3>
      <p className="highlight-description">{description}</p>
    </div>
  );
};

export default HighlightCard;
