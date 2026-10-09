export const siteConfig = {
  name: "CalculatorMint",
  tagline: "Accurate calculators & guides for everyday decisions",
  description:
    "Free online calculators with transparent formulas and comprehensive guides — percentages, discounts, investments, USA pay raises, travel fuel, business margins, dining tips, and beer ABV.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.calculatormint.online",
  locale: "en_US",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "calculatormint@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
