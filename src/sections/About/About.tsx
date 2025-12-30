import { JSX } from 'react';
import './About.css'
import MultiShadeText from '../../components/MultiShadeText/MultiShadeText';
import { stats } from '../../dummyData/dummyData';

const About = (): JSX.Element => {
  return (
    <section id="about" className="about-section-modern">
      <div className='container'>
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <MultiShadeText text="About Me" className="fw-bold" />
          </h2>
          <p className="section-subtitle">
            Passionate software engineer crafting digital solutions with modern technologies
          </p>
        </div>

        <div className="about-content-grid">
          {/* Main Content */}
          <div className="about-main-content" data-aos="fade-right">
            <div className="about-story">
              <h3 className="content-title">My Journey</h3>
              <div className="story-text">
                <p>
                  My journey in technology began in school with C and C++, sparking a passion that led me to pursue a Bachelor's in Computer Applications. I honed my problem-solving skills through coding competitions, earning recognition in "Debug the Bug" and Technical Quizzes.
                </p>
                <p>
                  I explored modern web and backend technologies, working on projects like a Bank Management System (C#) and a Property Management System (ReactJS + TypeScript + .NET + PostgreSQL), gaining hands-on experience in full-stack development.
                </p>
                <p>
                  Today, I'm a Software Engineer building dynamic and scalable web applications with expertise in ReactJS, TypeScript, React Native, .NET, C#, Golang, and PostgreSQL. I'm also pursuing my Master's in Computer Applications at Chandigarh University.
                </p>
                <p>
                  For me, this path is about solving problems, embracing challenges, and building impactful solutions — and it's only just beginning.
                </p>
              </div>
            </div>

            <div className="about-strengths">
              <h3 className="content-title">Core Strengths</h3>
              <div className="strengths-grid">
                <div className="strength-item">
                  <div className="strength-icon">🧠</div>
                  <div className="strength-content">
                    <h4>Problem Solving</h4>
                    <p>Strong analytical thinking with logical approach to complex challenges</p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">⚡</div>
                  <div className="strength-content">
                    <h4>Quick Adaptability</h4>
                    <p>Fast learner with ability to master new technologies and frameworks</p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">🤝</div>
                  <div className="strength-content">
                    <h4>Team Collaboration</h4>
                    <p>Excellent communication and teamwork skills for project success</p>
                  </div>
                </div>
                <div className="strength-item">
                  <div className="strength-icon">🎯</div>
                  <div className="strength-content">
                    <h4>Attention to Detail</h4>
                    <p>Meticulous approach to coding, debugging, and UI/UX implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="about-stats-section" data-aos="fade-left">
            <div className="about-stats-container">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="stat-card-modern"
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 50)}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal Quote */}
            <div className="personal-quote" data-aos="fade-up" data-aos-delay="600">
              <div className="quote-content">
                <div className="quote-mark">"</div>
                <p className="quote-text">
                  Code is like humor. When you have to explain it, it's bad.
                </p>
                <div className="quote-author">- Cory House</div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="skills-preview" data-aos="fade-up" data-aos-delay="700">
              <h4 className="skills-title">Tech Stack</h4>
              <div className="skills-tags">
                {['React', 'TypeScript', 'React Native', '.NET', 'Golang', 'PostgreSQL'].map((skill, index) => (
                  <span 
                    key={index}
                    className="skill-tag"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;