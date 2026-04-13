import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s3.png';

export const categories = [
  {
    id: 'makhana',
    title: 'Flavoured Makhana',
    subtitle:
      'Roasted to perfection, seasoned with love. Your guilt-free snacking companion.',
  },
  {
    id: 'jowar',
    title: 'Jowar Puffs',
    subtitle:
      'Made from wholesome jowar (sorghum), these airy puffs are a delicious way to enjoy light goodness.',
  },
  {
    id: 'protein',
    title: 'Clean Protein Powder',
    subtitle:
      'Plant-based protein with zero compromise. Fuel your body, naturally.',
  },
];

export const products = [
  {
    id: 'makhana-100g-pack1',
    name: '100GM Makhana Package - Pack of 1',
    category: 'makhana',

    pricing: {
      price: 200,
      originalPrice: 300,
      discount: 33, // optional but useful
    },

    tagline:
      'Roasted to perfection, seasoned with love. Your guilt-free snacking companion.',

    description:
      'Enjoy the perfect balance of taste and nutrition with our premium roasted makhana. Carefully selected lotus seeds are roasted to create a light, crispy snack that satisfies your cravings without the guilt.',

    highlights: [
      'High in protein',
      'Gluten-free',
      'Rich in antioxidants',
      'Roasted, not fried',
      'Low in calories',
    ],

    nutrition: {
      energy: '347 kcal',
      protein: '9.7 g',
      carbs: '76 g',
      fiber: '14 g',
      fat: '0.5 g',
    },

    ingredients: [
      'Makhana (Fox Nuts)',
      'Sunflower Oil',
      'Natural Seasoning',
      'Salt',
      'Spices',
    ],

    storage: 'Store in a cool and dry place.',

    badge: 'No artificial preservatives or added colors',

    images: [s4, s2],

    tags: ['healthy', 'snack', 'roasted'],
    isFeatured: true,
  },

  {
    id: 'jowar-100g-pack1',
    name: '100GM Jowar Puffs - Pack of 1',
    category: 'jowar',

    pricing: {
      price: 180,
      originalPrice: 250,
      discount: 28,
    },

    tagline:
      'Light, crunchy and made from wholesome jowar. A perfect anytime snack.',

    description:
      'Crafted from nutrient-rich jowar, these puffs are airy, crispy, and incredibly satisfying. A healthier alternative to fried snacks.',

    highlights: ['Gluten-free', 'High fiber', 'Light & crunchy', 'Low fat'],

    nutrition: {
      energy: '320 kcal',
      protein: '8 g',
      carbs: '70 g',
      fiber: '12 g',
      fat: '2 g',
    },

    ingredients: ['Jowar (Sorghum)', 'Natural Seasoning', 'Salt'],

    storage: 'Store in a cool and dry place.',

    badge: 'No added preservatives',

    images: [s2, s4],

    tags: ['light', 'healthy'],
    isFeatured: false,
  },

  {
    id: 'protein-500g-pack',
    name: 'Clean Protein Powder - 500GM',
    category: 'protein',

    pricing: {
      price: 1200,
      originalPrice: 1500,
      discount: 20,
    },

    tagline:
      'Plant-based protein with zero compromise. Clean fuel for your body.',

    description:
      'Our clean protein powder is crafted for fitness enthusiasts who value purity and performance. No additives, no fillers — just clean nutrition.',

    highlights: [
      'Plant-based',
      'No additives',
      'High protein',
      'Easy digestion',
    ],

    nutrition: {
      energy: '400 kcal',
      protein: '24 g',
      carbs: '10 g',
      fiber: '5 g',
      fat: '3 g',
    },

    ingredients: ['Plant Protein Blend', 'Natural Flavoring'],

    storage: 'Store in a cool, dry place away from sunlight.',

    badge: 'No artificial flavors',

    images: [s3, s4],

    tags: ['fitness', 'protein'],
    isFeatured: true,
  },
  {
    id: 'makhana-100g-pack1',
    name: '100GM Makhana Package - Pack of 1',
    category: 'makhana',

    pricing: {
      price: 200,
      originalPrice: 300,
      discount: 33, // optional but useful
    },

    tagline:
      'Roasted to perfection, seasoned with love. Your guilt-free snacking companion.',

    description:
      'Enjoy the perfect balance of taste and nutrition with our premium roasted makhana. Carefully selected lotus seeds are roasted to create a light, crispy snack that satisfies your cravings without the guilt.',

    highlights: [
      'High in protein',
      'Gluten-free',
      'Rich in antioxidants',
      'Roasted, not fried',
      'Low in calories',
    ],

    nutrition: {
      energy: '347 kcal',
      protein: '9.7 g',
      carbs: '76 g',
      fiber: '14 g',
      fat: '0.5 g',
    },

    ingredients: [
      'Makhana (Fox Nuts)',
      'Sunflower Oil',
      'Natural Seasoning',
      'Salt',
      'Spices',
    ],

    storage: 'Store in a cool and dry place.',

    badge: 'No artificial preservatives or added colors',

    images: [s3, s2],

    tags: ['healthy', 'snack', 'roasted'],
    isFeatured: true,
  },

  {
    id: 'jowar-100g-pack1',
    name: '100GM Jowar Puffs - Pack of 1',
    category: 'jowar',

    pricing: {
      price: 180,
      originalPrice: 250,
      discount: 28,
    },

    tagline:
      'Light, crunchy and made from wholesome jowar. A perfect anytime snack.',

    description:
      'Crafted from nutrient-rich jowar, these puffs are airy, crispy, and incredibly satisfying. A healthier alternative to fried snacks.',

    highlights: ['Gluten-free', 'High fiber', 'Light & crunchy', 'Low fat'],

    nutrition: {
      energy: '320 kcal',
      protein: '8 g',
      carbs: '70 g',
      fiber: '12 g',
      fat: '2 g',
    },

    ingredients: ['Jowar (Sorghum)', 'Natural Seasoning', 'Salt'],

    storage: 'Store in a cool and dry place.',

    badge: 'No added preservatives',

    images: [s3, s4],

    tags: ['light', 'healthy'],
    isFeatured: false,
  },

  {
    id: 'protein-500g-pack',
    name: 'Clean Protein Powder - 500GM',
    category: 'protein',

    pricing: {
      price: 1200,
      originalPrice: 1500,
      discount: 20,
    },

    tagline:
      'Plant-based protein with zero compromise. Clean fuel for your body.',

    description:
      'Our clean protein powder is crafted for fitness enthusiasts who value purity and performance. No additives, no fillers — just clean nutrition.',

    highlights: [
      'Plant-based',
      'No additives',
      'High protein',
      'Easy digestion',
    ],

    nutrition: {
      energy: '400 kcal',
      protein: '24 g',
      carbs: '10 g',
      fiber: '5 g',
      fat: '3 g',
    },

    ingredients: ['Plant Protein Blend', 'Natural Flavoring'],

    storage: 'Store in a cool, dry place away from sunlight.',

    badge: 'No artificial flavors',

    images: [s1, s4],

    tags: ['fitness', 'protein'],
    isFeatured: true,
  },
  {
    id: 'makhana-100g-pack1',
    name: '100GM Makhana Package - Pack of 1',
    category: 'makhana',

    pricing: {
      price: 200,
      originalPrice: 300,
      discount: 33, // optional but useful
    },

    tagline:
      'Roasted to perfection, seasoned with love. Your guilt-free snacking companion.',

    description:
      'Enjoy the perfect balance of taste and nutrition with our premium roasted makhana. Carefully selected lotus seeds are roasted to create a light, crispy snack that satisfies your cravings without the guilt.',

    highlights: [
      'High in protein',
      'Gluten-free',
      'Rich in antioxidants',
      'Roasted, not fried',
      'Low in calories',
    ],

    nutrition: {
      energy: '347 kcal',
      protein: '9.7 g',
      carbs: '76 g',
      fiber: '14 g',
      fat: '0.5 g',
    },

    ingredients: [
      'Makhana (Fox Nuts)',
      'Sunflower Oil',
      'Natural Seasoning',
      'Salt',
      'Spices',
    ],

    storage: 'Store in a cool and dry place.',

    badge: 'No artificial preservatives or added colors',

    images: [s1, s2],

    tags: ['healthy', 'snack', 'roasted'],
    isFeatured: true,
  },

  {
    id: 'jowar-100g-pack1',
    name: '100GM Jowar Puffs - Pack of 1',
    category: 'jowar',

    pricing: {
      price: 180,
      originalPrice: 250,
      discount: 28,
    },

    tagline:
      'Light, crunchy and made from wholesome jowar. A perfect anytime snack.',

    description:
      'Crafted from nutrient-rich jowar, these puffs are airy, crispy, and incredibly satisfying. A healthier alternative to fried snacks.',

    highlights: ['Gluten-free', 'High fiber', 'Light & crunchy', 'Low fat'],

    nutrition: {
      energy: '320 kcal',
      protein: '8 g',
      carbs: '70 g',
      fiber: '12 g',
      fat: '2 g',
    },

    ingredients: ['Jowar (Sorghum)', 'Natural Seasoning', 'Salt'],

    storage: 'Store in a cool and dry place.',

    badge: 'No added preservatives',

    images: [s3, s4],

    tags: ['light', 'healthy'],
    isFeatured: false,
  },

  {
    id: 'protein-500g-pack',
    name: 'Clean Protein Powder - 500GM',
    category: 'protein',

    pricing: {
      price: 1200,
      originalPrice: 1500,
      discount: 20,
    },

    tagline:
      'Plant-based protein with zero compromise. Clean fuel for your body.',

    description:
      'Our clean protein powder is crafted for fitness enthusiasts who value purity and performance. No additives, no fillers — just clean nutrition.',

    highlights: [
      'Plant-based',
      'No additives',
      'High protein',
      'Easy digestion',
    ],

    nutrition: {
      energy: '400 kcal',
      protein: '24 g',
      carbs: '10 g',
      fiber: '5 g',
      fat: '3 g',
    },

    ingredients: ['Plant Protein Blend', 'Natural Flavoring'],

    storage: 'Store in a cool, dry place away from sunlight.',

    badge: 'No artificial flavors',

    images: [s1, s4],

    tags: ['fitness', 'protein'],
    isFeatured: true,
  },
  {
    id: 'makhana-100g-pack1',
    name: '100GM Makhana Package - Pack of 1',
    category: 'makhana',

    pricing: {
      price: 200,
      originalPrice: 300,
      discount: 33, // optional but useful
    },

    tagline:
      'Roasted to perfection, seasoned with love. Your guilt-free snacking companion.',

    description:
      'Enjoy the perfect balance of taste and nutrition with our premium roasted makhana. Carefully selected lotus seeds are roasted to create a light, crispy snack that satisfies your cravings without the guilt.',

    highlights: [
      'High in protein',
      'Gluten-free',
      'Rich in antioxidants',
      'Roasted, not fried',
      'Low in calories',
    ],

    nutrition: {
      energy: '347 kcal',
      protein: '9.7 g',
      carbs: '76 g',
      fiber: '14 g',
      fat: '0.5 g',
    },

    ingredients: [
      'Makhana (Fox Nuts)',
      'Sunflower Oil',
      'Natural Seasoning',
      'Salt',
      'Spices',
    ],

    storage: 'Store in a cool and dry place.',

    badge: 'No artificial preservatives or added colors',

    images: [s1, s2],

    tags: ['healthy', 'snack', 'roasted'],
    isFeatured: true,
  },

  {
    id: 'jowar-100g-pack1',
    name: '100GM Jowar Puffs - Pack of 1',
    category: 'jowar',

    pricing: {
      price: 180,
      originalPrice: 250,
      discount: 28,
    },

    tagline:
      'Light, crunchy and made from wholesome jowar. A perfect anytime snack.',

    description:
      'Crafted from nutrient-rich jowar, these puffs are airy, crispy, and incredibly satisfying. A healthier alternative to fried snacks.',

    highlights: ['Gluten-free', 'High fiber', 'Light & crunchy', 'Low fat'],

    nutrition: {
      energy: '320 kcal',
      protein: '8 g',
      carbs: '70 g',
      fiber: '12 g',
      fat: '2 g',
    },

    ingredients: ['Jowar (Sorghum)', 'Natural Seasoning', 'Salt'],

    storage: 'Store in a cool and dry place.',

    badge: 'No added preservatives',

    images: [s1, s4],

    tags: ['light', 'healthy'],
    isFeatured: false,
  },

  {
    id: 'protein-500g-pack',
    name: 'Clean Protein Powder - 500GM',
    category: 'protein',

    pricing: {
      price: 1200,
      originalPrice: 1500,
      discount: 20,
    },

    tagline:
      'Plant-based protein with zero compromise. Clean fuel for your body.',

    description:
      'Our clean protein powder is crafted for fitness enthusiasts who value purity and performance. No additives, no fillers — just clean nutrition.',

    highlights: [
      'Plant-based',
      'No additives',
      'High protein',
      'Easy digestion',
    ],

    nutrition: {
      energy: '400 kcal',
      protein: '24 g',
      carbs: '10 g',
      fiber: '5 g',
      fat: '3 g',
    },

    ingredients: ['Plant Protein Blend', 'Natural Flavoring'],

    storage: 'Store in a cool, dry place away from sunlight.',

    badge: 'No artificial flavors',

    images: [s1, s4],

    tags: ['fitness', 'protein'],
    isFeatured: true,
  },
  {
    id: 'makhana-100g-pack1',
    name: '100GM Makhana Package - Pack of 1',
    category: 'makhana',

    pricing: {
      price: 200,
      originalPrice: 300,
      discount: 33, // optional but useful
    },

    tagline:
      'Roasted to perfection, seasoned with love. Your guilt-free snacking companion.',

    description:
      'Enjoy the perfect balance of taste and nutrition with our premium roasted makhana. Carefully selected lotus seeds are roasted to create a light, crispy snack that satisfies your cravings without the guilt.',

    highlights: [
      'High in protein',
      'Gluten-free',
      'Rich in antioxidants',
      'Roasted, not fried',
      'Low in calories',
    ],

    nutrition: {
      energy: '347 kcal',
      protein: '9.7 g',
      carbs: '76 g',
      fiber: '14 g',
      fat: '0.5 g',
    },

    ingredients: [
      'Makhana (Fox Nuts)',
      'Sunflower Oil',
      'Natural Seasoning',
      'Salt',
      'Spices',
    ],

    storage: 'Store in a cool and dry place.',

    badge: 'No artificial preservatives or added colors',

    images: [s2, s2],

    tags: ['healthy', 'snack', 'roasted'],
    isFeatured: true,
  },

  {
    id: 'jowar-100g-pack1',
    name: '100GM Jowar Puffs - Pack of 1',
    category: 'jowar',

    pricing: {
      price: 180,
      originalPrice: 250,
      discount: 28,
    },

    tagline:
      'Light, crunchy and made from wholesome jowar. A perfect anytime snack.',

    description:
      'Crafted from nutrient-rich jowar, these puffs are airy, crispy, and incredibly satisfying. A healthier alternative to fried snacks.',

    highlights: ['Gluten-free', 'High fiber', 'Light & crunchy', 'Low fat'],

    nutrition: {
      energy: '320 kcal',
      protein: '8 g',
      carbs: '70 g',
      fiber: '12 g',
      fat: '2 g',
    },

    ingredients: ['Jowar (Sorghum)', 'Natural Seasoning', 'Salt'],

    storage: 'Store in a cool and dry place.',

    badge: 'No added preservatives',

    images: [s3, s4],

    tags: ['light', 'healthy'],
    isFeatured: false,
  },

  {
    id: 'protein-500g-pack',
    name: 'Clean Protein Powder - 500GM',
    category: 'protein',

    pricing: {
      price: 1200,
      originalPrice: 1500,
      discount: 20,
    },

    tagline:
      'Plant-based protein with zero compromise. Clean fuel for your body.',

    description:
      'Our clean protein powder is crafted for fitness enthusiasts who value purity and performance. No additives, no fillers — just clean nutrition.',

    highlights: [
      'Plant-based',
      'No additives',
      'High protein',
      'Easy digestion',
    ],

    nutrition: {
      energy: '400 kcal',
      protein: '24 g',
      carbs: '10 g',
      fiber: '5 g',
      fat: '3 g',
    },

    ingredients: ['Plant Protein Blend', 'Natural Flavoring'],

    storage: 'Store in a cool, dry place away from sunlight.',

    badge: 'No artificial flavors',

    images: [s2, s4],

    tags: ['fitness', 'protein'],
    isFeatured: true,
  },
];
