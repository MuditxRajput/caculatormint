import type { Metadata } from "next";
import Link from "next/link";
import { DiscountCalculator } from "@/components/calculators/DiscountCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Discount Calculator — Sale Price, Extra Off & Sales Tax | CalculatorMint",
  description:
    "Calculate sale prices, percentage discounts, clearance 'extra % off' stackable coupons, and post-discount sales tax in real-time.",
  alternates: {
    canonical: "/calculators/discount-calculator",
  },
  openGraph: {
    title: "Discount Calculator — Sale Price, Extra Off & Sales Tax",
    description:
      "Calculate sale prices, percentage discounts, clearance 'extra % off' stackable coupons, and post-discount sales tax in real-time.",
    type: "website",
    url: absoluteUrl("/calculators/discount-calculator"),
  },
  keywords: [
    "discount calculator",
    "sale price calculator",
    "calculate percentage off",
    "clearance coupon calculator",
    "double discount calculator",
  ],
};

const faqs = [
  {
    q: "How do stackable discounts or 'extra 20% off clearance' sales work?",
    a: "Stackable discounts are applied sequentially, not additively. For example, if an item is already 50% off and you have a coupon for an extra 20% off, you do NOT receive 70% off. The initial 50% reduces a $100 item to $50. The extra 20% then applies to the $50 reduced price (saving an additional $10), yielding a final price of $40 (an effective 60% total discount).",
  },
  {
    q: "Is sales tax calculated before or after applying a store discount?",
    a: "In most jurisdictions, store discounts and manufacturer instant savings reduce the taxable purchase price. Sales tax is calculated on the net discounted price you actually pay. However, mail-in rebates or manufacturer coupons presented at checkout are treated differently in certain states where sales tax applies to the full original price.",
  },
  {
    q: "How do I calculate the original retail price if I only know the sale price and discount?",
    a: "To find the original price in reverse, divide the sale price by (1 − Discount Rate ÷ 100). For example, if you bought a shirt on sale for $45 at 25% off: Original Price = $45 ÷ (1 − 0.25) = $45 ÷ 0.75 = $60.00.",
  },
  {
    q: "How do I calculate what percentage discount I received from two prices?",
    a: "To find the discount rate, subtract the sale price from the original price, divide by the original price, and multiply by 100: Discount % = ((Original Price − Sale Price) ÷ Original Price) × 100. If an item was originally $80 and you paid $60: (($80 − $60) ÷ $80) × 100 = 25%.",
  },
  {
    q: "What is the difference between a percentage discount and a flat-dollar coupon?",
    a: "A percentage discount scales with the price of the item (e.g., 20% off saves $2 on a $10 item and $20 on a $100 item). A flat-dollar coupon provides a fixed monetary deduction regardless of the price (e.g., $15 off any order). Percentage discounts are more advantageous on high-value purchases, while flat coupons offer better savings on inexpensive items.",
  },
];

export default function DiscountCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Discount Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/discount-calculator"),
        description:
          "Free interactive discount calculator for determining sale prices, stackable clearance coupons, and sales tax.",
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
            name: "Discount Calculator",
            item: absoluteUrl("/calculators/discount-calculator"),
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
        headline: "How to Calculate Sale Prices, Stackable Discounts, and Sales Tax",
        description:
          "Master retail shopping mathematics: sequential coupon deductions, reverse pricing formulas, and sales tax treatment.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/discount-calculator"),
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
          <span>Discount Calculator</span>
        </nav>
        <span className="badge badge--live">Shopping &amp; Retail Math</span>
        <h1>Discount &amp; Sale Price Calculator</h1>
        <p>
          Calculate exact retail discounts, total dollars saved, stackable clearance
          &ldquo;extra % off&rdquo; coupons, and final checkout prices with local sales tax.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Discount Calculator tool">
        <DiscountCalculator />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Comprehensive Editorial Guide Below Calculator */}
      <article className="blog-article">
        <p className="meta-line">Retail Mathematics · Consumer Finance · Shopping Strategy</p>
        <p>
          Whether shopping during seasonal Black Friday sales, browsing clearance racks, or
          applying online promo codes, calculating your true out-of-pocket price is essential for
          smart consumer budgeting. This calculator determines the primary sale price, applies
          secondary stackable coupons sequentially, computes exact dollar savings, and adds your
          local sales tax for a total out-the-door price.
        </p>

        <h2>The Standard Retail Discount Formula</h2>
        <p>
          Finding the sale price of a discounted item involves computing the percentage markdown
          and subtracting it from the original manufacturer suggested retail price (MSRP):
        </p>
        <code className="formula-block">
          Savings Amount = Original Price × (Discount Rate ÷ 100)
        </code>
        <code className="formula-block">
          Sale Price = Original Price − Savings Amount
        </code>
        <p>
          <strong>Worked Example:</strong> If a winter jacket originally retails for $120.00 and is
          on sale for 30% off:
        </p>
        <ul>
          <li><strong>Step 1:</strong> Calculate savings: $120.00 × 0.30 = <strong>$36.00 saved</strong></li>
          <li><strong>Step 2:</strong> Calculate sale price: $120.00 − $36.00 = <strong>$84.00 to pay</strong></li>
        </ul>

        <h2>The Math of Stackable Discounts (&ldquo;Take an Extra 20% Off&rdquo;)</h2>
        <p>
          A frequent source of shopper confusion occurs during clearance events advertised as
          <strong> &ldquo;50% off clearance, plus an extra 20% off at register&rdquo;</strong>.
          Many consumers believe they are receiving a 70% total discount. In retail accounting,
          stackable discounts are always processed sequentially:
        </p>
        <ol>
          <li>
            <strong>First Markdown:</strong> A $100 item marked down 50% drops to $50.00.
          </li>
          <li>
            <strong>Second Markdown:</strong> The extra 20% coupon applies to the
            reduced $50.00 price, saving $50.00 × 0.20 = $10.00 (not $20.00).
          </li>
          <li>
            <strong>True Final Price:</strong> $50.00 − $10.00 = <strong>$40.00</strong>.
            The effective discount is <strong>60%</strong>, not 70%.
          </li>
        </ol>

        <h2>Reverse Discount Math: Finding the Original Price</h2>
        <p>
          If you encounter a sale rack with a price tag showing $45.00 with a sign that says
          &ldquo;25% Off Already Taken&rdquo;, you can discover the original pre-sale price using
          division:
        </p>
        <code className="formula-block">
          Original Price = Sale Price ÷ (1 − (Discount Rate ÷ 100))
        </code>
        <p>
          Original Price = $45.00 ÷ (1 − 0.25) = $45.00 ÷ 0.75 = <strong>$60.00</strong>.
        </p>

        <h2>How Sales Tax Affects Discounted Merchandise</h2>
        <p>
          In almost all retail transactions, local sales tax applies to the final discounted
          subtotal, not the original price. For example, if you purchase an $80.00 pair of shoes
          discounted to $60.00 in a jurisdiction with 8.25% sales tax:
        </p>
        <code className="formula-block">
          Tax Amount = $60.00 × 0.0825 = $4.95
        </code>
        <code className="formula-block">
          Final Price With Tax = $60.00 + $4.95 = $64.95
        </code>

        <h2>Frequently Asked Questions About Discounts</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Looking for More Shopping Math Guides?</h3>
          <p>
            Read our complete editorial tutorial on clearance strategies, psychological pricing,
            and coupon stacking rules.
          </p>
          <Link href="/blog/how-to-calculate-discounts" className="button button--primary button--sm">
            Read Complete Discount Guide &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
