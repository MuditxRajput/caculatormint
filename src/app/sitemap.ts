import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { TRADES } from "@/data/trades";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core high-intent pages
  const coreRoutes: {
    path: string;
    priority: number;
    changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/estimate-templates", priority: 0.95, changeFrequency: "daily" },
    { path: "/cubic-yard-calculator", priority: 0.9, changeFrequency: "weekly" },
    { path: "/profit-margin-calculator", priority: 0.9, changeFrequency: "weekly" },
  ];

  // Dynamic 10 trade estimate templates
  const tradeRoutes = TRADES.map((trade) => ({
    path: `/estimate-template/${trade.slug}`,
    priority: 0.9,
    changeFrequency: "weekly" as const,
  }));

  // Informational / Legal
  const standardPages: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
  }[] = [
    { path: "/about", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" },
  ];

  const allPaths = [...coreRoutes, ...tradeRoutes, ...standardPages];

  return allPaths.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
