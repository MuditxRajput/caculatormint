"use client";

import { useMemo, useState } from "react";
import {
  calculatePayRaise,
  formatPercent,
  formatUsd,
  PAY_FREQUENCY_LABELS,
  type PayFrequency,
  type RaiseMode,
} from "@/lib/pay-raise";

const FREQUENCIES: PayFrequency[] = [
  "hourly",
  "weekly",
  "biweekly",
  "semimonthly",
  "monthly",
  "annual",
];

const RAISE_MODES: { id: RaiseMode; label: string }[] = [
  { id: "percent", label: "Percent %" },
  { id: "amount", label: "Flat $" },
  { id: "newPay", label: "New pay" },
];

export function PayRaiseCalculator() {
  const [frequency, setFrequency] = useState<PayFrequency>("annual");
  const [raiseMode, setRaiseMode] = useState<RaiseMode>("percent");
  const [currentPay, setCurrentPay] = useState("60000");
  const [raiseValue, setRaiseValue] = useState("5");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");
  const [inflationPercent, setInflationPercent] = useState("3.0");
  const [estimatedTaxPercent, setEstimatedTaxPercent] = useState("22");

  const result = useMemo(() => {
    return calculatePayRaise({
      currentPay: Number(currentPay),
      frequency,
      raiseMode,
      raiseValue: Number(raiseValue),
      hoursPerWeek: Number(hoursPerWeek),
      weeksPerYear: Number(weeksPerYear),
      inflationPercent: Number(inflationPercent) || 0,
      estimatedTaxPercent: Number(estimatedTaxPercent) || 0,
    });
  }, [
    currentPay,
    frequency,
    raiseMode,
    raiseValue,
    hoursPerWeek,
    weeksPerYear,
    inflationPercent,
    estimatedTaxPercent,
  ]);

  const raiseLabel =
    raiseMode === "percent"
      ? "Raise percent"
      : raiseMode === "amount"
        ? `Raise amount (${PAY_FREQUENCY_LABELS[frequency].toLowerCase()})`
        : `New ${PAY_FREQUENCY_LABELS[frequency].toLowerCase()} pay`;

  const raisePlaceholder =
    raiseMode === "percent" ? "5" : raiseMode === "amount" ? "3000" : "63000";

  return (
    <div className="abv-calculator pay-raise-calculator">
      <div className="abv-calculator__panel">
        <fieldset className="abv-field">
          <legend>Pay frequency (USA)</legend>
          <div className="pay-freq-grid" role="radiogroup" aria-label="Pay frequency">
            {FREQUENCIES.map((freq) => (
              <button
                key={freq}
                type="button"
                role="radio"
                aria-checked={frequency === freq}
                className={frequency === freq ? "is-active" : undefined}
                onClick={() => setFrequency(freq)}
              >
                {PAY_FREQUENCY_LABELS[freq]}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>Current {PAY_FREQUENCY_LABELS[frequency].toLowerCase()} pay ($)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={currentPay}
              onChange={(e) => setCurrentPay(e.target.value)}
            />
          </label>
          <label className="abv-input">
            <span>{raiseLabel}</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step={raiseMode === "percent" ? "0.1" : "0.01"}
              value={raiseValue}
              placeholder={raisePlaceholder}
              onChange={(e) => setRaiseValue(e.target.value)}
            />
          </label>
        </div>

        <fieldset className="abv-field">
          <legend>Raise input</legend>
          <div className="abv-toggle abv-toggle--3" role="radiogroup" aria-label="Raise mode">
            {RAISE_MODES.map((mode) => (
              <button
                key={mode.id}
                type="button"
                role="radio"
                aria-checked={raiseMode === mode.id}
                className={raiseMode === mode.id ? "is-active" : undefined}
                onClick={() => {
                  setRaiseMode(mode.id);
                  if (mode.id === "percent") setRaiseValue("5");
                  else if (mode.id === "amount") setRaiseValue("3000");
                  else setRaiseValue("63000");
                }}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>Hours per week</span>
            <input
              type="number"
              inputMode="decimal"
              min="1"
              step="0.5"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
            />
          </label>
          <label className="abv-input">
            <span>Weeks per year</span>
            <input
              type="number"
              inputMode="decimal"
              min="1"
              max="52"
              step="1"
              value={weeksPerYear}
              onChange={(e) => setWeeksPerYear(e.target.value)}
            />
          </label>
        </div>
        <p className="abv-hint">
          U.S. full-time default is 40 hours × 52 weeks (2,080 hours/year).
          Bi-weekly = 26 paychecks; semi-monthly = 24.
        </p>

        <div className="abv-inputs">
          <label className="abv-input">
            <span>Inflation / CPI (%)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inflationPercent}
              onChange={(e) => setInflationPercent(e.target.value)}
            />
          </label>
          <label className="abv-input">
            <span>Est. federal + state tax (%)</span>
            <input
              type="number"
              inputMode="decimal"
              min="0"
              max="50"
              step="1"
              value={estimatedTaxPercent}
              onChange={(e) => setEstimatedTaxPercent(e.target.value)}
            />
          </label>
        </div>
        <p className="abv-hint">
          Net estimate applies employee FICA (7.65%) plus your combined income-tax
          rate on the raise only — not a full paycheck simulation.
        </p>
      </div>

      <div className="abv-results" aria-live="polite">
        {result ? (
          <>
            <div className="abv-result-hero">
              <span className="abv-result-label">New annual pay</span>
              <strong className="abv-result-value">
                {formatUsd(result.next.annual)}
              </strong>
            </div>
            <dl className="abv-result-grid">
              <div>
                <dt>Raise</dt>
                <dd>
                  {formatPercent(result.raisePercent)} ·{" "}
                  {formatUsd(result.raiseAmountAnnual)}/yr
                </dd>
              </div>
              <div>
                <dt>Real raise (vs inflation)</dt>
                <dd>{formatPercent(result.realRaisePercent)}</dd>
              </div>
              <div>
                <dt>Est. take-home raise</dt>
                <dd>{formatUsd(result.estimatedNetRaiseAnnual)}/yr</dd>
              </div>
              <div>
                <dt>New {PAY_FREQUENCY_LABELS[frequency].toLowerCase()}</dt>
                <dd>
                  {formatUsd(
                    result.next[frequency],
                    frequency === "annual",
                  )}
                </dd>
              </div>
            </dl>

            <table className="pay-compare-table">
              <caption>Before vs after (gross USD)</caption>
              <thead>
                <tr>
                  <th scope="col">Period</th>
                  <th scope="col">Before</th>
                  <th scope="col">After</th>
                  <th scope="col">Increase</th>
                </tr>
              </thead>
              <tbody>
                {FREQUENCIES.map((freq) => {
                  const before = result.current[freq];
                  const after = result.next[freq];
                  return (
                    <tr key={freq}>
                      <th scope="row">{PAY_FREQUENCY_LABELS[freq]}</th>
                      <td>{formatUsd(before)}</td>
                      <td>{formatUsd(after)}</td>
                      <td>{formatUsd(after - before)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <p className="abv-empty">
            Enter a valid current pay and raise to see your new U.S. paycheck
            breakdown.
          </p>
        )}
      </div>
    </div>
  );
}
