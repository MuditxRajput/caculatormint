import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getBlogBySlug, ALL_BLOG_SLUGS } from "@/data/blogs";
import { siteConfig } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_BLOG_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.seoTitle} | CalculatorMint`,
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;

  // Other posts for internal linking
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seoDescription,
    url: canonicalUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
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
        name: "Contractor Guides",
        item: `${siteConfig.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container py-10 sm:py-16">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-emerald-700 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-emerald-700 transition">
            Contractor Guides
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
            {post.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="max-w-3xl mb-10">
          <div className="flex items-center gap-2.5 mb-4 text-xs font-mono">
            <span className="px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-200/80">
              {post.category}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">{post.readTime}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500">Updated {post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-[1.12]">
            {post.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-6 pt-5 border-t border-slate-200 flex items-center gap-3 text-xs text-slate-500 font-mono">
            <span>By <strong className="text-slate-900">{post.author}</strong></span>
            <span>•</span>
            <span>Verified 2026 US Industry Formulas</span>
          </div>
        </header>

        {/* Featured Interactive Tool CTA Box (Conversion Magnet) */}
        <div className="max-w-3xl mb-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-slate-50 border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-800 font-mono uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Matching Interactive Tool</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-950">
              {post.relatedTool.name}
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              {post.relatedTool.description}
            </p>
          </div>
          <Link
            href={post.relatedTool.href}
            style={{ color: "#ffffff", backgroundColor: "#059669" }}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold transition shadow-sm whitespace-nowrap inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span style={{ color: "#ffffff" }} className="!text-white font-bold">{post.relatedTool.ctaText}</span>
            <span style={{ color: "#ffffff" }} className="!text-white font-bold">→</span>
          </Link>
        </div>

        {/* Article Body Content */}
        <main className="max-w-3xl space-y-12 text-slate-800 leading-relaxed text-sm sm:text-base">
          {post.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight pt-4 border-t border-slate-100">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              {/* Callout box */}
              {section.callout && (
                <div
                  className={`p-5 rounded-xl border my-4 ${
                    section.callout.type === "warning"
                      ? "bg-amber-50/80 border-amber-200 text-amber-950"
                      : section.callout.type === "formula"
                      ? "bg-emerald-50/70 border-emerald-200 text-emerald-950 font-mono"
                      : "bg-slate-50 border-slate-200 text-slate-900"
                  }`}
                >
                  <p className="font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    {section.callout.type === "warning" && "⚠️ Caution:"}
                    {section.callout.type === "formula" && "📐 Formula:"}
                    {section.callout.type === "tip" && "💡 Pro Tip:"}
                    <span>{section.callout.title}</span>
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {section.callout.body}
                  </p>
                </div>
              )}

              {/* List */}
              {section.list && (
                <ul className="space-y-2.5 my-3 pl-2">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Data Table */}
              {section.table && (
                <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl bg-white shadow-xs">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-bold uppercase tracking-wider">
                        {section.table.headers.map((th, thIdx) => (
                          <th key={thIdx} className="py-3 px-3.5">
                            {th}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/60 transition">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="py-2.5 px-3.5 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {/* Frequently Asked Questions */}
          {post.faqs.length > 0 && (
            <section className="pt-8 border-t border-slate-200 space-y-4">
              <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {post.faqs.map((faq, fIdx) => (
                  <details
                    key={fIdx}
                    className="group border border-slate-200 rounded-xl p-4 bg-slate-50/70 open:bg-white transition cursor-pointer"
                    open={fIdx === 0}
                  >
                    <summary className="font-bold text-sm text-slate-950 flex items-center justify-between list-none">
                      <span>{faq.question}</span>
                      <span className="text-emerald-700 font-bold group-open:rotate-180 transition ml-2">
                        ↓
                      </span>
                    </summary>
                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed border-t border-slate-100 pt-2.5">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Bottom Tool CTA */}
          <div className="p-8 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-lg">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                Free Instant PDF Quote Generator
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Build Your Client Estimate Now
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md">
                100% free with verified 2026 US market benchmarks, automatic scope terms, and instant PDF download.
              </p>
            </div>
            <Link
              href={post.relatedTool.href}
              style={{ color: "#ffffff", backgroundColor: "#059669" }}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold rounded-xl transition shadow-sm whitespace-nowrap inline-flex items-center gap-2 cursor-pointer"
            >
              <span style={{ color: "#ffffff" }} className="!text-white font-bold">{post.relatedTool.ctaText}</span>
              <span style={{ color: "#ffffff" }} className="!text-white font-bold">→</span>
            </Link>
          </div>

          {/* Internal Cross-Linking: Related Guides */}
          <section className="pt-8 border-t border-slate-200">
            <h3 className="text-base font-bold text-slate-950 mb-4">
              Related Contractor Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="p-4 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition flex flex-col justify-between group block"
                >
                  <div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 uppercase font-mono">
                      {other.category}
                    </span>
                    <h4 className="font-bold text-slate-950 group-hover:text-emerald-700 transition mt-2 leading-snug">
                      {other.title}
                    </h4>
                  </div>
                  <span className="text-emerald-700 font-bold mt-3 inline-flex items-center gap-1">
                    Read Guide <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
