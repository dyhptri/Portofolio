export interface MilaProject {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  summary: string;
  deliverables: string[];
  accentColor: string;
  badgeBg: string;
  tagline: string;
  aspect: string;
  sketchNote: string;
}

export interface MilaService {
  id: string;
  title: string;
  description: string;
  timeline: string;
  price: string;
  features: string[];
  accentColor: string;
  tapeColor: 'lilac' | 'mint' | 'yellow';
}

export interface MilaPriceTier {
  id: string;
  name: string;
  price: string;
  scope: string;
  summary: string;
  timeline: string;
  features: string[];
  ctaText: string;
  popular?: boolean;
  accentColor: string;
}

export interface MilaExperience {
  period: string;
  role: string;
  company: string;
  description: string;
  tag: string;
}

export interface MilaJournalPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  note: string;
}

export interface MilaFAQ {
  question: string;
  answer: string;
}

export const milaProjects: MilaProject[] = [
  {
    id: 'pingo-characters',
    title: 'Pingo Mascot & Motion Loops',
    category: 'Character design & motion',
    year: '2024',
    client: 'Pingo App',
    summary: 'A set of expressive animal characters and 30+ tiny frame-by-frame loops for an international messaging platform used by millions.',
    deliverables: ['Full character turnaround sheet', '24 hand-drawn sticker loops', 'Onboarding animation pack'],
    accentColor: '#F6C945',
    badgeBg: '#FBE9A6',
    tagline: 'mascots, expressions and little loops',
    aspect: '4/3',
    sketchNote: 'frame by frame in Procreate, 12fps magic!'
  },
  {
    id: 'atlantic-review',
    title: 'The Atlantic Review Cover & Spots',
    category: 'Editorial illustration',
    year: '2024',
    client: 'Late Edition Press',
    summary: 'Full-cover spot and double-page spread illustrating the silent revival of artisan sourdough bakeries across coastal Portugal.',
    deliverables: ['Print magazine cover CMYK', 'Double-page editorial spread', '4 spot vignettes for web'],
    accentColor: '#F07A3C',
    badgeBg: '#FBE9A6',
    tagline: 'magazines, editorial spots',
    aspect: '4/3',
    sketchNote: 'warm gouache textures + scanned pencil'
  },
  {
    id: 'rua-das-flores',
    title: 'Rua das Flores Community Mural',
    category: 'Murals and prints',
    year: '2025',
    client: 'Lisbon Cultural Guild',
    summary: 'An 18-metre outdoor gouache and weatherproof acrylic mural celebrating community flora, neighbourhood cats, and local market sellers.',
    deliverables: ['18-meter wall layout & scaffolding', 'Weatherproof sealant finish', 'Archival riso mini-prints'],
    accentColor: '#35B47C',
    badgeBg: '#CDEBDD',
    tagline: 'shops, outdoor walls',
    aspect: '4/3',
    sketchNote: '2 weeks on a ladder with too much pastel de nata'
  },
  {
    id: 'botanica-riso',
    title: 'Botanica Greenhouse Riso Series',
    category: 'Risograph prints',
    year: '2025',
    client: 'Self-published edition',
    summary: '3-colour limited risograph run on heavyweight warm white paper exploring tropical greenhouse plants in Lisbon botanic gardens.',
    deliverables: ['150 signed and numbered editions', 'Fluorescent pink & sunflower yellow inks', 'Custom packaging stamps'],
    accentColor: '#F2679B',
    badgeBg: '#D9DCF7',
    tagline: 'limited riso editions',
    aspect: '4/3',
    sketchNote: 'printed at 300dpi, imperfect on purpose'
  }
];

export const milaServices: MilaService[] = [
  {
    id: 'character-design',
    title: 'Character design',
    description: 'Mascots, expressions and style sheets that survive the app, the van and the t-shirt.',
    timeline: '2 to 4 weeks',
    price: 'from €2,500',
    features: [
      'Character sheet and turnarounds',
      'Six expressions and poses',
      'Usage notes for your team'
    ],
    accentColor: '#F6C945',
    tapeColor: 'yellow'
  },
  {
    id: 'editorial-illustration',
    title: 'Editorial illustration',
    description: 'Spot illustrations and full spreads for magazines, books and the odd annual report.',
    timeline: '1 to 2 weeks',
    price: 'from €400',
    features: [
      'Rough sketches within 3 days',
      'Final art in print and web sizes',
      'Spot, half page or full spread'
    ],
    accentColor: '#F07A3C',
    tapeColor: 'mint'
  },
  {
    id: 'motion-loops',
    title: 'Motion loops',
    description: 'Stickers, reaction GIFs and short loops, drawn frame by frame and exported for every platform.',
    timeline: '2 to 3 weeks',
    price: 'from €900',
    features: [
      'Frame by frame hand drawn loops',
      'GIF, MP4, Lottie and sticker formats',
      'Sound friendly timing for social'
    ],
    accentColor: '#F2679B',
    tapeColor: 'lilac'
  },
  {
    id: 'murals-prints',
    title: 'Murals and prints',
    description: 'Walls, windows and riso prints. I bring the ladder, you bring the coffee.',
    timeline: 'on site',
    price: 'from €6,000',
    features: [
      'Site visit and wall sketch',
      'Paint, ladders and sealing included',
      'Small riso print runs on request'
    ],
    accentColor: '#35B47C',
    tapeColor: 'yellow'
  }
];

