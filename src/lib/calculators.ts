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
  {
    slug: "cubic-yard-calculator",
    name: "Cubic Yard Calculator",
    shortName: "Cubic Yard",
    description:
      "Calculate cubic yards (yd³) for concrete slabs, footings, landscaping mulch, topsoil, gravel, and sand with waste buffers and bag conversions.",
    keywords: [
      "cubic yard calculator",
      "concrete calculator yards",
      "mulch calculator cubic yards",
      "gravel calculator cubic yards",
      "how many cubic yards",
      "yards of concrete calculator",
    ],
    category: "Construction",
    status: "live",
    href: "/calculators/cubic-yard-calculator",
  },
  {
    slug: "average-calculator",
    name: "Average Calculator",
    shortName: "Average",
    description:
      "Calculate simple arithmetic mean, weighted averages, course grades with final exam targets, and chemistry average atomic mass.",
    keywords: [
      "average calculator",
      "grade average calculator",
      "how can i calculate the average",
      "how to calculate average",
      "weighted average calculator",
      "average grade calculator",
      "how do i calculate average atomic mass",
      "how to calculate average atomic mass",
    ],
    category: "Math",
    status: "live",
    href: "/calculators/average-calculator",
  },
  {
    slug: "grade-calculator",
    name: "Grade Average Calculator",
    shortName: "Grade Average",
    description:
      "Calculate weighted course grade averages and solve the exact score needed on your final exam to achieve an A, B, or C.",
    keywords: [
      "grade average calculator",
      "average grade calculator",
      "grade calculator",
      "final grade calculator",
      "weighted grade calculator",
      "calculate grade average",
      "how to calculate grade average",
    ],
    category: "Education",
    status: "live",
    href: "/calculators/grade-calculator",
  },
  {
    slug: "weighted-average-calculator",
    name: "Weighted Average Calculator",
    shortName: "Weighted Average",
    description:
      "Calculate weighted arithmetic means for stock dollar-cost averaging, investment portfolios, inventory, and statistical datasets.",
    keywords: [
      "weighted average calculator",
      "calculate weighted average",
      "how to calculate weighted average",
      "weighted mean calculator",
      "weighted average formula",
    ],
    category: "Finance",
    status: "live",
    href: "/calculators/weighted-average-calculator",
  },
  {
    slug: "cumulative-gpa-calculator",
    name: "Cumulative GPA Calculator",
    shortName: "Cumulative GPA",
    description:
      "Calculate your updated cumulative GPA for college or high school by combining prior transcript credits with current semester grades.",
    keywords: [
      "cumulative gpa calculator",
      "calculate cumulative gpa",
      "cumulative gpa calculator college",
      "cumulative gpa calculator high school",
      "how to calculate cumulative gpa",
      "overall gpa calculator",
      "gpa calculator with prior credits",
    ],
    category: "Education",
    status: "live",
    href: "/calculators/cumulative-gpa-calculator",
  },
  {
    slug: "gpa-calculator-for-middle-schoolers",
    name: "GPA Calculator for Middle Schoolers",
    shortName: "Middle School GPA",
    description:
      "Kid-friendly GPA calculator for 6th, 7th, and 8th graders in USA and Canada. Calculate report card GPA and check Honor Roll eligibility.",
    keywords: [
      "gpa calculator for middle schoolers",
      "middle school gpa calculator",
      "how to calculate middle school gpa",
      "6th grade gpa calculator",
      "7th grade gpa calculator",
      "8th grade gpa calculator",
      "middle school honor roll gpa",
    ],
    category: "Education",
    status: "live",
    href: "/calculators/gpa-calculator-for-middle-schoolers",
  },
];

export function getCalculator(slug: string) {
  return calculators.find((c) => c.slug === slug);
}

export const liveCalculators = calculators.filter((c) => c.status === "live");
