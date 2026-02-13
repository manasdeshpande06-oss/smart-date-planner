'use client';

import { Navbar } from '@/components/navbar/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ScrollSection } from '@/components/landing/ScrollSection';
import { CustomCursor } from '@/components/landing/CustomCursor';
import { QuizSection } from '@/components/quiz/QuizSection';
import { ResultsPage } from '@/components/results/ResultsPage';
import { QuizProvider } from '@/components/quiz/QuizProvider';
import { useQuiz } from '@/components/quiz/QuizProvider';

function PageContent() {
  const { currentStep } = useQuiz();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <ScrollSection />
      {currentStep < 3 && <QuizSection />}
      {currentStep >= 3 && <ResultsPage />}
    </>
  );
}

export default function Page() {
  return (
    <QuizProvider>
      <PageContent />
    </QuizProvider>
  );
}
