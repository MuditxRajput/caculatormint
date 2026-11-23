export const siteConfig = {
  name: "CalculatorMint",
  tagline: "Free US Contractor Estimate Templates & Bid Calculators",
  description:
    "Build professional, client-ready quotes in 60 seconds with real US trade pricing defaults. Instant PDF download—no signup required.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.calculatormint.online",
  locale: "en_US",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "postsyncs@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
