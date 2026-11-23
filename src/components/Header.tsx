"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";
import { ProOnboardingModal } from "@/components/ProOnboardingModal";

export function Header() {
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  return (
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
  );
}
