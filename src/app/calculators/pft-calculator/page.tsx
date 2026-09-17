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
      {
        "@type": "Article",
        headline:
          "How to Interpret PFTs with GLI-2012: FEV1, FVC, Z-Scores, and LLN",
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
        mainEntityOfPage: absoluteUrl("/calculators/pft-calculator"),
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

      <article className="blog-article">
        <p className="meta-line">Health · PFT Calculator · United States</p>
        <p>
          A PFT calculator (pulmonary function test calculator) turns measured
          spirometry — FEV1 and FVC in liters — into predicted means, percent
          predicted, Z-scores, and the lower limit of normal (LLN). This free
          USA spirometry calculator uses GLI-2012 reference equations, the set
          many U.S. labs now prefer over older NHANES III–only norms, for ages
          3–95 with ethnicity groups used in American practice. It also labels a
          pattern and, when FEV1/FVC is below the LLN, grades obstruction
          severity with ATS/ERS 2005 FEV1 cutoffs.
        </p>
        <p>
          Enter demographics and measured volumes in the tool above, then use
          this article for the LMS math, what a Z-score of −1.645 means, and why
          a low FVC still needs TLC before anyone calls restriction.
        </p>

        <h2>How to use this USA PFT calculator</h2>
        <ol>
          <li>
            Enter age (3–95), sex, height (inches or cm), and the GLI-2012
            ethnicity group used in U.S. labs.
          </li>
          <li>
            Enter measured <strong>FEV1</strong> and <strong>FVC</strong> in
            liters (optional FEV1/FVC % if you want to match a printed report).
          </li>
          <li>
            Review predicted mean, % predicted, LLN, Z-score, pattern label,
            and ATS/ERS obstruction severity when the ratio is below LLN.
          </li>
        </ol>
        <p>
          Height is converted to centimeters internally. U.S. users can leave
          height in inches (the default). Wrong height or the wrong ethnicity
          code moves predicted values enough to change a borderline label.
        </p>

        <h2>GLI-2012 equations: predicted values, Z-scores, and LLN</h2>
        <p>
          GLI-2012 models each index with an LMS framework (lambda, mu, sigma)
          so predicted values and Z-scores stay continuous from childhood into
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
          A Z-score below about −1.645 is conventionally below the normal range
          for that index. Using a fixed FEV1/FVC cutoff of 0.70 for every adult
          can over-call obstruction in older patients and under-call it in
          younger ones; LLN from GLI-2012 is the approach this calculator
          follows.
        </p>

        <h2>Obstruction severity (ATS/ERS 2005)</h2>
        <p>
          When FEV1/FVC is below the LLN, severity is graded by FEV1 percent
          predicted:
        </p>
        <ul>
          <li>Mild — FEV1 ≥ 70% predicted</li>
          <li>Moderate — 60–69%</li>
          <li>Moderately severe — 50–59%</li>
          <li>Severe — 35–49%</li>
          <li>Very severe — &lt; 35%</li>
        </ul>
        <p>
          A low FVC with a normal FEV1/FVC can look “restrictive” on spirometry,
          but total lung capacity (TLC) is required to confirm a restrictive
          defect. This tool is educational interpretation math, not a medical
          device and not a diagnosis.
        </p>

        <h2>PFT calculator FAQ</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <p>
          For clinic edge cases (ethnicity coding, fixed 0.70 cutoffs, and
          nonspecific patterns), read{" "}
          <Link href="/blog/how-to-interpret-pft-gli-2012-usa">
            How to interpret PFTs with GLI-2012 in the USA
          </Link>
          .
        </p>
        <p className="abv-hint">
          Medical disclaimer: CalculatorMint provides educational spirometry
          math only. It is not a medical device, does not provide diagnosis or
          treatment advice, and must not replace clinician judgment or
          accredited pulmonary function testing systems.
        </p>
      </article>
    </div>
  );
}
