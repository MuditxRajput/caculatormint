import type { Metadata } from "next";
import Link from "next/link";
import { AverageCalculator } from "@/components/calculators/AverageCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grade Average Calculator — Course & Final Exam Target | CalculatorMint",
  description:
    "Free grade average calculator. Calculate weighted course grades, determine current academic standing, and solve the exact score needed on your final exam.",
  alternates: {
    canonical: "/calculators/grade-calculator",
  },
  openGraph: {
    title: "Grade Average Calculator — Course & Final Exam Target",
    description:
      "Free grade average calculator. Calculate weighted course grades, determine current academic standing, and solve the exact score needed on your final exam.",
    type: "website",
    url: absoluteUrl("/calculators/grade-calculator"),
  },
  keywords: [
    "grade average calculator",
    "average grade calculator",
    "grade calculator",
    "final grade calculator",
    "calculate grade average",
    "weighted grade calculator",
    "how to calculate grade average",
    "what do i need on my final exam",
    "course grade calculator",
    "college grade calculator",
  ],
};

const faqs = [
  {
    q: "How do I calculate my current grade average with weighted categories?",
    a: "To calculate your weighted grade average: 1) Multiply each category score (percentage) by its syllabus weight percentage (e.g., Homework 90% × 20% = 18 points). 2) Sum all earned points together. 3) Sum the total percentage weights completed so far. 4) Divide total earned points by total completed weight. For example: 51 points earned out of 60% completed = 51 ÷ 0.60 = 85.0% (Current Grade = B).",
  },
  {
    q: "How do I figure out what score I need on my final exam to get an A or B?",
    a: "Use the final exam target formula: Score Needed = [(Target Desired Grade × 100) - Total Earned Points] ÷ Remaining Final Exam Weight %. For example, if you want an overall 90% (A), have 51 earned points, and the final is worth 40% of the class: Score Needed = (90 - 51) ÷ 0.40 = 39 ÷ 0.40 = 97.5%. You need a 97.5% on the final to secure an A.",
  },
  {
    q: "What is the difference between a weighted grade and an unweighted grade?",
    a: "In an unweighted grading system, every assignment point counts equally (total points earned divided by total points possible). In a weighted system, the teacher assigns specific percentages to categories (e.g. Tests 50%, Quizzes 30%, Homework 20%). A 100% on a 10-point homework assignment has far less impact on your final course grade than an 80% on a 100-point midterm exam.",
  },
  {
    q: "How do percentages convert to a standard 4.0 GPA scale?",
    a: "In most US high schools and universities: 93–100% = A (4.0), 90–92% = A- (3.7), 87–89% = B+ (3.3), 83–86% = B (3.0), 80–82% = B- (2.7), 77–79% = C+ (2.3), 73–76% = C (2.0), 70–72% = C- (1.7), 67–69% = D+ (1.3), 60–66% = D (1.0), and below 60% = F (0.0).",
  },
  {
    q: "Does getting a 0 on a missed assignment ruin your grade?",
    a: "Yes. Because weighted math divides your total points by completed weight, entering a 0 adds 0 points to your numerator while locking in the full category weight in the denominator, resulting in a severe mathematical penalty.",
  },
];

