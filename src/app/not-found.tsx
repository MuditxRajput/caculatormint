import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <header className="page-hero text-center">
        <span className="not-found-badge">404 Error</span>
        <h1>Page Not Found</h1>
        <p>
          The page or tool you are looking for may have been moved, updated, or does
          not exist. Please explore our verified calculators and guides below.
        </p>
      </header>

      <article className="blog-article">
        <h2>Popular Calculators & Pages</h2>
        <ul>
          <li>
            <Link href="/">Home Page</Link>
          </li>
          <li>
            <Link href="/calculators">All Live Calculators Directory</Link>
          </li>
          <li>
            <Link href="/calculators/percentage-calculator">
              Percentage Calculator (Change, Share, Ratio)
            </Link>
          </li>
          <li>
            <Link href="/calculators/discount-calculator">
              Discount &amp; Sale Price Calculator
            </Link>
          </li>
          <li>
            <Link href="/calculators/pay-raise-calculator">
              USA Salary &amp; Hourly Pay Raise Calculator
            </Link>
          </li>
          <li>
            <Link href="/calculators/compound-interest-calculator">
              Compound Interest Calculator
            </Link>
          </li>
          <li>
            <Link href="/calculators/tip-calculator">
              Tip &amp; Bill Split Calculator
            </Link>
          </li>
          <li>
            <Link href="/calculators/fuel-cost-calculator">
              Fuel Cost &amp; Road Trip Gas Calculator
            </Link>
          </li>
          <li>
            <Link href="/calculators/margin-calculator">
              Profit Margin &amp; Markup Calculator
            </Link>
          </li>
          <li>
            <Link href="/calculators/abv-calculator">
              Beer Alcohol by Volume (ABV) Calculator
            </Link>
          </li>
          <li>
            <Link href="/calculators/cubic-yard-calculator">
              Cubic Yard Calculator (Concrete &amp; Mulch)
            </Link>
          </li>
          <li>
            <Link href="/calculators/average-calculator">
              Average Calculator (Simple, Weighted &amp; Grades)
            </Link>
          </li>
          <li>
            <Link href="/calculators/grade-calculator">
              Grade Average Calculator (Course &amp; Final Exam)
            </Link>
          </li>
          <li>
            <Link href="/calculators/weighted-average-calculator">
              Weighted Average Calculator (Finance &amp; Portfolios)
            </Link>
          </li>
          <li>
            <Link href="/calculators/cumulative-gpa-calculator">
              Cumulative GPA Calculator (College &amp; High School)
            </Link>
          </li>
          <li>
            <Link href="/calculators/gpa-calculator-for-middle-schoolers">
              GPA Calculator for Middle Schoolers (Grades 6–8)
            </Link>
          </li>
          <li>
            <Link href="/blog">Editorial Guides & Blog</Link>
          </li>
          <li>
            <Link href="/about">About CalculatorMint & Editorial Mission</Link>
          </li>
          <li>
            <Link href="/contact">Contact Support & Submit Feedback</Link>
          </li>
          <li>
            <Link href="/dmca">DMCA Copyright Policy</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
