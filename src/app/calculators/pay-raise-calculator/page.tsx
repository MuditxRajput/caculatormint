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
      {
        "@type": "Article",
        headline: "How to Calculate a Pay Raise in the USA",
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
        mainEntityOfPage: absoluteUrl("/calculators/pay-raise-calculator"),
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

      <article className="blog-article">
        <p className="meta-line">Finance · Pay Raise Calculator · United States</p>
        <p>
          A pay raise calculator answers two questions U.S. workers actually
          search: what is a 5 percent raise on my salary, and what does that look
          like on an hourly, bi-weekly, or semi-monthly paycheck? This free USA
          salary increase calculator converts across hourly, weekly, bi-weekly
          (26), semi-monthly (24), monthly, and annual pay. You can enter a
          raise percent, a flat dollar increase, or a new pay target, then see
          yearly increase, real raise versus inflation, and an estimated
          take-home bump after FICA and taxes.
        </p>
        <p>
          Run the numbers in the tool above, then use this guide for the
          formulas, paycheck-schedule traps, and why gross raise is not the same
          as take-home.
        </p>

        <h2>How to use this USA pay raise calculator</h2>
        <ol>
          <li>
            Choose <strong>pay frequency</strong> the way your employer pays:
            hourly, weekly, bi-weekly, semi-monthly, monthly, or annual.
          </li>
          <li>
            Enter <strong>current pay</strong> in that frequency.
          </li>
          <li>
            Set the raise by <strong>percent</strong>, <strong>flat dollars</strong>,
            or <strong>new pay</strong>.
          </li>
          <li>
            Confirm hours per week and weeks per year (U.S. full-time default:
            40 × 52 = 2,080 hours).
          </li>
        </ol>

        <h2>Pay raise formulas (percent, new pay, hourly to salary)</h2>
        <p>New pay from a percentage raise:</p>
        <code className="formula-block">
          New pay = Current pay × (1 + Raise % ÷ 100)
        </code>
        <p>
          Example: $60,000 × 1.05 = <strong>$63,000</strong>. A 5% raise adds
          $3,000 a year before tax. To go the other direction:
        </p>
        <code className="formula-block">
          Raise % = ((New pay − Current pay) ÷ Current pay) × 100
        </code>
        <p>Hourly workers annualize with hours and weeks:</p>
        <code className="formula-block">
          Annual = Hourly × Hours/week × Weeks/year
        </code>
        <p>
          At $25/hour × 40 × 52 = <strong>$52,000</strong> gross. A 10% raise is
          $27.50/hour and $57,200/year (+$5,200). If you work part-time or
          overtime every week, change the hours so the salary conversion matches
          your real schedule.
        </p>

        <h2>Bi-weekly vs semi-monthly pay in the USA</h2>
        <p>
          The raise percentage does not change with paycheck frequency. The
          dollars on each check do. Weekly payroll is 52 checks a year.
          Bi-weekly is every other week (26). Semi-monthly is twice a month on
          set dates (24), which is common for salaried roles. Monthly is 12.
          The same annual salary produces a larger bi-weekly check than a
          semi-monthly check because there are two extra paydays in a typical
          year. This calculator converts across those U.S. schedules so you are
          not comparing a 26-pay number to a 24-pay number by accident.
        </p>

        <h2>Gross raise vs take-home after FICA and taxes</h2>
        <p>
          U.S. employees typically pay <strong>FICA 7.65%</strong> (Social
          Security 6.2% plus Medicare 1.45%) on wages, plus federal income tax
          and any state income tax. A $5,000 gross raise might net closer to
          $3,000–$3,500 depending on bracket and state. Enter your estimated
          combined federal plus state marginal rate to model take-home. That
          estimate is not tax advice and is not a full W-4 paycheck calculator.
        </p>
        <p>
          Inflation also matters. A 3% raise in a 3% inflation year is roughly
          a 0% real raise. Use the inflation field in the tool if you want the
          purchasing-power view, not only the offer-letter percentage.
        </p>

        <h2>Pay raise calculator FAQ</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <p>
          For negotiation and paycheck-schedule examples, read{" "}
          <Link href="/blog/how-to-calculate-a-pay-raise">
            How to calculate a pay raise in the USA
          </Link>
          .
        </p>
      </article>
    </div>
  );
}
