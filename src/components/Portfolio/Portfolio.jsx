import { useEffect, useMemo, useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Icon from "../Icon/Icon";
import { projects } from "../../data/projects";
import "./Portfolio.scss";

const PAGE_SIZE = 9;
const MOBILE_PAGE_SIZE = 3;

const CATEGORY_LABELS = {
  personal: "Personal",
  career: "Career",
};

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useReveal();

  return (
    <li
      ref={ref}
      className={`project-card reveal ${isVisible ? "is-visible" : ""}`}
      style={{ "--reveal-delay": `${(index % 3) * 80}ms` }}
    >
      <span className={`project-card__badge project-card__badge--${project.category}`}>
        {CATEGORY_LABELS[project.category]}
      </span>

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
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [tool, setTool] = useState("all");
  const [page, setPage] = useState(1);
  const [visibleCount, setVisibleCount] = useState(MOBILE_PAGE_SIZE);

  const tools = useMemo(
    () => [...new Set(projects.flatMap((project) => project.technologies))].sort((a, b) => a.localeCompare(b)),
    [],
  );

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = category === "all" || project.category === category;
      const matchesTool = tool === "all" || project.technologies.includes(tool);
      const matchesSearch =
        term === "" || project.title.toLowerCase().includes(term) || project.description.toLowerCase().includes(term);

      return matchesCategory && matchesTool && matchesSearch;
    });
  }, [searchTerm, category, tool]);

  useEffect(() => {
    setPage(1);
    setVisibleCount(MOBILE_PAGE_SIZE);
  }, [searchTerm, category, tool]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedProjects = isMobile
    ? filteredProjects.slice(0, visibleCount)
    : filteredProjects.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const hasMore = isMobile && visibleCount < filteredProjects.length;

  return (
    <section id="portfolio" className="portfolio section section--cream">
      <div className="container">
        <div className="section-heading">
          <h2>Projects</h2>
          <p className="portfolio-intro">Take a look at some of my recent work and personal projects.</p>
        </div>

        <div className="portfolio-filters">
          <label className="portfolio-filter portfolio-filter--search">
            <span className="visually-hidden">Search projects</span>
            <Icon name="search" size={16} className="portfolio-filter__icon" />
            <input
              type="search"
              placeholder="Search projects…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>

          <label className="portfolio-filter portfolio-filter--select">
            <span className="visually-hidden">Filter by category</span>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="all">All categories</option>
              <option value="personal">Personal</option>
              <option value="career">Career</option>
            </select>
            <Icon name="chevronDown" size={16} className="portfolio-filter__icon portfolio-filter__icon--end" />
          </label>

          <label className="portfolio-filter portfolio-filter--select">
            <span className="visually-hidden">Filter by tool</span>
            <select value={tool} onChange={(e) => setTool(e.target.value)}>
              <option value="all">All tools</option>
              {tools.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <Icon name="chevronDown" size={16} className="portfolio-filter__icon portfolio-filter__icon--end" />
          </label>
        </div>

        {pagedProjects.length > 0 ? (
          <ul className="project-grid">
            {pagedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </ul>
        ) : (
          <p className="portfolio-empty">No projects match those filters.</p>
        )}

        {hasMore && (
          <div className="portfolio-load-more">
            <button
              type="button"
              className="link-arrow"
              onClick={() => setVisibleCount((count) => Math.min(filteredProjects.length, count + MOBILE_PAGE_SIZE))}
            >
              <span className="link-arrow__label">Load more</span>
              <Icon name="arrowRight" size={16} className="link-arrow__arrow" />
            </button>
          </div>
        )}

        {!isMobile && totalPages > 1 && (
          <nav className="portfolio-pagination" aria-label="Projects pagination">
            <button
              type="button"
              className="portfolio-pagination__arrow"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <Icon name="arrowRight" size={16} className="portfolio-pagination__icon portfolio-pagination__icon--prev" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={`portfolio-pagination__page ${pageNumber === currentPage ? "is-active" : ""}`}
                aria-current={pageNumber === currentPage ? "page" : undefined}
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}

            <button
              type="button"
              className="portfolio-pagination__arrow"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <Icon name="arrowRight" size={16} className="portfolio-pagination__icon" />
            </button>
          </nav>
        )}

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
