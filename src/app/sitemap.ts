import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/calculators", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/abv-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/calculators/pay-raise-calculator", priority: 0.9, changeFrequency: "weekly" },
    {
      path: "/calculators/dog-bite-compensation-calculator",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    { path: "/calculators/pft-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/blog/how-to-calculate-beer-abv", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog/how-to-calculate-a-pay-raise", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/blog/how-dog-bite-settlements-work-in-the-usa",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      path: "/blog/how-to-interpret-pft-gli-2012-usa",
      priority: 0.8,
      changeFrequency: "monthly",
    },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.4, changeFrequency: "yearly" },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
