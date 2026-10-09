import type { Metadata } from "next";
import Link from "next/link";
import { MarginCalculator } from "@/components/calculators/MarginCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Margin & Markup Calculator — Gross Profit & Pricing Math | CalculatorMint",
  description:
    "Calculate profit margin, markup percentage, cost of goods, and selling prices in real-time with bidirectional conversion formulas.",
  alternates: {
    canonical: "/calculators/margin-calculator",
  },
  openGraph: {
    title: "Margin & Markup Calculator — Gross Profit & Pricing Math",
    description:
      "Calculate profit margin, markup percentage, cost of goods, and selling prices in real-time with bidirectional conversion formulas.",
    type: "website",
    url: absoluteUrl("/calculators/margin-calculator"),
  },
  keywords: [
    "margin calculator",
    "markup calculator",
    "gross profit margin calculator",
    "margin vs markup",
    "profit markup formula",
  ],
};

const faqs = [
  {
    q: "What is the critical difference between profit margin and markup?",
    a: "Profit margin measures gross profit as a percentage of total selling price (Revenue). Markup measures gross profit as a percentage of cost of goods sold (COGS). While both use the exact same dollar profit in the numerator, margin uses revenue in the denominator, while markup uses cost in the denominator. Consequently, markup percentage is ALWAYS higher than margin percentage for any profitable sale.",
  },
  {
    q: "Can profit margin ever exceed 100%?",
    a: "No. In standard accounting, profit margin can never reach or exceed 100% unless cost of goods sold is zero or negative. A 100% margin means 100% of revenue is profit with $0 cost. By contrast, markup has no upper limit and can easily exceed 100%, 200%, or 500%.",
  },
  {
    q: "How do I convert a target profit margin into the required markup percentage?",
    a: "To convert margin to markup, use the formula: Markup % = [Margin % ÷ (100 − Margin %)] × 100. For example, if you desire a 40% gross profit margin: Markup = [40 ÷ (100 − 40)] × 100 = (40 ÷ 60) × 100 = 66.67% markup on cost.",
  },
  {
    q: "How do I convert a markup percentage back into profit margin?",
    a: "To convert markup to margin, use the formula: Margin % = [Markup % ÷ (100 + Markup %)] × 100. If you apply a 50% markup on your inventory: Margin = [50 ÷ (100 + 50)] × 100 = (50 ÷ 150) × 100 = 33.33% margin on selling price.",
  },
  {
    q: "What is considered a healthy gross margin for retail and e-commerce businesses?",
    a: "Healthy gross margins vary significantly by industry. Grocery and high-volume retail typically operate on thin gross margins of 15% to 25%. Apparel, consumer electronics, and general e-commerce usually target 40% to 60% gross margins. Software (SaaS) and digital products often achieve 75% to 85%+ gross margins.",
  },
];

