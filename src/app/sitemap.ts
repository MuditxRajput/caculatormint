import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/calculators", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/percentage-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/discount-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/pay-raise-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/compound-interest-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/tip-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/fuel-cost-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/margin-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/abv-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog/how-to-calculate-percentages", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/how-to-calculate-discounts", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/how-to-calculate-a-pay-raise", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/how-to-calculate-compound-interest", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/how-to-calculate-tips", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/how-to-calculate-fuel-cost", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/how-to-calculate-margin-and-markup", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/how-to-calculate-beer-abv", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/dmca", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/cookies-policy", priority: 0.5, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.5, changeFrequency: "yearly" },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
