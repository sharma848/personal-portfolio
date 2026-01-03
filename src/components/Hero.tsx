import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';
import { Scene3D } from './Scene3D';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

export const Hero = () => {
  const { personal } = portfolioConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-text-main"
        >
          {personal.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-text-muted mb-2"
        >
          {personal.role}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-text-muted mb-8 max-w-2xl mx-auto"
        >
          {personal.tagline}
        </motion.p>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center space-x-4 mb-8"
        >
          <motion.a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-bg-surface border border-border-soft text-text-muted hover:text-primary hover:border-primary"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-bg-surface border border-border-soft text-text-muted hover:text-primary hover:border-primary"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={`mailto:${personal.email}`}
            className="p-3 rounded-full bg-bg-surface border border-border-soft text-text-muted hover:text-primary hover:border-primary"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:shadow-primary-hover"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-bg-surface border border-border-soft text-text-main font-medium hover:border-primary hover:text-primary"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
          >
            Contact
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Positioned relative to section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 0.8, 
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1]
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="flex flex-col items-center text-text-muted hover:text-primary"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

