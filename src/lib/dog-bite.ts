/**
 * USA dog bite settlement estimate using the common insurance/attorney
 * multiplier method (not a legal prediction).
 *
 * Estimate =
 *   (Economic damages + Economic × pain multiplier)
 *   × liability factor
 *   × (1 − comparative fault %)
 *   then optionally capped by insurance policy limits
 */

export type LiabilityRule = "strict" | "one-bite" | "mixed";

export type InjurySeverity =
  | "minor"
  | "moderate"
  | "severe"
  | "disfigurement"
  | "catastrophic";

export type LiabilityClarity = "clear" | "disputed";

export type InjuryLocation = "face" | "hand" | "other";

export interface UsStateInfo {
  code: string;
  name: string;
  rule: LiabilityRule;
  note: string;
}

/** General orientation — verify current statute/case law for your state. */
export const US_STATES: UsStateInfo[] = [
  { code: "AL", name: "Alabama", rule: "strict", note: "Strict liability for dog bites in many circumstances." },
  { code: "AK", name: "Alaska", rule: "one-bite", note: "Generally requires negligence or prior knowledge of danger." },
  { code: "AZ", name: "Arizona", rule: "strict", note: "Strict liability statute for dog bites." },
  { code: "AR", name: "Arkansas", rule: "one-bite", note: "Typically negligence / one-bite style proof." },
  { code: "CA", name: "California", rule: "strict", note: "Civil Code § 3342 — strict liability for bites." },
  { code: "CO", name: "Colorado", rule: "strict", note: "Strict liability with statutory defenses." },
  { code: "CT", name: "Connecticut", rule: "strict", note: "Strict liability for dog injuries in many cases." },
  { code: "DE", name: "Delaware", rule: "mixed", note: "Statutory and common-law theories may apply." },
  { code: "DC", name: "District of Columbia", rule: "strict", note: "Strict liability approach for dog bites." },
  { code: "FL", name: "Florida", rule: "strict", note: "Strict liability for dog bites (§ 767.04)." },
  { code: "GA", name: "Georgia", rule: "mixed", note: "Statutory liability with important defenses." },
  { code: "HI", name: "Hawaii", rule: "strict", note: "Strict liability for animal injuries in many cases." },
  { code: "ID", name: "Idaho", rule: "one-bite", note: "Generally negligence / prior knowledge." },
  { code: "IL", name: "Illinois", rule: "strict", note: "Animal Control Act — broad strict liability." },
  { code: "IN", name: "Indiana", rule: "strict", note: "Strict liability statute for dog bites." },
  { code: "IA", name: "Iowa", rule: "strict", note: "Strict liability for dog bites." },
  { code: "KS", name: "Kansas", rule: "one-bite", note: "Typically requires negligence or scienter." },
  { code: "KY", name: "Kentucky", rule: "strict", note: "Strict liability with statutory elements." },
  { code: "LA", name: "Louisiana", rule: "strict", note: "Civil Code animal liability rules." },
  { code: "ME", name: "Maine", rule: "strict", note: "Strict liability for dog attacks in many cases." },
  { code: "MD", name: "Maryland", rule: "one-bite", note: "Common-law negligence / one-bite oriented." },
  { code: "MA", name: "Massachusetts", rule: "strict", note: "Strict liability statute for dog injuries." },
  { code: "MI", name: "Michigan", rule: "strict", note: "Strict liability for dog bites." },
  { code: "MN", name: "Minnesota", rule: "strict", note: "Strict liability statute for dog attacks." },
  { code: "MS", name: "Mississippi", rule: "one-bite", note: "Generally negligence / prior knowledge." },
  { code: "MO", name: "Missouri", rule: "mixed", note: "Statutory and common-law paths may apply." },
  { code: "MT", name: "Montana", rule: "strict", note: "Strict liability for dog bites in many cases." },
  { code: "NE", name: "Nebraska", rule: "strict", note: "Strict liability statute for dog bites." },
  { code: "NV", name: "Nevada", rule: "one-bite", note: "Typically negligence / scienter focused." },
  { code: "NH", name: "New Hampshire", rule: "strict", note: "Strict liability for dog bites." },
  { code: "NJ", name: "New Jersey", rule: "strict", note: "Strict liability for dog bites." },
  { code: "NM", name: "New Mexico", rule: "one-bite", note: "Generally negligence / prior knowledge." },
  { code: "NY", name: "New York", rule: "one-bite", note: "One-bite / negligence — prior viciousness often key." },
  { code: "NC", name: "North Carolina", rule: "one-bite", note: "Generally requires negligence or scienter." },
  { code: "ND", name: "North Dakota", rule: "one-bite", note: "Typically negligence oriented." },
  { code: "OH", name: "Ohio", rule: "strict", note: "Strict liability for dog bites." },
  { code: "OK", name: "Oklahoma", rule: "strict", note: "Strict liability statute for dog bites." },
  { code: "OR", name: "Oregon", rule: "one-bite", note: "Generally negligence / prior knowledge." },
  { code: "PA", name: "Pennsylvania", rule: "mixed", note: "Common-law and statutory theories; facts matter." },
  { code: "RI", name: "Rhode Island", rule: "strict", note: "Strict liability for dog bites." },
  { code: "SC", name: "South Carolina", rule: "strict", note: "Strict liability statute for dog bites." },
  { code: "SD", name: "South Dakota", rule: "strict", note: "Strict liability for dog bites in many cases." },
  { code: "TN", name: "Tennessee", rule: "one-bite", note: "Generally negligence / prior knowledge." },
  { code: "TX", name: "Texas", rule: "one-bite", note: "One-bite / negligence — prior knowledge often required." },
  { code: "UT", name: "Utah", rule: "strict", note: "Strict liability for dog bites." },
  { code: "VT", name: "Vermont", rule: "mixed", note: "Statutory and common-law theories may apply." },
  { code: "VA", name: "Virginia", rule: "one-bite", note: "One-bite / negligence oriented." },
  { code: "WA", name: "Washington", rule: "strict", note: "Strict liability for dog bites." },
  { code: "WV", name: "West Virginia", rule: "strict", note: "Strict liability for dog bites." },
  { code: "WI", name: "Wisconsin", rule: "strict", note: "Strict liability (§ 174.02) for dog injuries." },
  { code: "WY", name: "Wyoming", rule: "one-bite", note: "Typically negligence / scienter focused." },
];

