import type { Metadata } from "next";
<<<<<<< HEAD
import Link from "next/link";
=======
import { BlogList } from "@/components/BlogList";
import { AdSlot } from "@/components/AdSlot";
import { calculators } from "@/lib/calculators";
import { posts } from "@/lib/posts";
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
import { siteConfig } from "@/lib/site";
import { TRADES } from "@/data/trades";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Free US Contractor Estimate Templates & Bid Calculators",
  description:
    "Build professional, client-ready quotes in 60 seconds with real US trade pricing defaults. Instant PDF download—no signup required.",
=======
  title: "Free Accurate Online Calculators — Percentage, Pay Raise & Everyday Math",
  description: siteConfig.description,
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free US Contractor Estimate Templates & Bid Calculators | CalculatorMint",
    description:
      "Build professional, client-ready quotes in 60 seconds with real US trade pricing defaults. Instant PDF download—no signup required.",
    url: siteConfig.url,
  },
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
  "cubic-yard-calculator":
    "Calculate cubic yards (yd³) for concrete slabs, mulch beds, topsoil, and gravel with waste buffers.",
  "average-calculator":
    "Calculate simple arithmetic mean, weighted averages, course grades with final targets, and chemistry atomic mass.",
  "grade-calculator":
    "Calculate weighted course grades and solve the exact score needed on your final exam for an A, B, or C.",
  "weighted-average-calculator":
    "Calculate weighted arithmetic means for stock dollar-cost averaging, portfolios, and statistical datasets.",
  "cumulative-gpa-calculator":
    "Calculate updated cumulative GPA for college or high school with prior credits and graduation planning.",
  "gpa-calculator-for-middle-schoolers":
    "Calculate 6th, 7th, and 8th-grade report card GPA and check Honor Roll eligibility for USA and Canada.",
};

