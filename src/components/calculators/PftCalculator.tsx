"use client";

import { useMemo, useState } from "react";
import {
  calculatePft,
  formatLiters,
  formatPercent,
  formatZ,
  PFT_ETHNICITY_OPTIONS,
  PFT_SEX_OPTIONS,
  type HeightUnit,
  type PftEthnicity,
  type PftSex,
} from "@/lib/pft";

export function PftCalculator() {
  const [age, setAge] = useState("45");
  const [sex, setSex] = useState<PftSex>("Male");
  const [height, setHeight] = useState("70");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("in");
  const [ethnicity, setEthnicity] = useState<PftEthnicity>("Caucasian");
  const [fev1, setFev1] = useState("3.20");
  const [fvc, setFvc] = useState("4.10");
  const [ratioPercent, setRatioPercent] = useState("");

  const result = useMemo(() => {
    return calculatePft({
      ageYears: Number(age),
      sex,
      height: Number(height),
      heightUnit,
      ethnicity,
      measuredFev1L: Number(fev1),
      measuredFvcL: Number(fvc),
      measuredRatioPercent: ratioPercent === "" ? undefined : Number(ratioPercent),
    });
  }, [age, sex, height, heightUnit, ethnicity, fev1, fvc, ratioPercent]);

  return (
    <div className="abv-calculator pft-calculator">
      <div className="abv-calculator__panel">
        <fieldset className="abv-field">
          <legend>Sex (biological)</legend>
          <div className="abv-toggle" role="radiogroup" aria-label="Sex">
            {PFT_SEX_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="radio"
                aria-checked={sex === opt.id}
                className={sex === opt.id ? "is-active" : undefined}
                onClick={() => setSex(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>Age (years)</span>
            <input
              type="number"
              inputMode="decimal"
              min="3"
              max="95"
              step="0.25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="abv-input">
            <span>Height ({heightUnit === "in" ? "inches" : "cm"})</span>
            <input
              type="number"
              inputMode="decimal"
              min={heightUnit === "in" ? "40" : "100"}
              max={heightUnit === "in" ? "90" : "230"}
              step="0.1"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>

        <fieldset className="abv-field">
          <legend>Height unit (USA default: inches)</legend>
          <div className="abv-toggle" role="radiogroup" aria-label="Height unit">
            <button
              type="button"
              role="radio"
              aria-checked={heightUnit === "in"}
              className={heightUnit === "in" ? "is-active" : undefined}
              onClick={() => {
                if (heightUnit === "cm") {
                  setHeight((Number(height) / 2.54).toFixed(1));
                }
                setHeightUnit("in");
              }}
            >
              Inches
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={heightUnit === "cm"}
              className={heightUnit === "cm" ? "is-active" : undefined}
              onClick={() => {
                if (heightUnit === "in") {
                  setHeight((Number(height) * 2.54).toFixed(1));
                }
                setHeightUnit("cm");
              }}
            >
              Centimeters
            </button>
          </div>
        </fieldset>

        <fieldset className="abv-field">
          <legend>GLI-2012 ethnicity (USA labs)</legend>
          <div className="pay-freq-grid pft-ethnicity-grid" role="radiogroup" aria-label="Ethnicity">
            {PFT_ETHNICITY_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="radio"
                aria-checked={ethnicity === opt.id}
                className={ethnicity === opt.id ? "is-active" : undefined}
                title={opt.hint}
                onClick={() => setEthnicity(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="abv-hint">
            Choose the GLI group that matches how your U.S. lab or EHR codes
            ancestry. Mixed or unlisted ancestry usually uses “Other / mixed.”
          </p>
        </fieldset>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>Measured FEV1 (L)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0.1"
              step="0.01"
              value={fev1}
              onChange={(e) => setFev1(e.target.value)}
            />
          </label>
          <label className="abv-input">
            <span>Measured FVC (L)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0.1"
              step="0.01"
              value={fvc}
              onChange={(e) => setFvc(e.target.value)}
            />
          </label>
        </div>

        <label className="abv-input">
          <span>Measured FEV1/FVC (%) — optional</span>
          <input
            type="number"
            inputMode="decimal"
            min="20"
            max="120"
            step="0.1"
            placeholder="Auto from FEV1 ÷ FVC"
            value={ratioPercent}
            onChange={(e) => setRatioPercent(e.target.value)}
          />
        </label>
        <p className="abv-hint">
          Leave blank to compute the ratio from FEV1 ÷ FVC. Enter a lab-reported
          ratio (%) if you want to match the report exactly.
        </p>
      </div>

      <div className="abv-results" aria-live="polite">
        {result ? (
          <>
            <div className="abv-result-hero">
              <span className="abv-result-label">Spirometry pattern</span>
              <strong className="abv-result-value abv-result-value--range">
                {result.patternLabel}
              </strong>
            </div>

            <dl className="abv-result-grid">
              <div>
                <dt>Obstruction severity</dt>
                <dd>{result.obstructionSeverityLabel}</dd>
              </div>
              <div>
                <dt>Height used</dt>
                <dd>{result.heightCm.toFixed(1)} cm</dd>
              </div>
              <div>
                <dt>FEV1 Z-score</dt>
                <dd>{formatZ(result.fev1.zScore)}</dd>
              </div>
              <div>
                <dt>FEV1/FVC Z-score</dt>
                <dd>{formatZ(result.ratio.zScore)}</dd>
              </div>
            </dl>

            <table className="pay-compare-table pft-results-table">
              <caption>GLI-2012 predicted, % predicted, LLN, and Z-scores</caption>
              <thead>
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">Measured</th>
                  <th scope="col">Predicted</th>
                  <th scope="col">% pred</th>
                  <th scope="col">LLN</th>
                  <th scope="col">Z</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">FEV1</th>
                  <td>{formatLiters(result.fev1.measured)}</td>
                  <td>{formatLiters(result.fev1.predicted)}</td>
                  <td>
                    {formatPercent(result.fev1.percentPredicted)}
                    {result.fev1.belowLln ? " · <LLN" : ""}
                  </td>
                  <td>{formatLiters(result.fev1.lln)}</td>
                  <td>{formatZ(result.fev1.zScore)}</td>
                </tr>
                <tr>
                  <th scope="row">FVC</th>
                  <td>{formatLiters(result.fvc.measured)}</td>
                  <td>{formatLiters(result.fvc.predicted)}</td>
                  <td>
                    {formatPercent(result.fvc.percentPredicted)}
                    {result.fvc.belowLln ? " · <LLN" : ""}
                  </td>
                  <td>{formatLiters(result.fvc.lln)}</td>
                  <td>{formatZ(result.fvc.zScore)}</td>
                </tr>
                <tr>
                  <th scope="row">FEV1/FVC</th>
                  <td>{formatPercent(result.ratio.measuredPercent)}</td>
                  <td>{formatPercent(result.ratio.predictedPercent)}</td>
                  <td>
                    {formatPercent(result.ratio.percentPredicted)}
                    {result.ratio.belowLln ? " · <LLN" : ""}
                  </td>
                  <td>{formatPercent(result.ratio.lln * 100)}</td>
                  <td>{formatZ(result.ratio.zScore)}</td>
                </tr>
              </tbody>
            </table>

            <ul className="pft-notes">
              {result.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="abv-empty">
            Enter age (3–95), height, ethnicity, FEV1, and FVC to see GLI-2012
            predicted values, Z-scores, and severity.
          </p>
        )}
      </div>
    </div>
  );
}
