import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import './Navbar.css';
import LogoGradientSVG from "../LogoGradientSVG/LogoGradientSVG";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavbarComponent: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset: document.getElementById(section.id)?.offsetTop || 0
      }));

      const currentSection = sectionElements.find((section, index) => {
        const nextSection = sectionElements[index + 1];
        return scrollTop >= section.offset - 100 && 
               (!nextSection || scrollTop < nextSection.offset - 100);
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar-modern ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Brand */}
            <Link
              className="navbar-brand-modern"
              to="hero"
              smooth={true}
              duration={500}
              onClick={closeMenu}
            >
              <LogoGradientSVG text="SG" className="fw-bold" height={32} />
            </Link>

            {/* Desktop Navigation */}
            <div className="navbar-nav-desktop">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  className={`nav-link-modern ${activeSection === section.id ? 'active' : ''}`}
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  {section.label}
                </Link>
              ))}
            </div>

            {/* CTA Button and Theme Toggle */}
            <div className="navbar-cta">
              <ThemeToggle />
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="btn-cta-modern"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
              onClick={handleToggle}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-modern ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {/* Mobile Menu Top Bar */}
          <div className="mobile-menu-top">
            <div className="mobile-menu-logo">
              <Link
                className="navbar-brand-modern"
                to="hero"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                <LogoGradientSVG text="SG" className="fw-bold" height={32} />
              </Link>
            </div>
            <div className="mobile-menu-controls">
              <ThemeToggle />
              <button
                className="mobile-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          
          <nav className="mobile-nav-links">
            {sections.map((section, index) => (
              <Link
                key={section.id}
                className={`mobile-nav-link ${activeSection === section.id ? 'active' : ''}`}
                to={section.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={closeMenu}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="link-number">0{index + 1}</span>
                <span className="link-text">{section.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="btn-cta-mobile"
              onClick={closeMenu}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="menu-overlay-modern" onClick={closeMenu}></div>}
    </>
  );
};

export default NavbarComponent;
