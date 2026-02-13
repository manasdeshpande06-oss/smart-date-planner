'use client';

import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-romantic-pink/95 backdrop-blur-sm border-b border-white/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-serif font-bold text-primary">
            💕 Date Planner
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => handleScroll('hero')}
            className="relative text-foreground font-medium text-sm hover:text-primary transition-colors"
          >
            Home
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              whileHover={{ width: '100%' }}
              initial={{ width: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </button>

          <button
            onClick={() => handleScroll('quiz')}
            className="relative text-foreground font-medium text-sm hover:text-primary transition-colors"
          >
            Quiz
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              whileHover={{ width: '100%' }}
              initial={{ width: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </button>

          <button
            onClick={() => handleScroll('about')}
            className="relative text-foreground font-medium text-sm hover:text-primary transition-colors"
          >
            About
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-primary"
              whileHover={{ width: '100%' }}
              initial={{ width: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};
