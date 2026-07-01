import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// rAF-driven counter from 0 to `end`, started once `start` becomes true.
// Skips straight to the final value under prefers-reduced-motion.
export function useCountUp(end, { decimals = 0, duration = 1600, start = false } = {}) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    const startTime = performance.now();
    let frame;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(end * easeOutCubic(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);

  return value.toFixed(decimals);
}
