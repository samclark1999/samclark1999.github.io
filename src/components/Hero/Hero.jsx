import { profile } from "../../data/profile";
import headshotImg from "../../images/headshot.webp";
import "./Hero.scss";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <section id="home" className="hero section section--ink">
      <div className="hero__dot-grid" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">{profile.role}</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__company">
            Currently at{" "}
            <a href={profile.company.url} target="_blank" rel="noopener noreferrer">
              {profile.company.name}
            </a>
          </p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollToSection("portfolio")}>
              View My Work
            </button>
            <button className="btn btn--secondary" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__glow" aria-hidden="true" />
          <img src={headshotImg} alt={`${profile.name} headshot`} width="900" height="1350" loading="eager" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
