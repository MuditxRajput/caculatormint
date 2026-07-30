import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "How to Calculate Beer ABV from OG and FG";
const description =
  "Learn how to calculate beer ABV with original gravity and final gravity. Covers the standard formula, alternate Hall equation, attenuation, calories, and hydrometer tips.";

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
    dateModified: "2026-07-30",
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
          A practical guide for homebrewers: take gravity readings, pick the
          right formula, and check your batch with the{" "}
          <Link href="/calculators/abv-calculator">CalculatorMint ABV calculator</Link>
          .
        </p>
      </header>

      <article className="content-stack" style={{ marginBottom: "3rem" }}>
        <div className="prose-panel">
          <h2>What ABV means</h2>
          <p>
            Alcohol by volume (ABV) is the percentage of ethanol in your finished
            beer. Brewers estimate it from the drop in density between original
            gravity (before fermentation) and final gravity (after fermentation).
            Yeast converts sugars into alcohol and CO₂, so a larger gravity drop
            usually means higher ABV.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Step 1: Measure original gravity (OG)</h2>
          <p>
            Cool a wort sample and measure with a hydrometer or refractometer
            before pitching yeast. Record the reading as Specific Gravity (for
            example 1.050) or degrees Plato. Temperature matters — correct
            hydrometer readings to the instrument&apos;s calibration temperature.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Step 2: Measure final gravity (FG)</h2>
          <p>
            When fermentation is finished and gravity is stable for a few days,
            take another sample. Measure FG before adding priming sugar for
            bottling. Priming sugar adds fermentables and would inflate ABV if
            included in FG.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Step 3: Apply an ABV formula</h2>
          <h3>Standard formula</h3>
          <code className="formula-block">ABV = (OG − FG) × 131.25</code>
          <p>
            Example: OG 1.050, FG 1.010 → 0.040 × 131.25 = <strong>5.25% ABV</strong>.
            This is the default most homebrewers use.
          </p>
          <h3>Alternate Hall formula</h3>
          <code className="formula-block">
            ABV = (76.08 × (OG − FG) / (1.775 − OG)) × (FG / 0.794)
          </code>
          <p>
            Use this for stronger beers where the simple constant underestimates
            alcohol. The same 1.050 / 1.010 example returns about{" "}
            <strong>5.34% ABV</strong>.
          </p>
          <p>
            Prefer not to do the math by hand? Use our free{" "}
            <Link href="/calculators/abv-calculator">ABV calculator</Link> —
            it supports SG and Plato plus both equations.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Check attenuation and calories</h2>
          <p>
            Apparent attenuation shows fermentation efficiency:
          </p>
          <code className="formula-block">
            Apparent attenuation = (1 − FG°P / OG°P) × 100
          </code>
          <p>
            For OG 1.050 / FG 1.010 you should see about <strong>79%</strong>{" "}
            attenuation and roughly <strong>163.7 calories</strong> per 12 oz
            using the ASBC Beer-33 calorie method.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Common mistakes</h2>
          <ul>
            <li>Skipping temperature correction on hydrometer samples</li>
            <li>Using a refractometer FG without alcohol correction</li>
            <li>Measuring FG after priming sugar is added</li>
            <li>Mixing Plato and SG values in the same formula</li>
            <li>Expecting lab-perfect ABV from approximate home readings</li>
          </ul>
        </div>

        <div className="prose-panel">
          <h2>Try it now</h2>
          <p>
            Open the{" "}
            <Link href="/calculators/abv-calculator">
              CalculatorMint ABV calculator
            </Link>{" "}
            and enter your OG and FG. Results update instantly with ABV,
            attenuation, calories, and dual-unit gravity readouts.
          </p>
        </div>
      </article>
    </div>
  );
}
