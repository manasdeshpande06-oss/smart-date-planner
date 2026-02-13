'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RedEnvelope } from './RedEnvelope';
import { QuizForm } from './QuizForm';

export const QuizSection: React.FC = () => {
  return (
    <section
      id="quiz"
      className="relative min-h-screen w-full bg-gradient-to-b from-romantic-light via-secondary to-romantic-light px-6 py-20 flex items-center"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

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
