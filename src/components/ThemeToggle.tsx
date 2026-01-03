import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-xl bg-bg-surface text-text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-surface transition-all ${
        isDark 
          ? 'shadow-[0_2px_8px_rgba(0,0,0,0.2)]' 
          : 'shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
      }`}
      whileHover={{ 
        scale: shouldReduceMotion ? 1 : 1.05,
      }}
      whileTap={{ 
        scale: shouldReduceMotion ? 1 : 0.95,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.2,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Active state background - primary color with subtle glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary"
        animate={{
          opacity: isDark ? 0.12 : 0.08,
        }}
        transition={{
          duration: shouldReduceMotion ? 0.01 : 0.3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      />

      {/* Icon container with smooth morphing */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="sun"
              initial={shouldReduceMotion ? false : { opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={shouldReduceMotion ? false : { opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.3,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sun className="w-5 h-5 text-primary" strokeWidth={2} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={shouldReduceMotion ? false : { opacity: 0, rotate: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={shouldReduceMotion ? false : { opacity: 0, rotate: -90, scale: 0.8 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.3,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon className="w-5 h-5 text-primary" strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

