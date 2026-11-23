"use client";

import { useId, useState } from "react";

type CalcMode = "simple" | "weighted" | "grade" | "atomic";

interface WeightedItem {
  id: string;
  name: string;
  value: string;
  weight: string;
}

interface GradeItem {
  id: string;
  name: string;
  score: string;
  weight: string;
}

interface IsotopeItem {
  id: string;
  name: string;
  mass: string;
  abundance: string;
}

export function AverageCalculator({ initialMode = "simple" }: { initialMode?: CalcMode } = {}) {
  const [mode, setMode] = useState<CalcMode>(initialMode);

  // Mode 1: Simple Average State
  const simpleInputId = useId();
  const [simpleInput, setSimpleInput] = useState<string>("85, 92, 78, 90, 88");

  // Mode 2: Weighted Average State
  const [weightedItems, setWeightedItems] = useState<WeightedItem[]>([
    { id: "1", name: "Exam 1", value: "82", weight: "20" },
    { id: "2", name: "Midterm Exam", value: "88", weight: "30" },
    { id: "3", name: "Assignments", value: "95", weight: "20" },
    { id: "4", name: "Final Project", value: "90", weight: "30" },
  ]);

  // Mode 3: Grade Average State
  const [gradeItems, setGradeItems] = useState<GradeItem[]>([
    { id: "1", name: "Homework & Quizzes", score: "94", weight: "25" },
    { id: "2", name: "Midterm 1", score: "86", weight: "20" },
    { id: "3", name: "Midterm 2", score: "89", weight: "20" },
    { id: "4", name: "Term Paper", score: "92", weight: "15" },
  ]);
  const [targetGrade, setTargetGrade] = useState<string>("90");

  // Mode 4: Average Atomic Mass State
  const [isotopes, setIsotopes] = useState<IsotopeItem[]>([
    { id: "1", name: "Chlorine-35 (³⁵Cl)", mass: "34.9689", abundance: "75.78" },
    { id: "2", name: "Chlorine-37 (³⁷Cl)", mass: "36.9659", abundance: "24.22" },
  ]);

  // --- Calculations for Mode 1: Simple Average ---
  const parseSimpleNumbers = (): number[] => {
    return simpleInput
      .split(/[\s,;]+/)
      .map((str) => str.trim())
      .filter((str) => str !== "")
      .map((str) => Number(str))
      .filter((num) => !isNaN(num));
  };

  const simpleNumbers = parseSimpleNumbers();
  const simpleCount = simpleNumbers.length;
  const simpleSum = simpleNumbers.reduce((acc, curr) => acc + curr, 0);
  const simpleMean = simpleCount > 0 ? simpleSum / simpleCount : 0;

  // Median
  let simpleMedian = 0;
  if (simpleCount > 0) {
    const sorted = [...simpleNumbers].sort((a, b) => a - b);
    const mid = Math.floor(simpleCount / 2);
    simpleMedian =
      simpleCount % 2 !== 0
        ? sorted[mid]
        : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  // Mode
  let simpleMode: string = "None";
  if (simpleCount > 0) {
    const freq: Record<number, number> = {};
    let maxFreq = 0;
    simpleNumbers.forEach((n) => {
      freq[n] = (freq[n] || 0) + 1;
      if (freq[n] > maxFreq) maxFreq = freq[n];
    });

    if (maxFreq > 1) {
      const modes = Object.keys(freq)
        .map(Number)
        .filter((n) => freq[n] === maxFreq);
      if (modes.length === simpleCount) {
        simpleMode = "None (All Unique)";
      } else {
        simpleMode = modes.join(", ");
      }
    } else {
      simpleMode = "None (All Unique)";
    }
  }

  // Min, Max, Range
  const simpleMin = simpleCount > 0 ? Math.min(...simpleNumbers) : 0;
  const simpleMax = simpleCount > 0 ? Math.max(...simpleNumbers) : 0;
  const simpleRange = simpleCount > 0 ? simpleMax - simpleMin : 0;

  // Sample Standard Deviation
  let sampleStdDev = 0;
  if (simpleCount > 1) {
    const variance =
      simpleNumbers.reduce((acc, curr) => acc + Math.pow(curr - simpleMean, 2), 0) /
      (simpleCount - 1);
    sampleStdDev = Math.sqrt(variance);
  }

  // Geometric Mean (only positive numbers)
  const allPositive = simpleNumbers.every((n) => n > 0);
  let geometricMean = 0;
  if (simpleCount > 0 && allPositive) {
    const logSum = simpleNumbers.reduce((acc, curr) => acc + Math.log(curr), 0);
    geometricMean = Math.exp(logSum / simpleCount);
  }

  // --- Calculations for Mode 2: Weighted Average ---
  let totalWeightedProduct = 0;
  let totalWeight = 0;
  weightedItems.forEach((item) => {
    const val = parseFloat(item.value);
    const wt = parseFloat(item.weight);
    if (!isNaN(val) && !isNaN(wt) && wt >= 0) {
      totalWeightedProduct += val * wt;
      totalWeight += wt;
    }
  });
  const weightedAverage = totalWeight > 0 ? totalWeightedProduct / totalWeight : 0;

  // --- Calculations for Mode 3: Grade Average ---
  let completedGradeProduct = 0;
  let completedWeight = 0;
  gradeItems.forEach((item) => {
    const scr = parseFloat(item.score);
    const wt = parseFloat(item.weight);
    if (!isNaN(scr) && !isNaN(wt) && wt >= 0) {
      completedGradeProduct += scr * wt;
      completedWeight += wt;
    }
  });

  const currentGradePercent =
    completedWeight > 0 ? completedGradeProduct / completedWeight : 0;
  const remainingWeight = Math.max(0, 100 - completedWeight);
  const targetGradeNum = parseFloat(targetGrade) || 90;

  // Needed on final: (Target * 100 - completedGradeProduct) / remainingWeight
  const neededOnFinal =
    remainingWeight > 0
      ? (targetGradeNum * 100 - completedGradeProduct) / remainingWeight
      : 0;

  const getLetterGrade = (pct: number) => {
    if (pct >= 93) return "A";
    if (pct >= 90) return "A-";
    if (pct >= 87) return "B+";
    if (pct >= 83) return "B";
    if (pct >= 80) return "B-";
    if (pct >= 77) return "C+";
    if (pct >= 73) return "C";
    if (pct >= 70) return "C-";
    if (pct >= 67) return "D+";
    if (pct >= 60) return "D";
    return "F";
  };

  // --- Calculations for Mode 4: Average Atomic Mass ---
  let totalAbundance = 0;
  let totalAtomicMassContribution = 0;
  isotopes.forEach((iso) => {
    const m = parseFloat(iso.mass);
    const ab = parseFloat(iso.abundance);
    if (!isNaN(m) && !isNaN(ab)) {
      totalAbundance += ab;
      totalAtomicMassContribution += m * ab;
    }
  });
  const averageAtomicMass =
    totalAbundance > 0 ? totalAtomicMassContribution / totalAbundance : 0;

  return (
    <div className="calc-surface">
      {/* Mode Navigation Tabs */}
      <div className="calc-tabs" role="tablist" aria-label="Average Calculation Modes">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "simple"}
          className={`calc-tab-btn ${mode === "simple" ? "active" : ""}`}
          onClick={() => setMode("simple")}
        >
          Simple Average (Mean)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "weighted"}
          className={`calc-tab-btn ${mode === "weighted" ? "active" : ""}`}
          onClick={() => setMode("weighted")}
        >
          Weighted Average
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "grade"}
          className={`calc-tab-btn ${mode === "grade" ? "active" : ""}`}
          onClick={() => setMode("grade")}
        >
          Grade &amp; GPA Average
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "atomic"}
          className={`calc-tab-btn ${mode === "atomic" ? "active" : ""}`}
          onClick={() => setMode("atomic")}
        >
          Atomic Mass Average
        </button>
      </div>

      <div className="calc-grid">
        {/* =========================================================================
            MODE 1: SIMPLE AVERAGE
           ========================================================================= */}
        {mode === "simple" && (
          <div className="calc-form">
            <h2 className="calc-heading">Calculate Arithmetic Average (Mean)</h2>
            <p className="calc-subheading">
              Enter numbers separated by commas, spaces, or lines. Get instant mean, median, mode, sum, and range.
            </p>

            <div className="abv-field">
              <label htmlFor={simpleInputId} className="abv-label">
                Data Set (Numbers)
              </label>
              <textarea
                id={simpleInputId}
                rows={4}
                value={simpleInput}
                onChange={(e) => setSimpleInput(e.target.value)}
                placeholder="e.g. 12, 18, 25, 30, 42 or paste a column of numbers"
                style={{
                  width: "100%",
                  padding: "0.85rem 1rem",
                  fontSize: "1.05rem",
                  fontFamily: "inherit",
                  borderRadius: "0.85rem",
                  border: "1.5px solid var(--line)",
                  background: "#ffffff",
                  color: "#09090b",
                  lineHeight: "1.5",
                  resize: "vertical",
                }}
              />
              <span className="abv-help">
                Accepts positive &amp; negative numbers, decimals, and whole integers.
              </span>
            </div>

            {/* Quick Presets */}
            <div style={{ marginTop: "1rem" }}>
              <span className="abv-label" style={{ display: "block", marginBottom: "0.45rem", fontSize: "0.8rem" }}>
                Quick Example Sets:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                <button
                  type="button"
                  className="tip-btn"
                  onClick={() => setSimpleInput("85, 92, 78, 90, 88")}
                >
                  Test Scores (85, 92...)
                </button>
                <button
                  type="button"
                  className="tip-btn"
                  onClick={() => setSimpleInput("68, 72, 75, 71, 74, 79, 73")}
                >
                  Daily Temps (°F)
                </button>
                <button
                  type="button"
                  className="tip-btn"
                  onClick={() => setSimpleInput("1500, 2200, 1850, 2900, 3100, 1950")}
                >
                  Monthly Sales ($)
                </button>
                <button
                  type="button"
                  className="tip-btn"
                  onClick={() => setSimpleInput("")}
                  style={{ color: "#ef4444" }}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            MODE 2: WEIGHTED AVERAGE
           ========================================================================= */}
        {mode === "weighted" && (
          <div className="calc-form">
            <h2 className="calc-heading">Calculate Weighted Average</h2>
            <p className="calc-subheading">
              Calculate weighted mean when certain values hold more relative importance, percentage, or volume.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {weightedItems.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr 1fr auto",
                    gap: "0.5rem",
                    alignItems: "center",
                    background: "#f8fafc",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Item {index + 1}
                    </label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => {
                        const updated = [...weightedItems];
                        updated[index].name = e.target.value;
                        setWeightedItems(updated);
                      }}
                      placeholder={`Item ${index + 1}`}
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Value (x)
                    </label>
                    <input
                      type="number"
                      step="any"
                      value={item.value}
                      onChange={(e) => {
                        const updated = [...weightedItems];
                        updated[index].value = e.target.value;
                        setWeightedItems(updated);
                      }}
                      placeholder="e.g. 85"
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Weight (w)
                    </label>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      value={item.weight}
                      onChange={(e) => {
                        const updated = [...weightedItems];
                        updated[index].weight = e.target.value;
                        setWeightedItems(updated);
                      }}
                      placeholder="e.g. 20"
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div style={{ paddingTop: "1.1rem" }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (weightedItems.length > 1) {
                          setWeightedItems(weightedItems.filter((_, i) => i !== index));
                        }
                      }}
                      disabled={weightedItems.length <= 1}
                      title="Remove Row"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: weightedItems.length <= 1 ? "#cbd5e1" : "#ef4444",
                        fontSize: "1.15rem",
                        cursor: weightedItems.length <= 1 ? "not-allowed" : "pointer",
                        padding: "0.2rem 0.4rem",
                      }}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <button
                type="button"
                className="button button--ghost button--sm"
                onClick={() =>
                  setWeightedItems([
                    ...weightedItems,
                    {
                      id: Date.now().toString(),
                      name: `Item ${weightedItems.length + 1}`,
                      value: "",
                      weight: "",
                    },
                  ])
                }
              >
                + Add Another Row
              </button>
              <button
                type="button"
                className="tip-btn"
                onClick={() =>
                  setWeightedItems([
                    { id: "1", name: "Stock A (100 shares)", value: "50", weight: "100" },
                    { id: "2", name: "Stock B (200 shares)", value: "65", weight: "200" },
                    { id: "3", name: "Stock C (50 shares)", value: "80", weight: "50" },
                  ])
                }
              >
                Preset: Stock Portfolio
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            MODE 3: GRADE AVERAGE CALCULATOR
           ========================================================================= */}
        {mode === "grade" && (
          <div className="calc-form">
            <h2 className="calc-heading">Calculate Grade &amp; Final Exam Target</h2>
            <p className="calc-subheading">
              Compute your current weighted course grade and calculate the exact exam score needed for an A, B, or C.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {gradeItems.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr 1fr auto",
                    gap: "0.5rem",
                    alignItems: "center",
                    background: "#f8fafc",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Category / Assignment
                    </label>
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => {
                        const updated = [...gradeItems];
                        updated[index].name = e.target.value;
                        setGradeItems(updated);
                      }}
                      placeholder={`Assignment ${index + 1}`}
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Score Earned (%)
                    </label>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      value={item.score}
                      onChange={(e) => {
                        const updated = [...gradeItems];
                        updated[index].score = e.target.value;
                        setGradeItems(updated);
                      }}
                      placeholder="e.g. 92"
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Weight (% of Total)
                    </label>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      max="100"
                      value={item.weight}
                      onChange={(e) => {
                        const updated = [...gradeItems];
                        updated[index].weight = e.target.value;
                        setGradeItems(updated);
                      }}
                      placeholder="e.g. 25"
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div style={{ paddingTop: "1.1rem" }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (gradeItems.length > 1) {
                          setGradeItems(gradeItems.filter((_, i) => i !== index));
                        }
                      }}
                      disabled={gradeItems.length <= 1}
                      title="Remove Row"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: gradeItems.length <= 1 ? "#cbd5e1" : "#ef4444",
                        fontSize: "1.15rem",
                        cursor: gradeItems.length <= 1 ? "not-allowed" : "pointer",
                        padding: "0.2rem 0.4rem",
                      }}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
              <button
                type="button"
                className="button button--ghost button--sm"
                onClick={() =>
                  setGradeItems([
                    ...gradeItems,
                    {
                      id: Date.now().toString(),
                      name: `Assignment ${gradeItems.length + 1}`,
                      score: "",
                      weight: "",
                    },
                  ])
                }
              >
                + Add Assignment
              </button>
            </div>

            {/* Target Grade Solver */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem 1.25rem",
                background: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: "0.85rem",
              }}
            >
              <label
                htmlFor="target-grade-input"
                className="abv-label"
                style={{ color: "#9a3412", display: "block", marginBottom: "0.35rem" }}
              >
                Desired Final Course Grade (%)
              </label>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <input
                  id="target-grade-input"
                  type="number"
                  min="0"
                  max="100"
                  step="0.5"
                  value={targetGrade}
                  onChange={(e) => setTargetGrade(e.target.value)}
                  style={{ width: "120px", padding: "0.45rem 0.65rem" }}
                />
                <div style={{ display: "flex", gap: "0.35rem" }}>
                  <button
                    type="button"
                    className={`tip-btn ${targetGrade === "90" ? "is-active" : ""}`}
                    onClick={() => setTargetGrade("90")}
                  >
                    A (90%)
                  </button>
                  <button
                    type="button"
                    className={`tip-btn ${targetGrade === "80" ? "is-active" : ""}`}
                    onClick={() => setTargetGrade("80")}
                  >
                    B (80%)
                  </button>
                  <button
                    type="button"
                    className={`tip-btn ${targetGrade === "70" ? "is-active" : ""}`}
                    onClick={() => setTargetGrade("70")}
                  >
                    C (70%)
                  </button>
                </div>
              </div>
              <span style={{ fontSize: "0.82rem", color: "#18181b", display: "block", marginTop: "0.35rem" }}>
                Remaining weight to be determined on Final Exam:{" "}
                <strong>{remainingWeight.toFixed(1)}%</strong>
              </span>
            </div>
          </div>
        )}

        {/* =========================================================================
            MODE 4: ATOMIC MASS AVERAGE CALCULATOR
           ========================================================================= */}
        {mode === "atomic" && (
          <div className="calc-form">
            <h2 className="calc-heading">Calculate Average Atomic Mass</h2>
            <p className="calc-subheading">
              Determine the weighted atomic mass of an element from its naturally occurring isotopes and abundances.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {isotopes.map((iso, index) => (
                <div
                  key={iso.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1fr 1fr auto",
                    gap: "0.5rem",
                    alignItems: "center",
                    background: "#f8fafc",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Isotope Name
                    </label>
                    <input
                      type="text"
                      value={iso.name}
                      onChange={(e) => {
                        const updated = [...isotopes];
                        updated[index].name = e.target.value;
                        setIsotopes(updated);
                      }}
                      placeholder={`Isotope ${index + 1}`}
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Mass (amu)
                    </label>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      value={iso.mass}
                      onChange={(e) => {
                        const updated = [...isotopes];
                        updated[index].mass = e.target.value;
                        setIsotopes(updated);
                      }}
                      placeholder="e.g. 34.9689"
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Abundance (%)
                    </label>
                    <input
                      type="number"
                      step="any"
                      min="0"
                      max="100"
                      value={iso.abundance}
                      onChange={(e) => {
                        const updated = [...isotopes];
                        updated[index].abundance = e.target.value;
                        setIsotopes(updated);
                      }}
                      placeholder="e.g. 75.78"
                      style={{ fontSize: "0.9rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>
                  <div style={{ paddingTop: "1.1rem" }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (isotopes.length > 1) {
                          setIsotopes(isotopes.filter((_, i) => i !== index));
                        }
                      }}
                      disabled={isotopes.length <= 1}
                      title="Remove Isotope"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: isotopes.length <= 1 ? "#cbd5e1" : "#ef4444",
                        fontSize: "1.15rem",
                        cursor: isotopes.length <= 1 ? "not-allowed" : "pointer",
                        padding: "0.2rem 0.4rem",
                      }}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
              <button
                type="button"
                className="button button--ghost button--sm"
                onClick={() =>
                  setIsotopes([
                    ...isotopes,
                    {
                      id: Date.now().toString(),
                      name: `Isotope ${isotopes.length + 1}`,
                      mass: "",
                      abundance: "",
                    },
                  ])
                }
              >
                + Add Isotope
              </button>
              <button
                type="button"
                className="tip-btn"
                onClick={() =>
                  setIsotopes([
                    { id: "1", name: "Carbon-12 (¹²C)", mass: "12.0000", abundance: "98.93" },
                    { id: "2", name: "Carbon-13 (¹³C)", mass: "13.0034", abundance: "1.07" },
                  ])
                }
              >
                Preset: Carbon (C)
              </button>
              <button
                type="button"
                className="tip-btn"
                onClick={() =>
                  setIsotopes([
                    { id: "1", name: "Boron-10 (¹⁰B)", mass: "10.0129", abundance: "19.9" },
                    { id: "2", name: "Boron-11 (¹¹B)", mass: "11.0093", abundance: "80.1" },
                  ])
                }
              >
                Preset: Boron (B)
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            RESULTS PANEL
           ========================================================================= */}
        <div className="calc-result-box" aria-live="polite">
          {/* MODE 1 RESULT DISPLAY */}
          {mode === "simple" && (
            <div>
              <span className="calc-result-label">Arithmetic Mean (Average)</span>
              <div className="calc-result-value">
                {simpleCount > 0 ? simpleMean.toFixed(2) : "--"}
              </div>
              <span style={{ fontSize: "0.85rem", color: "#cbd5e1", display: "block", marginTop: "0.35rem" }}>
                {simpleCount > 0
                  ? `Computed from ${simpleCount} data points (Sum = ${simpleSum.toLocaleString()})`
                  : "Enter numbers to compute mean"}
              </span>

              {simpleCount > 0 && (
                <div className="calc-result-summary-grid">
                  <div className="summary-row">
                    <span>Sum (∑x):</span>
                    <strong>{simpleSum.toLocaleString()}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Count (n):</span>
                    <strong>{simpleCount}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Median (Middle):</span>
                    <strong>{simpleMedian.toFixed(2)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Mode (Most Frequent):</span>
                    <strong>{simpleMode}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Range (Min to Max):</span>
                    <strong>
                      {simpleMin} to {simpleMax} (&Delta; {simpleRange})
                    </strong>
                  </div>
                  {simpleCount > 1 && (
                    <div className="summary-row">
                      <span>Sample Std. Dev (s):</span>
                      <strong>{sampleStdDev.toFixed(2)}</strong>
                    </div>
                  )}
                  {allPositive && (
                    <div className="summary-row">
                      <span>Geometric Mean:</span>
                      <strong>{geometricMean.toFixed(2)}</strong>
                    </div>
                  )}

                  <div className="summary-divider" />
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.82rem",
                      color: "#f8fafc",
                    }}
                  >
                    <strong>Formula Breakdown:</strong>
                    <div style={{ fontFamily: "monospace", marginTop: "0.25rem", color: "#fdba74" }}>
                      Mean = Sum ÷ Count = {simpleSum.toFixed(2)} ÷ {simpleCount} = {simpleMean.toFixed(2)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MODE 2 RESULT DISPLAY */}
          {mode === "weighted" && (
            <div>
              <span className="calc-result-label">Weighted Average</span>
              <div className="calc-result-value">
                {totalWeight > 0 ? weightedAverage.toFixed(2) : "--"}
              </div>
              <span style={{ fontSize: "0.85rem", color: "#cbd5e1", display: "block", marginTop: "0.35rem" }}>
                {totalWeight > 0
                  ? `Sum of Weights = ${totalWeight.toFixed(2)}`
                  : "Enter values and positive weights"}
              </span>

              {totalWeight > 0 && (
                <div className="calc-result-summary-grid">
                  <div className="summary-row">
                    <span>Total Weighted Product:</span>
                    <strong>{totalWeightedProduct.toFixed(2)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Total Weight Sum (∑w):</span>
                    <strong>{totalWeight.toFixed(2)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Number of Entries:</span>
                    <strong>{weightedItems.length}</strong>
                  </div>

                  <div className="summary-divider" />
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.82rem",
                      color: "#f8fafc",
                    }}
                  >
                    <strong>Weighted Formula:</strong>
                    <div style={{ fontFamily: "monospace", marginTop: "0.25rem", color: "#fdba74" }}>
                      ∑(w·x) ÷ ∑w = {totalWeightedProduct.toFixed(2)} ÷ {totalWeight.toFixed(2)} ={" "}
                      {weightedAverage.toFixed(2)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MODE 3 RESULT DISPLAY */}
          {mode === "grade" && (
            <div>
              <span className="calc-result-label">Current Weighted Grade</span>
              <div className="calc-result-value">
                {completedWeight > 0 ? `${currentGradePercent.toFixed(1)}%` : "--"}
              </div>
              <span style={{ fontSize: "0.85rem", color: "#cbd5e1", display: "block", marginTop: "0.35rem" }}>
                {completedWeight > 0
                  ? `Letter Grade: ${getLetterGrade(currentGradePercent)} (${completedWeight.toFixed(1)}% of syllabus completed)`
                  : "Enter assignments and weights"}
              </span>

              {completedWeight > 0 && (
                <div className="calc-result-summary-grid">
                  <div className="summary-row">
                    <span>Completed Syllabus Weight:</span>
                    <strong>{completedWeight.toFixed(1)}%</strong>
                  </div>
                  <div className="summary-row">
                    <span>Remaining Final Weight:</span>
                    <strong>{remainingWeight.toFixed(1)}%</strong>
                  </div>

                  <div className="summary-divider" />

                  {remainingWeight > 0 ? (
                    <div
                      style={{
                        background:
                          neededOnFinal <= 100
                            ? "rgba(74, 222, 128, 0.12)"
                            : "rgba(239, 68, 68, 0.12)",
                        border: `1px solid ${
                          neededOnFinal <= 100 ? "#4ade80" : "#ef4444"
                        }`,
                        padding: "0.85rem",
                        borderRadius: "0.65rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          fontWeight: 700,
                          color: neededOnFinal <= 100 ? "#4ade80" : "#f87171",
                          display: "block",
                          marginBottom: "0.2rem",
                        }}
                      >
                        Target Goal ({targetGrade}% - {getLetterGrade(targetGradeNum)})
                      </span>
                      <div
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 700,
                          color: neededOnFinal <= 100 ? "#4ade80" : "#f87171",
                        }}
                      >
                        Score Needed: {neededOnFinal.toFixed(1)}%
                      </div>
                      <p style={{ fontSize: "0.78rem", color: "#cbd5e1", margin: "0.3rem 0 0" }}>
                        {neededOnFinal <= 0
                          ? "You have already secured this grade even with a 0% on the final!"
                          : neededOnFinal <= 100
                          ? `You need at least ${neededOnFinal.toFixed(1)}% on the remaining ${remainingWeight.toFixed(1)}% final coursework.`
                          : `Math alert: Even with 100% on the final, max possible grade is ${(
                              (completedGradeProduct + 100 * remainingWeight) /
                              100
                            ).toFixed(1)}%.`}
                      </p>
                    </div>
                  ) : (
                    <div style={{ fontSize: "0.85rem", color: "#4ade80" }}>
                      100% of coursework weights entered! Final Course Grade:{" "}
                      <strong>
                        {currentGradePercent.toFixed(2)}% ({getLetterGrade(currentGradePercent)})
                      </strong>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* MODE 4 RESULT DISPLAY */}
          {mode === "atomic" && (
            <div>
              <span className="calc-result-label">Average Atomic Mass</span>
              <div className="calc-result-value">
                {totalAbundance > 0 ? averageAtomicMass.toFixed(4) : "--"}
                <span style={{ fontSize: "1.2rem", marginLeft: "0.35rem", color: "#fdba74" }}>
                  amu
                </span>
              </div>
              <span style={{ fontSize: "0.85rem", color: "#cbd5e1", display: "block", marginTop: "0.35rem" }}>
                {totalAbundance > 0
                  ? `Total Abundance accounted for: ${totalAbundance.toFixed(2)}%`
                  : "Enter isotope masses and abundances"}
              </span>

              {totalAbundance > 0 && (
                <div className="calc-result-summary-grid">
                  <div className="summary-row">
                    <span>Number of Isotopes:</span>
                    <strong>{isotopes.length}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Total Abundance Sum:</span>
                    <strong>{totalAbundance.toFixed(2)}%</strong>
                  </div>

                  <div className="summary-divider" />
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.82rem",
                      color: "#f8fafc",
                    }}
                  >
                    <strong>Atomic Mass Equation:</strong>
                    <div style={{ fontFamily: "monospace", marginTop: "0.25rem", color: "#fdba74" }}>
                      ∑(Mass &times; %Abundance) ÷ 100 = {averageAtomicMass.toFixed(4)} amu
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
