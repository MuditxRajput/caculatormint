import Link from "next/link";
import type { Metadata } from "next";
import { calculators } from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Accurate Online Calculators",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <h1 className="hero__brand">{siteConfig.name}</h1>
            <p className="hero__headline">
              A marketplace of accurate calculators people actually use.
            </p>
            <p className="hero__support">
              Fast, accurate tools with clear results — pay raises, dog bite
              estimates, brewing ABV, and more.
            </p>
            <div className="hero__actions">
              <Link href="/calculators" className="button button--primary">
                Browse calculators
              </Link>
              <Link href="/blog" className="button button--ghost">
                Read guides
              </Link>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-copy">
              <strong>Clear answers</strong>
              <span>Inputs on the left · results that stand out</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section__eyebrow">Calculator marketplace</p>
          <h2 className="section__title">Pick a calculator</h2>
          <p className="section__lead">
            Every tool gets accurate math first, then a dedicated guide so people
            searching Google can find — and trust — CalculatorMint.
          </p>
          <div className="calc-grid">
            {calculators.map((calc) => (
              <article key={calc.slug} className="calc-card">
                <span className="calc-card__category">{calc.category}</span>
                <h3>{calc.name}</h3>
                <p>{calc.description}</p>
                <div className="calc-card__meta">
                  {calc.status === "live" ? (
                    <Link href={calc.href}>Use calculator →</Link>
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
      </section>

      <section className="section">
        <div className="container content-stack">
          <div className="prose-panel">
            <h2>Built to rank — and to calculate correctly</h2>
            <p>
              CalculatorMint pairs each tool with keyword-focused content:
              definitions, formulas, FAQs, and how-to guides. Live now:{" "}
              <Link href="/calculators/abv-calculator">ABV</Link>,{" "}
              <Link href="/calculators/pay-raise-calculator">pay raise</Link>, and{" "}
              <Link href="/calculators/dog-bite-compensation-calculator">
                dog bite compensation
              </Link>
              .
            </p>
            <p>
              More everyday calculators are on the way — each with its own ranking
              page and blog support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
