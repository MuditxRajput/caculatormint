"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/lib/site";
import { ProOnboardingModal } from "@/components/ProOnboardingModal";
import { ProAccountModal } from "@/components/ProAccountModal";
import { AuthModal } from "@/components/AuthModal";
import { useProStatus } from "@/lib/pro";

export function Header() {
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const { isPro, profile, isLoggedIn, mounted } = useProStatus();

  const openAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-3">
          <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
            <Logo size="md" />
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Primary">
            <Link
              href="/estimate-templates"
              className="hidden md:inline-block text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Templates
            </Link>

            <Link
              href="/blog"
              className="hidden sm:inline-block text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Guides
            </Link>

            <Link
              href="/#contractor-math"
              className="hidden lg:inline-block text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Contractor Math
            </Link>

            {/* User State Controls */}
            {mounted && isLoggedIn ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAccountModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-bold transition cursor-pointer max-w-[140px] truncate"
                  title="View Contractor Account Details"
                >
                  <span className="text-zinc-500 text-xs">👤</span>
                  <span className="truncate">{profile?.companyName || profile?.email?.split("@")[0] || "My Account"}</span>
                </button>

                {isPro ? (
                  <button
                    type="button"
                    onClick={() => setIsAccountModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-black transition shadow-2xs cursor-pointer"
                    title="Active Pro Account"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span>You are Pro</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsProModalOpen(true)}
                    style={{ color: "#ffffff", backgroundColor: "#059669" }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold transition shadow-sm shadow-emerald-600/20 cursor-pointer"
                    title="Upgrade to Pro Account"
                  >
                    <span>⚡</span>
                    <span style={{ color: "#ffffff" }} className="!text-white font-bold">Upgrade</span>
                  </button>
                )}
              </div>
            ) : mounted && isPro ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAccountModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold transition shadow-2xs cursor-pointer"
                  title="Active Pro Account Details"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="font-extrabold text-emerald-950">You are Pro</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => openAuth("login")}
                  className="px-2.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 transition cursor-pointer"
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={() => openAuth("signup")}
                  style={{ color: "#ffffff", backgroundColor: "#059669" }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold transition shadow-sm shadow-emerald-600/25 cursor-pointer"
                >
                  <span style={{ color: "#ffffff" }} className="!text-white font-bold">Sign Up</span>
                </button>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Auth Modal (Log In / Sign Up) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode={authMode}
      />

      {/* Pro Onboarding Modal */}
      <ProOnboardingModal
        isOpen={isProModalOpen}
        onClose={() => setIsProModalOpen(false)}
      />

      {/* Account Profile Modal */}
      <ProAccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        profile={profile}
        onUpgradeToPro={() => setIsProModalOpen(true)}
      />
    </>
  );
}
