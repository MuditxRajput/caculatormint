"use client";

import { useId, useMemo, useState } from "react";

const DISCOUNT_PRESETS = [10, 15, 20, 25, 30, 40, 50, 75];

export function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState<string>("100.00");
  const [discountPercent, setDiscountPercent] = useState<string>("25");
  const [extraPercent, setExtraPercent] = useState<string>("0");
  const [taxPercent, setTaxPercent] = useState<string>("0");

  const originalPriceId = useId();
  const discountPercentId = useId();
  const extraPercentId = useId();
  const taxPercentId = useId();

  const results = useMemo(() => {
    const orig = parseFloat(originalPrice);
    const disc = parseFloat(discountPercent);
    const extra = parseFloat(extraPercent) || 0;
    const tax = parseFloat(taxPercent) || 0;

    if (isNaN(orig) || orig < 0) return null;
    const validDisc = isNaN(disc) ? 0 : Math.min(100, Math.max(0, disc));
    const validExtra = isNaN(extra) ? 0 : Math.min(100, Math.max(0, extra));
    const validTax = isNaN(tax) ? 0 : Math.max(0, tax);

    // Step 1: Primary discount
    const mainSavings = orig * (validDisc / 100);
    const priceAfterMain = orig - mainSavings;

    // Step 2: Extra discount on the reduced price
    const extraSavings = priceAfterMain * (validExtra / 100);
    const priceAfterExtra = priceAfterMain - extraSavings;

    // Total savings before tax
    const totalSavingsPreTax = mainSavings + extraSavings;
    const effectiveDiscountPercent = orig > 0 ? (totalSavingsPreTax / orig) * 100 : 0;

    // Step 3: Sales tax
    const taxAmount = priceAfterExtra * (validTax / 100);
    const finalPriceWithTax = priceAfterExtra + taxAmount;

    return {
      original: orig,
      mainSavings,
      priceAfterMain,
      extraSavings,
      priceAfterExtra,
      totalSavings: totalSavingsPreTax,
      effectiveDiscountPercent,
      taxAmount,
      finalPrice: finalPriceWithTax,
      hasExtra: validExtra > 0,
      hasTax: validTax > 0,
    };
  }, [originalPrice, discountPercent, extraPercent, taxPercent]);

  return (
    <div className="abv-calculator">
      <div className="abv-calculator__panel">
        <div className="abv-field">
          <label htmlFor={originalPriceId} className="abv-label">
            Original Price ($)
          </label>
          <div className="input-group">
            <span className="input-affix">$</span>
            <input
              id={originalPriceId}
              type="number"
              min="0"
              step="0.01"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="100.00"
            />
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={discountPercentId} className="abv-label">
            Primary Discount Rate (%)
          </label>
          <div className="input-group">
            <input
              id={discountPercentId}
              type="number"
              min="0"
              max="100"
              step="0.5"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              placeholder="25"
            />
            <span className="input-affix">%</span>
          </div>
          <div className="tip-preset-grid" style={{ marginTop: "0.6rem" }}>
            {DISCOUNT_PRESETS.map((pct) => (
              <button
                key={pct}
                type="button"
                className={`tip-preset-btn ${parseFloat(discountPercent) === pct ? "active" : ""}`}
                onClick={() => setDiscountPercent(pct.toString())}
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={extraPercentId} className="abv-label">
            Additional Discount / Coupon (%) <span style={{ fontWeight: 400, color: "#09090b" }}>(Optional)</span>
          </label>
          <div className="input-group">
            <input
              id={extraPercentId}
              type="number"
              min="0"
              max="100"
              step="0.5"
              value={extraPercent}
              onChange={(e) => setExtraPercent(e.target.value)}
              placeholder="e.g. 10 or 20"
            />
            <span className="input-affix">%</span>
          </div>
          <span className="abv-help" style={{ fontSize: "0.85rem", color: "#09090b", marginTop: "0.35rem" }}>
            Applied sequentially to the reduced price (e.g. Clearance Extra 20% Off).
          </span>
        </div>

        <div className="abv-field">
          <label htmlFor={taxPercentId} className="abv-label">
            Sales Tax (%) <span style={{ fontWeight: 400, color: "#09090b" }}>(Optional)</span>
          </label>
          <div className="input-group">
            <input
              id={taxPercentId}
              type="number"
              min="0"
              max="30"
              step="0.1"
              value={taxPercent}
              onChange={(e) => setTaxPercent(e.target.value)}
              placeholder="e.g. 8.25"
            />
            <span className="input-affix">%</span>
          </div>
        </div>
      </div>

      <div className="abv-results">
        {results ? (
          <>
            <span className="abv-result-label">Final Price to Pay</span>
            <div className="calc-result-value">
              ${results.finalPrice.toFixed(2)}
            </div>

            <div className="tip-split-summary" style={{ marginTop: "0.5rem" }}>
              <div className="tip-split-card" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.75rem", padding: "0.85rem", textAlign: "center" }}>
                <span className="abv-result-label">Total You Save</span>
                <div className="tip-split-amount" style={{ color: "#4ade80", fontSize: "1.35rem", fontWeight: 700 }}>
                  ${results.totalSavings.toFixed(2)}
                </div>
              </div>
              <div className="tip-split-card" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.75rem", padding: "0.85rem", textAlign: "center" }}>
                <span className="abv-result-label">Effective Off</span>
                <div className="tip-split-amount" style={{ color: "#fb923c", fontSize: "1.35rem", fontWeight: 700 }}>
                  {results.effectiveDiscountPercent.toFixed(1)}%
                </div>
              </div>
            </div>

            <div className="calc-result-details">
              <div className="summary-row">
                <span>Original Price:</span>
                <strong>${results.original.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Primary Discount Savings:</span>
                <strong style={{ color: "#4ade80" }}>-${results.mainSavings.toFixed(2)}</strong>
              </div>
              {results.hasExtra && (
                <>
                  <div className="summary-row">
                    <span>Subtotal after Main Discount:</span>
                    <strong>${results.priceAfterMain.toFixed(2)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Extra Coupon Savings:</span>
                    <strong style={{ color: "#4ade80" }}>-${results.extraSavings.toFixed(2)}</strong>
                  </div>
                </>
              )}
              {results.hasTax && (
                <div className="summary-row">
                  <span>Sales Tax Added:</span>
                  <strong>+${results.taxAmount.toFixed(2)}</strong>
                </div>
              )}
            </div>

            <div className="calc-formula-pill">
              Final = ${results.original.toFixed(2)} - ${results.totalSavings.toFixed(2)}
              {results.hasTax ? ` + $${results.taxAmount.toFixed(2)} tax` : ""}
            </div>
          </>
        ) : (
          <p className="abv-empty">Enter an original price to calculate discounts and final savings.</p>
        )}
      </div>
    </div>
  );
}
