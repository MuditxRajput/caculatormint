import Link from "next/link";
import type { Metadata } from "next";
import { calculators } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "All Calculators",
  description:
    "Browse free CalculatorMint tools — ABV calculator live now, with more accurate calculators coming soon.",
  alternates: { canonical: "/calculators" },
  keywords: [
    "online calculators",
    "free calculators",
    "abv calculator",
    "calculator list",
  ],
};

export default function CalculatorsPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Calculators</span>
        </nav>
        <h1>All calculators</h1>
        <p>
          Accurate, free tools with transparent formulas. Start with brewing ABV
          — more calculators are on the way.
        </p>
      </header>

      <div className="calc-grid" style={{ marginBottom: "3rem" }}>
        {calculators.map((calc) => (
          <article key={calc.slug} className="calc-card">
            <span className="calc-card__category">{calc.category}</span>
            <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{calc.name}</h2>
            <p>{calc.description}</p>
            <div className="calc-card__meta">
              {calc.status === "live" ? (
                <Link href={calc.href}>Open →</Link>
              ) : (
                <span>Coming soon</span>
              )}
              <span
                className={`badge ${
                  calc.status === "live" ? "badge--live" : "badge--soon"
                }`}
              >
                {calc.status === "live" ? "Live" : "Soon"}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
