import Link from "next/link";
import type { Metadata } from "next";
import { PftCalculator } from "@/components/calculators/PftCalculator";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "PFT Calculator (USA) — GLI-2012 FEV1, FVC & Z-Scores";
const description =
  "Free USA pulmonary function (PFT) calculator. Calculate FEV1, FVC, and FEV1/FVC predicted values, Z-scores, LLN, and ATS/ERS obstruction severity using GLI-2012 equations. For clinicians, researchers, and students.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "PFT calculator",
    "spirometry calculator",
    "GLI-2012 calculator",
    "FEV1 predicted calculator",
    "FVC Z-score calculator",
    "FEV1/FVC LLN",
    "pulmonary function test calculator USA",
    "obstruction severity calculator",
  ],
  alternates: {
    canonical: "/calculators/pft-calculator",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/calculators/pft-calculator"),
    type: "website",
  },
};

const faqs = [
  {
    q: "What does this PFT calculator compute?",
    a: "It uses GLI-2012 reference equations to estimate predicted FEV1, FVC, and FEV1/FVC, percent predicted, lower limit of normal (LLN), Z-scores, a spirometry pattern label, and ATS/ERS 2005 obstruction severity when the ratio is below LLN.",
  },
  {
    q: "Why GLI-2012 for USA use?",
    a: "Many U.S. pulmonary labs and guidelines have moved toward Global Lung Function Initiative (GLI) equations instead of older NHANES III–only norms. GLI-2012 covers ages 3–95 and includes ethnicity-specific coefficients used in U.S. practice.",
  },
  {
    q: "What Z-score means below the LLN?",
    a: "The LLN is the 5th percentile, corresponding to a Z-score of about −1.645. A Z-score below −1.645 is conventionally treated as below the normal range for that index.",
  },
  {
    q: "Can this diagnose restriction?",
    a: "No. A low FVC with a normal FEV1/FVC suggests possible restriction, but total lung capacity (TLC) is required to confirm a restrictive defect. This tool is for educational spirometry interpretation only.",
  },
  {
    q: "Is this a medical device or clinical decision support?",
    a: "No. CalculatorMint provides free educational calculations for clinicians, researchers, and students. It is not FDA-cleared software, does not replace accredited PFT systems, and is not medical advice.",
  },
];

export default function PftCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "PFT Calculator (USA) — GLI-2012",
        url: absoluteUrl("/calculators/pft-calculator"),
        applicationCategory: "HealthApplication",
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
            name: "PFT Calculator",
            item: absoluteUrl("/calculators/pft-calculator"),
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
          <span>PFT Calculator</span>
        </nav>
        <h1>PFT Calculator (USA) — GLI-2012</h1>
        <p>
          Calculate FEV1, FVC, and FEV1/FVC predicted values, Z-scores, LLN, and
          obstruction severity using GLI-2012 reference equations. Free for
          clinicians, researchers, and students.
        </p>
      </header>

      <section className="abv-layout" aria-label="PFT calculator tool">
        <PftCalculator />
      </section>

      <div className="content-stack" style={{ marginBottom: "3rem" }}>
        <article className="prose-panel">
          <h2>How this USA PFT calculator works</h2>
          <ol>
            <li>
              Enter age (3–95), sex, height (inches or cm), and the GLI-2012
              ethnicity group used in U.S. labs.
            </li>
            <li>
              Enter measured <strong>FEV1</strong> and <strong>FVC</strong> in
              liters (optional FEV1/FVC % if you want to match a report).
            </li>
            <li>
              Review predicted mean, % predicted, LLN, Z-score, pattern label,
              and ATS/ERS obstruction severity when the ratio is below LLN.
            </li>
          </ol>
        </article>

        <article className="prose-panel">
          <h2>GLI-2012 equations (overview)</h2>
          <p>
            GLI-2012 models each index with an LMS framework (lambda, mu, sigma)
            so predicted values and Z-scores stay continuous across childhood and
            adulthood:
          </p>
          <code className="formula-block">
            Z = ((measured / M)^L − 1) / (L × S)
          </code>
          <code className="formula-block">
            % predicted = (measured / M) × 100
          </code>
          <code className="formula-block">
            LLN ≈ 5th percentile (Z ≈ −1.645)
          </code>
          <p>
            Height is converted to centimeters internally. U.S. users can enter
            height in inches (default).
          </p>
        </article>

        <article className="prose-panel">
          <h2>Obstruction severity (ATS/ERS 2005)</h2>
          <p>
            When FEV1/FVC is below the LLN, severity is graded by FEV1 %
            predicted:
          </p>
          <ul>
            <li>Mild — FEV1 ≥ 70% predicted</li>
            <li>Moderate — 60–69%</li>
            <li>Moderately severe — 50–59%</li>
            <li>Severe — 35–49%</li>
            <li>Very severe — &lt; 35%</li>
          </ul>
        </article>

        <article className="prose-panel faq">
          <h2>PFT calculator FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
          <p style={{ marginTop: "1rem" }}>
            Read more:{" "}
            <Link href="/blog/how-to-interpret-pft-gli-2012-usa">
              How to interpret PFTs with GLI-2012 in the USA
            </Link>
            .
          </p>
        </article>

        <p className="abv-hint" style={{ marginBottom: "2rem" }}>
          Medical disclaimer: CalculatorMint provides educational spirometry
          math only. It is not a medical device, does not provide diagnosis or
          treatment advice, and must not replace clinician judgment or
          accredited pulmonary function testing systems.
        </p>
      </div>
    </div>
  );
}
