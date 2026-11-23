"use client";

import { useId, useMemo, useState } from "react";

type ShapeType = "rectangle" | "circle" | "area";

interface MaterialConfig {
  name: string;
  category: string;
  densityLbsPerYd: number; // weight in pounds per cubic yard
  recommendedBufferPct: number;
  bagInfo?: {
    primaryBagName: string;
    primaryBagsPerYd: number;
    secondaryBagName?: string;
    secondaryBagsPerYd?: number;
  };
}

const MATERIALS: Record<string, MaterialConfig> = {
  concrete: {
    name: "Concrete (Slabs, Footings & Patios)",
    category: "Construction",
    densityLbsPerYd: 4050,
    recommendedBufferPct: 10,
    bagInfo: {
      primaryBagName: "80 lb bags (0.60 cu ft)",
      primaryBagsPerYd: 45,
      secondaryBagName: "60 lb bags (0.45 cu ft)",
      secondaryBagsPerYd: 60,
    },
  },
  mulch: {
    name: "Mulch (Bark, Wood Chips & Pine)",
    category: "Landscaping",
    densityLbsPerYd: 800,
    recommendedBufferPct: 10,
    bagInfo: {
      primaryBagName: "2 cu ft bags",
      primaryBagsPerYd: 13.5,
      secondaryBagName: "3 cu ft bags",
      secondaryBagsPerYd: 9,
    },
  },
  topsoil: {
    name: "Topsoil / Garden Soil / Compost",
    category: "Gardening & Lawns",
    densityLbsPerYd: 2200,
    recommendedBufferPct: 10,
    bagInfo: {
      primaryBagName: "1 cu ft bags (~40-50 lbs)",
      primaryBagsPerYd: 27,
      secondaryBagName: "0.75 cu ft bags",
      secondaryBagsPerYd: 36,
    },
  },
  gravel: {
    name: "Gravel / Crushed Stone / Pea Gravel",
    category: "Driveways & Drainage",
    densityLbsPerYd: 2700,
    recommendedBufferPct: 15,
    bagInfo: {
      primaryBagName: "50 lb bags (~0.5 cu ft)",
      primaryBagsPerYd: 54,
    },
  },
  sand: {
    name: "Sand (Masonry / Paver Bedding)",
    category: "Masonry & Pavers",
    densityLbsPerYd: 2600,
    recommendedBufferPct: 10,
    bagInfo: {
      primaryBagName: "50 lb bags (~0.5 cu ft)",
      primaryBagsPerYd: 52,
    },
  },
  generic: {
    name: "General Volume / Other Material",
    category: "Generic Volume",
    densityLbsPerYd: 2000,
    recommendedBufferPct: 10,
  },
};

const BUFFER_PRESETS = [0, 5, 10, 15];

