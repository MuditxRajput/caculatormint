import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "DMCA Copyright Policy — CalculatorMint",
  description:
    "CalculatorMint DMCA Copyright Policy: guidelines for reporting copyright infringement, submitting takedown notices, counter-notices, and designated agent contact details.",
  alternates: { canonical: "/dmca" },
  robots: { index: true, follow: true },
};

export default function DmcaPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>DMCA Policy</span>
        </nav>
        <h1>DMCA & Copyright Policy</h1>
        <p>Last updated: October 9, 2026</p>
      </header>

      <article className="blog-article">
        <p className="meta-line">
          {siteConfig.name} respects the intellectual property rights of others
          and complies with the Digital Millennium Copyright Act (“DMCA”) (17
          U.S.C. § 512) and international copyright legislation.
        </p>

        <p>
          It is our policy to respond promptly to clear, documented notices of
          alleged copyright infringement. If you are a copyright owner or an
          authorized agent and believe that content published on{" "}
          <Link href="/">{siteConfig.url}</Link> infringes upon your copyright,
          you may submit a formal notification pursuant to the procedures
          detailed below.
        </p>

        <h2>1. Designated Copyright Agent</h2>
        <p>
          Notices of claimed copyright infringement should be directed to our
          designated Copyright Agent by email or mail:
        </p>
        <div className="contact-box">
          <p>
            <strong>DMCA Designated Agent:</strong> Copyright Compliance Officer
            <br />
            <strong>Organization:</strong> {siteConfig.name} Legal & Compliance
            <br />
            <strong>Email:</strong>{" "}
            <a href={`mailto:${siteConfig.email}?subject=DMCA%20Takedown%20Notice`}>
              {siteConfig.email}
            </a>
            <br />
            <strong>Subject Line:</strong> “DMCA Takedown Notice — [Content Description]”
          </p>
        </div>

        <h2>2. Requirements for a Valid DMCA Notice</h2>
        <p>
          To ensure efficient processing, your notification must be in writing
          and contain all of the following statutory elements under 17 U.S.C. §
          512(c)(3):
        </p>
        <ol>
          <li>
            <strong>Physical or Electronic Signature:</strong> A physical or
            electronic signature of the person authorized to act on behalf of the
            owner of the exclusive right that is allegedly infringed.
          </li>
          <li>
            <strong>Identification of Copyrighted Work:</strong> A description or
            title of the copyrighted work claimed to have been infringed, or if
            multiple works are covered by a single notification, a representative
            list of such works.
          </li>
          <li>
            <strong>Identification of the Infringing Material:</strong> Clear
            identification of the material that is claimed to be infringing,
            including the exact URL(s) on CalculatorMint where the material is
            located so we can quickly locate it.
          </li>
          <li>
            <strong>Contact Information:</strong> Information reasonably sufficient
            to permit us to contact you, such as your full legal name, mailing
            address, telephone number, and email address.
          </li>
          <li>
            <strong>Good Faith Statement:</strong> A statement that you have a
            good faith belief that use of the material in the manner complained
            of is not authorized by the copyright owner, its agent, or the law
            (e.g., fair use).
          </li>
          <li>
            <strong>Accuracy and Perjury Statement:</strong> A statement under
            penalty of perjury that the information in the notification is
            accurate, and that you are authorized to act on behalf of the owner
            of an exclusive right that is allegedly infringed.
          </li>
        </ol>

        <p>
          Please note that under 17 U.S.C. § 512(f), any person who knowingly
          materially misrepresents that material or activity is infringing may be
          subject to legal liability for damages, including attorney fees and
          costs.
        </p>

        <h2>3. Takedown Procedure</h2>
        <p>
          Upon receipt of a valid and complete DMCA notice meeting all statutory
          criteria, {siteConfig.name} will:
        </p>
        <ul>
          <li>Acknowledge receipt of the notice within 48 business hours.</li>
          <li>
            Expeditiously remove or disable access to the allegedly infringing
            material.
          </li>
          <li>
            Notify the content provider or author of the removal and provide a
            copy of the takedown notice.
          </li>
        </ul>

        <h2>4. Counter-Notification Procedure</h2>
        <p>
          If you believe that your content was removed or disabled by mistake or
          misidentification, you may submit a formal counter-notification
          pursuant to 17 U.S.C. § 512(g)(3). A valid counter-notification must
          include:
        </p>
        <ol>
          <li>Your physical or electronic signature.</li>
          <li>
            Identification of the material that has been removed or to which
            access has been disabled and the location where the material appeared
            before it was removed.
          </li>
          <li>
            A statement under penalty of perjury that you have a good faith belief
            that the material was removed or disabled as a result of mistake or
            misidentification.
          </li>
          <li>
            Your name, address, and telephone number, and a statement that you
            consent to the jurisdiction of Federal District Court for the
            judicial district in which your address is located (or if outside the
            United States, for any judicial district in which the service provider
            may be found), and that you will accept service of process from the
            person who provided the original infringement notification.
          </li>
        </ol>
        <p>
          If a valid counter-notification is received, we may send a copy to the
          original complaining party informing them that we may replace the
          removed material in 10 to 14 business days unless the copyright owner
          files an action seeking a court order against the content provider.
        </p>

        <h2>5. Repeat Infringer Policy</h2>
        <p>
          In accordance with the DMCA and other applicable intellectual property
          laws, {siteConfig.name} maintains a strict policy to terminate or bar,
          in appropriate circumstances and at our sole discretion, users or
          contributors who are deemed repeat copyright infringers.
        </p>

        <h2>6. Original Content & Educational Calculators</h2>
        <p>
          All calculator calculation engines, source code, mathematical models,
          diagrams, and explanatory guides published on {siteConfig.name} are
          either original works developed by our team, derived from standard
          mathematical and economic formulas, or based on recognized industry standards
          (such as ASBC brewing methods and standard U.S. payroll conventions).
        </p>

        <h2>7. Contact Information</h2>
        <p>
          For copyright inquiries or any DMCA-related matters, please email us
          at:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. You can
          also visit our <Link href="/contact">Contact Page</Link>,{" "}
          <Link href="/terms">Terms of Use</Link>, or{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </article>
    </div>
  );
}
