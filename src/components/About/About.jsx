import React from 'react';
import './About.scss';

const About = () => {
  const skills = [
    { name: 'React.js', level: 95, icon: 'bi-code-slash' },
    { name: 'JavaScript', level: 90, icon: 'bi-braces' },
    { name: 'Node.js', level: 85, icon: 'bi-server' },
    { name: 'Python', level: 80, icon: 'bi-terminal' },
    { name: 'UI/UX Design', level: 88, icon: 'bi-palette' },
    { name: 'MongoDB', level: 75, icon: 'bi-database' },
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title display-4 fw-bold mb-3">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="section-subtitle lead text-muted">
              Get to know more about my background and expertise
            </p>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="about-image-wrapper">
              <div className="about-image-placeholder bg-light d-flex align-items-center justify-content-center">
                <i className="bi bi-person-circle display-1 text-muted"></i>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="about-content">
              <h3 className="h2 fw-bold mb-4">
                Passionate Developer & Designer
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <div className="about-stats row text-center mb-4">
                <div className="col-4">
                  <div className="stat-item">
                    <h4 className="stat-number fw-bold text-primary">50+</h4>
                    <p className="stat-label text-muted mb-0">Projects</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item">
                    <h4 className="stat-number fw-bold text-primary">3+</h4>
                    <p className="stat-label text-muted mb-0">Years Experience</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item">
                    <h4 className="stat-number fw-bold text-primary">25+</h4>
                    <p className="stat-label text-muted mb-0">Happy Clients</p>
                  </div>
                </div>
              </div>
              
              <a href="#contact" className="btn btn-primary btn-lg">
                <i className="bi bi-download me-2"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center mb-5">
            <h3 className="h2 fw-bold mb-3">
              My <span className="text-primary">Skills</span>
            </h3>
            <p className="text-muted">
              Technologies and tools I work with
            </p>
          </div>
        </div>
        
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="skill-item">
                <div className="skill-header d-flex align-items-center mb-2">
                  <i className={`${skill.icon} me-3 text-primary fs-4`}></i>
                  <div className="skill-info flex-grow-1">
                    <h5 className="skill-name mb-0">{skill.name}</h5>
                    <span className="skill-percentage text-primary fw-bold">{skill.level}%</span>
                  </div>
                </div>
                <div className="progress skill-progress">
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;