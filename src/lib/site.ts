export const siteConfig = {
  name: "CalculatorMint",
  tagline: "Free Contractor Estimate Templates, Bid Calculators & PDF Quote Generator",
  description:
    "Create free, client-ready contractor estimates, job quotes, and bid sheets in 60 seconds with 2026 US trade pricing defaults. Instant PDF quote generator with profit margin & cubic yard calculators—no signup required.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.calculatormint.online",
  locale: "en_US",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "postsyncs@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
