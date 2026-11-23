"use client";

import { useId, useState } from "react";

type Mode = "what-is" | "what-percent" | "change" | "add-subtract";

export function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("what-is");

  // Mode 1: What is X% of Y?
  const [pct1, setPct1] = useState<string>("15");
  const [val1, setVal1] = useState<string>("200");

  // Mode 2: X is what percent of Y?
  const [part2, setPart2] = useState<string>("45");
  const [total2, setTotal2] = useState<string>("180");

  // Mode 3: Percentage Change
  const [initial3, setInitial3] = useState<string>("50");
  const [final3, setFinal3] = useState<string>("75");

  // Mode 4: Add / Subtract Percentage
  const [base4, setBase4] = useState<string>("100");
  const [pct4, setPct4] = useState<string>("8.25");
  const [op4, setOp4] = useState<"add" | "subtract">("add");

  const p1Id = useId();
  const v1Id = useId();
  const p2Id = useId();
  const t2Id = useId();
  const i3Id = useId();
  const f3Id = useId();
  const b4Id = useId();
  const p4Id = useId();

  // Mode 1 calculation
  const numPct1 = parseFloat(pct1);
  const numVal1 = parseFloat(val1);
  const res1 =
    !isNaN(numPct1) && !isNaN(numVal1) ? (numPct1 / 100) * numVal1 : null;

  // Mode 2 calculation
  const numPart2 = parseFloat(part2);
  const numTotal2 = parseFloat(total2);
  const res2 =
    !isNaN(numPart2) && !isNaN(numTotal2) && numTotal2 !== 0
      ? (numPart2 / numTotal2) * 100
      : null;

  // Mode 3 calculation
  const numInit3 = parseFloat(initial3);
  const numFinal3 = parseFloat(final3);
  const diff3 = !isNaN(numInit3) && !isNaN(numFinal3) ? numFinal3 - numInit3 : null;
  const pctChange3 =
    diff3 !== null && numInit3 !== 0 ? (diff3 / Math.abs(numInit3)) * 100 : null;

  // Mode 4 calculation
  const numBase4 = parseFloat(base4);
  const numPct4 = parseFloat(pct4);
  const delta4 =
    !isNaN(numBase4) && !isNaN(numPct4) ? (numPct4 / 100) * numBase4 : null;
  const res4 =
    numBase4 !== null && delta4 !== null
      ? op4 === "add"
        ? numBase4 + delta4
        : numBase4 - delta4
      : null;

  return (
    <div className="percentage-calc-wrapper">
      {/* Mode Navigation Tabs */}
      <div className="calc-tabs" role="tablist" aria-label="Percentage calculation mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === "what-is"}
          className={`calc-tab ${mode === "what-is" ? "is-active" : ""}`}
          onClick={() => setMode("what-is")}
        >
          X% of Y
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "what-percent"}
          className={`calc-tab ${mode === "what-percent" ? "is-active" : ""}`}
          onClick={() => setMode("what-percent")}
        >
          X is what % of Y
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "change"}
          className={`calc-tab ${mode === "change" ? "is-active" : ""}`}
          onClick={() => setMode("change")}
        >
          Percentage Change
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === "add-subtract"}
          className={`calc-tab ${mode === "add-subtract" ? "is-active" : ""}`}
          onClick={() => setMode("add-subtract")}
        >
          Add / Subtract %
        </button>
      </div>

      {/* Mode 1: What is X% of Y? */}
      {mode === "what-is" && (
        <div className="calc-panel-grid">
          <div className="calc-surface">
            <h2 className="calc-heading">Calculate a Percentage of a Number</h2>
            <p className="calc-subheading">
              Find the exact numerical portion represented by a given percentage.
            </p>

            <div className="form-group">
              <label htmlFor={p1Id}>Percentage (%)</label>
              <div className="input-group">
                <input
                  id={p1Id}
                  type="number"
                  step="any"
                  value={pct1}
                  onChange={(e) => setPct1(e.target.value)}
                  placeholder="e.g. 15"
                />
                <span className="input-affix">%</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor={v1Id}>Of Total Number</label>
              <input
                id={v1Id}
                type="number"
                step="any"
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
                placeholder="e.g. 200"
              />
            </div>
          </div>

          <div className="calc-result-box">
            <span className="calc-result-label">Result</span>
            <div className="calc-result-value">
              {res1 !== null ? res1.toLocaleString("en-US", { maximumFractionDigits: 4 }) : "—"}
            </div>
            {res1 !== null && (
              <div className="calc-result-details">
                <p>
                  <strong>{pct1}%</strong> of <strong>{val1}</strong> is{" "}
                  <strong>{res1.toLocaleString("en-US", { maximumFractionDigits: 4 })}</strong>.
                </p>
                <code className="calc-formula-pill">
                  ({pct1} ÷ 100) × {val1} = {res1.toFixed(2)}
                </code>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mode 2: X is what % of Y? */}
      {mode === "what-percent" && (
        <div className="calc-panel-grid">
          <div className="calc-surface">
            <h2 className="calc-heading">Find What Percentage One Number Is of Another</h2>
            <p className="calc-subheading">
              Calculate the percentage ratio of a part compared to a whole.
            </p>

            <div className="form-group">
              <label htmlFor={p2Id}>Part Value (X)</label>
              <input
                id={p2Id}
                type="number"
                step="any"
                value={part2}
                onChange={(e) => setPart2(e.target.value)}
                placeholder="e.g. 45"
              />
            </div>

            <div className="form-group">
              <label htmlFor={t2Id}>Whole / Total Value (Y)</label>
              <input
                id={t2Id}
                type="number"
                step="any"
                value={total2}
                onChange={(e) => setTotal2(e.target.value)}
                placeholder="e.g. 180"
              />
            </div>
          </div>

          <div className="calc-result-box">
            <span className="calc-result-label">Percentage Ratio</span>
            <div className="calc-result-value">
              {res2 !== null ? `${res2.toFixed(2)}%` : "—"}
            </div>
            {res2 !== null && (
              <div className="calc-result-details">
                <p>
                  <strong>{part2}</strong> is <strong>{res2.toFixed(2)}%</strong> of{" "}
                  <strong>{total2}</strong>.
                </p>
                <code className="calc-formula-pill">
                  ({part2} ÷ {total2}) × 100 = {res2.toFixed(2)}%
                </code>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mode 3: Percentage Change */}
      {mode === "change" && (
        <div className="calc-panel-grid">
          <div className="calc-surface">
            <h2 className="calc-heading">Calculate Percentage Increase or Decrease</h2>
            <p className="calc-subheading">
              Compare two values to find the rate of growth or reduction.
            </p>

            <div className="form-group">
              <label htmlFor={i3Id}>Initial / Starting Value</label>
              <input
                id={i3Id}
                type="number"
                step="any"
                value={initial3}
                onChange={(e) => setInitial3(e.target.value)}
                placeholder="e.g. 50"
              />
            </div>

            <div className="form-group">
              <label htmlFor={f3Id}>Final / New Value</label>
              <input
                id={f3Id}
                type="number"
                step="any"
                value={final3}
                onChange={(e) => setFinal3(e.target.value)}
                placeholder="e.g. 75"
              />
            </div>
          </div>

          <div className="calc-result-box">
            <span className="calc-result-label">Percentage Change</span>
            <div
              className="calc-result-value"
              style={{
                color: pctChange3 !== null && pctChange3 > 0 ? "#4ade80" : pctChange3 !== null && pctChange3 < 0 ? "#f87171" : "#fb923c"
              }}
            >
              {pctChange3 !== null
                ? `${pctChange3 >= 0 ? "+" : ""}${pctChange3.toFixed(2)}%`
                : "—"}
            </div>
            {pctChange3 !== null && diff3 !== null && (
              <div className="calc-result-details">
                <p>
                  {pctChange3 >= 0 ? "Increase" : "Decrease"} of{" "}
                  <strong>{Math.abs(pctChange3).toFixed(2)}%</strong> (absolute difference:{" "}
                  <strong>{diff3 >= 0 ? `+${diff3}` : diff3}</strong>).
                </p>
                <code className="calc-formula-pill">
                  (({final3} - {initial3}) ÷ {initial3}) × 100 ={" "}
                  {pctChange3 >= 0 ? `+${pctChange3.toFixed(2)}%` : `${pctChange3.toFixed(2)}%`}
                </code>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mode 4: Add / Subtract Percentage */}
      {mode === "add-subtract" && (
        <div className="calc-panel-grid">
          <div className="calc-surface">
            <h2 className="calc-heading">Add or Subtract a Percentage (Tax &amp; Discount)</h2>
            <p className="calc-subheading">
              Quickly calculate sales tax additions or retail discounts.
            </p>

            <div className="form-group">
              <label htmlFor={b4Id}>Base Amount ($)</label>
              <input
                id={b4Id}
                type="number"
                step="any"
                value={base4}
                onChange={(e) => setBase4(e.target.value)}
                placeholder="e.g. 100"
              />
            </div>

            <div className="form-group">
              <label>Operation</label>
              <div className="abv-toggle" role="radiogroup" aria-label="Operation">
                <button
                  type="button"
                  role="radio"
                  aria-checked={op4 === "add"}
                  className={op4 === "add" ? "is-active" : undefined}
                  onClick={() => setOp4("add")}
                >
                  + Add % (Tax / Tip)
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={op4 === "subtract"}
                  className={op4 === "subtract" ? "is-active" : undefined}
                  onClick={() => setOp4("subtract")}
                >
                  − Subtract % (Discount)
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor={p4Id}>Percentage (%)</label>
              <div className="input-group">
                <input
                  id={p4Id}
                  type="number"
                  step="any"
                  value={pct4}
                  onChange={(e) => setPct4(e.target.value)}
                  placeholder="e.g. 8.25"
                />
                <span className="input-affix">%</span>
              </div>
            </div>
          </div>

          <div className="calc-result-box">
            <span className="calc-result-label">
              {op4 === "add" ? "Total After Adding Percentage" : "Total After Discount"}
            </span>
            <div className="calc-result-value">
              {res4 !== null ? `$${res4.toFixed(2)}` : "—"}
            </div>
            {res4 !== null && delta4 !== null && (
              <div className="calc-result-details">
                <p>
                  {op4 === "add" ? "Added amount" : "Discount savings"}:{" "}
                  <strong>${delta4.toFixed(2)}</strong> ({pct4}% of ${base4}).
                </p>
                <code className="calc-formula-pill">
                  ${base4} {op4 === "add" ? "+" : "−"} ${delta4.toFixed(2)} = ${res4.toFixed(2)}
                </code>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
