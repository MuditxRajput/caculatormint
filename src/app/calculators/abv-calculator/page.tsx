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
      {
        "@type": "Article",
        headline: "How to Calculate Beer ABV from Original Gravity and Final Gravity",
        description,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/abv-calculator"),
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

      <article className="blog-article">
        <p className="meta-line">Brewing · ABV Calculator · Homebrewing</p>
        <p>
          An ABV calculator tells you how much alcohol is in a finished beer from
          two hydrometer (or converted refractometer) readings: original gravity
          (OG) and final gravity (FG). Homebrewers, brew-day notes, and
          competition entries all use alcohol by volume because it is the number
          on a commercial label. This free beer ABV calculator supports specific
          gravity and Plato, the standard homebrew equation, the alternate Hall
          formula for high-gravity beers, apparent attenuation, and calories per
          12 oz.
        </p>
        <p>
          Use the tool above first, then keep reading for the formulas, a worked
          example, and the measurement mistakes that make two brewers report
          different ABVs for the same batch.
        </p>

        <h2>How to calculate beer ABV from OG and FG</h2>
        <p>
          Measure original gravity of the wort before fermentation. After yeast
          finishes, measure final gravity before priming sugar. Subtract FG from
          OG and scale the difference. Temperature-correct hydrometer samples.
          If you used a refractometer after alcohol is present, do not treat raw
          Brix as FG — ethanol skews the reading.
        </p>
        <ol>
          <li>
            Enter <strong>original gravity (OG)</strong> to match your
            instrument (SG such as 1.050, or °Plato).
          </li>
          <li>
            Enter <strong>final gravity (FG)</strong> after fermentation is
            stable.
          </li>
          <li>
            Choose the <strong>standard</strong> formula for everyday strengths
            or the <strong>alternate (Hall)</strong> formula when OG is high.
          </li>
        </ol>

        <h2>ABV formulas this calculator uses</h2>
        <p>
          The standard alcohol by volume formula is the one most homebrewers
          memorize:
        </p>
        <code className="formula-block">ABV = (OG − FG) × 131.25</code>
        <p>
          Example: OG 1.050 and FG 1.010 → (1.050 − 1.010) × 131.25 ={" "}
          <strong>5.25% ABV</strong>. Session ales, pale lagers, and most
          house beers sit in this range, so the standard equation is usually
          enough.
        </p>
        <p>
          For bigger beers, Dr. Michael Hall’s alternate equation (often cited
          from Zymurgy) accounts for the changing relationship between extract
          and alcohol:
        </p>
        <code className="formula-block">
          ABV = (76.08 × (OG − FG) / (1.775 − OG)) × (FG / 0.794)
        </code>
        <p>
          The same 1.050 / 1.010 example is about <strong>5.34% ABV</strong>.
          The gap widens on imperial stouts, barleywines, and other worts much
          above 1.070 OG. Switch formulas in the calculator when you are
          packaging a high-gravity beer, not because one equation is “more
          official” for every style.
        </p>

        <h2>Apparent attenuation and calories per 12 oz</h2>
        <p>
          Apparent attenuation estimates how much sugar yeast consumed: (1 −
          FG°P / OG°P) × 100. With OG 1.050 and FG 1.010 that is about{" "}
          <strong>79%</strong>. A healthy attenuation number is a fermentation
          check; it is not a second ABV.
        </p>
        <p>
          Calories per 12 oz follow the ASBC Beer-33 approach (real extract plus
          alcohol by weight). The same sample is about{" "}
          <strong>163.7 calories</strong> per 12 oz. Calorie math does not
          change when you toggle standard vs Hall ABV.
        </p>

        <h2>Original gravity, final gravity, SG, and Plato</h2>
        <p>
          Original gravity is the density of wort before fermentation — a
          snapshot of available sugars and potential alcohol. Final gravity is
          density after fermentation: a lower FG is a drier beer; a higher FG
          leaves more residual sweetness and body. Specific gravity compares
          density to water (1.050). Degrees Plato (°P) express dissolved solids
          as a percentage by weight. This OG FG calculator converts between
          both so you can match a hydrometer scale or a Plato lab reading
          without doing the conversion by hand.
        </p>
        <p>
          Alcohol by volume is the percent of the finished beer that is ethanol
          by volume. If two people get different ABVs, the usual cause is the
          sample (hot wort, uncorrected hydrometer, priming sugar in the FG
          sample), not a rounding difference of a few hundredths of a percent.
        </p>

        <h2>ABV calculator FAQ</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <p>
          For brew-day traps in more depth, read{" "}
          <Link href="/blog/how-to-calculate-beer-abv">
            How to calculate beer ABV from OG and FG
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
