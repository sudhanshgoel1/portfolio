import { JSX } from 'react';
import './Projects.css';
import { projects } from '../../dummyData/dummyData';
import MultiShadeText from '../../components/MultiShadeText/MultiShadeText';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

const Projects = (): JSX.Element => {
  return (
    <section id="projects" className="projects-section-modern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <MultiShadeText text="Featured Projects" className="fw-bold" />
          </h2>
          <p className="section-subtitle">
            A showcase of my recent work and technical expertise across various domains
          </p>
        </div>

        <div className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                icon={project.icon}
                tech={project.tech || []}
                github={project.github}
                demo={project.demo}
                featured={index === 0} // Make first project featured
              />
            ))}
          </div>

          {/* Project Stats */}
          {/* <div className="project-stats" data-aos="fade-up" data-aos-delay="600">
            <div className="project-stats-container grid-4">
              <div className="stat-card-unified">
                <div className="stat-icon">🚀</div>
                <div className="stat-number">{projects.length}+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">💻</div>
                <div className="stat-number">10+</div>
                <div className="stat-label">Technologies Used</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">⭐</div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              
              <div className="stat-card-unified">
                <div className="stat-icon">🎯</div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Availability</div>
              </div>
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="projects-cta" data-aos="fade-up" data-aos-delay="800">
            <div className="cta-card">
              <div className="cta-content">
                <h3 className="cta-title">Interested in Working Together?</h3>
                <p className="cta-description">
                  I'm always excited to take on new challenges and create innovative solutions. 
                  Let's discuss how we can bring your ideas to life.
                </p>
                <div className="cta-buttons">
                  <a href="#contact" className="btn-modern btn-primary">
                    Get In Touch
                  </a>
                  {/* <a href="https://github.com/sudhanshgoel1" className="btn-modern btn-outline" target="_blank" rel="noopener noreferrer">
                    View GitHub
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
