import type { Metadata } from "next";
import Link from "next/link";
import { FuelCostCalculator } from "@/components/calculators/FuelCostCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fuel Cost Calculator — Road Trip Gas Cost & Split | CalculatorMint",
  description:
    "Calculate fuel cost for any road trip. Supports U.S. MPG and Metric L/100km, round trips, and fair cost splitting among passengers.",
  alternates: {
    canonical: "/calculators/fuel-cost-calculator",
  },
  openGraph: {
    title: "Fuel Cost Calculator — Road Trip Gas Cost & Split",
    description:
      "Calculate fuel cost for any road trip. Supports U.S. MPG and Metric L/100km, round trips, and fair cost splitting among passengers.",
    type: "website",
    url: absoluteUrl("/calculators/fuel-cost-calculator"),
  },
  keywords: [
    "fuel cost calculator",
    "gas trip calculator",
    "road trip gas cost",
    "calculate fuel cost",
    "split gas money calculator",
  ],
};

const faqs = [
  {
    q: "How do I calculate how much gas my road trip will cost?",
    a: "Divide your total travel distance by your vehicle's average fuel economy (MPG) to determine the gallons of gasoline required. Then multiply the gallons by the local gas price per gallon. For example, a 350-mile trip at 28 MPG requires 12.5 gallons. At $3.65/gal, the trip costs 12.5 × $3.65 = $45.63.",
  },
  {
    q: "How do I convert between U.S. MPG and Metric Liters per 100 km (L/100km)?",
    a: "Because MPG measures distance per unit of fuel while L/100km measures fuel consumption per unit of distance, the conversion formula is inverse: L/100km = 235.215 ÷ MPG. For example, a car getting 30 MPG consumes 235.215 ÷ 30 ≈ 7.84 L/100km.",
  },
  {
    q: "Should car maintenance, tolls, or wear-and-tear be included when splitting gas?",
    a: "Standard passenger etiquette focuses on splitting direct fuel and toll costs evenly among all passengers. However, if the car owner is driving their personal vehicle on a long multi-day trek, passengers often offer to pay a slightly larger share of gas or cover parking and tolls to offset vehicle depreciation and tire wear.",
  },
  {
    q: "Why is real-world highway gas mileage often lower than EPA window sticker ratings?",
    a: "EPA ratings are tested in controlled laboratory environments. Real-world highway driving includes aerodynamic drag at high speeds (driving 75+ mph increases fuel consumption dramatically compared to 55–65 mph), hilly terrain, air conditioning load, cargo weight, and cold weather.",
  },
  {
    q: "What driving habits produce the greatest fuel savings on road trips?",
    a: "Using cruise control on flat highways, maintaining steady speeds between 60–68 mph, ensuring tires are inflated to recommended PSI, and removing heavy cargo or rooftop cargo carriers when not in use can improve fuel efficiency by 15% to 25%.",
  },
];

