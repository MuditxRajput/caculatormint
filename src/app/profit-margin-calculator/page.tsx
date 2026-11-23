import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ProfitMarginClient } from "./ProfitMarginClient";

export const metadata: Metadata = {
  title: "Contractor Profit Margin & Markup Calculator (Cost to Bid Price)",
  description:
    "Calculate accurate contractor selling prices, gross margin percentage, and material/labor markups to guarantee profitable job bids.",
  alternates: {
    canonical: `${siteConfig.url}/profit-margin-calculator`,
  },
  openGraph: {
    title: "Contractor Profit Margin & Markup Calculator | CalculatorMint",
    description:
      "Avoid the fatal markup vs margin mistake. Calculate true contractor selling prices, gross profit dollars, and markup percentage.",
    url: `${siteConfig.url}/profit-margin-calculator`,
  },
};

export default function ProfitMarginCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Contractor Profit Margin & Markup Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free contractor pricing tool to convert job direct costs into profitable bid quotes with markup and margin formulas.",
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
          <span className="text-slate-600 font-medium">Contractor Math</span>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Profit Margin & Markup</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-8">
          <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono border border-emerald-200/80 mb-3">
            Contractor Financial Tool
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Profit Margin & Markup Calculator
          </h1>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Stop losing money on bids. Calculate your exact sell price, gross profit in dollars, and see how markup differs from true profit margin.
          </p>
        </div>

        {/* Interactive Calculator */}
        <ProfitMarginClient />

        {/* Deep Dive Contractor Pricing Content */}
        <div className="mt-16 max-w-4xl space-y-12">
          {/* Fatal Mistake Callout */}
          <div className="bg-zinc-50 rounded-xl border border-zinc-300 p-6 sm:p-8">
            <h2 className="text-base font-bold text-zinc-950 flex items-center gap-2 font-mono uppercase tracking-wider">
              ⚠️ The #1 Math Mistake That Ruins Contractor Margins
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-700 leading-relaxed">
              Many contractors believe that adding a <strong>30% markup</strong> to their job cost guarantees a <strong>30% profit margin</strong>. <em>It does not.</em>
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-4 rounded-lg border border-zinc-200">
                <p className="font-bold text-zinc-950 mb-1">What Markup Does:</p>
                <p className="text-zinc-600">
                  Markup calculates how much you add to your <strong>cost</strong>. If a job costs \$1,000 and you mark it up 30%, you bid \$1,300.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-zinc-200">
                <p className="font-bold text-zinc-950 mb-1">What Margin Actually Is:</p>
                <p className="text-zinc-600">
                  Margin calculates your profit as a percentage of the <strong>selling price</strong>: \$300 ÷ \$1,300 = <strong>23.07%</strong> margin—not 30%! You left \$128 on the table.
                </p>
              </div>
            </div>
          </div>

          {/* Formulas */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950 mb-4">
              Contractor Formulas Explained
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200 space-y-2">
                <p className="font-bold text-zinc-950 text-sm">Selling Price from Margin %</p>
                <p className="font-mono text-zinc-950 font-bold">
                  Selling Price = Job Cost ÷ (1 - Margin Decimal)
                </p>
                <p className="text-zinc-600">
                  To get a true 35% margin on \$2,000 cost: \$2,000 ÷ (1 - 0.35) = \$2,000 ÷ 0.65 = <strong>\$3,076.92</strong>.
                </p>
              </div>

              <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200 space-y-2">
                <p className="font-bold text-zinc-950 text-sm">Markup from Job Cost</p>
                <p className="font-mono text-zinc-950 font-bold">
                  Markup % = (Gross Profit $ ÷ Job Cost $) × 100
                </p>
                <p className="text-zinc-600">
                  To achieve that \$1,076.92 profit on \$2,000 cost, your required markup is <strong>53.85%</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Conversion Table */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950 mb-2">
              Markup to Gross Margin Conversion Table
            </h2>
            <p className="text-xs text-zinc-500 mb-6">
              Use this quick reference table to find the markup required to reach your target gross profit margin.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-zinc-950 bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-2.5 px-3">Desired Margin %</th>
                    <th className="py-2.5 px-2">Required Markup %</th>
                    <th className="py-2.5 px-2">On a $1,000 Cost Job: Bid Price</th>
                    <th className="py-2.5 px-3">Gross Profit $</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-700 font-mono">
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950 font-sans">15% Margin</td>
                    <td className="py-3 px-2 text-zinc-950 font-bold">17.65%</td>
                    <td className="py-3 px-2">$1,176.47</td>
                    <td className="py-3 px-3">$176.47</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950 font-sans">20% Margin</td>
                    <td className="py-3 px-2 text-zinc-950 font-bold">25.00%</td>
                    <td className="py-3 px-2">$1,250.00</td>
                    <td className="py-3 px-3">$250.00</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950 font-sans">25% Margin</td>
                    <td className="py-3 px-2 text-zinc-950 font-bold">33.33%</td>
                    <td className="py-3 px-2">$1,333.33</td>
                    <td className="py-3 px-3">$333.33</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950 font-sans">30% Margin</td>
                    <td className="py-3 px-2 text-zinc-950 font-bold">42.86%</td>
                    <td className="py-3 px-2">$1,428.57</td>
                    <td className="py-3 px-3">$428.57</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950 font-sans">35% Margin</td>
                    <td className="py-3 px-2 text-zinc-950 font-bold">53.85%</td>
                    <td className="py-3 px-2">$1,538.46</td>
                    <td className="py-3 px-3">$538.46</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950 font-sans">40% Margin</td>
                    <td className="py-3 px-2 text-zinc-950 font-bold">66.67%</td>
                    <td className="py-3 px-2">$1,666.67</td>
                    <td className="py-3 px-3">$666.67</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950 font-sans">50% Margin</td>
                    <td className="py-3 px-2 text-zinc-950 font-bold">100.00%</td>
                    <td className="py-3 px-2">$2,000.00</td>
                    <td className="py-3 px-3">$1,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cross Links */}
          <div className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 sm:p-8">
            <h3 className="text-sm font-bold text-zinc-950 mb-3">
              Ready to Send a Client Estimate with These Margins?
            </h3>
            <p className="text-xs text-zinc-600 mb-4">
              Select your trade to generate a formatted PDF estimate in seconds:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <Link
                href="/estimate-template/painting"
                className="p-3 bg-white rounded-lg border border-zinc-200 hover:border-zinc-950 font-semibold text-zinc-900 transition flex items-center justify-between"
              >
                <span>Painting Estimate</span>
                <span className="text-zinc-950">→</span>
              </Link>
              <Link
                href="/estimate-template/roofing"
                className="p-3 bg-white rounded-lg border border-zinc-200 hover:border-zinc-950 font-semibold text-zinc-900 transition flex items-center justify-between"
              >
                <span>Roofing Estimate</span>
                <span className="text-zinc-950">→</span>
              </Link>
              <Link
                href="/estimate-templates"
                className="p-3 bg-white rounded-lg border border-zinc-200 hover:border-zinc-950 font-semibold text-zinc-900 transition flex items-center justify-between"
              >
                <span>All 10 Trade Templates</span>
                <span className="text-zinc-950">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
