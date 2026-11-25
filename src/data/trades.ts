export interface LineItem {
  id: string;
  description: string;
  quantity: number;
  unit: string;
  rate: number;
}

export interface PricingBenchmark {
  service: string;
  lowRate: number;
  avgRate: number;
  highRate: number;
  unit: string;
  notes?: string;
}

export interface BiddingStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface TradeFAQ {
  question: string;
  answer: string;
}

export interface TradeConfig {
  slug: string;
  tradeName: string;
  h1: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  category: string;
  shortDescription: string;
  defaultLineItems: LineItem[];
  defaultTerms: string;
  pricingBenchmarks: PricingBenchmark[];
  biddingSteps: BiddingStep[];
  checklist: string[];
  faqs: TradeFAQ[];
  relatedTrades: string[];
}

export const TRADES: TradeConfig[] = [
  {
    slug: "cleaning",
    tradeName: "House & Commercial Cleaning",
    h1: "Free Cleaning Estimate Template & Bid Generator",
    seoTitle: "Free Cleaning Estimate Template, Quote Maker & Bid Calculator (2026 PDF)",
    seoDescription:
      "Generate instant house cleaning quotes, deep clean bids, and maid service estimates with 2026 US $/sq ft and per-room rates. Free printable PDF estimate template.",
    keywords: [
      "cleaning estimate template",
      "house cleaning quote template pdf",
      "cleaning bid calculator",
      "maid service estimate form",
      "deep cleaning price calculator",
      "move out cleaning quote template",
      "residential cleaning bid sheet",
    ],
    category: "Cleaning & Janitorial",
    shortDescription:
      "Residential deep cleans, move-out cleans, and recurring maid services with square footage and per-room rates.",
    defaultLineItems: [
      {
        id: "cl-1",
        description: "Standard Recurring House Cleaning (3 Bed / 2 Bath — up to 2,000 sq ft)",
        quantity: 1,
        unit: "service",
        rate: 165.0,
      },
      {
        id: "cl-2",
        description: "Deep Clean Kitchen Add-on (Interior Oven, Fridge, & Cabinet Detailing)",
        quantity: 1,
        unit: "package",
        rate: 85.0,
      },
      {
        id: "cl-3",
        description: "Floor Scrub & Sanitize (Hardwood & Tile high-traffic areas)",
        quantity: 650,
        unit: "sq ft",
        rate: 0.18,
      },
      {
        id: "cl-4",
        description: "Eco-Friendly Cleaning Supplies & HEPA Equipment Surcharge",
        quantity: 1,
        unit: "flat",
        rate: 25.0,
      },
    ],
    defaultTerms:
      "Payment due within 14 days of invoice date. 48-hour cancellation notice required to avoid a $50 rescheduling fee. All cleaning supplies and commercial HEPA equipment provided. Please ensure pets are secured prior to arrival.",
    pricingBenchmarks: [
      {
        service: "Standard Bi-Weekly House Clean",
        lowRate: 120,
        avgRate: 165,
        highRate: 240,
        unit: "per visit",
        notes: "Based on 1,500-2,200 sq ft residential home",
      },
      {
        service: "Deep Cleaning / Move-In / Move-Out",
        lowRate: 0.18,
        avgRate: 0.28,
        highRate: 0.42,
        unit: "per sq ft",
        notes: "Includes baseboards, blinds, interior appliances",
      },
      {
        service: "Hourly Residential Maid Labor",
        lowRate: 35,
        avgRate: 50,
        highRate: 75,
        unit: "per cleaner-hr",
        notes: "Varies by metro area and 2-person crew speed",
      },
      {
        service: "Post-Construction Rough & Final Clean",
        lowRate: 0.30,
        avgRate: 0.45,
        highRate: 0.70,
        unit: "per sq ft",
        notes: "Heavy dust extraction, sticker removal, drywall residue",
      },
      {
        service: "Commercial Office Maintenance Clean",
        lowRate: 0.10,
        avgRate: 0.16,
        highRate: 0.25,
        unit: "per sq ft / mo",
        notes: "Trash disposal, restrooms, kitchenettes, vacuuming",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Measure or Audit True Square Footage & Room Counts",
        description:
          "Walk through the property or pull public property records. Count heavy-soil areas (bathrooms, kitchens, mudrooms) separately from open bedrooms.",
      },
      {
        stepNumber: 2,
        title: "Calculate Production Rate (Sq Ft per Labor Hour)",
        description:
          "A solo professional cleaner covers 2,500 to 3,500 sq ft/hr for light maintenance, but only 800 to 1,200 sq ft/hr for heavy initial deep cleans.",
      },
      {
        stepNumber: 3,
        title: "Factor In Labor Burden, Travel, & Consumables",
        description:
          "Target a minimum gross margin of 45-55%. Include 8-12% for payroll taxes/insurance, plus $5-$10 per home for chemicals, rags, and equipment wear.",
      },
      {
        stepNumber: 4,
        title: "Present Tiered Pricing (Weekly / Bi-Weekly / Monthly)",
        description:
          "Offer a discounted recurring maintenance rate once the higher-priced first-time deep clean resets the baseline condition.",
      },
    ],
    checklist: [
      "Exact scope of work checklist (what is cleaned vs. what is excluded, e.g., exterior windows or chandelier polishing)",
      "Access instructions (keycode, lockbox, alarm codes, or client present requirements)",
      "Cancellation and lockout policies ($50-$75 fee without 48hr notice)",
      "Proof of General Liability Insurance and Bonding verification",
      "Payment terms, accepted payment methods (ACH, card, check), and due dates",
    ],
    faqs: [
      {
        question: "How do US cleaning contractors price per square foot vs. hourly?",
        answer:
          "Most established US cleaning businesses bid recurring residential work on a flat-rate basis calculated from square footage ($0.12-$0.22/sq ft for standard, $0.20-$0.40/sq ft for deep cleaning). Hourly rates ($40-$70/cleaner-hour) are typically reserved for custom initial cleanups, hoarder cleanouts, or variable commercial requests.",
      },
      {
        question: "What is the industry-standard profit margin for a cleaning business?",
        answer:
          "Target gross profit margins should sit between 50% and 60% on direct labor. After administrative overhead, vehicle depreciation, marketing, and commercial insurance, healthy net margins range from 20% to 32%.",
      },
      {
        question: "Should I charge a separate fee for cleaning supplies and chemicals?",
        answer:
          "In residential cleaning, baking supplies into the flat rate or charging a modest $15-$30 specialty fee (e.g., green eco-products or enzyme pet treatments) is standard. For commercial accounts, toilet paper, trash liners, and soap can be itemized as pass-through supply items with a 15-20% handling markup.",
      },
      {
        question: "What is the difference between standard cleaning and move-out cleaning?",
        answer:
          "Standard cleaning covers surface dusting, vacuuming, mopping, trash removal, and sanitizing kitchens and bathrooms. Move-out cleaning requires opening and detailing oven interiors, refrigerators, kitchen cabinets, drawers, window sills, baseboards, and closet shelving.",
      },
      {
        question: "Why should I provide an itemized quote instead of a single total?",
        answer:
          "Itemized quotes build immediate trust, eliminate scope creep, and allow customers to opt into profitable add-ons (like interior fridge cleaning or patio scrubbing) without haggling over the core service price.",
      },
    ],
    relatedTrades: ["janitorial-bid-calculator", "pressure-washing", "handyman"],
  },
  {
    slug: "janitorial-bid-calculator",
    tradeName: "Commercial Janitorial Services",
    h1: "Free Janitorial Bid Calculator & Proposal Generator",
    seoTitle: "Commercial Janitorial Bid Calculator & Cleaning Proposal Template (2026 PDF)",
    seoDescription:
      "Calculate monthly commercial janitorial contract bids, office cleaning quotes, and facility maintenance proposals by square footage and weekly frequency. Free PDF download.",
    keywords: [
      "janitorial bid calculator",
      "commercial cleaning proposal template",
      "office cleaning quote calculator",
      "janitorial estimate template pdf",
      "how to bid commercial cleaning",
      "janitorial pricing per square foot",
      "cleaning contract bid sheet",
    ],
    category: "Cleaning & Janitorial",
    shortDescription:
      "Contract bidding for corporate offices, medical facilities, retail spaces, and industrial facilities with frequency-based pricing.",
    defaultLineItems: [
      {
        id: "jb-1",
        description: "Commercial Office Nightly Cleaning (5x/week, 8,500 sq ft facility)",
        quantity: 1,
        unit: "month",
        rate: 1850.0,
      },
      {
        id: "jb-2",
        description: "Restroom Deep Sanitization & Restocking Service (4 Restroom Banks)",
        quantity: 4,
        unit: "bank/mo",
        rate: 220.0,
      },
      {
        id: "jb-3",
        description: "Quarterly Hard Surface VCT Strip, Scrub & 4-Coat Wax",
        quantity: 1800,
        unit: "sq ft",
        rate: 0.42,
      },
      {
        id: "jb-4",
        description: "Consumable Restroom Supplies (Liner bags, paper towel rolls, foam soap)",
        quantity: 1,
        unit: "flat/mo",
        rate: 180.0,
      },
    ],
    defaultTerms:
      "Net 30 payment terms via ACH or corporate check. Monthly contract automatically renews annually with 60-day written cancellation notice. Nightly access keycards and security protocols verified upon signing. Contractor carries $2M general liability & workers' comp insurance.",
    pricingBenchmarks: [
      {
        service: "Office Cleaning (5x per week)",
        lowRate: 0.08,
        avgRate: 0.14,
        highRate: 0.22,
        unit: "per sq ft / mo",
        notes: "High frequency yields lower per-visit cost",
      },
      {
        service: "Office Cleaning (2-3x per week)",
        lowRate: 0.12,
        avgRate: 0.19,
        highRate: 0.28,
        unit: "per sq ft / mo",
        notes: "Moderate traffic professional service suites",
      },
      {
        service: "Medical / Dental Suite Terminal Clean",
        lowRate: 0.22,
        avgRate: 0.35,
        highRate: 0.55,
        unit: "per sq ft / mo",
        notes: "Strict OSHA, bloodborne pathogen, and EPA disinfection",
      },
      {
        service: "Carpet Hot Water Extraction",
        lowRate: 0.15,
        avgRate: 0.24,
        highRate: 0.38,
        unit: "per sq ft",
        notes: "Periodic deep maintenance for commercial loop carpet",
      },
      {
        service: "VCT Floor Strip & Re-Wax",
        lowRate: 0.35,
        avgRate: 0.50,
        highRate: 0.85,
        unit: "per sq ft",
        notes: "Stripping old finish, neutralization, 4-5 wax coats",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Conduct an On-Site Facility Walkthrough",
        description:
          "Inspect cleanable square footage (exclude dead storage), flooring breakdown (carpet vs. tile), restroom fixture counts, and kitchen/breakroom density.",
      },
      {
        stepNumber: 2,
        title: "Determine Standard Cleaning Times (ISSA Standards)",
        description:
          "Use ISSA production rates: typical multi-tenant commercial office space cleans at 3,000-4,500 sq ft/hour. Medical clinics drop to 1,500-2,200 sq ft/hour.",
      },
      {
        stepNumber: 3,
        title: "Build Monthly Cost: Labor + Burden + Supplies + Overhead",
        description:
          "Multiply monthly hours by labor wage plus 18-24% labor burden (FICA, FUTA, workers comp). Add 3-5% for cleaning chemicals and 15% operational overhead.",
      },
      {
        stepNumber: 4,
        title: "Apply Net Margin & Price Monthly Retainer",
        description:
          "Target 20% to 30% net profit margin on the final bid. Express the client fee as a predictable monthly flat retainer with billing on the 1st of each month.",
      },
    ],
    checklist: [
      "Facility schedule and operational cleaning window (e.g., 6:00 PM – 11:00 PM Monday through Friday)",
      "Detailed scope by zone: Reception, Cubicles, Executive Offices, Restrooms, Breakrooms",
      "Consumable product replenishment specifications (owner-supplied vs. contractor-supplied)",
      "Background check compliance, badging, and security keycard chain of custody",
      "Quality assurance inspection schedule and dedicated account manager contact",
    ],
    faqs: [
      {
        question: "How do you calculate a commercial janitorial monthly bid?",
        answer:
          "Formula: (Cleanable Sq Ft ÷ Cleaning Speed Sq Ft/hr) × Frequency of Visits per Month = Monthly Labor Hours. Then: (Monthly Hours × Billable Hourly Rate) + Monthly Chemical Costs + Consumables Markup = Total Monthly Retainer.",
      },
      {
        question: "What is the standard ISSA production rate for general office cleaning?",
        answer:
          "The International Sanitary Supply Association (ISSA) 540 Cleaning Times benchmarks modern office spaces at approximately 3,000 to 4,000 sq ft per labor hour for routine maintenance cleaning using backpack vacuums and microfiber systems.",
      },
      {
        question: "How should consumable restroom supplies be billed to commercial clients?",
        answer:
          "Two methods work well: 1) Monthly actual cost plus a 15% to 25% delivery and stocking fee, or 2) An agreed-upon monthly allowance based on headcount ($4 to $8 per full-time employee per month) reconciled quarterly.",
      },
      {
        question: "What contract term is customary for US commercial cleaning?",
        answer:
          "Standard agreements are 12-month evergreen contracts with a 30-day or 60-day written cancellation clause for performance defaults. Multi-year corporate accounts often include an annual 3-5% CPI cost-of-living rate adjustment.",
      },
      {
        question: "What insurance coverage must a commercial janitorial contractor provide?",
        answer:
          "Most commercial property managers require a minimum of $1,000,000 to $2,000,000 in Commercial General Liability, $1,000,000 in Workers' Compensation, and a $25,000-$50,000 Janitorial Custodial Surety Bond.",
      },
    ],
    relatedTrades: ["cleaning", "pressure-washing", "epoxy-flooring"],
  },
  {
    slug: "pressure-washing",
    tradeName: "Pressure Washing & Exterior Soft Wash",
    h1: "Free Pressure Washing Estimate Template & Bid Calculator",
    seoTitle: "Pressure Washing Estimate Template, Soft Wash Quote & Sq Ft Calculator (2026)",
    seoDescription:
      "Calculate residential and commercial pressure washing, driveway cleaning, and soft wash house siding quotes using 2026 US per-sq-ft rates. Instant PDF estimate.",
    keywords: [
      "pressure washing estimate template",
      "power washing quote calculator",
      "soft wash bid template",
      "driveway cleaning price estimator",
      "pressure washing invoice pdf",
      "exterior cleaning quote generator",
      "pressure washing cost per square foot",
    ],
    category: "Exterior Maintenance",
    shortDescription:
      "Driveways, concrete flatwork, vinyl/stucco house soft washes, commercial sidewalks, and wood deck restorations.",
    defaultLineItems: [
      {
        id: "pw-1",
        description: "Concrete Driveway & Sidewalk Surface Cleaning (Post-treatment algaecide wash)",
        quantity: 1250,
        unit: "sq ft",
        rate: 0.22,
      },
      {
        id: "pw-2",
        description: "2-Story Vinyl House Soft Wash (Low pressure surfactant & mold inhibitor)",
        quantity: 2400,
        unit: "sq ft",
        rate: 0.20,
      },
      {
        id: "pw-3",
        description: "Exterior Gutter Face Whitening & Tiger Stripe Stain Removal",
        quantity: 140,
        unit: "lin ft",
        rate: 1.5,
      },
      {
        id: "pw-4",
        description: "Surrounding Landscaping Pre-wet & Plant Protective Neutralizer Rinse",
        quantity: 1,
        unit: "flat",
        rate: 45.0,
      },
    ],
    defaultTerms:
      "Payment due upon completion of work. Customer must ensure exterior water spigots are active and functional with at least 4.0 GPM flow. All outdoor furniture and potted plants within 10 feet of wash zones must be relocated prior to arrival.",
    pricingBenchmarks: [
      {
        service: "Driveway & Flat Concrete Surface Cleaning",
        lowRate: 0.15,
        avgRate: 0.22,
        highRate: 0.35,
        unit: "per sq ft",
        notes: "Surface cleaner with post-treatment sodium hypochlorite",
      },
      {
        service: "Residential House Soft Wash (Vinyl/Hardie)",
        lowRate: 0.18,
        avgRate: 0.24,
        highRate: 0.36,
        unit: "per sq ft",
        notes: "Low pressure 1-3% sodium hypochlorite + surfactant mix",
      },
      {
        service: "Stucco / Dryvit Delicate Soft Wash",
        lowRate: 0.22,
        avgRate: 0.32,
        highRate: 0.45,
        unit: "per sq ft",
        notes: "Requires gentle spray angles and precise chemical dwell times",
      },
      {
        service: "Wood Deck or Fence Wash & Brightener",
        lowRate: 0.30,
        avgRate: 0.48,
        highRate: 0.75,
        unit: "per sq ft",
        notes: "Sodium percarbonate cleaner followed by oxalic acid brightener",
      },
      {
        service: "Commercial Sidewalk Hot-Water Degreasing",
        lowRate: 0.25,
        avgRate: 0.40,
        highRate: 0.65,
        unit: "per sq ft",
        notes: "200°F hot water + degreaser for chewing gum and oil spots",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Calculate Total Surface Area (Sq Ft) and Linear Footage",
        description:
          "Measure driveway, patios, walkways, and wall elevations. For 2-story homes, multiply ground footprint by 2.2 to account for roof pitch and siding height.",
      },
      {
        stepNumber: 2,
        title: "Test On-Site Water Supply & Assess Obstacles",
        description:
          "Verify the client's outdoor spigot delivers sufficient water flow (GPM) or quote a dedicated mobile buffer tank fill surcharge.",
      },
      {
        stepNumber: 3,
        title: "Select Equipment & Chemistry (Surface Cleaner vs. Soft Wash)",
        description:
          "Never high-pressure blast siding or roofs. Factor in bleach (SH), surfactant, and wood brightener chemicals into your material cost.",
      },
      {
        stepNumber: 4,
        title: "Package Flatwork + Siding for High Ticket Conversions",
        description:
          "Bundle driveway cleaning with a full house wash for a 15% discount. This boosts your average ticket from $250 to $550+ while on site.",
      },
    ],
    checklist: [
      "Water source verification and GPM output requirements",
      "Property protection notice: outdoor electrical outlets, Ring doorbells, delicate foliage",
      "Existing damage disclaimer (cracked concrete, oxidation, failing paint, weep hole leakage)",
      "Post-treatment plan to prevent rapid algae and lichen regrowth",
      "Payment terms, deposit requirements, and completion sign-off process",
    ],
    faqs: [
      {
        question: "How do US pressure washing contractors charge?",
        answer:
          "Most contractors charge either by the square foot ($0.15-$0.30/sq ft for flatwork concrete, $0.18-$0.35/sq ft for house washing) or establish a minimum service trip charge ($150-$250 minimum job size) to cover fuel, chemical prep, and setup overhead.",
      },
      {
        question: "What is the difference between pressure washing and soft washing?",
        answer:
          "Pressure washing uses high water pressure (2,500-4,000 PSI) with surface cleaners to strip dirt and grime from durable surfaces like concrete. Soft washing uses low pressure (<100 PSI) paired with specialized cleaning solutions (sodium hypochlorite and surfactants) to safely eradicate mold and algae without damaging siding, paint, or roof shingles.",
      },
      {
        question: "How much chemical cost should I factor into an estimate?",
        answer:
          "Chemical costs typically average $15 to $35 per residential home for 12.5% industrial sodium hypochlorite and surfactant. For oil grease stains or heavy wood restoration, specialized chemical additions add $20-$40 per job.",
      },
      {
        question: "Should I include water consumption in the quote?",
        answer:
          "Standard residential contracts explicitly stipulate using the homeowner's exterior spigot, which costs the customer less than $3-$5 on their municipal utility bill. If bringing a dedicated water tank truck, quote a $75-$150 water haulage fee.",
      },
      {
        question: "What is the most profitable add-on for pressure washing jobs?",
        answer:
          "Exterior gutter brightening ('gutter whitening'), paver joint polymeric sand re-sweeping, and concrete sealant applications regularly deliver 70%+ gross margins as on-site add-ons.",
      },
    ],
    relatedTrades: ["painting", "epoxy-flooring", "roofing"],
  },
  {
    slug: "lawn-care",
    tradeName: "Lawn Care & Maintenance",
    h1: "Free Lawn Care Estimate Template & Bid Calculator",
    seoTitle: "Lawn Care Estimate Template, Mowing Quote & Maintenance Bid Calculator (2026)",
    seoDescription:
      "Price residential lawn mowing, edging, fertilization, and seasonal yard maintenance packages with 2026 US market rates. Download your free lawn care PDF quote.",
    keywords: [
      "lawn care estimate template",
      "lawn mowing bid calculator",
      "lawn maintenance quote pdf",
      "grass cutting price estimator",
      "lawn service proposal template",
      "yard care bid sheet",
      "seasonal lawn care quote",
    ],
    category: "Lawn & Landscaping",
    shortDescription:
      "Weekly/bi-weekly mowing, line trimming, hard edge blade trenching, mulch bed cleanup, and seasonal turf fertilizer programs.",
    defaultLineItems: [
      {
        id: "lc-1",
        description: "Weekly Lawn Maintenance (Mow, line trim perimeter, crisp hard edging, debris blow-off — up to 8,000 sq ft)",
        quantity: 4,
        unit: "visits/mo",
        rate: 55.0,
      },
      {
        id: "lc-2",
        description: "Spring Turf Aeration & Premium Double-Pass Overseeding",
        quantity: 8000,
        unit: "sq ft",
        rate: 0.035,
      },
      {
        id: "lc-3",
        description: "Slow-Release Pre-Emergent Crabgrass Fertilizer Treatment (Round 1)",
        quantity: 1,
        unit: "application",
        rate: 85.0,
      },
      {
        id: "lc-4",
        description: "Perimeter Shrub & Ornamental Bush Shearing (Up to 12 Bushes)",
        quantity: 12,
        unit: "shrubs",
        rate: 14.0,
      },
    ],
    defaultTerms:
      "Billed on the 1st of each month via automatic card on file or ACH. Clients must remove dog waste, toys, and sprinkler hoses prior to scheduled service days. Gates must remain unlocked. Bi-weekly service carries a 25% surcharge during peak growing season.",
    pricingBenchmarks: [
      {
        service: "Weekly Residential Mowing (1/4 Acre)",
        lowRate: 40,
        avgRate: 55,
        highRate: 75,
        unit: "per cut",
        notes: "Mow, string-trim, edge concrete, blow hard surfaces",
      },
      {
        service: "Weekly Residential Mowing (1/2 Acre)",
        lowRate: 60,
        avgRate: 80,
        highRate: 110,
        unit: "per cut",
        notes: "Commercial zero-turn mower required for efficiency",
      },
      {
        service: "Core Aeration & Overseeding",
        lowRate: 0.025,
        avgRate: 0.038,
        highRate: 0.06,
        unit: "per sq ft",
        notes: "Includes turf seed blend appropriate for USDA hardiness zone",
      },
      {
        service: "Fertilizer & Weed Control (6-Step Program)",
        lowRate: 65,
        avgRate: 95,
        highRate: 150,
        unit: "per application",
        notes: "Based on 5,000-8,000 sq ft turf area",
      },
      {
        service: "Spring / Fall Yard Leaf Cleanup",
        lowRate: 65,
        avgRate: 95,
        highRate: 140,
        unit: "per man-hour",
        notes: "Or flat fee $250-$600 depending on tree canopy density",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Measure Total Turf Area via Satellite Imagery",
        description:
          "Use Google Earth or measurement software to outline grass surfaces. Subtract the house footprint, driveway, and wooded mulch beds.",
      },
      {
        stepNumber: 2,
        title: "Gauge Obstacles, Slope, and Gate Dimensions",
        description:
          "Fenced backyards with 36-inch gates prevent wide zero-turn mowers and require smaller walk-behind mowers, adding 10-15 minutes of labor.",
      },
      {
        stepNumber: 3,
        title: "Calculate Route Density & Minimum Stop Charge",
        description:
          "Never cut below your route minimum (typically $45-$55 per stop). Dense cluster routes allow tighter pricing while keeping gross margins high.",
      },
      {
        stepNumber: 4,
        title: "Convert to 12-Month Level Billing",
        description:
          "Smooth cash flow by dividing annual costs (28 mowing cuts + spring cleanup + fall cleanup + aeration) into 12 equal monthly installments.",
      },
    ],
    checklist: [
      "Exact turf boundaries and areas excluded from mowing",
      "Obstacle and safety protocol (pet waste, children's toys, locked gates, irrigation heads)",
      "Standard operating mowing height (typically 3.5 to 4 inches for healthy root growth)",
      "Inclement weather rescheduling terms and bi-weekly growth surge policy",
      "Payment automation terms (credit card on file with auto-charge after service)",
    ],
    faqs: [
      {
        question: "How do you calculate a profitable lawn mowing quote?",
        answer:
          "Estimate the total minutes per visit (e.g., 25 minutes for a 2-man crew = 50 total man-minutes) multiplied by your target hourly man-rate ($60-$85/man-hour). Add drive time allocation ($10) and verify it meets your minimum stop price ($45-$55).",
      },
      {
        question: "What is 12-month flat rate billing in lawn care?",
        answer:
          "Rather than billing clients per cut during summer and having zero revenue during winter, contractors calculate the total yearly value and divide by 12 equal monthly installments. This ensures steady income throughout winter dormancy.",
      },
      {
        question: "Should I offer bi-weekly mowing service?",
        answer:
          "Bi-weekly cuts often result in overgrown grass, clumping, and double-mowing labor. Most contractors charge 1.3x to 1.5x the weekly cut price for bi-weekly service to compensate for the extra wear and time.",
      },
      {
        question: "How much should I charge for lawn aeration and overseeding?",
        answer:
          "Average US pricing ranges from $175 to $350 for standard 5,000-8,000 sq ft suburban lots, or roughly $0.035 to $0.05 per square foot. Factor in 5-8 lbs of seed per 1,000 sq ft.",
      },
      {
        question: "What equipment depreciation should be factored into bids?",
        answer:
          "Lawn equipment operates under intense vibration and heat. Allocating $8 to $12 per machine operating hour covers blades, oil changes, tire replacement, and mower amortized replacement costs.",
      },
    ],
    relatedTrades: ["landscaping", "pressure-washing", "handyman"],
  },
  {
    slug: "painting",
    tradeName: "Interior & Exterior Painting",
    h1: "Free Painting Estimate Template & Bid Calculator",
    seoTitle: "Painting Estimate Template, House Paint Quote & Labor Cost Calculator (2026)",
    seoDescription:
      "Create detailed interior and exterior painting quotes with wall square footage, ceiling, trim, primer, and paint gallon calculations. Free printable painting PDF estimate.",
    keywords: [
      "painting estimate template",
      "painting quote template pdf",
      "house painting bid calculator",
      "interior painting cost estimator",
      "exterior painting proposal template",
      "painter estimate sheet",
      "painting price per square foot calculator",
    ],
    category: "Finishing & Remodeling",
    shortDescription:
      "Interior wall/ceiling repaints, trim/door enamel, drywall patching prep, and complete exterior siding and fascia spray/backroll.",
    defaultLineItems: [
      {
        id: "pt-1",
        description: "Interior Wall Painting (2 coats premium low-VOC satin latex — Living & Dining Room)",
        quantity: 1100,
        unit: "sq ft wall",
        rate: 2.35,
      },
      {
        id: "pt-2",
        description: "Baseboards, Door Casings & Crown Molding (Enamel finish — 2 coats)",
        quantity: 220,
        unit: "lin ft",
        rate: 2.85,
      },
      {
        id: "pt-3",
        description: "Surface Prep: Drywall Mudding, Caulking Gaps & Spot Priming Nail Pops",
        quantity: 6,
        unit: "hours",
        rate: 65.0,
      },
      {
        id: "pt-4",
        description: "Benjamin Moore Regal Select / Sherwin-Williams Duration Paint & Sundries",
        quantity: 1,
        unit: "materials",
        rate: 340.0,
      },
    ],
    defaultTerms:
      "30% deposit upon contract acceptance, 40% on start date, 30% upon final punch-list completion. Estimate includes furniture masking, drop cloths, and daily vacuum cleanup. Client selects paint color codes 7 business days prior to start date.",
    pricingBenchmarks: [
      {
        service: "Interior Walls (2 Coats Repaint)",
        lowRate: 1.75,
        avgRate: 2.45,
        highRate: 3.75,
        unit: "per sq ft wall",
        notes: "Excludes ceilings and trim unless itemized",
      },
      {
        service: "Ceilings (Flat White / 2 Coats)",
        lowRate: 1.10,
        avgRate: 1.65,
        highRate: 2.40,
        unit: "per sq ft ceil",
        notes: "High ceilings (>10ft) carry a 20-30% height surcharge",
      },
      {
        service: "Baseboards & Trim (Per Linear Foot)",
        lowRate: 1.95,
        avgRate: 2.85,
        highRate: 4.50,
        unit: "per lin ft",
        notes: "Includes caulking nail holes and smooth semigloss enamel",
      },
      {
        service: "Interior Doors & Frames (Both Sides)",
        lowRate: 65,
        avgRate: 95,
        highRate: 150,
        unit: "per door",
        notes: "Detailed paneled doors require brush & mini-roller work",
      },
      {
        service: "Exterior Siding Paint (Prep, Prime & 2 Coats)",
        lowRate: 2.20,
        avgRate: 3.25,
        highRate: 5.00,
        unit: "per sq ft surface",
        notes: "Power wash, scraping loose paint, primer, and spray/backroll",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Measure Total Paintable Wall and Trim Surface Area",
        description:
          "Calculate perimeter × ceiling height. Deduct major window/door openings if over 40 sq ft, but keep smaller openings to cover extra cut-in labor.",
      },
      {
        stepNumber: 2,
        title: "Inspect Substrate Condition and Prep Requirements",
        description:
          "Estimate prep hours: nail pops, sheetrock gouges, peeling paint, texture repair, caulking baseboard joints, and oil-to-latex conversion priming.",
      },
      {
        stepNumber: 3,
        title: "Calculate Gallons of Paint & Premium Sundries",
        description:
          "One gallon of quality paint covers ~350-400 sq ft (1 coat). For 2 coats on 1,200 sq ft of wall, budget 7 gallons plus rollers, tape, plastic sheeting, and drop protection.",
      },
      {
        stepNumber: 4,
        title: "Structure Stage Payments & Final Punch-List Walkthrough",
        description:
          "Protect cash flow with a 3-tier milestone structure (deposit, start, completion) and reserve the final 10-20% for formal client sign-off.",
      },
    ],
    checklist: [
      "Exact number of paint coats specified (1-coat refresh vs. 2-coat full color change)",
      "Paint brand, product grade line (e.g. SW SuperPaint vs. Emerald), and sheen (Flat, Eggshell, Satin, Semi-gloss)",
      "Detailed prep scope (scraping, sanding, caulking, priming bare patches)",
      "Furniture moving and floor masking protection specifications",
      "Color confirmation clause and charge for client color changes after purchase",
    ],
    faqs: [
      {
        question: "How do US painting contractors calculate wall square footage?",
        answer:
          "Contractors measure the room perimeter (length + width + length + width) and multiply by the ceiling height (e.g., 12' + 15' + 12' + 15' = 54 linear feet × 9' ceiling = 486 sq ft of wall surface per room).",
      },
      {
        question: "How much paint is needed per square foot?",
        answer:
          "A standard gallon covers approximately 350 to 400 square feet with one coat. For standard two-coat applications on textured or previously unpainted drywall, budget 1 gallon per 175 square feet of wall area.",
      },
      {
        question: "What is the standard labor-to-materials ratio for painting?",
        answer:
          "Painting is labor-heavy: labor generally constitutes 75% to 85% of the total estimate, while paint, primer, tape, and plastic materials make up the remaining 15% to 25%.",
      },
      {
        question: "Why do painters charge separately for trim and baseboards?",
        answer:
          "Trim requires slow, precision brush cutting, filling nail holes, and high-gloss enamel finishes that take twice as long per square foot compared to rolling broad wall expanses.",
      },
      {
        question: "What should be included in a professional painting warranty?",
        answer:
          "Reputable painting contractors offer a 2-to-3 year limited warranty covering blistering, peeling, or chipping resulting from defective workmanship or inadequate surface prep.",
      },
    ],
    relatedTrades: ["handyman", "epoxy-flooring", "pressure-washing"],
  },
  {
    slug: "handyman",
    tradeName: "Handyman & Home Repair",
    h1: "Free Handyman Estimate Template & Bid Calculator",
    seoTitle: "Handyman Estimate Template, Repair Quote & Hourly Pricing Calculator (2026 PDF)",
    seoDescription:
      "Create clear, professional handyman quotes with hourly labor rates, materials markup, and flat-rate home repair items. Instant printable PDF quote generator.",
    keywords: [
      "handyman estimate template",
      "handyman quote template pdf",
      "handyman invoice and estimate",
      "home repair bid calculator",
      "handyman hourly rate estimator",
      "handyman work order template",
      "flat rate handyman pricing",
    ],
    category: "General Trades",
    shortDescription:
      "Small residential repairs, fixture installations, drywall patches, door adjustments, and multi-trade punch lists.",
    defaultLineItems: [
      {
        id: "hm-1",
        description: "Master Handyman Diagnostic & Skilled Labor (Initial 2-Hour Minimum Block)",
        quantity: 2,
        unit: "hours",
        rate: 95.0,
      },
      {
        id: "hm-2",
        description: "Garbage Disposal Replacement & Plumbing Trap Reconfiguration (Labor)",
        quantity: 1,
        unit: "install",
        rate: 185.0,
      },
      {
        id: "hm-3",
        description: "Interior Door Realignment, Strike Plate Mortising & Latch Hardware Upgrade",
        quantity: 2,
        unit: "doors",
        rate: 85.0,
      },
      {
        id: "hm-4",
        description: "Replacement Parts, Fasteners & Heavy-Duty Hardware (Includes 20% Procurement Markup)",
        quantity: 1,
        unit: "materials",
        rate: 135.0,
      },
    ],
    defaultTerms:
      "50% deposit required for projects requiring custom materials or exceeding $500. Remaining balance due immediately upon completion. 90-day warranty on all craftsmanship. Unforeseen structural, plumbing, or electrical hidden damage billed at standard hourly rates upon written client approval.",
    pricingBenchmarks: [
      {
        service: "Skilled Handyman Hourly Labor",
        lowRate: 65,
        avgRate: 95,
        highRate: 145,
        unit: "per hour",
        notes: "Most pros require a 2-hour minimum trip charge",
      },
      {
        service: "Ceiling Fan / Light Fixture Replacement",
        lowRate: 125,
        avgRate: 185,
        highRate: 275,
        unit: "per fixture",
        notes: "Assumes existing electrical junction box in place",
      },
      {
        service: "Toilet Removal & New Toilet Install",
        lowRate: 175,
        avgRate: 240,
        highRate: 350,
        unit: "per install",
        notes: "Includes new wax ring, braided supply line, and bolts",
      },
      {
        service: "Drywall Hole Patch & Texture Match (<12 inches)",
        lowRate: 120,
        avgRate: 180,
        highRate: 260,
        unit: "per patch",
        notes: "Backer board, 3-coat mud, orange peel or knockdown texture",
      },
      {
        service: "Interior Pre-Hung Door Replacement",
        lowRate: 175,
        avgRate: 265,
        highRate: 395,
        unit: "per door",
        notes: "Plumb, shim, secure jamb, trim casing, and install latch",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Define Exact Task Scope to Prevent Scope Creep",
        description:
          "Itemize every repair task separately. Resist vague requests like 'fix various items in the basement' without detailed inspection.",
      },
      {
        stepNumber: 2,
        title: "Decide: Flat-Rate Project vs. Hourly Time & Materials",
        description:
          "Use flat-rate pricing for predictable tasks (fixtures, door hangs, garbage disposals). Use time-and-materials for exploratory troubleshooting.",
      },
      {
        stepNumber: 3,
        title: "Apply Materials Sourcing & Handling Markup",
        description:
          "Always apply a 20% to 35% markup on hardware, plumbing fittings, and consumables to account for supply house driving and return trips.",
      },
      {
        stepNumber: 4,
        title: "Enforce a Mandatory Trip Minimum",
        description:
          "Set a $150-$190 minimum trip charge (covers 1.5 to 2 hours of labor) to ensure small 20-minute fixes remain profitable after driving.",
      },
    ],
    checklist: [
      "Minimum service call / diagnostic trip fee clearly stated",
      "Client-provided materials vs. contractor-supplied hardware specifications",
      "Hidden condition clause (sub-floor rot, outdated wiring, corroded pipe threads)",
      "Workmanship warranty duration (standard 90 days to 1 year)",
      "Accepted payment methods and payment terms upon job sign-off",
    ],
    faqs: [
      {
        question: "How do US handyman professionals charge for small jobs?",
        answer:
          "Pros use either a 2-hour minimum trip fee ($150-$200) or flat-rate menu pricing for defined tasks (e.g., $185 to hang a ceiling fan, $240 to install a toilet). Flat rates are generally more profitable and easier for homeowners to approve.",
      },
      {
        question: "What percentage markup should a handyman charge on materials?",
        answer:
          "Industry standard is 20% to 35% on parts and materials. This compensates for drive time to hardware stores, vehicle fuel, wear on tools, and warranty responsibility for replacement parts.",
      },
      {
        question: "Do handymen need a contractor license in the US?",
        answer:
          "Licensing laws vary by state. Many states permit unlicensed handymen to perform minor repairs under a statutory financial threshold (e.g., $500 in California, $1,000 in Arizona, or $3,000 in Tennessee). Work exceeding statutory caps or involving major electrical, plumbing, or structural changes requires a licensed trade contractor.",
      },
      {
        question: "How do you handle hidden damage discovered during repairs?",
        answer:
          "Include a clear 'Unforeseen Conditions' clause stating that unexpected issues (dry rot behind drywall, outdated knob-and-tube wiring) will pause work until a formal change order is signed with revised pricing.",
      },
      {
        question: "What insurance is required for handyman work?",
        answer:
          "A minimum of $1,000,000 General Liability policy is essential to protect against accidental water leaks, electrical fires, or property damage during repairs.",
      },
    ],
    relatedTrades: ["painting", "cleaning", "landscaping"],
  },
  {
    slug: "landscaping",
    tradeName: "Landscaping & Hardscaping",
    h1: "Free Landscaping Proposal Template & Estimate Generator",
    seoTitle: "Landscaping Proposal Template, Hardscape Quote & Material Calculator (2026 PDF)",
    seoDescription:
      "Build detailed landscaping and hardscape quotes with mulch cubic yards, sod square footage, paver patios, and plant nursery costs. Free printable landscaping PDF estimate.",
    keywords: [
      "landscaping proposal template",
      "landscaping estimate template pdf",
      "hardscape quote calculator",
      "mulch installation bid sheet",
      "sod installation cost estimator",
      "paver patio estimate template",
      "landscape contractor quote form",
    ],
    category: "Lawn & Landscaping",
    shortDescription:
      "Mulch installation, sod turf installation, paver patios, retaining walls, planting beds, and grading drainage.",
    defaultLineItems: [
      {
        id: "ls-1",
        description: "Premium Double-Shredded Hardwood Mulch (Delivery, edge bed re-trenching & 3-inch spread)",
        quantity: 12,
        unit: "cu yds",
        rate: 95.0,
      },
      {
        id: "ls-2",
        description: "Bermuda / Kentucky Bluegrass Sod Installation (Grading, soil prep, roll sod & roll compact)",
        quantity: 2200,
        unit: "sq ft",
        rate: 1.65,
      },
      {
        id: "ls-3",
        description: "Concrete Paver Patio (Excavation, compacted road base, bedding sand, edge restraints & polymeric sand)",
        quantity: 350,
        unit: "sq ft",
        rate: 26.0,
      },
      {
        id: "ls-4",
        description: "Nursery Stock Plantings (5-Gal Flowering Shrubs + Compost Amendment + Root Hormone)",
        quantity: 14,
        unit: "plants",
        rate: 75.0,
      },
    ],
    defaultTerms:
      "50% deposit required upon contract execution to reserve nursery inventory and materials delivery. 50% balance due upon project completion. 1-year warranty on nursery stock provided automatic drip irrigation is installed. Contractor calls 811 utility dig line prior to excavation.",
    pricingBenchmarks: [
      {
        service: "Hardwood Mulch (Installed)",
        lowRate: 75,
        avgRate: 95,
        highRate: 130,
        unit: "per cu yd",
        notes: "Includes edging beds, delivery, and manual wheelbarrow install",
      },
      {
        service: "Sod Turf Installation",
        lowRate: 1.20,
        avgRate: 1.70,
        highRate: 2.50,
        unit: "per sq ft",
        notes: "Site prep, grading, starter fertilizer, roll and tamp",
      },
      {
        service: "Interlocking Paver Patio (Complete)",
        lowRate: 18,
        avgRate: 26,
        highRate: 42,
        unit: "per sq ft",
        notes: "Excavation, 6-inch gravel base, sand, pavers, polymeric sand",
      },
      {
        service: "Segmental Retaining Wall (<4ft high)",
        lowRate: 28,
        avgRate: 42,
        highRate: 65,
        unit: "per face sq ft",
        notes: "Includes buried footing course, geogrid, and drain tile gravel",
      },
      {
        service: "Skid Steer / Mini-Excavator Grading",
        lowRate: 125,
        avgRate: 175,
        highRate: 250,
        unit: "per machine-hr",
        notes: "Operator, fuel, and mobilization surcharge",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Calculate Volume & Material Quantities Accurately",
        description:
          "Convert square footage and depth to cubic yards for bulk materials (Cubic Yards = Length × Width × Depth in feet ÷ 27). Factor 10-15% compaction loss on soil and gravel.",
      },
      {
        stepNumber: 2,
        title: "Account for Site Access & Equipment Mobilization",
        description:
          "Difficult access (steep inclines, narrow gates, long wheelbarrow hauls) doubles labor hours compared to skid-steer direct dumping.",
      },
      {
        stepNumber: 3,
        title: "Price Materials With Delivery & Nursery Markups",
        description:
          "Mark up wholesale plants and pavers by 35% to 50% to cover transportation, dead plant loss, and handling breakage.",
      },
      {
        stepNumber: 4,
        title: "Specify Client Post-Install Watering Responsibilities",
        description:
          "Clearly stipulate watering protocols for fresh sod and new plants to safeguard your warranty and prevent disputes.",
      },
    ],
    checklist: [
      "Exact material specifications (paver manufacturer/style, mulch color, sod species)",
      "811 Dig Safe utility locate verification prior to any ground breaking",
      "Irrigation, water availability, and homeowner watering requirements",
      "Drainage and surface water slope slope management notes",
      "Milestone payment schedule (50% deposit, progress draw, final sign-off)",
    ],
    faqs: [
      {
        question: "How do US landscapers estimate mulch by the cubic yard?",
        answer:
          "Formula: (Square Footage × Desired Depth in Inches) ÷ 324 = Cubic Yards. For example, 1,000 sq ft at 3 inches deep requires 3,000 ÷ 324 = 9.25 cubic yards. Contractors add 10% for settling and waste.",
      },
      {
        question: "How much does it cost to install a 400 sq ft paver patio?",
        answer:
          "At national average turnkey rates of $22 to $32 per square foot, a 400 sq ft paver patio costs between $8,800 and $12,800, including excavation, aggregate subbase, edge restraints, bedding sand, and polymeric jointing.",
      },
      {
        question: "What margin should landscapers aim for on materials?",
        answer:
          "Contractors typically mark up bulk materials (mulch, topsoil, gravel) by 25% to 35% and nursery plant stock by 40% to 60% to cover warranty replacements and procurement transport time.",
      },
      {
        question: "What is the industry standard warranty on new plants and sod?",
        answer:
          "Most landscapers offer a 90-day to 1-year warranty on nursery shrubs and trees, provided an active automatic irrigation system is installed and maintained. Sod rarely carries a warranty due to homeowner watering neglect.",
      },
      {
        question: "How do you bid hardscape excavation with limited access?",
        answer:
          "If machinery cannot reach the backyard and materials must be manually moved via wheelbarrows, contractors add a 25% to 40% labor multiplier to the standard excavation and gravel base quote.",
      },
    ],
    relatedTrades: ["lawn-care", "pressure-washing", "epoxy-flooring"],
  },
  {
    slug: "epoxy-flooring",
    tradeName: "Epoxy & Polyaspartic Flooring",
    h1: "Free Epoxy Floor Cost Calculator & Bid Template",
    seoTitle: "Epoxy Floor Estimate Template, Garage Coating Quote & Cost Calculator (2026 PDF)",
    seoDescription:
      "Quote garage epoxy, polyaspartic flake systems, and metallic concrete floor coatings with 2026 US per-sq-ft rates and diamond grind prep costs. Instant PDF download.",
    keywords: [
      "epoxy floor estimate template",
      "garage epoxy cost calculator",
      "polyaspartic floor quote template",
      "epoxy coating bid sheet",
      "concrete floor coating estimator",
      "epoxy pricing per square foot",
      "garage floor quote pdf",
    ],
    category: "Flooring & Concrete",
    shortDescription:
      "Diamond grind prep, moisture mitigation epoxy primers, decorative vinyl flake broadcast, and UV-stable polyaspartic topcoats.",
    defaultLineItems: [
      {
        id: "ep-1",
        description: "Mechanical Diamond Grinding Surface Prep (CSP 2-3 Profile & Dust-Free Vacuuming)",
        quantity: 500,
        unit: "sq ft",
        rate: 1.25,
      },
      {
        id: "ep-2",
        description: "High-Solid Deep Penetrating 100% Solids Epoxy Base Coat with Full Flake Broadcast",
        quantity: 500,
        unit: "sq ft",
        rate: 3.40,
      },
      {
        id: "ep-3",
        description: "Crack Chasing, Mender Patching & Expansion Joint Caulking",
        quantity: 45,
        unit: "lin ft",
        rate: 5.5,
      },
      {
        id: "ep-4",
        description: "High-Traffic UV-Stable Polyaspartic Clear Topcoat (Scratch & Chemical Resistant)",
        quantity: 500,
        unit: "sq ft",
        rate: 1.85,
      },
    ],
    defaultTerms:
      "50% deposit required upon booking to allocate resin chemicals. 50% balance due upon project completion. Garage must be completely empty of all vehicles and personal items prior to crew arrival. Foot traffic permitted after 24 hours; vehicle parking permitted after 72 hours.",
    pricingBenchmarks: [
      {
        service: "Full Flake Garage Floor System (Turnkey)",
        lowRate: 4.75,
        avgRate: 6.50,
        highRate: 9.50,
        unit: "per sq ft",
        notes: "Diamond grind prep, 100% solids epoxy base, full flake, polyaspartic topcoat",
      },
      {
        service: "Metallic / Reflective Designer Epoxy",
        lowRate: 7.50,
        avgRate: 10.50,
        highRate: 15.00,
        unit: "per sq ft",
        notes: "Artisan dual-pigment swirls, requires pristine glass-smooth prep",
      },
      {
        service: "Solid Color Commercial Epoxy Coating",
        lowRate: 3.50,
        avgRate: 4.85,
        highRate: 7.00,
        unit: "per sq ft",
        notes: "Warehouses, mechanical rooms, commercial kitchens",
      },
      {
        service: "Moisture Vapor Barrier Epoxy Underlayment",
        lowRate: 1.25,
        avgRate: 1.85,
        highRate: 2.75,
        unit: "per sq ft",
        notes: "Mandatory for concrete slabs exceeding 5 lbs / 1,000 sq ft MVER",
      },
      {
        service: "Polyurea / Polyaspartic 1-Day System",
        lowRate: 6.00,
        avgRate: 7.75,
        highRate: 11.00,
        unit: "per sq ft",
        notes: "Rapid cure formula allowing same-day completion and next-day drive-on",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Test Concrete Moisture & Check Previous Sealers",
        description:
          "Perform a calcium chloride or moisture meter test. Look for curing compounds, oil saturation, or previous failed paints requiring aggressive diamond tooling.",
      },
      {
        stepNumber: 2,
        title: "Calculate Net Slab Square Footage",
        description:
          "Standard US 2-car garages measure 400 to 520 sq ft; 3-car garages span 650 to 900 sq ft. Measure vertical stem walls / baseboards separately.",
      },
      {
        stepNumber: 3,
        title: "Budget Resin Kits, Flake Pounds, and Grinding Segments",
        description:
          "Epoxy coverage varies by slab porosity. Plan 120-150 sq ft per gallon for base coat and 0.15 lbs of color flake per sq ft for full rejection broadcast.",
      },
      {
        stepNumber: 4,
        title: "Itemize Crack Repair & Stem Wall Labor",
        description:
          "Never include crack repair inside the base sq ft price. Itemize joint filling and crack mending per linear foot to protect your gross margin.",
      },
    ],
    checklist: [
      "Surface prep method clearly stated (mechanical diamond grind to CSP 2-3 vs. inferior acid etching)",
      "Moisture testing disclaimer and warranty exclusions for hydrostatic moisture pressure",
      "Empty garage policy (customer responsibility to remove belongings)",
      "Cure schedule instructions (foot traffic vs. vehicle parking timelines)",
      "Warranty terms against delamination, blistering, and UV yellowing",
    ],
    faqs: [
      {
        question: "How much does a typical 2-car garage epoxy floor cost in the US?",
        answer:
          "A standard 450-500 sq ft 2-car garage costs between $2,600 and $3,800 ($5.50-$7.50/sq ft) for a professional commercial-grade multi-layer system with diamond grinding, epoxy base, full flake broadcast, and polyaspartic topcoat.",
      },
      {
        question: "Why is diamond grinding required instead of DIY acid wash?",
        answer:
          "Diamond grinding opens the concrete capillaries to create a Concrete Surface Profile (CSP 2-3) that mechanically locks the resin into the slab. Acid etching fails to remove sealers, leaves moisture, and causes premature hot tire pickup peeling.",
      },
      {
        question: "What is the difference between epoxy and polyaspartic topcoats?",
        answer:
          "Epoxy is an outstanding high-build bonding primer, but it ambers (yellows) under UV sunlight and takes 12-24 hours to cure. Polyaspartic cures in 2-4 hours, is 100% UV stable, and provides 3x higher abrasion and chemical resistance.",
      },
      {
        question: "How do contractors bid stem walls and steps?",
        answer:
          "Vertical stem walls require hand-grinding, thixotropic anti-sag additives in the epoxy, and manual vertical flake throwing. Contractors charge $8 to $15 per linear foot for stem walls up to 6 inches high.",
      },
      {
        question: "What warranty should professional epoxy contractors offer?",
        answer:
          "Top contractors offer a 5-to-15 year warranty (or lifetime limited warranty) against peeling, chipping, and hot-tire delamination, with exclusions for hydrostatic moisture exceeding 5-8 lbs MVER.",
      },
    ],
    relatedTrades: ["pressure-washing", "painting", "handyman"],
  },
  {
    slug: "junk-removal",
    tradeName: "Junk Removal & Hauling",
    h1: "Free Junk Removal Estimate Template & Pricing Generator",
    seoTitle: "Junk Removal Estimate Template, Hauling Quote & Truck Load Calculator (2026 PDF)",
    seoDescription:
      "Quote residential and commercial junk removal jobs by truck volume fractions (1/4, 1/2, full load) and transfer station dump fees. Free printable hauling PDF quote.",
    keywords: [
      "junk removal estimate template",
      "junk hauling quote calculator",
      "truck load pricing estimator",
      "estate cleanout bid template",
      "debris removal quote pdf",
      "junk removal invoice template",
      "how to price junk removal",
    ],
    category: "Hauling & Cleanup",
    shortDescription:
      "Estate cleanouts, furniture hauling, appliance disposal, renovation construction debris, and garage clear-outs.",
    defaultLineItems: [
      {
        id: "jr-1",
        description: "1/2 Truckload Volume (Equivalent to 6-8 Pickup Truck Beds / ~8 Cubic Yards)",
        quantity: 1,
        unit: "load fraction",
        rate: 345.0,
      },
      {
        id: "jr-2",
        description: "Heavy Construction Debris Surcharge (Tile, plaster, sheetrock, masonry)",
        quantity: 1.25,
        unit: "tons",
        rate: 95.0,
      },
      {
        id: "jr-3",
        description: "EPA Certified Freon Appliance Recycling Fee (Refrigerator / Freezer Evacuation)",
        quantity: 1,
        unit: "unit",
        rate: 65.0,
      },
      {
        id: "jr-4",
        description: "Difficult Flight Carry Surcharge (3rd-Floor Walkup without Elevator)",
        quantity: 2,
        unit: "flights",
        rate: 45.0,
      },
    ],
    defaultTerms:
      "Payment due immediately upon loading and final customer walk-around inspection. Pricing based on space occupied in standard 16-foot box truck (approx 2,000 cu ft capacity). Prohibited hazardous materials (paint, chemicals, motor oil, biological waste, asbestos) cannot be loaded under municipal landfill regulations.",
    pricingBenchmarks: [
      {
        service: "Single Heavy Item Minimum Pickup",
        lowRate: 95,
        avgRate: 145,
        highRate: 195,
        unit: "per item",
        notes: "Mattress, sofa, couch, or single armchair curbside",
      },
      {
        service: "1/4 Truckload (Approx 3-4 cu yds)",
        lowRate: 175,
        avgRate: 235,
        highRate: 295,
        unit: "fraction",
        notes: "Light garage decluttering or small bedroom furniture",
      },
      {
        service: "1/2 Truckload (Approx 7-8 cu yds)",
        lowRate: 295,
        avgRate: 375,
        highRate: 460,
        unit: "fraction",
        notes: "Average basement or small apartment cleanout",
      },
      {
        service: "Full 16ft Box Truckload (14-16 cu yds)",
        lowRate: 495,
        avgRate: 645,
        highRate: 850,
        unit: "full load",
        notes: "Whole home move-out or large estate clear-out",
      },
      {
        service: "Transfer Station Tipping Fee (Dense Debris)",
        lowRate: 65,
        avgRate: 95,
        highRate: 145,
        unit: "per ton",
        notes: "Concrete, dirt, roofing shingles, and wet drywall",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Gauge Volume Fractions (Truck Space Occupied)",
        description:
          "Train estimators on standard truck volume cuts: Minimum, 1/8, 1/4, 3/8, 1/2, 5/8, 3/4, 7/8, and Full Truckload.",
      },
      {
        stepNumber: 2,
        title: "Identify Heavy Dense Materials (Bed Load)",
        description:
          "Never price tile, dirt, concrete, or roofing at normal volume rates. Heavy debris maxes out vehicle gross vehicle weight ratings (GVWR) at 1/4 volume.",
      },
      {
        stepNumber: 3,
        title: "Factor In Municipal Landfill Tipping Fees",
        description:
          "Know your local transfer station costs ($70-$120/ton). Add hazardous handling fees for appliances with freon, tires, and electronic e-waste.",
      },
      {
        stepNumber: 4,
        title: "Charge for Labor-Intensive Access (Stairs & Long Carries)",
        description:
          "Add $35-$50 per flight of stairs or long carries over 100 feet to protect crew efficiency and payroll margins.",
      },
    ],
    checklist: [
      "Exact load volume tier and cubic yard estimate",
      "Explicit list of non-accepted hazardous materials (asbestos, wet paint, gasoline, propane tanks)",
      "Special disposal fees (freon appliances, tires, mattress sanitation surcharges)",
      "Access conditions (elevator access, driveway parking permit, flight of stairs count)",
      "Immediate on-site payment terms via mobile card reader or cash",
    ],
    faqs: [
      {
        question: "How do US junk removal companies calculate prices?",
        answer:
          "Pricing is primarily based on the volume of space items occupy in the truck (typically measured in fractions from 1/8 to full load). Secondary factors include weight (dense debris), labor time (stairs, disassembling), and specialty dump fees.",
      },
      {
        question: "What is considered a full truckload in junk removal?",
        answer:
          "A standard professional junk truck has a 12 to 16-foot box with 14 to 18 cubic yards of capacity—roughly equivalent to 6 to 8 standard pickup truck beds filled to the brim.",
      },
      {
        question: "Why do appliances and mattresses cost extra to haul away?",
        answer:
          "Municipal transfer stations charge certified EPA fees ($25-$60) to evacuate freon refrigerant from fridges and AC units, and separate recycling surcharges ($20-$40) for mattress shredding.",
      },
      {
        question: "What is 'bed load' pricing in junk hauling?",
        answer:
          "Bed load refers to extremely dense, heavy materials like soil, concrete, gravel, brick, or tile. Because trucks have legal weight limits, trucks can only be filled 1 to 2 feet deep before hitting weight capacity, so it is billed by weight/ton rather than volume.",
      },
      {
        question: "Can junk removal contractors accept paint and chemicals?",
        answer:
          "Generally no. Commercial hauling permits strictly forbid transporting liquid hazardous materials. Cans of latex paint must be dried out with cat litter or paint hardener before legal disposal.",
      },
    ],
    relatedTrades: ["handyman", "cleaning", "landscaping"],
  },
  {
    slug: "roofing",
    tradeName: "Residential Roofing",
    h1: "Free Roofing Estimate Template & Bid Calculator",
    seoTitle: "Roofing Estimate Template, Roof Replacement Quote & Square Calculator (2026 PDF)",
    seoDescription:
      "Estimate residential shingle roof replacement, tear-off disposal, synthetic underlayment, and drip edge with 2026 US roofing square pricing. Instant contractor PDF quote.",
    keywords: [
      "roofing estimate template",
      "roof replacement quote template pdf",
      "roofing bid calculator per square",
      "shingle roof cost estimator",
      "roofing proposal template",
      "how to estimate a roofing job",
      "contractor roof quote sheet",
    ],
    category: "Exterior Construction",
    shortDescription:
      "Architectural shingles, 3-tab replacement, tear-off disposal, ice & water shield, flashings, and ridge vent ventilation.",
    defaultLineItems: [
      {
        id: "rf-1",
        description: "Tear-off Existing 1-Layer Asphalt Shingles & Haul-Off Disposal",
        quantity: 26,
        unit: "squares (100 sf)",
        rate: 85.0,
      },
      {
        id: "rf-2",
        description: "Owens Corning Duration / GAF Timberline HDZ Architectural Shingles (Labor & Install)",
        quantity: 26,
        unit: "squares (100 sf)",
        rate: 340.0,
      },
      {
        id: "rf-3",
        description: "Self-Adhering Ice & Water Shield Membrane (Eaves, Valleys & Penetrations)",
        quantity: 6,
        unit: "squares",
        rate: 120.0,
      },
      {
        id: "rf-4",
        description: "Continuous Ridge Vent Installation & Matching Hip & Ridge Cap Shingles",
        quantity: 58,
        unit: "lin ft",
        rate: 14.5,
      },
    ],
    defaultTerms:
      "40% deposit upon contract signing to order materials, 40% upon roof tear-off commencement, 20% upon final clean-up and magnetic sweep sign-off. Rotten plywood sheathing replaced at $85 per 4x8 sheet upon discovery. 10-year workmanship warranty and manufacturer limited lifetime warranty transfer.",
    pricingBenchmarks: [
      {
        service: "Architectural Asphalt Shingles (Complete Tear-off & Install)",
        lowRate: 375,
        avgRate: 485,
        highRate: 650,
        unit: "per square (100 sq ft)",
        notes: "Turnkey cost including tear-off, synthetic underlayment, drip edge, and nails",
      },
      {
        service: "Steep Pitch Surcharge (8/12 to 12/12 Pitch)",
        lowRate: 40,
        avgRate: 65,
        highRate: 95,
        unit: "per square",
        notes: "Requires safety harnesses, roof jacks, and slowed crew pace",
      },
      {
        service: "Plywood / OSB Decking Replacement",
        lowRate: 65,
        avgRate: 85,
        highRate: 125,
        unit: "per 4x8 sheet",
        notes: "Replacing rot discovered after old shingle tear-off",
      },
      {
        service: "Standing Seam Metal Roof Installation",
        lowRate: 900,
        avgRate: 1250,
        highRate: 1750,
        unit: "per square",
        notes: "Concealed fasteners, 24-26 gauge steel, 50-year longevity",
      },
      {
        service: "Chimney Flashing & Counter-Flashing Replacement",
        lowRate: 350,
        avgRate: 550,
        highRate: 900,
        unit: "per chimney",
        notes: "Step flashing, counter-flashing ground into masonry mortar joints",
      },
    ],
    biddingSteps: [
      {
        stepNumber: 1,
        title: "Measure Roof Surface Area in 'Squares'",
        description:
          "In roofing, 1 'Square' equals 100 square feet. Use satellite roof reports (EagleView, Roofr) or measure footprint and multiply by pitch factor (e.g., 6/12 pitch = 1.12 multiplier).",
      },
      {
        stepNumber: 2,
        title: "Add Pitch, Valleys, & Waste Percentage",
        description:
          "Add 10% to 15% waste on simple gable roofs; add 15% to 22% waste on complex hip roofs with multiple valleys, dormers, and starter cuts.",
      },
      {
        stepNumber: 3,
        title: "Include Critical Underlayment, Ventilation, & Flashings",
        description:
          "Never cut corners on drip edge, ice & water shield (mandatory in cold climates), step flashing for sidewalls, pipe boots, and ridge vents.",
      },
      {
        stepNumber: 4,
        title: "State Damaged Decking Replacement Terms Upfront",
        description:
          "Specify a per-sheet rate ($75-$100/sheet) for rotten plywood deck boards discovered during tear-off to avoid change-order disputes.",
      },
    ],
    checklist: [
      "Total roof squares, waste factor percentage, and exact shingle manufacturer/model/color",
      "Underlayment type (standard felt vs. heavy-duty synthetic) and ice & water shield footage",
      "Per-sheet cost for rotten plywood sheathing replacement discovered during tear-off",
      "Dumpster placement, driveway protection, landscaping tarping, and magnetic nail sweep",
      "Manufacturer system warranty coverage vs. contractor workmanship warranty",
    ],
    faqs: [
      {
        question: "What is a 'square' in roofing estimates?",
        answer:
          "A roofing 'square' is 100 square feet of roof surface. For example, a 2,500 square foot roof equals 25 squares. Materials like shingles, underlayment, and tear-off labor are virtually always quoted per square.",
      },
      {
        question: "How much does a new roof cost per square in 2026?",
        answer:
          "In 2026, standard architectural asphalt shingles cost between $425 and $550 per square fully installed, including tear-off, dump fees, synthetic felt, ice & water shield, and starter strips. Premium metal roofs range from $900 to $1,500 per square.",
      },
      {
        question: "How do roofers calculate waste percentage?",
        answer:
          "Waste accounts for shingle cuts in valleys, hips, and rakes. Simple gable roofs require a 10% waste factor, while complex roofs with multiple hips, valleys, and dormers require 15% to 20% additional material.",
      },
      {
        question: "Why does roof pitch affect the estimate price?",
        answer:
          "Roofs with a pitch of 8/12 or steeper cannot be walked on without specialized roof jacks, toe boards, and harness ropes. This significantly slows worker speed and increases fall hazard liability, adding $40-$80 per square.",
      },
      {
        question: "What is the magnetic nail sweep guarantee?",
        answer:
          "Roof tear-offs release thousands of steel roofing nails. Professional bids explicitly guarantee using high-powered magnetic rolling sweepers across driveways, walkways, and grass to prevent homeowner tire punctures and pet injuries.",
      },
    ],
    relatedTrades: ["pressure-washing", "epoxy-flooring", "handyman"],
  },
];

export function getTradeBySlug(slug: string): TradeConfig | undefined {
  return TRADES.find((t) => t.slug === slug);
}

export const ALL_TRADE_SLUGS = TRADES.map((t) => t.slug);