export const LIABILITY_RULE_LABELS: Record<LiabilityRule, string> = {
  strict: "Strict liability",
  "one-bite": "One-bite / negligence",
  mixed: "Mixed / statutory",
};

export const SEVERITY_OPTIONS: {
  id: InjurySeverity;
  label: string;
  description: string;
  low: number;
  high: number;
}[] = [
  {
    id: "minor",
    label: "Minor",
    description: "Puncture or shallow wound, one treatment, quick healing",
    low: 1.5,
    high: 2.0,
  },
  {
    id: "moderate",
    label: "Moderate",
    description: "Stitches, infection risk, follow-up visits",
    low: 2.5,
    high: 3.5,
  },
  {
    id: "severe",
    label: "Severe",
    description: "Nerve/muscle damage, ER/hospital stay",
    low: 3.5,
    high: 4.5,
  },
  {
    id: "disfigurement",
    label: "Disfigurement / surgery",
    description: "Plastic surgery, visible scarring likely",
    low: 4.5,
    high: 5.5,
  },
  {
    id: "catastrophic",
    label: "Catastrophic",
    description: "Permanent disability, major reconstructive care",
    low: 5.0,
    high: 6.0,
  },
];

export interface DogBiteInput {
  stateCode: string;
  medicalBills: number;
  futureMedical: number;
  lostWages: number;
  otherExpenses: number;
  severity: InjurySeverity;
  permanentScarring: boolean;
  childVictim: boolean;
  location: InjuryLocation;
  liabilityClarity: LiabilityClarity;
  knownPriorBite: boolean;
  comparativeFaultPercent: number;
  insuranceLimit: number | null;
}

