import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { AdSlot } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Disclaimer — Educational Calculators & Tools | CalculatorMint",
  description:
    "CalculatorMint disclaimer: our online calculators and guides are educational estimates, not legal, tax, medical, or financial advice. Read our full terms.",
  alternates: { canonical: "/disclaimer" },
  keywords: [
    "calculator disclaimer",
    "not financial advice",
    "educational calculator only",
    "percentage calculator disclaimer",
    "tip calculation disclaimer",
  ],
};

export default function DisclaimerPage() {
  return (
    <div className="container">
      <header className="page-hero">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Disclaimer</span>
        </nav>
        <h1>Disclaimer</h1>
        <p>Last updated: October 9, 2026</p>
      </header>

      <div className="ad-container ad-container--page-top">
        <AdSlot format="leaderboard" label="Advertisement" />
      </div>

      <article className="blog-article">
        <p className="meta-line">
          Please read this Disclaimer carefully before utilizing any tools,
          calculators, guides, or informational materials on {siteConfig.name}.
        </p>
        <p>
          {siteConfig.name} provides free computational tools and educational
          articles designed to explain common mathematical models and equations.
          To maintain transparency and trust, this disclaimer outlines the legal
          and professional limitations of the information provided on our website.
        </p>

        <h2>1. Educational Information — Not Professional Advice</h2>
        <p>
          All content, results, calculators, formulas, and guides published on this
          website are provided for general educational, academic, and illustrative
          purposes only. Nothing on this website constitutes, or should be construed
          as:
        </p>
        <ul>
          <li>Certified financial planning or personal investment advice</li>
          <li>Licensed tax preparation or legal employment counsel</li>
          <li>Formal corporate accounting or audited payroll validation</li>
          <li>Commercial brewery quality-control certification or legal alcohol labeling</li>
        </ul>
        <p>
          Using our calculators or reading our articles does not create a fiduciary,
          attorney-client, or other professional advisory relationship between you
          and {siteConfig.name} or its operators.
        </p>

        <h2>2. Specific Calculator Disclaimers</h2>
        <h3>USA Pay Raise & Payroll Calculator</h3>
        <p>
          The <Link href="/calculators/pay-raise-calculator">USA Pay Raise Calculator</Link>{" "}
          models salary conversions, pay-frequency intervals (hourly, bi-weekly,
          semi-monthly, monthly, annual), inflation erosion, and generalized
          withholding estimates based on user-supplied numbers. It does not account
          for every municipal tax jurisdiction, pre-tax elective deferral (e.g.,
          401(k), HSA), healthcare deductions, or state-specific payroll nuances.
          Your employer&rsquo;s payroll department and certified tax advisors remain
          the sole authoritative sources for actual take-home earnings.
        </p>

        <h3>Percentage &amp; Discount Calculators</h3>
        <p>
          The <Link href="/calculators/percentage-calculator">Percentage Calculator</Link> and{" "}
          <Link href="/calculators/discount-calculator">Discount Calculator</Link>{" "}
          provide standard algebraic mathematical calculations for proportions, markdowns,
          and sales tax additions. Final retail transactions depend on merchant POS rounding
          and specific jurisdictional tax exemptions.
        </p>

        <h3>Compound Interest Calculator</h3>
        <p>
          The <Link href="/calculators/compound-interest-calculator">Compound Interest Calculator</Link>{" "}
          provides hypothetical mathematical growth projections based on static return rates.
          It does not predict market fluctuations, investment fees, dividend taxation, or portfolio
          volatility. Past financial performance does not guarantee future investment returns.
        </p>

        <h3>Fuel Cost Calculator</h3>
        <p>
          The <Link href="/calculators/fuel-cost-calculator">Fuel Cost Calculator</Link>{" "}
          estimates travel expenses based on user-entered distance, fuel efficiency, and price
          averages. Actual vehicle consumption varies according to terrain, wind resistance, vehicle
          payload, and traffic conditions.
        </p>

        <h3>Profit Margin &amp; Markup Calculator</h3>
        <p>
          The <Link href="/calculators/margin-calculator">Margin &amp; Markup Calculator</Link>{" "}
          illustrates gross profit relationships between cost and selling price. It does not
          account for overhead expenses, selling fees, corporate income taxation, or net operating
          costs.
        </p>

        <h3>Tip &amp; Bill Split Calculator</h3>
        <p>
          The <Link href="/calculators/tip-calculator">Tip &amp; Bill Split Calculator</Link>{" "}
          provides gratuity estimates and even check division for groups. Tipping practices,
          local tax application conventions (pre-tax vs. post-tax), and mandatory service charges
          vary across hospitality establishments and geographic regions. Always confirm final totals
          with the merchant bill or receipt.
        </p>

        <h3>Beer ABV &amp; Fermentation Calculator</h3>
        <p>
          The <Link href="/calculators/abv-calculator">Beer ABV Calculator</Link> computes
          alcohol by volume and apparent attenuation based on standard homebrewing and
          Hall formulas from hydrometer or refractometer readings. Actual alcohol
          content in finished fermented beverages is subject to temperature calibration,
          instrument error, and process variances. These tools do not replace
          laboratory-grade gas chromatography or certified alcohol assays for
          commercial labeling.
        </p>

        <h3>Cubic Yard &amp; Material Estimator</h3>
        <p>
          The <Link href="/calculators/cubic-yard-calculator">Cubic Yard Calculator</Link>{" "}
          provides geometric volume estimates for building materials (concrete, mulch,
          topsoil, gravel, and sand). Physical material requirements in real-world
          construction and landscaping routinely deviate by 5% to 15% from theoretical
          mathematical volume due to subgrade undulations, formwork deflection, mechanical
          compaction, moisture content, and job-site spillage. Calculations do not constitute
          licensed architectural or structural engineering specifications. Always verify
          final order quantities and weight limits with your local ready-mix supplier,
          quarry, or certified general contractor prior to scheduling non-refundable
          bulk deliveries.
        </p>

        <h3>Average &amp; Grade Calculator</h3>
        <p>
          The <Link href="/calculators/average-calculator">Average Calculator</Link> provides
          arithmetic mean, weighted averages, and academic course grade projections based on
          user-provided scores and weighting percentages. Individual schools, universities, and
          faculty members may utilize custom rounding conventions, extra credit policies, or
          non-linear curves that alter final course outcomes. Academic calculations are provided
          for planning purposes only; confirm official standing with your instructor or registrar.
        </p>

        <div className="ad-container ad-container--in-content">
          <AdSlot format="in-article" label="Advertisement" />
        </div>

        <h2>3. Accuracy & Warranty Disclaimer</h2>
        <p>
          While we make every reasonable effort to ensure mathematical formulas are
          implemented according to published standards, {siteConfig.name} does not
          warrant or guarantee that calculations, text, or third-party links are
          completely error-free, uninterrupted, or current. You assume full
          responsibility for reviewing and validating any calculations prior to
          making personal, commercial, or clinical decisions.
        </p>

        <h2>4. Advertising & Google AdSense Disclosure</h2>
        <p>
          This website displays third-party advertisements served by Google AdSense to
          offset infrastructure and editorial costs. The inclusion of advertisements,
          sponsored links, or third-party product references does not constitute an
          endorsement or recommendation by {siteConfig.name}. We do not control the
          goods, services, or claims presented in third-party advertisements.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, {siteConfig.name}, its
          owners, and contributors shall not be held liable for any direct, indirect,
          incidental, consequential, or punitive damages arising from the use of, or
          inability to use, our tools or written materials. Please review our{" "}
          <Link href="/terms">Terms of Service</Link> for additional legal terms.
        </p>

        <h2>6. Contact Regarding Mathematical Discrepancies</h2>
        <p>
          If you believe an equation or article requires correction, please contact
          our editorial team via our <Link href="/contact">Contact Page</Link> or
          email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </article>

      <div className="ad-container ad-container--page-bottom">
        <AdSlot format="horizontal" label="Advertisement" />
      </div>
    </div>
  );
}
