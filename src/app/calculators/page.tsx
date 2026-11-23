import Link from "next/link";
import type { Metadata } from "next";
import { calculators } from "@/lib/calculators";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
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
        {calculators.map((calc) =>
          calc.status === "live" ? (
            <Link
              key={calc.slug}
              href={calc.href}
              className="calc-card"
              style={{ display: "flex", flexDirection: "column", textDecoration: "none", cursor: "pointer" }}
            >
              <span className="calc-card__category">{calc.category}</span>
              <h2 style={{ margin: 0, fontSize: "1.2rem", color: "var(--ink)" }}>{calc.name}</h2>
              <p style={{ color: "var(--muted)" }}>{calc.description}</p>
              <div className="calc-card__meta">
                <span style={{ fontWeight: 700, color: "var(--mint)" }}>Open →</span>
                <span className="badge badge--live">Live</span>
              </div>
            </Link>
          ) : (
            <article key={calc.slug} className="calc-card" style={{ opacity: 0.7 }}>
              <span className="calc-card__category">{calc.category}</span>
              <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{calc.name}</h2>
              <p>{calc.description}</p>
              <div className="calc-card__meta">
                <span>Coming soon</span>
                <span className="badge badge--soon">Soon</span>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
}
