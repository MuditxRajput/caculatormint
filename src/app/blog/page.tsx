import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { BLOG_POSTS } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Contractor Bidding Guides, Pricing Formulas & Estimating Playbooks (2026)",
  description:
    "Step-by-step contractor guides on how to price painting jobs, roofing squares, commercial cleaning contracts, profit margin vs markup, and cubic yard material quantities.",
  keywords: [
    "contractor bidding guides",
    "how to estimate construction jobs",
    "trade pricing benchmarks 2026",
    "how to bid painting jobs",
    "how to bid commercial cleaning",
    "how to estimate roofing",
    "contractor estimating formulas",
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Contractor Bidding Guides & Formulas | CalculatorMint",
    description:
      "Master contractor pricing, bidding formulas, and profit margins with our comprehensive trade guides.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Contractor Estimating & Bidding Guides",
    description:
      "Comprehensive library of trade estimating formulas, profit margin tutorials, and material calculators.",
    url: `${siteConfig.url}/blog`,
    hasPart: BLOG_POSTS.map((post) => ({
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container py-10 sm:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Contractor Guides</span>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono border border-emerald-200/80 mb-3">
            2026 Bidding Blueprints
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Contractor Bidding & Estimating Guides
          </h1>
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
            In-depth pricing formulas, benchmark rate matrices, and step-by-step bidding blueprints designed to protect your profit margins and help you win more bids.
          </p>
        </div>

        {/* Featured Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/5 transition-all group cursor-pointer block"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 uppercase tracking-wider font-mono">
                    {post.category}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-950 group-hover:text-emerald-700 transition leading-snug">
                  {post.title}
                </h2>
                <p className="text-xs text-slate-500 mt-2.5 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Related Tool Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Interactive Tool:</span>
                  <span className="font-mono font-bold text-emerald-700 text-[11px]">
                    {post.relatedTool.name}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 group-hover:text-emerald-600 group-hover:underline flex items-center gap-1">
                  Read Full Guide <span>→</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Contractor Math Tools Banner */}
        <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono">
              Ready to Quote a Job?
            </span>
            <h3 className="text-xl font-black text-slate-950 mt-1">
              Generate a Client-Ready PDF Estimate in 60 Seconds
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Explore all 10 US trade templates pre-loaded with verified 2026 labor benchmarks, line items, and terms.
            </p>
          </div>
          <Link
            href="/estimate-templates"
            style={{ color: "#ffffff", backgroundColor: "#059669" }}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold rounded-xl transition shadow-sm whitespace-nowrap inline-flex items-center gap-2"
          >
            <span style={{ color: "#ffffff" }} className="!text-white font-bold">Explore All 10 Trade Presets</span>
            <span style={{ color: "#ffffff" }} className="!text-white font-bold">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
