import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/calculators", label: "Calculators" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-link" aria-label={`${siteConfig.name} home`}>
          <Logo size="md" />
        </Link>
        <div className="site-header__right">
          <nav className="site-nav" aria-label="Primary">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/calculators" className="header-cta-btn">
            Explore Tools
          </Link>
        </div>
      </div>
    </header>
  );
}
