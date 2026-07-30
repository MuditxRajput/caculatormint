import Link from "next/link";
import type { Metadata } from "next";
import { PayRaiseCalculator } from "@/components/calculators/PayRaiseCalculator";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "Pay Raise Calculator (USA) — Salary & Hourly Increase";
const description =
  "Free USA pay raise calculator. Enter hourly, weekly, bi-weekly, semi-monthly, monthly, or annual pay to see your new salary, raise %, real raise vs inflation, and estimated take-home.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pay raise calculator",
    "salary increase calculator",
    "raise calculator USA",
    "hourly raise calculator",
    "biweekly pay raise",
    "salary raise percentage",
    "how much is a 5 percent raise",
    "pay raise calculator after taxes",
  ],
  alternates: {
    canonical: "/calculators/pay-raise-calculator",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/calculators/pay-raise-calculator"),
    type: "website",
  },
};

const faqs = [
  {
    q: "How do I calculate a pay raise percentage?",
    a: "Raise % = ((new pay − current pay) ÷ current pay) × 100. A jump from $60,000 to $63,000 is a 5% raise.",
  },
  {
    q: "How do I calculate new pay from a raise percent?",
    a: "New pay = current pay × (1 + raise % ÷ 100). A 5% raise on $60,000 is $63,000.",
  },
  {
    q: "What is the difference between bi-weekly and semi-monthly pay in the USA?",
    a: "Bi-weekly means every other week (26 paychecks per year). Semi-monthly means twice a month on set dates (24 paychecks per year). The same annual salary produces different paycheck sizes under each schedule.",
  },
  {
    q: "How many hours is full-time in the U.S. for salary conversion?",
    a: "Most U.S. calculators annualize hourly pay with 40 hours per week × 52 weeks = 2,080 hours per year. Adjust hours if you work part-time or overtime regularly.",
  },
  {
    q: "Will my take-home raise equal my gross raise?",
    a: "No. Employee FICA is 7.65% (Social Security 6.2% + Medicare 1.45%), and federal plus state income tax also apply. This calculator estimates net raise impact using FICA plus your entered combined tax rate.",
  },
];

export default function PayRaiseCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Pay Raise Calculator (USA)",
        url: absoluteUrl("/calculators/pay-raise-calculator"),
        applicationCategory: "FinanceApplication",
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
            name: "Pay Raise Calculator",
            item: absoluteUrl("/calculators/pay-raise-calculator"),
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
          <span>Pay Raise Calculator</span>
        </nav>
        <h1>Pay Raise Calculator (USA)</h1>
        <p>
          Calculate your new U.S. pay after a raise — hourly, weekly, bi-weekly,
          semi-monthly, monthly, or annual. See raise %, yearly increase, real
          raise vs inflation, and an estimated take-home bump after FICA and taxes.
        </p>
      </header>

      <section className="abv-layout" aria-label="Pay raise calculator tool">
        <PayRaiseCalculator />
      </section>

      <div className="content-stack" style={{ marginBottom: "3rem" }}>
        <article className="prose-panel">
          <h2>How to use this USA pay raise calculator</h2>
          <ol>
            <li>
              Choose your <strong>pay frequency</strong> the way U.S. employers
              pay: hourly, weekly, bi-weekly (26), semi-monthly (24), monthly, or
              annual.
            </li>
            <li>
              Enter your <strong>current pay</strong> in that frequency.
            </li>
            <li>
              Set the raise by <strong>percent</strong>, <strong>flat dollars</strong>,
              or your <strong>new pay</strong> target.
            </li>
            <li>
              Confirm hours/week and weeks/year (defaults: 40 × 52 for U.S.
              full-time).
            </li>
          </ol>
        </article>

        <article className="prose-panel">
          <h2>Pay raise formulas</h2>
          <h3>New pay from a percentage raise</h3>
          <code className="formula-block">
            New pay = Current pay × (1 + Raise % ÷ 100)
          </code>
          <p>
            Example: $60,000 × 1.05 = <strong>$63,000</strong> (a 5% raise adds
            $3,000 per year).
          </p>
          <h3>Raise percentage from old and new pay</h3>
          <code className="formula-block">
            Raise % = ((New pay − Current pay) ÷ Current pay) × 100
          </code>
          <h3>Hourly to annual (U.S. full-time)</h3>
          <code className="formula-block">
            Annual = Hourly × Hours/week × Weeks/year
          </code>
          <p>
            At $25/hour × 40 × 52 = <strong>$52,000</strong> gross per year. A 10%
            raise → $27.50/hour and $57,200/year (+$5,200).
          </p>
        </article>

        <article className="prose-panel">
          <h2>U.S. pay periods explained</h2>
          <ul>
            <li>
              <strong>Weekly</strong> — 52 paychecks/year
            </li>
            <li>
              <strong>Bi-weekly</strong> — every other week, 26 paychecks/year
              (common for hourly and many salaried roles)
            </li>
            <li>
              <strong>Semi-monthly</strong> — twice a month, 24 paychecks/year
              (common for salaried payroll)
            </li>
            <li>
              <strong>Monthly</strong> — 12 paychecks/year
            </li>
          </ul>
          <p>
            The same annual salary produces different paycheck amounts under
            bi-weekly vs semi-monthly schedules. This calculator converts across
            all of them automatically.
          </p>
        </article>

        <article className="prose-panel">
          <h2>Gross raise vs take-home raise</h2>
          <p>
            U.S. employees typically pay <strong>FICA 7.65%</strong> (Social
            Security 6.2% + Medicare 1.45%) on wages, plus federal income tax and
            any state income tax. A $5,000 gross raise might net closer to
            $3,000–$3,500 depending on your bracket and state.
          </p>
          <p>
            Enter your estimated combined federal + state marginal rate to model
            take-home. This is an estimate — not tax advice or a full W-4
            paycheck calculator.
          </p>
        </article>

        <article className="prose-panel faq">
          <h2>Pay raise calculator FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
          <p style={{ marginTop: "1rem" }}>
            More detail:{" "}
            <Link href="/blog/how-to-calculate-a-pay-raise">
              How to calculate a pay raise in the USA
            </Link>
            .
          </p>
        </article>
      </div>
    </div>
  );
}
