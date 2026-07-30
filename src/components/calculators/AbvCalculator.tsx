"use client";

import { useMemo, useState } from "react";
import {
  calculateAbv,
  formatAbv,
  formatNumber,
  type AbvEquation,
  type GravityUnit,
} from "@/lib/abv";

const DEFAULT_OG_SG = "1.050";
const DEFAULT_FG_SG = "1.010";
const DEFAULT_OG_PLATO = "12.4";
const DEFAULT_FG_PLATO = "2.5";

export function AbvCalculator() {
  const [unit, setUnit] = useState<GravityUnit>("sg");
  const [equation, setEquation] = useState<AbvEquation>("standard");
  const [og, setOg] = useState(DEFAULT_OG_SG);
  const [fg, setFg] = useState(DEFAULT_FG_SG);

  function switchUnit(next: GravityUnit) {
    if (next === unit) return;
    setUnit(next);
    if (next === "sg") {
      setOg(DEFAULT_OG_SG);
      setFg(DEFAULT_FG_SG);
    } else {
      setOg(DEFAULT_OG_PLATO);
      setFg(DEFAULT_FG_PLATO);
    }
  }

  const result = useMemo(() => {
    const originalGravity = Number(og);
    const finalGravity = Number(fg);
    if (!Number.isFinite(originalGravity) || !Number.isFinite(finalGravity)) {
      return null;
    }
    return calculateAbv({
      originalGravity,
      finalGravity,
      unit,
      equation,
    });
  }, [og, fg, unit, equation]);

  const ogLabel =
    unit === "sg" ? "Original Gravity (OG)" : "Original Gravity (°P)";
  const fgLabel =
    unit === "sg" ? "Final Gravity (FG)" : "Final Gravity (°P)";
  const ogStep = unit === "sg" ? "0.001" : "0.1";
  const fgStep = unit === "sg" ? "0.001" : "0.1";
  const ogPlaceholder = unit === "sg" ? "1.050" : "12.4";
  const fgPlaceholder = unit === "sg" ? "1.010" : "2.5";

  return (
    <div className="abv-calculator">
      <div className="abv-calculator__panel">
        <fieldset className="abv-field">
          <legend>Gravity unit</legend>
          <div className="abv-toggle" role="radiogroup" aria-label="Gravity unit">
            <button
              type="button"
              role="radio"
              aria-checked={unit === "sg"}
              className={unit === "sg" ? "is-active" : undefined}
              onClick={() => switchUnit("sg")}
            >
              SG (1.xxx)
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={unit === "plato"}
              className={unit === "plato" ? "is-active" : undefined}
              onClick={() => switchUnit("plato")}
            >
              Plato (°P)
            </button>
          </div>
        </fieldset>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>{ogLabel}</span>
            <input
              type="number"
              inputMode="decimal"
              step={ogStep}
              value={og}
              placeholder={ogPlaceholder}
              onChange={(e) => setOg(e.target.value)}
              aria-describedby="og-help"
            />
          </label>
          <label className="abv-input">
            <span>{fgLabel}</span>
            <input
              type="number"
              inputMode="decimal"
              step={fgStep}
              value={fg}
              placeholder={fgPlaceholder}
              onChange={(e) => setFg(e.target.value)}
              aria-describedby="fg-help"
            />
          </label>
        </div>

        <p id="og-help" className="abv-hint">
          Take OG before pitching yeast. Take FG after fermentation finishes,
          before priming sugar.
        </p>

        <fieldset className="abv-field">
          <legend>Equation</legend>
          <div className="abv-toggle" role="radiogroup" aria-label="ABV equation">
            <button
              type="button"
              role="radio"
              aria-checked={equation === "standard"}
              className={equation === "standard" ? "is-active" : undefined}
              onClick={() => setEquation("standard")}
            >
              Standard
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={equation === "alternate"}
              className={equation === "alternate" ? "is-active" : undefined}
              onClick={() => setEquation("alternate")}
            >
              Alternate
            </button>
          </div>
        </fieldset>
        <p id="fg-help" className="abv-hint">
          Use Standard for most beers. Alternate (Hall) is better for high-gravity
          batches above ~1.070 OG.
        </p>
      </div>

      <div className="abv-results" aria-live="polite">
        {result ? (
          <>
            <div className="abv-result-hero">
              <span className="abv-result-label">Alcohol by volume</span>
              <strong className="abv-result-value">{formatAbv(result.abv)}</strong>
            </div>
            <dl className="abv-result-grid">
              <div>
                <dt>Apparent attenuation</dt>
                <dd>{formatNumber(result.attenuation, 0)}%</dd>
              </div>
              <div>
                <dt>Calories (12 oz)</dt>
                <dd>{formatNumber(result.calories, 1)}</dd>
              </div>
              <div>
                <dt>Original gravity</dt>
                <dd>
                  {formatNumber(result.ogPlato, 2)} °P ·{" "}
                  {formatNumber(result.ogSg, 3)}
                </dd>
              </div>
              <div>
                <dt>Final gravity</dt>
                <dd>
                  {formatNumber(result.fgPlato, 2)} °P ·{" "}
                  {formatNumber(result.fgSg, 3)}
                </dd>
              </div>
            </dl>
          </>
        ) : (
          <p className="abv-empty">
            Enter a valid OG higher than FG to see ABV, attenuation, and
            calories.
          </p>
        )}
      </div>
    </div>
  );
}
