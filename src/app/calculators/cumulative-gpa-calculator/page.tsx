import type { Metadata } from "next";
import Link from "next/link";
import { CumulativeGpaCalculator } from "@/components/calculators/CumulativeGpaCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cumulative GPA Calculator — College, High School & Prior Credits | CalculatorMint",
  description:
    "Free cumulative GPA calculator for USA and Canada colleges and high schools. Combine prior credits with current semester grades to calculate updated unweighted and weighted GPA.",
  alternates: {
    canonical: "/calculators/cumulative-gpa-calculator",
  },
  openGraph: {
    title: "Cumulative GPA Calculator — College, High School & Prior Credits",
    description:
      "Free cumulative GPA calculator for USA and Canada colleges and high schools. Combine prior credits with current semester grades to calculate updated unweighted and weighted GPA.",
    type: "website",
    url: absoluteUrl("/calculators/cumulative-gpa-calculator"),
  },
  keywords: [
    "cumulative gpa calculator",
    "calculate cumulative gpa",
    "cumulative gpa calculator college",
    "cumulative gpa calculator high school",
    "how to calculate cumulative gpa",
    "overall gpa calculator",
    "cumulative grade point average",
    "weighted cumulative gpa calculator",
    "gpa calculator with prior credits",
    "target gpa calculator",
  ],
};

const faqs = [
  {
    q: "How is cumulative GPA calculated with prior credits?",
    a: "Cumulative GPA is calculated by dividing your total cumulative quality points by your total cumulative credit hours attempted. Formula: 1) Multiply your current cumulative GPA by your prior completed credits to find Prior Quality Points. 2) Multiply each new course's grade point value by its credit hours to find Term Quality Points. 3) Add prior and term quality points together. 4) Divide by total cumulative credit hours: New Cumulative GPA = (Prior Points + Term Points) ÷ (Prior Credits + Term Credits).",
  },
  {
    q: "What is the difference between Semester GPA and Cumulative GPA?",
    a: "Your Semester (Term) GPA measures your academic performance solely within a single semester or quarter (e.g. Fall 2026). Your Cumulative GPA represents your ongoing, aggregate academic performance across your entire academic career at that institution, combining every semester together.",
  },
  {
    q: "How do Honors and AP/IB courses affect weighted cumulative GPA in the US?",
    a: "In American high schools, standard college-prep classes use the unweighted 4.0 scale (A=4.0, B=3.0, C=2.0). Honors classes generally add 0.5 bonus points (A=4.5, B=3.5), while Advanced Placement (AP), International Baccalaureate (IB), and Dual-Enrollment college courses add 1.0 bonus point (A=5.0, B=4.0). This yields a weighted GPA higher than 4.0 for class rank and college admissions.",
  },
  {
    q: "Does retaking a failed class replace the grade on a cumulative GPA?",
    a: "In USA and Canadian universities, this depends on your school's official grade forgiveness policy. Under 'Grade Replacement', the new grade completely replaces the old grade in your cumulative GPA calculation (though the initial attempt often remains on your transcript). Under 'Grade Averaging', both attempts are included in cumulative credit hours and quality points.",
  },
  {
    q: "What cumulative GPA is needed for college Latin Honors (Cum Laude)?",
    a: "While thresholds vary by university, standard US graduation honors typically require: Cum Laude (with honor): 3.50 – 3.69 GPA; Magna Cum Laude (with great honor): 3.70 – 3.89 GPA; Summa Cum Laude (with highest honor): 3.90 – 4.00 GPA.",
  },
  {
    q: "Do Pass/Fail (P/F) credits count toward cumulative GPA?",
    a: "No. Courses taken on a Pass/Fail or Satisfactory/Unsatisfactory basis award credits toward graduation requirements if passed, but carry zero grade points and are excluded from the cumulative GPA calculation. However, if a student receives a failing grade ('No Pass' or 'U'), some colleges treat it as an F (0.0 points).",
  },
];