export default function HomePage() {
<<<<<<< HEAD
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteConfig.url}/estimate-templates?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "CalculatorMint Contractor Estimate & Bid Generator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Free contractor estimate templates and bid calculators for painting, roofing, plumbing, electrical, landscaping, HVAC, and carpentry.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Are these contractor estimate templates 100% free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all 10 trade templates, bid formulas, and vector PDF exports are 100% free with no account creation or credit card required.",
          },
        },
        {
          "@type": "Question",
          name: "How do I calculate a profitable contractor markup vs profit margin?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the formula Selling Price = Job Cost ÷ (1 - Margin Decimal). For example, a 30% margin on a $1,000 cost job requires a 42.86% markup ($1,428.57 selling price).",
          },
        },
        {
          "@type": "Question",
          name: "Can I download and email PDF quotes directly to clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, clicking Download Vector PDF generates an itemized, client-ready estimate with your business name, client details, payment terms, and signature lines.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/40 to-slate-50/80">
        <div className="container text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-semibold mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>2026 US Trade Pricing Defaults • Zero Signup Required</span>
          </div>

          {/* Hero H1 */}
          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            Free US Contractor Estimate Templates & Bid Calculators
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Build professional, client-ready quotes in 60 seconds with real US trade pricing defaults. Instant PDF download—no signup required.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="#trade-templates"
              style={{ color: "#ffffff", backgroundColor: "#059669" }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 !text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition-all cursor-pointer inline-flex items-center justify-center text-center gap-2"
            >
              <span style={{ color: "#ffffff" }} className="!text-white font-bold">Choose Your Trade Below</span>
              <span style={{ color: "#ffffff" }} className="!text-white font-bold">↓</span>
            </a>
            <Link
              href="/profit-margin-calculator"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 font-bold text-sm transition-all cursor-pointer inline-flex items-center justify-center text-center shadow-xs"
            >
              Check Profit Margin Formula
            </Link>
          </div>

          {/* Trust bullets */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-slate-600 font-mono">
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-emerald-600 font-black">✓</span>
              <span>10 US Trade Presets</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-emerald-600 font-black">✓</span>
              <span>Vector PDF Export</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-emerald-600 font-black">✓</span>
              <span>Contract Terms Built-in</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-emerald-600 font-black">✓</span>
              <span>100% Free / No Login</span>
=======
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
            cubic yards for concrete &amp; mulch, travel fuel, business margins, and dining gratuities —
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
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* 3-STEP QUICK-START ONBOARDING BAR */}
      <section className="bg-white py-10 border-b border-slate-200">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                1
              </span>
              <div>
                <p className="font-bold text-xs text-slate-950">Pick Your Trade</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Select your trade below to load verified 2026 US labor and supply rates.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                2
              </span>
              <div>
                <p className="font-bold text-xs text-slate-950">Enter Scope & Details</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Adjust quantities, square footage, customer address, and contract terms.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50/80 border border-slate-200/80">
              <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                3
              </span>
              <div>
                <p className="font-bold text-xs text-slate-950">Download Clean PDF</p>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Export an itemized vector PDF ready for client signature—100% free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 US TRADE ESTIMATE TEMPLATES GRID */}
      <section id="trade-templates" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono">
                Ready-to-Use Bidding Tools
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
                Select Your Trade Estimate Template
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Pre-filled with realistic US labor rates, material formulas, line items, and payment terms.
              </p>
            </div>

            <Link
              href="/estimate-templates"
              className="text-xs font-bold text-slate-900 hover:text-emerald-700 whitespace-nowrap flex items-center gap-1 underline underline-offset-4 transition"
            >
              Explore Full Trade Hub <span>→</span>
            </Link>
          </div>

          {/* 10 Trades Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRADES.map((trade, idx) => (
              <Link
                key={trade.slug}
                href={`/estimate-template/${trade.slug}`}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/5 transition-all group cursor-pointer block"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 uppercase tracking-wider font-mono">
                      {trade.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 group-hover:text-emerald-700 transition">
                    {trade.tradeName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                    {trade.shortDescription}
                  </p>

                  {/* Benchmark pill */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400">2026 Avg Rate:</span>
                    <span className="font-mono font-bold text-slate-900">
                      ${trade.pricingBenchmarks[0].avgRate}{" "}
                      <span className="text-[10px] text-slate-400 font-sans font-normal">
                        {trade.pricingBenchmarks[0].unit}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700 group-hover:text-emerald-600 group-hover:underline flex items-center gap-1">
                    Open Estimate Builder <span>→</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Vector PDF
                  </span>
                </div>
=======
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
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
              </Link>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* SECONDARY SECTION: CONTRACTOR MATH TOOLS */}
      <section id="contractor-math" className="py-16 sm:py-20 border-b border-slate-200">
        <div className="container">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono">
              Secondary Precision Calculators
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mt-1">
              Contractor Math Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Critical math shortcuts to calculate exact job material volumes and protect your business bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tool 1: Cubic Yard Calculator */}
            <Link
              href="/cubic-yard-calculator"
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/5 transition-all group cursor-pointer block"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    Volume & Material Weight
                  </span>
                  <span className="text-xs font-mono text-slate-400">L × W × D ÷ 27</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-emerald-700 transition">
                  Cubic Yard Calculator
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  Convert length, width, and depth into cubic yards and tons for landscape mulch beds, crushed gravel driveways, screened topsoil, and concrete slab pours. Includes +10% compaction presets.
                </p>

                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p><strong>Supported Materials:</strong> Mulch, Topsoil, Gravel, Ready-Mix Concrete, Masonry Sand</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span
                  style={{ color: "#ffffff", backgroundColor: "#059669" }}
                  className="px-5 py-2.5 bg-emerald-600 group-hover:bg-emerald-500 !text-white text-xs font-bold rounded-lg transition-all shadow-sm shadow-emerald-600/20 inline-flex items-center gap-1.5"
                >
                  <span style={{ color: "#ffffff" }} className="!text-white">Use Cubic Yard Calculator</span>
                  <span style={{ color: "#ffffff" }} className="!text-white">→</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">Free Tool</span>
              </div>
            </Link>

            {/* Tool 2: Profit Margin & Markup Calculator */}
            <Link
              href="/profit-margin-calculator"
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/5 transition-all group cursor-pointer block"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    Job Pricing & Markup
                  </span>
                  <span className="text-xs font-mono text-slate-400">Cost ÷ (1 - Margin)</span>
                </div>
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-emerald-700 transition">
                  Profit Margin & Markup Calculator
                </h3>
                <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                  Calculate true contractor selling prices and dollar gross profit. Avoid confusing markup % with profit margin—a single mistake that erodes thousands of dollars in bidding revenue.
                </p>

                <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p><strong>Includes:</strong> Markup-to-Margin Conversion Matrix (15% to 50% gross margin tiers)</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span
                  style={{ color: "#ffffff", backgroundColor: "#059669" }}
                  className="px-5 py-2.5 bg-emerald-600 group-hover:bg-emerald-500 !text-white text-xs font-bold rounded-lg transition-all shadow-sm shadow-emerald-600/20 inline-flex items-center gap-1.5"
                >
                  <span style={{ color: "#ffffff" }} className="!text-white">Use Profit Margin Calculator</span>
                  <span style={{ color: "#ffffff" }} className="!text-white">→</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">Free Tool</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* MINIMAL VALUE PROPS */}
      <section className="py-16 sm:py-20 bg-slate-50/70">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Built for US Independent Trade Contractors
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Clean estimates close more jobs and eliminate awkward payment disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 hover:border-slate-300 transition shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
                01
              </div>
              <h3 className="text-sm font-bold text-slate-950">Zero Signup Friction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No passwords, credit cards, or spam phone calls. Open the builder on your phone or truck laptop and download your quote in 60 seconds.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 hover:border-slate-300 transition shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
                02
              </div>
              <h3 className="text-sm font-bold text-slate-950">Real US Trade Rates</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every trade template comes pre-loaded with verified 2026 US price benchmarks so you never accidentally underbid labor or material supplies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2 hover:border-slate-300 transition shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
                03
              </div>
              <h3 className="text-sm font-bold text-slate-950">Ironclad Scope Terms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-written contractor payment clauses protect you against scope creep, client cancellations, hidden condition rot, and payment delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (SEO RANKING BOOSTER) */}
      <section className="py-16 sm:py-20 bg-white border-t border-zinc-200">
        <div className="container max-w-3xl">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-wider font-mono text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200">
              Contractor FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-2">
              Everything you need to know about creating quotes and bidding trade jobs.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group border border-zinc-200 rounded-xl p-5 bg-zinc-50 open:bg-white transition cursor-pointer">
              <summary className="font-bold text-sm text-zinc-950 flex items-center justify-between list-none">
                <span>Are these contractor estimate templates 100% free?</span>
                <span className="text-zinc-400 group-open:rotate-180 transition">↓</span>
              </summary>
              <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                Yes. You can customize, calculate, and download clean vector PDF estimates for all 10 trades completely free. There are no mandatory subscriptions, no paywalls, and no client limits.
              </p>
            </details>

            <details className="group border border-zinc-200 rounded-xl p-5 bg-zinc-50 open:bg-white transition cursor-pointer">
              <summary className="font-bold text-sm text-zinc-950 flex items-center justify-between list-none">
                <span>How is contractor profit margin calculated differently from markup?</span>
                <span className="text-zinc-400 group-open:rotate-180 transition">↓</span>
              </summary>
              <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                Markup is added to your job cost, while margin represents what percentage of the final contract price remains as profit. If a job costs $1,000 and you mark it up 30% ($1,300), your profit margin is actually only 23.07% ($300 ÷ $1,300). Use our Profit Margin Calculator to hit your true gross profit targets.
              </p>
            </details>

            <details className="group border border-zinc-200 rounded-xl p-5 bg-zinc-50 open:bg-white transition cursor-pointer">
              <summary className="font-bold text-sm text-zinc-950 flex items-center justify-between list-none">
                <span>Can I print or email the generated estimate directly to clients?</span>
                <span className="text-zinc-400 group-open:rotate-180 transition">↓</span>
              </summary>
              <p className="text-xs text-zinc-600 mt-3 leading-relaxed">
                Yes. Click the <strong>Download Vector PDF</strong> button to generate an invoice-grade, crisp PDF formatted to standard US Letter dimensions. It includes itemized line items, subtotal, tax, net payment schedule, and customer acceptance signature blocks.
              </p>
            </details>
          </div>
=======
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
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
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
