import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference, default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    
    return 'dark';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('portfolio-theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]:not([media])');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'light' ? '#ffffff' : '#0f0f23');
    }
    
    // Update favicon based on theme
    const updateFavicon = () => {
      // Remove existing theme-specific favicons
      const existingFavicons = document.querySelectorAll('link[rel="icon"][data-theme]');
      existingFavicons.forEach(favicon => favicon.remove());
      
      // Add new theme-specific favicon
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/svg+xml';
      favicon.href = theme === 'light' ? '/favicon-light.svg' : '/favicon-dark.svg';
      favicon.setAttribute('data-theme', theme);
      
      document.head.appendChild(favicon);
    };
    
    updateFavicon();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};