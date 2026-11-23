import type { Metadata } from "next";
import Link from "next/link";
import { CumulativeGpaCalculator } from "@/components/calculators/CumulativeGpaCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "GPA Calculator for Middle Schoolers — Grades 6, 7 & 8 (USA & Canada) | CalculatorMint",
  description:
    "Free GPA calculator for middle schoolers (6th, 7th, and 8th grade). Calculate your report card grade point average, check honor roll eligibility, and prepare for high school honors tracks.",
  alternates: {
    canonical: "/calculators/gpa-calculator-for-middle-schoolers",
  },
  openGraph: {
    title: "GPA Calculator for Middle Schoolers — Grades 6, 7 & 8 (USA & Canada)",
    description:
      "Free GPA calculator for middle schoolers (6th, 7th, and 8th grade). Calculate your report card grade point average, check honor roll eligibility, and prepare for high school honors tracks.",
    type: "website",
    url: absoluteUrl("/calculators/gpa-calculator-for-middle-schoolers"),
  },
  keywords: [
    "gpa calculator for middle schoolers",
    "middle school gpa calculator",
    "gpa calculator middle school",
    "how to calculate middle school gpa",
    "6th grade gpa calculator",
    "7th grade gpa calculator",
    "8th grade gpa calculator",
    "middle school honor roll gpa",
    "junior high gpa calculator",
    "middle school gpa scale",
  ],
};

const faqs = [
  {
    q: "How is GPA calculated in middle school?",
    a: "In most USA and Canadian middle schools (grades 6, 7, and 8), GPA is calculated on a standard, unweighted 4.0 scale where each class counts equally: A = 4.0, B = 3.0, C = 2.0, D = 1.0, and F = 0.0. To find your middle school GPA: 1) Convert each letter grade on your report card into its grade point number. 2) Add all the grade points together. 3) Divide by the total number of classes. For example, if you take 6 classes and earn four A's and two B's: (4 + 4 + 4 + 4 + 3 + 3) ÷ 6 = 22 ÷ 6 = 3.67 GPA.",
  },
  {
    q: "What GPA is needed for Middle School Honor Roll?",
    a: "While exact requirements vary by school district, standard US and Canadian middle school benchmarks are: Regular Honor Roll: 3.50 to 3.74 GPA (mostly A's and B's, with no D's or F's). High Honor Roll / Principal's List: 3.75 to 4.00 GPA (straight A's or near straight A's). Merit Roll: 3.00 to 3.49 GPA (B-average).",
  },
  {
    q: "Do middle school grades affect college admissions?",
    a: "Generally, colleges do not see your 6th, 7th, or 8th grade report cards on your official high school transcript. However, middle school grades directly determine your High School course placement. Earning an A in 8th-grade Pre-Algebra or Science qualifies you for Honors Algebra, Honors Biology, and Advanced Placement (AP) tracks in 9th grade, which heavily impacts your high school weighted GPA.",
  },
  {
    q: "Can you take high school credit courses in 8th grade?",
    a: "Yes! Many school districts across the US (like Texas, Florida, California, and New York) allow 8th graders to take high school credit courses such as Algebra 1, Spanish 1, or Physical Science. In many districts, the letter grade earned in 8th grade for that specific high school course will appear on your official high school transcript and factor into your high school cumulative GPA.",
  },
  {
    q: "Are middle school GPAs weighted for honors classes?",
    a: "In almost all public and private middle schools, GPAs are unweighted (capped at 4.0). Unlike high schools that award 4.5 or 5.0 for AP and Honors classes, middle school courses use the simple 4.0 system so all core subjects and electives count evenly.",
  },
  {
    q: "Do electives (like P.E., Art, or Band) count toward middle school GPA?",
    a: "Yes. Unless your school specifically designates a class as non-graded (Pass/Fail), every class on your report card—including Physical Education, Health, Band, Choir, and Art—counts equally toward your overall grade point average.",
  },
];

