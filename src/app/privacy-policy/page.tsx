import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — CalculatorMint",
  description:
    "Read CalculatorMint’s Privacy Policy: calculator inputs privacy, cookies, Google AdSense personalized advertising disclosure, CCPA/GDPR compliance, and data practices.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </nav>
        <h1>Privacy Policy</h1>
        <p>Last updated: October 9, 2026</p>
      </header>

      <article className="blog-article">
        <p className="meta-line">
          This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo;) handles personal and non-personal data when you visit{" "}
          <Link href="/">{siteConfig.url}</Link>, use our online calculators, read
          our editorial guides, or contact us.
        </p>
        <p>
          We designed CalculatorMint to respect your digital privacy. All calculator
          computations run locally inside your web browser. We do not require account
          registrations, profile creation, or logins to access any tool or article.
        </p>

        <h2>1. Local Processing of Calculator Inputs</h2>
        <p>
          When you enter numerical parameters into our tools — such as specific
          gravity readings, hourly wages, annual salaries, percentages, or restaurant
          bill amounts — those inputs are processed in real-time by client-side
          JavaScript in your browser. We do not store, log, or transmit your calculation
          inputs to external databases or servers.
        </p>

        <h2>2. Google AdSense & Third-Party Advertising</h2>
        <p>
          To keep our calculators and resources free for all users worldwide, we
          partner with Google AdSense and its network of certified third-party ad
          vendors to display advertisements.
        </p>
        <ul>
          <li>
            Third-party vendors, including Google, use cookies (such as DoubleClick
            cookies) to serve ads based on a user&rsquo;s previous visits to this
            website or other sites on the Internet.
          </li>
          <li>
            Google&rsquo;s use of advertising cookies enables it and its partners
            to serve relevant ads to you based on your visit to {siteConfig.name} and
            other sites on the Internet.
          </li>
          <li>
            <strong>Opt-Out of Personalized Ads:</strong> You may opt out of
            personalized advertising by visiting the{" "}
            <a
              href="https://www.google.com/settings/ads"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Ads Settings
            </a>
            . Alternatively, you can opt out of a third-party vendor&rsquo;s use of
            cookies for personalized advertising by visiting{" "}
            <a
              href="https://www.aboutads.info/choices/"
              rel="noopener noreferrer"
              target="_blank"
            >
              aboutads.info
            </a>
            .
          </li>
          <li>
            Learn more about how Google processes information when you use partner
            sites:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              rel="noopener noreferrer"
              target="_blank"
            >
              How Google uses information from sites or apps that use our services
            </a>
            .
          </li>
        </ul>

        <h2>3. Automatically Collected Technical Information</h2>
        <p>
          Like standard web servers, when you access our site, standard non-identifying
          server logs and analytics may record:
        </p>
        <ul>
          <li>Internet Protocol (IP) address and approximate geographic region</li>
          <li>Browser user agent, browser version, and operating system</li>
          <li>Referring and exit URL pages</li>
          <li>Timestamps and page navigation metrics</li>
        </ul>
        <p>
          This telemetry helps us diagnose server performance, maintain site uptime,
          and safeguard against automated malicious attacks.
        </p>

        <h2>4. Cookies & Web Beacons</h2>
        <p>
          Cookies are small text files placed on your device to ensure essential site
          functionality and facilitate advertising measurement. For a detailed
          breakdown of our cookie usage and instructions on how to disable or manage
          cookies in your browser settings, please review our dedicated{" "}
          <Link href="/cookies-policy">Cookies Policy</Link>.
        </p>

        <h2>5. CCPA & CPRA Privacy Rights (California Residents)</h2>
        <p>
          Under the California Consumer Privacy Act (CCPA) and California Privacy
          Rights Act (CPRA), California residents are entitled to:
        </p>
        <ul>
          <li>Request disclosure of categories and specific pieces of collected personal data.</li>
          <li>Request deletion of personal information held by us.</li>
          <li>
            Opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal
            information (CalculatorMint does not sell personal information for monetary compensation).
          </li>
        </ul>
        <p>
          To exercise your California privacy rights, email us at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>6. GDPR & UK Data Protection Rights (European Residents)</h2>
        <p>
          If you are a resident of the European Economic Area (EEA) or the United
          Kingdom, you have statutory rights including:
        </p>
        <ul>
          <li>The right of access to any personal data processed by us.</li>
          <li>The right to rectification or erasure of your personal data.</li>
          <li>The right to restrict or object to the processing of your data.</li>
          <li>The right to lodge a complaint with a supervisory authority.</li>
        </ul>

        <h2>7. Children&rsquo;s Privacy (COPPA Compliance)</h2>
        <p>
          {siteConfig.name} is directed to a general audience and does not knowingly
          collect or solicit personal information from children under the age of 13.
          If we discover that a child under 13 has provided us with personal
          information, we will promptly delete it.
        </p>

        <h2>8. Contact Us & Legal Inquiries</h2>
        <p>
          If you have questions regarding this Privacy Policy or our privacy
          practices, please contact us at:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or visit
          our <Link href="/contact">Contact Page</Link>. Also see our{" "}
          <Link href="/dmca">DMCA Policy</Link> and{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>
      </article>
    </div>
  );
}
