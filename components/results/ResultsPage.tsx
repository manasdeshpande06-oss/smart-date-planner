'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from '@/components/quiz/QuizProvider';
import { getDateVibeName } from '@/utils/quizLogic';
import { LoadingScreen } from './LoadingScreen';
import { DatePlanCard } from './DatePlanCard';

export const ResultsPage: React.FC = () => {
  const { compatibilityScore, datePlans, answers, reset, isLoading } = useQuiz();
  const [displayScore, setDisplayScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!isLoading && compatibilityScore > 0) {
      // Delay showing results to simulate loading
      const timer = setTimeout(() => setShowResults(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, compatibilityScore]);

  useEffect(() => {
    if (showResults && displayScore < compatibilityScore) {
      const increment = Math.ceil(compatibilityScore / 100);
      const timer = setTimeout(
        () => setDisplayScore((prev) => Math.min(prev + increment, compatibilityScore)),
        30
      );
      return () => clearTimeout(timer);
    }
  }, [displayScore, compatibilityScore, showResults]);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />

      {showResults && (
        <section
          className="relative min-h-screen w-full px-6 py-20"
          style={{
            backgroundImage: 'url(/results-background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#fce4ec', // Fallback color
          }}
        >
          {/* Overlay for better card visibility */}
          <div className="absolute inset-0 bg-white/25" />
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4 text-balance">
                Your Perfect Match Profile
              </h1>

              {/* Personality badge */}
              <motion.div
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold mb-8"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {getDateVibeName(answers.dateVibe)}
              </motion.div>
            </motion.div>

            {/* Compatibility Score */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="inline-block">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* Background circle */}
                  <svg
                    className="absolute inset-0 w-full h-full transform -rotate-90"
                    viewBox="0 0 200 200"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-secondary"
                    />
                    <motion.circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-primary"
                      strokeDasharray={`${2 * Math.PI * 90}`}
                      initial={{
                        strokeDashoffset: `${2 * Math.PI * 90}`,
                      }}
                      animate={{
                        strokeDashoffset: `${2 * Math.PI * 90 * (1 - displayScore / 100)
                          }`,
                      }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Score text */}
                  <div className="text-center z-10">
                    <div className="text-5xl font-serif font-bold text-primary">
                      {displayScore}%
                    </div>
                    <div className="text-sm text-foreground/60 mt-1">
                      Compatibility
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Summary */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Your Profile
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Preferred Activities
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {answers.activities.map((activity) => (
                      <span
                        key={activity}
                        className="px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium capitalize"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Favorite Choices
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-foreground/70">
                        Flower:
                      </span>{' '}
                      <span className="text-primary font-semibold">
                        {answers.flower}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground/70">
                        Color:
                      </span>{' '}
                      <span className="text-primary font-semibold">
                        {answers.color}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Date Plans */}
            <div className="mb-16">
              <motion.h2
                className="text-3xl font-serif font-bold text-primary mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Your Personalized Date Ideas
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {datePlans.map((plan, index) => (
                  <DatePlanCard key={plan.id} plan={plan} index={index} />
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button
                onClick={reset}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Retake Quiz
              </button>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 bg-secondary text-primary font-semibold rounded-full hover:bg-accent transition-colors shadow-lg hover:shadow-xl"
              >
                Back to Home
              </button>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
};
