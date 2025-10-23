import React from 'react';
import './Hero.scss';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="hero-content">
              <h1 className="hero-title display-2 fw-bold mb-3">
                Hello, I'm{' '}
                <span className="text-gradient">Sam Clark</span>
              </h1>
              <h2 className="hero-subtitle h3 mb-4 text-light opacity-75">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="hero-description lead mb-5 text-light opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="hero-buttons d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button 
                  className="btn btn-light btn-lg px-4 py-3"
                  onClick={() => scrollToSection('portfolio')}
                >
                  <i className="bi bi-briefcase me-2"></i>
                  View My Work
                </button>
                <button 
                  className="btn btn-outline-light btn-lg px-4 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  <i className="bi bi-envelope me-2"></i>
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <button 
            className="btn btn-link text-light"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about section"
          >
            <i className="bi bi-chevron-down fs-2"></i>
          </button>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="hero-bg-elements">
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
        <div className="hero-circle hero-circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;