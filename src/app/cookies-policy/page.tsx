import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookies Policy — How CalculatorMint Uses Cookies",
  description:
    "CalculatorMint Cookies Policy: what cookies are, which types we may use, how analytics cookies work, and how to control or delete cookies in your browser.",
  alternates: { canonical: "/cookies-policy" },
  robots: { index: true, follow: true },
};

export default function CookiesPolicyPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Cookies Policy</span>
        </nav>
        <h1>Cookies Policy</h1>
        <p>Last updated: September 17, 2026</p>
      </header>

      <article className="blog-article">
        <p className="meta-line">
          This Cookies Policy explains how {siteConfig.name} (“we”, “us”, or
          “our”) uses cookies and similar technologies on {siteConfig.url}.
        </p>
        <p>
          It should be read together with our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>, which describes the
          personal information we may process. By continuing to use the site, you
          can manage cookies through your browser settings as described below.
        </p>

        <h2>What cookies are</h2>
        <p>
          Cookies are small text files stored on your device when you visit a
          website. Similar technologies include local storage, pixels, and
          scripts that remember a preference or measure a page view. They help a
          site load, stay secure, remember choices, and understand how people use
          the pages.
        </p>

        <h2>Cookies we may use</h2>
        <p>
          CalculatorMint is built so you can use calculators without creating an
          account. We do not use cookies to log you into a CalculatorMint
          profile. We may still use cookies or similar technologies in these
          categories:
        </p>
        <ul>
          <li>
            <strong>Essential.</strong> Needed for the site to load, route
            correctly, and stay reasonably secure. These are not used to market
            to you.
          </li>
          <li>
            <strong>Preferences.</strong> Remember a choice you make on the
            site, such as a display or calculator setting, if we add that kind of
            feature.
          </li>
          <li>
            <strong>Analytics and performance.</strong> Help us see which pages
            load, which calculators are used, and whether a deploy broke a
            route. These may be set by us or by a hosting or analytics provider.
          </li>
          <li>
            <strong>Advertising.</strong> Google AdSense and its partners may set
            cookies to serve and measure ads, including ads based on visits to
            this site and other sites. See our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link> for opt-out links.
          </li>
        </ul>
        <p>
          We do not sell cookie data as a product. Third-party providers that
          power hosting, content delivery, analytics, or advertising may set
          their own cookies when you visit.
        </p>

        <h2>Calculator use</h2>
        <p>
          Numbers you type into a calculator are generally processed in your
          browser to produce a result. Those inputs are not stored as a
          CalculatorMint account record. Your browser or device may still keep
          local data according to its own settings.
        </p>

        <h2>How long cookies last</h2>
        <p>
          Session cookies expire when you close the browser. Persistent cookies
          remain until they expire or you delete them. Retention for analytics
          depends on the provider’s settings. When we no longer need a cookie
          for the purpose it was set, we stop using it or it expires.
        </p>

        <h2>How to control cookies</h2>
        <p>
          You can block or delete cookies in your browser. Steps differ by
          vendor, so use your browser’s help documentation for the current
          instructions. If you block all cookies, the site should still load,
          but measurement, advertising, and some convenience features may be
          limited.
        </p>
        <p>
          To opt out of personalized ads from Google, use{" "}
          <a
            href="https://www.google.com/settings/ads"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Ads Settings
          </a>
          . For other advertising companies, visit{" "}
          <a
            href="https://www.aboutads.info/choices/"
            rel="noopener noreferrer"
            target="_blank"
          >
            aboutads.info
          </a>
          .
        </p>

        <h2>Updates</h2>
        <p>
          We may update this Cookies Policy as the site or our providers change.
          Material updates will be reflected by the “Last updated” date on this
          page.
        </p>

        <h2>Contact</h2>
        <p>
          Cookie or privacy questions can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or
          through our <Link href="/contact">contact page</Link>.
        </p>
      </article>
    </div>
  );
}
