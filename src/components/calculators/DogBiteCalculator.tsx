"use client";

import { useMemo, useState } from "react";
import {
  calculateDogBiteCompensation,
  formatMultiplier,
  formatUsd,
  LIABILITY_RULE_LABELS,
  SEVERITY_OPTIONS,
  US_STATES,
  type InjuryLocation,
  type InjurySeverity,
  type LiabilityClarity,
} from "@/lib/dog-bite";

export function DogBiteCalculator() {
  const [stateCode, setStateCode] = useState("CA");
  const [medicalBills, setMedicalBills] = useState("8500");
  const [futureMedical, setFutureMedical] = useState("2000");
  const [lostWages, setLostWages] = useState("1500");
  const [otherExpenses, setOtherExpenses] = useState("250");
  const [severity, setSeverity] = useState<InjurySeverity>("moderate");
  const [permanentScarring, setPermanentScarring] = useState(false);
  const [childVictim, setChildVictim] = useState(false);
  const [location, setLocation] = useState<InjuryLocation>("other");
  const [liabilityClarity, setLiabilityClarity] =
    useState<LiabilityClarity>("clear");
  const [knownPriorBite, setKnownPriorBite] = useState(false);
  const [comparativeFaultPercent, setComparativeFaultPercent] = useState("0");
  const [insuranceLimit, setInsuranceLimit] = useState("300000");

  const result = useMemo(() => {
    const limitNum = Number(insuranceLimit);
    return calculateDogBiteCompensation({
      stateCode,
      medicalBills: Number(medicalBills) || 0,
      futureMedical: Number(futureMedical) || 0,
      lostWages: Number(lostWages) || 0,
      otherExpenses: Number(otherExpenses) || 0,
      severity,
      permanentScarring,
      childVictim,
      location,
      liabilityClarity,
      knownPriorBite,
      comparativeFaultPercent: Number(comparativeFaultPercent) || 0,
      insuranceLimit:
        Number.isFinite(limitNum) && limitNum > 0 ? limitNum : null,
    });
  }, [
    stateCode,
    medicalBills,
    futureMedical,
    lostWages,
    otherExpenses,
    severity,
    permanentScarring,
    childVictim,
    location,
    liabilityClarity,
    knownPriorBite,
    comparativeFaultPercent,
    insuranceLimit,
  ]);

  return (
    <div className="abv-calculator dog-bite-calculator">
      <div className="abv-calculator__panel">
        <label className="abv-input">
          <span>State where the bite occurred</span>
          <select
            className="cm-select"
            value={stateCode}
            onChange={(e) => setStateCode(e.target.value)}
          >
            {US_STATES.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name} ({LIABILITY_RULE_LABELS[state.rule]})
              </option>
            ))}
          </select>
        </label>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>Medical bills so far ($)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="1"
              value={medicalBills}
              onChange={(e) => setMedicalBills(e.target.value)}
            />
          </label>
          <label className="abv-input">
            <span>Expected future medical ($)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="1"
              value={futureMedical}
              onChange={(e) => setFutureMedical(e.target.value)}
            />
          </label>
        </div>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>Lost wages ($)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="1"
              value={lostWages}
              onChange={(e) => setLostWages(e.target.value)}
            />
          </label>
          <label className="abv-input">
            <span>Other expenses ($)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="1"
              value={otherExpenses}
              onChange={(e) => setOtherExpenses(e.target.value)}
            />
          </label>
        </div>

        <label className="abv-input">
          <span>Injury severity</span>
          <select
            className="cm-select"
            value={severity}
            onChange={(e) => setSeverity(e.target.value as InjurySeverity)}
          >
            {SEVERITY_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label} ({option.low}×–{option.high}×) — {option.description}
              </option>
            ))}
          </select>
        </label>

        <fieldset className="abv-field">
          <legend>Injury location</legend>
          <div className="abv-toggle abv-toggle--3" role="radiogroup" aria-label="Injury location">
            {(
              [
                ["face", "Face / head"],
                ["hand", "Hand / arm"],
                ["other", "Other"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                role="radio"
                aria-checked={location === id}
                className={location === id ? "is-active" : undefined}
                onClick={() => setLocation(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="abv-field">
          <legend>Claim factors</legend>
          <div className="dog-check-grid">
            <label className="dog-check">
              <input
                type="checkbox"
                checked={permanentScarring}
                onChange={(e) => setPermanentScarring(e.target.checked)}
              />
              Permanent / visible scarring
            </label>
            <label className="dog-check">
              <input
                type="checkbox"
                checked={childVictim}
                onChange={(e) => setChildVictim(e.target.checked)}
              />
              Victim is a minor (under 18)
            </label>
            <label className="dog-check">
              <input
                type="checkbox"
                checked={knownPriorBite}
                onChange={(e) => setKnownPriorBite(e.target.checked)}
              />
              Dog had a prior bite / known aggression
            </label>
          </div>
        </fieldset>

        <fieldset className="abv-field">
          <legend>Liability clarity</legend>
          <div className="abv-toggle" role="radiogroup" aria-label="Liability clarity">
            <button
              type="button"
              role="radio"
              aria-checked={liabilityClarity === "clear"}
              className={liabilityClarity === "clear" ? "is-active" : undefined}
              onClick={() => setLiabilityClarity("clear")}
            >
              Clear fault
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={liabilityClarity === "disputed"}
              className={liabilityClarity === "disputed" ? "is-active" : undefined}
              onClick={() => setLiabilityClarity("disputed")}
            >
              Disputed
            </button>
          </div>
        </fieldset>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>Your comparative fault (%)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              max="100"
              step="1"
              value={comparativeFaultPercent}
              onChange={(e) => setComparativeFaultPercent(e.target.value)}
            />
          </label>
          <label className="abv-input">
            <span>Owner insurance limit ($)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="1000"
              value={insuranceLimit}
              onChange={(e) => setInsuranceLimit(e.target.value)}
            />
          </label>
        </div>
        <p className="abv-hint">
          Most U.S. dog bite claims are paid by homeowners/renters liability
          coverage (often $100k–$300k). Leave blank or 0 for no cap. This is an
          estimate only — not legal advice.
        </p>
      </div>

      <div className="abv-results" aria-live="polite">
        {result ? (
          <>
            <div className="abv-result-hero">
              <span className="abv-result-label">Estimated settlement range</span>
              <strong className="abv-result-value abv-result-value--range">
                {formatUsd(result.cappedLow)} – {formatUsd(result.cappedHigh)}
              </strong>
            </div>

            <dl className="abv-result-grid">
              <div>
                <dt>State rule</dt>
                <dd>{LIABILITY_RULE_LABELS[result.state.rule]}</dd>
              </div>
              <div>
                <dt>Economic damages</dt>
                <dd>{formatUsd(result.economicDamages)}</dd>
              </div>
              <div>
                <dt>Pain & suffering (low)</dt>
                <dd>
                  {formatUsd(result.painSufferingLow)} (
                  {formatMultiplier(result.multiplierLow)})
                </dd>
              </div>
              <div>
                <dt>Pain & suffering (high)</dt>
                <dd>
                  {formatUsd(result.painSufferingHigh)} (
                  {formatMultiplier(result.multiplierHigh)})
                </dd>
              </div>
              <div>
                <dt>Liability factor</dt>
                <dd>{(result.liabilityFactor * 100).toFixed(0)}%</dd>
              </div>
              <div>
                <dt>After fault reduction</dt>
                <dd>
                  {formatUsd(result.estimateLow)} –{" "}
                  {formatUsd(result.estimateHigh)}
                </dd>
              </div>
            </dl>

            {result.insuranceLimited ? (
              <p className="dog-limit-note">
                Estimate exceeds the entered insurance limit, so the shown range
                is capped. Collecting above policy limits usually requires
                personal assets or other coverage.
              </p>
            ) : null}

            <p className="abv-hint" style={{ marginTop: "1rem" }}>
              {result.state.note}
            </p>
          </>
        ) : (
          <p className="abv-empty">
            Enter medical costs (and any wages/expenses) to see a U.S. settlement
            estimate range.
          </p>
        )}
      </div>
    </div>
  );
}
