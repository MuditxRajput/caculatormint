import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner site-footer__inner--seo">
        <div>
          <Logo size="sm" />
          <p className="site-footer__tagline">{siteConfig.tagline}</p>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Calculators</p>
          <div className="site-footer__links site-footer__links--col">
            <Link href="/calculators">All calculators</Link>
            <Link href="/calculators/abv-calculator">ABV Calculator</Link>
            <Link href="/calculators/pay-raise-calculator">Pay Raise Calculator</Link>
            <Link href="/calculators/dog-bite-compensation-calculator">
              Dog Bite Compensation
            </Link>
          </div>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Resources</p>
          <div className="site-footer__links site-footer__links--col">
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="site-footer__col">
          <p className="site-footer__heading">Legal</p>
          <div className="site-footer__links site-footer__links--col">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>

        <p className="site-footer__copy">
          © {year} {siteConfig.name}. Calculators are for informational and
          educational use only — not professional, medical, tax, or legal advice.
        </p>
      </div>
    </footer>
  );
}
