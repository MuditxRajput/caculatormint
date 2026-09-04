import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "How to Calculate a Pay Raise in the USA";
const description =
  "A U.S. pay-raise walkthrough through a real offer letter, paycheck-schedule traps, inflation surprises, and negotiation mistakes — then check numbers in the calculator.";

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
          A real-world negotiation story and the mistakes that shrink take-home —
          then verify your own numbers with the{" "}
          <Link href="/calculators/pay-raise-calculator">
            CalculatorMint pay raise calculator
          </Link>
          .
        </p>
      </header>

      <article className="content-stack" style={{ marginBottom: "3rem" }}>
        <div className="prose-panel">
          <h2>A worked scenario: Maya&apos;s offer letter</h2>
          <p>
            Maya earns <strong>$28/hour</strong> at a Midwest logistics firm,
            paid bi-weekly. Her manager offers a “5% raise.” She celebrates —
            until HR sends a revised offer that also switches her to{" "}
            <strong>semi-monthly</strong> salary of $61,000. Was that a raise,
            a lateral move, or a quiet cut?
          </p>
          <p>
            At 40 hours × 52 weeks, her old annual gross was about{" "}
            <strong>$58,240</strong>. The new $61,000 salary is a real increase —
            but her <em>paycheck</em> looks smaller than the old bi-weekly stub
            because 24 semi-monthly checks split the year differently than 26
            bi-weekly ones. Comparing stub-to-stub without converting to annual
            is how people talk themselves into rejecting a good offer — or
            accepting a bad one.
          </p>
          <p>
            Formulas and frequency converters live on the{" "}
            <Link href="/calculators/pay-raise-calculator">
              pay raise calculator page
            </Link>
            . This guide focuses on the judgment calls those formulas do not
            make for you.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Edge case: the “same percent” that isn&apos;t</h2>
          <p>
            Two coworkers both get 4%. One is salaried at $90,000; the other is
            hourly at $22 with frequent overtime. Percent of base rate is not
            percent of total compensation. Overtime, shift differentials,
            bonuses, and tip pools can dwarf a base raise — or make a raise look
            generous while total earnings barely move.
          </p>
          <p>
            Another trap: a promotion that adds title but resets overtime
            eligibility. Going from hourly (OT eligible) to salaried-exempt can
            raise the quoted rate while lowering annual cash if overtime hours
            disappear. Always model total expected hours, not just the headline
            rate.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Common mistakes that shrink real pay</h2>
          <ul>
            <li>
              <strong>Comparing bi-weekly stubs to semi-monthly stubs</strong>{" "}
              without annualizing — the classic 26-vs-24 confusion.
            </li>
            <li>
              <strong>Ignoring inflation</strong> — a 3% raise after 4% CPI is a
              real-pay cut even if the stub went up.
            </li>
            <li>
              <strong>Celebrating gross, spending net</strong> — FICA plus
              federal/state withholding can turn a $4,000 raise into roughly
              $2,500–$3,000 more cash depending on bracket and state.
            </li>
            <li>
              <strong>Forgetting benefits tradeoffs</strong> — higher pay with
              higher health premiums, parking, or lost PTO can erase the gain.
            </li>
            <li>
              <strong>Accepting “market adjustment” language</strong> without
              asking whether it replaces the annual merit cycle.
            </li>
          </ul>
        </div>

        <div className="prose-panel">
          <h2>What to ask HR before you say yes</h2>
          <p>
            Confirm pay frequency, exempt status, overtime rules, when the raise
            hits the first paycheck, and whether bonuses or equity refreshers
            change. Get the new rate in writing with an effective date. Then run
            old vs new through the calculator so you negotiate from annual and
            take-home reality — not from a single confusing stub.
          </p>
        </div>

        <div className="prose-panel">
          <h2>Try your numbers</h2>
          <p>
            Open the{" "}
            <Link href="/calculators/pay-raise-calculator">
              USA pay raise calculator
            </Link>{" "}
            to model percent, flat dollars, or a target new pay across every
            common U.S. pay period — including inflation and a rough tax estimate.
          </p>
        </div>
      </article>
    </div>
  );
}
