import Link from "next/link";
import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "How to Calculate Tips and Split Bills Fairly: Complete Etiquette & Math Guide";
const description =
  "A comprehensive tipping walkthrough: pre-tax vs post-tax calculation, mental math shortcuts, auto-gratuity for large parties, delivery tipping norms, and bill splitting.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how to calculate tip",
    "tipping etiquette USA",
    "pre tax vs post tax tipping",
    "how much to tip restaurant",
    "split bill fairly",
    "tip calculation formula",
    "mental math tip trick",
  ],
  alternates: {
    canonical: "/blog/how-to-calculate-tips",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: absoluteUrl("/blog/how-to-calculate-tips"),
  },
};

export default function HowToCalculateTipsPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-09-15",
    dateModified: "2026-10-09",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl("/blog/how-to-calculate-tips"),
  };

  return (
    <div className="container container--article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/blog">Blog</Link>
          <span>/</span>
          <span>How to calculate tips</span>
        </nav>
        <span className="badge badge--live">Dining &amp; Everyday Math</span>
        <h1>How to Calculate Tips and Split Bills Fairly</h1>
        <p>
          Everything you need to know about dining gratuities in the U.S. —
          the pre-tax vs. post-tax debate, mental calculation shortcuts,
          auto-gratuity rules, and group bill etiquette — verified with the{" "}
          <Link href="/calculators/tip-calculator">
            CalculatorMint tip calculator
          </Link>
          .
        </p>
      </header>

      <div className="article-byline-bar">
        <div className="article-byline-bar__author">
          <span className="article-byline-bar__avatar">CMP</span>
          <div>
            <strong>CalculatorMint Editorial</strong>
            <span>Published October 9, 2026 · 6 min read</span>
          </div>
        </div>
        <Link href="/blog" className="article-back-link">
          &larr; Back to all guides
        </Link>
      </div>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <article className="blog-article single-post">
        <h2>The State of Tipping in the United States</h2>
        <p>
          Unlike many European or East Asian countries where service charges are
          included in the menu prices, U.S. restaurant servers, bartenders, and
          hospitality workers rely on gratuity for the bulk of their take-home pay.
          Federal minimum wage for tipped employees remains $2.13/hour in many states,
          making tipping a critical part of the dining economy.
        </p>
        <p>
          While 15% was once the undisputed baseline, current consumer benchmarks
          generally range from <strong>18% to 22%</strong> for quality sit-down table service.
        </p>

        <h2>The Great Debate: Should You Tip Pre-Tax or Post-Tax?</h2>
        <p>
          One of the most frequent dilemmas diners face when handed the bill is
          whether to calculate the tip on the <strong>subtotal (pre-tax)</strong> or the
          <strong>final total (post-tax)</strong>.
        </p>
        <ul>
          <li>
            <strong>Traditional Etiquette Rule:</strong> Tipping experts and traditional
            etiquette guides recommend calculating gratuity on the <strong>pre-tax subtotal</strong>.
            Taxes are government levies, not services rendered by your waiter.
          </li>
          <li>
            <strong>Modern POS Terminals:</strong> Most handheld payment screens and
            printed credit card slips calculate suggested tip percentages on the
            <strong>post-tax total</strong>.
          </li>
          <li>
            <strong>The Dollar Difference:</strong> On an $80 meal with 8.5% sales tax
            ($6.80), an 18% tip on the pre-tax amount is $14.40. An 18% tip on the post-tax
            amount ($86.80) is $15.62 — a difference of just $1.22. Most diners choose
            whichever feels simplest, but knowing the distinction prevents surprises.
          </li>
        </ul>

        <h2>Quick Mental Math Shortcuts for Tipping</h2>
        <p>
          You do not need to pull out your phone at every restaurant meal. Here are
          three mental tricks anyone can master:
        </p>

        <h3>1. The Easy 20% Method (Double the 10%)</h3>
        <p>
          To calculate 20% in your head:
        </p>
        <ol>
          <li>Take the subtotal (e.g., $64.00).</li>
          <li>Move the decimal point one position to the left to find 10% ($6.40).</li>
          <li>Double that number: $6.40 × 2 = <strong>$12.80</strong>.</li>
        </ol>

        <h3>2. The 15% Method (10% Plus Half)</h3>
        <p>
          To calculate 15% in your head:
        </p>
        <ol>
          <li>Find 10% of the bill ($64.00 &rarr; $6.40).</li>
          <li>Take half of that 10% amount ($6.40 ÷ 2 = $3.20).</li>
          <li>Add them together: $6.40 + $3.20 = <strong>$9.60</strong>.</li>
        </ol>

        <div className="ad-container ad-container--in-content">
          <AdSlot format="in-article" label="Advertisement" />
        </div>

        <h2>Watch Out for &ldquo;Auto-Gratuity&rdquo;</h2>
        <p>
          Many restaurants automatically add an <strong>18% to 20% service charge</strong>
          for parties of 6 or more guests. Always review your itemized receipt before
          writing in an additional tip. If an automatic gratuity is already listed
          under &ldquo;Gratuity&rdquo; or &ldquo;Service Charge,&rdquo; you do not need to tip again unless
          you wish to leave an extra reward for exceptional service.
        </p>

        <h2>Group Dining: How to Split the Bill Fairly</h2>
        <p>
          Splitting a bill among friends often turns into an uncomfortable math puzzle.
          Here are two standard approaches:
        </p>
        <ul>
          <li>
            <strong>The Even Split:</strong> Best for casual meals where everyone ordered
            comparable dishes and drinks. Take the grand total (including tax and tip)
            and divide by the number of diners.
          </li>
          <li>
            <strong>Itemized Splitting:</strong> Necessary when one or two people ordered
            expensive steaks or cocktails while others had a side salad. Each person
            calculates their individual subtotal, adds their share of tax, and multiplies
            by their chosen tip percentage.
          </li>
        </ul>

        <div className="single-post__callout">
          <h3>Split Your Dining Bill Instantly</h3>
          <p>
            Avoid table-side confusion. Use our free interactive{" "}
            <Link href="/calculators/tip-calculator">
              Tip Calculator &amp; Bill Splitter
            </Link>{" "}
            to compute custom tip percentages, divide costs across any group size,
            and round up to clean dollar figures.
          </p>
          <Link href="/calculators/tip-calculator" className="button button--primary button--sm">
            Launch Tip Calculator &rarr;
          </Link>
        </div>
      </article>

      {/* Explore More Guides */}
      <section className="article-related-section">
        <h3 className="article-related-section__title">Explore More In-Depth Guides</h3>
        <div className="article-related-grid">
          <Link href="/blog/how-to-calculate-percentages" className="article-related-card">
            <span className="article-related-card__cat">Mathematics &amp; Finance</span>
            <h4 className="article-related-card__title">How to Calculate Percentages &amp; Percentage Change</h4>
            <span className="article-related-card__cta">Read Guide &rarr;</span>
          </Link>
          <Link href="/blog/how-to-calculate-a-pay-raise" className="article-related-card">
            <span className="article-related-card__cat">Finance &amp; Career</span>
            <h4 className="article-related-card__title">How to Calculate a Pay Raise in the USA</h4>
            <span className="article-related-card__cta">Read Guide &rarr;</span>
          </Link>
        </div>
      </section>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