export default function CumulativeGpaCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Cumulative GPA Calculator",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/cumulative-gpa-calculator"),
        description:
          "Free online cumulative GPA calculator for US and Canadian universities, colleges, and high schools with prior transcript credits and target graduation GPA planning.",
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
            name: "Cumulative GPA Calculator",
            item: absoluteUrl("/calculators/cumulative-gpa-calculator"),
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
        headline: "How to Calculate Cumulative GPA: College Transcripts, Prior Credits & Graduation Planning",
        description:
          "A comprehensive guide for college and high school students in the USA and Canada explaining cumulative quality points, weighted vs unweighted scales, and target GPA planning.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/cumulative-gpa-calculator"),
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
          <span>Cumulative GPA Calculator</span>
        </nav>
        <span className="page-hero__badge">College &amp; High School Academics</span>
        <h1>Cumulative GPA Calculator</h1>
        <p>
          Calculate your updated cumulative grade point average by combining prior transcript credits
          with current term courses. Supports unweighted 4.0, weighted 5.0 (Honors &amp; AP), and target graduation planning.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Cumulative GPA Calculator Tool">
        <CumulativeGpaCalculator initialView="cumulative" />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Editorial Content Below Tool */}
      <article className="blog-article">
        <p className="meta-line">Academic Transcripts · USA &amp; Canada Higher Education Standards</p>
        <p>
          For students in the United States and Canada, your <strong>Cumulative Grade Point Average (GPA)</strong> is
          the single most influential metric on your academic transcript. It governs academic standing, dean&rsquo;s list
          honors, athletic eligibility, scholarship renewals, and graduate or professional school admissions (such as law,
          medical, and business school).
        </p>
        <p>
          Unlike a simple semester average, calculating a cumulative GPA requires accounting for <strong>credit weight</strong>
          and <strong>prior academic history</strong>. A 4-credit organic chemistry class has four times the mathematical weight
          of a 1-credit seminar, and a single A grade in your senior year will have far less impact on your cumulative GPA
          than it did during your freshman year.
        </p>

        <h2>The Fundamental Cumulative GPA Equation</h2>
        <p>
          In higher education across North America, cumulative GPA is computed using <strong>Quality Points</strong>:
        </p>
        <code className="formula-block">
          Cumulative GPA = Total Cumulative Quality Points &divide; Total Graded Credit Hours
        </code>
        <p>Where Quality Points are calculated by multiplying course grade points by course credit hours:</p>
        <code className="formula-block">
          Quality Points for a Course = Grade Point (e.g. 4.0 for A, 3.0 for B) &times; Credit Hours (e.g. 3 or 4)
        </code>

        <h3>Worked Example: Adding a New Semester to Prior Credits</h3>
        <p>
          Suppose an undergraduate student enters their Junior year with:
        </p>
        <ul>
          <li><strong>Prior Cumulative GPA:</strong> 3.40</li>
          <li><strong>Prior Credits Completed:</strong> 60 credit hours</li>
          <li><strong>Prior Quality Points:</strong> 3.40 &times; 60 = <strong>204.0 points</strong></li>
        </ul>
        <p>During the Fall semester, they complete 14 credit hours with the following marks:</p>
        <ul>
          <li>Calculus (4 credits): Grade A (4.0) &rarr; 4 &times; 4.0 = <strong>16.0 pts</strong></li>
          <li>Physics (4 credits): Grade B+ (3.3) &rarr; 4 &times; 3.3 = <strong>13.2 pts</strong></li>
          <li>Economics (3 credits): Grade A- (3.7) &rarr; 3 &times; 3.7 = <strong>11.1 pts</strong></li>
          <li>History (3 credits): Grade A (4.0) &rarr; 3 &times; 4.0 = <strong>12.0 pts</strong></li>
        </ul>
        <p>
          Current Term Quality Points = 16.0 + 13.2 + 11.1 + 12.0 = <strong>52.3 points</strong>.<br />
          Current Term GPA = 52.3 &divide; 14 credits = <strong>3.74 Term GPA</strong>.
        </p>
        <p>To update the student&rsquo;s Cumulative GPA:</p>
        <ol>
          <li>Total Quality Points = 204.0 (prior) + 52.3 (term) = <strong>256.3 points</strong></li>
          <li>Total Cumulative Credits = 60 (prior) + 14 (term) = <strong>74 credits</strong></li>
          <li>New Cumulative GPA = 256.3 &divide; 74 = <strong>3.46</strong> (up from 3.40).</li>
        </ol>

        <h2>Standard US &amp; Canadian Letter Grade Scale</h2>
        <table className="pay-compare-table" style={{ margin: "1.5rem 0" }}>
          <caption>Standard 4.0 Scale Grade Point Conversions</caption>
          <thead>
            <tr>
              <th scope="col">Letter Grade</th>
              <th scope="col">Percentage Equivalent</th>
              <th scope="col">Grade Points (4.0 Scale)</th>
              <th scope="col">Honors (+0.5)</th>
              <th scope="col">AP / IB (+1.0)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">A+</th>
              <td>97% – 100%</td>
              <td>4.0</td>
              <td>4.5</td>
              <td>5.0</td>
            </tr>
            <tr>
              <th scope="row">A</th>
              <td>93% – 96%</td>
              <td>4.0</td>
              <td>4.5</td>
              <td>5.0</td>
            </tr>
            <tr>
              <th scope="row">A-</th>
              <td>90% – 92%</td>
              <td>3.7</td>
              <td>4.2</td>
              <td>4.7</td>
            </tr>
            <tr>
              <th scope="row">B+</th>
              <td>87% – 89%</td>
              <td>3.3</td>
              <td>3.8</td>
              <td>4.3</td>
            </tr>
            <tr>
              <th scope="row">B</th>
              <td>83% – 86%</td>
              <td>3.0</td>
              <td>3.5</td>
              <td>4.0</td>
            </tr>
            <tr>
              <th scope="row">B-</th>
              <td>80% – 82%</td>
              <td>2.7</td>
              <td>3.2</td>
              <td>3.7</td>
            </tr>
            <tr>
              <th scope="row">C+</th>
              <td>77% – 79%</td>
              <td>2.3</td>
              <td>2.8</td>
              <td>3.3</td>
            </tr>
            <tr>
              <th scope="row">C</th>
              <td>73% – 76%</td>
              <td>2.0</td>
              <td>2.5</td>
              <td>3.0</td>
            </tr>
            <tr>
              <th scope="row">C-</th>
              <td>70% – 72%</td>
              <td>1.7</td>
              <td>2.2</td>
              <td>2.7</td>
            </tr>
            <tr>
              <th scope="row">D</th>
              <td>60% – 66%</td>
              <td>1.0</td>
              <td>1.5</td>
              <td>2.0</td>
            </tr>
            <tr>
              <th scope="row">F</th>
              <td>Below 60%</td>
              <td>0.0</td>
              <td>0.0</td>
              <td>0.0</td>
            </tr>
          </tbody>
        </table>

        <h2>The Law of Diminishing Returns: Why Cumulative GPA Stabilizes</h2>
        <p>
          A common frustration among college juniors and seniors is that earning high grades barely moves their
          cumulative GPA. This is governed by mathematical inertia:
        </p>
        <p>
          When you have only 15 completed credits (Freshman year), adding a 15-credit 4.0 semester represents
          <strong> 50% of your total academic record</strong>, causing your cumulative GPA to swing dramatically.
          However, when you have 90 completed credits (Senior year), adding a 15-credit semester represents only
          <strong> 14% of your total record</strong>.
        </p>
        <p>
          Use our built-in <strong>Target Graduation GPA Planner</strong> above to test whether your dream GPA
          is mathematically reachable before graduation.
        </p>

        <h2>Frequently Asked Questions About Cumulative GPA</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Are You in Middle School (Grades 6–8)?</h3>
          <p>
            Middle schools calculate GPA without complicated college credit weights. Use our tailored, kid-friendly
            Middle School GPA Calculator to check your report card and Honor Roll eligibility.
          </p>
          <Link href="/calculators/gpa-calculator-for-middle-schoolers" className="button button--primary button--sm">
            Launch Middle School GPA Calculator &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