export interface DogBiteResult {
  state: UsStateInfo;
  economicDamages: number;
  multiplierLow: number;
  multiplierHigh: number;
  painSufferingLow: number;
  painSufferingHigh: number;
  liabilityFactor: number;
  faultReduction: number;
  estimateLow: number;
  estimateHigh: number;
  cappedLow: number;
  cappedHigh: number;
  insuranceLimited: boolean;
}

export function getState(code: string): UsStateInfo | undefined {
  return US_STATES.find((s) => s.code === code);
}

function severityMultipliers(severity: InjurySeverity) {
  const option = SEVERITY_OPTIONS.find((s) => s.id === severity)!;
  return { low: option.low, high: option.high };
}

function locationBoost(location: InjuryLocation): number {
  if (location === "face") return 0.4;
  if (location === "hand") return 0.25;
  return 0;
}

export function liabilityFactor(input: {
  rule: LiabilityRule;
  clarity: LiabilityClarity;
  knownPriorBite: boolean;
}): number {
  const { rule, clarity, knownPriorBite } = input;

  if (clarity === "disputed") {
    if (rule === "strict") return 0.75;
    if (rule === "mixed") return 0.65;
    return knownPriorBite ? 0.6 : 0.5;
  }

  // Clear liability
  if (rule === "strict") return 1;
  if (rule === "mixed") return knownPriorBite ? 0.95 : 0.85;
  return knownPriorBite ? 0.95 : 0.7;
}

export function calculateDogBiteCompensation(
  input: DogBiteInput,
): DogBiteResult | null {
  const state = getState(input.stateCode);
  if (!state) return null;

  const medicalOk =
    Number.isFinite(input.medicalBills) && input.medicalBills >= 0;
  const futureOk =
    Number.isFinite(input.futureMedical) && input.futureMedical >= 0;
  const wagesOk = Number.isFinite(input.lostWages) && input.lostWages >= 0;
  const otherOk =
    Number.isFinite(input.otherExpenses) && input.otherExpenses >= 0;

  if (!medicalOk || !futureOk || !wagesOk || !otherOk) return null;

  const economicDamages =
    input.medicalBills +
    input.futureMedical +
    input.lostWages +
    input.otherExpenses;

  if (economicDamages <= 0) return null;

  const base = severityMultipliers(input.severity);
  let boost = locationBoost(input.location);
  if (input.permanentScarring) boost += 0.5;
  if (input.childVictim) boost += 0.5;

  const multiplierLow = Math.min(6.5, base.low + boost * 0.5);
  const multiplierHigh = Math.min(7, base.high + boost);

  const painSufferingLow = economicDamages * multiplierLow;
  const painSufferingHigh = economicDamages * multiplierHigh;

  const factor = liabilityFactor({
    rule: state.rule,
    clarity: input.liabilityClarity,
    knownPriorBite: input.knownPriorBite,
  });

  const fault = Math.min(100, Math.max(0, input.comparativeFaultPercent));
  const faultReduction = 1 - fault / 100;

  const estimateLow =
    (economicDamages + painSufferingLow) * factor * faultReduction;
  const estimateHigh =
    (economicDamages + painSufferingHigh) * factor * faultReduction;

  const limit =
    input.insuranceLimit != null &&
    Number.isFinite(input.insuranceLimit) &&
    input.insuranceLimit > 0
      ? input.insuranceLimit
      : null;

  const cappedLow = limit == null ? estimateLow : Math.min(estimateLow, limit);
  const cappedHigh =
    limit == null ? estimateHigh : Math.min(estimateHigh, limit);
  const insuranceLimited =
    limit != null && (estimateLow > limit || estimateHigh > limit);

  return {
    state,
    economicDamages,
    multiplierLow,
    multiplierHigh,
    painSufferingLow,
    painSufferingHigh,
    liabilityFactor: factor,
    faultReduction,
    estimateLow,
    estimateHigh,
    cappedLow,
    cappedHigh,
    insuranceLimited,
  };
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function formatUsd(value: number): string {
  return usd.format(Math.round(value));
}

export function formatMultiplier(value: number): string {
  return `${value.toFixed(2)}×`;
}
