/**
 * USA pay raise math using standard U.S. payroll periods:
 * - Hourly (annualized with hours/week × weeks/year; full-time default 40 × 52 = 2,080)
 * - Weekly (52)
 * - Bi-weekly (26) — every other week
 * - Semi-monthly (24) — twice a month
 * - Monthly (12)
 * - Annual
 */

export type PayFrequency =
  | "hourly"
  | "weekly"
  | "biweekly"
  | "semimonthly"
  | "monthly"
  | "annual";

export type RaiseMode = "percent" | "amount" | "newPay";

export const PAY_FREQUENCY_LABELS: Record<PayFrequency, string> = {
  hourly: "Hourly",
  weekly: "Weekly",
  biweekly: "Bi-weekly",
  semimonthly: "Semi-monthly",
  monthly: "Monthly",
  annual: "Annual",
};

/** U.S. full-time defaults */
export const DEFAULT_HOURS_PER_WEEK = 40;
export const DEFAULT_WEEKS_PER_YEAR = 52;

/** Employee FICA: Social Security 6.2% + Medicare 1.45% */
export const FICA_RATE = 0.062 + 0.0145;

export interface PayBreakdown {
  hourly: number;
  weekly: number;
  biweekly: number;
  semimonthly: number;
  monthly: number;
  annual: number;
}

export interface PayRaiseInput {
  currentPay: number;
  frequency: PayFrequency;
  raiseMode: RaiseMode;
  raiseValue: number;
  hoursPerWeek: number;
  weeksPerYear: number;
  inflationPercent: number;
  /** Combined federal + state marginal estimate for raise tax drag (e.g. 22). */
  estimatedTaxPercent: number;
}

export interface PayRaiseResult {
  current: PayBreakdown;
  next: PayBreakdown;
  raisePercent: number;
  raiseAmountAnnual: number;
  raiseAmountAtFrequency: number;
  realRaisePercent: number;
  estimatedNetRaiseAnnual: number;
  estimatedFicaOnRaise: number;
  estimatedIncomeTaxOnRaise: number;
  hoursPerWeek: number;
  weeksPerYear: number;
  frequency: PayFrequency;
}

export function periodsPerYear(
  frequency: PayFrequency,
  hoursPerWeek: number,
  weeksPerYear: number,
): number {
  switch (frequency) {
    case "hourly":
      return hoursPerWeek * weeksPerYear;
    case "weekly":
      return 52;
    case "biweekly":
      return 26;
    case "semimonthly":
      return 24;
    case "monthly":
      return 12;
    case "annual":
      return 1;
  }
}

export function toAnnual(
  amount: number,
  frequency: PayFrequency,
  hoursPerWeek: number,
  weeksPerYear: number,
): number {
  return amount * periodsPerYear(frequency, hoursPerWeek, weeksPerYear);
}

export function fromAnnual(
  annual: number,
  frequency: PayFrequency,
  hoursPerWeek: number,
  weeksPerYear: number,
): number {
  const periods = periodsPerYear(frequency, hoursPerWeek, weeksPerYear);
  return periods === 0 ? 0 : annual / periods;
}

export function breakdownFromAnnual(
  annual: number,
  hoursPerWeek: number,
  weeksPerYear: number,
): PayBreakdown {
  return {
    annual,
    hourly: fromAnnual(annual, "hourly", hoursPerWeek, weeksPerYear),
    weekly: fromAnnual(annual, "weekly", hoursPerWeek, weeksPerYear),
    biweekly: fromAnnual(annual, "biweekly", hoursPerWeek, weeksPerYear),
    semimonthly: fromAnnual(annual, "semimonthly", hoursPerWeek, weeksPerYear),
    monthly: fromAnnual(annual, "monthly", hoursPerWeek, weeksPerYear),
  };
}

export function calculatePayRaise(input: PayRaiseInput): PayRaiseResult | null {
  const {
    currentPay,
    frequency,
    raiseMode,
    raiseValue,
    hoursPerWeek,
    weeksPerYear,
    inflationPercent,
    estimatedTaxPercent,
  } = input;

  if (
    !Number.isFinite(currentPay) ||
    currentPay <= 0 ||
    !Number.isFinite(raiseValue) ||
    !Number.isFinite(hoursPerWeek) ||
    hoursPerWeek <= 0 ||
    !Number.isFinite(weeksPerYear) ||
    weeksPerYear <= 0
  ) {
    return null;
  }

  const currentAnnual = toAnnual(
    currentPay,
    frequency,
    hoursPerWeek,
    weeksPerYear,
  );

  let nextAnnual: number;

  if (raiseMode === "percent") {
    if (raiseValue < 0) return null;
    nextAnnual = currentAnnual * (1 + raiseValue / 100);
  } else if (raiseMode === "amount") {
    // Flat $ raise is in the selected pay frequency (USA payroll convention).
    const raiseAnnual = toAnnual(
      raiseValue,
      frequency,
      hoursPerWeek,
      weeksPerYear,
    );
    nextAnnual = currentAnnual + raiseAnnual;
  } else {
    // New pay entered in the same frequency as current pay.
    if (raiseValue <= 0) return null;
    nextAnnual = toAnnual(raiseValue, frequency, hoursPerWeek, weeksPerYear);
  }

  if (nextAnnual < 0) return null;

  const raiseAmountAnnual = nextAnnual - currentAnnual;
  const raisePercent =
    currentAnnual === 0 ? 0 : (raiseAmountAnnual / currentAnnual) * 100;
  const raiseAmountAtFrequency = fromAnnual(
    raiseAmountAnnual,
    frequency,
    hoursPerWeek,
    weeksPerYear,
  );

  const taxRate = Math.max(0, estimatedTaxPercent) / 100;
  const estimatedFicaOnRaise = raiseAmountAnnual * FICA_RATE;
  const estimatedIncomeTaxOnRaise = raiseAmountAnnual * taxRate;
  const estimatedNetRaiseAnnual =
    raiseAmountAnnual - estimatedFicaOnRaise - estimatedIncomeTaxOnRaise;

  return {
    current: breakdownFromAnnual(currentAnnual, hoursPerWeek, weeksPerYear),
    next: breakdownFromAnnual(nextAnnual, hoursPerWeek, weeksPerYear),
    raisePercent,
    raiseAmountAnnual,
    raiseAmountAtFrequency,
    realRaisePercent: raisePercent - inflationPercent,
    estimatedNetRaiseAnnual,
    estimatedFicaOnRaise,
    estimatedIncomeTaxOnRaise,
    hoursPerWeek,
    weeksPerYear,
    frequency,
  };
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const usdWhole = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatUsd(value: number, whole = false): string {
  return (whole ? usdWhole : usd).format(value);
}

export function formatPercent(value: number, digits = 2): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(digits)}%`;
}
