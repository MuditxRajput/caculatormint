import Link from "next/link";
import type { Metadata } from "next";
import { liveCalculators } from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Common Questions About CalculatorMint",
  description:
    "Detailed FAQ for CalculatorMint: free calculator use, accuracy, USA tools, SEO guides, privacy of inputs, dog bite estimates, pay raise math, and how to request new calculators.",
  alternates: { canonical: "/faq" },
  keywords: [
    "CalculatorMint FAQ",
    "calculator questions",
    "are online calculators accurate",
    "dog bite calculator FAQ",
    "pay raise calculator FAQ",
  ],
};

const faqs = [
  {
    q: "Is CalculatorMint free to use?",
    a: "Yes. The calculators and guides are free. You do not need an account to run the core tools. We may introduce optional features later, but the baseline experience is built to stay accessible.",
  },
  {
    q: "How do you keep calculators accurate?",
    a: "We implement widely used formulas, document them on each tool page, and compare outputs against known reference cases where possible. If you find a discrepancy, send your inputs and expected result through the contact page so we can reproduce it.",
  },
  {
    q: "Do you store the numbers I type into calculators?",
    a: "Most calculations run in your browser. We do not require login to use the tools. See the Privacy Policy for analytics, hosting logs, and email correspondence details.",
  },
  {
    q: "Which calculators are live right now?",
    a: "Live tools currently include the ABV Calculator, USA Pay Raise Calculator, USA Dog Bite Compensation Calculator, and USA PFT Calculator (GLI-2012). The calculators directory always shows the current list and coming-soon items.",
  },
  {
    q: "Why do you publish blog posts for each calculator?",
    a: "Guides help people understand formulas and edge cases. They also support search visibility by answering the questions people type into Google around each tool. Useful content and accurate tools reinforce each other.",
  },
  {
    q: "Is the dog bite calculator a legal case valuation?",
    a: "No. It is an educational estimate using economic damages, severity multipliers, liability orientation, fault, and insurance caps. Real settlements depend on evidence, state law, and coverage. Read the disclaimer and speak with a licensed attorney for advice.",
  },
  {
    q: "Does a percentage raise change depending on pay frequency?",
    a: "The percentage itself is the same whether you think in hourly or annual terms. What changes is the dollar amount on each paycheck, because U.S. schedules differ — especially bi-weekly (26) versus semi-monthly (24).",
  },
  {
    q: "Can I request a new calculator?",
    a: "Absolutely. Email us with the audience, required inputs, and any trusted formula source. Clear requests are easier to prioritize than vague ones.",
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
        <h1>Frequently asked questions</h1>
        <p>
          Straight answers about how CalculatorMint works, what the tools can and
          cannot do, and how to get help.
        </p>
      </header>

      <article className="blog-article">
        <p>
          This FAQ collects the questions we hear most often about{" "}
          {siteConfig.name}. If you need a deeper explanation of a specific tool,
          open that calculator’s page or its matching blog guide — those articles
          walk through formulas with examples.
        </p>

        <h2>Is CalculatorMint free to use?</h2>
        <p>
          Yes. The calculators and guides are free. You do not need an account to
          run the core tools. We may introduce optional features later, but the
          baseline experience is built to stay accessible.
        </p>

        <h2>How do you keep calculators accurate?</h2>
        <p>
          Accuracy starts with choosing the right industry formula, implementing
          it carefully, and showing the method on the page so anyone can audit the
          logic. For ABV, that includes standard and alternate equations. For pay
          raises, that includes real U.S. payroll frequencies. For dog bite
          estimates, that includes the multiplier method and clear liability
          caveats.
        </p>
        <p>
          If something still looks off, send a reproducible report through{" "}
          <Link href="/contact">Contact</Link>. Include inputs, outputs, and what
          you compared against.
        </p>

        <h2>Do you store the numbers I type into calculators?</h2>
        <p>
          Most calculations run in your browser. We do not require login for the
          core tools. Hosting and analytics may still collect standard technical
          visit data. Details are in the{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2>Which calculators are live right now?</h2>
        <p>These tools are currently live:</p>
        <ul>
          {liveCalculators.map((calc) => (
            <li key={calc.slug}>
              <Link href={calc.href}>{calc.name}</Link> — {calc.description}
            </li>
          ))}
        </ul>
        <p>
          Browse everything on the{" "}
          <Link href="/calculators">calculators page</Link>, including coming-soon
          items.
        </p>

        <h2>Why do you publish blog posts for each calculator?</h2>
        <p>
          A calculator answers “what.” A guide answers “why” and “how.” Together
          they help beginners avoid mistakes and help the page rank for long-tail
          searches like “how to calculate a 5% raise bi-weekly” or “how dog bite
          settlements work in the USA.”
        </p>

        <h2>Is the dog bite calculator a legal case valuation?</h2>
        <p>
          No. It is an educational estimate. It can help you understand the pieces
          of a claim — medical costs, lost wages, severity, fault, and insurance
          limits — but it cannot know your evidence, your state’s exact current
          doctrine, or an adjuster’s negotiation posture. For advice about your
          situation, speak with a licensed attorney. Also read the{" "}
          <Link href="/disclaimer">Disclaimer</Link>.
        </p>

        <h2>Does a percentage raise change on different pay schedules?</h2>
        <p>
          The raise percentage is the same whether you apply it to hourly or annual
          pay. What changes is paycheck size under different U.S. schedules.
          Bi-weekly pay divides annual salary by 26; semi-monthly divides by 24.
          Our pay raise calculator shows both so offer letters and payroll portals
          are easier to compare.
        </p>

        <h2>Can I request a new calculator?</h2>
        <p>
          Yes. Email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}
          with the audience, inputs, and any formula source you trust. The more
          specific the request, the easier it is to evaluate.
        </p>

        <h2>Where should I go next?</h2>
        <p>
          If you are new here, start with <Link href="/about">About</Link>, pick a
          tool from <Link href="/calculators">Calculators</Link>, or browse the{" "}
          <Link href="/blog">Blog</Link>. For legal terms of using the site, see{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
      </article>
    </div>
  );
}
