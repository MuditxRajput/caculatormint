export type CalculatorStatus = "live" | "coming-soon";

export interface CalculatorMeta {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  keywords: string[];
  category: string;
  status: CalculatorStatus;
  href: string;
}

export const calculators: CalculatorMeta[] = [
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    shortName: "Percentage",
    description:
      "Find X% of Y, calculate percentage ratios, compute percent increase/decrease, and solve sales tax or discounts with step-by-step formulas.",
    keywords: [
      "percentage calculator",
      "percent change calculator",
      "calculate percentage",
      "percent increase calculator",
      "percentage difference",
    ],
    category: "Math",
    status: "live",
    href: "/calculators/percentage-calculator",
  },
  {
    slug: "pay-raise-calculator",
    name: "Pay Raise Calculator",
    shortName: "Pay Raise",
    description:
      "USA salary and hourly raise calculator. Convert across hourly, bi-weekly, semi-monthly, and annual pay with inflation and estimated take-home.",
    keywords: [
      "pay raise calculator",
      "salary increase calculator",
      "raise calculator USA",
      "hourly raise calculator",
    ],
    category: "Finance",
    status: "live",
    href: "/calculators/pay-raise-calculator",
  },
  {
    slug: "tip-calculator",
    name: "Tip & Bill Split Calculator",
    shortName: "Tip Split",
    description:
      "Calculate custom dining tips (15%, 18%, 20%, 25%), split restaurant checks evenly across groups, and round up totals cleanly.",
    keywords: [
      "tip calculator",
      "bill split calculator",
      "restaurant tip calculator",
      "split check calculator",
      "calculate tip",
    ],
    category: "Dining",
    status: "live",
    href: "/calculators/tip-calculator",
  },
  {
    slug: "abv-calculator",
    name: "Beer ABV Calculator",
    shortName: "ABV",
    description:
      "Calculate beer alcohol by volume from original and final gravity. Supports SG and Plato, standard and alternate formulas, attenuation, and calories.",
    keywords: [
      "abv calculator",
      "alcohol by volume calculator",
      "beer abv calculator",
      "og fg calculator",
      "homebrew abv",
    ],
    category: "Brewing",
    status: "live",
    href: "/calculators/abv-calculator",
  },
  {
    slug: "discount-calculator",
    name: "Discount & Sale Price Calculator",
    shortName: "Discount",
    description:
      "Calculate sale prices, percentage discounts, clearance 'extra % off' stackable coupons, and post-discount sales tax with instant savings summaries.",
    keywords: [
      "discount calculator",
      "sale price calculator",
      "calculate percentage off",
      "clearance coupon calculator",
      "double discount calculator",
    ],
    category: "Shopping",
    status: "live",
    href: "/calculators/discount-calculator",
  },
  {
    slug: "compound-interest-calculator",
    name: "Compound Interest Calculator",
    shortName: "Compound Interest",
    description:
      "Model exponential savings growth with starting balances, monthly deposits, compounding schedules (annual, monthly, daily), and milestone projections.",
    keywords: [
      "compound interest calculator",
      "investment growth calculator",
      "savings interest calculator",
      "future value calculator",
      "compound interest formula",
    ],
    category: "Finance",
    status: "live",
    href: "/calculators/compound-interest-calculator",
  },
  {
    slug: "fuel-cost-calculator",
    name: "Fuel Cost & Road Trip Gas Calculator",
    shortName: "Fuel Cost",
    description:
      "Estimate road trip fuel expenses, gallons/liters required, cost per mile, and fair per-person gas shares. Supports US MPG and Metric L/100km.",
    keywords: [
      "fuel cost calculator",
      "gas trip calculator",
      "road trip gas cost",
      "calculate fuel cost",
      "split gas money calculator",
    ],
    category: "Travel",
    status: "live",
    href: "/calculators/fuel-cost-calculator",
  },
  {
    slug: "margin-calculator",
    name: "Profit Margin & Markup Calculator",
    shortName: "Margin & Markup",
    description:
      "Calculate gross margin, percentage markup, and retail selling prices. Bidirectional formulas clarify the crucial difference between margin and markup.",
    keywords: [
      "margin calculator",
      "markup calculator",
      "gross profit margin calculator",
      "margin vs markup",
      "profit markup formula",
    ],
    category: "Business",
    status: "live",
    href: "/calculators/margin-calculator",
  },
];

export function getCalculator(slug: string) {
  return calculators.find((c) => c.slug === slug);
}

export const liveCalculators = calculators.filter((c) => c.status === "live");
