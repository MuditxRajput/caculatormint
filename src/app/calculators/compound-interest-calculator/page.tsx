import type { Metadata } from "next";
import Link from "next/link";
import { CompoundInterestCalculator } from "@/components/calculators/CompoundInterestCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Compound Interest Calculator — Projections & Savings Growth | CalculatorMint",
  description:
    "Calculate compound interest with monthly deposits, annual returns, and multiple compounding frequencies. See timeline growth milestones.",
  alternates: {
    canonical: "/calculators/compound-interest-calculator",
  },
  openGraph: {
    title: "Compound Interest Calculator — Projections & Savings Growth",
    description:
      "Calculate compound interest with monthly deposits, annual returns, and multiple compounding frequencies. See timeline growth milestones.",
    type: "website",
    url: absoluteUrl("/calculators/compound-interest-calculator"),
  },
  keywords: [
    "compound interest calculator",
    "investment growth calculator",
    "savings interest calculator",
    "future value calculator",
    "compound interest formula",
  ],
};

const faqs = [
  {
    q: "What is the fundamental difference between simple interest and compound interest?",
    a: "Simple interest is calculated strictly on the initial principal balance (Interest = P × r × t). Compound interest calculates returns on both the initial principal and all previously accumulated interest. Over long investment horizons, compounding causes your balance to grow exponentially rather than linearly.",
  },
  {
    q: "How does the compounding frequency (daily, monthly, annually) impact my final balance?",
    a: "The more frequently interest is calculated and added to the account (compounding frequency 'n'), the faster your balance accumulates. Daily compounding yields slightly more than monthly, and monthly yields noticeably more than annual compounding. For example, $10,000 at 8% for 10 years yields $21,589 annually vs. $22,196 monthly and $22,253 daily.",
  },
  {
    q: "What is the Rule of 72 and how do I estimate my investment's doubling time?",
    a: "The Rule of 72 is a quick mental math shortcut: divide 72 by your expected annual interest rate to find the approximate number of years required for your investment to double. At a 6% annual return, your money doubles in approximately 72 ÷ 6 = 12 years. At 9%, it doubles in approximately 8 years.",
  },
  {
    q: "How do monthly contributions change the compound interest equation?",
    a: "When you contribute regular amounts (such as $200 per month), the future value includes two components: the initial principal compounded over time, plus the future value of an ordinary annuity series representing your regular deposits.",
  },
  {
    q: "How does inflation affect the real purchasing power of compound interest earnings?",
    a: "Inflation erodes the purchasing power of money over time. To find your 'real' rate of return, subtract the inflation rate from your nominal return rate. If your investment earns 8% annually but inflation averages 3%, your real purchasing power grows at approximately 5% per year.",
  },
];

