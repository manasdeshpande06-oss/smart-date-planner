'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuizAnswers, QuizContextType } from '@/utils/types';
import { calculateCompatibilityScore, generateDatePlans } from '@/utils/quizLogic';

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswersState] = useState<QuizAnswers>({
    dateVibe: '',
    activities: [],
    flower: '',
    color: '',
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [compatibilityScore, setCompatibilityScore] = useState(0);
  const [datePlans, setDatePlans] = useState([]);

  const setAnswers = (newAnswers: Partial<QuizAnswers>) => {
    setAnswersState((prev) => ({ ...prev, ...newAnswers }));
  };

  const submitQuiz = async () => {
    setIsLoading(true);
    
    try {
      const res = await fetch('/api/activities');
      if (!res.ok) {
        throw new Error('Failed to fetch date plans from MongoDB');
      }
      
      const dbPlans = await res.json();

      const score = calculateCompatibilityScore(answers);
      const plans = generateDatePlans(answers, dbPlans);

      setCompatibilityScore(score);
      setDatePlans(plans as any);
      setCurrentStep(3); // Go to results page
    } catch (e) {
      console.error(e);
      alert('There was an error accessing the database. Ensure MongoDB is running and populated.');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setAnswersState({
      dateVibe: '',
      activities: [],
      flower: '',
      color: '',
    });
    setCurrentStep(0);
    setCompatibilityScore(0);
    setDatePlans([]);
  };

  const value: QuizContextType = {
    answers,
    currentStep,
    isLoading,
    compatibilityScore,
    datePlans,
    setAnswers,
    setCurrentStep,
    setIsLoading,
    submitQuiz,
    reset,
  };

  return (
    <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
