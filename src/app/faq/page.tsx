import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { TRADES } from "@/data/trades";

export const metadata: Metadata = {
  title: "Contractor FAQ — Estimates, Bidding & Pricing Guide",
  description:
    "Frequently asked questions about CalculatorMint: free contractor estimate templates, 2026 US trade benchmarks, vector PDF exports, profit margins, and bidding math.",
  alternates: { canonical: "/faq" },
  keywords: [
    "contractor estimate FAQ",
    "trade estimate template questions",
    "contractor profit margin vs markup",
    "free PDF estimate generator",
    "CalculatorMint FAQ",
  ],
};

const faqs = [
  {
    q: "Are these contractor estimate templates 100% free to use?",
    a: "Yes. All 10 trade templates, bid formulas, and instant vector PDF exports are 100% free with no account creation or credit card required. You can build, customize, and export as many client estimates as you need.",
  },
  {
    q: "How are the 2026 US trade pricing benchmarks calculated?",
    a: "Our pre-filled rates reflect real-world 2026 US market averages across residential and light commercial trades. Each template includes national low, average, and high benchmarks for labor and common materials so you can quote competitively without underbidding.",
  },
  {
    q: "Can I download and email the generated PDF estimates directly to clients?",
    a: "Yes. Clicking 'Download Free PDF' generates an invoice-grade, crisp vector PDF formatted to US Letter dimensions. It includes your contractor company details, itemized line items, subtotal, tax, net payment terms, and customer acceptance signature blocks.",
  },
  {
    q: "How does contractor profit margin differ from markup?",
    a: "Markup is added directly on top of job costs, whereas margin represents the percentage of the final contract price that remains as gross profit. For example, a 30% markup on a $1,000 job yields a 23.08% profit margin ($1,300 price). To achieve a true 30% margin, the job must be billed at $1,428.57. Use our Profit Margin Calculator to hit your true gross profit targets.",
  },
  {
    q: "Do you store my client names or estimate financial data?",
    a: "No. Your estimate line items, customer addresses, and rates are calculated locally in your browser session for maximum privacy. We do not store or sell your client quoting data.",
  },
  {
    q: "Which trade estimate templates are currently supported?",
    a: "We currently support 10 full trade suites: Cleaning & Janitorial, Painting, Roofing, Pressure Washing, Epoxy Flooring, Landscaping & Lawn Care, Handyman & Repairs, Drywall, Electrical, and Plumbing.",
  },
  {
    q: "Can I request a new trade template or customized line items?",
    a: "Yes. Send us an email at support@calculatormint.com with your trade specialty, common line items, and standard units (sq ft, hourly, linear ft), and our engineering team will build it into the platform.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="container py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="max-w-3xl mb-12">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">FAQ</span>
        </nav>
        <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono border border-emerald-200/80 mb-3">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
          Contractor FAQs & Bidding Guide
        </h1>
        <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
          Clear answers about how CalculatorMint works, verified US pricing benchmarks, PDF generation, and profit margin formulas.
        </p>
      </header>

      <div className="max-w-3xl space-y-4">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group border border-slate-200 rounded-xl p-5 bg-white open:shadow-xs transition cursor-pointer"
            open={idx === 0}
          >
            <summary className="font-bold text-sm text-slate-950 flex items-center justify-between list-none">
              <span>{faq.q}</span>
              <span className="text-emerald-700 font-bold group-open:rotate-180 transition ml-2">
                ↓
              </span>
            </summary>
            <p className="text-xs text-slate-600 mt-3 leading-relaxed border-t border-slate-100 pt-3">
              {faq.a}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-14 p-6 bg-slate-50 rounded-xl border border-slate-200 max-w-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-950">Ready to build your estimate?</h3>
          <p className="text-xs text-slate-600 mt-0.5">
            Choose your trade template and download a clean PDF quote in 60 seconds.
          </p>
        </div>
        <Link
          href="/estimate-templates"
          style={{ color: "#ffffff", backgroundColor: "#059669" }}
          className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold rounded-lg transition shadow-sm whitespace-nowrap inline-flex items-center gap-1.5"
        >
          <span style={{ color: "#ffffff" }} className="!text-white font-bold">Browse Trade Hub</span>
          <span style={{ color: "#ffffff" }} className="!text-white font-bold">→</span>
        </Link>
      </div>
    </div>
  );
}
