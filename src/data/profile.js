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
    "Most websites look great but never reach their full potential. The problem usually isn't design; it's that the site wasn't built with performance, SEO, or scalability in mind.",
    "That's where I come in. I build websites and applications that look great and perform even better. At Level Agency, I've led full site redesigns and served as the primary developer on client retainers, shipping fast, accessible, and scalable builds across React, WordPress, and everything in between.",
    "If you're looking for someone who thinks about the whole picture, not just how a site looks but how it performs and grows, let's connect!",
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
