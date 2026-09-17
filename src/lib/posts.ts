export interface BlogPost {
  href: string;
  title: string;
  excerpt: string;
  meta: string;
}

export const posts: BlogPost[] = [
  {
    href: "/blog/how-to-interpret-pft-gli-2012-usa",
    title: "How to Interpret PFTs with GLI-2012 in the USA",
    excerpt:
      "FEV1, FVC, FEV1/FVC, predicted values, Z-scores, LLN, obstruction severity, and when restriction needs TLC.",
    meta: "Health · PFT Calculator",
  },
  {
    href: "/blog/how-dog-bite-settlements-work-in-the-usa",
    title: "How Dog Bite Settlements Work in the USA",
    excerpt:
      "Economic damages, pain-and-suffering multipliers, strict liability vs one-bite rules, comparative fault, and insurance caps.",
    meta: "Legal · Dog Bite Calculator",
  },
  {
    href: "/blog/how-to-calculate-a-pay-raise",
    title: "How to Calculate a Pay Raise in the USA",
    excerpt:
      "Percentage and dollar raise formulas, hourly-to-salary conversion (40×52), bi-weekly vs semi-monthly, taxes, and inflation.",
    meta: "Finance · Pay Raise Calculator",
  },
  {
    href: "/blog/how-to-calculate-beer-abv",
    title: "How to Calculate Beer ABV from OG and FG",
    excerpt:
      "Step-by-step guide to alcohol by volume: hydrometer readings, standard vs alternate formulas, attenuation, and common mistakes.",
    meta: "Brewing · ABV Calculator",
  },
];
