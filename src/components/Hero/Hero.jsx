import React from "react";
import "./Hero.scss";
import headshotImg from "../../images/headshot.webp";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gx-5">
          {/* Left column - copy */}
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="hero-title text-start fw-bold mb-3">Sam Clark</h1>
              <h2 className="hero-subtitle text-start h3 mb-2">
                Full Stack Web Developer
              </h2>
              <p className="current-job text-start lead mb-4">
                Currently working at{" "}
                <a
                  href="https://www.level.agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Level Agency
                </a>
              </p>
              <p className="hero-description text-start lead mb-5">
                Crafting optimized websites that are fast, accessible and high
                performing for clients.
              </p>
              <div className="hero-buttons d-flex flex-column flex-sm-row gap-3">
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection("portfolio")}
                >
                  <i className="bi bi-briefcase me-2"></i>
                  View My Work
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => scrollToSection("contact")}
                >
                  <i className="bi bi-envelope me-2"></i>
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          {/* Right column - headshot */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="hero-image-wrapper">
              <img
                src={headshotImg}
                alt="Sam Clark"
                className="hero-headshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
