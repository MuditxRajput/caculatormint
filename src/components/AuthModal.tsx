"use client";

import React, { useState } from "react";
import { TRADES } from "@/data/trades";
import { setContractorProfile } from "@/lib/pro";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}

export function AuthModal({ isOpen, onClose, initialMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [license, setLicense] = useState("");
  const [trade, setTrade] = useState("general");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsLoading(true);

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/signup";
      const payload =
        mode === "login"
          ? { email, password }
          : { email, password, companyName, phone, license, trade };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed. Please check your credentials.");
      }

      // Save to client state
      setContractorProfile(data.user);
      setSuccessMessage(mode === "login" ? "Logged in successfully!" : "Account created and profile saved!");

      setTimeout(() => {
        onClose();
      }, 600);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
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
            <span className="text-emerald-400 font-bold">⚡</span>
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
              Contractor Account
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white text-lg leading-none p-1 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-zinc-200 bg-zinc-50 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setErrorMessage("");
            }}
            className={`flex-1 py-3 text-center transition cursor-pointer ${
              mode === "login"
                ? "bg-white text-zinc-950 border-b-2 border-emerald-600 font-bold shadow-2xs"
                : "text-zinc-500 hover:text-zinc-950"
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("signup");
              setErrorMessage("");
            }}
            className={`flex-1 py-3 text-center transition cursor-pointer ${
              mode === "signup"
                ? "bg-white text-zinc-950 border-b-2 border-emerald-600 font-bold shadow-2xs"
                : "text-zinc-500 hover:text-zinc-950"
            }`}
          >
            Sign Up (Free)
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
              <p className="font-semibold">{errorMessage}</p>
              {mode === "signup" && errorMessage.includes("already registered") && (
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setErrorMessage("");
                  }}
                  className="mt-1.5 inline-block text-emerald-800 font-bold underline cursor-pointer hover:text-emerald-950"
                >
                  Click here to Log In instead →
                </button>
              )}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 font-bold">
              ✓ {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            {mode === "signup" && (
              <>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
                    Company / Trade Business Name
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Painting & Remodeling LLC"
                    className="w-full px-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
                      Business Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
                      License / Insured #
                    </label>
                    <input
                      type="text"
                      value={license}
                      onChange={(e) => setLicense(e.target.value)}
                      placeholder="e.g. #ROC-10492"
                      className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
                    Primary Trade
                  </label>
                  <select
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
                  >
                    <option value="general">General Contractor / Trades</option>
                    {TRADES.map((t) => (
                      <option key={t.slug} value={t.slug}>
                        {t.tradeName}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-[11px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
                Business Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contractor@business.com"
                className="w-full px-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-600 uppercase tracking-wider mb-1">
                Password {mode === "signup" && <span className="font-normal text-zinc-400">(Min. 6 chars)</span>}
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950 focus:bg-white"
              />
            </div>

            <p className="text-[11px] text-zinc-500 pt-1">
              ✓ Keeps your contractor details pre-filled on every estimate template across visits.
            </p>

            <button
              type="submit"
              disabled={isLoading}
              style={{ color: "#ffffff", backgroundColor: "#059669" }}
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 !text-white font-bold rounded-xl text-xs transition shadow-md shadow-emerald-600/25 cursor-pointer disabled:opacity-50 mt-2"
            >
              {isLoading ? (
                <span style={{ color: "#ffffff" }} className="!text-white font-bold">Please wait...</span>
              ) : mode === "login" ? (
                <span style={{ color: "#ffffff" }} className="!text-white font-bold">Log In to My Account →</span>
              ) : (
                <span style={{ color: "#ffffff" }} className="!text-white font-bold">Create Free Account & Save Profile →</span>
              )}
            </button>
          </form>

          {/* Switch Mode Prompt */}
          <div className="mt-4 pt-3 border-t border-zinc-100 text-center text-xs text-zinc-600">
            {mode === "login" ? (
              <p>
                Don&apos;t have an account yet?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("signup");
                    setErrorMessage("");
                  }}
                  className="font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  Sign Up Free
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMode("login");
                    setErrorMessage("");
                  }}
                  className="font-bold text-emerald-700 hover:underline cursor-pointer"
                >
                  Log In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
