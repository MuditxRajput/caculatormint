import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TRADES, getTradeBySlug, ALL_TRADE_SLUGS } from "@/data/trades";
import { EstimateBuilder } from "@/components/EstimateBuilder";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ trade: string }>;
}

export function generateStaticParams() {
  return ALL_TRADE_SLUGS.map((slug) => ({
    trade: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { trade: slug } = await params;
  const trade = getTradeBySlug(slug);

  if (!trade) {
    return {
      title: "Estimate Template Not Found",
    };
  }

  const canonicalUrl = `${siteConfig.url}/estimate-template/${trade.slug}`;

  return {
    title: trade.seoTitle,
    description: trade.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${trade.seoTitle} | CalculatorMint`,
      description: trade.seoDescription,
      url: canonicalUrl,
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: trade.seoTitle,
      description: trade.seoDescription,
    },
  };
}

export default async function TradeEstimatePage({ params }: PageProps) {
  const { trade: slug } = await params;
  const trade = getTradeBySlug(slug);

  if (!trade) {
    notFound();
  }

  const relatedTradeObjects = trade.relatedTrades
    .map((rSlug) => getTradeBySlug(rSlug))
    .filter(Boolean);

  const canonicalUrl = `${siteConfig.url}/estimate-template/${trade.slug}`;

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: trade.h1,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: trade.seoDescription,
    url: canonicalUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trade.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Estimate Templates",
        item: `${siteConfig.url}/estimate-templates`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: trade.tradeName,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="container py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/estimate-templates"
            className="hover:text-emerald-700 transition"
          >
            Estimate Templates
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{trade.tradeName}</span>
        </nav>

        {/* ABOVE THE FOLD: Header & Interactive Estimate Builder */}
        <header className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono border border-emerald-200/80">
              {trade.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              2026 US Contractor Rates
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            {trade.h1}
          </h1>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            {trade.shortDescription} Customize labor hours, material rates, and terms below. Export a professional vector PDF quote with zero signup required.
          </p>
        </header>

        {/* Live Interactive Builder */}
        <div className="mb-20">
          <EstimateBuilder trade={trade} />
        </div>

        {/* BELOW THE FOLD: Server-Rendered SEO Content */}
        <section className="space-y-12 max-w-4xl border-t border-zinc-200 pt-16">
          {/* 1. 2026 US Average Pricing Table */}
          <article className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-zinc-100 gap-2">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 font-mono">
                  Market Benchmarks
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-zinc-950 mt-1">
                  2026 US Average {trade.tradeName} Pricing Guide
                </h2>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-1 rounded font-mono">
                Verified US Averages
              </span>
            </div>

            <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
              Use these standard US industry benchmarks to ensure your bids are competitive without sacrificing company profitability. Rates reflect typical contractor labor, equipment amortization, and overhead.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-zinc-950 bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-2.5 px-3">Service / Scope</th>
                    <th className="py-2.5 px-2 font-mono">Low End</th>
                    <th className="py-2.5 px-2 font-mono font-bold">National Avg</th>
                    <th className="py-2.5 px-2 font-mono">High End</th>
                    <th className="py-2.5 px-2">Unit</th>
                    <th className="py-2.5 px-3">Notes & Scope Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-700">
                  {trade.pricingBenchmarks.map((bench, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50 transition">
                      <td className="py-3 px-3 font-semibold text-zinc-950">
                        {bench.service}
                      </td>
                      <td className="py-3 px-2 font-mono text-zinc-600">
                        ${bench.lowRate}
                      </td>
                      <td className="py-3 px-2 font-mono text-zinc-950 font-bold">
                        ${bench.avgRate}
                      </td>
                      <td className="py-3 px-2 font-mono text-zinc-600">
                        ${bench.highRate}
                      </td>
                      <td className="py-3 px-2 text-zinc-500 whitespace-nowrap">
                        {bench.unit}
                      </td>
                      <td className="py-3 px-3 text-zinc-500 text-[11px] leading-relaxed">
                        {bench.notes || "Standard residential/commercial specification"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          {/* 2. How to Bid Profitably (4 Steps) */}
          <article className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 font-mono">
              Contractor Blueprint
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 mt-1 mb-6">
              How to Bid {trade.tradeName} Jobs Profitably
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {trade.biddingSteps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-5 rounded-lg bg-zinc-50 border border-zinc-200 space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      {step.stepNumber}
                    </span>
                    <h3 className="text-xs font-bold text-slate-950">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed pl-9">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 3. Checklist: What to Include */}
          <article className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 font-mono">
              Risk Mitigation
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 mt-1 mb-4">
              What to Include in a Professional {trade.tradeName} Estimate
            </h2>
            <p className="text-xs text-zinc-600 mb-6 leading-relaxed">
              Never send a single-number quote on text message. Every binding quote should include these 5 critical clauses:
            </p>

            <ul className="space-y-2.5">
              {trade.checklist.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/80 border border-slate-200 text-xs text-slate-800"
                >
                  <span className="text-emerald-600 font-black mt-0.5">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* 4. 5 Trade FAQs */}
          <article className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 font-mono">
              Frequently Asked Questions
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 mt-1 mb-6">
              {trade.tradeName} Estimating & Pricing FAQs
            </h2>

            <div className="space-y-3">
              {trade.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-zinc-200 rounded-lg p-4 [&_summary::-webkit-details-marker]:hidden bg-zinc-50 open:bg-white transition"
                  open={idx === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between text-xs sm:text-sm font-bold text-zinc-950 list-none">
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0 rounded-full p-1 text-zinc-400 group-open:rotate-180 transition">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </article>

          {/* 5. Internal Cross Links */}
          <article className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-zinc-950">
                Related Trade Estimate Templates
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Explore adjacent trades or build quotes for multi-service contracts:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {relatedTradeObjects.map((rel) =>
                rel ? (
                  <Link
                    key={rel.slug}
                    href={`/estimate-template/${rel.slug}`}
                    className="p-4 bg-white rounded-lg border border-slate-200 hover:border-emerald-500 hover:shadow-xs font-semibold text-slate-900 transition flex flex-col justify-between group"
                  >
                    <span className="group-hover:text-emerald-700 transition">{rel.tradeName}</span>
                    <span className="text-emerald-700 text-[11px] font-bold mt-2">
                      View Template →
                    </span>
                  </Link>
                ) : null
              )}
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                Contractor Math Tools
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <Link
                  href="/profit-margin-calculator"
                  className="p-3.5 bg-white rounded-lg border border-slate-200 hover:border-emerald-500 hover:shadow-xs font-semibold text-slate-900 transition flex items-center justify-between group"
                >
                  <div>
                    <p className="font-bold group-hover:text-emerald-700 transition">Profit Margin & Markup Calculator</p>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                      Ensure your jobs hit 35%+ gross margins
                    </p>
                  </div>
                  <span className="text-emerald-700 text-sm font-bold group-hover:translate-x-0.5 transition">→</span>
                </Link>

                <Link
                  href="/cubic-yard-calculator"
                  className="p-3.5 bg-white rounded-lg border border-slate-200 hover:border-emerald-500 hover:shadow-xs font-semibold text-slate-900 transition flex items-center justify-between group"
                >
                  <div>
                    <p className="font-bold group-hover:text-emerald-700 transition">Cubic Yard Calculator</p>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">
                      Calculate mulch, gravel, dirt & concrete volume
                    </p>
                  </div>
                  <span className="text-emerald-700 text-sm font-bold group-hover:translate-x-0.5 transition">→</span>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
