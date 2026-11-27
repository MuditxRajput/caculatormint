import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { TRADES } from "@/data/trades";

export const metadata: Metadata = {
  title: "Best Free Billdu Alternative for Contractors (2026 Review & Comparison)",
  description:
    "Looking for a free Billdu alternative? Compare CalculatorMint vs Billdu. Get unlimited contractor estimates & invoices, pre-filled trade line items, no 10-client limits, and zero signup friction.",
  keywords: [
    "billdu alternative",
    "free billdu alternative",
    "billdu vs calculatormint",
    "billdu pricing review",
    "billdu competitors",
    "best estimate app for contractors",
    "free contractor invoice generator",
    "contractor bid software without subscription",
    "free invoice maker no signup",
  ],
  alternates: {
    canonical: `${siteConfig.url}/billdu-alternative`,
  },
  openGraph: {
    title: "Best Free Billdu Alternative for Contractors (2026 Comparison) | CalculatorMint",
    description:
      "Stop paying $10-$20/mo for blank templates and 10-client limits. CalculatorMint provides free unlimited contractor estimates, trade pricing defaults, and instant PDF/Excel exports.",
    url: `${siteConfig.url}/billdu-alternative`,
    type: "website",
  },
};

export default function BillduAlternativePage() {
  const comparisonItems = [
    {
      feature: "Monthly Cost",
      billdu: "$4.99 to $19.99 / month",
      billduNote: "7-day trial then paid subscription",
      cm: "100% Free Forever",
      cmNote: "Optional $19/mo Pro for custom branding",
      winner: "cm",
    },
    {
      feature: "Client Limits",
      billdu: "Capped at 10 to 50 clients",
      billduNote: "Charges $20/mo for unlimited clients",
      cm: "Unlimited Clients",
      cmNote: "Never pay more as your business grows",
      winner: "cm",
    },
    {
      feature: "Trade Scope & Pricing Defaults",
      billdu: "Blank Tables Only",
      billduNote: "You must type every single line item",
      cm: "20 Pre-Filled US Trade Templates",
      cmNote: "Painting, Roofing, Drywall, Concrete, Fencing, etc.",
      winner: "cm",
    },
    {
      feature: "Signup Requirement",
      billdu: "Mandatory Account & App Download",
      billduNote: "Pushes mobile app store downloads",
      cm: "Zero Signup Required",
      cmNote: "Open in mobile browser, edit & download in 45s",
      winner: "cm",
    },
    {
      feature: "Contractor Math Calculators",
      billdu: "Basic Qty × Rate Only",
      billduNote: "No construction math assistance",
      cm: "Cubic Yards & Margin vs Markup Guard",
      cmNote: "Protects contractor profit margins",
      winner: "cm",
    },
    {
      feature: "Digital e-Signatures",
      billdu: "Requires Paid Subscription",
      billduNote: "Gated behind paid tiers",
      cm: "Built-In Vector Signature Pad",
      cmNote: "Sign in-person or dispatch via WhatsApp & SMS",
      winner: "cm",
    },
    {
      feature: "Export Formats",
      billdu: "PDF / Word / Excel behind paywall",
      billduNote: "Pushes cloud sync lock-in",
      cm: "Instant Vector PDF + Excel/Sheets CSV",
      cmNote: "100% free downloads directly in browser",
      winner: "cm",
    },
    {
      feature: "Document Switcher",
      billdu: "Estimates & Invoices separate",
      billduNote: "Requires paid plan for estimates",
      cm: "1-Click Estimate ⇄ Invoice Toggle",
      cmNote: "Convert quote to billable invoice in 1 click",
      winner: "cm",
    },
  ];

  const faqs = [
    {
      question: "Is CalculatorMint truly a free alternative to Billdu?",
      answer:
        "Yes. Unlike Billdu, which offers a 7-day trial before charging $4.99 to $19.99/month, CalculatorMint is 100% free with no credit card and no mandatory signup. You can create, calculate, and download unlimited contractor estimates and invoices in PDF or Excel format without paying a dime.",
    },
    {
      question: "Why do contractors switch from Billdu to CalculatorMint?",
      answer:
        "Contractors switch primarily because of two major pain points: 1) Billdu imposes strict client limits (capping their $4.99 Lite plan at just 10 clients and their $9.99 plan at 50 clients); 2) Billdu is a generic office invoice app that provides blank tables. CalculatorMint provides trade-specific scopes of work with 2026 US labor and material pricing benchmarks for 20 trades, saving 15 minutes on every bid.",
    },
    {
      question: "Can I convert an estimate into an invoice like in Billdu?",
      answer:
        "Yes. In CalculatorMint's editor, click the 'Document Mode' toggle to switch from 'Estimate / Bid' to 'Final Invoice' in one click. The layout updates with an Invoice #, payment due dates, and remittance instructions (Zelle, Check, ACH, Bank Transfer).",
    },
    {
      question: "Do my clients need an app to sign estimates digitally?",
      answer:
        "No. CalculatorMint includes a built-in digital signature pad that works on touchscreens, iPads, and smartphones. You can have clients sign in-person on your phone or send them a proposal dispatch link via WhatsApp or text message.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container py-8 sm:py-14 max-w-5xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-800">Billdu Alternative</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            2026 Competitive Comparison & Review
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            The #1 Free <span className="text-emerald-700">Billdu Alternative</span> Built for Trade Contractors
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tired of paying $10 to $20 per month for blank templates and arbitrary 10-client caps? 
            Discover why independent contractors and tradesmen choose CalculatorMint for zero-friction bidding.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              href="/estimate-templates"
              style={{ color: "#ffffff", backgroundColor: "#059669" }}
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 !text-white font-bold text-sm shadow-md shadow-emerald-600/25 transition cursor-pointer"
            >
              Browse 20 Free Trade Templates →
            </Link>
            <Link
              href="/estimate-template/painting"
              className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm transition cursor-pointer"
            >
              Try Live Interactive Builder
            </Link>
          </div>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden mb-16">
          <div className="p-6 bg-slate-950 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Billdu vs. CalculatorMint Comparison</h2>
              <p className="text-xs text-slate-400 mt-1">A transparent look at features, limits, and pricing</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-emerald-900/60 text-emerald-300 border border-emerald-700/60 rounded-full font-semibold">
              Updated for 2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 uppercase text-[11px] font-bold tracking-wider font-mono">
                  <th className="py-3.5 px-4 sm:px-6 w-2/5">Capability / Feature</th>
                  <th className="py-3.5 px-4 sm:px-6 w-3/10 text-slate-500">Billdu</th>
                  <th className="py-3.5 px-4 sm:px-6 w-3/10 text-emerald-900 bg-emerald-50/60 font-black">
                    CalculatorMint
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/80 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-zinc-900">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-zinc-600">
                      <div className="font-semibold text-zinc-800">{item.billdu}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">{item.billduNote}</div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 bg-emerald-50/30">
                      <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                        <span className="text-emerald-600 font-black">✓</span>
                        <span>{item.cm}</span>
                      </div>
                      <div className="text-[11px] text-emerald-800 mt-0.5">{item.cmNote}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Reasons Why Contractors Switch */}
        <div className="space-y-6 mb-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Why Trade Contractors Switch to CalculatorMint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              General invoicing tools are built for consultants sitting at office desks. CalculatorMint is engineered for contractors working from trucks and jobsites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                🚫
              </div>
              <h3 className="text-base font-bold text-slate-900">1. No 10-Client Caps or Penalties</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Billdu&apos;s $4.99/mo plan caps you at just 10 clients. If you bid a few jobs every week, you are forced to pay $20/month. CalculatorMint gives you unlimited estimates, unlimited invoices, and unlimited clients with zero paywalls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                ⚡
              </div>
              <h3 className="text-base font-bold text-slate-900">2. Pre-Populated 2026 Trade Pricing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                On Billdu, you stare at a blank table and must manually type every scope item. CalculatorMint includes 20 pre-loaded trade templates (Painting, Roofing, Drywall, Fencing, HVAC, Concrete) with realistic itemized scopes and US pricing benchmarks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                ✍️
              </div>
              <h3 className="text-base font-bold text-slate-900">3. Built-In Client e-Signatures</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Billdu requires customers to download an app or open complex client portals. With CalculatorMint, clients can sign on your phone screen in person, or review and sign instantly through an SMS or WhatsApp proposal link.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                📐
              </div>
              <h3 className="text-base font-bold text-slate-900">4. Integrated Contractor Math Tools</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Billdu only does basic multiplication. CalculatorMint gives you a dedicated Cubic Yard Material Calculator for gravel, mulch, and concrete, plus a Markup vs Margin Guard to prevent quoting jobs below your required profit margin.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Launch Trade Selector */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white mb-16 space-y-5">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h3 className="text-xl font-bold">Pick Your Trade to Start Estimating for Free</h3>
              <p className="text-xs text-slate-400 mt-0.5">Pre-filled with 2026 US labor, material, and unit pricing</p>
            </div>
            <Link
              href="/estimate-templates"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition"
            >
              View All 20 Trades →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 text-xs">
            {TRADES.slice(0, 12).map((t) => (
              <Link
                key={t.slug}
                href={`/estimate-template/${t.slug}`}
                className="p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition flex flex-col justify-between"
              >
                <span className="font-bold text-slate-100 truncate">{t.tradeName}</span>
                <span className="text-[10px] text-emerald-400 mt-1 font-mono">Free Template →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4 mb-16">
          <h2 className="text-2xl font-black text-slate-950 tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4 space-y-1.5">
                <h3 className="text-sm font-bold text-slate-900">{faq.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Ready to Build Clean Contractor Estimates & Invoices in 60 Seconds?
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto leading-relaxed">
            No credit card. No 10-client limitations. No app download. Just professional vector PDFs and spreadsheet exports on demand.
          </p>
          <div className="pt-2">
            <Link
              href="/estimate-templates"
              style={{ color: "#064e3b", backgroundColor: "#ffffff" }}
              className="inline-block px-7 py-3.5 rounded-xl bg-white hover:bg-zinc-100 !text-emerald-950 font-black text-sm shadow-md transition cursor-pointer"
            >
              Get Started for Free — Choose Your Trade
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
