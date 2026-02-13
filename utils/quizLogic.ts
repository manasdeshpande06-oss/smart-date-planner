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
      tips: ['Reserve a table by the window for the best view', 'Check the sunset time to arrive just before', 'Ask for the chef\'s special dessert'],
      cost: '$$$ - Premium',
      dressCode: 'Semi-Formal / Cocktail Attire',
      categories: ['romantic', 'dining'],
    },
    {
      id: '2',
      title: 'Wine Tasting at Home',
      time: '6:30 PM',
      emoji: '🍷',
      description: 'A curated selection of wines paired with homemade gourmet appetizers.',
      location: 'Your Place',
      tips: ['Select 3-4 different wine varietals', 'Prepare cheese and fruit pairings', 'Create a relaxed playlist'],
      cost: '$$ - Moderate',
      dressCode: 'Comfortable Chic',
      categories: ['romantic', 'dining', 'wellness'],
    },
    {
      id: '11',
      title: 'Rooftop Dinner Under the Stars',
      time: '8:00 PM',
      emoji: '🌟',
      description: 'Intimate rooftop dining with fairy lights, city views, and a personalized menu.',
      location: 'Sky Terrace Restaurant',
      tips: ['Bring a light jacket for the evening breeze', 'Request a secluded corner table', 'Mention it\'s a special date when booking'],
      cost: '$$$ - Premium',
      dressCode: 'Smart Casual',
      categories: ['romantic', 'dining', 'outdoor'],
    },
    {
      id: '12',
      title: 'Private Chef Experience',
      time: '7:30 PM',
      emoji: '👨‍🍳',
      description: 'A personal chef prepares a multi-course meal in your home while you relax.',
      location: 'Your Home',
      tips: ['Discuss dietary preferences in advance', 'Set the table with candles and flowers', 'Select a wine to pair with the menu'],
      cost: '$$$$ - Luxury',
      dressCode: 'Elegant Home Attire',
      categories: ['romantic', 'dining'],
    },
    {
      id: '13',
      title: 'Jazz Dinner Cruise',
      time: '6:00 PM',
      emoji: '🎷',
      description: 'Enjoy live jazz music and gourmet cuisine while cruising along the waterfront.',
      location: 'Marina Pier',
      tips: ['Arrive 30 minutes before departure', 'Bring a camera for skyline photos', 'Check the weather forecast'],
      cost: '$$$ - Premium',
      dressCode: 'Smart Casual / Dressy',
      categories: ['romantic', 'dining', 'travel', 'arts'],
    },
    {
      id: '14',
      title: 'Beachside Sunset Dinner',
      time: '6:30 PM',
      emoji: '🌅',
      description: 'Dine with your toes in the sand as the sun sets over the ocean.',
      location: 'Beachfront Bistro',
      tips: ['Wear easy-to-remove shoes', 'Bring sunglasses for the sunset', 'Book a table on the sand specifically'],
      cost: '$$$ - Premium',
      dressCode: 'Beach Formal',
      categories: ['romantic', 'dining', 'outdoor'],
    },
  ],
  romantic_outdoor: [
    {
      id: '15',
      title: 'Beach Walk at Sunset',
      time: '5:30 PM',
      emoji: '🏖️',
      description: 'Stroll hand-in-hand along the shoreline, collecting shells and watching the sunset.',
      location: 'Sunset Beach',
      tips: ['Check tide times beforehand', 'Bring a blanket to sit on', 'Pack a thermos of hot cocoa or wine'],
      cost: 'FREE',
      dressCode: 'Casual & Comfortable Shoes',
      categories: ['romantic', 'outdoor'],
    },
    {
      id: '16',
      title: 'Coastal Picnic',
      time: '12:00 PM',
      emoji: '🧺',
      description: 'Pack a gourmet lunch and enjoy it on a secluded beach with ocean views.',
      location: 'Secret Cove',
      tips: ['Pack finger foods for easy eating', 'Bring sunscreen and hats', 'Carry a portable speaker for music'],
      cost: '$ - Affordable',
      dressCode: 'Beach Casual',
      categories: ['romantic', 'outdoor', 'dining'],
    },
    {
      id: '17',
      title: 'Stargazing at the Beach',
      time: '9:00 PM',
      emoji: '✨',
      description: 'Lie on blankets under the stars, identifying constellations and sharing dreams.',
      location: 'Dark Sky Beach',
      tips: ['Download a star-gazing app', 'Bring extra warm blankets', 'Pack a lantern or flashlight'],
      cost: 'FREE',
      dressCode: 'Warm & Cozy',
      categories: ['romantic', 'outdoor'],
    },
    {
      id: '18',
      title: 'Lakeside Canoe Adventure',
      time: '4:00 PM',
      emoji: '🛶',
      description: 'Paddle together across a calm lake, exploring hidden coves and wildlife.',
      location: 'Crystal Lake',
      tips: ['Rent the canoe in advance', 'Bring waterproof bags for phones', 'Wear life jackets for safety'],
      cost: '$$ - Moderate',
      dressCode: 'Active / Water-Safe',
      categories: ['romantic', 'outdoor', 'sports'],
    },
    {
      id: '19',
      title: 'Garden Tea Party',
      time: '3:00 PM',
      emoji: '🫖',
      description: 'Elegant afternoon tea in a beautiful garden setting with pastries and sandwiches.',
      location: 'Rose Garden Pavilion',
      tips: ['Reserve a table in the shade', 'Try the signature tea blend', 'Take a walk around the gardens after'],
      cost: '$$ - Moderate',
      dressCode: 'Garden Party / Smart Casual',
      categories: ['romantic', 'outdoor', 'dining', 'nature'],
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
      tips: ['Start hiking 45 mins before sunrise', 'Bring headlamps for the ascent', 'Pack hot coffee in a thermos'],
      cost: '$ - Affordable',
      dressCode: 'Athletic / Hiking Gear',
      categories: ['adventurous', 'outdoor', 'wellness'],
    },
    {
      id: '4',
      title: 'Beach Bonfire Night',
      time: '5:00 PM',
      emoji: '🔥',
      description: 'Roast marshmallows, watch the sunset, and enjoy star-gazing by the fire.',
      location: 'Private Beach',
      tips: ['Check local fire regulations', 'Bring fire starters and wood', 'Pack s\'mores ingredients'],
      cost: '$ - Affordable',
      dressCode: 'Casual & Warm Layers',
      categories: ['adventurous', 'outdoor', 'dining'],
    },
    {
      id: '20',
      title: 'Surfing Lessons Together',
      time: '9:00 AM',
      emoji: '🏄',
      description: 'Learn to ride the waves side by side with a professional instructor.',
      location: 'Surfside Beach',
      tips: ['Book a beginner lesson', 'Wear secure swimsuits', 'Bring plenty of water and sunscreen'],
      cost: '$$$ - Premium',
      dressCode: 'Swimwear / Wetsuit (often provided)',
      categories: ['adventurous', 'outdoor', 'sports'],
    },
    {
      id: '21',
      title: 'Rock Climbing Adventure',
      time: '10:00 AM',
      emoji: '🧗',
      description: 'Challenge yourselves with indoor or outdoor rock climbing and celebrate at the top.',
      location: 'Climb Zone',
      tips: ['Wear flexible clothing', 'Rent climbing shoes if tailored', 'Encourage each other!'],
      cost: '$$ - Moderate',
      dressCode: 'Athletic Wear',
      categories: ['adventurous', 'outdoor', 'sports'],
    },
    {
      id: '22',
      title: 'Kayaking & Beach Picnic',
      time: '11:00 AM',
      emoji: '🚣',
      description: 'Paddle along the coastline, then beach your kayaks for a romantic seaside lunch.',
      location: 'Bay Harbor',
      tips: ['Bring a waterproof camera', 'Pack a dry bag for towels', 'Wear hats and sunglasses'],
      cost: '$$ - Moderate',
      dressCode: 'Active / Swimwear',
      categories: ['adventurous', 'outdoor', 'sports', 'dining'],
    },
    {
      id: '23',
      title: 'Zip-lining Through the Forest',
      time: '1:00 PM',
      emoji: '🌲',
      description: 'Soar through the treetops on an exhilarating zip-line course.',
      location: 'Adventure Park',
      tips: ['Wear closed-toe shoes (mandatory)', 'Empty pockets before riding', 'Book in advance'],
      cost: '$$$ - Premium',
      dressCode: 'Athletic / Comfortable',
      categories: ['adventurous', 'outdoor', 'sports'],
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
      tips: ['Bring portable radio if needed', 'Pack lots of pillows and blankets', 'Arrive early for a good spot'],
      cost: '$$ - Moderate',
      dressCode: 'Comfy Casual',
      categories: ['casual', 'movies', 'dining'],
    },
    {
      id: '6',
      title: 'Home Theater Marathon',
      time: '6:00 PM',
      emoji: '🎬',
      description: 'Your favorite films, homemade popcorn, and unlimited comfort.',
      location: 'Living Room',
      tips: ['Create a theme for the movies', 'Build a blanket fort', 'Prepare a snack buffet'],
      cost: '$ - Low Cost',
      dressCode: 'Pajamas / Loungewear',
      categories: ['casual', 'movies', 'dining'],
    },
    {
      id: '24',
      title: 'Outdoor Cinema in the Park',
      time: '8:00 PM',
      emoji: '🎥',
      description: 'Watch a classic film on a big screen under the stars with a picnic spread.',
      location: 'Central Park',
      tips: ['Bring low-back chairs or blankets', 'Pack bug spray', 'Arrive early to claim a spot'],
      cost: 'FREE / Low Cost',
      dressCode: 'Casual Layers',
      categories: ['casual', 'movies', 'outdoor'],
    },
    {
      id: '25',
      title: 'Cinema & Dinner Combo',
      time: '6:30 PM',
      emoji: '🍿',
      description: 'Catch the latest blockbuster then discuss it over dinner at a nearby restaurant.',
      location: 'Downtown Cinema',
      tips: ['Book movie tickets online', 'Make dinner reservations for after', 'Share a large popcorn'],
      cost: '$$ - Moderate',
      dressCode: 'Casual Date Night',
      categories: ['casual', 'movies', 'dining'],
    },
    {
      id: '26',
      title: 'Netflix & Homemade Pizza Night',
      time: '7:00 PM',
      emoji: '🍕',
      description: 'Make pizzas together from scratch, then binge-watch your favorite series.',
      location: 'Home Sweet Home',
      tips: ['Buy pre-made dough or make from scratch', 'Get fun varied toppings', 'Start cooking early'],
      cost: '$ - Low Cost',
      dressCode: 'Active / Aprons!',
      categories: ['casual', 'movies', 'dining'],
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
      tips: ['Trim fingernails short', 'Don\'t wear expensive jewelry', 'Bring hair ties'],
      cost: '$$$ - Premium',
      dressCode: 'Start-Ready Casual',
      categories: ['creative', 'arts'],
    },
    {
      id: '8',
      title: 'Gallery Opening Reception',
      time: '6:00 PM',
      emoji: '🖼️',
      description: 'Explore contemporary art and mingle at an exclusive gallery event.',
      location: 'Art Gallery',
      tips: ['Read about the artist beforehand', 'Eat a light meal before', 'Discuss your favorite pieces'],
      cost: 'FREE / $$ (if buying drinks)',
      dressCode: 'Smart / Artsy Chic',
      categories: ['creative', 'arts', 'dining'],
    },
    {
      id: '27',
      title: 'Couples Painting Class',
      time: '7:00 PM',
      emoji: '🖌️',
      description: 'Paint portraits of each other while sipping wine and enjoying the creative process.',
      location: 'Paint & Sip Studio',
      tips: ['Don\'t take it too seriously', 'Compliment each other\'s work', 'Bring your favorite wine'],
      cost: '$$ - Moderate',
      dressCode: 'Casual (Provide Aprons)',
      categories: ['creative', 'arts', 'dining'],
    },
    {
      id: '28',
      title: 'Photography Walk',
      time: '4:00 PM',
      emoji: '📸',
      description: 'Explore the city with your cameras, capturing beautiful moments together.',
      location: 'Historic District',
      tips: ['Charge camera batteries', 'Plan a scenic route', 'Take photos of each other'],
      cost: 'FREE',
      dressCode: 'Walking Shoes & Stylish',
      categories: ['creative', 'arts', 'outdoor'],
    },
    {
      id: '29',
      title: 'Cooking Class Adventure',
      time: '6:00 PM',
      emoji: '🍳',
      description: 'Learn to cook a new cuisine together with a professional chef.',
      location: 'Culinary Institute',
      tips: ['Arrive hungry!', 'Bring a notebook for tips', 'Wear closed-toe shoes'],
      cost: '$$$ - Premium',
      dressCode: 'Casual / Comfortable',
      categories: ['creative', 'arts', 'dining'],
    },
    {
      id: '30',
      title: 'Live Theater Performance',
      time: '7:30 PM',
      emoji: '🎭',
      description: 'Experience the magic of live theater with orchestra seats and post-show dessert.',
      location: 'Grand Theater',
      tips: ['Pre-order intermission drinks', 'Read the synopsis', 'Turn off phones completely'],
      cost: '$$$ - Premium',
      dressCode: 'Formal / Semi-Formal',
      categories: ['creative', 'arts', 'dining'],
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
      tips: ['Arrive 30 mins early for sauna', 'Drink plenty of water', 'Leave phones in lockers'],
      cost: '$$$$ - Luxury',
      dressCode: 'Comfortable arrival / Robes provided',
      categories: ['nature', 'wellness'],
    },
    {
      id: '10',
      title: 'Botanical Garden Stroll',
      time: '3:00 PM',
      emoji: '🌺',
      description: 'Walk through stunning gardens, discovering rare plants and peaceful nooks.',
      location: 'Botanical Gardens',
      tips: ['Check for seasonal blooms', 'Identify plants together', 'Find a bench for quiet talk'],
      cost: '$ - Affordable',
      dressCode: 'Smart Casual & Walking Shoes',
      categories: ['nature', 'wellness', 'outdoor'],
    },
    {
      id: '31',
      title: 'Beach Yoga at Sunrise',
      time: '6:30 AM',
      emoji: '🧘',
      description: 'Practice yoga together on the beach as the sun rises over the ocean.',
      location: 'Serenity Beach',
      tips: ['Bring yoga mats or towels', 'Wear layers', 'Stay for meditation after'],
      cost: '$ - Affordable',
      dressCode: 'Yoga / Athletic Wear',
      categories: ['nature', 'wellness', 'outdoor', 'sports'],
    },
    {
      id: '32',
      title: 'Forest Meditation Retreat',
      time: '9:00 AM',
      emoji: '🌲',
      description: 'Guided meditation and mindfulness exercises in a peaceful forest setting.',
      location: 'Zen Forest Reserve',
      tips: ['Silence all devices', 'Practice deep breathing', 'Bring water and a shawl'],
      cost: '$$ - Moderate',
      dressCode: 'Loose, Comfortable Clothing',
      categories: ['nature', 'wellness', 'outdoor'],
    },
    {
      id: '33',
      title: 'Hot Springs Escape',
      time: '2:00 PM',
      emoji: '♨️',
      description: 'Soak in natural hot springs surrounded by stunning mountain views.',
      location: 'Mountain Springs Resort',
      tips: ['hydrate often', 'Bring flip flops', 'Limit soak time to 20 min intervals'],
      cost: '$$ - Moderate',
      dressCode: 'Swimwear',
      categories: ['nature', 'wellness', 'travel'],
    },
    {
      id: '34',
      title: 'Coastal Nature Walk',
      time: '4:00 PM',
      emoji: '🌊',
      description: 'Explore coastal trails, spot wildlife, and breathe in the fresh ocean air.',
      location: 'Coastal Nature Reserve',
      tips: ['Bring binoculars', 'Stay on marked trails', 'Watch for seabirds'],
      cost: 'FREE',
      dressCode: 'Active / Walking Gear',
      categories: ['nature', 'wellness', 'outdoor'],
    },
  ],
  romantic_sports: [
    {
      id: '35',
      title: 'Sunset Tennis & Juice',
      time: '5:00 PM',
      emoji: '🎾',
      description: 'A friendly match of tennis followed by refreshing cold-pressed juices at sunset.',
      location: 'Riverside Courts',
      tips: ['Bring your own rackets if you have them', 'Book the court for 90 minutes', 'Stay hydrated throughout'],
      cost: '$$ - Moderate',
      dressCode: 'Athletic Wear',
      categories: ['romantic', 'sports', 'wellness'],
    },
    {
      id: '36',
      title: 'Boutique Bowling Night',
      time: '8:00 PM',
      emoji: '🎳',
      description: 'Retro-style bowling with gourmet snacks and a fun, competitive atmosphere.',
      location: 'The Lucky Strike',
      tips: ['Wear fun socks!', 'Order the signature sliders', 'Try a lane with bumpers for laughs'],
      cost: '$$ - Moderate',
      dressCode: 'Casual & Fun',
      categories: ['romantic', 'sports', 'dining'],
    },
  ],
  adventurous_sports: [
    {
      id: '37',
      title: 'Go-Karting Championship',
      time: '2:00 PM',
      emoji: '🏎️',
      description: 'High-speed racing on a professional track. Winner chooses the next date spot!',
      location: 'Speedway Track',
      tips: ['Arrive 15 mins early for safety briefing', 'Wear closed-toe shoes', 'Prepare for a little adrenaline burst'],
      cost: '$$$ - Premium',
      dressCode: 'Athletic / Racing Gear',
      categories: ['adventurous', 'sports'],
    },
    {
      id: '38',
      title: 'Indoor Skydiving (iFly)',
      time: '11:00 AM',
      emoji: '🪂',
      description: 'Experience the thrill of freefall in a state-of-the-art vertical wind tunnel.',
      location: 'Flight Center',
      tips: ['Relax your body for better flight', 'Listen closely to the instructor', 'Bring a camera for the video'],
      cost: '$$$$ - Luxury',
      dressCode: 'Comfortable / Jumpsuit Provided',
      categories: ['adventurous', 'sports'],
    },
  ],
  fun_shopping: [
    {
      id: '39',
      title: 'Vintage Market Crawl',
      time: '11:00 AM',
      emoji: '🛍️',
      description: 'Hunt for hidden treasures and unique vintage finds at local antique markets.',
      location: 'Old Town Square',
      tips: ['Bring reusable bags', 'Carry some cash for better bargaining', 'Check the market schedule'],
      cost: '$$ - Moderate',
      dressCode: 'Walking Shoes / Artsy',
      categories: ['casual', 'shopping', 'arts'],
    },
    {
      id: '40',
      title: 'Luxury Mall Scavenger Hunt',
      time: '3:00 PM',
      emoji: '🎁',
      description: 'A fun challenge through luxury stores to find the most unique items.',
      location: 'Grand Plaza Mall',
      tips: ['Create a list of items to "find"', 'Take photos as proof', 'End with a treat at the food court'],
      cost: '$$ - Moderate',
      dressCode: 'Stylish Casual',
      categories: ['creative', 'shopping'],
    },
  ],
  romantic_travel: [
    {
      id: '41',
      title: 'Weekend City Escape',
      time: 'Check-in 2 PM',
      emoji: '🏙️',
      description: 'A mini-vacation in a nearby city with high-end dining and museum visits.',
      location: 'Downtown Hotel',
      tips: ['Book a room with a view', 'Research top cafes in the area', 'Pack light for the weekend'],
      cost: '$$$$ - Luxury',
      dressCode: 'Travel Chic',
      categories: ['romantic', 'travel', 'dining', 'arts'],
    },
    {
      id: '42',
      title: 'Hot Air Balloon Ride',
      time: '5:30 AM',
      emoji: '🎈',
      description: 'Soar above the landscape at sunrise for a breathtaking and unforgettable journey.',
      location: 'Cloud Base Valley',
      tips: ['Dress in warm layers', 'Arrive early to see the balloon inflate', 'Bring a high-quality camera'],
      cost: '$$$$ - Luxury',
      dressCode: 'Casual & Warm',
      categories: ['romantic', 'travel', 'nature'],
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
  const allPlansWithCategory: { plan: DatePlan; category: string }[] = [];

  // Flatten database into a list with category context
  Object.entries(datePlansDatabase).forEach(([category, plans]) => {
    plans.forEach(plan => {
      allPlansWithCategory.push({ plan, category });
    });
  });

  // Calculate scores for each plan
  const scoredPlans = allPlansWithCategory.map(({ plan, category }) => {
    let score = 0;

    // 1. Vibe Match (30 points)
    if (category.includes(answers.dateVibe) || plan.categories.includes(answers.dateVibe)) {
      score += 30;
    }

    // 2. Activity Match (High weight: 50 points per matching tag)
    // This ensures that if they select 'sports', anything tagged 'sports' rises to the top
    answers.activities.forEach(activity => {
      if (plan.categories.includes(activity)) {
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
