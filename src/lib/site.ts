export const siteConfig = {
  name: "CalculatorMint",
<<<<<<< HEAD
  tagline: "Free US Contractor Estimate Templates & Bid Calculators",
  description:
    "Build professional, client-ready quotes in 60 seconds with real US trade pricing defaults. Instant PDF download—no signup required.",
=======
  tagline: "Accurate calculators & guides for everyday decisions",
  description:
    "Free online calculators with transparent formulas and comprehensive guides — percentages, discounts, investments, USA pay raises, cubic yards for concrete and mulch, averages, cumulative GPA & middle school grades, travel fuel, business margins, dining tips, and beer ABV.",
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.calculatormint.online",
  locale: "en_US",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "calculatormint@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
