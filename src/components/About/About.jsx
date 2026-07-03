import { useReveal } from "../../hooks/useReveal";
import { profile } from "../../data/profile";
import SkillsCarousel from "../SkillsCarousel/SkillsCarousel";
import "./About.scss";

// Stats are disabled while the numbers get revisited — uncomment and restore
// the StatItem/useCountUp bits below once profile.stats has real values.
// const StatItem = ({ stat, start }) => {
//   const value = useCountUp(stat.value, { decimals: stat.decimals, start });
//   return (
//     <div className="about-stat">
//       <p className="about-stat__value">
//         {value}
//         {stat.suffix}
//       </p>
//       <p className="about-stat__label">{stat.label}</p>
//     </div>
//   );
// };

const About = () => {
  const [contentRef, contentVisible] = useReveal();

  return (
    <section id="about" className="about section section--cream">
      <div className="container">
        <div
          ref={contentRef}
          className={`reveal ${contentVisible ? "is-visible" : ""}`}
        >
          <div className="section-heading">
            <h2>About Me</h2>
          </div>

          <div className="about-bio">
            {profile.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* <div ref={statsRef} className="about-stats">
            {profile.stats.map((stat) => (
              <StatItem key={stat.label} stat={stat} start={statsVisible} />
            ))}
          </div> */}
        </div>

        <div className="about-skills">
          <h2>My Skills</h2>
          <p className="about-skills__intro">
            Technologies and tools I work with
          </p>
          <SkillsCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
