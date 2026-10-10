import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "About CalculatorMint — Our Mission, Standards & Calculators",
  description:
    "Learn about CalculatorMint: why we built an accurate calculator resource, how our team verifies mathematical formulas, our editorial principles, and our roadmap.",
  alternates: { canonical: "/about" },
  keywords: [
    "about CalculatorMint",
    "online calculator marketplace",
    "free calculators",
    "accurate calculator tools",
    "editorial standards calculators",
  ],
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About</span>
        </nav>
        <h1>About CalculatorMint</h1>
        <p>
          A free, transparent calculator resource built for mathematical accuracy,
          accessible plain-English explanations, and dependable search answers.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <article className="blog-article">
        <p>
          CalculatorMint was founded with a straightforward conviction: when people
          search for a mathematical calculation online, they deserve instant,
          reliable answers without pop-up traps, hidden formulas, or deceptive paywalls.
          Too many utility websites obscure their equations, offer no reference
          sources, or present outdated calculations.
        </p>
        <p>
          At {siteConfig.name}, we provide the exact opposite: crystal-clear calculation
          engines paired with comprehensive educational guides that explain the &ldquo;how&rdquo;
          and &ldquo;why&rdquo; behind every result.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower professionals, students, consumers, employees,
          and everyday decision-makers with accessible, mathematically verified
          tools. Whether calculating percentage increases and discount margins,
          evaluating the take-home reality of a salary increase across U.S. payroll
          frequencies, splitting restaurant checks with accurate tip rates, or calculating
          beer alcohol by volume for a homebrew batch, our tools offer verified formulas you can trust.
        </p>

        <h2>How We Verify Accuracy & Mathematical Standards</h2>
        <p>
          Accuracy is the bedrock of our platform. We never use arbitrary &ldquo;black-box&rdquo;
          approaches. Each tool is built using established mathematical standards:
        </p>
        <ul>
          <li>
            <strong>Everyday & Business Mathematics:</strong> We implement standard algebraic
            proportions for percentage changes, markups, discounts, and reverse percentages,
            tested against strict edge cases like zero bases and fractional percentages.
          </li>
          <li>
            <strong>Finance & Payroll:</strong> We convert between standard U.S. payroll
            schedules — including hourly (40 hrs/wk, 52 wks/yr), bi-weekly (26 pay periods),
            semi-monthly (24 pay periods), and monthly — while incorporating inflation adjustments
            and estimated tax brackets.
          </li>
          <li>
            <strong>Hospitality & Dining Economics:</strong> We model tip calculations and bill
            splitting across custom group sizes, handling pre-tax and post-tax gratuity
            conventions and nearest-dollar rounding options.
          </li>
          <li>
            <strong>Brewing Science:</strong> We implement both the standard homebrew
            equation and Dr. Michael Hall&rsquo;s high-gravity alternate formula, alongside
            official American Society of Brewing Chemists (ASBC) calorie estimations
            and apparent attenuation models.
          </li>
        </ul>

        <div className="ad-container ad-container--in-content">
          <AdSlot format="in-article" label="Advertisement" />
        </div>

        <h2>What Is Live Today</h2>
        <p>
          Our primary live calculators include:
        </p>
        <ul>
          <li>
            <Link href="/calculators/percentage-calculator">
              Percentage Calculator
            </Link>{" "}
            — Multi-mode calculator for percentage of a number, percentage change, and tax/discount calculations.
          </li>
          <li>
            <Link href="/calculators/discount-calculator">
              Discount & Sale Price Calculator
            </Link>{" "}
            — Markdowns, clearance stackable coupons (&ldquo;extra % off&rdquo;), and post-discount sales tax.
          </li>
          <li>
            <Link href="/calculators/pay-raise-calculator">
              USA Pay Raise Calculator
            </Link>{" "}
            — Detailed comparison across bi-weekly, semi-monthly, and annual paychecks with inflation impact.
          </li>
          <li>
            <Link href="/calculators/compound-interest-calculator">
              Compound Interest Calculator
            </Link>{" "}
            — Exponential savings growth with monthly additions, compounding schedules, and timeline milestones.
          </li>
          <li>
            <Link href="/calculators/tip-calculator">
              Tip & Bill Split Calculator
            </Link>{" "}
            — Real-time gratuity computation with party splitting and smart rounding options.
          </li>
          <li>
            <Link href="/calculators/fuel-cost-calculator">
              Fuel Cost & Road Trip Gas Calculator
            </Link>{" "}
            — Travel budgeting across US MPG and Metric L/100km with passenger cost-splitting.
          </li>
          <li>
            <Link href="/calculators/margin-calculator">
              Profit Margin & Markup Calculator
            </Link>{" "}
            — Wholesale and retail pricing math with bidirectional margin-to-markup conversions.
          </li>
          <li>
            <Link href="/calculators/abv-calculator">Beer ABV Calculator</Link> —
            Supports Specific Gravity (SG) and Plato (&deg;P), apparent attenuation, and calories.
          </li>
          <li>
            <Link href="/calculators/cubic-yard-calculator">Cubic Yard Calculator</Link> —
            Volume estimations for concrete, mulch, gravel, and dirt with bag conversions and waste buffers.
          </li>
          <li>
            <Link href="/calculators/average-calculator">Average Calculator</Link> —
            Simple arithmetic mean, weighted averages, course grades with final exam target solver, and chemistry atomic mass.
          </li>
          <li>
            <Link href="/calculators/grade-calculator">Grade Average Calculator</Link> —
            Weighted course syllabus grading with built-in final exam target score solver.
          </li>
          <li>
            <Link href="/calculators/weighted-average-calculator">Weighted Average Calculator</Link> —
            Weighted arithmetic mean for investment portfolios, stock cost-per-share averaging, and multi-factor models.
          </li>
          <li>
            <Link href="/calculators/cumulative-gpa-calculator">Cumulative GPA Calculator</Link> —
            Cumulative GPA for USA & Canada colleges and high schools with prior transcript credits and Latin honors planning.
          </li>
          <li>
            <Link href="/calculators/gpa-calculator-for-middle-schoolers">GPA Calculator for Middle Schoolers</Link> —
            Report card GPA and Honor Roll calculator for 6th, 7th, and 8th-grade students in the USA and Canada.
          </li>
        </ul>
        <p>
          Each calculator is paired with an in-depth article in our{" "}
          <Link href="/blog">Editorial Blog</Link> detailing formulas, edge cases,
          and common measurement errors.
        </p>

        <h2>Editorial Integrity & Transparency</h2>
        <p>
          All content on {siteConfig.name} is written, reviewed, and maintained by our
          in-house editorial team. We strive for objectivity, clarity, and adherence
          to authoritative reference material. We routinely audit our equations and
          content to maintain compliance with relevant industry updates.
        </p>

        <h2>How We Stay Free: Google AdSense Disclosure</h2>
        <p>
          To maintain all tools, server infrastructure, and editorial guides as free
          resources accessible to everyone without subscription fees, we display
          advertising through Google AdSense. All advertisements are clearly marked,
          and our editorial content and calculations remain completely independent
          from advertising sponsors. For further details on privacy and advertising cookies,
          please consult our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/cookies-policy">Cookies Policy</Link>.
        </p>

        <h2>Feedback & Inquiries</h2>
        <p>
          We actively encourage user feedback. If you discover a rounding discrepancy,
          have a formula recommendation, or want to suggest a new tool, please reach
          out to us via our <Link href="/contact">Contact Page</Link> or email our team
          directly at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
