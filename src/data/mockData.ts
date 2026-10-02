import type { 
  VehicleTypeOption, 
  ServicePackage, 
  AddOnItem, 
  BeforeAfterProject, 
  CustomerReview 
} from '../types';

export const COMPANY_INFO = {
  name: 'ShineCraft Auto Detailing',
  tagline: "Houston's Independent Paint Correction & Ceramic Studio",
  founder: 'Marcus Vance (Master Detailer & Shop Owner)',
  experience: '14 Years Perfecting Houston Clear Coats',
  phone: '(713) 555-0148',
  phoneClean: '7135550148',
  email: 'info@shinecraftdetailing.com',
  address: '4820 Washington Ave, Houston, TX 77007',
  landmarks: 'Located on the Washington Corridor, 2 minutes off I-10 & Heights Blvd',
  serviceAreas: [
    'River Oaks',
    'The Heights',
    'Memorial & Memorial Villages',
    'Galleria / Uptown',
    'Montrose & Midtown',
    'Downtown Houston',
    'Energy Corridor',
    'Sugar Land & Bellaire'
  ],
  hours: {
    weekdays: '7:30 AM to 6:30 PM',
    saturday: '8:00 AM to 5:00 PM',
    sunday: 'Closed for Private Studio Curing'
  },
  stats: [
    { label: 'Vehicles Detailed in Houston', value: '3,840+' },
    { label: 'Verified Google Rating', value: '4.9 ★ (320+ Reviews)' },
    { label: 'IDA Certified Detailers on Staff', value: '3 Master Techs' },
    { label: 'Warranty Ceramic Shield Records', value: '1,200+ Issued' }
  ]
};

export const VEHICLE_TYPES: VehicleTypeOption[] = [
  {
    id: 'sedan',
    name: 'Coupe / Sedan',
    tagline: 'Standard 2 to 4 door cars',
    priceMultiplier: 1.0,
    popularModels: 'Porsche 911, BMW 3/4 Series, Tesla Model 3/S, Civic'
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Crossover',
    tagline: 'Compact & 2-row SUVs',
    priceMultiplier: 1.2,
    popularModels: 'Porsche Macan, BMW X3/X5, Lexus RX, Tesla Model Y'
  },
  {
    id: 'truck',
    name: 'Full SUV / Truck / Van',
    tagline: '3-row SUVs & full-size pickups',
    priceMultiplier: 1.35,
    popularModels: 'Ford F-150, Escalade, Range Rover, Tahoe, Rivian R1T'
  },
  {
    id: 'exotic',
    name: 'Exotic & Supercar',
    tagline: 'Specialty care & delicate finishes',
    priceMultiplier: 1.5,
    popularModels: 'Ferrari, Lamborghini, McLaren, Aston Martin, GT3 RS'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'essential-refresh',
    name: 'Essential Precision Wash',
    category: 'exterior',
    tagline: 'Safe two-bucket decontamination wash for regular maintenance',
    description: 'A scratch-free exterior and tidy interior touch-up engineered to preserve your vehicle between deeper detailing sessions.',
    startingPrice: 140,
    estimatedTime: '2 to 2.5 Hours',
    features: [
      'Gentle pH-neutral snow foam bath & two-bucket hand wash',
      'Wheel barrels, face & brake caliper de-ironizing cleanse',
      'Tire conditioning with satin sling-free UV dress',
      'Streak-free interior and exterior optical glass cleaning',
      'Cockpit vacuuming including trunk area',
      'Dashboard & console wipe down with anti-static satin protectant',
      'Spray gloss sealant application (up to 4 weeks protection)'
    ],
    perfectFor: 'Routine monthly vehicle upkeep for clean daily drivers.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'signature-detail',
    name: 'Signature Complete Detail',
    category: 'full-detail',
    tagline: 'Our most requested bumper-to-bumper deep restoration',
    description: 'Deep therapeutic clean inside out. Clay bar decontamination smooths the paint, followed by full steam extraction and leather conditioning.',
    startingPrice: 285,
    estimatedTime: '4 to 5 Hours',
    badge: 'Most Popular',
    isPopular: true,
    features: [
      'Everything in Essential Wash plus full iron & tar chemical decon',
      'Fine-grade clay bar treatment over entire painted surface',
      'Single-stage machine gloss enhancement (removes minor hazing)',
      '6-Month hydrophobic synthetic ceramic sealant coat',
      'Deep hot-water steam extraction of floor mats and carpeting',
      'Deep leather cleanse & nourishing natural matte balm conditioning',
      'Vents, crevices & cup holders steam sanitized and detailed',
      'Door jambs, trunk seals and fuel door cleansed & sealed'
    ],
    perfectFor: 'Cars needing a serious reset or pre-sale showroom shine.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ceramic-shield',
    name: 'Precision Paint Correction & Ceramic',
    category: 'ceramic-protection',
    tagline: 'Multi-stage paint correction with guaranteed 9H ceramic barrier',
    description: 'Bring back genuine showroom gloss. We remove swirl marks, haze, and surface scratches before applying a durable 9H ceramic coating.',
    startingPrice: 695,
    estimatedTime: '1 to 2 Days (Curing Included)',
    badge: 'Flagship Service',
    features: [
      'Complete multi-step paint depth gauge readings & inspection',
      'Two-stage compound & jeweled rotary polish to remove 90%+ defect swirls',
      'Full IPA (alcohol) wipe-down to ensure zero polish residue',
      'Application of Professional 9H Ceramic Coating (3 or 5-Year Warranty)',
      'Extreme hydrophobic water-beading effect & Houston UV shield',
      'Wheel faces ceramic coated against baked-on brake dust',
      'Windshield rain-repellant ceramic barrier applied',
      'Complete interior mini-detail included with vehicle handover report'
    ],
    perfectFor: 'New vehicle protection, dark-colored cars, and enthusiast vehicles.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    imagePosition: 'center 68%'
  },
  {
    id: 'interior-concierge',
    name: 'Interior Pure Restorative Studio',
    category: 'interior',
    tagline: 'Sterilized, allergen-free cockpit restoration',
    description: 'A comprehensive interior deep clean that removes stubborn stains, pet hair, trapped odors, and ground in dirt.',
    startingPrice: 220,
    estimatedTime: '3 to 4 Hours',
    features: [
      'High-pressure compressed air purge of deep carpet fibers',
      'Commercial hot-water extraction on all fabric seats & floor carpets',
      'Multi-step leather cleaning with pH-balanced foam brushes',
      'Matte leather ceramic guard against dye transfer and UV fading',
      'Alcantara & suede fabric gentle preservation treatment',
      'Hospital-grade ozone air purification treatment (odor neutralizer)',
      'AC vents steam treatment to kill mildew and bacteria spores'
    ],
    perfectFor: 'Family vehicles, pet owners, and cars with stubborn odors or spills.',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80'
  }
];