export default function FuelCostCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Fuel Cost Calculator",
        applicationCategory: "TravelApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/fuel-cost-calculator"),
        description:
          "Free interactive fuel cost and road trip gas calculator with passenger splitting.",
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
            name: "Fuel Cost Calculator",
            item: absoluteUrl("/calculators/fuel-cost-calculator"),
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
        headline: "How to Calculate Road Trip Fuel Costs and Split Gas Fairly",
        description:
          "Step-by-step mathematical guide to calculating road trip gasoline expenses, MPG conversions, and carpool splitting.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/fuel-cost-calculator"),
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
          <span>Fuel Cost Calculator</span>
        </nav>
        <span className="badge badge--live">Travel &amp; Automotive Math</span>
        <h1>Fuel Cost &amp; Road Trip Gas Calculator</h1>
        <p>
          Estimate total gas expenses, gallons or liters required, cost per mile,
          and fair per-passenger fuel shares for upcoming road trips.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Fuel Cost Calculator tool">
        <FuelCostCalculator />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Comprehensive Editorial Guide Below Calculator */}
      <article className="blog-article">
        <p className="meta-line">Travel Planning · Fuel Economy · Automotive Mathematics</p>
        <p>
          Planning a road trip involves budgeting for gas alongside lodging, food, and tolls.
          Because gasoline prices fluctuate across county and state lines, estimating fuel needs
          before you hit the highway avoids unpleasant budget surprises. This calculator models
          fuel volume, total expenditure, cost per mile (or kilometer), and fair per-person splits
          for group travel.
        </p>

        <h2>The U.S. Standard Fuel Cost Formula (Miles, MPG, $/Gal)</h2>
        <p>
          When using standard U.S. measurements, total fuel expenditure is calculated as follows:
        </p>
        <code className="formula-block">
          Fuel Needed (Gallons) = Trip Distance (Miles) ÷ Fuel Economy (MPG)
        </code>
        <code className="formula-block">
          Total Fuel Cost = Fuel Needed (Gallons) × Price Per Gallon ($)
        </code>
        <p>
          <strong>Worked Example:</strong> Driving from Los Angeles to Las Vegas (approx. 270 miles)
          in a crossover SUV averaging 24 MPG, with gas averaging $4.15 per gallon:
        </p>
        <ul>
          <li><strong>Step 1:</strong> Fuel volume required: 270 ÷ 24 = <strong>11.25 gallons</strong></li>
          <li><strong>Step 2:</strong> Total gas expense: 11.25 × $4.15 = <strong>$46.69 one-way</strong></li>
          <li><strong>Step 3:</strong> Round trip total (270 × 2 = 540 miles): <strong>$93.38</strong></li>
        </ul>

        <h2>The Metric Fuel Cost Formula (Kilometers, L/100km, $/L)</h2>
        <p>
          In Canada, Europe, and Australia, fuel economy is stated as Liters consumed per 100
          kilometers (L/100km). The formula reflects consumption directly:
        </p>
        <code className="formula-block">
          Fuel Needed (Liters) = (Distance in km ÷ 100) × L/100km
        </code>
        <code className="formula-block">
          Total Cost = Fuel Needed (Liters) × Price Per Liter ($)
        </code>
        <p>
          <strong>Example:</strong> A 450 km journey at 7.5 L/100km with fuel priced at $1.65/liter:
          <br />
          Volume: (450 ÷ 100) × 7.5 = 33.75 liters.
          <br />
          Total: 33.75 × $1.65 = <strong>$55.69</strong>.
        </p>

        <h2>Splitting Gas Fairly Among Passengers</h2>
        <p>
          Dividing the final fuel expenditure by the number of travelers ensures a clean split:
        </p>
        <code className="formula-block">
          Cost Per Passenger = Total Fuel Cost ÷ Number of Travelers
        </code>
        <p>
          For a $93.38 round trip with <strong>3 friends</strong>, each person contributes
          $93.38 ÷ 3 = <strong>$31.13</strong>.
        </p>

        <h2>Factors That Reduce Real-World MPG on Highways</h2>
        <p>
          Your vehicle&apos;s trip computer or window sticker rating is an estimate. Real-world
          efficiency on road trips is affected by:
        </p>
        <ul>
          <li>
            <strong>Highway Speeds:</strong> According to the U.S. Department of Energy, aerodynamic
            drag increases exponentially above 50 mph. Driving at 75 mph consumes roughly 15% to 20%
            more fuel than driving at 65 mph.
          </li>
          <li>
            <strong>Cargo Weight:</strong> An extra 100 pounds in the vehicle can reduce your MPG
            by up to 1%.
          </li>
          <li>
            <strong>Rooftop Cargo Carriers:</strong> Exterior cargo boxes or bicycle racks disrupt
            aerodynamic airflow, reducing fuel economy by 10% to 25% at highway speeds.
          </li>
          <li>
            <strong>Tire Inflation:</strong> Under-inflated tires increase rolling resistance and
            lower fuel mileage by 0.2% for every 1 psi drop in all four tires.
          </li>
        </ul>

        <h2>Frequently Asked Questions About Fuel Cost Calculations</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Looking for More Travel Expense Guides?</h3>
          <p>
            Read our complete editorial tutorial on road trip planning, toll estimations, and
            fuel-saving driving techniques.
          </p>
          <Link href="/blog/how-to-calculate-fuel-cost" className="button button--primary button--sm">
            Read Complete Fuel Cost Guide &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
