import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <header className="page-hero">
        <h1>Page not found</h1>
        <p>
          That URL does not exist. Try the calculator marketplace or a popular
          tool below.
        </p>
      </header>
      <div className="content-stack" style={{ marginBottom: "3rem" }}>
        <article className="prose-panel">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/calculators">All calculators</Link>
            </li>
            <li>
              <Link href="/calculators/abv-calculator">ABV Calculator</Link>
            </li>
            <li>
              <Link href="/calculators/pay-raise-calculator">
                Pay Raise Calculator
              </Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}
