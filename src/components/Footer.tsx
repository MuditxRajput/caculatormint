import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";
import { TRADES } from "@/data/trades";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label={`${siteConfig.name} home`}>
              <span className="inline-flex items-center gap-2.5">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="48" height="48" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
                  <rect x="10" y="10" width="28" height="10" rx="3" fill="#059669" />
                  <rect x="14" y="13" width="20" height="4" rx="1" fill="#ecfdf5" opacity="0.9" />
                  <rect x="10" y="24" width="7" height="6.5" rx="2" fill="#334155" />
                  <rect x="20.5" y="24" width="7" height="6.5" rx="2" fill="#334155" />
                  <rect x="31" y="24" width="7" height="6.5" rx="2" fill="#10b981" />
                  <rect x="10" y="33.5" width="7" height="6.5" rx="2" fill="#334155" />
                  <rect x="20.5" y="33.5" width="7" height="6.5" rx="2" fill="#334155" />
                  <rect x="31" y="33.5" width="7" height="6.5" rx="2" fill="#34d399" />
                </svg>
                <span className="font-extrabold tracking-tight text-white flex items-center text-lg">
                  <span>Calculator</span>
                  <span className="text-emerald-400 font-black ml-0.5">Mint</span>
                </span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Fast, client-ready estimate templates and bidding calculators with 2026 US trade pricing defaults. Instant vector PDF downloads designed for independent trade contractors.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 text-emerald-400 border border-emerald-900/50 text-xs font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Zero Signup • Free Instant PDF Export
              </span>
            </div>
          </div>

          {/* Column 1: Trade Estimate Templates */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trade Templates
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {TRADES.slice(0, 5).map((trade) => (
                <li key={trade.slug}>
                  <Link
                    href={`/estimate-template/${trade.slug}`}
                    className="hover:text-emerald-400 transition"
                  >
                    {trade.tradeName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/estimate-templates"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 hover:underline inline-flex items-center gap-1"
                >
                  View All 20 Trades →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Bidding Guides */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Bidding Guides
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link
                  href="/blog/contractor-profit-margin-vs-markup"
                  className="hover:text-emerald-400 transition"
                >
                  Margin vs. Markup
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-estimate-painting-jobs"
                  className="hover:text-emerald-400 transition"
                >
                  Painting Job Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-estimate-roofing-jobs"
                  className="hover:text-emerald-400 transition"
                >
                  Roofing Squares Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-bid-commercial-cleaning-contracts"
                  className="hover:text-emerald-400 transition"
                >
                  Janitorial Bidding
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-emerald-400 font-semibold hover:text-emerald-300 hover:underline inline-flex items-center gap-1"
                >
                  All Guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contractor Math Tools */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Math Tools
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link
                  href="/cubic-yard-calculator"
                  className="hover:text-emerald-400 transition"
                >
                  Cubic Yard Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/profit-margin-calculator"
                  className="hover:text-emerald-400 transition"
                >
                  Profit Margin & Markup
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/how-to-calculate-cubic-yards-materials"
                  className="hover:text-emerald-400 transition"
                >
                  Cubic Yard Formulas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Resources */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Legal
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  About CalculatorMint
                </Link>
              </li>
              <li>
                <Link href="/billdu-alternative" className="text-emerald-400 font-semibold hover:text-emerald-300 transition">
                  Billdu Alternative
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-400 transition">
                  Contractor FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-emerald-400 transition">
                  Legal Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {year} {siteConfig.name}. Precision toolkit for US trade contractors.
          </p>
          <p className="text-[11px] text-slate-500 max-w-md text-center sm:text-right">
            Pricing benchmarks and sample templates are for informational purposes. Local material costs, union wage determinations, and state contractor licensing laws apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
