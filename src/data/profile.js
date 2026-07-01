// Edit this file to update the hero copy, bio, stats, and every contact/
// social link on the site — Hero, About, Contact, and Footer all read from
// here, so there's one place to keep them in sync.
export const profile = {
  name: "Sam Clark",
  role: "Full Stack Web Developer",
  company: {
    name: "Level Agency",
    url: "https://www.level.agency/",
  },
  tagline: "Crafting fast, accessible, high-performing websites for clients.",
  bio: [
    "At Level Agency, I lead website redesign projects and serve as the primary developer for a portfolio of client retainers, pairing custom WordPress themes with React-built Gutenberg blocks. My work spans the full lifecycle — site migrations, DNS and SSL configuration, custom WordPress plugin development, and production launch validation — always with an eye toward accessibility, performance, and clean code.",
    "I've also brought AI into the workflow itself: integrating Claude Code into our development process, training internal agents on legacy codebases, and documenting systems to help other developers move faster. I'm passionate about blending creativity, strategy, and technology to solve real problems on the web — if you're curious how AI fits into a dev workflow, or just want to talk performance and clean code, I'd love to connect.",
  ],
  stats: [
    { value: 1000, suffix: "+", decimals: 0, label: "Tasks Completed" },
    { value: 3.5, suffix: "+", decimals: 1, label: "Years Experience" },
    { value: 10, suffix: "+", decimals: 0, label: "Client Retainers" },
  ],
  socials: [
    {
      // href/description built at render time from src/utils/email.js —
      // keeping the address out of this file keeps it out of the plain-text
      // build output too, which cuts down on scraper-harvested spam.
      name: "Email",
      icon: "mail",
      href: null,
      description: null,
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/samclark99/",
      description: "Connect with me",
    },
    {
      name: "GitHub",
      icon: "github",
      href: "https://github.com/samclark1999?tab=repositories",
      description: "View my repositories",
    },
  ],
  navigation: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Achievements", id: "achievements" },
    { label: "Work", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ],
};
