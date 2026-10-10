"use client";

import { useId, useMemo, useState } from "react";

export function FuelCostCalculator() {
  const [distance, setDistance] = useState<string>("350");
  const [unitSystem, setUnitSystem] = useState<"us" | "metric">("us");
  const [efficiency, setEfficiency] = useState<string>("28"); // MPG or L/100km
  const [fuelPrice, setFuelPrice] = useState<string>("3.65"); // $ per gallon or $ per liter
  const [passengers, setPassengers] = useState<number>(1);
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);

  const distanceId = useId();
  const efficiencyId = useId();
  const fuelPriceId = useId();

  const results = useMemo(() => {
    const distNum = parseFloat(distance);
    const effNum = parseFloat(efficiency);
    const priceNum = parseFloat(fuelPrice);

    if (isNaN(distNum) || distNum <= 0 || isNaN(effNum) || effNum <= 0 || isNaN(priceNum) || priceNum <= 0) {
      return null;
    }

    const effectiveDistance = isRoundTrip ? distNum * 2 : distNum;

    let totalFuelAmount = 0; // Gallons or Liters
    if (unitSystem === "us") {
      // MPG: gallons = distance / MPG
      totalFuelAmount = effectiveDistance / effNum;
    } else {
      // Metric: L/100km: liters = (distance / 100) * L_per_100km
      totalFuelAmount = (effectiveDistance / 100) * effNum;
    }

    const totalCost = totalFuelAmount * priceNum;
    const costPerPerson = totalCost / Math.max(1, passengers);
    const costPerUnitDistance = effectiveDistance > 0 ? totalCost / effectiveDistance : 0;

    return {
      effectiveDistance,
      totalFuelAmount,
      totalCost,
      costPerPerson,
      costPerUnitDistance,
      distanceUnit: unitSystem === "us" ? "miles" : "km",
      fuelUnit: unitSystem === "us" ? "gallons" : "liters",
    };
  }, [distance, unitSystem, efficiency, fuelPrice, passengers, isRoundTrip]);

  return (
    <div className="abv-calculator">
      <div className="abv-calculator__panel">
        <div className="abv-field" style={{ gridColumn: "1 / -1" }}>
          <label className="abv-label">Measurement Standard</label>
          <div className="calc-tabs">
            <button
              type="button"
              className={`calc-tab-btn ${unitSystem === "us" ? "active" : ""}`}
              onClick={() => {
                if (unitSystem !== "us") {
                  setUnitSystem("us");
                  setEfficiency("28");
                  setFuelPrice("3.65");
                }
              }}
            >
              U.S. Standard (Miles, MPG, $/gal)
            </button>
            <button
              type="button"
              className={`calc-tab-btn ${unitSystem === "metric" ? "active" : ""}`}
              onClick={() => {
                if (unitSystem !== "metric") {
                  setUnitSystem("metric");
                  setEfficiency("8.4");
                  setFuelPrice("1.55");
                }
              }}
            >
              Metric (Kilometers, L/100km, $/L)
            </button>
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={distanceId} className="abv-label">
            Trip Distance ({unitSystem === "us" ? "Miles" : "Kilometers"})
          </label>
          <div className="input-group">
            <input
              id={distanceId}
              type="number"
              min="1"
              step="1"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder={unitSystem === "us" ? "350" : "550"}
            />
            <span className="input-affix">{unitSystem === "us" ? "mi" : "km"}</span>
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={efficiencyId} className="abv-label">
            Fuel Efficiency ({unitSystem === "us" ? "Miles Per Gallon / MPG" : "Liters per 100 km"})
          </label>
          <div className="input-group">
            <input
              id={efficiencyId}
              type="number"
              min="1"
              step="0.1"
              value={efficiency}
              onChange={(e) => setEfficiency(e.target.value)}
              placeholder={unitSystem === "us" ? "28" : "8.4"}
            />
            <span className="input-affix">{unitSystem === "us" ? "MPG" : "L/100km"}</span>
          </div>
        </div>

        <div className="abv-field">
          <label htmlFor={fuelPriceId} className="abv-label">
            Fuel Price ({unitSystem === "us" ? "$ per Gallon" : "$ per Liter"})
          </label>
          <div className="input-group">
            <span className="input-affix">$</span>
            <input
              id={fuelPriceId}
              type="number"
              min="0.1"
              step="0.01"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              placeholder={unitSystem === "us" ? "3.65" : "1.55"}
            />
            <span className="input-affix">{unitSystem === "us" ? "/gal" : "/L"}</span>
          </div>
        </div>

        <div className="abv-field">
          <label className="abv-label">Trip Options</label>
          <label className="tip-checkbox-label">
            <input
              type="checkbox"
              checked={isRoundTrip}
              onChange={(e) => setIsRoundTrip(e.target.checked)}
            />
            <span>Round Trip (Double Distance &times;2)</span>
          </label>
        </div>

        <div className="abv-field" style={{ gridColumn: "1 / -1" }}>
          <label className="abv-label">Number of Passengers Splitting Fuel</label>
          <div className="people-stepper">
            <button
              type="button"
              className="stepper-btn"
              onClick={() => setPassengers((p) => Math.max(1, p - 1))}
              aria-label="Decrease passenger count"
            >
              -
            </button>
            <span className="stepper-count">
              {passengers} {passengers === 1 ? "person" : "people"}
            </span>
            <button
              type="button"
              className="stepper-btn"
              onClick={() => setPassengers((p) => Math.min(10, p + 1))}
              aria-label="Increase passenger count"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="abv-results">
        {results ? (
          <>
            <span className="abv-result-label">Total Estimated Fuel Cost</span>
            <div className="calc-result-value">
              ${results.totalCost.toFixed(2)}
            </div>

            {passengers > 1 && (
              <div className="tip-split-summary" style={{ marginTop: "0.5rem" }}>
                <div className="tip-split-card" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.75rem", padding: "0.85rem", textAlign: "center" }}>
                  <span className="abv-result-label">Cost per Person ({passengers} ways)</span>
                  <div className="tip-split-amount" style={{ color: "#4ade80", fontSize: "1.35rem", fontWeight: 700 }}>
                    ${results.costPerPerson.toFixed(2)}
                  </div>
                </div>
                <div className="tip-split-card" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "0.75rem", padding: "0.85rem", textAlign: "center" }}>
                  <span className="abv-result-label">Cost per {unitSystem === "us" ? "Mile" : "KM"}</span>
                  <div className="tip-split-amount" style={{ color: "#fb923c", fontSize: "1.35rem", fontWeight: 700 }}>
                    ${results.costPerUnitDistance.toFixed(2)}
                  </div>
                </div>
              </div>
            )}

            <div className="calc-result-details">
              <div className="summary-row">
                <span>Total Fuel Required:</span>
                <strong>
                  {results.totalFuelAmount.toFixed(2)} {results.fuelUnit}
                </strong>
              </div>
              <div className="summary-row">
                <span>Total Route Distance:</span>
                <strong>
                  {results.effectiveDistance.toLocaleString()} {results.distanceUnit}
                </strong>
              </div>
              {passengers === 1 && (
                <div className="summary-row">
                  <span>Cost per {unitSystem === "us" ? "Mile" : "KM"}:</span>
                  <strong>${results.costPerUnitDistance.toFixed(2)}</strong>
                </div>
              )}
            </div>

            <div className="calc-formula-pill">
              Cost = ({results.effectiveDistance} {results.distanceUnit} &divide; {efficiency}) &times; ${fuelPrice}
            </div>
          </>
        ) : (
          <p className="abv-empty">Enter distance and fuel efficiency values to calculate road trip gas cost.</p>
        )}
      </div>
    </div>
  );
}
