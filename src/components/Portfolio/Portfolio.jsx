import React from 'react';
import './Portfolio.scss';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'My Personal Website',
      image: '/src/images/portfolio.webp',
      description: 'This repo contains the code used too build this website.',
      technologies: ['React', 'Node.js', 'WebPack', 'Bootstrap', 'SASS'],
      github: 'https://github.com/samclark1999/samclark1999.github.io',
      isClient: false
    },
    {
      id: 2,
      title: 'Clark Financial',
      image: './src/images/clark-financial.webp',
      description: 'Clark financial is a full-stack banking application. Allows the user to create account, login, and keep track of deposits and withdraws. It has capability to store data of each user and retrieve that data on login.',
      technologies: ['React', 'Node.js', 'Docker', 'MongoDB', 'Bootstrap', 'Google Cloud'],
      github: 'https://github.com/samclark1999/Clark-Financial-Full-Stack',
      isClient: false
    },
    {
      id: 3,
      title: 'To-Do List',
      image: '/src/images/to-do-list.webp',
      description: 'To-Do List is an application developed using React. It has the functionality to allow users to create a to-do, complete or delete a to-do, and sort to-dos by completed or uncompleted.',
      technologies: ['React', 'Node.js'],
      github: '',
      isClient: false
    },
    {
      id: 4,
      title: 'Post Status Changer',
      image: '/src/images/WP-blue-bg.webp',
      description: 'This is a WordPress plugin with a GUI to change the post status for multiple posts at once.',
      technologies: ['PHP', 'WordPress', 'JavaScript', 'jQuery'],
      github: 'https://github.com/samclark1999/wp-post-status-changer',
      isClient: false
    },
    {
      id: 5,
      title: 'Anderson Advisors',
      image: '/src/images/WP-orange-bg.webp',
      description: 'This is a client WordPress website built for a financial advisory business. I was the lead developer who replatformed their site to a custom WP theme.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'SASS'],
      github: 'https://andersonadvisors.com',
      isClient: true
    },
    {
      id: 6,
      title: 'WareSpace',
      image: '/src/images/WP-blue-bg.webp',
      description: 'This is a WordPress website for a warehousing and storage solutions company. I was the lead developer who replatformed their site to a custom WP theme.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'SASS'],
      github: 'https://warespace.com',
      isClient: true
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
                  
                  {item.github && (
                    <div className="portfolio-links">
                      <a 
                        href={item.github} 
                        className="btn btn-outline-secondary btn-sm stretched-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.isClient ? (
                          <>
                            <i className="bi bi-arrow-up-right me-1"></i>
                            Go to Site
                          </>
                        ) : (
                          <>
                            <i className="bi bi-github me-1"></i>
                            View Code
                          </>
                        )}
                      </a>
                    </div>
                  )}
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