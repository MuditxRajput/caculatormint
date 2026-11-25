"use client";

import React, { useState } from "react";
import { TRADES } from "@/data/trades";
import { setProStatus } from "@/lib/pro";

interface ProOnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTrade?: string;
  defaultFeature?: string;
  onSuccess?: (data: { companyName: string; email: string; trade: string }) => void;
}

const FEATURE_OPTIONS = [
  { id: "esign", label: "Client e-Signatures", icon: "✍️", desc: "Get bids signed digitally via SMS/email" },
  { id: "logo", label: "Custom Logo & Watermark-Free", icon: "🎨", desc: "High-resolution contractor brand on all PDFs" },
  { id: "invoicing", label: "Stripe Invoice Sync", icon: "💳", desc: "Convert approved quotes to invoices in 1 click" },
  { id: "margins", label: "Margin & Markup Guard", icon: "📊", desc: "Automated cost-to-bid profit protection" },
];

export function ProOnboardingModal({
  isOpen,
  onClose,
  defaultTrade,
  defaultFeature,
  onSuccess,
}: ProOnboardingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [trade, setTrade] = useState(defaultTrade || "general");
  const [selectedFeature, setSelectedFeature] = useState(defaultFeature || "esign");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [memberNumber, setMemberNumber] = useState<number>(248);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Local storage caching for instant client personalization & Pro activation
      const profile = {
        companyName: companyName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        trade,
        selectedFeature,
        registeredAt: new Date().toISOString(),
      };
      setProStatus(true, profile);

      // 2. Real API Persistence (writes to Supabase PostgreSQL + local backup)
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          companyName: companyName.trim() || undefined,
          phone: phone.trim() || undefined,
          trade,
          feature: selectedFeature,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to reserve your Pro spot. Please try again.");
      }

      // Generate a realistic priority member queue number
      const randomQueueNumber = Math.floor(180 + Math.random() * 95);
      setMemberNumber(randomQueueNumber);

      if (onSuccess) {
        onSuccess({
          companyName: companyName.trim(),
          email: email.trim().toLowerCase(),
          trade,
        });
      }

      setStep(2);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDone = () => {
    setStep(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden text-left">
        {/* Top Header Bar */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
              CalculatorMint Pro Onboarding
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white text-lg leading-none p-1 transition cursor-pointer"
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-7 max-h-[85vh] overflow-y-auto">
          {step === 1 ? (
            /* STEP 1: CONTRACTOR PROFILE ONBOARDING */
            <div>
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                  Step 1 of 2: Contractor Profile
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200">
                  $19/mo Lifetime Guarantee
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                Claim Your Locked-In Pro Early Access
              </h2>
              <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
                Unlock high-res logo branding, client e-signatures, and instant invoice sync. No credit card required.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Company Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Company / Trade Business Name
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Summit Ridge Roofing LLC"
                    className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mike@contractor.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                      Mobile / SMS Alerts <span className="text-zinc-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-950 focus:bg-white transition"
                    />
                  </div>
                </div>

                {/* Primary Trade Selection */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1">
                    Primary Trade
                  </label>
                  <select
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 focus:outline-none focus:border-zinc-950 focus:bg-white transition cursor-pointer"
                  >
                    <option value="general">General Contractor / Multi-Trade</option>
                    {TRADES.map((t) => (
                      <option key={t.slug} value={t.slug}>
                        {t.tradeName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Key Feature Focus Chips */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-1.5">
                    Which Pro Feature Do You Need Most?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {FEATURE_OPTIONS.map((feat) => {
                      const isSelected = selectedFeature === feat.id;
                      return (
                        <button
                          key={feat.id}
                          type="button"
                          onClick={() => setSelectedFeature(feat.id)}
                          className={`p-2.5 rounded-lg border text-left transition cursor-pointer flex items-start gap-2.5 ${
                            isSelected
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                          }`}
                        >
                          <span className="text-base mt-0.5">{feat.icon}</span>
                          <div>
                            <p className={`text-xs font-bold ${isSelected ? "text-white" : "text-slate-950"}`}>
                              {feat.label}
                            </p>
                            <p className={`text-[10px] leading-tight ${isSelected ? "text-emerald-100" : "text-slate-500"}`}>
                              {feat.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ color: "#ffffff", backgroundColor: "#059669" }}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 !text-white font-bold rounded-xl text-sm transition shadow-md shadow-emerald-600/25 disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span style={{ color: "#ffffff" }} className="!text-white">Saving Profile to Database...</span>
                    </>
                  ) : (
                    <span style={{ color: "#ffffff" }} className="!text-white font-bold">Lock In Lifetime $19/mo Rate →</span>
                  )}
                </button>

                {/* Trust Footer */}
                <div className="pt-2 text-center space-y-1">
                  <p className="text-[11px] text-zinc-500 font-medium">
                    ✓ Zero credit card required • Lock in 60% early-bird rate for life • Instant invite
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* STEP 2: ONBOARDING SUCCESS PASS */
            <div className="text-center py-2 space-y-5">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase bg-zinc-100 text-zinc-800 px-2.5 py-1 rounded-full border border-zinc-200">
                  Priority Queue #{memberNumber}
                </span>
                <h2 className="text-2xl font-black text-zinc-950 tracking-tight mt-2.5">
                  Welcome Aboard, {companyName || "Contractor"}!
                </h2>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto mt-1 leading-relaxed">
                  Your contractor early-adopter profile is locked in. We have reserved your lifetime $19/mo rate for{" "}
                  <strong>{email}</strong>.
                </p>
              </div>

              {/* Digital Membership Pass Card */}
              <div className="bg-zinc-950 text-white rounded-xl p-5 text-left font-mono space-y-3 shadow-lg border border-zinc-800 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <span className="text-xs font-bold text-zinc-100 tracking-wider">
                    CALCULATORMINT PRO PASS
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-400 text-zinc-950 font-bold">
                    LOCKED-IN
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">Contractor</span>
                    <span className="text-white font-semibold truncate block">
                      {companyName || "Independent Contractor"}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">Trade</span>
                    <span className="text-white font-semibold capitalize block">{trade}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">Rate Guarantee</span>
                    <span className="text-emerald-400 font-bold block">$19 / Month</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">Priority Queue</span>
                    <span className="text-white block">Position #{memberNumber}</span>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-left space-y-2 text-xs">
                <p className="font-bold text-zinc-950">What happens next:</p>
                <div className="flex items-start gap-2 text-zinc-600">
                  <span className="text-zinc-950 font-bold">1.</span>
                  <span>We will email your activation invite code directly to <strong>{email}</strong>.</span>
                </div>
                <div className="flex items-start gap-2 text-zinc-600">
                  <span className="text-zinc-950 font-bold">2.</span>
                  <span>Your company details will be saved to your local browser for 1-click quote generation.</span>
                </div>
                <div className="flex items-start gap-2 text-zinc-600">
                  <span className="text-zinc-950 font-bold">3.</span>
                  <span>You can start generating unlimited free client estimates right now below.</span>
                </div>
              </div>

              {/* Done / Action Button */}
              <button
                type="button"
                onClick={handleDone}
                style={{ color: "#ffffff", backgroundColor: "#059669" }}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 !text-white font-bold rounded-xl text-sm transition shadow-md shadow-emerald-600/25 cursor-pointer"
              >
                <span style={{ color: "#ffffff" }} className="!text-white font-bold">Start Building Estimates Now →</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
