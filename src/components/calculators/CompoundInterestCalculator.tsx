"use client";

import { useId, useMemo, useState } from "react";

const FREQUENCIES = [
  { id: 12, label: "Monthly (12/yr)" },
  { id: 4, label: "Quarterly (4/yr)" },
  { id: 2, label: "Semi-Annually (2/yr)" },
  { id: 1, label: "Annually (1/yr)" },
  { id: 365, label: "Daily (365/yr)" },
];

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState<string>("5000");
  const [monthlyDeposit, setMonthlyDeposit] = useState<string>("200");
  const [annualRate, setAnnualRate] = useState<string>("7");
  const [years, setYears] = useState<string>("10");
  const [compoundFreq, setCompoundFreq] = useState<number>(12);

  const principalId = useId();
  const monthlyDepositId = useId();
  const rateId = useId();
  const yearsId = useId();

  const results = useMemo(() => {
    const P = parseFloat(principal);
    const PMT = parseFloat(monthlyDeposit) || 0;
    const rPct = parseFloat(annualRate);
    const t = parseFloat(years);
    const n = compoundFreq;

    if (isNaN(P) || P < 0 || isNaN(rPct) || rPct < 0 || isNaN(t) || t <= 0) {
      return null;
    }

    const r = rPct / 100;
    const totalMonths = Math.round(t * 12);

    // Initial principal compounded: P * (1 + r/n)^(n*t)
    const principalFV = P * Math.pow(1 + r / n, n * t);

    // Future value of a monthly annuity series compounded n times per year
    // Effective monthly rate i = (1 + r/n)^(n/12) - 1
    let annuityFV = 0;
    if (PMT > 0 && totalMonths > 0) {
      if (r === 0) {
        annuityFV = PMT * totalMonths;
      } else {
        const i = Math.pow(1 + r / n, n / 12) - 1;
        annuityFV = PMT * ((Math.pow(1 + i, totalMonths) - 1) / i);
      }
    }

    const totalFutureValue = principalFV + annuityFV;
    const totalDeposits = P + PMT * totalMonths;
    const totalInterest = Math.max(0, totalFutureValue - totalDeposits);

    // Milestones (up to 4 checkpoints based on time horizon)
    const stepYears = Math.max(1, Math.round(t / 4));
    const milestones: { year: number; balance: number; deposits: number; interest: number }[] = [];
    for (let yr = stepYears; yr <= t; yr += stepYears) {
      const yrMonths = yr * 12;
      const yrPrinFV = P * Math.pow(1 + r / n, n * yr);
      let yrAnnFV = 0;
      if (PMT > 0 && yrMonths > 0) {
        if (r === 0) {
          yrAnnFV = PMT * yrMonths;
        } else {
          const i = Math.pow(1 + r / n, n / 12) - 1;
          yrAnnFV = PMT * ((Math.pow(1 + i, yrMonths) - 1) / i);
        }
      }
      const yrBal = yrPrinFV + yrAnnFV;
      const yrDep = P + PMT * yrMonths;
      milestones.push({
        year: yr,
        balance: yrBal,
        deposits: yrDep,
        interest: Math.max(0, yrBal - yrDep),
      });
    }

    // Ensure final year is included in milestones
    if (milestones.length === 0 || milestones[milestones.length - 1].year !== t) {
      milestones.push({
        year: t,
        balance: totalFutureValue,
        deposits: totalDeposits,
        interest: totalInterest,
      });
    }

    return {
      totalFutureValue,
      totalDeposits,
      totalInterest,
      interestPercentOfTotal: (totalInterest / totalFutureValue) * 100,
      milestones,
    };
  }, [principal, monthlyDeposit, annualRate, years, compoundFreq]);

  return (
    <div className="abv-calculator">
      <div className="abv-calculator__panel">
        <div className="abv-field">
          <label htmlFor={principalId} className="abv-label">
            Initial Starting Balance ($)
          </label>
          <div className="input-group">
            <span className="input-affix">$</span>
            <input
              id={principalId}
              type="number"
              min="0"
              step="100"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="5000"
            />
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={monthlyDepositId} className="abv-label">
            Monthly Addition ($) <span style={{ fontWeight: 400, color: "var(--muted)" }}>(Optional)</span>
          </label>
          <div className="input-group">
            <span className="input-affix">$</span>
            <input
              id={monthlyDepositId}
              type="number"
              min="0"
              step="25"
              value={monthlyDeposit}
              onChange={(e) => setMonthlyDeposit(e.target.value)}
              placeholder="200"
            />
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={rateId} className="abv-label">
            Estimated Annual Return Rate (%)
          </label>
          <div className="input-group">
            <input
              id={rateId}
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={annualRate}
              onChange={(e) => setAnnualRate(e.target.value)}
              placeholder="7.0"
            />
            <span className="input-affix">%</span>
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={yearsId} className="abv-label">
            Investment Duration (Years)
          </label>
          <div className="input-group">
            <input
              id={yearsId}
              type="number"
              min="1"
              max="60"
              step="1"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              placeholder="10"
            />
            <span className="input-affix">yrs</span>
          </div>
        </div>

        <div className="abv-field" style={{ gridColumn: "1 / -1" }}>
          <label className="abv-label">Compounding Schedule</label>
          <div className="calc-tabs">
            {FREQUENCIES.map((freq) => (
              <button
                key={freq.id}
                type="button"
                className={`calc-tab-btn ${compoundFreq === freq.id ? "active" : ""}`}
                onClick={() => setCompoundFreq(freq.id)}
              >
                {freq.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="abv-results">
        {results ? (
          <>
            <span className="abv-result-label">Projected Future Balance</span>
            <div className="calc-result-value">
              ${results.totalFutureValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>

            <div className="tip-split-summary" style={{ marginTop: "0.5rem" }}>
              <div className="tip-split-card" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.75rem", padding: "0.85rem", textAlign: "center" }}>
                <span className="abv-result-label">Total Principal Invested</span>
                <div className="tip-split-amount" style={{ fontSize: "1.15rem", color: "#f8fafc" }}>
                  ${results.totalDeposits.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="tip-split-card" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.75rem", padding: "0.85rem", textAlign: "center" }}>
                <span className="abv-result-label">Total Interest Earned</span>
                <div className="tip-split-amount" style={{ color: "#4ade80", fontSize: "1.15rem" }}>
                  +${results.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </div>
              </div>
            </div>

            <div className="calc-result-details">
              <div className="summary-row">
                <span>Interest Share of Wealth:</span>
                <strong style={{ color: "#4ade80" }}>{results.interestPercentOfTotal.toFixed(1)}%</strong>
              </div>
            </div>

            <div style={{ marginTop: "0.85rem" }}>
              <span className="abv-result-label" style={{ display: "block", marginBottom: "0.4rem" }}>
                Growth Milestones
              </span>
              <table className="pay-compare-table" style={{ fontSize: "0.82rem" }}>
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Deposits</th>
                    <th>Interest</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {results.milestones.map((m) => (
                    <tr key={m.year}>
                      <td>Year {m.year}</td>
                      <td>${Math.round(m.deposits).toLocaleString()}</td>
                      <td style={{ color: "#4ade80", fontWeight: 700 }}>
                        +${Math.round(m.interest).toLocaleString()}
                      </td>
                      <td style={{ fontWeight: 800, color: "#fb923c" }}>
                        ${Math.round(m.balance).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="calc-formula-pill">
              Formula: A = P(1 + r/n)^(nt) + PMT &times; [((1 + i)^m - 1) / i]
            </div>
          </>
        ) : (
          <p className="abv-empty">Enter principal and rate parameters to project compound interest.</p>
        )}
      </div>
    </div>
  );
}
