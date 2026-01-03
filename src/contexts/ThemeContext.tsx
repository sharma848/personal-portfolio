import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Apply initial theme on mount
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Optimize for mobile - use requestAnimationFrame for smoother transitions
    const applyTheme = () => {
      // Add transitioning class for smooth animation
      body.classList.add('theme-transitioning');
      
      // Apply theme data attribute
      root.setAttribute('data-theme', theme);
      
      // Save to localStorage (defer to avoid blocking on mobile)
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          localStorage.setItem('theme', theme);
        }, { timeout: 100 });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          localStorage.setItem('theme', theme);
        }, 0);
      }
      
      // Remove transitioning class after animation completes
      const timer = setTimeout(() => {
        body.classList.remove('theme-transitioning');
      }, 500);
      
      return () => clearTimeout(timer);
    };
    
    // Use requestAnimationFrame for smoother transitions, especially on mobile
    const rafId = requestAnimationFrame(applyTheme);
    
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

