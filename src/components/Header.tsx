"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";
import { ProOnboardingModal } from "@/components/ProOnboardingModal";
import { ProAccountModal } from "@/components/ProAccountModal";
import { useProStatus } from "@/lib/pro";

export function Header() {
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const { isPro, profile, mounted } = useProStatus();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-3.5">
          <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
            <Logo size="md" />
          </Link>

          <nav className="flex items-center gap-5 sm:gap-6" aria-label="Primary">
            <Link
              href="/estimate-templates"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Estimate Templates
            </Link>

            <Link
              href="/blog"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Guides
            </Link>

            <Link
              href="/#contractor-math"
              className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Contractor Math
            </Link>

            {/* Pro Button or Active Pro Badge */}
            {mounted && isPro ? (
              <button
                type="button"
                onClick={() => setIsAccountModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold transition shadow-2xs cursor-pointer"
                title="View Pro Account Details"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Pro Member</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsProModalOpen(true)}
                style={{ color: "#ffffff", backgroundColor: "#059669" }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold transition shadow-sm shadow-emerald-600/25 cursor-pointer"
              >
                <span style={{ color: "#ffffff" }} className="!text-white">Pro</span>
                <span className="text-[10px] text-emerald-100 font-medium">($19/mo)</span>
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Pro Onboarding Modal for non-pro users */}
      <ProOnboardingModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
      />

      {/* Pro Account Modal for active pro users */}
      <ProAccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        profile={profile}
      />
    </>
  );
}
