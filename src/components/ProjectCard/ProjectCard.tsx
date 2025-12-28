import React from "react";
import "./ProjectCard.css";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  tech,
  github,
  demo,
  featured = false
}) => {
  return (
    <div 
      className={`project-card-modern ${featured ? 'featured' : ''}`}
      data-aos="fade-up"
    >
      <div className="project-card-header">
        <div className="project-icon">
          {icon}
        </div>
        <div className="project-links">
          {github && (
            <a 
              href={github} 
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code"
            >
              <FiGithub />
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>

      <div className="project-footer">
        <div className="project-tech">
          {tech.map((technology, index) => (
            <span 
              key={index} 
              className="tech-tag"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {technology}
            </span>
          ))}
        </div>
        
        <div className="project-cta">
          <FiCode className="code-icon" />
          <span>View Project</span>
        </div>
      </div>

      {featured && (
        <div className="featured-badge">
          <span>Featured</span>
        </div>
      )}
    </div>
  );
};