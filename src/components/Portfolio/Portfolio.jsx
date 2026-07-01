import { useReveal } from "../../hooks/useReveal";
import Icon from "../Icon/Icon";
import { projects } from "../../data/projects";
import "./Portfolio.scss";

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useReveal();

  return (
    <li
      ref={ref}
      className={`project-card reveal ${isVisible ? "is-visible" : ""}`}
      style={{ "--reveal-delay": `${(index % 3) * 80}ms` }}
    >
      <h3>{project.title}</h3>
      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__tags">
        {project.technologies.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>

      <a className="link-arrow" href={project.link} target="_blank" rel="noopener noreferrer">
        <span className="link-arrow__label">{project.isClient ? "Go to Site" : "View Code"}</span>
        <Icon name={project.isClient ? "arrowUpRight" : "arrowRight"} size={16} className="link-arrow__arrow" />
      </a>
    </li>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section section--cream">
      <div className="container">
        <div className="section-heading">
          <h2>Projects</h2>
          <p className="portfolio-intro">Take a look at some of my recent work and personal projects.</p>
        </div>

        <ul className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ul>

        <div className="portfolio-more">
          <a
            className="btn btn--primary"
            href="https://github.com/samclark1999?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
