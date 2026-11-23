import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — Rules for Using CalculatorMint",
  description:
    "CalculatorMint Terms of Use covering acceptable use, intellectual property, disclaimers of warranty, limitation of liability, and contact details for the free calculator marketplace.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms of Use</span>
        </nav>
        <h1>Terms of Use</h1>
        <p>Last updated: July 30, 2026</p>
      </header>

      <article className="blog-article">
        <p className="meta-line">
          These Terms of Use (“Terms”) govern your access to and use of{" "}
          {siteConfig.name} at {siteConfig.url}, including calculators, blog
          guides, and related pages.
        </p>
        <p>
          By using the site, you agree to these Terms, our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>, and our{" "}
          <Link href="/disclaimer">Disclaimer</Link>. If you do not agree, please
          do not use CalculatorMint.
        </p>

        <h2>What CalculatorMint provides</h2>
        <p>
          CalculatorMint offers free educational calculators and written guides.
          Examples include brewing ABV estimates, USA pay-raise conversions, and
          dog bite compensation ranges. We may add, change, or remove tools and
          content at any time without notice.
        </p>
        <p>
          The site is provided for general information. It is not a professional
          advisory service, and using it does not create an attorney-client,
          doctor-patient, tax-preparer, or other professional relationship.
        </p>

        <h2>Eligibility and responsibility</h2>
        <p>
          You are responsible for how you use the site and for any decisions you
          make based on calculator outputs or articles. If you use CalculatorMint
          on behalf of an organization, you represent that you have authority to
          accept these Terms for that organization.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You agree to use the site lawfully. You may not attempt to disrupt
          servers, bypass security, scrape the site in an abusive way that degrades
          service for others, reverse engineer critical infrastructure beyond what
          applicable law allows, or use our brand to imply endorsement without
          permission.
        </p>
        <p>
          You also agree not to misrepresent calculator results as certified
          professional opinions. Educational estimates are not court filings, tax
          returns, medical diagnoses, or lab certificates.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The CalculatorMint name, logo, site design, and original written content
          are owned by us or our licensors. You may link to our public pages and
          quote short excerpts with clear attribution. You may not copy the site
          wholesale, republish tools as your own product, or use our marks in a
          way that confuses people about sponsorship or origin.
        </p>

        <h2>User submissions</h2>
        <p>
          If you email feedback, ideas, or corrections, you grant us a
          non-exclusive right to use that feedback to improve the service. You
          still own your message content, but we need permission to act on useful
          suggestions without later claims that we “stole” an idea simply by
          shipping a similar calculator.
        </p>

        <h2>Third-party links</h2>
        <p>
          Our pages may reference or link to third-party websites, formulas, or
          resources. We do not control those sites and are not responsible for
          their content, availability, or policies. Visiting them is at your own
          risk.
        </p>

        <h2>Disclaimer of warranties</h2>
        <p>
          THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE FULLEST EXTENT
          PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED,
          INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. WE DO NOT WARRANT THAT RESULTS WILL BE ERROR-FREE,
          UNINTERRUPTED, OR SUITABLE FOR YOUR SPECIFIC SITUATION.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMITTED BY LAW, CALCULATORMINT AND ITS
          OPERATORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, LOST DATA, OR
          BUSINESS INTERRUPTION, ARISING FROM YOUR USE OF THE SITE OR RELIANCE ON
          ANY CALCULATOR OUTPUT OR ARTICLE.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations. In those places,
          our liability is limited to the maximum extent allowed by law.
        </p>

        <h2>Indemnity</h2>
        <p>
          You agree to defend and hold harmless CalculatorMint and its operators
          from claims arising out of your misuse of the site, your violation of
          these Terms, or your violation of any law or third-party right — except
          to the extent caused by our willful misconduct where such limitation is
          not permitted.
        </p>

        <h2>Changes to the Terms</h2>
        <p>
          We may update these Terms as the product evolves. The “Last updated”
          date will change when we do. Continued use after an update constitutes
          acceptance of the revised Terms.
        </p>

        <h2>Termination</h2>
        <p>
          We may suspend or restrict access to the site if we believe use violates
          these Terms or harms the service or other users. Provisions that by their
          nature should survive — including intellectual property, disclaimers, and
          limitations of liability — will survive termination.
        </p>

        <h2>Governing considerations</h2>
        <p>
          These Terms are intended for a U.S.-oriented website experience. Local
          mandatory consumer protections may still apply depending on where you
          live. If any provision is found unenforceable, the remaining provisions
          stay in effect.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. For
          privacy topics, see the{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>. For the educational
          nature of our tools, read the{" "}
          <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
