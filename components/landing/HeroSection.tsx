'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/hero-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Main heading */}
        <motion.div
          className="text-center max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight text-balance">
            Find Your Perfect
            <br />
            <span className="text-accent">Love Story</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 mb-12 leading-relaxed text-balance">
            Discover personalized date ideas tailored to your personality and
            preferences. Let us help you plan an unforgettable experience.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => {
              const element = document.getElementById('quiz');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-gentle"
          >
            Tell Me More
          </button>
        </motion.div>

        {/* Floating hearts decoration */}
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-3xl md:text-5xl pointer-events-none"
            style={{ left: `${heart.left}%`, bottom: '-10%' }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: '-120vh',
              opacity: [0, 0.6, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: heart.duration,
              repeat: Infinity,
              delay: heart.delay,
              ease: 'linear',
            }}
          >
            {heart.id % 2 === 0 ? '💕' : '💖'}
          </motion.div>
        ))}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <p className="text-sm text-foreground/60 mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <motion.div
                className="w-1 h-2 bg-primary rounded-full mt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
