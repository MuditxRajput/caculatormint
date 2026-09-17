import Link from "next/link";
import type { Metadata } from "next";
import { calculators } from "@/lib/calculators";

export const metadata: Metadata = {
  title: "All Calculators",
  description:
    "Browse free CalculatorMint tools — ABV, pay raise, dog bite compensation, and PFT calculators.",
  alternates: { canonical: "/calculators" },
  keywords: [
    "online calculators",
    "free calculators",
    "abv calculator",
    "calculator list",
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
        <h1>All calculators</h1>
        <p>
          Accurate, free tools with transparent formulas for brewing, pay,
          legal estimates, and pulmonary function.
        </p>
      </header>

      <div className="home-calc-grid" style={{ marginBottom: "3rem" }}>
        {tools.map((calc) => (
          <Link key={calc.slug} href={calc.href} className="home-calc">
            <span className="home-calc__cat">{calc.category}</span>
            <strong>{calc.name}</strong>
            <span className="home-calc__teaser">{calc.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
