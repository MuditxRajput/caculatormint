import Link from "next/link";
import type { Metadata } from "next";
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "Percentage Calculator — Free Online Math & Percent Change Tool";
const description =
  "Calculate percentages quickly: find X% of Y, what percentage X is of Y, percentage increase/decrease, and sales tax or discount additions with clear step-by-step formulas.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "percentage calculator",
    "calculate percentage",
    "percent change calculator",
    "percentage increase calculator",
    "percent difference",
    "discount calculator",
    "sales tax percentage",
  ],
  alternates: {
    canonical: "/calculators/percentage-calculator",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: absoluteUrl("/calculators/percentage-calculator"),
  },
};

const faqs = [
  {
    q: "How do I calculate what percentage one number is of another?",
    a: "To find what percentage X is of Y, divide the part (X) by the total (Y) and multiply the result by 100. For example, to find what percent 45 is of 180: (45 ÷ 180) × 100 = 0.25 × 100 = 25%.",
  },
  {
    q: "What is the difference between a percentage change and percentage points?",
    a: "A percentage change measures the relative rate of change between two values ((New − Old) ÷ Old × 100). Percentage points measure the direct arithmetic difference between two percentages. For instance, if interest rates rise from 4% to 5%, that is an increase of 1 percentage point, but a 25% relative increase.",
  },
  {
    q: "How do I calculate a percentage increase or decrease?",
    a: "Subtract the original value from the new value, divide by the original value, and multiply by 100: ((New − Old) ÷ Old) × 100. If the result is positive, it represents an increase; if negative, a decrease. For example, if a price changes from $50 to $75: ((75 − 50) ÷ 50) × 100 = +50%.",
  },
  {
    q: "What is the easiest mental math trick to calculate 10%, 15%, or 20% quickly?",
    a: "To find 10% of any number, move the decimal point one position to the left (10% of $64 is $6.40). To find 20%, double your 10% amount ($6.40 × 2 = $12.80). To find 15%, take 10% and add half of that amount ($6.40 + $3.20 = $9.60).",
  },
  {
    q: "Can a percentage increase exceed 100%?",
    a: "Yes. Any time a quantity more than doubles, the percentage increase exceeds 100%. For example, if a stock price grows from $10 to $30, the increase is ((30 − 10) ÷ 10) × 100 = +200%. However, a percentage decrease can never exceed 100% unless a quantity drops into negative territory.",
  },
];

export default function PercentageCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Percentage Calculator",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/percentage-calculator"),
        description,
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
            name: "Percentage Calculator",
            item: absoluteUrl("/calculators/percentage-calculator"),
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
        headline: "How to Calculate Percentages: The Complete Mathematical Guide",
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
        mainEntityOfPage: absoluteUrl("/calculators/percentage-calculator"),
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
          <span>Percentage Calculator</span>
        </nav>
        <span className="badge badge--live">Mathematics &amp; Finance</span>
        <h1>Free Online Percentage Calculator</h1>
        <p>
          Solve everyday percentage math in seconds: find percentages of values,
          calculate percent increases or decreases, and compute sales taxes or discounts.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <div className="calc-page-layout">
        <PercentageCalculator />
      </div>

      <div className="ad-container ad-container--mid">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>

      {/* Comprehensive Editorial Guide Below Calculator */}
      <article className="blog-article">
        <p className="meta-line">Arithmetic · Financial Mathematics · Statistics</p>
        <p>
          Percentages are the universal language of comparison across finance, retail, statistics,
          and daily life. The word &ldquo;percent&rdquo; originates from the Latin <em>per centum</em>,
          meaning &ldquo;by the hundred&rdquo;. A percentage is simply a ratio or fraction expressed
          with a common denominator of 100. This multi-mode calculator solves the four most common
          percentage questions without manual pencil-and-paper math.
        </p>

        <h2>The Four Core Percentage Calculations Explained</h2>
        <p>
          Virtually all real-world percentage problems fall into one of four mathematical categories:
        </p>

        <h3>1. Calculating a Percentage of a Given Number (&ldquo;What is P% of X?&rdquo;)</h3>
        <p>
          Used when finding tax amounts, discount deductions, tips, or grade weights:
        </p>
        <code className="formula-block">
          Result = (Percentage ÷ 100) × Total
        </code>
        <p>
          <strong>Example:</strong> What is 15% of 200?
          <br />
          Result = (15 ÷ 100) × 200 = 0.15 × 200 = <strong>30</strong>.
        </p>

        <h3>2. Finding What Percentage One Number Represents of Another (&ldquo;X is what % of Y?&rdquo;)</h3>
        <p>
          Used when calculating quiz scores, budget allocations, survey results, or market share:
        </p>
        <code className="formula-block">
          Percentage = (Part ÷ Whole) × 100
        </code>
        <p>
          <strong>Example:</strong> If a student answers 45 out of 180 questions correctly:
          <br />
          Percentage = (45 ÷ 180) × 100 = 0.25 × 100 = <strong>25%</strong>.
        </p>

        <h3>3. Percentage Change: Growth or Decline (&ldquo;Percentage Increase / Decrease&rdquo;)</h3>
        <p>
          Used to measure inflation, annual revenue growth, portfolio changes, or weight changes:
        </p>
        <code className="formula-block">
          Percentage Change = ((New Value − Old Value) ÷ |Old Value|) × 100
        </code>
        <p>
          <strong>Example:</strong> If website traffic grows from 50,000 visitors to 75,000 visitors:
          <br />
          Change = ((75,000 − 50,000) ÷ 50,000) × 100 = (25,000 ÷ 50,000) × 100 = <strong>+50% increase</strong>.
        </p>

        <h3>4. Adding or Subtracting a Percentage (Tax &amp; Discount Adjustments)</h3>
        <p>
          Used for checkout pricing, markup margins, and sales tax calculations:
        </p>
        <code className="formula-block">
          Final Price = Base Amount × (1 ± (Percentage ÷ 100))
        </code>
        <p>
          <strong>Example:</strong> An item priced at $100 with an 8.25% sales tax:
          <br />
          Final = $100 × (1 + 0.0825) = $100 × 1.0825 = <strong>$108.25</strong>.
        </p>

        <h2>Common Mistake: Percentage Points vs. Percent Change</h2>
        <p>
          One of the most frequent errors in news reporting and business presentations is confusing
          <strong> percentage points</strong> with <strong> percentage change</strong>.
        </p>
        <ul>
          <li>
            If unemployment drops from 10% to 8%, it decreased by <strong>2 percentage points</strong>
            (10 − 8 = 2).
          </li>
          <li>
            However, the relative <strong>percentage drop</strong> is ((8 − 10) ÷ 10) × 100 =
            <strong> −20%</strong>.
          </li>
        </ul>
        <p>
          Conflating these two metrics can misrepresent data by an order of magnitude.
        </p>

        <h2>Frequently Asked Questions About Percentages</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Want a Comprehensive Guide with Worked Case Studies?</h3>
          <p>
            Read our in-depth educational tutorial exploring reverse percentages, cumulative
            compounding, and mental math shortcuts.
          </p>
          <Link href="/blog/how-to-calculate-percentages" className="button button--primary button--sm">
            Read Complete Percentage Guide &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
