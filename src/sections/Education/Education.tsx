import { JSX } from 'react';
import './Education.css';
import MultiShadeText from '../../components/MultiShadeText/MultiShadeText';
import { education } from '../../dummyData/dummyData';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaStar, FaUniversity, FaBook, FaBullseye } from "react-icons/fa";

const Education = (): JSX.Element => {
  return (
    <section id='education' className="education-section-modern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <MultiShadeText text="Education" className="fw-bold" />
          </h2>
          <p className="section-subtitle">
            My academic journey and continuous learning path in computer science
          </p>
        </div>

        <div className="education-content">
          {/* Main Education Card */}
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="education-item"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="education-connector">
                  <div className="education-dot">
                    <FaGraduationCap />
                  </div>
                  {index < education.length - 1 && <div className="education-line"></div>}
                </div>

                <div className="education-card-modern">
                  <div className="education-header">
                    <div className="education-badge">
                      <span className="degree-level">
                        {edu.degree.includes('Master') ? 'Master\'s' : 'Bachelor\'s'}
                      </span>
                    </div>
                    <div className="education-duration">
                      <FaCalendarAlt className="duration-icon" />
                      {edu.duration}
                    </div>
                  </div>

                  <div className="education-main-content">
                    <h3 className="degree-title">{edu.degree}</h3>
                    <h4 className="field-title">{edu.field}</h4>
                    
                    <div className="institution-info">
                      <div className="institution-name">
                        <FaGraduationCap className="institution-icon" />
                        {edu.institution}
                      </div>
                      <div className="institution-location">
                        <FaMapMarkerAlt className="location-icon" />
                        {edu.location}
                      </div>
                    </div>

                    <p className="education-description">{edu.description}</p>

                    <div className="education-footer">
                      <div className="grade-info">
                        <FaStar className="grade-icon" />
                        <span className="grade-label">CGPA:</span>
                        <span className="grade-value">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Stats */}
          <div className="education-stats" data-aos="fade-up" data-aos-delay="400">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaGraduationCap />
                </div>
                <div className="stat-content">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years of Study</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaUniversity />
                </div>
                <div className="stat-content">
                  <div className="stat-number">2</div>
                  <div className="stat-label">Universities</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBook />
                </div>
                <div className="stat-content">
                  <div className="stat-number">8.39</div>
                  <div className="stat-label">CGPA</div>
                </div>
              </div>
              
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBullseye />
                </div>
                <div className="stat-content">
                  <div className="stat-number">2026</div>
                  <div className="stat-label">Graduation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Status */}
          {/* <div className="current-status" data-aos="fade-up" data-aos-delay="600">
            <div className="status-card">
              <div className="status-icon">📖</div>
              <div className="status-content">
                <h4 className="status-title">Currently Pursuing</h4>
                <p className="status-description">
                  Master of Computer Applications at XYZ University, focusing on advanced software engineering, 
                  emerging technologies, and research in computer science applications.
                </p>
                <div className="status-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '50%' }}></div>
                  </div>
                  <span className="progress-text">50% Complete</span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
