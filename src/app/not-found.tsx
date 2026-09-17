import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <header className="page-hero">
        <h1>Page not found</h1>
        <p>
          That URL does not exist. Use a working page below, or email us from
          Contact if you followed a broken link.
        </p>
      </header>
      <article className="blog-article">
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
            <Link href="/calculators/dog-bite-compensation-calculator">
              Dog Bite Compensation Calculator
            </Link>
          </li>
          <li>
            <Link href="/calculators/pft-calculator">PFT Calculator</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </article>
    </div>
  );
}
