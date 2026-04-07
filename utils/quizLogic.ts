import { QuizAnswers, DatePlan } from './types';

export function calculateCompatibilityScore(answers: QuizAnswers): number {
  let score = 0;

  // Base score from date vibe (20 points)
  score += 20;

  // Activity selection (30 points - 5 per activity up to 6)
  score += Math.min(answers.activities.length * 5, 30);

  // Flower selection adds uniqueness (25 points)
  if (answers.flower && answers.flower.length > 0) {
    score += 25;
  }

  // Color selection (25 points)
  if (answers.color && answers.color.length > 0) {
    score += 25;
  }

  // Random personality boost (0-10 points)
  score += Math.floor(Math.random() * 11);

  return Math.min(score, 100);
}

export function generateDatePlans(answers: QuizAnswers, dbPlans: any[]): DatePlan[] {
  const allPlansWithCategory: { plan: DatePlan; category: string }[] = [];

  if (dbPlans && Array.isArray(dbPlans)) {
    dbPlans.forEach(plan => {
      // Map MongoDB _id back to id if it's missing (though it might exist from json injection)
      if (!plan.id && plan._id) {
        plan.id = plan._id.toString();
      }
      allPlansWithCategory.push({ plan, category: plan._sourceGroup || '' });
    });
  }

  // Calculate scores for each plan
  const scoredPlans = allPlansWithCategory.map(({ plan, category }) => {
    let score = 0;

    // 1. Vibe Match (30 points)
    if (category.includes(answers.dateVibe) || (plan.categories && plan.categories.includes(answers.dateVibe))) {
      score += 30;
    }

    // 2. Activity Match (High weight: 50 points per matching tag)
    answers.activities.forEach(activity => {
      if (plan.categories && plan.categories.includes(activity)) {
        score += 50;
      } else if (category.includes(activity)) {
        // Fallback for category name match
        score += 20;
      }
    });

    // 3. Keyword Match for flower and color (10 points each)
    const searchText = `${plan.title} ${plan.description} ${plan.location} ${plan.dressCode}`.toLowerCase();

    if (answers.flower && searchText.includes(answers.flower.toLowerCase())) {
      score += 15;
    }

    if (answers.color && searchText.includes(answers.color.toLowerCase())) {
      score += 15;
    }

    // 4. Random tie-breaker/freshness (0-10 points)
    score += Math.random() * 10;

    return { ...plan, score };
  });

  // Sort by score descending and return top 5
  return scoredPlans
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(({ score, ...plan }) => plan as DatePlan);
}

export function getDateVibeName(vibe: string): string {
  const vibeNames: Record<string, string> = {
    romantic: '✨ Romantic Dreamer',
    adventurous: '🚀 Adventurous Spirit',
    casual: '😊 Laid-Back Lover',
    creative: '🎨 Creative Soul',
    nature: '🌿 Nature Enthusiast',
  };
  return vibeNames[vibe] || 'Mystery Match';
}
