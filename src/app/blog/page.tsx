import Link from "next/link";
import type { Metadata } from "next";
import { BlogList } from "@/components/BlogList";
import { posts } from "@/lib/posts";

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

export default function BlogIndexPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>
        <h1>Blog</h1>
        <p>
          Choose a guide. Click any post to read the full article and open the
          matching calculator.
        </p>
      </header>

      <BlogList posts={posts} />
    </div>
  );
}
