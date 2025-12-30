import { JSX } from 'react';
import './Achievements.css';
import MultiShadeText from '../../components/MultiShadeText/MultiShadeText';
import { achievements } from '../../dummyData/dummyData';
import { FaTrophy, FaAward, FaStar, FaMedal } from "react-icons/fa";

const Achievements = (): JSX.Element => {
  const getAchievementIcon = (title: string) => {
    if (title.includes('Prize') || title.includes('Winner')) return <FaTrophy />;
    if (title.includes('Certified') || title.includes('AWS')) return <FaAward />;
    if (title.includes('Speaker') || title.includes('Tech')) return <FaStar />;
    return <FaMedal />;
  };

  const getAchievementColor = (index: number) => {
    const colors = [
      'linear-gradient(135deg, #FFD700, #FFA500)', // Gold
      'linear-gradient(135deg, #7d5fff, #18dcff)', // Purple-Cyan
      'linear-gradient(135deg, #FF6B6B, #FF8E53)', // Red-Orange
      'linear-gradient(135deg, #4ECDC4, #44A08D)'  // Teal-Green
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="achievements" className="achievements-section-modern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <MultiShadeText text="Awards & Achievements" className="fw-bold" />
          </h2>
          <p className="section-subtitle">
            Recognition and milestones that mark my journey in technology and professional growth
          </p>
        </div>

        <div className="achievements-content">
          {/* Achievement Cards Grid */}
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="achievement-card-modern"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="achievement-header">
                  <div 
                    className="achievement-icon"
                    style={{ background: getAchievementColor(index) }}
                  >
                    {getAchievementIcon(achievement.title)}
                  </div>
                  <div className="achievement-year">{achievement.year}</div>
                </div>

                <div className="achievement-content">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
                </div>

                <div className="achievement-footer">
                  <div className="achievement-badge">
                    <span className="badge-icon">{achievement.icon}</span>
                    <span className="badge-text">Achievement</span>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="achievement-overlay"></div>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          {/* <div className="achievement-stats" data-aos="fade-up" data-aos-delay="600">
            <div className="achievement-stats-container">
              <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-content">
                  <div className="stat-number">{achievements.length}</div>
                  <div className="stat-label">Total Achievements</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-content">
                  <div className="stat-number">2022-2023</div>
                  <div className="stat-label">Achievement Years</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-content">
                  <div className="stat-number">1st</div>
                  <div className="stat-label">Prize Winner</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-content">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Motivation Quote */}
          <div className="motivation-section" data-aos="fade-up" data-aos-delay="800">
            <div className="motivation-card">
              <div className="motivation-icon">🌟</div>
              <div className="motivation-content">
                <h4 className="motivation-title">Continuous Growth & Excellence</h4>
                <p className="motivation-text">
                  Every achievement is a stepping stone to greater heights. I believe in continuous learning, 
                  pushing boundaries, and striving for excellence in everything I do. These recognitions fuel 
                  my passion to create innovative solutions and make a meaningful impact in the tech industry.
                </p>
                <div className="motivation-quote">
                  <span className="quote-mark">"</span>
                  <span className="quote-text">Success is not final, failure is not fatal: it is the courage to continue that counts.</span>
                  <span className="quote-author">- Winston Churchill</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
