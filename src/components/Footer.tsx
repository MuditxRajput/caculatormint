import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner site-footer__inner--seo">
        <div className="site-footer__brand-col">
          <Logo size="sm" />
          <p className="site-footer__tagline">{siteConfig.tagline}</p>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Calculators</p>
          <div className="site-footer__links site-footer__links--col">
            <Link href="/calculators">All 14 Calculators</Link>
            <Link href="/calculators/cumulative-gpa-calculator">Cumulative GPA Calculator</Link>
            <Link href="/calculators/gpa-calculator-for-middle-schoolers">Middle School GPA</Link>
            <Link href="/calculators/grade-calculator">Grade Average Calculator</Link>
            <Link href="/calculators/average-calculator">Average Calculator</Link>
            <Link href="/calculators/weighted-average-calculator">Weighted Average</Link>
            <Link href="/calculators/percentage-calculator">Percentage Calculator</Link>
            <Link href="/calculators/discount-calculator">Discount Calculator</Link>
            <Link href="/calculators/cubic-yard-calculator">Cubic Yard Calculator</Link>
            <Link href="/calculators/pay-raise-calculator">USA Pay Raise Calculator</Link>
            <Link href="/calculators/compound-interest-calculator">Compound Interest</Link>
            <Link href="/calculators/tip-calculator">Tip &amp; Bill Split</Link>
            <Link href="/calculators/fuel-cost-calculator">Fuel Cost Calculator</Link>
            <Link href="/calculators/margin-calculator">Margin &amp; Markup</Link>
            <Link href="/calculators/abv-calculator">Beer ABV Calculator</Link>
          </div>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Editorial &amp; Guides</p>
          <div className="site-footer__links site-footer__links--col">
            <Link href="/blog">Blog Directory</Link>
            <Link href="/blog/how-to-calculate-cumulative-gpa">Cumulative GPA Guide</Link>
            <Link href="/blog/how-to-calculate-average">Average &amp; Statistics Guide</Link>
            <Link href="/blog/how-to-calculate-cubic-yards">Cubic Yard &amp; Materials Guide</Link>
            <Link href="/blog/how-to-calculate-percentages">Percentage Math Guide</Link>
            <Link href="/blog/how-to-calculate-discounts">Discount &amp; Sale Guide</Link>
            <Link href="/blog/how-to-calculate-compound-interest">Compound Interest Guide</Link>
            <Link href="/blog/how-to-calculate-fuel-cost">Road Trip Fuel Guide</Link>
            <Link href="/blog/how-to-calculate-margin-and-markup">Markup vs Margin Guide</Link>
            <Link href="/blog/how-to-calculate-a-pay-raise">Pay Raise Salary Guide</Link>
            <Link href="/blog/how-to-calculate-tips">Tipping Etiquette Guide</Link>
            <Link href="/faq">Frequently Asked Questions</Link>
          </div>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Company &amp; Legal</p>
          <div className="site-footer__links site-footer__links--col">
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Support</Link>
            <Link href="/dmca">DMCA Copyright Policy</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/cookies-policy">Cookies Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copy">
            © {year} {siteConfig.name}. All rights reserved. Mathematical tools and
            explanatory guides are published for educational and informational
            purposes only — not professional financial, tax, or legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
