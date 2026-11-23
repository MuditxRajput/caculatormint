


import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const ADSENSE_CLIENT = "ca-pub-8884977910314227";
const GA_MEASUREMENT_ID = "G-XC5P31MV2Y";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Free US Contractor Estimate Templates & Bid Calculators`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "contractor estimate template",
    "bid calculator",
    "trade estimate generator",
    "free contractor invoice template",
    "cleaning estimate template",
    "painting bid calculator",
    "roofing estimate template",
    "lawn care bid template",
    "handyman estimate template",
    "pressure washing quote calculator",
    "CalculatorMint",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Free US Contractor Estimate Templates & Bid Calculators`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Free US Contractor Estimate Templates & Bid Calculators`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: absoluteUrl("/"),
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: ["dCmRYjR0_1Mwcr74_WXbMHjubcGaQQ2mU9BiRHUuFbI"],
  },
  other: {
    "google-adsense-account": ADSENSE_CLIENT,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer support",
      url: absoluteUrl("/contact"),
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/estimate-templates?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Raw head tags so AdSense crawlers can verify without executing JS */}
        <meta name="google-adsense-account" content={ADSENSE_CLIENT} />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body className="site-shell antialiased" suppressHydrationWarning>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
