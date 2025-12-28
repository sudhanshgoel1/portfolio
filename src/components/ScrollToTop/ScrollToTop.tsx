import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './ScrollToTop.css';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Get current section
      const sections = ['hero', 'about', 'education', 'achievements', 'experience', 'skills', 'projects', 'contact'];
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      // Check if mobile nav is open
      const navList = document.querySelector('.nav-list');
      const isMobileNavOpen = navList?.classList.contains('active');
      
      // Show button in all sections except hero and footer, and hide when mobile nav is open
      const shouldShow = currentSection !== 'hero' && currentSection !== '' && window.scrollY > 300 && !isMobileNavOpen;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Listen for nav menu changes
    const observer = new MutationObserver(toggleVisibility);
    const navList = document.querySelector('.nav-list');
    if (navList) {
      observer.observe(navList, { attributes: true, attributeFilter: ['class'] });
    }
    
    toggleVisibility(); // Check initial state

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  );
};