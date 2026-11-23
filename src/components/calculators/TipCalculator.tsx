"use client";

import { useId, useState } from "react";

export function TipCalculator() {
  const [bill, setBill] = useState<string>("65.00");
  const [tipPercent, setTipPercent] = useState<number>(18);
  const [customTip, setCustomTip] = useState<string>("");
  const [people, setPeople] = useState<number>(2);
  const [roundUp, setRoundUp] = useState<boolean>(false);

  const billId = useId();
  const peopleId = useId();
  const customId = useId();

  const numBill = parseFloat(bill) || 0;
  const activeTip = customTip !== "" ? parseFloat(customTip) || 0 : tipPercent;

  let rawTipAmount = (numBill * activeTip) / 100;
  let rawTotal = numBill + rawTipAmount;

  if (roundUp) {
    rawTotal = Math.ceil(rawTotal);
    rawTipAmount = Math.max(0, rawTotal - numBill);
  }

  const numPeople = Math.max(1, people);
  const tipPerPerson = rawTipAmount / numPeople;
  const totalPerPerson = rawTotal / numPeople;

  return (
    <div className="calc-panel-grid">
      <div className="calc-surface">
        <h2 className="calc-heading">Bill &amp; Tip Inputs</h2>
        <p className="calc-subheading">
          Enter your check total, select your tip rate, and split fairly.
        </p>

        <div className="form-group">
          <label htmlFor={billId}>Check Total / Bill Amount ($)</label>
          <div className="input-group">
            <span className="input-affix">$</span>
            <input
              id={billId}
              type="number"
              step="0.01"
              min="0"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Select Tip Percentage</label>
          <div className="tip-preset-grid">
            {[10, 15, 18, 20, 25].map((pct) => (
              <button
                key={pct}
                type="button"
                className={`tip-btn ${customTip === "" && tipPercent === pct ? "is-active" : ""}`}
                onClick={() => {
                  setTipPercent(pct);
                  setCustomTip("");
                }}
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor={customId}>Custom Tip Rate (%)</label>
          <div className="input-group">
            <input
              id={customId}
              type="number"
              step="any"
              min="0"
              value={customTip}
              onChange={(e) => setCustomTip(e.target.value)}
              placeholder="Custom %"
            />
            <span className="input-affix">%</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor={peopleId}>Number of People Splitting</label>
          <div className="people-stepper">
            <button
              type="button"
              className="stepper-btn"
              onClick={() => setPeople((p) => Math.max(1, p - 1))}
              aria-label="Decrease people"
            >
              −
            </button>
            <input
              id={peopleId}
              type="number"
              min="1"
              max="100"
              value={people}
              onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value, 10) || 1))}
              className="stepper-input"
            />
            <button
              type="button"
              className="stepper-btn"
              onClick={() => setPeople((p) => p + 1)}
              aria-label="Increase people"
            >
              +
            </button>
          </div>
        </div>

        <div className="form-group form-check-inline">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={roundUp}
              onChange={(e) => setRoundUp(e.target.checked)}
            />
            <span>Round up total to nearest whole dollar</span>
          </label>
        </div>
      </div>

      <div className="calc-result-box">
        <span className="calc-result-label">
          {numPeople > 1 ? "Per Person Total" : "Total to Pay"}
        </span>
        <div className="calc-result-value">
          ${totalPerPerson.toFixed(2)}
        </div>

        <div className="calc-result-summary-grid">
          <div className="summary-row">
            <span>Tip Rate Applied:</span>
            <strong>{activeTip.toFixed(1)}%</strong>
          </div>
          <div className="summary-row">
            <span>Total Tip Amount:</span>
            <strong>${rawTipAmount.toFixed(2)}</strong>
          </div>
          <div className="summary-row">
            <span>Total With Tip:</span>
            <strong>${rawTotal.toFixed(2)}</strong>
          </div>
          {numPeople > 1 && (
            <>
              <hr className="summary-divider" />
              <div className="summary-row">
                <span>Tip Per Person:</span>
                <strong>${tipPerPerson.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Each Person Pays:</span>
                <strong className="text-highlight">${totalPerPerson.toFixed(2)}</strong>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