export default function GradeCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Grade Average Calculator",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/grade-calculator"),
        description:
          "Free online grade calculator for weighted high school and university courses with built-in final exam score requirement solver.",
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
            name: "Grade Average Calculator",
            item: absoluteUrl("/calculators/grade-calculator"),
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
        headline: "How to Calculate Grade Averages: Weighted Syllabi & Final Exam Target Math",
        description:
          "A step-by-step student guide to computing course standing, understanding category weights, and solving the score required on upcoming final exams.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/grade-calculator"),
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
          <span>Grade Calculator</span>
        </nav>
        <span className="page-hero__badge">Academics &amp; GPA</span>
        <h1>Grade Average Calculator</h1>
        <p>
          Calculate your current weighted course grade and discover exactly what score you need
          on your final exam to secure an A (90%), B (80%), or C (70%).
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Grade Average Calculator Tool">
        <AverageCalculator initialMode="grade" />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Editorial Content Below Grade Calculator */}
      <article className="blog-article">
        <p className="meta-line">Academic Grading · High School &amp; University Syllabus Math</p>
        <p>
          Throughout the academic semester, few questions create more stress for students than
          <em> &ldquo;What is my current grade average?&rdquo;</em> and <em>&ldquo;What do I need on the final exam to pass or keep my scholarship?&rdquo;</em>
          Because contemporary educational institutions in the United States and Canada rely almost universally
          on <strong>weighted grading systems</strong>, figuring out your standing requires more than simple addition.
        </p>

        <h2>The Standard Weighted Grade Formula</h2>
        <p>
          When your course instructor assigns percentage weights to categories (such as Homework, Midterms, Quizzes,
          and Projects), your final grade is calculated using the weighted average formula:
        </p>
        <code className="formula-block">
          Overall Grade % = &sum;(Score Earned &times; Category Weight) &divide; &sum;Total Weight
        </code>

        <h3>Worked Example: Mid-Semester Grade Check</h3>
        <p>Suppose you are halfway through an introductory chemistry course with the following grades:</p>
        <ul>
          <li><strong>Homework (15% of grade):</strong> Score = 95% &rarr; 95 &times; 0.15 = <strong>14.25 pts</strong></li>
          <li><strong>Quizzes (15% of grade):</strong> Score = 85% &rarr; 85 &times; 0.15 = <strong>12.75 pts</strong></li>
          <li><strong>Midterm 1 (20% of grade):</strong> Score = 82% &rarr; 82 &times; 0.20 = <strong>16.40 pts</strong></li>
          <li><strong>Midterm 2 (20% of grade):</strong> Score = 90% &rarr; 90 &times; 0.20 = <strong>18.00 pts</strong></li>
          <li><strong>Final Exam (30% of grade):</strong> Upcoming</li>
        </ul>
        <p>
          Total points earned so far = 14.25 + 12.75 + 16.40 + 18.00 = <strong>61.4 points</strong>.<br />
          Total syllabus weight completed = 15% + 15% + 20% + 20% = <strong>70% (0.70)</strong>.<br />
          Current Course Grade = 61.4 &divide; 0.70 = <strong>87.71% (Solid B+)</strong>.
        </p>

        <h2>How to Calculate What You Need on Your Final Exam</h2>
        <p>
          To calculate the minimum percentage score you must achieve on the remaining final exam to earn
          your target final letter grade, use this straightforward algebraic equation:
        </p>
        <code className="formula-block">
          Score Needed = (Target Grade &times; 100 - Total Completed Points) &divide; Final Exam Weight %
        </code>
        <p>Continuing the example above, the final exam is worth <strong>30%</strong>:</p>
        <ul>
          <li>
            <strong>To earn an A (90% overall):</strong><br />
            (90 - 61.4) &divide; 0.30 = 28.6 &divide; 0.30 = <strong>95.33%</strong> on the Final.
          </li>
          <li>
            <strong>To earn a B (80% overall):</strong><br />
            (80 - 61.4) &divide; 0.30 = 18.6 &divide; 0.30 = <strong>62.00%</strong> on the Final.
          </li>
          <li>
            <strong>To earn a C (70% overall):</strong><br />
            (70 - 61.4) &divide; 0.30 = 8.6 &divide; 0.30 = <strong>28.67%</strong> on the Final.
          </li>
        </ul>

        <h2>Standard US Letter Grade &amp; GPA Conversion Table</h2>
        <table className="pay-compare-table" style={{ margin: "1.5rem 0" }}>
          <caption>Standard 4.0 Scale Grade Conversions</caption>
          <thead>
            <tr>
              <th scope="col">Percentage</th>
              <th scope="col">Letter Grade</th>
              <th scope="col">Standard GPA (4.0)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">93% – 100%</th>
              <td>A</td>
              <td>4.0</td>
            </tr>
            <tr>
              <th scope="row">90% – 92%</th>
              <td>A-</td>
              <td>3.7</td>
            </tr>
            <tr>
              <th scope="row">87% – 89%</th>
              <td>B+</td>
              <td>3.3</td>
            </tr>
            <tr>
              <th scope="row">83% – 86%</th>
              <td>B</td>
              <td>3.0</td>
            </tr>
            <tr>
              <th scope="row">80% – 82%</th>
              <td>B-</td>
              <td>2.7</td>
            </tr>
            <tr>
              <th scope="row">77% – 79%</th>
              <td>C+</td>
              <td>2.3</td>
            </tr>
            <tr>
              <th scope="row">73% – 76%</th>
              <td>C</td>
              <td>2.0</td>
            </tr>
            <tr>
              <th scope="row">70% – 72%</th>
              <td>C-</td>
              <td>1.7</td>
            </tr>
            <tr>
              <th scope="row">60% – 69%</th>
              <td>D</td>
              <td>1.0</td>
            </tr>
            <tr>
              <th scope="row">Below 60%</th>
              <td>F</td>
              <td>0.0</td>
            </tr>
          </tbody>
        </table>

        <h2>Frequently Asked Questions About Grade Averages</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Explore General Statistics &amp; Weighted Averages</h3>
          <p>
            Need to calculate stock portfolio averages, arithmetic mean for business sales,
            or chemistry isotope atomic masses? Check out our complete suite of calculation tools.
          </p>
          <Link href="/calculators/average-calculator" className="button button--primary button--sm">
            Open All-In-One Average Calculator &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
