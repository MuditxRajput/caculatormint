import type { Metadata } from "next";
import Link from "next/link";
import { AverageCalculator } from "@/components/calculators/AverageCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Weighted Average Calculator — Finance, Stocks & Datasets | CalculatorMint",
  description:
    "Free weighted average calculator. Calculate weighted means for investment portfolios, cost-per-share dollar averaging, inventory, and statistical datasets with full step-by-step formulas.",
  alternates: {
    canonical: "/calculators/weighted-average-calculator",
  },
  openGraph: {
    title: "Weighted Average Calculator — Finance, Stocks & Datasets",
    description:
      "Free weighted average calculator. Calculate weighted means for investment portfolios, cost-per-share dollar averaging, inventory, and statistical datasets with full step-by-step formulas.",
    type: "website",
    url: absoluteUrl("/calculators/weighted-average-calculator"),
  },
  keywords: [
    "weighted average calculator",
    "calculate weighted average",
    "how to calculate weighted average",
    "weighted mean calculator",
    "weighted average formula",
    "weighted score calculator",
    "stock cost basis calculator",
    "weighted average cost of capital",
  ],
};

const faqs = [
  {
    q: "What is a weighted average and when should I use it?",
    a: "A weighted average is a calculation where each data point contributes proportionally to its assigned weight factor rather than having equal influence. You should use a weighted average whenever numbers in your dataset represent varying quantities, share volumes, credit hours, or importance ratings (such as stock portfolio cost bases, academic grades, or multi-branch customer satisfaction scores).",
  },
  {
    q: "What is the formula for calculating a weighted average?",
    a: "The mathematical formula is: Weighted Average = ∑(Value × Weight) ÷ ∑Weights = ∑(w · x) ÷ ∑w. Multiply each value by its corresponding weight, add all the products together, and divide by the total sum of the weights.",
  },
  {
    q: "Do weights have to add up to 100 or 1.0?",
    a: "No! Weights can be any non-negative numbers. They can be whole share quantities (e.g. 50 shares, 150 shares), credit hours (e.g. 3 credits, 4 credits), or arbitrary points. Because the formula divides by the sum of all weights (∑w), the weights are automatically normalized into exact proportions.",
  },
  {
    q: "How does weighted average differ from a simple arithmetic mean?",
    a: "A simple arithmetic mean treats every number equally (sum divided by count). For example, if you buy 10 shares of stock at $10 and 1,000 shares at $20, the simple average is ($10 + $20) ÷ 2 = $15. But your true weighted cost per share is $19.90 because almost all your capital was spent at $20. The simple mean is blind to volume; the weighted average reflects true economic reality.",
  },
  {
    q: "Can weights be negative?",
    a: "In standard practical applications (finance, grading, inventory, physical science), weights must be non-negative (zero or greater). Negative weights can produce mathematical anomalies where the sum of weights approaches zero, causing undefined division.",
  },
];

