"use client";

import React, { useState } from "react";

export function ProfitMarginClient() {
  const [cost, setCost] = useState<number>(2500);
  const [calculationMode, setCalculationMode] = useState<"margin" | "markup">("margin");
  const [targetPercentage, setTargetPercentage] = useState<number>(35);

  const cleanCost = Math.max(0, cost || 0);
  const cleanPct = Math.max(0, targetPercentage || 0);

  let sellPrice = 0;
  let grossProfit = 0;
  let marginPct = 0;
  let markupPct = 0;

  if (calculationMode === "margin") {
    const marginDecimal = Math.min(0.999, cleanPct / 100);
    sellPrice = marginDecimal >= 1 ? cleanCost * 2 : cleanCost / (1 - marginDecimal);
    grossProfit = sellPrice - cleanCost;
    marginPct = cleanPct;
    markupPct = cleanCost > 0 ? (grossProfit / cleanCost) * 100 : 0;
  } else {
    const markupDecimal = cleanPct / 100;
    sellPrice = cleanCost * (1 + markupDecimal);
    grossProfit = sellPrice - cleanCost;
    markupPct = cleanPct;
    marginPct = sellPrice > 0 ? (grossProfit / sellPrice) * 100 : 0;
  }

  const costRatioPct = sellPrice > 0 ? (cleanCost / sellPrice) * 100 : 0;
  const profitRatioPct = sellPrice > 0 ? (grossProfit / sellPrice) * 100 : 0;

  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* INPUTS */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-zinc-100 pb-3">
            <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider font-mono">
              1. Job Cost & Profit Goals
            </h2>
            <p className="text-xs text-zinc-500">
              Enter your total hard direct costs (materials, labor hours, subs, dump fees).
            </p>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-zinc-500 mb-1">
              Direct Job Cost (Labor + Materials + Subcontractors)
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-2 text-sm font-bold text-zinc-400">
                $
              </span>
              <input
                type="number"
                min="0"
                step="any"
                value={cost || ""}
                onChange={(e) => setCost(parseFloat(e.target.value) || 0)}
                placeholder="2,500.00"
                className="w-full pl-8 pr-4 py-2 text-sm font-mono bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-950 focus:outline-none focus:border-zinc-950"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-bold text-slate-500">
                Calculation Strategy
              </label>
              <div className="inline-flex p-0.5 bg-slate-100 rounded-lg text-xs font-semibold border border-slate-200">
                <button
                  type="button"
                  onClick={() => {
                    setCalculationMode("margin");
                    setTargetPercentage(35);
                  }}
                  className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
                    calculationMode === "margin"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  Target Margin % (Recommended)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCalculationMode("markup");
                    setTargetPercentage(50);
                  }}
                  className={`px-3 py-1.5 rounded-md transition cursor-pointer ${
                    calculationMode === "markup"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  Markup %
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max={calculationMode === "margin" ? 99 : 500}
                step="any"
                value={targetPercentage || ""}
                onChange={(e) => setTargetPercentage(parseFloat(e.target.value) || 0)}
                className="w-28 px-3 py-1.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-950 focus:outline-none focus:border-emerald-600"
              />
              <span className="text-xs font-bold text-slate-600">%</span>

              {/* Presets */}
              <div className="flex gap-1.5 flex-wrap">
                {(calculationMode === "margin" ? [20, 30, 35, 45, 50] : [25, 40, 50, 75, 100]).map(
                  (pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setTargetPercentage(pct)}
                      className={`px-2.5 py-1 text-xs rounded-md font-medium border transition cursor-pointer ${
                        targetPercentage === pct
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {pct}%
                    </button>
                  )
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">
              {calculationMode === "margin"
                ? "Most trade contractors target 30%–45% gross margin to cover overhead and retain 15%–20% net profit."
                : "A 50% markup on costs results in a 33.3% gross margin on revenue."}
            </p>
          </div>

          {/* Visual Profit Ratio Bar */}
          <div className="pt-2">
            <div className="flex justify-between text-xs font-semibold mb-1 text-slate-600 font-mono">
              <span>Cost: {costRatioPct.toFixed(1)}%</span>
              <span className="text-emerald-700 font-bold">Gross Profit: {profitRatioPct.toFixed(1)}%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden flex">
              <div
                style={{ width: `${Math.min(100, costRatioPct)}%` }}
                className="bg-slate-400 h-full"
                title="Direct Cost"
              />
              <div
                style={{ width: `${Math.min(100, profitRatioPct)}%` }}
                className="bg-emerald-500 h-full"
                title="Gross Profit"
              />
            </div>
          </div>
        </div>

        {/* RESULTS CARD */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 sm:p-7 shadow-xl border border-slate-800">
          <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Recommended Quote Price
          </span>

          <div className="mt-3 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono">
                ${sellPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <p className="text-xs text-emerald-400 mt-1 font-mono font-bold">
              Gross Profit: +${grossProfit.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          <div className="space-y-3.5 border-t border-slate-800 pt-4 text-xs font-mono">
            <div className="flex justify-between items-center text-slate-400">
              <span>Direct Job Cost:</span>
              <span className="text-slate-100 font-bold">
                ${cleanCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-400">
              <span>Gross Profit Margin:</span>
              <span className="text-emerald-400 font-bold">
                {marginPct.toFixed(1)}%
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-400">
              <span>Required Markup on Cost:</span>
              <span className="text-white font-bold">
                {markupPct.toFixed(1)}%
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              If your business overhead (trucks, insurance, software, marketing) is 15% of annual revenue, a 35% gross margin leaves you with 20% true net profit before taxes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
