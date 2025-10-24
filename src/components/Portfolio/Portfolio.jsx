import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Coming Soon',
      image: 'placeholder-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modern e-commerce solution built with React and Node.js.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#'
    },
    {
      id: 2,
      title: 'Coming Soon',
      image: 'placeholder-2',
      description: 'Sed do eiusmod tempor incididunt ut labore. Secure mobile banking application with biometric authentication.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      github: '#'
    },
    {
      id: 3,
      title: 'Coming Soon',
      image: 'placeholder-3',
      description: 'Et dolore magna aliqua. Complete brand identity package including logo, colors, and guidelines.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
      github: '#'
    },
    {
      id: 4,
      title: 'Coming Soon',
      image: 'placeholder-4',
      description: 'Ut enim ad minim veniam. Collaborative project management tool with real-time updates.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io'],
      github: '#'
    },
    {
      id: 5,
      title: 'Coming Soon',
      image: 'placeholder-5',
      description: 'Quis nostrud exercitation ullamco. Comprehensive fitness tracking with workout plans and nutrition.',
      technologies: ['Flutter', 'Dart', 'SQLite'],
      github: '#'
    },
    {
      id: 6,
      title: 'Coming Soon',
      image: 'placeholder-6',
      description: 'Laboris nisi ut aliquip ex ea. Elegant restaurant website with online reservation system.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      github: '#'
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title display-4 fw-bold mb-3">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="section-subtitle lead text-muted">
              Take a look at some of my recent work and projects
            </p>
          </div>
        </div>
        
        {/* Portfolio Items */}
        <div className="row portfolio-grid">
          {portfolioItems.map(item => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="portfolio-item card-custom h-100 position-relative">
                <div className="portfolio-image">
                  <div className="image-placeholder bg-light d-flex align-items-center justify-content-center">
                    <i className="bi bi-image display-4 text-muted"></i>
                  </div>
                </div>
                
                <div className="portfolio-content p-4">
                  <h4 className="portfolio-title h5 fw-bold mb-2">{item.title}</h4>
                  <p className="portfolio-description text-muted mb-3">
                    {item.description}
                  </p>
                  
                  <div className="portfolio-technologies mb-3">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-primary me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="portfolio-links">
                    <a 
                      href={item.github} 
                      className="btn btn-outline-secondary btn-sm stretched-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github me-1"></i>
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted mb-3">
              Interested in seeing more of my work?
            </p>
            <a href="https://github.com/samclark1999?tab=repositories" className="btn btn-primary btn-lg">
              <i className="bi bi-github me-2"></i>
              My Github Repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;