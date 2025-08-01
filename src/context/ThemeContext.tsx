import React, { createContext, useState, useContext, useEffect } from 'react';

type ThemeType = 'theme1' | 'theme2' | 'theme3';
interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}
// Create a context for theme management
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
/**
 * ThemeProvider component.
 * Provides theme state and setter to its children.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize theme from localStorage or default to 'theme1'
  const [theme, setTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem('theme') as ThemeType) || 'theme1';
  });

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} theme-switch-transition`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
// Throws an error if used outside of ThemeProvider
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
