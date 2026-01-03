/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Midnight Tech palette - using CSS variables for theme switching
        bg: {
          main: 'var(--bg-main)',
          surface: 'var(--bg-surface)',
        },
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        text: {
          main: 'var(--text-main)',
          muted: 'var(--text-muted)',
        },
        border: {
          soft: 'var(--border-soft)',
        },
      },
      transitionDuration: {
        'theme': '400ms',
      },
      transitionTimingFunction: {
        'theme': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'primary': 'var(--shadow-primary)',
        'primary-hover': 'var(--shadow-primary-hover)',
      },
    },
  },
  plugins: [],
}