export function CubicYardCalculator() {
  const [shape, setShape] = useState<ShapeType>("rectangle");
  const [materialKey, setMaterialKey] = useState<string>("concrete");

  // Inputs
  const [lengthFt, setLengthFt] = useState<string>("24");
  const [widthFt, setWidthFt] = useState<string>("12");
  const [diameterFt, setDiameterFt] = useState<string>("14");
  const [areaSqFt, setAreaSqFt] = useState<string>("288");
  const [depthVal, setDepthVal] = useState<string>("4");
  const [depthUnit, setDepthUnit] = useState<"in" | "ft">("in");
  const [bufferPct, setBufferPct] = useState<string>("10");
  const [pricePerYd, setPricePerYd] = useState<string>("145.00");

  const lengthId = useId();
  const widthId = useId();
  const diameterId = useId();
  const areaId = useId();
  const depthId = useId();
  const depthUnitId = useId();
  const materialId = useId();
  const bufferId = useId();
  const priceId = useId();

  const selectedMaterial = MATERIALS[materialKey] ?? MATERIALS.generic;

  const results = useMemo(() => {
    const depthNum = parseFloat(depthVal);
    const bufferNum = parseFloat(bufferPct);
    const priceNum = parseFloat(pricePerYd);

    if (isNaN(depthNum) || depthNum <= 0) return null;

    // Convert depth to feet
    const depthInFeet = depthUnit === "in" ? depthNum / 12 : depthNum;
    if (depthInFeet <= 0) return null;

    let calculatedSqFt = 0;

    if (shape === "rectangle") {
      const l = parseFloat(lengthFt);
      const w = parseFloat(widthFt);
      if (isNaN(l) || l <= 0 || isNaN(w) || w <= 0) return null;
      calculatedSqFt = l * w;
    } else if (shape === "circle") {
      const d = parseFloat(diameterFt);
      if (isNaN(d) || d <= 0) return null;
      const radius = d / 2;
      calculatedSqFt = Math.PI * radius * radius;
    } else {
      const a = parseFloat(areaSqFt);
      if (isNaN(a) || a <= 0) return null;
      calculatedSqFt = a;
    }

    // Exact Cubic Feet and Cubic Yards
    const exactCuFt = calculatedSqFt * depthInFeet;
    const exactCuYds = exactCuFt / 27;

    const validBufferPct = isNaN(bufferNum) || bufferNum < 0 ? 0 : bufferNum;
    const bufferMultiplier = 1 + validBufferPct / 100;

    const totalCuYds = exactCuYds * bufferMultiplier;
    const totalCuFt = totalCuYds * 27;
    const bufferOnlyCuYds = totalCuYds - exactCuYds;

    // Weight Estimations
    const totalWeightLbs = totalCuYds * selectedMaterial.densityLbsPerYd;
    const totalWeightTons = totalWeightLbs / 2000;

    // Bag Count Estimations
    let primaryBags = 0;
    let secondaryBags = 0;
    if (selectedMaterial.bagInfo) {
      primaryBags = Math.ceil(totalCuYds * selectedMaterial.bagInfo.primaryBagsPerYd);
      if (selectedMaterial.bagInfo.secondaryBagsPerYd) {
        secondaryBags = Math.ceil(totalCuYds * selectedMaterial.bagInfo.secondaryBagsPerYd);
      }
    }

    // Cost Estimations
    const hasPrice = !isNaN(priceNum) && priceNum > 0;
    const totalCost = hasPrice ? totalCuYds * priceNum : 0;

    return {
      sqFt: calculatedSqFt,
      depthInches: depthUnit === "in" ? depthNum : depthNum * 12,
      exactCuYds,
      totalCuYds,
      totalCuFt,
      bufferOnlyCuYds,
      bufferPct: validBufferPct,
      totalWeightLbs,
      totalWeightTons,
      primaryBags,
      secondaryBags,
      totalCost,
      hasPrice,
    };
  }, [
    shape,
    lengthFt,
    widthFt,
    diameterFt,
    areaSqFt,
    depthVal,
    depthUnit,
    bufferPct,
    pricePerYd,
    selectedMaterial,
  ]);

  return (
    <div className="abv-calculator">
      {/* Configuration & Inputs Panel */}
      <div className="abv-calculator__panel">
        <div>
          <h2 className="calc-heading">Project Dimensions &amp; Material</h2>
          <p className="calc-subheading">
            Select your project shape, enter dimensions, and choose materials to calculate cubic yardage with recommended waste buffers.
          </p>
        </div>

        {/* Shape Tabs */}
        <div className="calc-tabs" role="tablist" aria-label="Shape selection">
          <button
            type="button"
            role="tab"
            aria-selected={shape === "rectangle"}
            className={`calc-tab-btn ${shape === "rectangle" ? "active" : ""}`}
            onClick={() => setShape("rectangle")}
          >
            Rectangle / Slab
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={shape === "circle"}
            className={`calc-tab-btn ${shape === "circle" ? "active" : ""}`}
            onClick={() => setShape("circle")}
          >
            Circular / Column
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={shape === "area"}
            className={`calc-tab-btn ${shape === "area" ? "active" : ""}`}
            onClick={() => setShape("area")}
          >
            Total Area (Sq Ft)
          </button>
        </div>

        {/* Material Selection */}
        <div className="abv-field">
          <label htmlFor={materialId} className="abv-label">
            Material Type (Estimates Density &amp; Bags)
          </label>
          <select
            id={materialId}
            value={materialKey}
            onChange={(e) => {
              const k = e.target.value;
              setMaterialKey(k);
              const m = MATERIALS[k];
              if (m) {
                setBufferPct(m.recommendedBufferPct.toString());
              }
            }}
          >
            {Object.entries(MATERIALS).map(([key, item]) => (
              <option key={key} value={key}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Dynamic Dimensional Inputs */}
        {shape === "rectangle" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="abv-field">
              <label htmlFor={lengthId} className="abv-label">
                Length (Feet)
              </label>
              <div className="input-group">
                <input
                  id={lengthId}
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={lengthFt}
                  onChange={(e) => setLengthFt(e.target.value)}
                  placeholder="24"
                />
                <span className="input-affix">ft</span>
              </div>
            </div>

            <div className="abv-field">
              <label htmlFor={widthId} className="abv-label">
                Width (Feet)
              </label>
              <div className="input-group">
                <input
                  id={widthId}
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={widthFt}
                  onChange={(e) => setWidthFt(e.target.value)}
                  placeholder="12"
                />
                <span className="input-affix">ft</span>
              </div>
            </div>
          </div>
        )}

        {shape === "circle" && (
          <div className="abv-field">
            <label htmlFor={diameterId} className="abv-label">
              Diameter (Feet across)
            </label>
            <div className="input-group">
              <input
                id={diameterId}
                type="number"
                min="0.1"
                step="0.5"
                value={diameterFt}
                onChange={(e) => setDiameterFt(e.target.value)}
                placeholder="14"
              />
              <span className="input-affix">ft</span>
            </div>
          </div>
        )}

        {shape === "area" && (
          <div className="abv-field">
            <label htmlFor={areaId} className="abv-label">
              Known Surface Area (Square Feet)
            </label>
            <div className="input-group">
              <input
                id={areaId}
                type="number"
                min="0.1"
                step="1"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(e.target.value)}
                placeholder="288"
              />
              <span className="input-affix">sq ft</span>
            </div>
          </div>
        )}

        {/* Depth / Thickness with Unit Toggle */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "0.75rem" }}>
          <div className="abv-field">
            <label htmlFor={depthId} className="abv-label">
              Depth / Thickness ({depthUnit === "in" ? "Inches" : "Feet"})
            </label>
            <div className="input-group">
              <input
                id={depthId}
                type="number"
                min="0.1"
                step={depthUnit === "in" ? "0.5" : "0.1"}
                value={depthVal}
                onChange={(e) => setDepthVal(e.target.value)}
                placeholder={depthUnit === "in" ? "4" : "0.33"}
              />
              <span className="input-affix">{depthUnit}</span>
            </div>
          </div>

          <div className="abv-field">
            <label htmlFor={depthUnitId} className="abv-label">
              Unit
            </label>
            <select
              id={depthUnitId}
              value={depthUnit}
              onChange={(e) => {
                const newUnit = e.target.value as "in" | "ft";
                const cur = parseFloat(depthVal);
                if (!isNaN(cur) && cur > 0) {
                  if (newUnit === "ft" && depthUnit === "in") {
                    setDepthVal((cur / 12).toFixed(2));
                  } else if (newUnit === "in" && depthUnit === "ft") {
                    setDepthVal((cur * 12).toFixed(1));
                  }
                }
                setDepthUnit(newUnit);
              }}
            >
              <option value="in">Inches (in)</option>
              <option value="ft">Feet (ft)</option>
            </select>
          </div>
        </div>

        {/* Waste & Compaction Buffer */}
        <div className="abv-field">
          <label htmlFor={bufferId} className="abv-label">
            Waste &amp; Compaction Buffer (%)
          </label>
          <div className="input-group">
            <input
              id={bufferId}
              type="number"
              min="0"
              max="50"
              step="1"
              value={bufferPct}
              onChange={(e) => setBufferPct(e.target.value)}
              placeholder="10"
            />
            <span className="input-affix">%</span>
          </div>
          <div className="tip-preset-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginTop: "0.5rem" }}>
            {BUFFER_PRESETS.map((pct) => (
              <button
                key={pct}
                type="button"
                className={`tip-btn ${bufferPct === pct.toString() ? "is-active" : ""}`}
                onClick={() => setBufferPct(pct.toString())}
              >
                {pct === 0 ? "0% (Exact)" : `+${pct}%`}
              </button>
            ))}
          </div>
          <p style={{ fontSize: "0.82rem", color: "#09090b", margin: "0.35rem 0 0" }}>
            *Concrete contractors standardly add 5–10% for uneven subgrade and spillage; mulch and gravel compact 10–15%.
          </p>
        </div>

        {/* Optional Price per Cubic Yard */}
        <div className="abv-field">
          <label htmlFor={priceId} className="abv-label">
            Material Price per Cubic Yard ($ Optional)
          </label>
          <div className="input-group">
            <span className="input-affix">$</span>
            <input
              id={priceId}
              type="number"
              min="0"
              step="1"
              value={pricePerYd}
              onChange={(e) => setPricePerYd(e.target.value)}
              placeholder="145.00"
            />
            <span className="input-affix">/yd³</span>
          </div>
        </div>
      </div>

      {/* Instant Results Panel */}
      <div className="calc-result-box" aria-live="polite">
        <div>
          <span className="calc-result-label">Recommended Order Volume</span>
          <div className="calc-result-value">
            {results ? `${results.totalCuYds.toFixed(2)}` : "--"}
            <span style={{ fontSize: "1.3rem", fontWeight: "700", marginLeft: "0.35rem", color: "#fdba74" }}>
              yd³
            </span>
          </div>
          <span style={{ fontSize: "0.85rem", color: "#94a3b8", display: "block", marginTop: "0.35rem" }}>
            {results
              ? results.bufferPct > 0
                ? `Includes ${results.bufferPct}% buffer (+${results.bufferOnlyCuYds.toFixed(2)} yd³)`
                : "Exact net volume (no buffer applied)"
              : "Enter valid project dimensions"}
          </span>
        </div>

        {results && (
          <div className="calc-result-summary-grid">
            <div className="summary-row">
              <span>Exact Volume (0% Buffer):</span>
              <strong>{results.exactCuYds.toFixed(2)} cu yd</strong>
            </div>

            <div className="summary-row">
              <span>Total Cubic Feet:</span>
              <strong>{results.totalCuFt.toFixed(1)} cu ft</strong>
            </div>

            <div className="summary-row">
              <span>Coverage Surface Area:</span>
              <strong>{results.sqFt.toFixed(1)} sq ft</strong>
            </div>

            <div className="summary-row">
              <span>Thickness / Depth:</span>
              <strong>{results.depthInches.toFixed(1)} inches</strong>
            </div>

            <hr className="summary-divider" />

            <div className="summary-row">
              <span>Estimated Total Weight:</span>
              <strong>
                {results.totalWeightTons >= 1
                  ? `${results.totalWeightTons.toFixed(2)} US Tons (${Math.round(results.totalWeightLbs).toLocaleString()} lbs)`
                  : `${Math.round(results.totalWeightLbs).toLocaleString()} lbs`}
              </strong>
            </div>

            {/* Bag counts if applicable */}
            {selectedMaterial.bagInfo && (
              <>
                <div className="summary-row">
                  <span>Bag Equivalent ({selectedMaterial.bagInfo.primaryBagName}):</span>
                  <strong className="text-highlight">~{results.primaryBags} bags</strong>
                </div>
                {selectedMaterial.bagInfo.secondaryBagName && (
                  <div className="summary-row">
                    <span>Alternative ({selectedMaterial.bagInfo.secondaryBagName}):</span>
                    <strong>~{results.secondaryBags} bags</strong>
                  </div>
                )}
              </>
            )}

            {/* Total Estimated Cost */}
            {results.hasPrice && (
              <>
                <hr className="summary-divider" />
                <div className="summary-row">
                  <span>Estimated Material Cost:</span>
                  <strong style={{ color: "#4ade80", fontSize: "1.3rem" }}>
                    ${results.totalCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </strong>
                </div>
              </>
            )}
          </div>
        )}

        {/* Pro Ordering Tip & Legal Estimation Disclaimer */}
        <div style={{ marginTop: "0.5rem", borderTop: "1px solid rgba(148, 163, 184, 0.2)", paddingTop: "0.85rem" }}>
          <div
            style={{
              padding: "0.75rem 0.9rem",
              borderRadius: "0.65rem",
              backgroundColor: "rgba(234, 88, 12, 0.12)",
              border: "1px solid rgba(234, 88, 12, 0.25)",
              fontSize: "0.82rem",
              lineHeight: "1.45",
              color: "#fdba74",
              marginBottom: "0.65rem",
            }}
          >
            <strong>U.S. Bulk Delivery Tip:</strong> Ready-mix concrete trucks typically bill in 0.25 or 0.50 yd³ increments and carry a 1 to 2-yard minimum delivery charge. Mulch and soil dump trucks commonly hold 5 to 10 yards per load.
          </div>

          <p style={{ fontSize: "0.76rem", color: "#cbd5e1", margin: 0, lineHeight: "1.4" }}>
            <em>
              *Disclaimer: Results are geometric estimates for material planning. Site variables like subgrade settling, uneven excavation, compaction, and spillage will alter final requirements. Always confirm final order quantities with your licensed contractor or bulk supplier.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