export default function MiddleSchoolGpaCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "GPA Calculator for Middle Schoolers",
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/gpa-calculator-for-middle-schoolers"),
        description:
          "Free, kid-friendly GPA calculator designed for 6th, 7th, and 8th-grade middle school students in the USA and Canada with Honor Roll qualification feedback.",
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
            name: "GPA Calculator for Middle Schoolers",
            item: absoluteUrl("/calculators/gpa-calculator-for-middle-schoolers"),
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
        headline: "How Middle School GPA Works: 6th, 7th & 8th Grade Calculations & Honor Roll Standards",
        description:
          "A parent and student guide to understanding middle school report card GPAs, honor roll qualifications, and high school placement requirements in the USA and Canada.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/gpa-calculator-for-middle-schoolers"),
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
          <span>Middle School GPA</span>
        </nav>
        <span className="page-hero__badge">Grades 6, 7 &amp; 8 (USA &amp; Canada)</span>
        <h1>GPA Calculator for Middle Schoolers</h1>
        <p>
          A simple, kid-friendly GPA calculator designed specifically for middle school students
          and parents. Calculate your report card GPA, check Honor Roll status, and prepare for high school.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Middle School GPA Calculator Tool">
        <CumulativeGpaCalculator initialView="middle-school" />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Editorial Content Below Middle School Tool */}
      <article className="blog-article">
        <p className="meta-line">Middle School Academics · USA &amp; Canada School District Guidelines</p>
        <p>
          Transitioning from elementary school into <strong>middle school (junior high school, grades 6 through 8)</strong> is
          one of the biggest milestones in a student&rsquo;s educational journey. For the first time, students rotate between
          different classrooms for each subject, receive letter grades from multiple teachers, and have their academic
          performance tracked with a numerical <strong>Grade Point Average (GPA)</strong>.
        </p>
        <p>
          Unlike college or high school—where classes have varying credit hours and weighted scales—middle school GPA is
          simple, clean, and straightforward. Every period on your daily schedule carries equal weight.
        </p>

        <h2>How to Calculate Your Middle School GPA Step-by-Step</h2>
        <p>
          To calculate your report card GPA manually, follow these three simple steps:
        </p>
        <ol>
          <li>
            <strong>Step 1: Convert Letter Grades to Grade Points:</strong><br />
            Find each class on your report card and match the letter grade to the standard 4.0 scale:
            <ul>
              <li><strong>A+ or A (93–100%):</strong> 4.0 points</li>
              <li><strong>A- (90–92%):</strong> 3.7 points</li>
              <li><strong>B+ (87–89%):</strong> 3.3 points</li>
              <li><strong>B (83–86%):</strong> 3.0 points</li>
              <li><strong>B- (80–82%):</strong> 2.7 points</li>
              <li><strong>C+ (77–79%):</strong> 2.3 points</li>
              <li><strong>C (73–76%):</strong> 2.0 points</li>
              <li><strong>C- (70–72%):</strong> 1.7 points</li>
              <li><strong>D (60–69%):</strong> 1.0 points</li>
              <li><strong>F (Below 60%):</strong> 0.0 points</li>
            </ul>
          </li>
          <li>
            <strong>Step 2: Add Up All Your Grade Points:</strong><br />
            Sum the numbers from all your core subjects and electives (Math, English, Science, Social Studies, P.E., and Electives).
          </li>
          <li>
            <strong>Step 3: Divide by the Number of Classes:</strong><br />
            Divide the total points by the total number of classes on your schedule (usually 6 or 7).
          </li>
        </ol>

        <h3>Worked Example: 7th Grade Report Card</h3>
        <p>Suppose a 7th-grade student receives the following grades on their semester report card:</p>
        <ul>
          <li><strong>Pre-Algebra:</strong> A (4.0)</li>
          <li><strong>English Language Arts (ELA):</strong> B+ (3.3)</li>
          <li><strong>Life Science:</strong> A- (3.7)</li>
          <li><strong>World Geography:</strong> A (4.0)</li>
          <li><strong>Physical Education:</strong> A (4.0)</li>
          <li><strong>Band / Music:</strong> A (4.0)</li>
        </ul>
        <p>
          Total Points = 4.0 + 3.3 + 3.7 + 4.0 + 4.0 + 4.0 = <strong>23.0 points</strong>.<br />
          Total Classes = <strong>6 classes</strong>.<br />
          Middle School GPA = 23.0 &divide; 6 = <strong>3.83 GPA</strong> (Principal&rsquo;s High Honors!).
        </p>

        <h2>Middle School Honor Roll Benchmarks in the USA &amp; Canada</h2>
        <table className="pay-compare-table" style={{ margin: "1.5rem 0" }}>
          <caption>Middle School Academic Recognition Levels</caption>
          <thead>
            <tr>
              <th scope="col">Honor Level</th>
              <th scope="col">Typical GPA Requirement</th>
              <th scope="col">Report Card Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Principal&rsquo;s List / High Honors</th>
              <td>3.75 – 4.00</td>
              <td>Straight A&rsquo;s or all A&rsquo;s with at most one B+. No C&rsquo;s, D&rsquo;s, or F&rsquo;s.</td>
            </tr>
            <tr>
              <th scope="row">Honor Roll</th>
              <td>3.50 – 3.74</td>
              <td>Mostly A&rsquo;s and solid B&rsquo;s. No D&rsquo;s or F&rsquo;s allowed in any subject.</td>
            </tr>
            <tr>
              <th scope="row">Merit Roll / Good Standing</th>
              <td>3.00 – 3.49</td>
              <td>Solid B-average across all classes. Demonstrates readiness for standard high school courses.</td>
            </tr>
          </tbody>
        </table>

        <h2>Why Does Middle School GPA Matter? (High School Placement)</h2>
        <p>
          Students often ask: <em>&ldquo;Do middle school grades really matter if colleges only look at 9th through 12th grade?&rdquo;</em>
        </p>
        <p>
          While colleges do not see your 6th or 7th grade report cards, <strong>your 8th-grade GPA directly dictates your high school path</strong>:
        </p>
        <ul>
          <li>
            <strong>Honors &amp; AP Track Placements:</strong> To enroll in 9th-grade Honors English, Honors Biology, or Honors Geometry,
            most high schools require an A or high B in your 8th-grade prerequisite classes along with teacher recommendations.
          </li>
          <li>
            <strong>High School Credits Earned in 8th Grade:</strong> In many school districts across the US (like California, Texas, New York,
            and Florida), advanced 8th graders take Algebra 1 or Foreign Language 1. These grades count as actual high school credits and
            appear directly on your official high school transcript!
          </li>
          <li>
            <strong>Specialized Magnet &amp; Private School Admissions:</strong> If you are applying to specialized STEM academies,
            arts magnets, or competitive private high schools, your 7th and 8th-grade GPAs are central to your application.
          </li>
        </ul>

        <h2>Frequently Asked Questions for Middle Schoolers &amp; Parents</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Looking for College or High School Cumulative GPA?</h3>
          <p>
            If you need to calculate cumulative GPA with prior credit hours, weighted AP/IB classes (5.0 scale),
            or plan your target college graduation GPA, use our advanced Cumulative GPA tool.
          </p>
          <Link href="/calculators/cumulative-gpa-calculator" className="button button--primary button--sm">
            Launch Cumulative GPA Calculator &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