export const milaPrices: MilaPriceTier[] = [
  {
    id: 'spot',
    name: 'Spot',
    price: 'from €400',
    scope: 'one illustration, any size',
    summary: 'Great for a single article, cover, poster or a one off gift.',
    timeline: 'ready in 1 to 2 weeks',
    features: [
      'Three rough directions',
      'Two rounds of tweaks',
      'Files in every format',
      'Print and web files',
      'Commercial licence included'
    ],
    ctaText: 'Book a spot',
    accentColor: '#F07A3C'
  },
  {
    id: 'character',
    name: 'Character',
    price: 'from €2,500',
    scope: 'mascot, expressions, style sheet',
    summary: 'For brands that need a face: apps, packaging, merch and social.',
    timeline: 'ready in 3 to 4 weeks',
    features: [
      'Full character sheet & turnarounds',
      'Six expressions and poses',
      'Usage guide for your team',
      'Source files and brushes',
      'Two months of small tweaks'
    ],
    ctaText: 'Start a character',
    popular: true,
    accentColor: '#F6C945'
  },
  {
    id: 'wall',
    name: 'Wall',
    price: 'from €6,000',
    scope: 'murals up to 20 metres',
    summary: 'Shops, cafes, schools and offices. Indoor or outdoor walls.',
    timeline: '1 to 2 weeks on site',
    features: [
      'Site visit and sketches',
      'Paint and ladder included',
      'Two weeks on site',
      'Anti graffiti sealing',
      'Photo shoot of the finished wall'
    ],
    ctaText: 'Plan a wall',
    accentColor: '#35B47C'
  }
];

export const milaExperiences: MilaExperience[] = [
  {
    period: '2022 to now',
    role: 'Independent illustrator',
    company: 'Mila Studio, Lisbon',
    description: 'Characters, editorial spots and murals for brands, magazines and one very patient grocery.',
    tag: 'Independent'
  },
  {
    period: '2019 to 2022',
    role: 'Illustrator and motion designer',
    company: 'Pingo',
    description: 'Sticker packs, onboarding art and hundreds of tiny loops for a messaging app.',
    tag: 'Tech Studio'
  },
  {
    period: '2017 to 2019',
    role: 'Junior designer',
    company: 'Late Edition magazine',
    description: 'Spot illustrations, layouts and far too many cover sketches that never ran.',
    tag: 'Editorial'
  },
  {
    period: '2013 to 2016',
    role: 'Painting degree',
    company: 'Faculty of Fine Arts, Lisbon',
    description: 'Where the gouache habit started and the tidy desk ended.',
    tag: 'Education'
  }
];

export const milaJournalPosts: MilaJournalPost[] = [
  {
    id: 'gouache-palette',
    title: 'My favourite gouache palette for outdoor walls',
    date: 'October 2026',
    category: 'Tools & materials',
    readTime: '5 min read',
    summary: 'The seven tubes I pack in my bicycle basket whenever an exterior stucco wall needs loud summer colour.',
    note: 'tested under real Lisbon sunlight'
  },
  {
    id: '12-fps-warmth',
    title: 'Why 12 frames per second still feels the warmest',
    date: 'August 2026',
    category: 'Motion & animation',
    readTime: '4 min read',
    summary: 'Why smoother isn’t always better. The charm of little hand-drawn character hiccups on social feeds.',
    note: 'on twos, always'
  },
  {
    id: 'mural-diary',
    title: 'Painting an 18-meter wall in 38°C Lisbon heat',
    date: 'June 2026',
    category: 'Mural diary',
    readTime: '7 min read',
    summary: 'A photo diary from Rua das Flores: hydration strategies, cats that sat on my wet paint, and ladder acrobatics.',
    note: 'scaffolding memories'
  }
];

export const milaClients = [
  'Figma',
  'Notion',
  'Spotify',
  'Airbnb',
  'Nike',
  'Canva'
];

export const milaSkills = [
  { num: '01', title: 'Editorial illustration', subtitle: 'magazines, books' },
  { num: '02', title: 'Character design', subtitle: 'mascots, apps' },
  { num: '03', title: 'Motion loops', subtitle: 'social, ads' },
  { num: '04', title: 'Murals and prints', subtitle: 'shops, homes' }
];

export const milaToolsStickers = [
  { label: 'Procreate', color: '#F6C945', rot: '-2deg' },
  { label: 'Gouache', color: '#F2679B', rot: '3deg' },
  { label: 'After Effects', color: '#D9DCF7', rot: '-1.5deg' },
  { label: 'Risograph', color: '#CDEBDD', rot: '2.5deg' }
];

export const milaHeroStickers = [
  { label: 'Illustrator', color: '#F6C945', rot: '-3deg' },
  { label: 'Lisbon, Portugal', color: '#F2679B', rot: '2deg' },
  { label: 'Editorial illustration', color: '#CDEBDD', rot: '-2deg' },
  { label: 'Character design', color: '#FBE9A6', rot: '3deg' },
  { label: 'Motion loops', color: '#D9DCF7', rot: '-1.5deg' },
  { label: 'Book covers', color: '#F07A3C', rot: '2.5deg' },
  { label: 'Murals and prints', color: '#35B47C', rot: '-3deg' },
  { label: 'Risograph', color: '#F2679B', rot: '1.5deg' }
];

export const milaFaqs: MilaFAQ[] = [
  {
    question: 'Do you take commissions?',
    answer: 'Yes. Portraits, pets, wedding invites and the occasional tattoo. Send a note with what you have in mind and I will tell you if it is a fit.'
  },
  {
    question: 'How much does a project cost?',
    answer: 'Spot illustrations start around 400 euros, characters and brand work from 2,500. I always send a fixed quote before starting, no surprises.'
  },
  {
    question: 'Do you do animation too?',
    answer: 'Short loops and stickers, yes. Full films, no, but I know people who do and I am happy to introduce you.'
  },
  {
    question: 'Can I buy prints?',
    answer: 'A small run of riso prints drops every few months. Follow me on Instagram to catch the next one, they go fast.'
  }
];

