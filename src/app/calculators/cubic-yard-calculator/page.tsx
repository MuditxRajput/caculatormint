import type { Metadata } from "next";
import Link from "next/link";
import { CubicYardCalculator } from "@/components/calculators/CubicYardCalculator";
import { AdSlot } from "@/components/AdSlot";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cubic Yard Calculator — Concrete, Mulch, Soil & Dirt (yd³) | CalculatorMint",
  description:
    "Calculate cubic yards (yd³) for concrete slabs, footings, mulch landscaping, topsoil, sand, and gravel. Features mixed ft/in inputs, bag counts, and waste buffers.",
  alternates: {
    canonical: "/calculators/cubic-yard-calculator",
  },
  openGraph: {
    title: "Cubic Yard Calculator — Concrete, Mulch, Soil & Dirt (yd³)",
    description:
      "Calculate cubic yards (yd³) for concrete slabs, footings, mulch landscaping, topsoil, sand, and gravel. Features mixed ft/in inputs, bag counts, and waste buffers.",
    type: "website",
    url: absoluteUrl("/calculators/cubic-yard-calculator"),
  },
  keywords: [
    "cubic yard calculator",
    "calculate cubic yards",
    "concrete calculator yards",
    "mulch calculator cubic yards",
    "dirt calculator cubic yards",
    "gravel calculator cubic yards",
    "how many cubic yards",
    "cubic yard to cubic feet",
    "yards of concrete calculator",
    "cubic yard formula",
  ],
};

const faqs = [
  {
    q: "How do you calculate cubic yards manually?",
    a: "To calculate cubic yards manually: 1) Multiply Length (in feet) by Width (in feet) to find surface square footage. 2) Convert Depth/Thickness from inches to feet by dividing by 12 (e.g., 4 inches ÷ 12 = 0.333 feet). 3) Multiply Square Footage by Depth in feet to find Cubic Feet. 4) Divide total Cubic Feet by 27 because there are 27 cubic feet in one cubic yard (3 ft × 3 ft × 3 ft = 27 cu ft). Formula: Cubic Yards = (Length ft × Width ft × Depth ft) ÷ 27.",
  },
  {
    q: "Why do I divide by 27 to get cubic yards?",
    a: "One linear yard equals 3 linear feet. Therefore, a 3-dimensional cubic yard measures 3 feet long by 3 feet wide by 3 feet deep: 3 ft × 3 ft × 3 ft = 27 cubic feet. Whenever you compute volume in cubic feet (Length in ft × Width in ft × Depth in ft), dividing by 27 converts that volume directly into cubic yards.",
  },
  {
    q: "How many 80 lb or 60 lb bags of concrete make 1 cubic yard?",
    a: "One cubic yard of solid concrete weighs approximately 4,050 pounds. A standard 80-pound bag yields roughly 0.60 cubic feet, meaning you need 45 bags (80 lb) to make exactly 1 cubic yard. A 60-pound bag yields roughly 0.45 cubic feet, requiring 60 bags (60 lb) per cubic yard. With a recommended 10% waste buffer, budget 50 bags (80 lb) or 66 bags (60 lb) per cubic yard.",
  },
  {
    q: "How many bags of mulch or soil are in a cubic yard?",
    a: "There are 27 cubic feet in one cubic yard. Most retail mulch bags sold at big-box home improvement centers (like Home Depot or Lowe's) contain 2 cubic feet of mulch, meaning you need 13.5 bags (2 cu ft) to equal 1 cubic yard (or 9 bags if using 3 cu ft bags). Most bagged topsoil or compost comes in 1 cu ft bags (27 bags per cubic yard) or 0.75 cu ft bags (36 bags per cubic yard).",
  },
  {
    q: "When should I order bulk truck delivery instead of buying bags?",
    a: "As a general rule in the USA: If your project requires less than 1 cubic yard (~45 bags of concrete or ~14 bags of mulch), buying individual bags in your vehicle is usually cheaper and more convenient. However, if your project requires 1.5 to 2 cubic yards or more, ordering bulk delivery via ready-mix concrete mixer or landscaping dump truck is significantly cheaper per yard and eliminates hours of heavy manual lifting.",
  },
  {
    q: "How thick should concrete, mulch, and gravel be?",
    a: "Standard U.S. residential building depths are: Standard residential patios and walkways: 4 inches of concrete. Residential driveways: 4 to 5 inches of concrete (with rebar/mesh) on top of 4 inches of compacted gravel base. Landscaping flower bed mulch: 2 to 3 inches (re-mulching existing beds requires only 1 to 2 inches). Gravel driveways or walkways: 3 to 4 inches of compacted crushed stone base. Lawn topsoil dressing: 1 to 2 inches (or 4 to 6 inches for new raised garden beds).",
  },
];

