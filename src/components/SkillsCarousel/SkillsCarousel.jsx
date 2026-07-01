import { useMemo, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import { skillCategories, skills } from "../../data/skills";
import { SKILL_ICONS } from "./skillIcons";
import "./SkillsCarousel.scss";

const STEP = 128;
const ROTATE = 26;
const DRAG_THRESHOLD = 50;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const getSkillsForCategory = (categoryId) =>
  categoryId === "all" ? skills : skills.filter((skill) => skill.category === categoryId);

const cardStyle = (distance, dragOffsetPx) => {
  const clamped = clamp(distance, -4, 4);
  const scale = Math.max(0.68, 1.14 - Math.abs(clamped) * 0.16);
  // Recede distant cards via brightness/scale only, not opacity — fading
  // opacity toward a same-color backdrop collapses text contrast below AA.
  const brightness = Math.max(0.55, 1 - Math.abs(clamped) * 0.14);
  const visible = Math.abs(distance) <= 4;

  return {
    transform: `translateX(${distance * STEP + dragOffsetPx}px) rotateY(${-clamped * ROTATE}deg) scale(${scale})`,
    opacity: visible ? 1 : 0,
    filter: `brightness(${brightness})`,
    zIndex: 100 - Math.abs(distance),
    pointerEvents: visible ? "auto" : "none",
  };
};

const SkillsCarousel = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.floor(getSkillsForCategory(skillCategories[0].id).length / 2),
  );
  const [dragOffset, setDragOffset] = useState(0);
  const dragOffsetRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);

  const categorySkills = useMemo(() => getSkillsForCategory(activeCategory), [activeCategory]);
  const activeSkill = categorySkills[activeIndex];
  const activeCategoryName = skillCategories.find((c) => c.id === activeCategory)?.name;

  const move = (delta) => {
    setActiveIndex((current) => clamp(current + delta, 0, categorySkills.length - 1));
  };

  const selectCategory = (categoryId) => {
    const nextSkills = getSkillsForCategory(categoryId);
    setActiveCategory(categoryId);
    setActiveIndex(Math.floor(nextSkills.length / 2));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
    if (e.key === "ArrowRight") { e.preventDefault(); move(1); }
    if (e.key === "Home") { e.preventDefault(); setActiveIndex(0); }
    if (e.key === "End") { e.preventDefault(); setActiveIndex(categorySkills.length - 1); }
  };

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    const offset = (e.clientX - startXRef.current) * 0.6;
    dragOffsetRef.current = offset;
    setDragOffset(offset);
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const offset = dragOffsetRef.current;
    if (offset > DRAG_THRESHOLD) move(-1);
    else if (offset < -DRAG_THRESHOLD) move(1);
    dragOffsetRef.current = 0;
    setDragOffset(0);
  };

  return (
    <div className="skills-carousel">
      <div className="skills-carousel__tabs" role="group" aria-label="Filter skills by category">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`skills-carousel__tab ${activeCategory === category.id ? "is-active" : ""}`}
            aria-pressed={activeCategory === category.id}
            onClick={() => selectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div
        className="skills-carousel__viewport"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${activeCategoryName} skills`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="skills-carousel__stack" aria-hidden="true">
          {categorySkills.map((skill, index) => {
            const SkillIcon = SKILL_ICONS[skill.icon];
            const distance = index - activeIndex;
            const isActive = index === activeIndex;
            return (
              <div
                key={skill.name}
                className={`skill-card ${isActive ? "is-active" : ""}`}
                style={cardStyle(distance, dragOffset)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="skill-card__icon" style={{ color: skill.color }}>
                  {SkillIcon && <SkillIcon size={28} />}
                </div>
                <p className="skill-card__name">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="skills-carousel__controls">
        <button
          type="button"
          className="arrow-btn"
          aria-label="Previous skill"
          disabled={activeIndex === 0}
          onClick={() => move(-1)}
        >
          <Icon name="arrowRight" size={16} className="arrow-btn__icon arrow-btn__icon--prev" />
        </button>

        <p className="skills-carousel__counter" aria-live="polite">
          <span className="visually-hidden">{activeSkill ? `${activeSkill.name}, skill ` : ""}</span>
          <span>{activeIndex + 1}</span>
          <span aria-hidden="true"> / </span>
          <span>{categorySkills.length}</span>
        </p>

        <button
          type="button"
          className="arrow-btn"
          aria-label="Next skill"
          disabled={activeIndex === categorySkills.length - 1}
          onClick={() => move(1)}
        >
          <Icon name="arrowRight" size={16} className="arrow-btn__icon" />
        </button>
      </div>
    </div>
  );
};

export default SkillsCarousel;
