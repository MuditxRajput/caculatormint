import Link from "next/link";
import type { Metadata } from "next";
import { AbvCalculator } from "@/components/calculators/AbvCalculator";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "ABV Calculator — Alcohol by Volume from OG & FG";
const description =
  "Free ABV calculator for beer. Enter original gravity and final gravity (SG or Plato) to get alcohol by volume, apparent attenuation, and calories per 12 oz using standard and alternate formulas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "abv calculator",
    "alcohol by volume calculator",
    "beer abv calculator",
    "og fg calculator",
    "homebrew abv calculator",
    "calculate abv from gravity",
    "plato abv calculator",
    "apparent attenuation calculator",
  ],
  alternates: {
    canonical: "/calculators/abv-calculator",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/calculators/abv-calculator"),
    type: "website",
  },
};

const faqs = [
  {
    q: "How do you calculate ABV from OG and FG?",
    a: "The standard formula is ABV = (OG − FG) × 131.25, where OG and FG are specific gravity readings. For higher-gravity beers, the alternate Hall formula is usually more accurate.",
  },
  {
    q: "What is a good ABV for beer?",
    a: "Most session beers are about 3–5% ABV, standard ales and lagers 4–6%, and stronger styles like IPA, Belgian tripels, or imperial stouts often range from 7–12%+ ABV.",
  },
  {
    q: "Should I use Specific Gravity or Plato?",
    a: "Use whichever unit your hydrometer or refractometer reports. CalculatorMint converts between SG and °Plato automatically and shows both in the results.",
  },
  {
    q: "When should I use the alternate ABV formula?",
    a: "Use the alternate (Hall) equation for high-gravity beers, especially above roughly 1.070 OG / 8% ABV. For everyday homebrew strengths, the standard formula is fine.",
  },
];

export default function AbvCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "ABV Calculator",
        url: absoluteUrl("/calculators/abv-calculator"),
        applicationCategory: "UtilityApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
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
            name: "Calculators",
            item: absoluteUrl("/calculators"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "ABV Calculator",
            item: absoluteUrl("/calculators/abv-calculator"),
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
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
          <Link href="/calculators">Calculators</Link>
          <span>/</span>
          <span>ABV Calculator</span>
        </nav>
        <h1>ABV Calculator</h1>
        <p>
          Calculate alcohol by volume from original gravity (OG) and final
          gravity (FG). Supports Specific Gravity and Plato, standard and
          alternate formulas, apparent attenuation, and calories per 12 oz.
        </p>
      </header>

      <section className="abv-layout" aria-label="ABV calculator tool">
        <AbvCalculator />
      </section>

      <div className="content-stack" style={{ marginBottom: "3rem" }}>
        <article className="prose-panel">
          <h2>How to use this ABV calculator</h2>
          <ol>
            <li>
              Measure <strong>original gravity (OG)</strong> of your wort before
              fermentation.
            </li>
            <li>
              Measure <strong>final gravity (FG)</strong> after fermentation is
              complete (before priming sugar).
            </li>
            <li>
              Choose SG or Plato to match your instrument, pick Standard or
              Alternate, and read ABV instantly.
            </li>
          </ol>
          <p>
            Hydrometer readings should be temperature-corrected. If you used a
            refractometer during fermentation, convert Brix/°P carefully —
            alcohol skews refractometer readings.
          </p>
        </article>

        <article className="prose-panel">
          <h2>ABV formulas used by CalculatorMint</h2>
          <h3>Standard ABV formula</h3>
          <p>
            Best for everyday beer strengths. Widely used by homebrewers:
          </p>
          <code className="formula-block">ABV = (OG − FG) × 131.25</code>
          <p>
            Example: OG 1.050 and FG 1.010 → (1.050 − 1.010) × 131.25 ={" "}
            <strong>5.25% ABV</strong>.
          </p>

          <h3>Alternate (Hall) ABV formula</h3>
          <p>
            More accurate for high-gravity beers (Dr. Michael Hall / Zymurgy):
          </p>
          <code className="formula-block">
            ABV = (76.08 × (OG − FG) / (1.775 − OG)) × (FG / 0.794)
          </code>
          <p>
            Same example yields about <strong>5.34% ABV</strong> with the
            alternate equation.
          </p>
        </article>

        <article className="prose-panel">
          <h2>Apparent attenuation and calories</h2>
          <p>
            <strong>Apparent attenuation</strong> estimates how much sugar yeast
            consumed: (1 − FG°P / OG°P) × 100. With OG 1.050 and FG 1.010 that is
            about <strong>79%</strong>.
          </p>
          <p>
            <strong>Calories per 12 oz</strong> follow the ASBC Beer-33 method
            (real extract + alcohol by weight). The same sample returns about{" "}
            <strong>163.7 calories</strong> per 12 oz bottle. Calorie math is
            independent of which ABV equation you select.
          </p>
        </article>

        <article className="prose-panel">
          <h2>Essential brewing terms</h2>
          <h3>Original gravity (OG)</h3>
          <p>
            Density of wort before fermentation — a measure of available sugars.
            Higher OG usually means higher potential ABV.
          </p>
          <h3>Final gravity (FG)</h3>
          <p>
            Density after fermentation. Lower FG means a drier beer; higher FG
            means more residual sweetness and body.
          </p>
          <h3>Specific gravity vs Plato</h3>
          <p>
            Specific gravity compares density to water (e.g. 1.050). Degrees
            Plato (°P) express dissolved solids as a percentage by weight. This
            calculator converts between both.
          </p>
          <h3>Alcohol by volume (ABV)</h3>
          <p>
            Percent of the finished beer that is ethanol by volume — the number
            on most beer labels.
          </p>
        </article>

        <article className="prose-panel faq">
          <h2>ABV calculator FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
          <p style={{ marginTop: "1rem" }}>
            Want a deeper walkthrough? Read{" "}
            <Link href="/blog/how-to-calculate-beer-abv">
              How to calculate beer ABV from OG and FG
            </Link>
            .
          </p>
        </article>
      </div>
    </div>
  );
}
