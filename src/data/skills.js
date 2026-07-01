// `category` must match an `id` in `categories`. `icon` is a key from
// SkillsCarousel/skillIcons.js. `color` tints that icon (real brand color
// where one exists, otherwise the site accent).
export const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "cms", name: "CMS" },
  { id: "design", name: "Design" },
  { id: "devops", name: "DevOps" },
  { id: "project-management", name: "Project Management" },
  { id: "analytics", name: "Analytics & SEO" },
];

export const skills = [
  { name: "React.js", category: "frontend", icon: "react", color: "#61DAFB" },
  { name: "JavaScript", category: "frontend", icon: "javascript", color: "#F7DF1E" },
  { name: "SASS", category: "frontend", icon: "sass", color: "#CC6699" },
  { name: "jQuery", category: "frontend", icon: "jquery", color: "#0769AD" },
  { name: "A11y", category: "frontend", icon: "a11y", color: "#FF6B4A" },
  { name: "Technical SEO", category: "frontend", icon: "seo", color: "#FF6B4A" },

  { name: "Node.js", category: "backend", icon: "nodejs", color: "#5FA04E" },
  { name: "Python", category: "backend", icon: "python", color: "#3776AB" },
  { name: "PHP", category: "backend", icon: "php", color: "#777BB4" },
  { name: "LLMs", category: "backend", icon: "llm", color: "#FF6B4A" },

  { name: "MongoDB", category: "database", icon: "mongodb", color: "#47A248" },
  { name: "MySQL", category: "database", icon: "mysql", color: "#4479A1" },

  { name: "WordPress", category: "cms", icon: "wordpress", color: "#21759B" },
  { name: "HubSpot", category: "cms", icon: "hubspot", color: "#FF7A59" },

  { name: "Adobe Suite", category: "design", icon: "adobe", color: "#FF6B4A" },
  { name: "Figma", category: "design", icon: "figma", color: "#F24E1E" },

  { name: "Docker", category: "devops", icon: "docker", color: "#2496ED" },
  { name: "CI/CD", category: "devops", icon: "cicd", color: "#FF6B4A" },

  { name: "Google Suite", category: "project-management", icon: "google", color: "#4285F4" },
  { name: "Slack", category: "project-management", icon: "slack", color: "#4A154B" },
  { name: "Asana", category: "project-management", icon: "asana", color: "#F06A6A" },

  { name: "GTM", category: "analytics", icon: "gtm", color: "#246FDB" },
  { name: "GA4", category: "analytics", icon: "ga4", color: "#E37400" },
];
