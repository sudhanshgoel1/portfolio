import React from 'react';
import './Footer.css';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiArrowUp } from 'react-icons/fi';
import { Link } from 'react-scroll';
import MultiShadeText from '../MultiShadeText/MultiShadeText';
import { socialLinks } from '../../dummyData/dummyData';

const Footer: React.FC = () => {
    const sections = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'contact', label: 'Contact' }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getSocialIcon = (iconName: string) => {
        switch (iconName) {
            case 'linkedin': return <FiLinkedin />;
            case 'github': return <FiGithub />;
            case 'twitter': return <FiTwitter />;
            case 'email': return <FiMail />;
            default: return <FiMail />;
        }
    };

    return (
        <footer className="footer-modern">
            <div className="container">
                <div className="footer-content">
                    {/* Main Footer Content */}
                    <div className="footer-main">
                        {/* Brand Section */}
                        <div className="footer-brand">
                            <div className="brand-logo">
                                <MultiShadeText text="Sudhansh Goel" className="fw-bold" />
                            </div>
                            <p className="brand-description">
                                Software Engineer passionate about creating innovative solutions with modern technologies. 
                                Specializing in full-stack development with expertise in React, .NET Core, and Golang.
                            </p>
                            <div className="brand-status">
                                <div className="status-indicator">
                                    <div className="status-dot"></div>
                                    <span className="status-text">Available for new opportunities</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-links">
                            <h4 className="footer-section-title">Quick Links</h4>
                            <div className="links-grid">
                                {sections.map((section, index) => (
                                    <Link
                                        key={section.id}
                                        className="footer-link"
                                        to={section.id}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {section.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-contact">
                            <h4 className="footer-section-title">Get In Touch</h4>
                            <div className="contact-items">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FiMail />
                                    </div>
                                    <div className="contact-details">
                                        <span className="contact-label">Email</span>
                                        <a href="mailto:sudhanshgoel0001@gmail.com" className="contact-value">
                                            sudhanshgoel0001@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FiPhone />
                                    </div>
                                    <div className="contact-details">
                                        <span className="contact-label">Phone</span>
                                        <a href="tel:+919781625544" className="contact-value">
                                            +91 9781625544
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="contact-details">
                                        <span className="contact-label">Location</span>
                                        <span className="contact-value">Mohali, Punjab, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="footer-social">
                            <h4 className="footer-section-title">Follow Me</h4>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {getSocialIcon(social.icon)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="footer-bottom-content">
                            <div className="copyright">
                                <span>© 2025 Sudhansh Goel. All rights reserved.</span>
                            </div>
                            
                            <div className="footer-meta">
                                <span className="work-status">
                                    Currently working at{" "}
                                    <a 
                                        href="https://ginilytics.com" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="company-link"
                                    >
                                        Ginilytics IT Solution
                                    </a>
                                </span>
                            </div>
                            
                            <button 
                                className="scroll-to-top-btn"
                                onClick={scrollToTop}
                                aria-label="Scroll to top"
                            >
                                <FiArrowUp />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
