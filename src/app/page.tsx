import Link from "next/link";
import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { AdSlot } from "@/components/AdSlot";
import { calculators } from "@/lib/calculators";
import { posts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Accurate Online Calculators — Percentage, Pay Raise & Everyday Math",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const teasers: Record<string, string> = {
  "percentage-calculator":
    "Calculate X% of Y, percent increase/decrease, ratios, and sales tax or retail discounts.",
  "discount-calculator":
    "Calculate sale prices, stackable clearance coupons ('extra % off'), and sales tax.",
  "pay-raise-calculator":
    "Salary or hourly raise across all U.S. pay frequencies with inflation and take-home impact.",
  "compound-interest-calculator":
    "Model exponential savings growth with monthly deposits and compounding milestones.",
  "tip-calculator":
    "Calculate dining tips (15%, 18%, 20%, 25%), split restaurant checks, and round up totals.",
  "fuel-cost-calculator":
    "Estimate road trip fuel expenses, gallons/liters needed, and per-passenger gas shares.",
  "margin-calculator":
    "Calculate gross margin, percentage markup, and retail selling prices with conversion formulas.",
  "abv-calculator":
    "Beer alcohol by volume from OG & FG. Supports SG, Plato, calories, and attenuation.",
};

export default function HomePage() {
  const tools = calculators.filter((c) => c.status === "live");

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span>Accurate &amp; Free Mathematical Tools</span>
          </div>
          <h1>
            Clear Math. <span className="hero__highlight">Honest Formulas.</span> Zero Clutter.
          </h1>
          <p className="hero__support">
            Everyday percentages, retail discounts, USA paycheck raises, compound interest,
            travel fuel, business margins, dining gratuities, and brewing ABV —
            transparent equations paired with in-depth educational guides.
          </p>
          <div className="hero__actions">
            <Link href="/calculators" className="button button--primary">
              Explore Live Calculators &rarr;
            </Link>
            <Link href="/blog" className="button button--ghost">
              Read Research &amp; Guides
            </Link>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>100% Free</strong>
              <span>No accounts or paywalls</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>Client-Side</strong>
              <span>Private browser calculations</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>Open Formulas</strong>
              <span>Clear mathematical equations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Ad Slot below Hero */}
      <div className="container">
        <div className="ad-container ad-container--hero-bottom">
          <AdSlot format="leaderboard" label="Advertisement" />
        </div>
      </div>

      {/* Live Calculators Section */}
      <section className="section" id="calculators">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="section__eyebrow">Interactive Utilities</p>
              <h2 className="section__title">Verified Online Calculators</h2>
              <p className="section__lead">
                Select a tool below to calculate instant results with full equation visibility.
              </p>
            </div>
            <Link href="/calculators" className="section__more">
              View all tools &rarr;
            </Link>
          </div>

          <div className="home-calc-grid">
            {tools.map((calc) => (
              <Link key={calc.slug} href={calc.href} className="home-calc">
                <div className="home-calc__head">
                  <span className="home-calc__cat">{calc.category}</span>
                  <span className="badge badge--live">Verified</span>
                </div>
                <strong>{calc.name}</strong>
                <span className="home-calc__teaser">
                  {teasers[calc.slug] ?? calc.description}
                </span>
                <span className="home-calc__cta">Open Calculator &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page Ad Slot between Calculators and Guides */}
      <div className="container">
        <div className="ad-container ad-container--mid">
          <AdSlot format="horizontal" label="Advertisement" />
        </div>
      </div>

      {/* Editorial Guides & Blog Section */}
      <section className="section section--guides" id="guides">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="section__eyebrow">The CalculatorMint Blog</p>
              <h2 className="section__title">Research &amp; Mathematical Guides</h2>
              <p className="section__lead">
                Explore in-depth articles unpacking the math, payroll mechanics, and everyday formulas behind our calculators.
              </p>
            </div>
            <Link href="/blog" className="section__more">
              Browse all blog articles &rarr;
            </Link>
          </div>
          <BlogList posts={posts} compact />
        </div>
      </section>

      {/* Pre-Footer Ad Slot */}
      <div className="container">
        <div className="ad-container ad-container--bottom">
          <AdSlot format="horizontal" label="Advertisement" />
        </div>
      </div>
    </div>
  );
}
