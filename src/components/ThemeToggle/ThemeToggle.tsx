import React from 'react';
import './ThemeToggle.css';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-change-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-icon">
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </div>
      <span className="theme-text">
        {theme === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};

export default ThemeToggle;