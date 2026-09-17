import Link from "next/link";
import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { calculators } from "@/lib/calculators";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Accurate Online Calculators",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const teasers: Record<string, string> = {
  "abv-calculator": "Beer ABV from original and final gravity.",
  "pay-raise-calculator": "Salary or hourly raise, U.S. pay schedules included.",
  "dog-bite-compensation-calculator":
    "Educational settlement range from medical costs and state rules.",
  "pft-calculator": "FEV1, FVC, Z-scores, and LLN using GLI-2012.",
};

export default function HomePage() {
  const tools = calculators.filter((c) => c.status === "live");

  return (
    <div className="home">
      <section className="hero">
        <div className="container hero__inner">
          <p className="hero__eyebrow">Free online calculators</p>
          <h1>Clear math. Honest formulas. No clutter.</h1>
          <p className="hero__support">
            Pay raises, brewing ABV, dog bite estimates, and spirometry — each
            tool shows how the result is calculated.
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
      </section>

      <section className="section" id="calculators">
        <div className="container">
          <div className="section__head">
            <div>
              <h2 className="section__title">Calculators</h2>
              <p className="section__lead">Pick a tool. Open it. Get a result.</p>
            </div>
            <Link href="/calculators" className="section__more">
              All calculators
            </Link>
          </div>

          <div className="home-calc-grid">
            {tools.map((calc) => (
              <Link key={calc.slug} href={calc.href} className="home-calc">
                <span className="home-calc__cat">{calc.category}</span>
                <strong>{calc.name}</strong>
                <span className="home-calc__teaser">
                  {teasers[calc.slug] ?? calc.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--guides" id="guides">
        <div className="container">
          <div className="section__head">
            <div>
              <h2 className="section__title">Guides</h2>
              <p className="section__lead">
                Short articles behind each calculator.
              </p>
            </div>
            <Link href="/blog" className="section__more">
              All guides
            </Link>
          </div>
          <BlogList posts={posts} compact />
        </div>
      </section>
    </div>
  );
}
