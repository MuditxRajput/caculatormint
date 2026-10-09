import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Terms of Service — CalculatorMint",
  description:
    "CalculatorMint Terms of Service covering acceptable use, intellectual property, advertising disclosures, disclaimers of warranty, and limitation of liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms of Service</span>
        </nav>
        <h1>Terms of Service</h1>
        <p>Last updated: October 9, 2026</p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <article className="blog-article">
        <p className="meta-line">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of{" "}
          {siteConfig.name} at {siteConfig.url}, including all online calculators,
          explanatory guides, articles, and associated services.
        </p>
        <p>
          By accessing or using {siteConfig.name}, you agree to be bound by these
          Terms, our <Link href="/privacy-policy">Privacy Policy</Link>, our{" "}
          <Link href="/cookies-policy">Cookies Policy</Link>, our{" "}
          <Link href="/dmca">DMCA Copyright Policy</Link>, and our{" "}
          <Link href="/disclaimer">Disclaimer</Link>. If you do not agree to all
          terms, please discontinue use immediately.
        </p>

        <h2>1. Services Provided</h2>
        <p>
          {siteConfig.name} provides free, web-based mathematical calculators and
          educational articles covering brewing calculations, U.S. salary and
          payroll conversions, and pulmonary function reference equations. The
          services are provided &ldquo;as is&rdquo; for informational and educational
          purposes. We reserve the right to modify, update, or discontinue any tool
          or content at any time without prior notice.
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          All content on {siteConfig.name} — including site design, branding,
          logos, software source code, written articles, and layout — is the property
          of {siteConfig.name} and protected by applicable copyright, trademark, and
          intellectual property laws. You may view, interact with, and print content
          for personal, non-commercial use. You may not republish, scrape,
          redistribute, or reproduce whole calculators or substantial portions of
          our articles without express prior written consent.
        </p>
        <p>
          For copyright infringement claims, please consult our dedicated{" "}
          <Link href="/dmca">DMCA Copyright Policy</Link>.
        </p>

        <h2>3. Acceptable Use Policy</h2>
        <p>
          You agree to use {siteConfig.name} solely for legitimate, lawful purposes.
          You agree not to:
        </p>
        <ul>
          <li>
            Engage in automated scraping, data extraction, or denial-of-service
            attacks that overload or degrade our infrastructure.
          </li>
          <li>
            Circumvent security features, reverse-engineer proprietary algorithms,
            or tamper with website advertising.
          </li>
          <li>
            Misrepresent calculator outputs as certified professional, legal, tax,
            or medical opinions.
          </li>
        </ul>

        <div className="ad-container ad-container--in-content">
          <AdSlot format="in-article" label="Advertisement" />
        </div>

        <h2>4. Advertising & Google AdSense</h2>
        <p>
          To maintain free access for all users, {siteConfig.name} displays
          advertisements provided by Google AdSense and third-party advertising
          networks. By using the site, you acknowledge that third-party vendors,
          including Google, may use cookies to serve ads based on your prior visits
          to this and other websites. Please review our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> for details on how
          to manage advertising preferences and opt out of personalized ads.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          THE WEBSITE, CALCULATORS, AND CONTENT ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND
          &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
          IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          IN NO EVENT SHALL {siteConfig.name}, ITS OPERATORS, AUTHORS, OR AFFILIATES
          BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR
          PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF OR INABILITY TO USE THE
          WEBSITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>

        <h2>7. Contact Information</h2>
        <p>
          If you have questions regarding these Terms of Service, please contact us
          at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or via
          our <Link href="/contact">Contact Page</Link>.
        </p>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
