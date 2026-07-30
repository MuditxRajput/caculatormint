import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "How Dog Bite Settlements Work in the USA";
const description =
  "Learn how U.S. dog bite compensation is estimated: economic damages, pain-and-suffering multipliers, strict liability vs one-bite rules, comparative fault, and insurance limits.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "dog bite settlement USA",
    "how dog bite compensation works",
    "strict liability dog bite",
    "one bite rule explained",
    "dog bite pain and suffering",
    "homeowners insurance dog bite",
  ],
  alternates: {
    canonical: "/blog/how-dog-bite-settlements-work-in-the-usa",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: absoluteUrl("/blog/how-dog-bite-settlements-work-in-the-usa"),
  },
};

export default function DogBiteSettlementGuidePost() {
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
    mainEntityOfPage: absoluteUrl(
      "/blog/how-dog-bite-settlements-work-in-the-usa",
    ),
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
          <span>Dog bite settlements</span>
        </nav>
        <h1>How dog bite settlements work in the USA</h1>
        <p>
          A plain-English guide to claim value — then check a range with the{" "}
          <Link href="/calculators/dog-bite-compensation-calculator">
            dog bite compensation calculator
          </Link>
          .
        </p>
      </header>

      <article className="content-stack" style={{ marginBottom: "3rem" }}>
        <div className="prose-panel">
          <h2>Economic damages come first</h2>
          <p>
            U.S. adjusters start with documented hard costs: emergency care,
            hospital bills, antibiotics, surgery, physical therapy, future
            medical needs, lost wages, and related expenses (for example torn
            clothing or travel to appointments). Clean records and prompt care
            strengthen this part of the claim.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Pain and suffering uses a multiplier</h2>
          <p>
            Non-economic damages cover pain, scarring, fear of dogs, and life
            disruption. There is no official formula, but a common negotiating
            method multiplies economic damages by about <strong>1.5× to 6×</strong>{" "}
            depending on severity. Facial wounds, permanent scars, and injuries to
            children usually support higher multipliers.
          </p>
          <code className="formula-block">
            Rough value ≈ Economic damages × (1 + multiplier)
          </code>
        </div>

        <div className="prose-panel">
          <h2>State law changes leverage</h2>
          <p>
            In <strong>strict liability</strong> states, owners are often liable
            for a bite without proof of a prior attack. In{" "}
            <strong>one-bite / negligence</strong> states, prior knowledge of
            danger or negligent control is usually central. Provocation,
            trespassing, and comparative fault can reduce recovery in either
            system.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Insurance limits often set the ceiling</h2>
          <p>
            Most dog bite payouts come from homeowners or renters liability
            coverage. Even a strong claim may settle near the policy limit if the
            owner has little other coverage or assets. That is why settlement
            calculators that ignore insurance can overstate collectible value.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Steps that protect a claim</h2>
          <ul>
            <li>Get medical care and keep every bill and record</li>
            <li>Identify the dog, owner, and insurer</li>
            <li>Report the bite to animal control</li>
            <li>Photograph wounds and the scene</li>
            <li>Collect witness information</li>
            <li>Track lost wages and out-of-pocket costs</li>
            <li>Watch your state’s statute of limitations</li>
          </ul>
        </div>

        <div className="prose-panel">
          <h2>Estimate your range</h2>
          <p>
            Use the{" "}
            <Link href="/calculators/dog-bite-compensation-calculator">
              USA dog bite compensation calculator
            </Link>{" "}
            for a transparent low–high estimate. It is educational only — speak
            with a licensed attorney for advice about your specific case.
          </p>
        </div>
      </article>
    </div>
  );
}
