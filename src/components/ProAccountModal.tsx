"use client";

import React from "react";
import { ContractorProfile, setProStatus } from "@/lib/pro";

interface ProAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ContractorProfile | null;
}

export function ProAccountModal({ isOpen, onClose, profile }: ProAccountModalProps) {
  if (!isOpen) return null;

  const handleLogout = () => {
    if (confirm("Do you want to sign out of Pro on this browser?")) {
      setProStatus(false);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden text-left">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 flex items-center justify-between text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
              CalculatorMint Pro Account
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

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Status Card */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                ★
              </div>
              <div>
                <p className="text-xs font-extrabold text-emerald-950">Active Pro Membership</p>
                <p className="text-[11px] text-emerald-700">Lifetime Rate Locked ($19/mo guarantee)</p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-200/80 text-emerald-900 border border-emerald-300">
              ACTIVE
            </span>
          </div>

          {/* Account Details */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
              <span className="text-zinc-500 font-medium">Business / Trade Name:</span>
              <span className="font-bold text-zinc-900">
                {profile?.companyName || "Independent Contractor"}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
              <span className="text-zinc-500 font-medium">Registered Email:</span>
              <span className="font-mono font-semibold text-zinc-900">{profile?.email || "contractor@pro.com"}</span>
            </div>
            {profile?.phone && (
              <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                <span className="text-zinc-500 font-medium">Phone:</span>
                <span className="font-mono text-zinc-800">{profile.phone}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 font-medium">Primary Trade:</span>
              <span className="font-bold text-zinc-900 capitalize">{profile?.trade || "General Construction"}</span>
            </div>
          </div>

          {/* Unlocked Benefits */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-600 mb-2">
              Unlocked Pro Benefits
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-700">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Watermark-free vector PDF estimates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Custom company logo branding on all client quotes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Unlimited estimate saves and instant print downloads</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>2026 US trade rate formulas and margin protection</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-between border-t border-zinc-100">
            <button
              type="button"
              onClick={handleLogout}
              className="text-xs text-zinc-400 hover:text-red-600 transition underline underline-offset-2 cursor-pointer"
            >
              Sign out of Pro
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ color: "#ffffff", backgroundColor: "#0f172a" }}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 !text-white text-xs font-bold transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
