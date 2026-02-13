import { QuizAnswers, DatePlan } from './types';

const datePlansDatabase: Record<string, DatePlan[]> = {
  romantic_dining: [
    {
      id: '1',
      title: 'Candlelit Dinner by the Harbor',
      time: '7:00 PM',
      emoji: '🍽️',
      description: 'An elegant evening at an upscale restaurant with ocean views and soft ambient lighting.',
      location: 'Harborside Restaurant',
    },
    {
      id: '2',
      title: 'Wine Tasting at Home',
      time: '6:30 PM',
      emoji: '🍷',
      description: 'A curated selection of wines paired with homemade gourmet appetizers.',
      location: 'Your Place',
    },
  ],
  adventurous_outdoor: [
    {
      id: '3',
      title: 'Sunrise Hike and Picnic',
      time: '6:00 AM',
      emoji: '🥾',
      description: 'Trek to a scenic overlook for sunrise, then enjoy a packed breakfast with a view.',
      location: 'Mountain Trail',
    },
    {
      id: '4',
      title: 'Beach Bonfire Night',
      time: '5:00 PM',
      emoji: '🔥',
      description: 'Roast marshmallows, watch the sunset, and enjoy star-gazing by the fire.',
      location: 'Private Beach',
    },
  ],
  casual_movies: [
    {
      id: '5',
      title: 'Drive-In Movie Night',
      time: '7:30 PM',
      emoji: '🚗',
      description: 'Classic movie experience under the stars with snacks and cozy blankets.',
      location: 'Drive-In Theater',
    },
    {
      id: '6',
      title: 'Home Theater Marathon',
      time: '6:00 PM',
      emoji: '🎬',
      description: 'Your favorite films, homemade popcorn, and unlimited comfort.',
      location: 'Living Room',
    },
  ],
  creative_arts: [
    {
      id: '7',
      title: 'Pottery Class Together',
      time: '2:00 PM',
      emoji: '🎨',
      description: 'Create something beautiful together in an intimate pottery workshop.',
      location: 'Art Studio',
    },
    {
      id: '8',
      title: 'Gallery Opening Reception',
      time: '6:00 PM',
      emoji: '🖼️',
      description: 'Explore contemporary art and mingle at an exclusive gallery event.',
      location: 'Art Gallery',
    },
  ],
  nature_wellness: [
    {
      id: '9',
      title: 'Couples Spa Day',
      time: '10:00 AM',
      emoji: '💆',
      description: 'Massages, mineral baths, and relaxation in a serene environment.',
      location: 'Wellness Spa',
    },
    {
      id: '10',
      title: 'Botanical Garden Stroll',
      time: '3:00 PM',
      emoji: '🌺',
      description: 'Walk through stunning gardens, discovering rare plants and peaceful nooks.',
      location: 'Botanical Gardens',
    },
  ],
};

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

export function generateDatePlans(answers: QuizAnswers): DatePlan[] {
  const key = `${answers.dateVibe}_${
    answers.activities.length > 0 ? answers.activities[0] : 'dining'
  }`;

  const basePlans = datePlansDatabase[key] || datePlansDatabase.romantic_dining;

  // Shuffle and return top 3
  return basePlans
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
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
