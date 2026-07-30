import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "How to Calculate a Pay Raise in the USA";
const description =
  "Learn how to calculate a U.S. pay raise by percent or dollar amount, convert hourly to salary (40×52), and understand bi-weekly vs semi-monthly paychecks.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "how to calculate a pay raise",
    "salary increase formula",
    "5 percent raise calculator",
    "hourly to salary raise",
    "biweekly vs semimonthly",
    "pay raise after taxes USA",
  ],
  alternates: {
    canonical: "/blog/how-to-calculate-a-pay-raise",
  },
  openGraph: {
    title,
    description,
    type: "article",
    url: absoluteUrl("/blog/how-to-calculate-a-pay-raise"),
  },
};

export default function HowToCalculatePayRaisePost() {
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
    mainEntityOfPage: absoluteUrl("/blog/how-to-calculate-a-pay-raise"),
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
          <span>How to calculate a pay raise</span>
        </nav>
        <h1>How to calculate a pay raise in the USA</h1>
        <p>
          Use the same payroll conventions U.S. employers use — then check your
          numbers with the{" "}
          <Link href="/calculators/pay-raise-calculator">
            CalculatorMint pay raise calculator
          </Link>
          .
        </p>
      </header>

      <article className="content-stack" style={{ marginBottom: "3rem" }}>
        <div className="prose-panel">
          <h2>Start with how you are paid</h2>
          <p>
            In the United States, compensation is usually quoted as an hourly wage
            or an annual salary, then paid on a schedule: weekly, bi-weekly (26
            times a year), semi-monthly (24 times), or monthly. Always convert to
            the same unit before comparing raises.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Formula for a percentage raise</h2>
          <code className="formula-block">
            New pay = Current pay × (1 + Raise % ÷ 100)
          </code>
          <p>
            A 4% merit raise on a $75,000 salary is $75,000 × 1.04 ={" "}
            <strong>$78,000</strong> — a <strong>$3,000</strong> annual increase.
          </p>
          <p>
            The same percent applies to hourly pay: $20.00 × 1.04 ={" "}
            <strong>$20.80</strong> per hour.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Convert hourly to annual (U.S. full-time)</h2>
          <code className="formula-block">
            Annual gross = Hourly rate × Hours per week × 52
          </code>
          <p>
            Full-time is commonly modeled as <strong>40 × 52 = 2,080</strong>{" "}
            hours per year. Overtime, unpaid time off, or part-time schedules
            change the annual figure — adjust hours and weeks in the calculator.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Bi-weekly vs semi-monthly</h2>
          <p>
            These two U.S. schedules are often confused:
          </p>
          <ul>
            <li>
              <strong>Bi-weekly</strong> — paid every other week → 26 paychecks
            </li>
            <li>
              <strong>Semi-monthly</strong> — paid twice a month → 24 paychecks
            </li>
          </ul>
          <p>
            On a $62,400 salary, bi-weekly gross is about $2,400; semi-monthly is
            $2,600. Your raise percentage is the same either way; only the
            paycheck size differs.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Don&apos;t forget taxes and inflation</h2>
          <p>
            Employee FICA is generally <strong>7.65%</strong> of wages (up to the
            Social Security wage base for the 6.2% portion). Federal and state
            income taxes further reduce take-home. Compare your raise to CPI
            inflation: a 3% raise with 3.5% inflation is a real-pay cut in buying
            power.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Try your numbers</h2>
          <p>
            Open the{" "}
            <Link href="/calculators/pay-raise-calculator">
              USA pay raise calculator
            </Link>{" "}
            to enter percent, flat dollars, or a target new pay and see before/after
            amounts for every U.S. pay period.
          </p>
        </div>
      </article>
    </div>
  );
}