export default function CubicYardCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Cubic Yard Calculator",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        url: absoluteUrl("/calculators/cubic-yard-calculator"),
        description:
          "Free interactive cubic yard calculator for concrete, mulch, gravel, and dirt estimating with waste allowances and bag conversions.",
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
            name: "Cubic Yard Calculator",
            item: absoluteUrl("/calculators/cubic-yard-calculator"),
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
        headline: "Cubic Yard Calculations: Concrete Slabs, Landscaping Mulch & Bulk Material Estimating",
        description:
          "A comprehensive guide explaining cubic yard math, standard depth guidelines, bag counts, and material densities.",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        mainEntityOfPage: absoluteUrl("/calculators/cubic-yard-calculator"),
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
          <span>Cubic Yard Calculator</span>
        </nav>
        <span className="badge badge--live">Home Improvement &amp; Construction</span>
        <h1>Cubic Yard Calculator (yd³)</h1>
        <p>
          Calculate required cubic yards for concrete slabs, footings, mulch beds, topsoil, sand, and crushed gravel.
          Includes mixed feet/inch dimensions, bag conversions, and recommended waste buffers.
        </p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <section className="calc-page-layout" aria-label="Cubic Yard Calculator Tool">
        <CubicYardCalculator />
      </section>

      <div className="ad-container ad-container--in-content">
        <AdSlot format="in-article" label="Advertisement" />
      </div>

      {/* Comprehensive Editorial Guide Below Calculator */}
      <article className="blog-article">
        <p className="meta-line">Bulk Material Math · Concrete &amp; Landscaping · U.S. Construction</p>
        <p>
          Whether you are pouring a backyard concrete patio, topping off garden mulch beds for spring,
          or leveling a gravel driveway, ordering the correct volume of bulk material is critical.
          In the United States, commercial building supplies and bulk landscaping materials are priced
          and delivered by the <strong>cubic yard (often abbreviated as yd³ or simply &ldquo;yards&rdquo;)</strong>.
          Ordering too little material can halt a concrete pour mid-stream, resulting in costly contractor
          downtime and ugly cold joints. Ordering too much leaves you with piles of heavy, non-returnable bulk gravel or dirt.
        </p>

        <h2>The Fundamental Cubic Yard Formula</h2>
        <p>
          Volume measures three-dimensional space: Length &times; Width &times; Depth.
          Because job sites in the U.S. measure Length and Width in <strong>feet</strong>, but measure
          slab thickness or mulch depth in <strong>inches</strong>, the formula converts all dimensions
          into feet before dividing by 27:
        </p>
        <code className="formula-block">
          Cubic Feet = Length (ft) &times; Width (ft) &times; [Depth (in) &divide; 12]
        </code>
        <code className="formula-block">
          Cubic Yards (yd³) = Cubic Feet &divide; 27
        </code>

        <h3>Worked Example: 10 ft &times; 20 ft Concrete Patio at 4 Inches Thick</h3>
        <p>
          Suppose you are building a standard 10 ft by 20 ft backyard concrete patio with a standard 4-inch depth:
        </p>
        <ol>
          <li><strong>Surface Area:</strong> 10 ft &times; 20 ft = <strong>200 square feet</strong>.</li>
          <li><strong>Depth in Feet:</strong> 4 inches &divide; 12 = <strong>0.3333 feet</strong>.</li>
          <li><strong>Cubic Feet:</strong> 200 sq ft &times; 0.3333 ft = <strong>66.67 cubic feet</strong>.</li>
          <li><strong>Cubic Yards:</strong> 66.67 cu ft &divide; 27 = <strong>2.47 cubic yards</strong>.</li>
          <li><strong>Add 10% Waste Buffer:</strong> 2.47 &times; 1.10 = <strong>2.72 cubic yards</strong> (order 2.75 to 3.0 yards from the ready-mix supplier).</li>
        </ol>

        <h2>Why You Must Add a Waste &amp; Compaction Buffer (5%–15%)</h2>
        <p>
          A common mistake for first-time DIYers is ordering the exact mathematical volume.
          In the real world, excavations are never perfectly laser-flat. Subgrades dip slightly, forms bow outward under concrete pressure,
          and dry materials like gravel, topsoil, and mulch compact significantly when tamped or settled by rain.
        </p>
        <ul>
          <li><strong>Poured Ready-Mix Concrete:</strong> Add <strong>5% to 10%</strong>. A slightly thicker grade (e.g., 4.25 inches instead of 4.0 inches) across 300 sq ft adds substantial volume.</li>
          <li><strong>Landscaping Mulch &amp; Soil:</strong> Add <strong>10%</strong>. Loose organic bark settles by 10% to 15% within the first two weeks of watering.</li>
          <li><strong>Crushed Gravel, Stone &amp; Sand:</strong> Add <strong>10% to 15%</strong>. Vibratory plate compactors pack loose aggregate tightly into the subbase.</li>
        </ul>

        <h2>Standard Depth Reference Chart for U.S. Projects</h2>
        <table className="pay-compare-table" style={{ margin: "1.5rem 0" }}>
          <caption>Common Project Thickness &amp; Depth Guidelines</caption>
          <thead>
            <tr>
              <th scope="col">Application</th>
              <th scope="col">Recommended Depth</th>
              <th scope="col">Sq Ft Covered by 1 Cu Yd</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Lawn Top-Dressing / Seed Bedding</th>
              <td>1 inch (0.083 ft)</td>
              <td>324 sq ft</td>
            </tr>
            <tr>
              <th scope="row">Mulch Re-application (Existing Beds)</th>
              <td>2 inches (0.167 ft)</td>
              <td>162 sq ft</td>
            </tr>
            <tr>
              <th scope="row">New Landscaping Mulch Bed</th>
              <td>3 inches (0.250 ft)</td>
              <td>108 sq ft</td>
            </tr>
            <tr>
              <th scope="row">Standard Concrete Sidewalk or Patio</th>
              <td>4 inches (0.333 ft)</td>
              <td>81 sq ft</td>
            </tr>
            <tr>
              <th scope="row">Heavy Concrete Driveway (Vehicles)</th>
              <td>5 inches (0.417 ft)</td>
              <td>65 sq ft</td>
            </tr>
            <tr>
              <th scope="row">Commercial Garage Slab / RV Pad</th>
              <td>6 inches (0.500 ft)</td>
              <td>54 sq ft</td>
            </tr>
            <tr>
              <th scope="row">Raised Garden Bed Topsoil</th>
              <td>8 to 12 inches</td>
              <td>27 to 40 sq ft</td>
            </tr>
          </tbody>
        </table>

        <h2>Bagged vs. Bulk Delivery: When to Order a Truck</h2>
        <p>
          A common decision when buying materials at retail stores like The Home Depot, Lowe&rsquo;s, or Ace Hardware is whether to purchase individual bags or schedule a dump truck / ready-mix delivery:
        </p>
        <ul>
          <li><strong>Concrete:</strong> 1 cubic yard requires <strong>45 bags of 80 lb concrete</strong>. Mixing 45 heavy bags by hand in a wheelbarrow takes hours of grueling physical labor. Ready-mix trucks typically carry up to 9–10 cubic yards per truck and pour 2 yards in 5 minutes. If your job exceeds 1.5 yards, ready-mix is almost always worth the delivery charge.</li>
          <li><strong>Mulch:</strong> 1 cubic yard equals <strong>13.5 bags (2 cu ft each)</strong>. If you need 4 yards of mulch, that equals 54 bags. Bulk mulch delivered by a local nursery or landscape supply quarry typically costs $30–$45 per yard, whereas 13.5 retail bags at $4.00 each cost $54.00 per yard plus vehicle transport hassle.</li>
        </ul>

        <h2>Frequently Asked Questions About Cubic Yards</h2>
        <div className="faq">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <div className="calc-guide-callout" style={{ marginTop: "2rem" }}>
          <h3>Want our Complete Editorial Guide with Tonnage Charts?</h3>
          <p>
            Read our in-depth tutorial detailing concrete mix ratios, gravel tonnage formulas,
            circular column math, and supplier negotiation strategies.
          </p>
          <Link href="/blog/how-to-calculate-cubic-yards" className="button button--primary button--sm">
            Read Complete Cubic Yard Guide &rarr;
          </Link>
        </div>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
