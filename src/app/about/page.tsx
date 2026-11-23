import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About CalculatorMint — Bidding Tools for US Trade Contractors",
  description:
    "Learn about CalculatorMint: free contractor estimate templates, verified 2026 US trade pricing benchmarks, and vector PDF quote generation for independent contractors.",
  alternates: { canonical: "/about" },
  keywords: [
    "about CalculatorMint",
    "contractor estimate generator",
    "US trade pricing benchmarks",
    "free contractor bid calculator",
  ],
};

export default function AboutPage() {
  return (
    <div className="container py-10 sm:py-16">
      <header className="max-w-3xl mb-12">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About</span>
        </nav>
        <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono border border-emerald-200/80 mb-3">
          Our Mission
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
          About CalculatorMint
        </h1>
        <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
          The free, professional estimating and bidding toolkit built for independent US trade contractors.
        </p>
      </header>

      <article className="max-w-3xl space-y-8 text-sm text-slate-700 leading-relaxed">
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-950">
            Why We Built CalculatorMint
          </h2>
          <p>
            Independent trade contractors—painters, roofers, landscapers, cleaners, and electricians—are the backbone of the American economy. Yet when it comes to bidding jobs, contractors are often stuck between two frustrating extremes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
            <li>
              <strong>Overpriced, Bloated Software:</strong> Complex monthly subscriptions charging hundreds of dollars for CRM features that solo operators rarely need.
            </li>
            <li>
              <strong>Unprofessional Text Messages:</strong> Single-number text bids that fail to outline scope, lack payment milestones, and leave contractors unprotected against client payment disputes.
            </li>
          </ul>
          <p>
            CalculatorMint was created to provide a modern, third alternative: fast, invoice-grade estimate generators pre-loaded with verified US pricing benchmarks, ironclad contract terms, and 100% free vector PDF downloads.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-950">
            2026 US Trade Pricing Benchmarks
          </h2>
          <p>
            Underbidding labor or underestimating material inflation is the #1 reason trade contractors struggle with profitability. Every template on CalculatorMint comes pre-filled with verified 2026 US market averages across labor and materials.
          </p>
          <p>
            Contractors can adjust quantities, labor hours, square footage, or rates in real time, with automatic line item math and gross profit calculations.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-950">
            Core Estimating Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/estimate-templates"
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition group block"
            >
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 transition">
                10 Trade Estimate Hub →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Cleaning, Roofing, Painting, Landscaping, Pressure Washing, Epoxy Flooring, Handyman, and more.
              </p>
            </Link>

            <Link
              href="/profit-margin-calculator"
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition group block"
            >
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 transition">
                Profit Margin & Markup →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Convert job costs into profitable quotes and master the difference between markup and margin.
              </p>
            </Link>

            <Link
              href="/cubic-yard-calculator"
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition group block"
            >
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 transition">
                Cubic Yard Calculator →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Volume and weight calculations for mulch, topsoil, crushed stone, gravel, and concrete pours.
              </p>
            </Link>

            <Link
              href="/faq"
              className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-500 transition group block"
            >
              <h3 className="font-bold text-slate-950 group-hover:text-emerald-700 transition">
                Contractor FAQs →
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Answers to common bidding questions, payment schedule terms, and vector PDF export tips.
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
