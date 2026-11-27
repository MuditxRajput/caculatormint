"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { TradeConfig } from "@/data/trades";

interface EstimateHubClientProps {
  trades: TradeConfig[];
}

export function EstimateHubClient({ trades }: EstimateHubClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(trades.map((t) => t.category))),
  ];

  const filteredTrades = trades.filter((trade) => {
    const matchesSearch =
      trade.tradeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trade.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trade.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || trade.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Bar */}
      <div className="bg-white rounded-xl border border-zinc-200 p-4 sm:p-5 shadow-sm space-y-4">
        <div className="relative">
          <svg
            className="w-4 h-4 absolute left-3.5 top-3.5 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by trade (e.g. painting, cleaning, roofing, pressure washing)..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950 transition"
          />
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Trades Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTrades.map((trade, idx) => (
          <Link
            key={trade.slug}
            href={`/estimate-template/${trade.slug}`}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-950/5 transition-all group cursor-pointer block"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 uppercase tracking-wider font-mono">
                  {trade.category}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  #{String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              <h2 className="text-base font-bold text-slate-950 group-hover:text-emerald-700 transition">
                {trade.tradeName}
              </h2>
              <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                {trade.shortDescription}
              </p>

              {/* Sample benchmark pill */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">Benchmark Avg:</span>
                <span className="font-mono font-bold text-slate-900">
                  ${trade.pricingBenchmarks[0].avgRate}{" "}
                  <span className="text-[10px] text-slate-400 font-sans font-normal">
                    {trade.pricingBenchmarks[0].unit}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700 group-hover:text-emerald-600 group-hover:underline flex items-center gap-1">
                Create Free Estimate <span>→</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase">
                Vector PDF
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredTrades.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-zinc-200 p-8">
          <p className="text-sm font-bold text-zinc-800">No matching trades found</p>
          <p className="text-xs text-zinc-500 mt-1">
            Try searching for &quot;cleaning&quot;, &quot;handyman&quot;, or &quot;roofing&quot;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-3 px-4 py-1.5 bg-zinc-100 hover:bg-zinc-200 rounded-md text-xs font-semibold text-zinc-800"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
