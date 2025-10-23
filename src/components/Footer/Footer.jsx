import React from 'react';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home', action: () => scrollToSection('home') },
      { name: 'About', href: '#about', action: () => scrollToSection('about') },
      { name: 'Portfolio', href: '#portfolio', action: () => scrollToSection('portfolio') },
      { name: 'Contact', href: '#contact', action: () => scrollToSection('contact') }
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Consulting', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'bi-linkedin', href: '#' },
    { name: 'GitHub', icon: 'bi-github', href: '#' },
    { name: 'Twitter', icon: 'bi-twitter', href: '#' },
    { name: 'Instagram', icon: 'bi-instagram', href: '#' },
    { name: 'Dribbble', icon: 'bi-dribbble', href: '#' }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main py-5">
          <div className="row">
            {/* Brand and Description */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer-brand">
                <h3 className="brand-name h2 fw-bold mb-3">
                  Sam Clark
                </h3>
                <p className="brand-description text-muted mb-4">
                  Full Stack Developer & UI/UX Designer passionate about creating 
                  beautiful, functional, and user-friendly digital experiences. 
                  Let's build something amazing together.
                </p>
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
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <div className="footer-links">
                <h5 className="footer-title fw-bold mb-3">Quick Links</h5>
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

            {/* Services */}
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <div className="footer-links">
                <h5 className="footer-title fw-bold mb-3">Services</h5>
                <ul className="list-unstyled">
                  {footerLinks.services.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <div className="footer-links">
                <h5 className="footer-title fw-bold mb-3">Resources</h5>
                <ul className="list-unstyled">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index} className="mb-2">
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-2 col-md-12">
              <div className="footer-contact">
                <h5 className="footer-title fw-bold mb-3">Get in Touch</h5>
                <div className="contact-item mb-3">
                  <i className="bi bi-geo-alt me-2 text-primary"></i>
                  <span className="text-muted">New York, NY</span>
                </div>
                <div className="contact-item mb-3">
                  <i className="bi bi-envelope me-2 text-primary"></i>
                  <a href="mailto:hello@samclark.dev" className="footer-link">
                    hello@samclark.dev
                  </a>
                </div>
                <div className="contact-item mb-3">
                  <i className="bi bi-telephone me-2 text-primary"></i>
                  <a href="tel:+15551234567" className="footer-link">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p className="copyright-text mb-0 text-muted">
                © {currentYear} Sam Clark. All rights reserved. 
                Made with <i className="bi bi-heart-fill text-danger mx-1"></i> and lots of coffee.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <button
                onClick={scrollToTop}
                className="back-to-top btn btn-primary"
                aria-label="Back to top"
              >
                <i className="bi bi-arrow-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="footer-circle footer-circle-1"></div>
        <div className="footer-circle footer-circle-2"></div>
      </div>
    </footer>
  );
};

export default Footer;