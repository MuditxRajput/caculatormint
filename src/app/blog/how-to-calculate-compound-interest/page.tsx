import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "How Compound Interest Works: Formulas, APY vs APR & the Rule of 72 | CalculatorMint",
  description:
    "Learn how compound interest builds wealth: step-by-step mathematical formulas, monthly deposit calculations, compounding frequency differences, and the Rule of 72.",
  alternates: {
    canonical: "/blog/how-to-calculate-compound-interest",
  },
  keywords: [
    "how compound interest works",
    "compound interest formula",
    "APY vs APR formula",
    "rule of 72 compound interest",
    "calculate compound interest with deposits",
    "exponential growth math",
  ],
};

export default function HowToCalculateCompoundInterestPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Compound Interest Works: Formulas, APY vs APR & the Rule of 72",
    description:
      "A complete mathematical guide explaining compound interest formulas, compounding intervals, regular additions, and the Rule of 72.",
    author: {
      "@type": "Organization",
      name: "CalculatorMint Editorial",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: "2026-10-09",
    dateModified: "2026-10-09",
    mainEntityOfPage: `${siteConfig.url}/blog/how-to-calculate-compound-interest`,
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
          <span>How Compound Interest Works</span>
        </nav>
        <span className="blog-card-cat" style={{ display: "inline-block", marginTop: "0.5rem" }}>
          Finance & Math
        </span>
        <h1>How Compound Interest Works: Formulas, APY vs APR & the Rule of 72</h1>
        <p className="meta-line">
          By <strong>CalculatorMint Editorial</strong> &middot; October 9, 2026 &middot; 7 min read
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <article className="blog-article">
        <p>
          Albert Einstein famously called compound interest the &ldquo;eighth wonder of the world&rdquo;
          — noting that he who understands it, earns it; he who does not, pays it. In personal finance,
          retirement planning, and economics, compound interest is the engine that transforms modest,
          consistent savings into exponential long-term wealth.
        </p>
        <p>
          While the general concept is intuitive — you earn interest on your principal, and then earn
          future interest on that accumulated interest — the underlying mathematics, compounding
          schedules, and deposit formulas contain important nuances. In this guide, we break down
          the exact formulas, compare compounding frequencies, explain the distinction between APR
          and APY, and explore practical mental math shortcuts like the Rule of 72.
        </p>

        <div className="hero-actions" style={{ margin: "1.5rem 0" }}>
          <Link href="/calculators/compound-interest-calculator" className="btn btn-primary">
            Launch Interactive Compound Interest Calculator &rarr;
          </Link>
        </div>

        <h2>1. Simple Interest vs. Compound Interest</h2>
        <p>
          To understand compounding, it helps to start with what it is <em>not</em>: simple interest.
        </p>
        <ul>
          <li>
            <strong>Simple Interest:</strong> Interest is paid strictly on the original principal sum.
            Formula: <code>I = P &times; r &times; t</code>.
            If you deposit $1,000 at 5% simple interest, you earn $50 every year, forever.
            After 20 years, you have earned $1,000 in interest ($2,000 total balance).
          </li>
          <li>
            <strong>Compound Interest:</strong> Interest is calculated on the initial principal
            <em>plus</em> all previous accumulated earnings. In year one you earn $50; in year two
            you earn 5% of $1,050 ($52.50); in year three you earn 5% of $1,102.50 ($55.13).
            After 20 years at annual compounding, you have $2,653.30 — an extra $653.30 with zero extra effort.
          </li>
        </ul>

        <h2>2. The Core Mathematical Formula</h2>
        <p>
          The standard equation for calculating the future value of a single lump sum subject to
          periodic compounding is:
        </p>
        <div className="calc-result-formula" style={{ margin: "1rem 0", display: "block" }}>
          A = P &times; (1 + r &divide; n)<sup>n &times; t</sup>
        </div>
        <table className="pay-compare-table" style={{ margin: "1rem 0" }}>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Meaning</th>
              <th>Example Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>A</strong></td>
              <td>Final Accrued Amount (Principal + Interest)</td>
              <td>$10,210.25</td>
            </tr>
            <tr>
              <td><strong>P</strong></td>
              <td>Initial Principal Investment</td>
              <td>$5,000.00</td>
            </tr>
            <tr>
              <td><strong>r</strong></td>
              <td>Annual Nominal Interest Rate (decimal)</td>
              <td>0.07 (7.0%)</td>
            </tr>
            <tr>
              <td><strong>n</strong></td>
              <td>Compounding Frequency per year</td>
              <td>12 (Monthly)</td>
            </tr>
            <tr>
              <td><strong>t</strong></td>
              <td>Number of Years Invested</td>
              <td>10 years</td>
            </tr>
          </tbody>
        </table>

        <h3>Worked Step-by-Step Calculation</h3>
        <p>
          Suppose you invest $5,000 at 7% annual interest compounded monthly for 10 years:
        </p>
        <ol>
          <li>Convert rate to decimal: <code>r = 0.07</code></li>
          <li>Divide by compounding periods: <code>r / n = 0.07 / 12 = 0.0058333</code></li>
          <li>Add 1: <code>1 + 0.0058333 = 1.0058333</code></li>
          <li>Determine total compounding cycles: <code>n &times; t = 12 &times; 10 = 120 cycles</code></li>
          <li>Raise to the exponent: <code>1.0058333^120 = 2.00966</code></li>
          <li>Multiply by principal: <code>$5,000 &times; 2.00966 = $10,048.31</code></li>
        </ol>
        <p>
          Your original $5,000 more than doubles, yielding <strong>$5,048.31 in pure compound interest</strong>.
        </p>

        <div className="ad-container ad-container--in-content">
          <AdSlot format="in-article" label="Advertisement" />
        </div>

        <h2>3. How Compounding Frequency Matters (Annual vs Monthly vs Daily)</h2>
        <p>
          How much difference does the compounding schedule make? Let us compare $10,000 invested at
          6% over 20 years across different compounding schedules:
        </p>
        <table className="pay-compare-table" style={{ margin: "1rem 0" }}>
          <thead>
            <tr>
              <th>Frequency</th>
              <th>Times per Year (n)</th>
              <th>Final Balance (20 Years)</th>
              <th>Total Interest Earned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Annually</td>
              <td>1</td>
              <td>$32,071.35</td>
              <td>$22,071.35</td>
            </tr>
            <tr>
              <td>Quarterly</td>
              <td>4</td>
              <td>$32,906.63</td>
              <td>$22,906.63</td>
            </tr>
            <tr>
              <td>Monthly</td>
              <td>12</td>
              <td>$33,102.04</td>
              <td>$23,102.04</td>
            </tr>
            <tr>
              <td>Daily</td>
              <td>365</td>
              <td>$33,198.61</td>
              <td>$23,198.61</td>
            </tr>
          </tbody>
        </table>
        <p>
          More frequent compounding yields higher returns, though the marginal benefit follows the
          law of diminishing returns as frequency approaches continuous compounding (the mathematical
          limit defined by Euler&rsquo;s number <em>e</em>: <code>A = P &times; e^(rt)</code>).
        </p>

        <h2>4. The Power of Periodic Deposits (Future Value of Annuity)</h2>
        <p>
          Most savers do not invest a single lump sum and walk away; they contribute regular monthly
          deposits from their paycheck. When you add a periodic deposit (PMT), the equation combines
          the initial principal growth with the future value of a series of payments:
        </p>
        <div className="calc-result-formula" style={{ margin: "1rem 0", display: "block" }}>
          Future Value = P &times; (1 + r/n)<sup>nt</sup> + PMT &times; [((1 + i)<sup>m</sup> - 1) &divide; i]
        </div>
        <p>
          Where <em>i</em> is the effective interest rate per payment period and <em>m</em> is the
          total count of deposits.
        </p>
        <p>
          <em>Real-World Impact:</em> Depositing just <strong>$200/month</strong> into a fund averaging
          8% annual return over 30 years results in:
        </p>
        <ul>
          <li>Total out-of-pocket deposits: <code>$200 &times; 360 months = $72,000</code></li>
          <li>Total ending balance: <strong>$298,072.00</strong></li>
          <li>Compound interest generated: <strong>$226,072.00</strong> (over 3 times your actual contributions!)</li>
        </ul>

        <h2>5. The Rule of 72: Instant Mental Math</h2>
        <p>
          Want to know how long it takes for your investment to double without pulling up a spreadsheet?
          Use the <strong>Rule of 72</strong>:
        </p>
        <div className="calc-result-formula" style={{ margin: "1rem 0", display: "block" }}>
          Years to Double &asymp; 72 &divide; Annual Interest Rate (%)
        </div>
        <ul>
          <li>At <strong>6% interest</strong>: 72 &divide; 6 = <strong>12 years</strong> to double.</li>
          <li>At <strong>8% interest</strong>: 72 &divide; 8 = <strong>9 years</strong> to double.</li>
          <li>At <strong>10% interest</strong>: 72 &divide; 10 = <strong>7.2 years</strong> to double.</li>
        </ul>

        <h2>6. APR vs. APY: What Financial Institutions Mean</h2>
        <p>
          When reading bank statements or loan documents, you will encounter both terms:
        </p>
        <ul>
          <li>
            <strong>APR (Annual Percentage Rate):</strong> The nominal, uncompounded annual interest rate.
            It does not reflect compounding within the year.
          </li>
          <li>
            <strong>APY (Annual Percentage Yield):</strong> The effective annual rate that accounts for
            compounding.
            <div className="calc-formula-step" style={{ margin: "0.4rem 0" }}>
              APY = (1 + APR &divide; n)<sup>n</sup> - 1
            </div>
          </li>
        </ul>
        <p>
          For example, a high-yield savings account offering a 5.00% APR compounded daily has an
          <strong> APY of 5.13%</strong>.
        </p>

        <div className="related-calculators" style={{ marginTop: "2.5rem" }}>
          <h3>Explore Related Financial Tools</h3>
          <div className="calc-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: "1rem" }}>
            <div className="calc-item-card">
              <h4>
                <Link href="/calculators/compound-interest-calculator">Compound Interest Calculator</Link>
              </h4>
              <p>Simulate savings timelines with deposits and compounding frequencies.</p>
            </div>
            <div className="calc-item-card">
              <h4>
                <Link href="/calculators/pay-raise-calculator">USA Pay Raise Calculator</Link>
              </h4>
              <p>Model take-home pay increases and inflation across bi-weekly and monthly checks.</p>
            </div>
          </div>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
