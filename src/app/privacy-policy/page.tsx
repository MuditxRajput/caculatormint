import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — How CalculatorMint Handles Your Data",
  description:
    "Read CalculatorMint’s Privacy Policy in plain English: what information we collect, how calculator inputs are handled, cookies, analytics, retention, and how to contact us about your data.",
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
        <p>Last updated: July 30, 2026</p>
      </header>

      <article className="blog-article">
        <p className="meta-line">
          This Privacy Policy explains how {siteConfig.name} (“we”, “us”, or
          “our”) handles information when you visit {siteConfig.url}, use our
          calculators, read our guides, or email us.
        </p>
        <p>
          We built CalculatorMint to be useful without forcing accounts or
          unnecessary data collection. Most calculator math runs in your browser.
          Still, like nearly every modern website, some technical information is
          processed so the site can load, stay secure, and improve over time. This
          page describes that clearly.
        </p>

        <h2>Who this policy applies to</h2>
        <p>
          This policy applies to visitors and users of the CalculatorMint website
          and related pages we operate. It does not cover third-party websites we
          link to. If you follow a link away from our site, that destination’s
          privacy policy controls.
        </p>

        <h2>Information you choose to give us</h2>
        <p>
          If you contact us by email, we receive whatever you include: your email
          address, message text, and any attachments or screenshots you send. We
          use that information to respond, investigate calculator issues, and keep
          a record of the conversation when needed.
        </p>
        <p>
          We do not require you to create an account to use the calculators. If we
          ever add optional accounts or saved scenarios, we will update this policy
          before collecting that kind of data and explain the choice at the point
          of signup.
        </p>

        <h2>Calculator inputs</h2>
        <p>
          When you type numbers into a calculator — gravity readings, salary
          figures, medical bill estimates, and similar fields — those values are
          generally processed locally in your browser to produce a result. We do
          not ask you to submit those inputs to a CalculatorMint account form as
          part of the core experience.
        </p>
        <p>
          Please avoid pasting highly sensitive personal information into public
          computers or shared screens. Even when we are not storing your inputs as
          account data, your device, browser extensions, or workplace monitoring
          software might.
        </p>

        <h2>Information collected automatically</h2>
        <p>
          When you visit the site, our hosting provider and any analytics tools we
          use may receive standard technical data. That can include IP address,
          approximate location derived from IP, browser type and version, device
          type, operating system, referring URL, pages viewed, dates and times of
          visits, and general interaction data used to understand performance.
        </p>
        <p>
          This kind of data helps us answer practical questions: Are pages loading
          quickly? Which calculators are used most? Did a deploy break a route?
          Without some telemetry, it is hard to keep a public tool reliable.
        </p>

        <h2>Cookies and similar technologies</h2>
        <p>
          Cookies are small text files stored on your device. We may use cookies or
          similar technologies for essential site operation, remembering
          preferences, measuring traffic, or understanding how content performs.
          Some cookies are set by third parties that power analytics or hosting
          features.
        </p>
        <p>
          You can usually block or delete cookies in your browser settings. If you
          block all cookies, parts of the site may still work, but measurement and
          some convenience features may be limited. Browser controls differ by
          vendor, so check your browser’s help documentation for exact steps.
        </p>

        <h2>How we use information</h2>
        <p>
          We use information to operate and improve CalculatorMint, respond to
          messages, fix bugs, monitor abuse or security issues, understand which
          tools and articles are helpful, and communicate about updates when you
          contact us first. We do not sell your personal information as a product.
        </p>

        <h2>When we share information</h2>
        <p>
          We may share information with service providers who help us run the site
          — for example hosting, content delivery, analytics, or email
          infrastructure. Those providers process data on our behalf and should
          only use it to perform their services.
        </p>
        <p>
          We may also disclose information if required by law, to respond to valid
          legal process, or to protect the rights, safety, and security of users,
          the public, or CalculatorMint.
        </p>

        <h2>Data retention</h2>
        <p>
          Email correspondence is kept as long as reasonably needed to resolve your
          request and maintain appropriate business records. Analytics retention
          depends on the settings of the analytics provider we use. When data is no
          longer needed for these purposes, we delete or de-identify it where
          practical.
        </p>

        <h2>Children’s privacy</h2>
        <p>
          CalculatorMint is intended for a general audience. We do not knowingly
          collect personal information from children under 13. If you believe a
          child has sent us personal information, contact us and we will take
          reasonable steps to delete it.
        </p>

        <h2>International visitors</h2>
        <p>
          Our site may be hosted or accessed from different countries. If you visit
          from outside the United States, understand that information may be
          processed in the U.S. or other locations where our providers operate.
          Privacy laws vary by country.
        </p>

        <h2>Your choices and requests</h2>
        <p>
          Depending on where you live, you may have rights to request access to,
          correction of, or deletion of personal information you provided to us
          (for example, via email). To make a request, email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and
          describe what you need. We may need to verify that the request comes from
          the relevant person.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable administrative and technical measures to protect
          information. No method of transmission or storage is 100% secure, and we
          cannot guarantee absolute security. If you believe you discovered a
          security issue affecting CalculatorMint, please report it to the same
          contact email.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy as the site evolves. When we make
          material changes, we will revise the “Last updated” date at the top of
          this page. Continued use of the site after an update means you accept
          the revised policy.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. You can
          also start from our <Link href="/contact">contact page</Link>. For how
          we limit liability around calculator outputs, see the{" "}
          <Link href="/disclaimer">disclaimer</Link> and{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
      </article>
    </div>
  );
}
