"use client";

import React from "react";
import { ContractorProfile, logoutContractor } from "@/lib/pro";

interface ProAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ContractorProfile | null;
  onUpgradeToPro?: () => void;
}

export function ProAccountModal({
  isOpen,
  onClose,
  profile,
  onUpgradeToPro,
}: ProAccountModalProps) {
  if (!isOpen) return null;

  const isPro = Boolean(profile?.isPro || localStorage.getItem("cm_is_pro") === "true");

  const handleLogout = async () => {
    if (confirm("Do you want to log out of your contractor account on this browser?")) {
      await logoutContractor();
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
              Contractor Account & Profile
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
        <div className="p-6 space-y-4">
          {/* Status Card */}
          {isPro ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  ★
                </div>
                <div>
                  <p className="text-xs font-black text-emerald-950">You are Pro</p>
                  <p className="text-[11px] text-emerald-700">Active Membership • Logo & Watermark-Free PDF</p>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-200/80 text-emerald-900 border border-emerald-300">
                PRO ACTIVE
              </span>
            </div>
          ) : (
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold text-zinc-950">Free Contractor Account</p>
                <p className="text-[11px] text-zinc-500">Your company details are auto-filled on all estimates</p>
              </div>
              {onUpgradeToPro && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onUpgradeToPro();
                  }}
                  style={{ color: "#ffffff", backgroundColor: "#059669" }}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 !text-white text-xs font-bold transition shadow-sm cursor-pointer"
                >
                  Upgrade to Pro
                </button>
              )}
            </div>
          )}

          {/* Account Details */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 space-y-2.5 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
              <span className="text-zinc-500 font-medium">Business / Trade Name:</span>
              <span className="font-bold text-zinc-900 truncate max-w-[200px]">
                {profile?.companyName || "Independent Contractor"}
              </span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
              <span className="text-zinc-500 font-medium">Email:</span>
              <span className="font-mono font-semibold text-zinc-900 truncate max-w-[200px]">
                {profile?.email || "contractor@pro.com"}
              </span>
            </div>
            {profile?.phone && (
              <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                <span className="text-zinc-500 font-medium">Phone:</span>
                <span className="font-mono text-zinc-800">{profile.phone}</span>
              </div>
            )}
            {profile?.license && (
              <div className="flex justify-between items-center pb-2 border-b border-zinc-200">
                <span className="text-zinc-500 font-medium">License / Insured:</span>
                <span className="font-mono text-zinc-800">{profile.license}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 font-medium">Primary Trade:</span>
              <span className="font-bold text-zinc-900 capitalize">{profile?.trade || "General Construction"}</span>
            </div>
          </div>

          <p className="text-[11px] text-zinc-500">
            ✓ Logged in: When you create estimates on any trade template, your company info is pre-filled automatically.
          </p>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-between border-t border-zinc-100">
            <button
              type="button"
              onClick={handleLogout}
              className="text-xs text-red-600 hover:underline cursor-pointer font-semibold"
            >
              Log Out
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ color: "#ffffff", backgroundColor: "#0f172a" }}
              className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 !text-white text-xs font-bold transition cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
