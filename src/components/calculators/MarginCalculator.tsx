"use client";

import { useId, useMemo, useState } from "react";

type MarginMode = "cost-revenue" | "cost-margin" | "cost-markup";

export function MarginCalculator() {
  const [mode, setMode] = useState<MarginMode>("cost-revenue");
  const [cost, setCost] = useState<string>("60.00");
  const [revenue, setRevenue] = useState<string>("100.00");
  const [targetMargin, setTargetMargin] = useState<string>("40");
  const [targetMarkup, setTargetMarkup] = useState<string>("66.67");

  const costId = useId();
  const revenueId = useId();
  const targetMarginId = useId();
  const targetMarkupId = useId();

  const results = useMemo(() => {
    const c = parseFloat(cost);
    if (isNaN(c) || c < 0) return null;

    let computedRevenue = 0;
    let computedProfit = 0;
    let computedMargin = 0;
    let computedMarkup = 0;

    if (mode === "cost-revenue") {
      const r = parseFloat(revenue);
      if (isNaN(r) || r < 0) return null;
      computedRevenue = r;
      computedProfit = r - c;
      computedMargin = r > 0 ? (computedProfit / r) * 100 : 0;
      computedMarkup = c > 0 ? (computedProfit / c) * 100 : 0;
    } else if (mode === "cost-margin") {
      const m = parseFloat(targetMargin);
      if (isNaN(m) || m >= 100 || m < 0) return null;
      // Revenue = Cost / (1 - Margin/100)
      computedRevenue = c / (1 - m / 100);
      computedProfit = computedRevenue - c;
      computedMargin = m;
      computedMarkup = c > 0 ? (computedProfit / c) * 100 : 0;
    } else if (mode === "cost-markup") {
      const mu = parseFloat(targetMarkup);
      if (isNaN(mu) || mu < 0) return null;
      // Revenue = Cost * (1 + Markup/100)
      computedRevenue = c * (1 + mu / 100);
      computedProfit = computedRevenue - c;
      computedMarkup = mu;
      computedMargin = computedRevenue > 0 ? (computedProfit / computedRevenue) * 100 : 0;
    }

    return {
      cost: c,
      revenue: computedRevenue,
      profit: computedProfit,
      margin: computedMargin,
      markup: computedMarkup,
    };
  }, [mode, cost, revenue, targetMargin, targetMarkup]);

  return (
    <div className="abv-calculator">
      <div className="abv-calculator__panel">
        <div className="abv-field" style={{ gridColumn: "1 / -1" }}>
          <label className="abv-label">Calculation Goal</label>
          <div className="calc-tabs">
            <button
              type="button"
              className={`calc-tab-btn ${mode === "cost-revenue" ? "active" : ""}`}
              onClick={() => setMode("cost-revenue")}
            >
              Cost & Selling Price
            </button>
            <button
              type="button"
              className={`calc-tab-btn ${mode === "cost-margin" ? "active" : ""}`}
              onClick={() => setMode("cost-margin")}
            >
              Cost + Target Margin %
            </button>
            <button
              type="button"
              className={`calc-tab-btn ${mode === "cost-markup" ? "active" : ""}`}
              onClick={() => setMode("cost-markup")}
            >
              Cost + Target Markup %
            </button>
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={costId} className="abv-label">
            Cost of Goods Sold (COGS) ($)
          </label>
          <div className="input-group">
            <span className="input-affix">$</span>
            <input
              id={costId}
              type="number"
              min="0"
              step="0.01"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="60.00"
            />
          </div>
        </div>

        {mode === "cost-revenue" && (
          <div className="abv-field">
            <label htmlFor={revenueId} className="abv-label">
              Selling Price / Revenue ($)
            </label>
            <div className="input-group">
              <span className="input-affix">$</span>
              <input
                id={revenueId}
                type="number"
                min="0"
                step="0.01"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                placeholder="100.00"
              />
            </div>
          </div>
        )}

        {mode === "cost-margin" && (
          <div className="abv-field">
            <label htmlFor={targetMarginId} className="abv-label">
              Target Gross Margin (%)
            </label>
            <div className="input-group">
              <input
                id={targetMarginId}
                type="number"
                min="0"
                max="99.9"
                step="0.5"
                value={targetMargin}
                onChange={(e) => setTargetMargin(e.target.value)}
                placeholder="40"
              />
              <span className="input-affix">%</span>
            </div>
            <span className="abv-help" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.35rem" }}>
              Gross profit percentage relative to total selling price.
            </span>
          </div>
        )}

        {mode === "cost-markup" && (
          <div className="abv-field">
            <label htmlFor={targetMarkupId} className="abv-label">
              Target Markup (%)
            </label>
            <div className="input-group">
              <input
                id={targetMarkupId}
                type="number"
                min="0"
                step="0.5"
                value={targetMarkup}
                onChange={(e) => setTargetMarkup(e.target.value)}
                placeholder="66.67"
              />
              <span className="input-affix">%</span>
            </div>
            <span className="abv-help" style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: "0.35rem" }}>
              Percentage added directly to cost to reach retail price.
            </span>
          </div>
        )}
      </div>

      <div className="abv-results">
        {results ? (
          <>
            <span className="abv-result-label">Gross Profit Amount</span>
            <div className="calc-result-value" style={{ color: results.profit >= 0 ? "#4ade80" : "#ef4444" }}>
              ${results.profit.toFixed(2)}
            </div>

            <div className="tip-split-summary" style={{ marginTop: "0.5rem" }}>
              <div className="tip-split-card" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.75rem", padding: "0.85rem", textAlign: "center" }}>
                <span className="abv-result-label">Gross Margin</span>
                <div className="tip-split-amount" style={{ color: "#fb923c", fontSize: "1.35rem", fontWeight: 850 }}>
                  {results.margin.toFixed(2)}%
                </div>
              </div>
              <div className="tip-split-card" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.75rem", padding: "0.85rem", textAlign: "center" }}>
                <span className="abv-result-label">Markup</span>
                <div className="tip-split-amount" style={{ color: "#fb923c", fontSize: "1.35rem", fontWeight: 850 }}>
                  {results.markup.toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="calc-result-details">
              <div className="summary-row">
                <span>Selling Price (Revenue):</span>
                <strong>${results.revenue.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Cost of Goods (COGS):</span>
                <strong>${results.cost.toFixed(2)}</strong>
              </div>
            </div>

            <div className="calc-formula-pill">
              Conversion: Margin {results.margin.toFixed(1)}% &harr; Markup {results.markup.toFixed(1)}%
            </div>
          </>
        ) : (
          <p className="abv-empty">Enter valid cost and price numbers to compute margin and markup.</p>
        )}
      </div>
    </div>
  );
}
