import Link from "next/link";
import type { Metadata } from "next";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "How to Calculate Beer ABV from OG and FG";
const description =
  "Homebrew ABV pitfalls: temperature-skewed hydrometers, refractometer FG errors, priming sugar mistakes, and when standard vs Hall readings diverge — without rehashing the calculator formulas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how to calculate abv",
    "calculate beer abv",
    "og fg abv formula",
    "alcohol by volume formula",
    "homebrew abv guide",
    "apparent attenuation",
  ],
  alternates: {
    canonical: "/blog/how-to-calculate-beer-abv",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: absoluteUrl("/blog/how-to-calculate-beer-abv"),
  },
};

export default function HowToCalculateAbvPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-07-30",
    dateModified: "2026-08-30",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl("/blog/how-to-calculate-beer-abv"),
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
          <span>How to calculate beer ABV</span>
        </nav>
        <span className="badge badge--live">Brewing Science</span>
        <h1>How to Calculate Beer ABV from OG and FG</h1>
        <p>
          Why two brewers with “the same” beer get different ABVs — and how to
          avoid the measurement traps. Run clean readings in the{" "}
          <Link href="/calculators/abv-calculator">CalculatorMint ABV calculator</Link>
          .
        </p>
      </header>

      <div className="article-byline-bar">
        <div className="article-byline-bar__author">
          <span className="article-byline-bar__avatar">CMP</span>
          <div>
            <strong>CalculatorMint Editorial</strong>
            <span>Published August 30, 2026 · 6 min read</span>
          </div>
        </div>
        <Link href="/blog" className="article-back-link">
          &larr; Back to all guides
        </Link>
      </div>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      {/* Single Continuous Blog Article */}
      <article className="blog-article single-post">
        <h2>A worked brew day: two ABVs from one batch</h2>
        <p>
          Jordan and Priya brew the same pale ale. Jordan cools the wort sample
          properly and records OG near 1.052. Priya samples hot wort, skips
          temperature correction, and writes 1.046. After fermentation both
          measure FG around 1.012 — but Jordan reports ~5.3% ABV while Priya
          gets something closer to 4.5%. The beer did not change; the{" "}
          <em>measurement discipline</em> did.
        </p>
        <p>
          The calculator page already documents the standard and Hall equations,
          attenuation, and ASBC calories. This article focuses on the human
          errors that make those equations look &ldquo;wrong.&rdquo;
        </p>

        <h2>When standard and Hall disagree (and who is right)</h2>
        <p>
          On everyday session beers the two methods sit close together. On
          big stouts, barleywines, and imperial IPAs the gap widens — often by
          several tenths of a percent. That is not a bug in your calculator; it
          is the simple constant running out of steam at high gravity.
        </p>
        <p>
          Practical rule many competition brewers use: trust the simpler method
          for normal-strength beer, switch to the alternate Hall approach when
          OG climbs into the high 1.070s or the beer is clearly above ~8% ABV.
          If a label or BJCP entry asks for one number, pick a method and stick
          with it for the whole batch log — do not mix methods mid-fermentation.
        </p>

        <h2>Common mistakes that fake high or low ABV</h2>
        <ul>
          <li>
            <strong>Hot hydrometer samples</strong> — warm wort reads lighter
            than it is; uncorrected OG understates potential alcohol.
          </li>
          <li>
            <strong>Refractometer FG without alcohol correction</strong> —
            ethanol skews Brix; raw FG looks too high and ABV looks too low.
          </li>
          <li>
            <strong>Measuring FG after priming sugar</strong> — added
            fermentables push FG up and understate finished ABV for the beer
            you actually bottled.
          </li>
          <li>
            <strong>Mixing Plato and SG in one mental formula</strong> — 12 &deg;P
            is not &ldquo;1.012.&rdquo; Convert first, or let the calculator do it.
          </li>
          <li>
            <strong>Chasing lab precision from kitchen samples</strong> —
            homebrew ABV is an estimate; packaging labs use distillation or
            densitometry under controlled conditions.
          </li>
        </ul>

        <div className="ad-container ad-container--in-content">
          <AdSlot format="in-article" label="Advertisement" />
        </div>

        <h2>Edge case: stuck fermentation vs finished beer</h2>
        <p>
          A gravity that &ldquo;won&apos;t drop&rdquo; can be finished dryness for a malt
          bill — or a stuck ferment. Before you publish ABV, confirm stability
          over a few days, check temperature and yeast health, and compare
          attenuation to the yeast&apos;s expected range. Inflating ABV from
          an unfinished FG is how brew logs claim 7% while bottles later referment
          or taste sweet.
        </p>

        <div className="single-post__callout">
          <h3>Try it with clean readings</h3>
          <p>
            Once your OG and FG samples are temperature-corrected and taken before
            priming, open the{" "}
            <Link href="/calculators/abv-calculator">
              CalculatorMint ABV Calculator
            </Link>{" "}
            for instantaneous ABV, apparent attenuation, ASBC calories, and
            SG/Plato conversion in one verified tool.
          </p>
          <Link href="/calculators/abv-calculator" className="button button--primary button--sm">
            Launch Beer ABV Calculator &rarr;
          </Link>
        </div>
      </article>

      {/* Explore More Guides */}
      <section className="article-related-section">
        <h3 className="article-related-section__title">Explore More In-Depth Guides</h3>
        <div className="article-related-grid">
          <Link href="/blog/how-to-calculate-a-pay-raise" className="article-related-card">
            <span className="article-related-card__cat">Finance &amp; Career</span>
            <h4 className="article-related-card__title">How to Calculate a Pay Raise in the USA</h4>
            <span className="article-related-card__cta">Read Guide &rarr;</span>
          </Link>
          <Link href="/blog/how-to-calculate-percentages" className="article-related-card">
            <span className="article-related-card__cat">Math &amp; Analytics</span>
            <h4 className="article-related-card__title">How to Calculate Percentages &amp; Percentage Change</h4>
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
