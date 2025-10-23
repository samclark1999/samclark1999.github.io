import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can integrate with a backend service or email service
    alert('Message sent! Thank you for reaching out.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Location',
      details: ['New York, NY', 'United States'],
      link: '#'
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      details: ['hello@samclark.dev', 'contact@samclark.dev'],
      link: 'mailto:hello@samclark.dev'
    },
    {
      icon: 'bi-telephone',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      link: 'tel:+15551234567'
    },
    {
      icon: 'bi-clock',
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Weekend: Available for urgent projects'],
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title display-4 fw-bold mb-3">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="section-subtitle lead text-muted">
              Ready to start your next project? Let's work together to create something amazing.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="contact-info">
              <h3 className="h4 fw-bold mb-4">Let's Talk</h3>
              <p className="text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

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

              {/* Social Links */}
              <div className="social-links mt-4">
                <h5 className="fw-bold mb-3">Follow Me</h5>
                <div className="d-flex gap-3">
                  <a href="#" className="social-link">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-link">
                    <i className="bi bi-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label fw-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label fw-bold">
                      Subject *
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <label htmlFor="message" className="form-label fw-bold">
                      Message *
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    <i className="bi bi-send me-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12">
            <div className="cta-section text-center bg-primary text-white p-5 rounded-4">
              <h3 className="h2 fw-bold mb-3">
                Ready to Start Your Project?
              </h3>
              <p className="lead mb-4">
                Let's discuss your ideas and turn them into reality. 
                I'm always excited to work on new and challenging projects.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a href="#portfolio" className="btn btn-light btn-lg">
                  <i className="bi bi-eye me-2"></i>
                  View My Work
                </a>
                <a href="mailto:hello@samclark.dev" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-calendar-check me-2"></i>
                  Schedule a Call
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