export default function CompoundInterestCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Compound Interest Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/compound-interest-calculator"),
        description:
          "Free interactive compound interest calculator with monthly deposits and growth schedules.",
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
            name: "Compound Interest Calculator",
            item: absoluteUrl("/calculators/compound-interest-calculator"),
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
        headline: "How Compound Interest Works: Mathematical Formulas and Long-Term Projections",
        description:
          "Comprehensive guide to exponential savings growth, compounding frequencies, annuity formulas, and the Rule of 72.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/compound-interest-calculator"),
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
          <span>Compound Interest Calculator</span>
        </nav>
        <span className="badge badge--live">Personal Finance &amp; Investing</span>
        <h1>Compound Interest Calculator</h1>
        <p>
          Model exponential savings growth with starting balances, monthly contributions,
          custom compounding frequencies, and milestone timelines.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Compound Interest Calculator tool">
        <CompoundInterestCalculator />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Comprehensive Editorial Guide Below Calculator */}
      <article className="blog-article">
        <p className="meta-line">Personal Finance · Wealth Building · Mathematical Modeling</p>
        <p>
          Compound interest is often referred to as the mathematical cornerstone of long-term
          wealth accumulation. Unlike simple interest, which rewards only your original starting
          dollars, compound interest reinvests your earnings so that future interest is paid on
          both your principal and prior gains. Over time, this compounding flywheel creates an
          exponential growth curve that dwarfs ordinary linear savings.
        </p>

        <h2>The Standard Compound Interest Formula</h2>
        <p>
          The fundamental formula for compounding a single lump-sum deposit is:
        </p>
        <code className="formula-block">
          A = P × (1 + r ÷ n)^(n × t)
        </code>
        <p>
          Where each variable represents:
        </p>
        <ul>
          <li><strong>A:</strong> Final future value (total accumulated balance including interest).</li>
          <li><strong>P:</strong> Initial principal investment.</li>
          <li><strong>r:</strong> Annual interest rate expressed as a decimal (e.g., 7% = 0.07).</li>
          <li><strong>n:</strong> Number of compounding periods per year (e.g., 12 for monthly, 365 for daily).</li>
          <li><strong>t:</strong> Time horizon in years.</li>
        </ul>

        <h2>Adding Regular Monthly Deposits: The Annuity Component</h2>
        <p>
          Most investors build wealth by contributing recurring amounts each month rather than
          depositing a single lump sum. When recurring monthly contributions (PMT) are made, the
          future value formula expands to include the future value of an annuity:
        </p>
        <code className="formula-block">
          Total Future Value = P × (1 + r/n)^(n×t) + PMT × [((1 + i)^(n×t) − 1) ÷ i]
        </code>
        <p>
          Where <em>i</em> represents the effective interest rate per period (i = (1 + r/n)^(n/12) − 1).
        </p>
        <p>
          <strong>Worked Example:</strong> Starting with <strong>$5,000</strong>, contributing
          <strong> $200 per month</strong> at a <strong>7% annual return</strong> compounded
          monthly over <strong>10 years</strong>:
        </p>
        <ul>
          <li>Initial $5,000 grows to: $5,000 × (1 + 0.07/12)^120 = <strong>$10,048</strong></li>
          <li>$200/mo contributions total $24,000 and grow to: <strong>$34,617</strong></li>
          <li>
            <strong>Total Final Balance:</strong> <strong>$44,665</strong> (Total deposits of
            $29,000 + <strong>$15,665 in pure compound interest</strong>).
          </li>
        </ul>

        <h2>The Power of Compounding Frequency</h2>
        <p>
          The number of times interest is calculated and credited per year matters because more
          frequent compounding allows gains to begin generating returns sooner:
        </p>
        <ul>
          <li><strong>Annual Compounding (n = 1):</strong> Interest credited once per year.</li>
          <li><strong>Quarterly Compounding (n = 4):</strong> Standard for dividend stocks and mutual funds.</li>
          <li><strong>Monthly Compounding (n = 12):</strong> Common for High-Yield Savings Accounts (HYSAs) and CDs.</li>
          <li><strong>Daily Compounding (n = 365):</strong> Maximizes interest velocity by crediting gains every 24 hours.</li>
        </ul>

        <h2>The Rule of 72: A Quick Doubling Shortcut</h2>
        <p>
          To quickly determine how long it will take for an investment to double without a
          calculator, divide 72 by the expected interest rate:
        </p>
        <code className="formula-block">
          Years to Double ≈ 72 ÷ Annual Interest Rate
        </code>
        <p>
          At an 8% expected return, your initial balance will double in approximately
          72 ÷ 8 = <strong>9 years</strong>. Over a 36-year career, your money would double four
          separate times (growing from $10,000 to $20,000 to $40,000 to $80,000 to $160,000).
        </p>

        <h2>Frequently Asked Questions About Compound Interest</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Want to Dive Deeper into Investment Math?</h3>
          <p>
            Read our complete educational guide exploring inflation adjustments, tax-advantaged
            accounts (401k/IRA), and sequence-of-returns risk.
          </p>
          <Link href="/blog/how-to-calculate-compound-interest" className="button button--primary button--sm">
            Read Complete Compound Interest Guide &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