export default function MarginCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Margin & Markup Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/margin-calculator"),
        description:
          "Free interactive profit margin and markup calculator for business owners, merchants, and students.",
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
            name: "Margin & Markup Calculator",
            item: absoluteUrl("/calculators/margin-calculator"),
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
        headline: "Profit Margin vs. Markup: The Definitive Business Guide and Conversion Formulas",
        description:
          "Master business pricing strategies: gross profit formulas, margin-to-markup conversions, and pricing psychology.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/margin-calculator"),
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
          <span>Margin &amp; Markup Calculator</span>
        </nav>
        <span className="badge badge--live">Business &amp; Commercial Math</span>
        <h1>Profit Margin &amp; Markup Calculator</h1>
        <p>
          Calculate gross margin, percentage markup, and retail selling prices.
          Easily convert between margin and markup to protect business profitability.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Margin and Markup Calculator tool">
        <MarginCalculator />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Comprehensive Editorial Guide Below Calculator */}
      <article className="blog-article">
        <p className="meta-line">Pricing Strategy · Managerial Accounting · Business Finance</p>
        <p>
          Setting prices is one of the most critical decisions facing entrepreneurs, retailers, and
          freelancers. Yet thousands of businesses fail every year due to a single mathematical
          misunderstanding: confusing <strong>profit margin</strong> with <strong>markup</strong>.
          Confusing the two causes merchants to underprice inventory, bleed operating capital,
          and fall short of profit goals. This interactive calculator allows you to input your cost
          and toggle between desired margin or markup to establish sustainable retail pricing.
        </p>

        <h2>The Fundamental Formulas: Profit, Margin, and Markup</h2>
        <p>
          All pricing calculations begin with Gross Profit (the dollar difference between what a
          customer pays and what the product cost to manufacture or acquire):
        </p>
        <code className="formula-block">
          Gross Profit ($) = Selling Price (Revenue) − Cost of Goods Sold (COGS)
        </code>

        <h3>Gross Profit Margin (%)</h3>
        <p>
          Margin measures the portion of every dollar of sales that your business retains after
          paying for direct inventory costs:
        </p>
        <code className="formula-block">
          Margin (%) = [Gross Profit ($) ÷ Selling Price ($)] × 100
        </code>

        <h3>Markup (%)</h3>
        <p>
          Markup measures how much you mark up the product above its original acquisition cost:
        </p>
        <code className="formula-block">
          Markup (%) = [Gross Profit ($) ÷ Cost of Goods Sold ($)] × 100
        </code>

        <h2>A Clear Numerical Example of the Difference</h2>
        <p>
          Suppose you buy a handcrafted leather wallet from a wholesale supplier for <strong>$60.00</strong>
          and retail it online for <strong>$100.00</strong>:
        </p>
        <ul>
          <li><strong>Gross Profit:</strong> $100.00 − $60.00 = <strong>$40.00</strong></li>
          <li><strong>Gross Margin:</strong> ($40.00 ÷ $100.00) × 100 = <strong>40.0%</strong></li>
          <li><strong>Markup:</strong> ($40.00 ÷ $60.00) × 100 = <strong>66.67%</strong></li>
        </ul>
        <p>
          Notice that for the exact same sale, the markup is 66.67% while the profit margin is only
          40.0%. If an entrepreneur desires a 40% margin and mistakenly adds a 40% markup to their
          $60 cost ($60 × 1.40 = $84 selling price), their actual margin will only be
          ($24 ÷ $84) = <strong>28.6%</strong>, leaving them with substantially less profit than
          budgeted.
        </p>

        <h2>Bidirectional Conversion Formulas</h2>
        <p>
          You can easily convert between margin and markup using these algebraic formulas:
        </p>
        <code className="formula-block">
          Markup = Margin ÷ (1 − (Margin ÷ 100))
        </code>
        <code className="formula-block">
          Margin = Markup ÷ (1 + (Markup ÷ 100))
        </code>

        <h2>Margin vs. Markup Quick Reference Table</h2>
        <table className="pay-compare-table" style={{ margin: "1.5rem 0" }}>
          <caption>Common Margin to Markup Equivalents</caption>
          <thead>
            <tr>
              <th scope="col">Desired Margin</th>
              <th scope="col">Required Markup</th>
              <th scope="col">Multiplier on Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">10.0% Margin</th>
              <td>11.1% Markup</td>
              <td>1.111× Cost</td>
            </tr>
            <tr>
              <th scope="row">20.0% Margin</th>
              <td>25.0% Markup</td>
              <td>1.250× Cost</td>
            </tr>
            <tr>
              <th scope="row">25.0% Margin</th>
              <td>33.3% Markup</td>
              <td>1.333× Cost</td>
            </tr>
            <tr>
              <th scope="row">33.3% Margin</th>
              <td>50.0% Markup</td>
              <td>1.500× Cost</td>
            </tr>
            <tr>
              <th scope="row">40.0% Margin</th>
              <td>66.7% Markup</td>
              <td>1.667× Cost</td>
            </tr>
            <tr>
              <th scope="row">50.0% Margin</th>
              <td>100.0% Markup (Keystone)</td>
              <td>2.000× Cost</td>
            </tr>
            <tr>
              <th scope="row">60.0% Margin</th>
              <td>150.0% Markup</td>
              <td>2.500× Cost</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions About Margin and Markup</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Want a Comprehensive Guide with Business Case Studies?</h3>
          <p>
            Read our complete editorial tutorial on keystone pricing, operating margin analysis,
            and wholesale pricing tiers.
          </p>
          <Link href="/blog/how-to-calculate-margin-and-markup" className="button button--primary button--sm">
            Read Complete Margin &amp; Markup Guide &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
