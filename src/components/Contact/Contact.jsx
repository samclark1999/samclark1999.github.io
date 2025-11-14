import React from 'react';
import './Contact.scss';

const Contact = () => {

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Location',
      details: ['Seattle, WA', 'United States'],
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      details: ['samclarkwork99@gmail.com'],
      link: 'mailto:samclarkwork99@gmail.com'
    },
    {
      icon: 'bi-linkedin',
      title: 'LinkedIn',
      details: ['Connect with me on LinkedIn'],
      link: 'https://www.linkedin.com/in/samclark99/'
    },
    {
      icon: 'bi-github',
      title: 'GitHub',
      details: ['Check out my GitHub profile'],
      link: 'https://github.com/samclark1999?tab=repositories'
    }
    
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title display-4 fw-bold mb-3">
              Get In Touch
            </h2>
            <p className="section-subtitle lead text-muted">
              Let's connect! Feel free to reach out using any of the methods below.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* Contact Information */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="contact-info">
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item mb-4">
                    <div className="d-flex align-items-start">
                      <div className="contact-icon me-3">
                        <i className={`${info.icon} fs-4 text-primary`}></i>
                      </div>
                      <div className="contact-content">
                        <h5 className="fw-bold mb-1">{info.title}</h5>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted mb-1">
                            {info.link && info.link !== '#' ? (
                              <a href={info.link} className="text-decoration-none text-muted">
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* CTA Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12">
            <div className="cta-section text-center bg-primary text-white p-5 rounded-4">
              <h3 className="h2 fw-bold mb-3">
                Thank you for visiting!
              </h3>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a href="#portfolio" className="btn btn-light btn-lg">
                  <i className="bi bi-eye me-2"></i>
                  View My Work
                </a>
                <a href="mailto:samclarkwork99@gmail.com" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-envelope me-2"></i>
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/samclark99/" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-linkedin me-2"></i>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;