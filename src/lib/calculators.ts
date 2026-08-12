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
    slug: "abv-calculator",
    name: "ABV Calculator",
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
    slug: "dog-bite-compensation-calculator",
    name: "Dog Bite Compensation Calculator",
    shortName: "Dog Bite",
    description:
      "USA dog bite settlement estimator using medical costs, severity multipliers, state liability rules, fault, and insurance limits.",
    keywords: [
      "dog bite compensation calculator",
      "dog bite settlement calculator",
      "dog bite claim value",
      "strict liability dog bite",
    ],
    category: "Legal",
    status: "live",
    href: "/calculators/dog-bite-compensation-calculator",
  },
  {
    slug: "pft-calculator",
    name: "PFT Calculator (GLI-2012)",
    shortName: "PFT",
    description:
      "USA pulmonary function calculator for FEV1, FVC, and FEV1/FVC predicted values, Z-scores, LLN, and obstruction severity using GLI-2012.",
    keywords: [
      "PFT calculator",
      "GLI-2012 calculator",
      "FEV1 predicted",
      "spirometry Z-score",
      "pulmonary function calculator USA",
    ],
    category: "Health",
    status: "live",
    href: "/calculators/pft-calculator",
  },
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    shortName: "BMI",
    description:
      "Body mass index calculator with clear health-range guidance. Coming soon.",
    keywords: ["bmi calculator", "body mass index"],
    category: "Health",
    status: "coming-soon",
    href: "/calculators",
  },
];

export function getCalculator(slug: string) {
  return calculators.find((c) => c.slug === slug);
}

export const liveCalculators = calculators.filter((c) => c.status === "live");
