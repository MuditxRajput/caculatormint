import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About CalculatorMint — Our Story, Mission & Calculators",
  description:
    "Read the full story behind CalculatorMint: why we built a free calculator marketplace, how we verify formulas, which USA tools are live today, and where the product is headed next.",
  alternates: { canonical: "/about" },
  keywords: [
    "about CalculatorMint",
    "online calculator marketplace",
    "free calculators",
    "accurate calculator tools",
    "CalculatorMint story",
  ],
};

export default function AboutPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About</span>
        </nav>
        <h1>About CalculatorMint</h1>
        <p>
          A free calculator marketplace built for accurate math, plain-English
          explanations, and pages that can actually rank on Google.
        </p>
      </header>

      <article className="blog-article">
        <p>
          CalculatorMint started from a simple frustration: when you search for a
          calculator online, you often land on a cluttered page that hides the
          formula, pushes pop-ups, or gives an answer you cannot verify. We wanted
          the opposite experience — clean tools, transparent math, and helpful
          writing that teaches people how the result was produced.
        </p>
        <p>
          That is the idea behind {siteConfig.name}. We are building a marketplace
          of everyday calculators where every tool is paired with a dedicated
          landing page and a supporting guide. The goal is not only to calculate
          correctly, but also to help people find the right tool when they search
          for it.
        </p>

        <h2>Why a calculator marketplace?</h2>
        <p>
          People do not wake up wanting “another website.” They wake up needing an
          answer: What is my beer’s ABV? What does a 5% raise mean on a bi-weekly
          paycheck? What might a dog bite claim be worth before insurance limits?
          Each of those questions deserves its own focused tool, written around
          the keywords and context of that topic.
        </p>
        <p>
          Instead of one giant homepage of widgets, we publish calculators as
          first-class products. Each one includes inputs people expect, results
          they can understand, and article-style content that covers formulas,
          edge cases, and FAQs. That structure is better for users and better for
          search engines.
        </p>

        <h2>How we think about accuracy</h2>
        <p>
          Accuracy is the product. Wherever a widely accepted formula exists, we
          implement it carefully and show the method on the page. For brewing, that
          means the standard ABV equation and the alternate Hall formula, plus
          attenuation and ASBC-style calorie estimates. For U.S. pay raises, that
          means real payroll periods — hourly, weekly, bi-weekly (26),
          semi-monthly (24), monthly, and annual — with full-time defaults of 40
          hours and 52 weeks.
        </p>
        <p>
          For dog bite compensation estimates, we use the common insurance and
          attorney multiplier method: economic damages, a severity-based
          pain-and-suffering range, state liability orientation (strict liability
          vs one-bite), comparative fault, and optional insurance caps. We are
          clear that this is an educational estimate, not legal advice.
        </p>
        <p>
          When numbers can vary by jurisdiction, instrument, or personal facts, we
          say so. Trust comes from honesty as much as from math.
        </p>

        <h2>What is live today</h2>
        <p>
          Our first live tools are the{" "}
          <Link href="/calculators/abv-calculator">ABV Calculator</Link>, the{" "}
          <Link href="/calculators/pay-raise-calculator">
            USA Pay Raise Calculator
          </Link>
          , and the{" "}
          <Link href="/calculators/dog-bite-compensation-calculator">
            USA Dog Bite Compensation Calculator
          </Link>
          . Each has a matching guide in the{" "}
          <Link href="/blog">blog</Link> so readers can learn the “why” behind the
          result.
        </p>
        <p>
          More calculators are planned — including health and finance tools such as
          BMI — following the same pattern: correct calculation first, then
          keyword-rich education around it.
        </p>

        <h2>Built for search from day one</h2>
        <p>
          Ranking on Google is part of the product plan, not an afterthought. We
          use Next.js for fast static pages, clear titles and meta descriptions,
          canonical URLs, an XML sitemap, robots rules, and structured data where
          it helps (for example FAQ and application schema on tool pages). Content
          is written in natural language around real search intent, not stuffed
          with awkward keyword lists.
        </p>
        <p>
          Still, SEO only works when the page is useful. If a visitor cannot solve
          their problem in under a minute, rankings will not save the experience.
          That is why the calculator sits near the top of each tool page, with
          deeper reading underneath.
        </p>

        <h2>Who we are for</h2>
        <p>
          Homebrewers checking gravity readings. Employees modeling a raise before
          a review. People trying to understand the ballpark of a dog bite claim
          before they talk to an insurer or attorney. Students and curious readers
          who want the formula, not only the output. If you need a fast answer and
          a clear explanation, you are our audience.
        </p>

        <h2>What we are not</h2>
        <p>
          We are not a law firm, tax firm, clinic, or brewery lab. Our tools do not
          create a professional relationship and should not replace licensed advice
          or calibrated instruments. Read the{" "}
          <Link href="/disclaimer">disclaimer</Link> before relying on any estimate
          for a consequential decision.
        </p>

        <h2>Get in touch</h2>
        <p>
          Found an edge case, a rounding difference, or a calculator the world
          still needs? We want to hear it. Reach out through the{" "}
          <Link href="/contact">contact page</Link> or email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Helpful
          bug reports usually include the tool name, your inputs, the result you
          saw, and what you expected.
        </p>
        <p>
          Thanks for using CalculatorMint. We are just getting started — and every
          calculator we ship will be held to the same bar: accurate, understandable,
          and worth ranking for.
        </p>
      </article>
    </div>
  );
}
