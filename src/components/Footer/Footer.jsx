import React from "react";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = {
    navigation: [
      { name: "Home", href: "#home", action: () => scrollToSection("home") },
      { name: "About", href: "#about", action: () => scrollToSection("about") },
      {
        name: "Portfolio",
        href: "#portfolio",
        action: () => scrollToSection("portfolio"),
      },
      {
        name: "Contact",
        href: "#contact",
        action: () => scrollToSection("contact"),
      },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      href: "https://www.linkedin.com/in/samclark99/",
    },
    {
      name: "GitHub",
      icon: "bi-github",
      href: "https://github.com/samclark1999?tab=repositories",
    },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main py-5">
          <div className="row justify-content-between">
            {/* Brand and Description */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer-brand">
                <h3 className="brand-name fw-bold mb-3">Sam Clark</h3>
                <p className="brand-description mb-4">Full Stack Developer</p>
                <div className="social-links d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="social-link"
                      title={social.name}
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
              <div className="footer-links">
                <h4 className="footer-title fw-bold mb-3">Quick Links</h4>
                <ul className="list-unstyled">
                  {footerLinks.navigation.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href={link.href}
                        className="footer-link"
                        onClick={(e) => {
                          e.preventDefault();
                          link.action();
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom py-4 text-white">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="copyright-text mb-0">
                © {currentYear} Sam Clark. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <button
                onClick={scrollToTop}
                className="back-to-top btn btn-primary"
                aria-label="Back to top"
              >
                <i className="bi bi-chevron-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
