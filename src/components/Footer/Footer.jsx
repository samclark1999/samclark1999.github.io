import Icon from "../Icon/Icon";
import { profile } from "../../data/profile";
import { getMailtoHref } from "../../utils/email";
import "./Footer.scss";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-brand__name">{profile.name}</p>
            <p className="footer-brand__role">{profile.role}</p>
            <ul className="footer-socials">
              {profile.socials.map((social) => {
                const isEmail = social.name === "Email";
                return (
                  <li key={social.name}>
                    <a
                      href={isEmail ? getMailtoHref() : social.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      aria-label={social.name}
                    >
                      <Icon name={social.icon} size={18} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <ul>
              {profile.navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
