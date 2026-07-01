import awardImg from "../images/award.webp";

// `link`/`linkLabel` are optional — omit both if an achievement has nothing
// to link to. `image`/`imageAlt` are also optional — without one, the card
// falls back to a generic trophy icon.
export const achievements = [
  {
    id: 1,
    title: "Better Every Day Award",
    date: "January 2026",
    description:
      "Awarded at our company summit — a peer-nominated recognition tied to one of Level Agency's core values. It was an honor to be recognized by the people I work with for my work and improvement every day.",
    image: awardImg,
    imageAlt: "Better Every Day Award",
    link: "https://www.linkedin.com/posts/samclark99_last-week-i-was-honored-to-receive-the-peer-nominated-activity-7425664438311247873-zlh_",
    linkLabel: "See post on LinkedIn",
  },
];
