'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC<{ isVisible: boolean }> = ({
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating hearts animation */}
      <div className="relative w-32 h-32 mb-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            animate={{
              y: [-100, 100],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.sin((i / 5) * Math.PI * 2) * 40}px`,
              top: 0,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Loading text */}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-center">
        Analyzing Your Chemistry...
      </h2>

      <p className="text-lg text-foreground/60 mb-8 text-center max-w-md">
        Finding the perfect date plan tailored just for you
      </p>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          initial={{ width: '0%' }}
        />
      </div>
    </motion.div>
  );
};
