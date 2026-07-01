// `link` points at a GitHub repo unless `isClient` is true, in which case it
// points at the live client site (the card's CTA label switches accordingly).
export const projects = [
  {
    id: 1,
    title: "My Personal Website",
    description: "This repo contains the code used to build this website.",
    technologies: ["React", "Node.js", "Webpack", "SASS"],
    link: "https://github.com/samclark1999/samclark1999.github.io",
    isClient: false,
  },
  {
    id: 2,
    title: "Clark Financial",
    description:
      "A full-stack banking application. Users can create an account, log in, and track deposits and withdrawals, with per-user data stored and retrieved on login.",
    technologies: ["React", "Node.js", "Docker", "MongoDB", "Google Cloud"],
    link: "https://github.com/samclark1999/Clark-Financial-Full-Stack",
    isClient: false,
  },
  {
    id: 3,
    title: "To-Do List",
    description:
      "A React app for creating, completing, and deleting to-dos, with sorting by completed or uncompleted.",
    technologies: ["React", "Node.js"],
    link: "https://github.com/samclark1999/to_Do_List",
    isClient: false,
  },
  {
    id: 4,
    title: "Post Status Changer",
    description: "A WordPress plugin with a GUI to change the post status for multiple posts at once.",
    technologies: ["PHP", "WordPress", "JavaScript", "jQuery"],
    link: "https://github.com/samclark1999/wp-post-status-changer",
    isClient: false,
  },
  {
    id: 5,
    title: "Anderson Advisors",
    description:
      "A client WordPress website for a financial advisory business. I was the lead developer who replatformed their site to a custom WP theme.",
    technologies: ["WordPress", "PHP", "JavaScript", "SASS"],
    link: "https://andersonadvisors.com",
    isClient: true,
  },
  {
    id: 6,
    title: "WareSpace",
    description:
      "A WordPress website for a warehousing and storage solutions company. I was the lead developer who replatformed their site to a custom WP theme.",
    technologies: ["WordPress", "PHP", "JavaScript", "SASS"],
    link: "https://warespace.com",
    isClient: true,
  },
];
