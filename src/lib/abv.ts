/**
 * ABV / brewing gravity math matching industry-standard formulas
 * used by major homebrew calculators (Standard + Hall alternate,
 * ASBC Beer-33 calories, Plato conversions).
 */

export type GravityUnit = "sg" | "plato";
export type AbvEquation = "standard" | "alternate";

export interface AbvInput {
  originalGravity: number;
  finalGravity: number;
  unit: GravityUnit;
  equation: AbvEquation;
}

export interface AbvResult {
  abv: number;
  attenuation: number;
  calories: number;
  ogSg: number;
  fgSg: number;
  ogPlato: number;
  fgPlato: number;
}

/** SG → °Plato (ASBC polynomial). */
export function sgToPlato(sg: number): number {
  return (
    -616.868 +
    1111.14 * sg -
    630.272 * Math.pow(sg, 2) +
    135.997 * Math.pow(sg, 3)
  );
}

/** °Plato → SG (Balling / Brewer's Friend inverse). */
export function platoToSg(plato: number): number {
  return plato / (258.6 - (plato / 258.2) * 227.1) + 1;
}

/** Standard formula: ABV = (OG − FG) × 131.25 */
export function standardAbv(ogSg: number, fgSg: number): number {
  return (ogSg - fgSg) * 131.25;
}

/**
 * Alternate (Hall) formula — more accurate for high-gravity beers:
 * ABV = (76.08 × (OG − FG) / (1.775 − OG)) × (FG / 0.794)
 */
export function alternateAbv(ogSg: number, fgSg: number): number {
  const abw = (76.08 * (ogSg - fgSg)) / (1.775 - ogSg);
  return abw * (fgSg / 0.794);
}

/**
 * Apparent attenuation from Plato extracts:
 * (1 − FG°P / OG°P) × 100
 */
export function apparentAttenuation(ogPlato: number, fgPlato: number): number {
  if (ogPlato === 0) return 0;
  return (1 - fgPlato / ogPlato) * 100;
}

/**
 * Calories per 12 oz (ASBC Beer-33 / Ensminger):
 * RE = 0.1808×OE + 0.8192×AE
 * ABW = (OE − RE) / (2.0665 − 0.010665×OE)
 * Cal = [(6.9×ABW) + 4.0×(RE − 0.1)] × FG_SG × 3.55
 */
export function caloriesPer12oz(ogPlato: number, fgPlato: number): number {
  if (!Number.isFinite(ogPlato) || ogPlato <= 0) return 0;
  if (!Number.isFinite(fgPlato) || fgPlato <= -12) return 0;

  const realExtract = 0.1808 * ogPlato + 0.8192 * fgPlato;
  const abw =
    (ogPlato - realExtract) / (2.0665 - 0.010665 * ogPlato);
  const fgSg = platoToSg(fgPlato);
  return (6.9 * abw + 4.0 * (realExtract - 0.1)) * fgSg * 3.55;
}

export function calculateAbv(input: AbvInput): AbvResult | null {
  const { originalGravity, finalGravity, unit, equation } = input;

  if (
    !Number.isFinite(originalGravity) ||
    !Number.isFinite(finalGravity) ||
    originalGravity <= 0
  ) {
    return null;
  }

  let ogSg: number;
  let fgSg: number;
  let ogPlato: number;
  let fgPlato: number;

  if (unit === "sg") {
    ogSg = originalGravity;
    fgSg = finalGravity;
    ogPlato = sgToPlato(ogSg);
    fgPlato = sgToPlato(fgSg);
  } else {
    ogPlato = originalGravity;
    fgPlato = finalGravity;
    ogSg = platoToSg(ogPlato);
    fgSg = platoToSg(fgPlato);
  }

  if (fgSg >= ogSg) {
    return null;
  }

  const abv =
    equation === "standard"
      ? standardAbv(ogSg, fgSg)
      : alternateAbv(ogSg, fgSg);

  return {
    abv,
    attenuation: apparentAttenuation(ogPlato, fgPlato),
    calories: caloriesPer12oz(ogPlato, fgPlato),
    ogSg,
    fgSg,
    ogPlato,
    fgPlato,
  };
}

export function formatAbv(value: number, digits = 2): string {
  return `${value.toFixed(digits)}%`;
}

export function formatNumber(value: number, digits: number): string {
  return value.toFixed(digits);
}
