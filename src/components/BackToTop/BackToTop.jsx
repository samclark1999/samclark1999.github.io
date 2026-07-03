import { useEffect, useState } from "react";
import Icon from "../Icon/Icon";
import "./BackToTop.scss";

const SHOW_AFTER_PX = 480;

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="chevronUp" size={16} />
    </button>
  );
};

export default BackToTop;
