import { ICONS } from "./icons";

// Decorative by default (aria-hidden) — pair it with visible text or an
// aria-label on the parent link/button, don't rely on the icon alone.
const Icon = ({ name, size = 20, className }) => {
  const icon = ICONS[name];
  if (!icon) return null;

  const isStroke = icon.type === "stroke";

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill={isStroke ? "none" : "currentColor"}
      stroke={isStroke ? "currentColor" : "none"}
      strokeWidth={isStroke ? 1.75 : undefined}
      strokeLinecap={isStroke ? "round" : undefined}
      strokeLinejoin={isStroke ? "round" : undefined}
      aria-hidden="true"
      focusable="false"
    >
      {icon.paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
};

export default Icon;
