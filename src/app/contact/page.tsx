import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CalculatorMint — Feedback, Corrections & Requests",
  description:
    "Contact CalculatorMint for calculator feedback, formula corrections, new tool requests, or content questions. Learn what to include so we can help quickly.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact CalculatorMint",
    "calculator feedback",
    "report calculator error",
    "request a calculator",
  ],
};

export default function ContactPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </nav>
        <h1>Contact CalculatorMint</h1>
        <p>
          Feedback, corrections, partnerships, and new calculator ideas — here’s
          how to reach us and what helps most.
        </p>
      </header>

      <article className="blog-article">
        <p>
          If something on CalculatorMint feels unclear, incorrect, or incomplete,
          we want to know. This site only gets better when real people test the
          tools with real numbers and tell us where the experience breaks down.
        </p>
        <p>
          The fastest way to reach us is email:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. You do
          not need a formal template — a short, specific message is enough.
        </p>

        <h2>What to include in an accuracy report</h2>
        <p>
          When you think a result looks wrong, details save everyone time. Please
          include the calculator name (for example Pay Raise or ABV), the exact
          inputs you entered, the output you received, and the output you expected.
          If you compared against another reputable tool, mention which one and
          whether the settings matched (standard vs alternate ABV, bi-weekly vs
          semi-monthly pay, and so on).
        </p>
        <p>
          Screenshots help, but plain text works fine. The goal is to reproduce
          your case exactly so we can confirm whether we found a bug, a rounding
          difference, or a misunderstanding of the formula.
        </p>

        <h2>New calculator requests</h2>
        <p>
          We love hearing which tools people wish existed. If you request a
          calculator, tell us who it is for, what inputs matter, and which formula
          or official source you trust. Requests that include a clear use case —
          “USA overtime pay for non-exempt employees” or “pregnancy due date from
          LMP” — move to the front of the list faster than vague ideas.
        </p>
        <p>
          We prioritize calculators that can be explained transparently and that
          people actively search for. That keeps the marketplace useful and
          SEO-aligned at the same time.
        </p>

        <h2>Content and SEO feedback</h2>
        <p>
          Our guides are written to answer real questions around each tool. If a
          blog post is outdated, missing a jurisdiction note, or harder to read
          than it should be, say so. Pointing to a specific paragraph is more
          helpful than “the article is wrong,” but either way we will look.
        </p>

        <h2>Partnerships and linking</h2>
        <p>
          If you run a related site, newsletter, or tool directory and want to
          discuss a link, mention, or collaboration, email us with your URL and a
          one-paragraph pitch. We are selective: we care about relevance and
          reader trust more than raw traffic volume.
        </p>

        <h2>What we cannot do over email</h2>
        <p>
          We cannot give personalized legal advice on a dog bite claim, tax advice
          on a raise, medical advice on body metrics, or professional brewing lab
          services. Those questions belong with licensed professionals. Our{" "}
          <Link href="/disclaimer">disclaimer</Link> explains the boundary in more
          detail.
        </p>
        <p>
          We also cannot reverse-engineer private insurance offers, guarantee a
          settlement number, or promise a Google ranking timeline for your own
          site. We can, however, explain how our calculator works and whether a
          reported discrepancy looks real.
        </p>

        <h2>Response time</h2>
        <p>
          We aim to reply within a few business days. During busy periods it may
          take longer. If your message is about a possible safety or legal
          deadline (for example a statute of limitations), do not wait on us —
          contact a qualified professional in your area immediately.
        </p>

        <h2>Other useful pages</h2>
        <p>
          Before you write, you may already find the answer in the{" "}
          <Link href="/faq">FAQ</Link>, the{" "}
          <Link href="/calculators">calculators directory</Link>, or the{" "}
          <Link href="/about">about page</Link>. If not, we are one email away:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </article>
    </div>
  );
}
