import Link from "next/link";
import type { Metadata } from "next";
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
    dateModified: "2026-09-04",
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
    <div className="container">
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
        <h1>How to calculate beer ABV from OG and FG</h1>
        <p>
          Why two brewers with “the same” beer get different ABVs — and how to
          avoid the measurement traps. Run clean readings in the{" "}
          <Link href="/calculators/abv-calculator">CalculatorMint ABV calculator</Link>
          .
        </p>
      </header>

      <article className="content-stack" style={{ marginBottom: "3rem" }}>
        <div className="prose-panel">
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
            errors that make those equations look “wrong.”
          </p>
        </div>

        <div className="prose-panel">
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
        </div>

        <div className="prose-panel">
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
              <strong>Mixing Plato and SG in one mental formula</strong> — 12 °P
              is not “1.012.” Convert first, or let the calculator do it.
            </li>
            <li>
              <strong>Chasing lab precision from kitchen samples</strong> —
              homebrew ABV is an estimate; packaging labs use distillation or
              densitometry under controlled conditions.
            </li>
          </ul>
        </div>

        <div className="prose-panel">
          <h2>Edge case: stuck fermentation vs finished beer</h2>
          <p>
            A gravity that “won&apos;t drop” can be finished dryness for a malt
            bill — or a stuck ferment. Before you publish ABV, confirm stability
            over a few days, check temperature and yeast health, and compare
            attenuation to the yeast&apos;s expected range. Inflating ABV from
            an unfinished FG is how brew logs claim 7% while bottles later referment
            or taste sweet.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Try it with clean readings</h2>
          <p>
            Once OG and FG are temperature-corrected and taken before priming,
            open the{" "}
            <Link href="/calculators/abv-calculator">
              CalculatorMint ABV calculator
            </Link>{" "}
            for ABV, attenuation, calories, and SG/Plato conversion in one place.
          </p>
        </div>
      </article>
    </div>
  );
}
