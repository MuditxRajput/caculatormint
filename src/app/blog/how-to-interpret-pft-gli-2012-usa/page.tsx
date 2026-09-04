import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "How to Interpret PFTs with GLI-2012 in the USA";
const description =
  "U.S. spirometry edge cases: wrong ethnicity coding, height errors, fixed 0.70 cutoffs vs LLN, nonspecific patterns, and when a “restrictive” FVC still needs TLC — beyond the calculator formulas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how to interpret PFT USA",
    "GLI-2012 spirometry explained",
    "FEV1 FVC Z-score",
    "LLN pulmonary function",
    "obstruction severity ATS ERS",
    "PFT calculator guide",
  ],
  alternates: {
    canonical: "/blog/how-to-interpret-pft-gli-2012-usa",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: absoluteUrl("/blog/how-to-interpret-pft-gli-2012-usa"),
  },
};

export default function HowToInterpretPftGli2012UsaPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: "2026-08-10",
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
    mainEntityOfPage: absoluteUrl("/blog/how-to-interpret-pft-gli-2012-usa"),
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
          <span>GLI-2012 PFT guide</span>
        </nav>
        <h1>How to interpret PFTs with GLI-2012 in the USA</h1>
        <p>
          Clinic edge cases and interpretation mistakes that change the label —
          then cross-check numbers in the{" "}
          <Link href="/calculators/pft-calculator">
            CalculatorMint PFT calculator
          </Link>
          .
        </p>
      </header>

      <article className="blog-article">
        <p className="meta-line">Health · PFT Calculator · United States</p>

        <p>
          Predicted values, Z-scores, LLN, and ATS/ERS severity bands are already
          documented on the{" "}
          <Link href="/calculators/pft-calculator">PFT calculator page</Link>.
          This guide is about the judgment calls around those numbers —
          especially the places U.S. learners and busy clinicians get tripped up.
        </p>

        <h2>Clinic vignette: two reports, one patient</h2>
        <p>
          A 62-year-old man returns for COPD follow-up. Last year&apos;s report
          used an older adult equation set; this year&apos;s lab switched to
          GLI-2012. His raw FEV1 barely changed, but percent predicted and the
          “below LLN” flags shifted. The patient asks why he is suddenly
          “worse on paper.” He isn&apos;t — the reference frame moved.
        </p>
        <p>
          When you compare serial PFTs, confirm that ethnicity group, height,
          and equation set match. Otherwise you will counsel on noise.
        </p>

        <h2>Mistake: trusting a fixed 0.70 ratio for everyone</h2>
        <p>
          Fixed cutoffs such as FEV1/FVC &lt; 0.70 are easy to remember and still
          appear in some pathways. They tend to over-label obstruction in older
          adults and under-label it in younger ones. GLI-style LLN thinking asks
          a different question: is this ratio unusual for someone of this age,
          sex, height, and ancestry? Borderline older patients are where the two
          approaches disagree most often — and where a quick “0.70 rule”
          mis-teaches students.
        </p>

        <h2>Mistake: wrong ethnicity or stale height</h2>
        <p>
          U.S. EHRs and PFT software may label GLI groups as White/Caucasian,
          African American/Black, Northeast Asian, Southeast Asian, or
          Other/mixed. Choosing the wrong group — or leaving a default that does
          not match how the lab codes ancestry — can move Z-scores across the
          LLN line on borderline tests.
        </p>
        <p>
          Height errors are quieter but common. Chart height from three years ago,
          shoes-on measurement, or a half-inch rounding difference changes
          predicted FEV1 enough to matter when the patient sits near LLN. Use
          today&apos;s standing height for today&apos;s interpretation.
        </p>

        <h2>Edge case: “restriction” that isn&apos;t confirmed yet</h2>
        <p>
          Low FVC with a preserved FEV1/FVC often gets casually called
          restriction. Spirometry can only suggest it. Poor effort, air trapping,
          and true reduced TLC can look similar on a forced maneuver. Before you
          lock in a restrictive diagnosis, ask whether lung volumes (TLC) are
          indicated and whether the blows met quality criteria.
        </p>

        <h2>Edge case: the nonspecific pattern</h2>
        <p>
          Sometimes FEV1 sits below LLN while both the ratio and FVC do not. That
          nonspecific pattern frustrates people who want a single label. It is a
          reminder not to force every report into “obstruction” or “restriction”
          from spirometry alone — and not to treat one percent-predicted number
          as a diagnosis.
        </p>

        <h2>Quality before cleverness</h2>
        <p>
          Acceptability and repeatability failures produce beautiful Z-scores
          that are wrong. Early termination, cough, leak, or extra breaths can
          fake obstruction or restriction. If the tech notes are soft, fix the
          test before debating GLI versus NHANES nostalgia.
        </p>

        <h2>What to do next</h2>
        <p>
          For transparent educational GLI-2012 predicted values and Z-scores,
          open the{" "}
          <Link href="/calculators/pft-calculator">PFT calculator</Link>. For
          patient care, interpret within accredited lab software, clinical
          context, and professional standards. See also the site{" "}
          <Link href="/disclaimer">disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
