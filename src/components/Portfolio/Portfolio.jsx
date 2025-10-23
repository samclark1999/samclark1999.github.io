import React, { useState } from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: 'placeholder-1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Modern e-commerce solution built with React and Node.js.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'placeholder-2',
      description: 'Sed do eiusmod tempor incididunt ut labore. Secure mobile banking application with biometric authentication.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'placeholder-3',
      description: 'Et dolore magna aliqua. Complete brand identity package including logo, colors, and guidelines.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Task Management System',
      category: 'web',
      image: 'placeholder-4',
      description: 'Ut enim ad minim veniam. Collaborative project management tool with real-time updates.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'placeholder-5',
      description: 'Quis nostrud exercitation ullamco. Comprehensive fitness tracking with workout plans and nutrition.',
      technologies: ['Flutter', 'Dart', 'SQLite'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'web',
      image: 'placeholder-6',
      description: 'Laboris nisi ut aliquip ex ea. Elegant restaurant website with online reservation system.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      link: '#',
      github: '#'
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'Design' }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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
        
        {/* Filter Buttons */}
        <div className="row">
          <div className="col-12">
            <div className="portfolio-filters text-center mb-5">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`btn filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Portfolio Items */}
        <div className="row portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="col-lg-4 col-md-6 mb-4">
              <div className="portfolio-item card-custom h-100">
                <div className="portfolio-image">
                  <div className="image-placeholder bg-light d-flex align-items-center justify-content-center">
                    <i className="bi bi-image display-4 text-muted"></i>
                  </div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-actions">
                      <a 
                        href={item.link} 
                        className="btn btn-light btn-sm me-2"
                        title="View Project"
                      >
                        <i className="bi bi-eye"></i>
                      </a>
                      <a 
                        href={item.github} 
                        className="btn btn-light btn-sm"
                        title="View Code"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                    </div>
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
                      href={item.link} 
                      className="btn btn-outline-primary btn-sm me-2"
                    >
                      <i className="bi bi-arrow-up-right me-1"></i>
                      Live Demo
                    </a>
                    <a 
                      href={item.github} 
                      className="btn btn-outline-secondary btn-sm"
                    >
                      <i className="bi bi-github me-1"></i>
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="row">
            <div className="col-12 text-center">
              <p className="text-muted">No projects found in this category.</p>
            </div>
          </div>
        )}
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted mb-3">
              Interested in seeing more of my work?
            </p>
            <a href="#contact" className="btn btn-primary btn-lg">
              <i className="bi bi-envelope me-2"></i>
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;