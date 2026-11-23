import type { Metadata } from "next";
import Link from "next/link";
import { AverageCalculator } from "@/components/calculators/AverageCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Average Calculator — Simple, Weighted, Grade & Atomic Mass | CalculatorMint",
  description:
    "Free online average calculator. Compute simple arithmetic mean, weighted averages, course grades with final exam target solver, and chemistry average atomic mass.",
  alternates: {
    canonical: "/calculators/average-calculator",
  },
  openGraph: {
    title: "Average Calculator — Simple, Weighted, Grade & Atomic Mass",
    description:
      "Free online average calculator. Compute simple arithmetic mean, weighted averages, course grades with final exam target solver, and chemistry average atomic mass.",
    type: "website",
    url: absoluteUrl("/calculators/average-calculator"),
  },
  keywords: [
    "average calculator",
    "grade average calculator",
    "how can i calculate the average",
    "how can we calculate average",
    "how to calculate average",
    "weighted average calculator",
    "average grade calculator",
    "how do i calculate average atomic mass",
    "how to calculate average atomic mass",
    "mean calculator",
    "calculate average",
    "arithmetic mean calculator",
  ],
};

const faqs = [
  {
    q: "How can I calculate the average of a set of numbers?",
    a: "To calculate the arithmetic average (mean) manually: 1) Add all the numbers in your data set together to find the Sum (∑x). 2) Count the total number of values in the set (n). 3) Divide the sum by the count. Formula: Average = Sum ÷ Count. For example, to find the average of 80, 90, and 100: (80 + 90 + 100) ÷ 3 = 270 ÷ 3 = 90.",
  },
  {
    q: "What is the difference between Mean, Median, and Mode?",
    a: "While all three are measures of central tendency: The Mean is the mathematical average (sum divided by count). The Median is the middle number when all values are arranged in ascending order (unaffected by extreme outliers). The Mode is the most frequently occurring value in the data set. For symmetric distributions, mean and median are nearly identical; for skewed data (like home prices or salaries), the median often gives a truer picture of the center.",
  },
  {
    q: "How do you calculate a weighted average?",
    a: "A weighted average accounts for the relative importance or proportion of each data point. To calculate it: 1) Multiply each value (x) by its corresponding weight (w) to find each product (w · x). 2) Add all the weighted products together: ∑(w · x). 3) Add all the weights together: ∑w. 4) Divide the sum of the products by the sum of the weights: Weighted Average = ∑(w · x) ÷ ∑w.",
  },
  {
    q: "How do I calculate my current grade average and what I need on the final?",
    a: "To calculate your grade average: Multiply each assignment or exam grade by its syllabus weight percentage, sum those products, and divide by the total percentage of weights completed so far. To find what score you need on your final exam: Desired Final Score Needed = [(Target Course Grade × 100) - Total Completed Points] ÷ Remaining Final Exam Weight.",
  },
  {
    q: "How do I calculate average atomic mass in chemistry?",
    a: "Average atomic mass is the weighted average of all naturally occurring isotopes of an element. Formula: Average Atomic Mass = ∑(Isotope Mass × Fractional Abundance). For example, Chlorine has two main isotopes: Cl-35 (mass 34.969 amu, 75.78% abundance) and Cl-37 (mass 36.966 amu, 24.22% abundance). Average Atomic Mass = (34.969 × 0.7578) + (36.966 × 0.2422) = 26.50 + 8.95 = 35.45 amu.",
  },
  {
    q: "Does a zero in a dataset affect the average?",
    a: "Yes. Unlike an empty or omitted cell, an actual value of 0 increases the denominator (the count) while adding nothing to the numerator (the sum), pulling the arithmetic mean downward. In academic grading, a missing assignment recorded as a 0 has a severe negative impact on a student's grade average.",
  },
];

