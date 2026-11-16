export const PROJECT_492 = {
  path: "/residences/492-wainscott-harbor-road",
  address: "492 Wainscott Harbor Road",
  locality: "Sagaponack, New York 11962",
  coords: { lat: 40.956839, lng: -72.272309, dms: "N 40°57′25″ · W 72°16′20″" },
  status: "In contract",
  listPrice: "$8,995,000",
  sqft: "11,754",
  acres: "2.09",
  bedrooms: 8,
  baths: { full: 8, half: 3 },
  pool: "Heated 20′ × 45′ gunite pool & spa",
  completion: "2026",
  listing: {
    url: "https://www.hamptonsrealestate.com/eng/sales/detail/524-l-526-933911/492-wainscott-harbor-road-sagaponack-ny-11962",
    brokerage: "Saunders & Associates",
    agent: "Vincent Horcasitas, Associate Real Estate Broker",
    phone: "(516) 768-7330",
    webId: "933911",
    mls: "397059",
  },
  levels: {
    upper: { code: "SECTION · UPPER LEVEL", title: "The suites", lede: "Private quarters above the living floor. Every bedroom in the house is a suite with its own bath.", items: ["En-suite bedrooms: eight across the house in total", "A bath for every bedroom, no shared halls", "[SUITE-BY-SUITE DETAIL — CONFIRM WITH BUILDER]"] },
    main: { code: "SECTION · MAIN LEVEL", title: "Living", lede: "The entertaining floor, scaled for a full house in August and a quiet one in November.", items: ["Dramatic great room", "Formal living and dining rooms", "Open chef’s kitchen with breakfast area", "Private office", "Multiple fireplaces"] },
    lower: { code: "SECTION · LOWER LEVEL", title: "Wellness", lede: "A finished level below grade given over to play, training and overflow guests.", items: ["Media lounge", "Fitness center", "Game room", "Additional guest accommodations"] },
    grounds: { code: "PLAN · 2.09 ACRES", title: "The grounds", lede: "Multiple entertaining areas on a private flag lot, with real separation from the neighbors.", items: ["Heated 20′ × 45′ gunite pool with spa", "Pool house and sauna", "Full-size tennis court", "Expansive bluestone patios", "Landscaped grounds"] },
  },
} as const;

export type LevelKey = keyof typeof PROJECT_492.levels;
