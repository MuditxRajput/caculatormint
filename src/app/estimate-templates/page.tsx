import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { TRADES } from "@/data/trades";
import { EstimateHubClient } from "./EstimateHubClient";

export const metadata: Metadata = {
  title: "10 Free Contractor Estimate Templates, Quote Makers & Bid Calculators (2026)",
  description:
    "Browse 10 free, customizable PDF estimate templates and bid calculators for US trades: house cleaning, commercial janitorial, roofing, painting, pressure washing, epoxy flooring, landscaping, lawn care, junk removal & handyman.",
  keywords: [
    "contractor estimate templates",
    "free quote templates pdf",
    "trade bid calculators",
    "service quote generator",
    "contractor proposal templates",
    "printable estimate form",
    "2026 US contractor pricing",
  ],
  alternates: {
    canonical: `${siteConfig.url}/estimate-templates`,
  },
  openGraph: {
    title: "10 Free Contractor Estimate Templates & Bid Calculators | CalculatorMint",
    description:
      "Generate client-ready bids and PDF quotes in 60 seconds with 2026 US trade pricing benchmarks. Instant vector PDF export with zero signup.",
    url: `${siteConfig.url}/estimate-templates`,
  },
};

export default function EstimateTemplatesHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Free Contractor Estimate Templates & Bid Calculators",
    description:
      "Directory of professional US trade estimate generators with pre-filled line items and PDF downloads.",
    url: `${siteConfig.url}/estimate-templates`,
    hasPart: TRADES.map((t) => ({
      "@type": "SoftwareApplication",
      name: t.h1,
      url: `${siteConfig.url}/estimate-template/${t.slug}`,
      applicationCategory: "BusinessApplication",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Estimate Templates</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-8">
          <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono border border-emerald-200/80 mb-3">
            2026 US Contractor Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Free US Contractor Estimate Templates
          </h1>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Select your trade below to open an interactive, client-ready estimate builder pre-loaded with realistic US market pricing defaults, terms, and instant PDF download.
          </p>
        </div>

        {/* Directory with Search & Filters */}
        <EstimateHubClient trades={TRADES} />

        {/* Contractor Math Tools Section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono">
              Essential Formulas
            </span>
            <h2 className="text-2xl font-black text-slate-950 mt-1">
              Contractor Math Tools
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Never guess material quantities or compromise profit margins on client bids.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              href="/cubic-yard-calculator"
              className="p-6 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 uppercase tracking-wider">
                  Volume & Materials
                </span>
                <span className="text-emerald-700 font-bold group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-950 group-hover:text-emerald-700 transition">
                Cubic Yard Calculator
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Calculate cubic yards, tons, and costs for mulch, topsoil, gravel, crushed stone, and concrete pours.
              </p>
            </Link>

            <Link
              href="/profit-margin-calculator"
              className="p-6 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 uppercase tracking-wider">
                  Pricing & Margins
                </span>
                <span className="text-emerald-700 font-bold group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-950 group-hover:text-emerald-700 transition">
                Profit Margin & Markup Calculator
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Convert job costs into profitable client sell prices. Master the difference between markup % and true gross margin.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
