import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CalculatorMint — Contractor Support & Tool Requests",
  description:
    "Contact CalculatorMint for support, trade pricing benchmark inquiries, new trade template requests, or partnership opportunities.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact CalculatorMint",
    "contractor estimate support",
    "request trade template",
    "feedback",
  ],
};

export default function ContactPage() {
  return (
    <div className="container py-10 sm:py-16">
      <header className="max-w-3xl mb-12">
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Contact</span>
        </nav>
        <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono border border-emerald-200/80 mb-3">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
          Contact CalculatorMint
        </h1>
        <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
          Questions, trade pricing feedback, custom template requests, or technical support—we are here to help.
        </p>
      </header>

      <article className="max-w-3xl space-y-8 text-sm text-slate-700 leading-relaxed">
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-950">
            How to Reach Us
          </h2>
          <p>
            The fastest way to get in touch with our team is via email:
          </p>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 inline-block font-mono text-sm font-bold text-emerald-700">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
          <p className="text-xs text-slate-500">
            We typically respond within 1 business day (Monday through Friday, 9:00 AM – 6:00 PM EST).
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-950">
            Requesting a New Trade Template
          </h2>
          <p>
            If you work in a specialized trade not currently represented in our 10 primary templates (for example: Solar Installation, Fencing, Masonry, or Asphalt Paving), let us know!
          </p>
          <p className="text-xs text-slate-600">
            Please include your trade specialty, standard unit measurements (sq ft, linear ft, hourly, tons), and typical itemized scope lines. We regularly add new trade presets based on contractor requests.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-slate-950">
            Reporting Pricing Discrepancies
          </h2>
          <p>
            If labor or material rates in your state significantly diverge from our national benchmarks due to local supply chain conditions or regional wage standards, please share your market data with us so we can continue refining regional averages.
          </p>
        </div>
      </article>
    </div>
  );
}
