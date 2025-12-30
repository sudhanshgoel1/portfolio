import { JSX } from 'react';
import './Skills.css';
import { skills } from '../../dummyData/dummyData';
import SkillCard from '../../components/SkillCard/SkillCard';
import MultiShadeText from '../../components/MultiShadeText/MultiShadeText';
import { FaBullseye } from 'react-icons/fa';

const Skills = (): JSX.Element => {
  // Additional technologies for tags
  const additionalTech = [
    'Git', 'GitHub', 'Postman', 'Figma', 'Jira', 'REST APIs', 'GraphQL', 'JWT', 'OAuth', 'Microservices', 'Third-party Integrations', 'Twilio', 'Stripe', 'Supabase', 'CI/CD', 'Responsive Design', 'PWA', 'Testing', 'Debugging'
  ];

  return (
    <section id="skills" className="skills-section-modern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <MultiShadeText text="Technical Skills" className="fw-bold" />
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="skills-content">
          {/* Skills Grid */}
          <div className="skills-grid">
            {skills.map((category, index) => (
              <SkillCard 
                key={index} 
                title={category.title} 
                skills={category.skills} 
              />
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="additional-tech" data-aos="fade-up" data-aos-delay="400">
            <h3 className="tech-title">Additional Technologies & Tools</h3>
            <div className="tech-tags">
              {additionalTech.map((tech, index) => (
                <span 
                  key={index} 
                  className="tech-tag"
                  data-aos="fade-up"
                  data-aos-delay={500 + (index * 50)}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Stats */}
          {/* <div className="skills-stats" data-aos="fade-up" data-aos-delay="600">
            <div className="skills-stats-container grid-4">
              <div className="stat-card-unified">
                <div className="stat-icon">💻</div>
                <div className="stat-number">{skills.length}</div>
                <div className="stat-label">Skill Categories</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">🚀</div>
                <div className="stat-number">
                  {skills.reduce((total, category) => total + category.skills.length, 0)}+
                </div>
                <div className="stat-label">Technologies</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">
                  {Math.round(
                    skills.reduce((total, category) => 
                      total + category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length, 0
                    ) / skills.length
                  )}%
                </div>
                <div className="stat-label">Avg. Proficiency</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">📈</div>
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Learning</div>
              </div>
            </div>
          </div> */}

          {/* Learning Philosophy */}
          <div className="learning-philosophy" data-aos="fade-up" data-aos-delay="800">
            <div className="philosophy-card">
              <div className="philosophy-icon">
                <FaBullseye />
              </div>
              <div className="philosophy-content">
                <h3 className="philosophy-title">Continuous Learning Mindset</h3>
                <p className="philosophy-text">
                  Technology evolves rapidly, and I believe in staying ahead of the curve. I'm constantly 
                  learning new frameworks, exploring emerging technologies, and refining my existing skills 
                  to deliver cutting-edge solutions.
                </p>
                <div className="philosophy-quote">
                  <span className="quote-text">
                    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
