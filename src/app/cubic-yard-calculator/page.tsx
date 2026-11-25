import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { CubicYardClient } from "./CubicYardClient";

export const metadata: Metadata = {
  title: "Cubic Yard Calculator — Mulch, Gravel, Topsoil, Dirt & Concrete Estimator",
  description:
    "Calculate exact cubic yards, tons, and material costs for landscaping mulch beds, gravel driveways, topsoil, dirt fill, and concrete slabs. Free contractor yardage calculator.",
  keywords: [
    "cubic yard calculator",
    "mulch yardage calculator",
    "gravel cubic yard to tons calculator",
    "concrete slab cubic yard estimator",
    "topsoil volume calculator",
    "landscaping material calculator",
    "length width depth cubic yards",
  ],
  alternates: {
    canonical: `${siteConfig.url}/cubic-yard-calculator`,
  },
  openGraph: {
    title: "Cubic Yard Calculator for Contractors | CalculatorMint",
    description:
      "Instant length × width × depth cubic yard calculations with density conversions for concrete, mulch, gravel, and dirt.",
    url: `${siteConfig.url}/cubic-yard-calculator`,
  },
};

export default function CubicYardCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Contractor Cubic Yard Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free contractor volume calculator to convert length, width, and depth into cubic yards, tons, and material costs.",
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
          <span className="text-slate-900 font-semibold">Cubic Yard Calculator</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-8">
          <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono border border-emerald-200/80 mb-3">
            Contractor Material Calculator
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Cubic Yard Calculator
          </h1>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            Estimate bulk material volume for mulch, topsoil, crushed stone, gravel, and concrete pours. Enter dimensions in feet or inches to calculate total cubic yards, total weight in tons, and estimated material cost.
          </p>
        </div>

        {/* Interactive Calculator */}
        <CubicYardClient />

        {/* Educational Content Below */}
        <div className="mt-16 max-w-4xl space-y-12">
          {/* Formula section */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950 mb-4">
              Cubic Yard Calculation Formula
            </h2>
            <div className="bg-zinc-50 rounded-lg p-4 border border-zinc-200 font-mono text-xs text-zinc-900 space-y-2">
              <p>
                <strong>Method 1 (All Dimensions in Feet):</strong>
              </p>
              <p className="text-zinc-950 font-bold">
                Cubic Yards = (Length in ft × Width in ft × Depth in ft) ÷ 27
              </p>
              <div className="pt-2 border-t border-zinc-200 text-zinc-600 space-y-1">
                <p>
                  <strong>Method 2 (Depth in Inches — Standard for Mulch & Pours):</strong>
                </p>
                <p className="text-zinc-950 font-bold">
                  Cubic Yards = (Square Footage × Depth in Inches) ÷ 324
                </p>
                <p>
                  <em>Example:</em> A 500 sq ft mulch bed at 3 inches depth = (500 × 3) ÷ 324 = <strong>4.63 cubic yards</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Material Weight Reference Table */}
          <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950 mb-2">
              Contractor Bulk Material Density Guide
            </h2>
            <p className="text-xs text-zinc-500 mb-6">
              Weight estimates per cubic yard for hauling truck capacity and payload verification.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-zinc-950 bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-wider">
                    <th className="py-2.5 px-3">Material</th>
                    <th className="py-2.5 px-2">Avg Weight per Cu Yd</th>
                    <th className="py-2.5 px-2">Tons per Cu Yd</th>
                    <th className="py-2.5 px-3">Common Trade Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 text-zinc-700">
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950">Shredded Hardwood Mulch</td>
                    <td className="py-3 px-2 font-mono">600 – 900 lbs</td>
                    <td className="py-3 px-2 font-mono">~0.35 – 0.45 tons</td>
                    <td className="py-3 px-3">Flowerbeds, moisture retention</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950">Screened Topsoil</td>
                    <td className="py-3 px-2 font-mono">2,000 – 2,400 lbs</td>
                    <td className="py-3 px-2 font-mono">~1.0 – 1.2 tons</td>
                    <td className="py-3 px-3">Lawn grading, sod bed prep</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950">Crushed Stone / Gravel #57</td>
                    <td className="py-3 px-2 font-mono">2,500 – 2,800 lbs</td>
                    <td className="py-3 px-2 font-mono">~1.25 – 1.4 tons</td>
                    <td className="py-3 px-3">Paver base, French drains, driveways</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950">Ready-Mix Concrete (Wet)</td>
                    <td className="py-3 px-2 font-mono">3,900 – 4,100 lbs</td>
                    <td className="py-3 px-2 font-mono">~2.0 tons</td>
                    <td className="py-3 px-3">Slabs, footings, patios, sidewalks</td>
                  </tr>
                  <tr className="hover:bg-zinc-50">
                    <td className="py-3 px-3 font-semibold text-zinc-950">Coarse Masonry Sand</td>
                    <td className="py-3 px-2 font-mono">2,600 – 2,800 lbs</td>
                    <td className="py-3 px-2 font-mono">~1.3 – 1.4 tons</td>
                    <td className="py-3 px-3">Paver bedding, mortar mixing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200">
              <Link
                href="/blog/how-to-calculate-cubic-yards-materials"
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 underline underline-offset-4 transition"
              >
                <span>📐 In-Depth Bidding Guide: How to Calculate Cubic Yards & Material Quantities (Mulch, Soil, Gravel) →</span>
              </Link>
            </div>
          </div>

          {/* Related Tools */}
          <div className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 sm:p-8">
            <h3 className="text-sm font-bold text-zinc-950 mb-3">
              Generate Client Quotes with These Dimensions
            </h3>
            <p className="text-xs text-zinc-600 mb-4">
              Turn your material measurements directly into client-ready bids:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <Link
                href="/estimate-template/landscaping"
                className="p-3 bg-white rounded-lg border border-zinc-200 hover:border-zinc-950 font-semibold text-zinc-900 transition flex items-center justify-between"
              >
                <span>Landscaping Proposal</span>
                <span className="text-zinc-950">→</span>
              </Link>
              <Link
                href="/estimate-template/lawn-care"
                className="p-3 bg-white rounded-lg border border-zinc-200 hover:border-zinc-950 font-semibold text-zinc-900 transition flex items-center justify-between"
              >
                <span>Lawn Care Template</span>
                <span className="text-zinc-950">→</span>
              </Link>
              <Link
                href="/profit-margin-calculator"
                className="p-3 bg-white rounded-lg border border-zinc-200 hover:border-zinc-950 font-semibold text-zinc-900 transition flex items-center justify-between"
              >
                <span>Profit Margin Calculator</span>
                <span className="text-zinc-950">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