export const ADD_ON_SERVICES: AddOnItem[] = [
  {
    id: 'engine-bay',
    name: 'Engine Bay Precision Clean & Dressing',
    price: 65,
    duration: '45 mins',
    description: 'Safe dry-steam cleaning of bay grime, degreasing, and OEM satin heat-resistant dressing.'
  },
  {
    id: 'headlight-restoration',
    name: 'Oxidized Headlight Lens Restoration',
    price: 85,
    duration: '1 hour',
    description: 'Wet-sanding of foggy yellow lenses, 2-stage polish, and 2-year UV clear-coat sealant.'
  },
  {
    id: 'glass-ceramic',
    name: 'Full Windshield & Glass Ceramic Repellant',
    price: 95,
    duration: '45 mins',
    description: 'Glass polish to remove water spots, followed by ultra-slick hydrophobic ceramic coating.'
  },
  {
    id: 'pet-hair-extraction',
    name: 'Intensive Pet Hair & Sand Elimination',
    price: 60,
    duration: '1 hour',
    description: 'Specialty rubber-blade and pumice-stone extraction for heavily embedded animal hair.'
  }
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: 'proj-1',
    title: 'Porsche 911 GT3 50/50 Paint Correction',
    vehicle: '2023 Porsche 911 (992) GT3',
    category: 'Paint Correction',
    beforeImage: '/images/paint_correction_5050.jpg',
    afterImage: '/images/paint_correction_5050.jpg',
    fullComparisonImage: '/images/paint_correction_5050.jpg',
    beforeLabel: 'Heavy Circular Swirls',
    afterLabel: 'Flawless Mirror Gloss',
    problem: 'Heavy swirl marks and dull clear coat caused by automatic car washes and improper drying towels.',
    solution: 'Two-stage machine polish to safely level out surface defects, finished with 9H ceramic coating for deep mirror gloss.',
    packageUsed: 'Precision Paint Correction & Ceramic',
    completionHours: '16 Hours',
    beforeDefects: [
      'Heavy swirl marks from tunnel washes',
      'Faded clear coat on hood and doors',
      'Micro-scratches visible under sunlight'
    ],
    afterResults: [
      'Clean mirror finish with zero haze',
      'Deep wet-look paint depth',
      'Durable multi-year ceramic protection'
    ]
  },
  {
    id: 'proj-2',
    title: 'Range Rover SV Full Vehicle Transformation',
    vehicle: '2022 Range Rover SV Autobiography',
    category: 'Ceramic Coating',
    beforeImage: '/images/range_rover_before_after.jpg',
    afterImage: '/images/range_rover_before_after.jpg',
    fullComparisonImage: '/images/range_rover_before_after.jpg',
    beforeLabel: 'Road Grime & Dried Mud',
    afterLabel: 'Showroom Ceramic Shine',
    problem: 'Heavy road grime, severe brake dust baked into the wheel barrels, and hard water spot stains from Texas rain.',
    solution: 'Full decontamination wash, single-stage gloss enhancement polish, and a 5-year ceramic coating on paint and wheels.',
    packageUsed: 'Signature Detail & Flagship Ceramic Shield',
    completionHours: '14 Hours',
    beforeDefects: [
      'Dried mud and highway road film',
      'Brake dust baked onto wheel barrels',
      'Dull faded paint and oxidized trim'
    ],
    afterResults: [
      'Deep jet-black reflection',
      'Ceramic wheel protection against brake dust',
      'Clean satin finish on all exterior trim'
    ]
  },
  {
    id: 'proj-3',
    title: 'Mercedes-Benz Cockpit Leather & Steam Restoration',
    vehicle: 'Mercedes-Benz Executive Cockpit',
    category: 'Interior Restoration',
    beforeImage: '/images/interior_5050_matched.jpg',
    afterImage: '/images/interior_5050_matched.jpg',
    fullComparisonImage: '/images/interior_5050_matched.jpg',
    beforeLabel: 'Sun-Faded & Dusty Cockpit',
    afterLabel: 'Deep Steamed Matte OEM Finish',
    problem: 'Heavy dust inside air vents, oily steering wheel residue, and dry sun-faded leather across the dashboard.',
    solution: 'High-pressure air purge, hot steam vent sanitization, and gentle leather conditioning to restore the original matte finish.',
    packageUsed: 'Interior Pure Restorative Studio',
    completionHours: '4.5 Hours',
    beforeDefects: [
      'Dust and allergen buildup in vents',
      'Sticky steering wheel and console residue',
      'Sun-faded dry leather dashboard'
    ],
    afterResults: [
      'Soft factory matte finish restored',
      'Steam sanitized vents and clean interior air',
      'Gentle UV protection against Texas heat'
    ]
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Marcus Vance',
    neighborhood: 'River Oaks, Houston',
    vehicle: '2023 Porsche Taycan Turbo S',
    rating: 5,
    date: '3 weeks ago',
    review: 'Had ShineCraft perform their multi-stage paint correction and ceramic coating. In the harsh Houston sun, dark paint exposes everything. When I picked up the car, the paint looked deeper and wetter than when it rolled out of the dealership showroom. Pure craftsmanship.',
    service: 'Paint Correction & Ceramic Shield',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    neighborhood: 'The Heights, Houston',
    vehicle: '2022 Land Rover Defender 110',
    rating: 5,
    date: '1 month ago',
    review: 'Between weekend beach trips to Galveston and two Golden Retrievers, my Defender’s interior was in rough shape. The ShineCraft team spent 5 hours on it. Every trace of pet hair and sand is gone, and the leather feels supple again without any chemical perfume odor.',
    service: 'Signature Complete Detail',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'rev-3',
    name: 'David Chen',
    neighborhood: 'Memorial, Houston',
    vehicle: '2024 Corvette Z06',
    rating: 5,
    date: '2 months ago',
    review: 'I am meticulous with who touches my cars. The owner walked me through paint depth measurements before touching a single polisher. The transparency, care, and attention to detail in their facility is second to none in Texas. Highly recommended.',
    service: 'Ceramic Coating & Front Glass Shield',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How long does a full ceramic coating last in Houston weather?',
    answer: 'With proper periodic maintenance washes, our professional 9H ceramic coatings last 3 to 5 years depending on the package chosen. They provide critical UV resistance against intense Texas sun, prevent clear-coat oxidation, and shield against hard water etching.'
  },
  {
    question: 'What is the difference between a normal car wash and Paint Correction?',
    answer: 'A normal car wash only cleans surface grime (and often introduces circular swirl scratches). Paint correction uses professional machine polishers and microscopic diminishing abrasives to level clear-coat imperfections, removing 85-95% of swirl marks, scratches, and oxidation.'
  },
  {
    question: 'Do you offer mobile detailing or must I bring the car to your studio?',
    answer: 'We provide both! For maintenance washes and interior details, our self-contained mobile detailing van can visit your home or office in Houston. For multi-stage paint correction and ceramic coatings, we recommend our climate-controlled Washington Ave studio for optimal dust-free curing.'
  },
  {
    question: 'How do I maintain my ceramic coating after application?',
    answer: 'We supply each client with a comprehensive care guide and pH-neutral maintenance wash soap. We also offer monthly maintenance washes to keep the hydrophobic coating operating at peak water-beading performance.'
  }
];
