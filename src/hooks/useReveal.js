import { useEffect, useRef, useState } from "react";

// Adds a ref + `isVisible` flag that flips true the first time the element
// scrolls into view, then stays true. Pair with the .reveal CSS class.
export function useReveal({ threshold = 0.2 } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}
