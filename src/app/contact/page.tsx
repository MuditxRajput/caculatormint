import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";

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

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <article className="blog-article">
        <p>
          If something on CalculatorMint feels unclear, mathematically off, or
          could be improved, we welcome your direct feedback. We continuously refine
          our tools based on real user input.
        </p>

        <div className="contact-box">
          <h2>Direct Contact Information</h2>
          <p>
            <strong>Primary Support & Editorial:</strong>{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <br />
            <strong>Website:</strong>{" "}
            <a href={siteConfig.url}>{siteConfig.url}</a>
            <br />
            <strong>DMCA Compliance Inquiries:</strong>{" "}
            <a href={`mailto:${siteConfig.email}?subject=DMCA%20Inquiry`}>
              {siteConfig.email}
            </a>
            <br />
            <strong>Business & Advertising:</strong>{" "}
            <a href={`mailto:${siteConfig.email}?subject=Advertising%20Inquiry`}>
              {siteConfig.email}
            </a>
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

        <div className="ad-container ad-container--in-content">
          <AdSlot format="in-article" label="Advertisement" />
        </div>

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

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
