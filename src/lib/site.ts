export const siteConfig = {
  name: "CalculatorMint",
  tagline: "Accurate calculators for everyday decisions",
  description:
    "Free online calculators with clear formulas and SEO guides — ABV, USA pay raise, dog bite compensation, and more tools built for accuracy and search visibility.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.calculatormint.online",
  locale: "en_US",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "postsyncs@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
