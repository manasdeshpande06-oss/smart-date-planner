'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuiz } from './QuizProvider';

const vibeOptions = [
  { id: 'romantic', label: 'Romantic', emoji: '✨' },
  { id: 'adventurous', label: 'Adventurous', emoji: '🚀' },
  { id: 'casual', label: 'Casual', emoji: '😊' },
  { id: 'creative', label: 'Creative', emoji: '🎨' },
  { id: 'nature', label: 'Nature', emoji: '🌿' },
];

const activityOptions = [
  { id: 'dining', label: 'Dining', emoji: '🍽️' },
  { id: 'outdoor', label: 'Outdoor', emoji: '🥾' },
  { id: 'arts', label: 'Arts & Culture', emoji: '🎭' },
  { id: 'sports', label: 'Sports', emoji: '⚽' },
  { id: 'movies', label: 'Movies', emoji: '🎬' },
  { id: 'travel', label: 'Travel', emoji: '✈️' },
  { id: 'shopping', label: 'Shopping', emoji: '🛍️' },
  { id: 'wellness', label: 'Wellness', emoji: '💆' },
];

export const QuizForm: React.FC = () => {
  const { answers, setAnswers, submitQuiz, isLoading } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleVibe = (vibe: string) => {
    setAnswers({ dateVibe: vibe });
  };

  const handleActivityToggle = (activity: string) => {
    setAnswers({
      activities: answers.activities.includes(activity)
        ? answers.activities.filter((a) => a !== activity)
        : [...answers.activities, activity],
    });
  };

  const handleFlower = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({ flower: e.target.value });
  };

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers({ color: e.target.value });
  };

  const isCompleted =
    answers.dateVibe &&
    answers.activities.length > 0 &&
    answers.flower &&
    answers.color;

  return (
    <div className="space-y-8">
      {/* Question 1: Date Vibe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-foreground mb-4">
          What's your ideal date vibe?
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {vibeOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleVibe(option.id)}
              className={`p-4 rounded-lg border-2 transition-all text-center ${
                answers.dateVibe === option.id
                  ? 'border-primary bg-secondary text-primary'
                  : 'border-border bg-white text-foreground hover:border-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-1">{option.emoji}</div>
              <div className="text-sm font-medium">{option.label}</div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Question 2: Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Which activities interest you? (Select at least one)
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {activityOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleActivityToggle(option.id)}
              className={`p-4 rounded-lg border-2 transition-all text-center ${
                answers.activities.includes(option.id)
                  ? 'border-primary bg-secondary text-primary'
                  : 'border-border bg-white text-foreground hover:border-primary'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl mb-1">{option.emoji}</div>
              <div className="text-xs font-medium">{option.label}</div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Question 3: Favorite Flower */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold text-foreground mb-4">
          What's your favorite flower?
        </h3>
        <input
          type="text"
          value={answers.flower}
          onChange={handleFlower}
          placeholder="e.g., Rose, Tulip, Daisy..."
          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
        />
      </motion.div>

      {/* Question 4: Favorite Color */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-foreground mb-4">
          What's your favorite color?
        </h3>
        <input
          type="text"
          value={answers.color}
          onChange={handleColor}
          placeholder="e.g., Red, Blue, Purple..."
          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        onClick={submitQuiz}
        disabled={!isCompleted || isLoading}
        className={`w-full py-4 rounded-full font-semibold text-lg transition-all ${
          isCompleted && !isLoading
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-lg hover:shadow-xl'
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
        whileHover={isCompleted && !isLoading ? { scale: 1.05 } : {}}
        whileTap={isCompleted && !isLoading ? { scale: 0.95 } : {}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Finding Your Match...
          </div>
        ) : (
          'Discover My Date Plans'
        )}
      </motion.button>
    </div>
  );
};
