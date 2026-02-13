'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const RedEnvelope: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto perspective">
      {/* Envelope outer red background */}
      <motion.div
        className="relative bg-primary rounded-lg shadow-2xl overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Envelope flap */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-12 bg-primary border-b-4 border-primary/80 origin-top flex items-center justify-center"
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 180 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            perspective: '1000px',
          }}
        >
          <div className="text-white text-2xl font-serif">💌</div>
        </motion.div>

        {/* Inner white content area */}
        <motion.div
          className="bg-white p-8 md:p-12 rounded-b-lg mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
              Your Love Story Awaits
            </h2>
            <p className="text-foreground/60">
              Answer these questions to discover your perfect date
            </p>
          </div>
          {children}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 -right-4 text-4xl"
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💕
      </motion.div>
      <motion.div
        className="absolute -bottom-2 -left-6 text-3xl"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.2 }}
      >
        💖
      </motion.div>
    </div>
  );
};
