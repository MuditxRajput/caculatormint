import Link from "next/link";
import type { Metadata } from "next";
import { TipCalculator } from "@/components/calculators/TipCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

const title = "Tip Calculator & Bill Splitter — Free Online Restaurant Math";
const description =
  "Free online tip calculator and bill splitter. Calculate custom tip percentages (15%, 18%, 20%, 25%), split dining checks across multiple people, and round up totals.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "tip calculator",
    "bill split calculator",
    "restaurant tip calculator",
    "split check calculator",
    "calculate 20 percent tip",
    "tipping etiquette USA",
    "how much to tip",
  ],
  alternates: {
    canonical: "/calculators/tip-calculator",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: absoluteUrl("/calculators/tip-calculator"),
  },
};

const faqs = [
  {
    q: "Should I calculate tips on the pre-tax bill or the post-tax bill?",
    a: "Standard etiquette dictates tipping on the subtotal before sales tax is added. Taxes go directly to local and state governments rather than the restaurant or hospitality staff. However, many automated payment terminals calculate suggested percentages on the post-tax total. Tipping on pre-tax is completely standard, but tipping post-tax provides a small extra gratuity for exceptional service.",
  },
  {
    q: "How much should I tip for food delivery services (e.g., DoorDash, UberEats, pizza delivery)?",
    a: "For food delivery, the recommended benchmark is 15% to 20% of the food total, with a strict minimum of $3.00 to $5.00 for small orders. During inclement weather (heavy rain, snow) or long delivery distances, tipping $5.00 to $8.00 or 20%+ compensates drivers for gas costs and hazardous driving conditions.",
  },
  {
    q: "What is an automatic gratuity charge and do I still need to tip on top of it?",
    a: "An automatic gratuity is a mandatory service fee (typically 18% to 20%) automatically added to parties of 6 or more guests. If your receipt includes an 'Auto-Gratuity' or 'Service Charge' line item, you do NOT need to leave an additional tip unless the service exceeded your expectations and you wish to reward the staff further.",
  },
  {
    q: "How does rounding up to the nearest whole dollar affect my effective tip percentage?",
    a: "Rounding up to the nearest whole dollar (e.g., from $76.24 to $77.00) slightly increases your effective gratuity rate by pennies. It is commonly done by diners paying in cash or card to keep bank statements clean and provide a tidy total.",
  },
  {
    q: "What is the standard tipping guideline for bartenders and coffee baristas?",
    a: "For bartenders, standard etiquette is $1.00 to $2.00 per beer, wine, or simple pour, and 18% to 20% on complex craft cocktail tabs. For specialty coffee shops, $1.00 per handcrafted espresso drink or 10% to 15% is customary.",
  },
];

export default function TipCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Tip Calculator & Bill Splitter",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/tip-calculator"),
        description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
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
            name: "Tip Calculator",
            item: absoluteUrl("/calculators/tip-calculator"),
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
        headline: "How to Calculate Restaurant Tips and Split Dining Checks Fairly",
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
        mainEntityOfPage: absoluteUrl("/calculators/tip-calculator"),
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
          <span>Tip Calculator</span>
        </nav>
        <span className="badge badge--live">Dining &amp; Everyday Math</span>
        <h1>Free Online Tip Calculator &amp; Bill Splitter</h1>
        <p>
          Calculate tips instantly, split restaurant checks fairly among groups,
          and round up totals to eliminate awkward dining math.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <div className="calc-page-layout">
        <TipCalculator />
      </div>

      <div className="ad-container ad-container--mid">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>

      {/* Comprehensive Editorial Guide Below Calculator */}
      <article className="blog-article">
        <p className="meta-line">Dining Math · Gratuity Etiquette · Bill Splitting</p>
        <p>
          A tip calculator simplifies one of the most common everyday arithmetic challenges:
          rewarding service staff fairly without having to calculate mental percentages at the
          end of a meal. Whether you are dining solo, splitting an expensive dinner tab among
          colleagues, or ordering weekend takeout, this free tool calculates the exact tip amount,
          the combined bill total, and each guest&apos;s equal contribution.
        </p>

        <h2>The Mathematical Formula for Calculating Tips</h2>
        <p>
          Calculating a tip involves finding a percentage of the subtotal and adding that amount
          to the bill:
        </p>
        <code className="formula-block">
          Tip Amount = Subtotal × (Tip Percentage ÷ 100)
        </code>
        <code className="formula-block">
          Total Bill = Subtotal + Tip Amount
        </code>
        <p>
          <strong>Worked Example:</strong> If your dinner check comes to $65.00 and you wish to
          leave an 18% tip for good table service:
        </p>
        <ul>
          <li><strong>Step 1:</strong> Convert 18% to a decimal: 18 ÷ 100 = 0.18</li>
          <li><strong>Step 2:</strong> Multiply by check total: $65.00 × 0.18 = <strong>$11.70 tip</strong></li>
          <li><strong>Step 3:</strong> Add to the bill: $65.00 + $11.70 = <strong>$76.70 total to pay</strong></li>
        </ul>

        <h2>How Check Splitting Works Among Multiple People</h2>
        <p>
          When multiple people share a meal, splitting the check evenly ensures everyone pays
          their fair share of the food, beverages, and gratuity:
        </p>
        <code className="formula-block">
          Share Per Person = Total Bill With Tip ÷ Number of Diners
        </code>
        <p>
          Using the $76.70 total from above with <strong>2 diners</strong>:
        </p>
        <p>
          Each guest pays: $76.70 ÷ 2 = <strong>$38.35 per person</strong> (which includes an
          individual tip share of $11.70 ÷ 2 = $5.85).
        </p>

        <h2>Standard U.S. Tipping Guidelines &amp; Etiquette Benchmarks</h2>
        <p>
          In the United States, hospitality workers often receive a sub-minimum tipped wage, making
          gratuities a vital component of take-home compensation. Here are the widely accepted
          percentage benchmarks:
        </p>
        <ul>
          <li>
            <strong>15% (Acceptable / Standard Service):</strong> Met basic expectations. Food
            arrived correctly, and drinks were refilled when requested.
          </li>
          <li>
            <strong>18% (Good to Very Good Service):</strong> Attentive, friendly, prompt table
            service throughout the meal.
          </li>
          <li>
            <strong>20% (Excellent Service — The Modern U.S. Norm):</strong> Server went out of
            their way to accommodate dietary requests, provided thoughtful recommendations, and
            anticipated needs seamlessly.
          </li>
          <li>
            <strong>22%–25%+ (Exceptional / Fine Dining):</strong> Exemplary hospitality, wine
            service, holiday shifts, or large group dining where waitstaff managed extensive
            coordination.
          </li>
        </ul>

        <h2>Pre-Tax vs. Post-Tax Tipping: The Golden Rule</h2>
        <p>
          Diners often wonder whether to calculate their percentage on the pre-tax subtotal or the
          grand total including local sales tax. Etiquette experts agree that the pre-tax total is
          the technically correct baseline, because sales tax is a government levy that does not
          reflect restaurant service. However, on average restaurant bills ($40 to $100), the
          difference between pre-tax and post-tax tipping amounts to just $0.50 to $1.50. Many
          patrons tip on the final total as an added courtesy to hard-working servers.
        </p>

        <h2>Frequently Asked Questions About Tipping</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Want Even More Dining Math &amp; Delivery Tips?</h3>
          <p>
            Check out our comprehensive editorial guide covering tipping etiquette around the
            world, auto-gratuity legal rules, and food delivery benchmarks.
          </p>
          <Link href="/blog/how-to-calculate-tips" className="button button--primary button--sm">
            Read Complete Tipping Guide &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
