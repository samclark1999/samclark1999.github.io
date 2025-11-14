import React, { useState, useEffect } from "react";
import "./About.scss";
import profilePic from "../../images/profile-pic.JPG";

const About = () => {
  const [activeSkillFilter, setActiveSkillFilter] = useState('all');
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(12);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Reset visible skills when filter changes
  useEffect(() => {
    setVisibleSkillsCount(12);
  }, [activeSkillFilter]);

  const skillCategories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'cms', name: 'CMS' },
    { id: 'design', name: 'Design' },
    { id: 'devops', name: 'DevOps' },
    { id: 'project-management', name: 'Project Management' },
    { id: 'analytics', name: 'Analytics & SEO' }
  ];

  const skills = [
    // Frontend
    { name: "React.js", icon: "bi-code-slash", category: "frontend" },
    { name: "JavaScript", icon: "bi-braces", category: "frontend" },
    { name: "SASS", icon: "bi-palette2", category: "frontend" },
    { name: "Bootstrap", icon: "bi-grid-3x3", category: "frontend" },
    { name: "jQuery", icon: "bi-currency-dollar", category: "frontend" },
    { name: "A11y", icon: "bi-eye-fill", category: "frontend" },
    { name: "Technical SEO", icon: "bi-search", category: "frontend" },
    
    // Backend
    { name: "Node.js", icon: "bi-server", category: "backend" },
    { name: "Python", icon: "bi-diamond-fill", category: "backend" },
    { name: "PHP", icon: "bi-code-square", category: "backend" },
    { name: "LLMs", icon: "bi-robot", category: "backend" },
    
    // Database
    { name: "MongoDB", icon: "bi-cloud", category: "database" },
    { name: "MySQL", icon: "bi-table", category: "database" },
    
    // CMS
    { name: "WordPress", icon: "bi-wordpress", category: "cms" },
    { name: "HubSpot", icon: "bi-gear-fill", category: "cms" },
    
    // Design
    { name: "Adobe Suite", icon: "bi-image-fill", category: "design" },
    { name: "Figma", icon: "bi-vector-pen", category: "design" },
    
    // DevOps
    { name: "Docker", icon: "bi-box-seam", category: "devops" },
    { name: "DevOps", icon: "bi-diagram-3", category: "devops" },
    
    // Project Management
    { name: "Google Suite", icon: "bi-google", category: "project-management" },
    { name: "Slack", icon: "bi-chat-dots", category: "project-management" },
    { name: "Asana", icon: "bi-kanban", category: "project-management" },
    
    // Analytics & SEO
    { name: "GTM", icon: "bi-tags", category: "analytics" },
    { name: "GA4", icon: "bi-graph-up", category: "analytics" }
  ];

  const filteredSkills = activeSkillFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeSkillFilter);

  // For mobile screens, limit visible skills
  const displayedSkills = isSmallScreen 
    ? filteredSkills.slice(0, visibleSkillsCount)
    : filteredSkills;

  const hasMoreSkills = isSmallScreen && visibleSkillsCount < filteredSkills.length;

  const loadMoreSkills = () => {
    setVisibleSkillsCount(prev => prev + 4);
  };

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="section-title display-4 fw-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="section-subtitle lead text-muted">
              Get to know more about my background and expertise
            </p>
          </div>
        </div>

        <div className="row align-items-start gx-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-image-wrapper">
              <img
                src={profilePic}
                alt="Sam Clark"
                className="profile-pic img-fluid"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<i class="bi bi-person-circle display-1 text-muted"></i>';
                }}
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-content">
              <h3 className="h2 fw-bold mb-4">Experience at Level</h3>
              <p className="mb-4">
                At Level Agency, I’ve led multiple web redesigns and served as the main developer for 30+ client retainers, helping teams launch fast, clean, and accessible sites. Over the years, I’ve completed 1,000+ full-stack dev tasks across everything from React builds and custom WordPress plugins to DevOps and AI automation. One of my favorite projects involved training AI agents on internal codebases to speed up developer workflows—a glimpse into how I believe AI and web development can work hand-in-hand to innovate faster and smarter.
              </p>
              <p className="mb-4">
                I’m passionate about blending creativity,
                strategy, and technology to solve real problems on the web. If
                you’re curious about how AI can fit into your dev workflow, or
                you just want to geek out over site performance and clean code,
                I’d love to connect.
              </p>

              <div className="about-stats row text-center mb-4">
                <div className="col-4">
                  <div className="stat-item">
                    <h4 className="stat-number fw-bold text-primary">1000+</h4>
                    <p className="stat-label text-muted mb-0">Tasks</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item">
                    <h4 className="stat-number fw-bold text-primary">3.5+</h4>
                    <p className="stat-label text-muted mb-0">
                      Years Experience
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="stat-item">
                    <h4 className="stat-number fw-bold text-primary">10+</h4>
                    <p className="stat-label text-muted mb-0">
                      Client Retainers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12 text-center mb-4">
            <h3 className="h2 fw-bold mb-3">
              My <span className="text-primary">Skills</span>
            </h3>
            <p className="text-muted">Technologies and tools I work with</p>
          </div>
        </div>

        {/* Skills Filter */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="skills-filters text-center">
              {skillCategories.map(category => (
                <button
                  key={category.id}
                  className={`btn skill-filter-btn me-2 mb-2 ${activeSkillFilter === category.id ? 'active' : ''}`}
                  onClick={() => setActiveSkillFilter(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="row">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-6 mb-3">
              <div className="skill-item">
                <div className="skill-header d-flex align-items-center p-3">
                  <i className={`${skill.icon} me-3 text-primary fs-4`}></i>
                  <div className="skill-info flex-grow-1">
                    <h6 className="skill-name mb-0 fw-bold">{skill.name}</h6>
                    <small className="text-muted text-capitalize">{skill.category.replace('-', ' ')}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button - Only on mobile */}
        {hasMoreSkills && (
          <div className="row mt-3">
            <div className="col-12 text-center">
              <button 
                className="btn btn-outline-primary"
                onClick={loadMoreSkills}
              >
                Load {Math.min(4, filteredSkills.length - visibleSkillsCount)} More Skills
              </button>
            </div>
          </div>
        )}

        {/* Skills Count */}
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="text-muted">
              {activeSkillFilter === 'all' ? (
                isSmallScreen ? (
                  `Showing ${displayedSkills.length} of ${filteredSkills.length} skills`
                ) : (
                  `Showing all ${filteredSkills.length} skills`
                )
              ) : (
                <>
                  Showing {isSmallScreen ? displayedSkills.length : filteredSkills.length} 
                  {isSmallScreen && filteredSkills.length > displayedSkills.length && ` of ${filteredSkills.length}`} skills in <strong>{skillCategories.find(cat => cat.id === activeSkillFilter)?.name}</strong>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
