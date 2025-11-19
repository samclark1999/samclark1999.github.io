import React from 'react';
import './Contact.scss';

const Contact = () => {

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Location',
      description: 'Seattle, WA'
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      description: 'samclarkwork99@gmail.com',
      link: 'mailto:samclarkwork99@gmail.com'
    },
    {
      icon: 'bi-linkedin',
      title: 'LinkedIn',
      description: 'Connect with me',
      link: 'https://www.linkedin.com/in/samclark99/'
    },
    {
      icon: 'bi-github',
      title: 'GitHub',
      description: 'View my repositories',
      link: 'https://github.com/samclark1999?tab=repositories'
    }
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Contact Items with Header Inside */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="contact-info">
              {/* Header Section - Inside contact info */}
              <div className="contact-header text-center mb-4">
                <h2 className="section-title display-4 fw-bold mb-3">
                  Get In Touch
                </h2>
                <p className="section-subtitle lead text-muted">
                  Let's connect! Feel free to reach out using any of the methods below.
                </p>
              </div>
              
              <div className="contact-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <div className="contact-icon">
                          <i className={`${info.icon} fs-4`}></i>
                        </div>
                        <div className="contact-content">
                          <h5 className="contact-title">{info.title}</h5>
                          <p className="contact-description">{info.description}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="contact-link">
                        <div className="contact-icon">
                          <i className={`${info.icon} fs-4`}></i>
                        </div>
                        <div className="contact-content">
                          <h5 className="contact-title">{info.title}</h5>
                          <p className="contact-description">{info.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;