import Link from "next/link";
import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { AdSlot } from "@/components/AdSlot";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
<<<<<<< HEAD
  robots: { index: false, follow: false },
  title: "Calculator Guides & Blog",
=======
  title: "Blog & Educational Guides — Math, Finance & Everyday Calculations",
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
  description:
    "Explore the CalculatorMint journal: in-depth guides to percentage calculations, retail discounts, compound interest, USA pay raises, travel fuel costs, business margins, and brewing science.",
  alternates: { canonical: "/blog" },
  keywords: [
    "calculator guides",
    "percentage calculator guide",
    "discount calculator guide",
    "compound interest guide",
    "fuel cost guide",
    "margin markup guide",
    "pay raise calculator guide",
    "tip calculator guide",
    "abv calculator guide",
    "CalculatorMint blog",
    "math formulas explained",
  ],
};

const categories = [
  "All Articles",
  "Math & Analytics",
  "Finance & Career",
  "Home & Construction",
  "Education & GPA",
  "Shopping & Math",
  "Travel & Auto",
  "Dining & Math",
  "Brewing Science",
  "Business & Math",
];

export default function BlogIndexPage() {
  return (
    <div className="container container--blog">
      <header className="page-hero text-center">
        <nav className="breadcrumbs breadcrumbs--center" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>
        <span className="page-hero__badge">The CalculatorMint Journal</span>
        <h1>Articles, Guides &amp; Mathematical Research</h1>
        <p className="page-hero__lead-center">
          In-depth guides unpacking everyday math, retail discounts, compound growth,
          payroll mechanics, road trip fuel budgeting, and business pricing.
        </p>

        <div className="blog-category-bar blog-category-bar--center" role="navigation" aria-label="Article categories">
          {categories.map((cat, idx) => (
            <span
              key={cat}
              className={`blog-category-pill ${idx === 0 ? "is-active" : ""}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </header>

<<<<<<< HEAD
      <div className="blog-list" style={{ marginBottom: "3rem" }}>
        {posts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="blog-card"
            style={{ textDecoration: "none", cursor: "pointer", display: "flex", flexDirection: "column" }}
          >
            <p className="blog-card__meta">{post.meta}</p>
            <h2 style={{ color: "var(--ink)", margin: "0.25rem 0" }}>{post.title}</h2>
            <p style={{ color: "var(--muted)" }}>{post.excerpt}</p>
            <span style={{ fontWeight: 750, color: "var(--mint-600)", marginTop: "auto" }}>
              Read guide →
            </span>
          </Link>
        ))}
=======
      {/* Top AdSlot in DOM */}
      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      {/* Unified Single Blog Stream */}
      <main className="blog-feed-container">
        <BlogList posts={posts} />
      </main>

      {/* Bottom AdSlot in DOM */}
      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
      </div>
    </div>
  );
}
