export interface QuizAnswers {
  dateVibe: string;
  activities: string[];
  flower: string;
  color: string;
}

export interface DatePlan {
  id: string;
  title: string;
  time: string;
  emoji: string;
  description: string;
  location: string;
  image?: string;
  tips: string[];
  cost: string;
  dressCode: string;
  categories: string[];
}

export interface QuizContextType {
  answers: QuizAnswers;
  currentStep: number;
  isLoading: boolean;
  compatibilityScore: number;
  datePlans: DatePlan[];
  setAnswers: (answers: Partial<QuizAnswers>) => void;
  setCurrentStep: (step: number) => void;
  setIsLoading: (loading: boolean) => void;
  submitQuiz: () => Promise<void>;
  reset: () => void;
}

export type DateVibe = 'romantic' | 'adventurous' | 'casual' | 'creative' | 'nature';
export type ActivityType =
  | 'dining'
  | 'outdoor'
  | 'arts'
  | 'sports'
  | 'movies'
  | 'travel'
  | 'shopping'
  | 'wellness';
