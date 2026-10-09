import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Cookies Policy — CalculatorMint",
  description:
    "CalculatorMint Cookies Policy: how cookies work, essential cookies, Google AdSense advertising cookies, and how to control cookies in your web browser.",
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
        <p>Last updated: October 9, 2026</p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <article className="blog-article">
        <p className="meta-line">
          This Cookies Policy explains how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo;) uses cookies and similar browser tracking technologies on{" "}
          <Link href="/">{siteConfig.url}</Link>.
        </p>
        <p>
          This document should be read alongside our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>, which provides comprehensive
          information on how we safeguard user data.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files downloaded to your computer or mobile device
          when you visit a website. They allow the website to recognize your browser,
          remember preferences, support essential site performance, and enable
          advertising partners like Google AdSense to serve relevant advertisements.
        </p>

        <h2>2. Categories of Cookies We Use</h2>
        <ul>
          <li>
            <strong>Strictly Necessary Cookies:</strong> Essential for page routing,
            security headers, and core navigation. These do not gather marketing data.
          </li>
          <li>
            <strong>Functional & Preference Cookies:</strong> Used to remember your
            selected calculator units (such as SG vs. Plato) across page refreshes.
          </li>
          <li>
            <strong>Analytics & Performance Cookies:</strong> Gather aggregate,
            de-identified traffic insights (e.g., page load speeds, high-traffic tools)
            to help us optimize platform responsiveness.
          </li>
          <li>
            <strong>Targeting & Advertising Cookies (Google AdSense):</strong> Placed
            by Google and its third-party ad technology partners to deliver and measure
            ads. These cookies help deliver advertisements tailored to your interests
            and prevent identical ads from repeatedly showing.
          </li>
        </ul>

        <div className="ad-container ad-container--in-content">
          <AdSlot format="in-article" label="Advertisement" />
        </div>

        <h2>3. How to Manage and Disable Cookies</h2>
        <p>
          You have full control over cookies on your device. Most modern browsers
          allow you to block third-party cookies or delete existing cookies through
          browser preferences:
        </p>
        <ul>
          <li>
            <strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr;
            Third-party cookies
          </li>
          <li>
            <strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr;
            Enhanced Tracking Protection
          </li>
          <li>
            <strong>Apple Safari:</strong> Settings &rarr; Privacy &rarr; Prevent
            cross-site tracking
          </li>
          <li>
            <strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions
          </li>
        </ul>
        <p>
          To opt out specifically of Google&rsquo;s personalized advertising cookies,
          visit the{" "}
          <a
            href="https://www.google.com/settings/ads"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Ads Settings page
          </a>
          .
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have questions regarding our use of cookies or tracking technologies,
          please email our team at:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or visit
          our <Link href="/contact">Contact Page</Link>.
        </p>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
