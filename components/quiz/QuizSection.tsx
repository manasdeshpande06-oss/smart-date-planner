'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RedEnvelope } from './RedEnvelope';
import { QuizForm } from './QuizForm';

export const QuizSection: React.FC = () => {
  const [balloons, setBalloons] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newBalloons = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 15,
    }));
    setBalloons(newBalloons);
  }, []);
  return (
    <section
      id="quiz"
      className="relative min-h-screen w-full px-6 py-20 flex items-center"
      style={{
        backgroundImage: 'url(/quiz-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#f9f0f0', // Fallback color
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      {/* Floating balloons */}
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute text-4xl pointer-events-none opacity-60"
          style={{ left: `${balloon.left}%`, bottom: '-10%' }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: '-120vh',
            opacity: [0, 0.8, 0],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: balloon.duration,
            repeat: Infinity,
            delay: balloon.delay,
            ease: 'linear',
          }}
        >
          🎈
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Ready to Find Love?
          </h2>
          <p className="text-lg text-foreground/60">
            Let's create your perfect romantic experience
          </p>
        </motion.div>

        {/* Quiz in Red Envelope */}
        <RedEnvelope>
          <QuizForm />
        </RedEnvelope>
      </div>
    </section>
  );
};