export default function AverageCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Average Calculator",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/average-calculator"),
        description:
          "Free online calculator for simple arithmetic mean, weighted averages, course grades with final exam target solver, and chemistry average atomic mass.",
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
            name: "Average Calculator",
            item: absoluteUrl("/calculators/average-calculator"),
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
        headline: "How to Calculate the Average: Formulas for Mean, Weighted & Grade Math",
        description:
          "A comprehensive educational guide covering arithmetic mean equations, weighted averages in finance, academic grade calculation, and chemistry isotope atomic mass.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/average-calculator"),
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
          <span>Average Calculator</span>
        </nav>
        <span className="page-hero__badge">Math, Finance &amp; Academics</span>
        <h1>Average Calculator</h1>
        <p>
          Compute simple arithmetic mean, median, and mode, calculate weighted averages for finance
          and portfolios, solve current course grades with final exam targets, and determine chemistry
          average atomic mass.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Average Calculator Tool">
        <AverageCalculator />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Comprehensive Editorial Guide Below Calculator */}
      <article className="blog-article">
        <p className="meta-line">Mathematical Statistics · Academic Grading · Chemistry Foundations</p>
        <p>
          The concept of an <strong>average</strong> is one of the most widely used mathematical principles
          in human civilization. From calculating personal monthly utility bills, test scores, and athlete
          batting averages to balancing investment portfolios and determining atomic weights on the periodic
          table, averages distill collections of scattered data points into a single, representative value.
        </p>
        <p>
          However, calculating an average is not always as simple as adding up numbers and dividing.
          Depending on whether individual data points carry different levels of importance, whether you are
          dealing with academic percentages, or whether you are analyzing natural isotopic abundance,
          the required mathematical methodology changes.
        </p>

        <h2>1. How Can I Calculate the Average? The Fundamental Arithmetic Mean</h2>
        <p>
          When people ask &ldquo;how can I calculate the average?&rdquo;, they are almost always referring to
          the <strong>arithmetic mean</strong>. The arithmetic mean balances the sum of deviations above
          and below the center of a data set.
        </p>
        <p>The mathematical formula is expressed as:</p>
        <code className="formula-block">
          Average (Mean) = &sum;x &divide; n = (x₁ + x₂ + x₃ + ... + xₙ) &divide; n
        </code>
        <p>Where:</p>
        <ul>
          <li><strong>&sum;x (Sum):</strong> The total sum of all individual numbers added together.</li>
          <li><strong>n (Count):</strong> The total number of values present in the data set.</li>
        </ul>

        <h3>Step-by-Step Worked Example: Test Scores</h3>
        <p>
          Suppose a student takes five exams throughout a semester and scores <strong>85, 92, 78, 90, and 88</strong>:
        </p>
        <ol>
          <li><strong>Sum the scores:</strong> 85 + 92 + 78 + 90 + 88 = <strong>433</strong></li>
          <li><strong>Count the tests:</strong> There are 5 scores (n = 5).</li>
          <li><strong>Divide sum by count:</strong> 433 &divide; 5 = <strong>86.6</strong></li>
        </ol>
        <p>The student&rsquo;s arithmetic average exam score is <strong>86.6%</strong>.</p>

        <h2>2. Mean vs. Median vs. Mode: Knowing the Difference</h2>
        <p>
          A common statistical trap is assuming that the mean always represents the &ldquo;typical&rdquo; value.
          Statisticians recognize three distinct measures of central tendency:
        </p>
        <table className="pay-compare-table" style={{ margin: "1.5rem 0" }}>
          <caption>Measures of Central Tendency Comparison</caption>
          <thead>
            <tr>
              <th scope="col">Metric</th>
              <th scope="col">Definition</th>
              <th scope="col">Best Used When</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Mean (Average)</th>
              <td>Sum of all values divided by count</td>
              <td>Data is normally distributed without extreme outliers (e.g. test scores, temperatures).</td>
            </tr>
            <tr>
              <th scope="row">Median</th>
              <td>The exact middle value when sorted</td>
              <td>Data is skewed by huge extremes (e.g. household incomes, real estate home prices).</td>
            </tr>
            <tr>
              <th scope="row">Mode</th>
              <td>The most frequently occurring number</td>
              <td>Analyzing popularity, shoe sizing, retail inventory orders, or survey votes.</td>
            </tr>
          </tbody>
        </table>

        <h2>3. How to Calculate Weighted Average</h2>
        <p>
          A <strong>weighted average</strong> is required when certain numbers in a data set have greater
          influence, frequency, or financial stake than others. Instead of treating each data entry as equal,
          you multiply each value by its relative weight factor.
        </p>
        <code className="formula-block">
          Weighted Average = &sum;(w &middot; x) &divide; &sum;w
        </code>

        <h3>Real-World Finance Example: Stock Dollar-Cost Averaging</h3>
        <p>
          Imagine an investor purchasing shares of an index fund across three separate months:
        </p>
        <ul>
          <li><strong>Month 1:</strong> Bought 100 shares at $50 per share (Product = $5,000)</li>
          <li><strong>Month 2:</strong> Bought 200 shares at $65 per share (Product = $13,000)</li>
          <li><strong>Month 3:</strong> Bought 50 shares at $80 per share (Product = $4,000)</li>
        </ul>
        <p>
          A simple average of the share prices would be ($50 + $65 + $80) &divide; 3 = $65.00.
          However, because the investor bought twice as many shares in Month 2, the true weighted cost per share is:
        </p>
        <p>
          Total Capital Invested = $5,000 + $13,000 + $4,000 = <strong>$22,000</strong><br />
          Total Shares Purchased = 100 + 200 + 50 = <strong>350 shares</strong><br />
          Weighted Average Cost = $22,000 &divide; 350 = <strong>$62.86 per share</strong>.
        </p>

        <h2>4. Grade Average Calculator &amp; What You Need on the Final</h2>
        <p>
          Most high school and college course syllabi use weighted grading categories rather than simple points.
          For instance, homework might be worth 20%, midterms 40%, and the final exam 40%.
        </p>
        <p>
          To find your current standing, multiply each completed category score by its weight, sum the values,
          and divide by the total percentage of the syllabus completed so far.
        </p>
        <p>
          To determine the score needed on your final exam to secure a specific target grade (such as an A or B):
        </p>
        <code className="formula-block">
          Final Exam Needed = [(Target Grade &times; 100) - Completed Grade Points] &divide; Final Exam Weight %
        </code>

        <h2>5. How to Calculate Average Atomic Mass in Chemistry</h2>
        <p>
          In chemistry, the atomic mass listed on the periodic table is not an integer because most elements
          consist of a mixture of naturally occurring isotopes, each having a different number of neutrons
          and different masses.
        </p>
        <code className="formula-block">
          Average Atomic Mass = &sum;(Isotope Mass &times; Fractional Abundance)
        </code>
        <p>
          For example, natural Carbon consists of <strong>98.93% Carbon-12</strong> (mass = 12.0000 amu)
          and <strong>1.07% Carbon-13</strong> (mass = 13.0034 amu):
        </p>
        <p>
          Carbon-12 contribution = 12.0000 &times; 0.9893 = 11.8716 amu<br />
          Carbon-13 contribution = 13.0034 &times; 0.0107 = 0.1391 amu<br />
          Average Atomic Mass = 11.8716 + 0.1391 = <strong>12.011 amu</strong> (the exact value on the periodic table!).
        </p>

        <h2>Frequently Asked Questions About Averages</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Want our Complete Editorial Guide with Statistics Formulas?</h3>
          <p>
            Read our in-depth tutorial detailing standard deviation, outlier detection,
            harmonic and geometric means, and university GPA conversion charts.
          </p>
          <Link href="/blog/how-to-calculate-average" className="button button--primary button--sm">
            Read Complete Average &amp; Statistics Guide &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
