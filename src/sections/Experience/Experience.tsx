import { JSX } from 'react';
import './Experience.css';
import { ExperienceCard } from '../../components/ExperienceCard/ExperienceCard';
import MultiShadeText from '../../components/MultiShadeText/MultiShadeText';
import { experiences } from '../../dummyData/dummyData';

const Experience = (): JSX.Element => {
  return (
    <section id="experience" className="experience-section-modern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <MultiShadeText text="Work Experience" className="fw-bold" />
          </h2>
          <p className="section-subtitle">
            My professional journey and contributions in software development
          </p>
        </div>

        <div className="experience-content">
          {/* Experience Timeline */}
          <div className="experience-timeline">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                role={experience.role}
                company={experience.company}
                location={experience.location}
                duration={experience.duration}
                description={experience.description}
                responsibilities={experience.responsibilities}
                tech={experience.tech}
              />
            ))}
          </div>

          {/* Experience Stats */}
          <div className="experience-stats" data-aos="fade-up" data-aos-delay="600">
            <div className="experience-stats-container grid-4">
              <div className="stat-card-unified">
                <div className="stat-icon">💼</div>
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">🚀</div>
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">🏢</div>
                <div className="stat-number">3</div>
                <div className="stat-label">Major Applications</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Professional Growth */}
          <div className="professional-growth" data-aos="fade-up" data-aos-delay="800">
            <div className="growth-card">
              <div className="growth-icon">📈</div>
              <div className="growth-content">
                <h3 className="growth-title">Professional Growth & Technical Excellence</h3>
                <p className="growth-text">
                  As a dedicated Software Engineer with 2+ years of experience, I've consistently delivered 
                  innovative solutions across diverse domains including Legal Tech, Fleet Management, and 
                  Political Campaign Systems. My expertise spans full-stack development with modern technologies, 
                  and I take pride in writing clean, maintainable code that scales with business needs.
                </p>
                <div className="growth-highlights">
                  <div className="highlight-item">
                    <div className="highlight-icon">🎯</div>
                    <div className="highlight-text">
                      <strong>End-to-End Development:</strong> Led complete application lifecycles from 
                      requirement analysis to deployment and maintenance
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🤝</div>
                    <div className="highlight-text">
                      <strong>Client Collaboration:</strong> Direct stakeholder communication, requirement 
                      gathering, and solution architecture design
                    </div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">⚡</div>
                    <div className="highlight-text">
                      <strong>DevOps Excellence:</strong> Implemented CI/CD pipelines, automated testing, 
                      and deployment strategies for improved efficiency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
