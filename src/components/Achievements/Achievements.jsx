import { useReveal } from "../../hooks/useReveal";
import Icon from "../Icon/Icon";
import { achievements } from "../../data/achievements";
import "./Achievements.scss";

const AchievementCard = ({ achievement, index }) => {
  const [ref, isVisible] = useReveal();

  return (
    <li
      ref={ref}
      className={`achievement-card reveal ${isVisible ? "is-visible" : ""}`}
      style={{ "--reveal-delay": `${index * 80}ms` }}
    >
      {achievement.image ? (
        <img
          className="achievement-card__image"
          src={achievement.image}
          alt={achievement.imageAlt || ""}
          loading="lazy"
        />
      ) : (
        <div className="achievement-card__icon">
          <Icon name="trophy" size={22} />
        </div>
      )}
      <div className="achievement-card__body">
        <p className="achievement-card__date eyebrow">{achievement.date}</p>
        <h3>{achievement.title}</h3>
        <p>{achievement.description}</p>
        {achievement.link && (
          <a className="link-arrow" href={achievement.link} target="_blank" rel="noopener noreferrer">
            <span className="link-arrow__label">{achievement.linkLabel}</span>
            <Icon name="arrowRight" size={16} className="link-arrow__arrow" />
          </a>
        )}
      </div>
    </li>
  );
};

const Achievements = () => {
  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="achievements section section--ink">
      <div className="container">
        <div className="section-heading">
          <h2>Recognition along the way</h2>
        </div>

        <ul className="achievements-list">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
