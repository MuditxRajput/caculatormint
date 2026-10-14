import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CalculatorMint — Support, Feedback & Corrections",
  description:
    "Contact CalculatorMint for calculator feedback, formula corrections, new tool requests, DMCA inquiries, or advertising questions. Learn how to reach our team.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact CalculatorMint",
    "calculator feedback",
    "report calculator error",
    "request a calculator",
    "CalculatorMint email",
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
          Have questions, formula corrections, partnerships, or new calculator
          suggestions? We are here to help.
        </p>
      </header>

      <article className="blog-article">
        <p>
          If something on CalculatorMint feels unclear, mathematically off, or
          could be improved, we welcome your direct feedback. We continuously refine
          our tools based on real user input.
        </p>

        {/* Direct Email Channels Grid - No Database Needed */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            margin: "2rem 0",
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", color: "#10b981" }}>
              General Support &amp; Feedback
            </h3>
            <p style={{ fontSize: "0.88rem", color: "#94a3b8", margin: "0 0 0.75rem 0" }}>
              General questions, tool suggestions, or general mathematical inquiries.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=General%20Feedback`}
              className="button button--ghost button--sm"
              style={{ display: "inline-block" }}
            >
              Email Support &rarr;
            </a>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", color: "#38bdf8" }}>
              Formula &amp; Bug Reports
            </h3>
            <p style={{ fontSize: "0.88rem", color: "#94a3b8", margin: "0 0 0.75rem 0" }}>
              Report a calculation discrepancy, rounding edge case, or unexpected output.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=Formula%20Correction`}
              className="button button--ghost button--sm"
              style={{ display: "inline-block" }}
            >
              Report Discrepancy &rarr;
            </a>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", color: "#f59e0b" }}>
              DMCA &amp; Legal Notices
            </h3>
            <p style={{ fontSize: "0.88rem", color: "#94a3b8", margin: "0 0 0.75rem 0" }}>
              Official copyright takedown notices or regulatory inquiries.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=DMCA%20Inquiry`}
              className="button button--ghost button--sm"
              style={{ display: "inline-block" }}
            >
              Legal Inquiry &rarr;
            </a>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "0.75rem",
              padding: "1.25rem",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem", color: "#a855f7" }}>
              Business &amp; Partnerships
            </h3>
            <p style={{ fontSize: "0.88rem", color: "#94a3b8", margin: "0 0 0.75rem 0" }}>
              Inquiries regarding syndication, advertising, or strategic collaborations.
            </p>
            <a
              href={`mailto:${siteConfig.email}?subject=Advertising%20Inquiry`}
              className="button button--ghost button--sm"
              style={{ display: "inline-block" }}
            >
              Business Inquiries &rarr;
            </a>
          </div>
        </div>

        <div className="contact-box" style={{ marginTop: "1.5rem" }}>
          <h2>Direct Contact Directory</h2>
          <p>
            <strong>Primary Contact Email:</strong>{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            <strong>Website:</strong>{" "}
            <a href={siteConfig.url}>{siteConfig.url}</a>
          </p>
        </div>

        <h2>How to Submit an Accuracy or Bug Report</h2>
        <p>
          When reporting an issue with a specific calculation, including key
          details helps our engineering and editorial team quickly reproduce and resolve it:
        </p>
        <ul>
          <li>
            The calculator name (e.g., Percentage Calculator, USA Pay Raise, Tip Calculator, or Beer ABV).
          </li>
          <li>The exact numerical inputs and settings you entered.</li>
          <li>The output displayed by CalculatorMint.</li>
          <li>
            The expected result and the reference publication or standard you
            are comparing against.
          </li>
        </ul>

        <h2>Requesting a New Calculator</h2>
        <p>
          We are constantly developing new calculators to expand our library. If
          you need a specific tool built, let us know:
        </p>
        <ol>
          <li>What domain or industry the calculator serves.</li>
          <li>The required input parameters and output values.</li>
          <li>Any standard or published formula that defines the math.</li>
        </ol>

        <h2>Professional Boundary Notice</h2>
        <p>
          CalculatorMint provides educational and informational computational
          tools. We cannot provide personalized financial, legal, tax, or medical
          counseling. For consequential personal or clinical decisions, please
          consult certified professionals. Please read our{" "}
          <Link href="/disclaimer">Disclaimer</Link> for additional details.
        </p>

        <h2>Response Times</h2>
        <p>
          Our team strives to review and respond to all email inquiries within 24 to
          48 business hours.
        </p>
      </article>
    </div>
  );
}
