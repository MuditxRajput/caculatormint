import Link from "next/link";
import type { Metadata } from "next";
import { calculators } from "@/lib/calculators";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "All Online Calculators — Accurate & Free Mathematical Tools",
  description:
    "Browse free CalculatorMint tools — Percentage calculations, discount savings, USA pay raise, compound interest, dining tips, fuel costs, profit margins, and beer ABV.",
  alternates: { canonical: "/calculators" },
  keywords: [
    "online calculators",
    "free calculators",
    "percentage calculator",
    "discount calculator",
    "compound interest calculator",
    "fuel cost calculator",
    "margin markup calculator",
    "pay raise calculator",
    "tip calculator",
    "abv calculator",
    "calculator directory",
  ],
};

export default function CalculatorsPage() {
  const tools = calculators.filter((c) => c.status === "live");

  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Calculators</span>
        </nav>
        <span className="page-hero__badge">Verified Mathematical Tools</span>
        <h1>All Calculators</h1>
        <p>
          Accurate, instant online calculators with transparent formulas for
          percentages, discounts, investments, payroll compensation, travel fuel,
          business margins, dining gratuities, and brewing science.
        </p>
      </header>

      {/* Top Leaderboard Ad Slot */}
      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <div className="calculators-grid">
        {tools.map((calc) => (
          <article key={calc.slug} className="calc-card-premium">
            <div className="calc-card-premium__header">
              <span className="calc-card-premium__cat">{calc.category}</span>
              <span className="badge badge--live">Verified</span>
            </div>
            <h2 className="calc-card-premium__title">
              <Link href={calc.href}>{calc.name}</Link>
            </h2>
            <p className="calc-card-premium__desc">{calc.description}</p>
            <div className="calc-card-premium__footer">
              <Link href={calc.href} className="calc-card-premium__btn">
                <span>Launch Calculator</span>
                <span className="calc-card-premium__arrow">&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Ad Slot */}
      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
