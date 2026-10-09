export interface BlogPost {
  href: string;
  title: string;
  excerpt: string;
  meta: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  tags: string[];
}

export const posts: BlogPost[] = [
  {
    href: "/blog/how-to-calculate-percentages",
    title: "How to Calculate Percentages: Formulas, Percentage Change & Common Traps",
    excerpt:
      "A comprehensive math guide explaining how to calculate percentages, percentage increase or decrease, the critical difference between percent and percentage points, and shopping math.",
    meta: "Math · Percentage Calculator",
    category: "Math & Analytics",
    date: "October 9, 2026",
    readTime: "6 min read",
    author: "CalculatorMint Editorial",
    featured: true,
    tags: ["Percentages", "Formulas", "Mental Math", "Discounts"],
  },
  {
    href: "/blog/how-to-calculate-a-pay-raise",
    title: "How to Calculate a Pay Raise in the USA: Formulas, Taxes & Hidden Traps",
    excerpt:
      "Percentage and dollar raise formulas, hourly-to-salary conversion (40×52), bi-weekly vs semi-monthly paycheck differences, inflation erosion, and take-home tax realities.",
    meta: "Finance · Pay Raise Calculator",
    category: "Finance & Career",
    date: "September 24, 2026",
    readTime: "7 min read",
    author: "CalculatorMint Editorial",
    featured: false,
    tags: ["Salary", "Paycheck", "Career Growth", "Taxes"],
  },
  {
    href: "/blog/how-to-calculate-tips",
    title: "How to Calculate Tips and Split Bills Fairly: Complete Etiquette & Math Guide",
    excerpt:
      "A comprehensive tipping walkthrough: pre-tax vs post-tax calculation, mental math shortcuts, auto-gratuity for large parties, delivery tipping norms, and group bill splitting.",
    meta: "Dining · Tip Calculator",
    category: "Dining & Math",
    date: "October 9, 2026",
    readTime: "6 min read",
    author: "CalculatorMint Editorial",
    featured: false,
    tags: ["Tipping", "Restaurants", "Bill Splitting", "Etiquette"],
  },
  {
    href: "/blog/how-to-calculate-beer-abv",
    title: "How to Calculate Beer ABV from OG and FG: Complete Guide & Formulas",
    excerpt:
      "Step-by-step guide to calculating alcohol by volume: hydrometer specifics, standard vs Hall alternate formulas for high-gravity worts, apparent attenuation, and common calibration traps.",
    meta: "Brewing · ABV Calculator",
    category: "Brewing Science",
    date: "August 30, 2026",
    readTime: "6 min read",
    author: "CalculatorMint Editorial",
    featured: false,
    tags: ["Brewing", "Specific Gravity", "Fermentation", "Homebrew"],
  },
  {
    href: "/blog/how-to-calculate-discounts",
    title: "How to Calculate Discounts & Sale Prices: Formulas, Extra Off & Sales Tax",
    excerpt:
      "A comprehensive walkthrough of retail discount math: complement percentage shortcuts, clearance 'extra % off' stackable coupons, reverse markdowns, and sales tax.",
    meta: "Shopping · Discount Calculator",
    category: "Shopping & Math",
    date: "October 9, 2026",
    readTime: "6 min read",
    author: "CalculatorMint Editorial",
    featured: false,
    tags: ["Discounts", "Sale Price", "Coupons", "Shopping"],
  },
  {
    href: "/blog/how-to-calculate-compound-interest",
    title: "How Compound Interest Works: Formulas, APY vs APR & the Rule of 72",
    excerpt:
      "Understand the mechanics of compound interest: lump-sum formulas, monthly annuity additions, compounding schedules (monthly vs daily), and the Rule of 72.",
    meta: "Finance · Compound Interest",
    category: "Finance & Math",
    date: "October 9, 2026",
    readTime: "7 min read",
    author: "CalculatorMint Editorial",
    featured: false,
    tags: ["Interest", "Investing", "Savings", "Wealth"],
  },
  {
    href: "/blog/how-to-calculate-fuel-cost",
    title: "How to Calculate Fuel Cost for a Road Trip: Formulas, MPG & Split Costs",
    excerpt:
      "Accurately budget road trip fuel expenses: MPG to volume equations, Metric L/100km conversions, real-world highway variables, and fair passenger gas splitting.",
    meta: "Travel · Fuel Calculator",
    category: "Travel & Auto",
    date: "October 9, 2026",
    readTime: "6 min read",
    author: "CalculatorMint Editorial",
    featured: false,
    tags: ["Road Trip", "Fuel Cost", "MPG", "Travel"],
  },
  {
    href: "/blog/how-to-calculate-margin-and-markup",
    title: "Markup vs Margin: Key Differences, Conversion Formulas & Business Math",
    excerpt:
      "Demystify pricing mathematics: why margin is based on revenue while markup is based on cost, the dangerous 50% retail trap, and bidirectional conversion formulas.",
    meta: "Business · Margin Calculator",
    category: "Business & Math",
    date: "October 9, 2026",
    readTime: "7 min read",
    author: "CalculatorMint Editorial",
    featured: false,
    tags: ["Profit Margin", "Markup", "Pricing", "Retail"],
  },
];
