import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator Guides & Blog",
  description:
    "SEO guides for CalculatorMint tools — ABV, U.S. pay raises, dog bite settlements, GLI-2012 PFTs, and more.",
  alternates: { canonical: "/blog" },
  keywords: [
    "abv calculator guide",
    "pay raise calculator guide",
    "dog bite settlement guide",
    "PFT GLI-2012 guide",
    "calculatorMint blog",
  ],
};

const posts = [
  {
    href: "/blog/how-to-interpret-pft-gli-2012-usa",
    title: "How to Interpret PFTs with GLI-2012 in the USA",
    excerpt:
      "FEV1, FVC, FEV1/FVC, predicted values, Z-scores, LLN, obstruction severity, and when restriction needs TLC.",
    meta: "Health · PFT Calculator",
  },
  {
    href: "/blog/how-dog-bite-settlements-work-in-the-usa",
    title: "How Dog Bite Settlements Work in the USA",
    excerpt:
      "Economic damages, pain-and-suffering multipliers, strict liability vs one-bite rules, comparative fault, and insurance caps.",
    meta: "Legal · Dog Bite Calculator",
  },
  {
    href: "/blog/how-to-calculate-a-pay-raise",
    title: "How to Calculate a Pay Raise in the USA",
    excerpt:
      "Percentage and dollar raise formulas, hourly-to-salary conversion (40×52), bi-weekly vs semi-monthly, taxes, and inflation.",
    meta: "Finance · Pay Raise Calculator",
  },
  {
    href: "/blog/how-to-calculate-beer-abv",
    title: "How to Calculate Beer ABV from OG and FG",
    excerpt:
      "Step-by-step guide to alcohol by volume: hydrometer readings, standard vs alternate formulas, attenuation, and common mistakes.",
    meta: "Brewing · ABV Calculator",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>
        <h1>Guides & blog</h1>
        <p>
          Keyword-rich articles that support each calculator — written to help
          people find CalculatorMint and use the tools correctly.
        </p>
      </header>

      <div className="blog-list" style={{ marginBottom: "3rem" }}>
        {posts.map((post) => (
          <article key={post.href} className="blog-card">
            <p className="blog-card__meta">{post.meta}</p>
            <h2>
              <Link href={post.href}>{post.title}</Link>
            </h2>
            <p>{post.excerpt}</p>
            <Link href={post.href} style={{ fontWeight: 700, color: "var(--mint-800)" }}>
              Read guide →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
