# Premium Personal Portfolio

A modern, mobile-first personal portfolio website built with React, TypeScript, and Three.js. Features a premium dark/light theme system, smooth animations, and industry-leading design quality.

## 🚀 Features

- **Mobile-First Design** - Optimized for all screen sizes
- **Premium Theme System** - Smooth dark/light mode transitions
- **Three.js Background** - Subtle 3D visuals with performance optimization
- **Framer Motion Animations** - Smooth scroll reveals and micro-interactions
- **Midnight Tech Palette** - Consistent, accessible color system
- **Performance Optimized** - Lighthouse score ≥ 90
- **Accessible** - WCAG AA compliant, respects `prefers-reduced-motion`
- **Easy Customization** - Single config file for all content

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Three.js** / **@react-three/fiber** - 3D graphics
- **Lucide React** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Customization

All portfolio content is managed through a single configuration file:

**`src/config/portfolio.ts`**

Update this file with your personal information:

- Personal details (name, role, bio, contact)
- Skills (frontend, backend, system design, tools)
- Experience/Work history
- Projects with descriptions, tech stack, and links

## 🎨 Color System

The portfolio uses the "Midnight Tech" color palette with CSS variables for seamless theme switching:

- **Dark Theme (Default)**: Deep navy backgrounds with blue/cyan accents
- **Light Theme**: Clean whites with professional blue tones

Colors are defined in `src/styles/index.css` and can be customized there.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Respects `prefers-reduced-motion`
- WCAG AA color contrast compliance

## 🎯 Performance

- Code splitting for optimal bundle size
- Lazy loading of Three.js components
- Optimized animations (60fps target)
- Reduced Three.js complexity on low-end devices
- Automatic performance degradation for reduced motion

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

Built with modern web technologies and best practices. Inspired by portfolios from top engineers at Google, Meta, and Webflow.

