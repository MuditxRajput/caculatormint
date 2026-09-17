import Link from "next/link";
import type { Metadata } from "next";
import { DogBiteCalculator } from "@/components/calculators/DogBiteCalculator";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "Dog Bite Compensation Calculator (USA) — Settlement Estimate";
const description =
  "Free USA dog bite settlement calculator. Estimate compensation from medical bills, lost wages, injury severity, state liability rules (strict vs one-bite), fault, and insurance limits.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "dog bite compensation calculator",
    "dog bite settlement calculator",
    "dog bite claim value",
    "dog bite settlement amount USA",
    "strict liability dog bite",
    "one bite rule",
    "pain and suffering multiplier dog bite",
  ],
  alternates: {
    canonical: "/calculators/dog-bite-compensation-calculator",
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/calculators/dog-bite-compensation-calculator"),
    type: "website",
  },
};

const faqs = [
  {
    q: "How is a dog bite settlement calculated in the USA?",
    a: "Most rough estimates add economic damages (medical bills, future care, lost wages, and other costs), then multiply those damages by a pain-and-suffering factor (often about 1.5× to 6×) based on injury severity. The total is adjusted for liability strength, comparative fault, and insurance limits.",
  },
  {
    q: "What is the average dog bite settlement?",
    a: "Insurance-industry figures often place average dog-bite claim payouts around $50,000–$70,000, but individual cases vary widely. Minor bites may settle for a few thousand dollars; surgery, facial scarring, or child victims can reach six figures.",
  },
  {
    q: "What is strict liability vs the one-bite rule?",
    a: "In strict-liability states (for example California or Florida), an owner can be liable for a bite even without a prior incident. In one-bite / negligence states (for example New York or Texas), you often must show the owner knew or should have known the dog was dangerous, or was negligent.",
  },
  {
    q: "Who usually pays a dog bite claim?",
    a: "Most U.S. dog bite claims are paid by the owner’s homeowners or renters liability insurance, commonly capped at $100,000–$300,000 unless other coverage or assets exist.",
  },
  {
    q: "Is this calculator legal advice?",
    a: "No. It is an educational estimate only. Real settlements depend on evidence, medical documentation, state law, insurance coverage, and negotiation. Consult a licensed attorney in your state for advice about your claim.",
  },
];

export default function DogBiteCompensationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Dog Bite Compensation Calculator (USA)",
        url: absoluteUrl("/calculators/dog-bite-compensation-calculator"),
        applicationCategory: "FinanceApplication",
        operatingSystem: "Any",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description,
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Calculators",
            item: absoluteUrl("/calculators"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Dog Bite Compensation Calculator",
            item: absoluteUrl("/calculators/dog-bite-compensation-calculator"),
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
      {
        "@type": "Article",
        headline: "How Dog Bite Settlements Are Estimated in the USA",
        description,
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl(
          "/calculators/dog-bite-compensation-calculator",
        ),
      },
    ],
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
          <Link href="/calculators">Calculators</Link>
          <span>/</span>
          <span>Dog Bite Compensation</span>
        </nav>
        <h1>Dog Bite Compensation Calculator (USA)</h1>
        <p>
          Estimate a U.S. dog bite settlement range from medical bills, lost
          wages, injury severity, scarring, state liability rules (strict vs
          one-bite), comparative fault, and homeowners insurance limits.
        </p>
      </header>

      <section
        className="abv-layout"
        aria-label="Dog bite compensation calculator tool"
      >
        <DogBiteCalculator />
      </section>

      <article className="blog-article">
        <p className="meta-line">Legal · Dog Bite Calculator · United States</p>
        <p>
          A dog bite compensation calculator is a way to ballpark a U.S.
          settlement — not a court verdict. Insurers and attorneys often start
          with economic damages (medical bills, future care, lost wages, and
          other costs), then apply a pain-and-suffering multiplier based on
          injury severity. This free dog bite settlement calculator also folds in
          state liability rules (strict liability vs the one-bite rule),
          comparative fault, and homeowners or renters insurance caps, because
          those facts change the number more than a spreadsheet multiplier
          alone.
        </p>
        <p>
          Enter your figures in the tool above, then read how the estimate is
          built, what typical reported ranges look like, and why this is
          educational only.
        </p>

        <h2>How this USA dog bite settlement calculator works</h2>
        <ol>
          <li>
            Add <strong>economic damages</strong> — medical bills, expected
            future care, lost wages, and other out-of-pocket costs.
          </li>
          <li>
            Apply a <strong>pain-and-suffering multiplier</strong> (about 1.5×
            for minor bites up to 6× for catastrophic injury), with extra weight
            for facial injuries, scarring, and child victims.
          </li>
          <li>
            Adjust for <strong>state liability</strong>, how clear fault is,
            comparative negligence, and any insurance policy cap.
          </li>
        </ol>
        <p>
          The result is a low-to-high range because no single formula binds an
          insurer or a jury.
        </p>

        <h2>Dog bite settlement estimate formula</h2>
        <code className="formula-block">
          Economic damages = Medical + Future care + Lost wages + Other costs
        </code>
        <code className="formula-block">
          Pain &amp; suffering ≈ Economic damages × multiplier (1.5×–6×)
        </code>
        <code className="formula-block">
          Estimate = (Economic + Pain &amp; suffering) × liability factor × (1 −
          fault %)
        </code>
        <p>
          Example: $12,000 economic damages at a 3× multiplier → about $36,000
          pain and suffering → roughly <strong>$48,000</strong> before liability
          or insurance adjustments. If the victim shares 20% fault in a
          comparative-negligence state, the estimate drops by that share. If
          the owner’s homeowners liability limit is $100,000, a higher paper
          number still may not collect above the policy.
        </p>

        <h2>Strict liability vs the one-bite rule</h2>
        <p>
          Strict liability states (such as California, Florida, and Illinois)
          often make the owner responsible for a bite even without a prior
          incident, subject to defenses like trespass or provocation. One-bite
          or negligence states (such as New York, Texas, and Virginia)
          typically require proof the owner knew or should have known the dog
          was dangerous, or was otherwise negligent. That is why the calculator
          asks about prior bites and disputed liability: claim value is not
          only medical bills.
        </p>
        <p>
          Most U.S. dog bite claims are paid by the owner’s homeowners or
          renters liability insurance, commonly capped around $100,000–$300,000
          unless other coverage or assets exist.
        </p>

        <h2>Typical reported ranges (not guarantees)</h2>
        <ul>
          <li>Minor — single treatment: often about $3,000–$15,000</li>
          <li>Moderate — stitches / follow-ups: about $15,000–$50,000</li>
          <li>Severe — hospital / nerve injury: about $50,000–$150,000</li>
          <li>Disfigurement / child victim: often $100,000–$300,000+</li>
        </ul>
        <p>
          Industry averages for paid claims often sit around $50,000–$70,000,
          but your facts can sit far outside that band. Treat every online
          estimate as a starting point. Speak with a licensed attorney in your
          state for advice about a real claim, and read the{" "}
          <Link href="/disclaimer">disclaimer</Link>.
        </p>

        <h2>Dog bite compensation FAQ</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
        <p>
          For liability rules and insurance in more depth, read{" "}
          <Link href="/blog/how-dog-bite-settlements-work-in-the-usa">
            How dog bite settlements work in the USA
          </Link>
          .
        </p>
        <p className="abv-hint">
          Disclaimer: CalculatorMint provides educational estimates only. It is
          not a law firm and does not provide legal advice. Statutes of
          limitation and liability rules vary by state and change over time.
        </p>
      </article>
    </div>
  );
}
