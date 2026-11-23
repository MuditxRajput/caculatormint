import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer — Educational Calculators Only | CalculatorMint",
  description:
    "CalculatorMint disclaimer in detail: our tools are educational estimates, not legal, tax, medical, or financial advice. Learn the limits of ABV, pay raise, and dog bite calculators.",
  alternates: { canonical: "/disclaimer" },
  keywords: [
    "calculator disclaimer",
    "not legal advice",
    "educational calculator only",
    "dog bite calculator disclaimer",
  ],
};

export default function DisclaimerPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Disclaimer</span>
        </nav>
        <h1>Disclaimer</h1>
        <p>Last updated: July 30, 2026</p>
      </header>

      <article className="blog-article">
        <p className="meta-line">
          Please read this disclaimer carefully before relying on any{" "}
          {siteConfig.name} calculator, estimate, or article.
        </p>
        <p>
          CalculatorMint publishes free tools and guides so people can learn how
          common calculations work. That mission only stays honest if we are
          explicit about limits. This page is that explanation — in full, not as
          a tiny footer footnote.
        </p>

        <h2>Educational information, not professional advice</h2>
        <p>
          Everything on this website is for general education and information.
          Nothing here is legal advice, tax advice, financial advice, medical
          advice, or professional engineering or laboratory advice. Reading an
          article or using a calculator does not create a client relationship with
          CalculatorMint or its operators.
        </p>
        <p>
          If you have a consequential decision to make — filing a claim, signing
          an offer letter, treating an injury, or certifying product alcohol
          content — talk to a qualified professional and use properly calibrated
          instruments or official processes.
        </p>

        <h2>Dog bite compensation estimates</h2>
        <p>
          The{" "}
          <Link href="/calculators/dog-bite-compensation-calculator">
            dog bite compensation calculator
          </Link>{" "}
          produces a rough settlement range using methods commonly discussed by
          insurers and attorneys: economic damages, a pain-and-suffering
          multiplier scaled by severity, liability adjustments, comparative fault,
          and optional insurance policy caps. State liability labels (strict
          liability, one-bite, or mixed) are general orientation only and can
          change with statutes and case law.
        </p>
        <p>
          Real claims turn on medical documentation, scarring, victim age, witness
          evidence, provocation or trespass defenses, available coverage, and
          negotiation. Two people with identical medical bills can receive very
          different outcomes. Treat the calculator as a starting point for
          understanding categories of damages — never as a promise of what you
          will recover.
        </p>

        <h2>Pay raise and paycheck estimates</h2>
        <p>
          The{" "}
          <Link href="/calculators/pay-raise-calculator">
            USA pay raise calculator
          </Link>{" "}
          converts between common U.S. pay frequencies and estimates raise impact,
          including simplified FICA and user-entered combined tax assumptions. It
          does not model every withholding scenario, pre-tax deduction, local tax,
          overtime rule, or employer-specific payroll calendar.
        </p>
        <p>
          Your offer letter, payroll portal, and tax professional remain the
          authoritative sources for take-home pay.
        </p>

        <h2>Brewing ABV calculations</h2>
        <p>
          The <Link href="/calculators/abv-calculator">ABV calculator</Link> uses
          widely published brewing formulas (standard and alternate). Actual beer
          strength depends on measurement quality: sample temperature, hydrometer
          calibration, refractometer corrections after alcohol is present, and
          process variables. Home readings are estimates, not certified lab
          assays.
        </p>

        <h2>No guarantee of accuracy or availability</h2>
        <p>
          We work hard to implement formulas correctly and keep pages online, but
          we do not guarantee that every result is error-free, complete, or
          up-to-date for your jurisdiction. Software can have bugs. Laws change.
          Rounding choices differ between tools. You are responsible for verifying
          outputs before you rely on them.
        </p>

        <h2>External content and data sources</h2>
        <p>
          Articles may reference industry methods, public guidance, or common
          practice. Citations are for education. They are not an exhaustive legal
          survey of all 50 states or a substitute for primary sources.
        </p>

        <h2>Assumption of risk</h2>
        <p>
          By using CalculatorMint, you accept that you assume the risk of relying
          on educational estimates. To the fullest extent allowed by law,
          CalculatorMint is not liable for decisions made based on site content.
          Additional warranty disclaimers and liability limits appear in the{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>

        <h2>Questions</h2>
        <p>
          If you believe a calculator is misdocumenting a formula, tell us via the{" "}
          <Link href="/contact">contact page</Link>. Formula feedback is welcome.
          Requests for personal case strategy, tax filing help, or medical
          interpretation are outside what we can provide.
        </p>
      </article>
    </div>
  );
}