export default function WeightedAverageCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Weighted Average Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/weighted-average-calculator"),
        description:
          "Free online tool to compute weighted averages for finance portfolios, cost-per-share averaging, inventory valuation, and academic scoring.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
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
            name: "Weighted Average Calculator",
            item: absoluteUrl("/calculators/weighted-average-calculator"),
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
        headline: "How to Calculate Weighted Averages: Equations, Financial Math & Business Applications",
        description:
          "Learn how to compute weighted averages with real-world examples in stock investing, inventory accounting, survey analysis, and corporate finance.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/weighted-average-calculator"),
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
          <span>Weighted Average Calculator</span>
        </nav>
        <span className="page-hero__badge">Finance &amp; Statistics</span>
        <h1>Weighted Average Calculator</h1>
        <p>
          Calculate weighted arithmetic means for stock portfolio dollar-cost averaging, inventory cost
          accounting, survey ratings, and multi-factor decision metrics with full step-by-step breakdown.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Weighted Average Calculator Tool">
        <AverageCalculator initialMode="weighted" />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Editorial Content Below Weighted Calculator */}
      <article className="blog-article">
        <p className="meta-line">Financial Math · Investment Accounting · Decision Science</p>
        <p>
          In traditional mathematics, the standard arithmetic mean assumes that every data point carries
          equal significance. While this works well for simple uniform measurements (like five daily high temperatures),
          it breaks down completely in business, finance, and engineering where individual quantities carry vastly
          different economic stakes.
        </p>
        <p>
          A <strong>weighted average</strong> solves this problem by allowing each observation to exert an influence
          proportional to its designated weight factor (such as share volume, dollar investment, or customer headcount).
        </p>

        <h2>The Weighted Average Formula Explained</h2>
        <p>To compute a weighted mean manually, follow three straightforward steps:</p>
        <code className="formula-block">
          Weighted Average = &sum;(Value &times; Weight) &divide; &sum;Weights = &sum;(w &middot; x) &divide; &sum;w
        </code>
        <ol>
          <li><strong>Step 1:</strong> Multiply each value (x) by its corresponding weight (w) to find each product.</li>
          <li><strong>Step 2:</strong> Add all weighted products together to find the numerator: &sum;(w &middot; x).</li>
          <li><strong>Step 3:</strong> Sum all individual weights to find the denominator: &sum;w.</li>
          <li><strong>Step 4:</strong> Divide the sum of products by the sum of weights.</li>
        </ol>

        <h2>Real-World Example: Stock Portfolio Cost-Per-Share Averaging</h2>
        <p>
          One of the most widespread applications of weighted averages is determining cost basis in equity investments.
          Suppose you buy shares of a technology stock in three separate transactions:
        </p>
        <table className="pay-compare-table" style={{ margin: "1.2rem 0" }}>
          <caption>Transaction Ledger Breakdown</caption>
          <thead>
            <tr>
              <th scope="col">Lot #</th>
              <th scope="col">Share Price ($)</th>
              <th scope="col">Shares Bought (Weight)</th>
              <th scope="col">Total Cost ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tranche 1</th>
              <td>$140.00</td>
              <td>100 shares</td>
              <td>$14,000.00</td>
            </tr>
            <tr>
              <th scope="row">Tranche 2</th>
              <td>$110.00</td>
              <td>250 shares</td>
              <td>$27,500.00</td>
            </tr>
            <tr>
              <th scope="row">Tranche 3</th>
              <td>$125.00</td>
              <td>150 shares</td>
              <td>$18,750.00</td>
            </tr>
          </tbody>
        </table>
        <p>
          Total Capital Invested (&sum;w &middot; x) = $14,000 + $27,500 + $18,750 = <strong>$60,250.00</strong>.<br />
          Total Shares Owned (&sum;w) = 100 + 250 + 150 = <strong>500 shares</strong>.<br />
          Weighted Average Cost per Share = $60,250 &divide; 500 = <strong>$120.50 per share</strong>.
        </p>
        <p>
          Compare this to the simple average of the three transaction prices: ($140 + $110 + $125) &divide; 3 = <strong>$125.00</strong>.
          Relying on the simple mean would overstate your breakeven cost by $4.50 per share!
        </p>

        <h2>Business Application: Blended Customer Satisfaction Scores</h2>
        <p>
          Suppose a company operates three customer service branches with differing call volumes:
        </p>
        <ul>
          <li><strong>Branch A (Chicago):</strong> Satisfaction Score = 95% (Call Volume = 200 calls) &rarr; Product = 19,000</li>
          <li><strong>Branch B (New York):</strong> Satisfaction Score = 82% (Call Volume = 1,200 calls) &rarr; Product = 98,400</li>
          <li><strong>Branch C (Dallas):</strong> Satisfaction Score = 88% (Call Volume = 600 calls) &rarr; Product = 52,800</li>
        </ul>
        <p>
          Total Call Volume = 200 + 1,200 + 600 = <strong>2,000 calls</strong>.<br />
          Total Weighted Sum = 19,000 + 98,400 + 52,800 = <strong>170,200</strong>.<br />
          Company-Wide Blended Satisfaction = 170,200 &divide; 2,000 = <strong>85.10%</strong>.
        </p>

        <h2>Frequently Asked Questions About Weighted Averages</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Need to Calculate Simple Mean, Grades, or Atomic Masses?</h3>
          <p>
            Our calculation suite also includes batch simple arithmetic mean with standard deviation,
            course grade calculators with target final solvers, and chemistry isotope mass calculators.
          </p>
          <Link href="/calculators/average-calculator" className="button button--primary button--sm">
            Launch Complete Average Calculator &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
