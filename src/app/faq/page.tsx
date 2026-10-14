import Link from "next/link";
import type { Metadata } from "next";
import { liveCalculators } from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) — CalculatorMint",
  description:
    "Find answers to frequently asked questions about CalculatorMint: calculator formulas, data privacy, Google AdSense ads, DMCA policies, and accuracy standards.",
  alternates: { canonical: "/faq" },
  keywords: [
    "CalculatorMint FAQ",
    "calculator questions",
    "are online calculators accurate",
    "pay raise calculator FAQ",
    "percentage calculator FAQ",
    "tip calculator FAQ",
    "beer ABV calculator FAQ",
  ],
};

const faqs = [
  {
    q: "Is CalculatorMint completely free to use?",
    a: "Yes. All calculators and educational guides on CalculatorMint are 100% free with no registration or paywalls required. We support our server costs and editorial work through non-intrusive advertisements served by Google AdSense.",
  },
  {
    q: "How does CalculatorMint verify the accuracy of its calculators?",
    a: "We implement established, mathematically documented formulas — including standard algebraic percentage equations, official U.S. payroll conversion schedules, hospitality tip conventions, and ASBC brewing standards. Each calculator page explicitly documents its underlying equation so users can inspect the logic.",
  },
  {
    q: "Do you store the numbers and personal data entered into calculators?",
    a: "No. All calculations are executed locally in your browser using client-side JavaScript. We do not store, log, or sell the numbers you type into input fields.",
  },
  {
    q: "Which calculators are currently available?",
    a: "Our platform features 14 verified calculators: Percentage Calculator, Discount & Sale Price Calculator, USA Pay Raise Calculator, Compound Interest Calculator, Tip & Bill Split Calculator, Fuel Cost Calculator, Profit Margin & Markup Calculator, Beer ABV Calculator, Cubic Yard Calculator (Concrete & Mulch), Average Calculator, Grade Average Calculator, Weighted Average Calculator, Cumulative GPA Calculator, and GPA Calculator for Middle Schoolers.",
  },
  {
    q: "Why does CalculatorMint publish in-depth guides for each tool?",
    a: "A calculator gives you the raw output, but real decisions require context. Our comprehensive guides explain the equations, step-by-step examples, common pitfalls, and edge cases to help you make informed choices.",
  },
  {
    q: "How does Google AdSense work on CalculatorMint?",
    a: "We partner with Google AdSense to display contextual and relevant advertisements. Google may use cookies to serve ads based on your visits to our site and other websites. You can customize or opt out of personalized advertising at any time through Google Ads Settings.",
  },
  {
    q: "What is your copyright and DMCA takedown policy?",
    a: "CalculatorMint respects all intellectual property laws and maintains a comprehensive DMCA Copyright Policy. If you believe your copyrighted work has been improperly used, you can file a takedown request via our DMCA page.",
  },
  {
    q: "Can I request a new calculator or report a bug?",
    a: "Yes! We welcome suggestions and reports. Please send your formula details or bug reproduction steps to calculatormint@gmail.com or visit our Contact page.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>FAQ</span>
        </nav>
        <h1>Frequently Asked Questions</h1>
        <p>
          Clear answers about how CalculatorMint operates, formula verification,
          advertising disclosures, and data privacy.
        </p>
      </header>

      <article className="blog-article">
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q} open>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <h2>Explore Our Active Calculators</h2>
        <ul>
          {liveCalculators.map((calc) => (
            <li key={calc.slug}>
              <Link href={calc.href}>
                <strong>{calc.name}</strong>
              </Link>{" "}
              — {calc.description}
            </li>
          ))}
        </ul>

        <h2>Additional Resources & Legal Policies</h2>
        <p>
          For more details on our standards and policies, explore our{" "}
          <Link href="/about">About Page</Link>,{" "}
          <Link href="/dmca">DMCA Policy</Link>,{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
          <Link href="/cookies-policy">Cookies Policy</Link>, and{" "}
          <Link href="/disclaimer">Disclaimer</Link>.
        </p>
      </article>
    </div>
  );
}
