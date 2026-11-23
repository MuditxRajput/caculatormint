"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";
<<<<<<< HEAD
import { ProOnboardingModal } from "@/components/ProOnboardingModal";
=======

const nav = [
  { href: "/calculators", label: "Calculators" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798

export function Header() {
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  return (
<<<<<<< HEAD
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-3.5">
          <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
            <Logo size="md" />
          </Link>

          <nav className="flex items-center gap-6" aria-label="Primary">
            <Link
              href="/estimate-templates"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Estimate Templates
            </Link>

            <Link
              href="/#contractor-math"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Contractor Math
            </Link>

            <button
              type="button"
              onClick={() => setIsProModalOpen(true)}
              style={{ color: "#ffffff", backgroundColor: "#059669" }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold transition shadow-sm shadow-emerald-600/25 cursor-pointer"
            >
              <span style={{ color: "#ffffff" }} className="!text-white">Pro</span>
              <span className="text-[10px] text-emerald-100 font-medium">($19/mo)</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Pro Onboarding Modal */}
      <ProOnboardingModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
      />
    </>
=======
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
>>>>>>> 71e2d7d68521822cb7e4baac34d4217604003798
  );
}
