import React, { JSX, useState } from 'react';
import "./Contact.css";
import MultiShadeText from '../../components/MultiShadeText/MultiShadeText';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:sudhanshgoel0001@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section-modern">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">
            <MultiShadeText text="Get In Touch" className="fw-bold" />
          </h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section" data-aos="fade-right">
              <div className="form-card">
                <div className="form-header">
                  <div className="form-icon">
                    <FiSend />
                  </div>
                  <div>
                    <h3 className="form-title">Send Message</h3>
                    <p className="form-subtitle">Let's start a conversation</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        <FiUser className="label-icon" />
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        <FiMail className="label-icon" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      <FiMessageSquare className="label-icon" />
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="Project Collaboration"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      <FiMessageSquare className="label-icon" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      rows={5}
                      placeholder="Tell me about your project or just say hello..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-modern btn-primary form-submit">
                    <FiSend className="btn-icon" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section" data-aos="fade-left">
              <div className="info-card">
                <div className="info-header">
                  <h3 className="info-title">Let's Connect</h3>
                  <p className="info-subtitle">
                    I'm currently working as a Software Engineer and am always interested in new challenges and opportunities.
                  </p>
                </div>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <FiMail />
                    </div>
                    <div className="method-content">
                      <h4 className="method-title">Email</h4>
                      <p className="method-value">sudhanshgoel0001@gmail.com</p>
                      <a href="mailto:sudhanshgoel0001@gmail.com" className="method-link">
                        Send Email
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <FiPhone />
                    </div>
                    <div className="method-content">
                      <h4 className="method-title">Phone</h4>
                      <p className="method-value">+91 9781625544</p>
                      <a href="tel:+919781625544" className="method-link">
                        Call Now
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <FiMapPin />
                    </div>
                    <div className="method-content">
                      <h4 className="method-title">Location</h4>
                      <p className="method-value">Mohali, Punjab, India</p>
                      <span className="method-link">Available for Remote Work</span>
                    </div>
                  </div>
                </div>

                <div className="availability-status">
                  <div className="status-indicator">
                    <div className="status-dot"></div>
                    <span className="status-text">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="contact-cta" data-aos="fade-up" data-aos-delay="600">
            <div className="cta-card">
              <div className="cta-content">
                <h3 className="cta-title">Ready to Work Together?</h3>
                <p className="cta-description">
                  I'm always excited to take on new challenges and collaborate on innovative projects.
                  Let's discuss how we can bring your ideas to life.
                </p>
                <div className="cta-buttons">
                  <a href="mailto:sudhanshgoel0001@gmail.com" className="btn-modern btn-primary">
                    <FiMail className="btn-icon" />
                    Email Me Directly
                  </a>
                  <a href="tel:+919781625544" className="btn-modern btn-outline">
                    <FiPhone className="btn-icon" />
                    Call Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
