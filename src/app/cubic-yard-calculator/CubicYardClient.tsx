"use client";

import React, { useState } from "react";

const MATERIAL_PRESETS = [
  { name: "Shredded Hardwood Mulch", densityLbs: 800, defaultPrice: 45 },
  { name: "Screened Topsoil", densityLbs: 2200, defaultPrice: 38 },
  { name: "Crushed Stone / Gravel #57", densityLbs: 2700, defaultPrice: 65 },
  { name: "Ready-Mix Concrete", densityLbs: 4050, defaultPrice: 145 },
  { name: "Masonry Sand", densityLbs: 2700, defaultPrice: 50 },
  { name: "Custom / Density Only", densityLbs: 2000, defaultPrice: 0 },
];

export function CubicYardClient() {
  const [lengthFt, setLengthFt] = useState<number>(30);
  const [widthFt, setWidthFt] = useState<number>(15);
  const [depthInches, setDepthInches] = useState<number>(3);
  const [wasteBuffer, setWasteBuffer] = useState<number>(10);
  const [selectedMaterialIdx, setSelectedMaterialIdx] = useState<number>(0);
  const [pricePerYard, setPricePerYard] = useState<number>(45);

  const activePreset = MATERIAL_PRESETS[selectedMaterialIdx];

  const areaSqFt = (lengthFt || 0) * (widthFt || 0);
  const depthFt = (depthInches || 0) / 12;
  const baseCubicFt = areaSqFt * depthFt;
  const baseCubicYards = baseCubicFt / 27;

  const bufferMultiplier = 1 + (wasteBuffer || 0) / 100;
  const totalCubicYards = baseCubicYards * bufferMultiplier;
  const totalCubicFt = baseCubicFt * bufferMultiplier;

  const totalWeightLbs = totalCubicYards * activePreset.densityLbs;
  const totalWeightTons = totalWeightLbs / 2000;
  const estimatedCost = totalCubicYards * (pricePerYard || 0);

  const handleMaterialChange = (idx: number) => {
    setSelectedMaterialIdx(idx);
    if (MATERIAL_PRESETS[idx].defaultPrice > 0) {
      setPricePerYard(MATERIAL_PRESETS[idx].defaultPrice);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* INPUTS COLUMN */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-zinc-100 pb-3">
            <h2 className="text-sm font-bold text-zinc-950 uppercase tracking-wider font-mono">
              1. Project Dimensions
            </h2>
            <p className="text-xs text-zinc-500">
              Square or rectangular coverage area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                Length (Feet)
              </label>
              <input
                type="number"
                min="0"
                step="any"
                value={lengthFt || ""}
                onChange={(e) => setLengthFt(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-lg font-mono text-zinc-950 focus:outline-none focus:border-zinc-950"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                Width (Feet)
              </label>
              <input
                type="number"
                min="0"
                step="any"
                value={widthFt || ""}
                onChange={(e) => setWidthFt(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-lg font-mono text-zinc-950 focus:outline-none focus:border-zinc-950"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                Depth / Thickness (Inches)
              </label>
              <input
                type="number"
                min="0"
                step="any"
                value={depthInches || ""}
                onChange={(e) => setDepthInches(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-50 border border-zinc-200 rounded-lg font-mono text-zinc-950 focus:outline-none focus:border-zinc-950"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                Material Density Preset
              </label>
              <select
                value={selectedMaterialIdx}
                onChange={(e) => handleMaterialChange(parseInt(e.target.value))}
                className="w-full px-3 py-2 text-xs bg-zinc-50 border border-zinc-200 rounded-lg font-medium text-zinc-900 focus:outline-none focus:border-zinc-950"
              >
                {MATERIAL_PRESETS.map((m, idx) => (
                  <option key={m.name} value={idx}>
                    {m.name} (~{m.densityLbs} lbs/yd³)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-zinc-500 mb-1">
                Compaction Buffer (%)
              </label>
              <div className="flex gap-2">
                {[0, 5, 10, 15].map((pct) => (
                  <button
                    key={pct}
                    type="button"
                    onClick={() => setWasteBuffer(pct)}
                    className={`flex-1 py-1.5 text-xs rounded-md font-semibold border transition cursor-pointer ${
                      wasteBuffer === pct
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    +{pct}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 mb-1">
              Estimated Material Cost ($ per Cubic Yard delivered)
            </label>
            <input
              type="number"
              min="0"
              step="any"
              value={pricePerYard || ""}
              onChange={(e) => setPricePerYard(parseFloat(e.target.value) || 0)}
              className="w-full max-w-xs px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-950 focus:outline-none focus:border-emerald-600"
              placeholder="e.g. 45.00"
            />
          </div>
        </div>

        {/* RESULTS CARD */}
        <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl p-6 sm:p-7 shadow-xl border border-slate-800">
          <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-400 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Total Material Required
          </span>

          <div className="mt-3 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white font-mono">
                {totalCubicYards.toFixed(2)}
              </span>
              <span className="text-base font-bold text-emerald-400">Cu Yards</span>
            </div>
            {wasteBuffer > 0 && (
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Includes {wasteBuffer}% compaction & spill buffer (Net: {baseCubicYards.toFixed(2)} yds)
              </p>
            )}
          </div>

          <div className="space-y-3.5 border-t border-slate-800 pt-4 text-xs font-mono">
            <div className="flex justify-between items-center text-slate-400">
              <span>Coverage Surface Area:</span>
              <span className="text-slate-100 font-bold">
                {areaSqFt.toLocaleString()} sq ft
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-400">
              <span>Total Volume (Cubic Feet):</span>
              <span className="text-slate-100 font-bold">
                {totalCubicFt.toFixed(1)} cu ft
              </span>
            </div>

            <div className="flex justify-between items-center text-slate-400">
              <span>Estimated Weight:</span>
              <span className="text-white font-bold">
                {totalWeightTons.toFixed(2)} Tons ({Math.round(totalWeightLbs).toLocaleString()} lbs)
              </span>
            </div>

            {pricePerYard > 0 && (
              <div className="flex justify-between items-center text-emerald-400 pt-2.5 border-t border-slate-800">
                <span className="text-slate-400">Estimated Material Cost:</span>
                <span className="text-base font-black text-emerald-400">
                  ${estimatedCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
              Standard commercial dump trucks carry 10–14 cubic yards of mulch or 5–7 cubic yards of heavy stone/dirt due to axle weight limits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
