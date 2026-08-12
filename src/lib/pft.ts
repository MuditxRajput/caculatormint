import { fev1, fvc, fev1fvc } from "@/lib/gli2012";
import type { ethnicity, sex } from "@/lib/gli2012/util";

export type PftSex = sex;
export type PftEthnicity = ethnicity;

export const PFT_SEX_OPTIONS: { id: PftSex; label: string }[] = [
  { id: "Male", label: "Male" },
  { id: "Female", label: "Female" },
];

/** GLI-2012 race/ethnicity groups (USA-relevant labels). */
export const PFT_ETHNICITY_OPTIONS: {
  id: PftEthnicity;
  label: string;
  hint: string;
}[] = [
  {
    id: "Caucasian",
    label: "White / Caucasian",
    hint: "GLI Caucasian reference",
  },
  {
    id: "AfrAm",
    label: "African American / Black",
    hint: "GLI African-American reference — common in U.S. labs",
  },
  {
    id: "NEAsia",
    label: "Northeast Asian",
    hint: "e.g. Chinese, Korean, Japanese ancestry groups in GLI",
  },
  {
    id: "SEAsia",
    label: "Southeast Asian",
    hint: "e.g. Thai, Vietnamese, Filipino ancestry groups in GLI",
  },
  {
    id: "Other",
    label: "Other / mixed",
    hint: "GLI other/mixed category when ancestry is mixed or not listed",
  },
];

export type HeightUnit = "in" | "cm";
export type VolumeUnit = "L";

export interface PftInput {
  ageYears: number;
  sex: PftSex;
  height: number;
  heightUnit: HeightUnit;
  ethnicity: PftEthnicity;
  measuredFev1L: number;
  measuredFvcL: number;
  /** Optional measured FEV1/FVC as percent (e.g. 78). If omitted, uses FEV1/FVC from volumes. */
  measuredRatioPercent?: number;
}

export interface MetricResult {
  measured: number;
  predicted: number;
  percentPredicted: number;
  lln: number;
  uln: number;
  zScore: number;
  belowLln: boolean;
}

export type ObstructionSeverity =
  | "none"
  | "mild"
  | "moderate"
  | "moderately_severe"
  | "severe"
  | "very_severe";

export type SpirometryPattern =
  | "normal"
  | "obstruction"
  | "possible_restriction"
  | "mixed"
  | "nonspecific";

export interface PftResult {
  heightCm: number;
  fev1: MetricResult;
  fvc: MetricResult;
  ratio: MetricResult & { measuredPercent: number; predictedPercent: number };
  pattern: SpirometryPattern;
  patternLabel: string;
  obstructionSeverity: ObstructionSeverity;
  obstructionSeverityLabel: string;
  notes: string[];
}

const LLN_Z = -1.645;

function round(n: number, digits = 2): number {
  const f = 10 ** digits;
  return Math.round(n * f) / f;
}

function heightToCm(height: number, unit: HeightUnit): number {
  return unit === "in" ? height * 2.54 : height;
}

/** Approximate ULN from LMS parameters when package returns only LLN. */
function ulnFromLms(L: number, M: number, S: number): number {
  const term = 1 + 1.645 * L * S;
  if (term <= 0 || !Number.isFinite(term)) {
    return M * Math.exp(1.645 * S);
  }
  return Math.exp(Math.log(M) + Math.log(term) / L);
}

function toMetric(
  measured: number,
  raw: { L: number; M: number; S: number; LLN: number; percent: number; zscore: number },
): MetricResult {
  return {
    measured,
    predicted: raw.M,
    percentPredicted: raw.percent,
    lln: raw.LLN,
    uln: ulnFromLms(raw.L, raw.M, raw.S),
    zScore: raw.zscore,
    belowLln: raw.zscore < LLN_Z,
  };
}

/**
 * ATS/ERS 2005 obstruction severity when FEV1/FVC is below LLN,
 * graded by FEV1 % predicted.
 */
export function gradeObstructionSeverity(
  obstructed: boolean,
  fev1PercentPredicted: number,
): { id: ObstructionSeverity; label: string } {
  if (!obstructed) {
    return { id: "none", label: "No obstruction (FEV1/FVC ≥ LLN)" };
  }
  if (fev1PercentPredicted >= 70) {
    return { id: "mild", label: "Mild obstruction" };
  }
  if (fev1PercentPredicted >= 60) {
    return { id: "moderate", label: "Moderate obstruction" };
  }
  if (fev1PercentPredicted >= 50) {
    return {
      id: "moderately_severe",
      label: "Moderately severe obstruction",
    };
  }
  if (fev1PercentPredicted >= 35) {
    return { id: "severe", label: "Severe obstruction" };
  }
  return { id: "very_severe", label: "Very severe obstruction" };
}

function classifyPattern(
  ratioBelow: boolean,
  fvcBelow: boolean,
  fev1Below: boolean,
): { id: SpirometryPattern; label: string } {
  if (ratioBelow && fvcBelow) {
    return {
      id: "mixed",
      label: "Mixed obstructive and restrictive pattern (spirometry)",
    };
  }
  if (ratioBelow) {
    return { id: "obstruction", label: "Obstructive pattern" };
  }
  if (fvcBelow) {
    return {
      id: "possible_restriction",
      label: "Possible restriction (confirm with TLC if indicated)",
    };
  }
  if (fev1Below) {
    return {
      id: "nonspecific",
      label: "Nonspecific pattern (FEV1 low; ratio and FVC ≥ LLN)",
    };
  }
  return { id: "normal", label: "Within normal limits (vs GLI-2012 LLN)" };
}

export function calculatePft(input: PftInput): PftResult | null {
  const {
    ageYears,
    sex,
    height,
    heightUnit,
    ethnicity,
    measuredFev1L,
    measuredFvcL,
    measuredRatioPercent,
  } = input;

  if (
    !Number.isFinite(ageYears) ||
    ageYears < 3 ||
    ageYears > 95 ||
    !Number.isFinite(height) ||
    height <= 0 ||
    !Number.isFinite(measuredFev1L) ||
    measuredFev1L <= 0 ||
    !Number.isFinite(measuredFvcL) ||
    measuredFvcL <= 0
  ) {
    return null;
  }

  const heightCm = heightToCm(height, heightUnit);
  if (heightCm < 100 || heightCm > 230) return null;

  const ratioFromVolumes = measuredFev1L / measuredFvcL;
  let measuredRatio = ratioFromVolumes;
  if (
    measuredRatioPercent != null &&
    Number.isFinite(measuredRatioPercent) &&
    measuredRatioPercent > 0
  ) {
    measuredRatio = measuredRatioPercent / 100;
  }
  if (measuredRatio <= 0 || measuredRatio > 1.2) return null;

  const base = { age: ageYears, sex, height: heightCm, ethnicity };

  const fev1Raw = fev1({ ...base, measured: measuredFev1L });
  const fvcRaw = fvc({ ...base, measured: measuredFvcL });
  const ratioRaw = fev1fvc({ ...base, measured: measuredRatio });

  const fev1Metric = toMetric(measuredFev1L, fev1Raw);
  const fvcMetric = toMetric(measuredFvcL, fvcRaw);
  const ratioMetric = {
    ...toMetric(measuredRatio, ratioRaw),
    measuredPercent: measuredRatio * 100,
    predictedPercent: ratioRaw.M * 100,
  };

  const obstructed = ratioMetric.belowLln;
  const severity = gradeObstructionSeverity(
    obstructed,
    fev1Metric.percentPredicted,
  );
  const pattern = classifyPattern(
    ratioMetric.belowLln,
    fvcMetric.belowLln,
    fev1Metric.belowLln,
  );

  const notes: string[] = [
    "Predicted values, LLN, and Z-scores use GLI-2012 (Quanjer et al.) equations for FEV1, FVC, and FEV1/FVC.",
    "LLN corresponds to the 5th percentile (Z ≈ −1.645). Values below LLN are flagged as abnormal for screening.",
    "Obstruction severity follows ATS/ERS 2005 bands based on FEV1 % predicted when FEV1/FVC is below LLN.",
    "Restriction cannot be confirmed on spirometry alone — low FVC with a normal ratio suggests possible restriction; TLC is required for confirmation.",
    "Educational tool only. Not a substitute for accredited PFT software, quality review, or clinical judgment.",
  ];

  if (
    measuredRatioPercent == null &&
    Math.abs(ratioFromVolumes - measuredRatio) < 1e-9
  ) {
    notes.unshift(
      `FEV1/FVC was calculated from volumes (${round(measuredFev1L, 3)} ÷ ${round(measuredFvcL, 3)} = ${round(measuredRatio * 100, 1)}%).`,
    );
  }

  return {
    heightCm: round(heightCm, 1),
    fev1: {
      ...fev1Metric,
      measured: round(fev1Metric.measured, 3),
      predicted: round(fev1Metric.predicted, 3),
      percentPredicted: round(fev1Metric.percentPredicted, 1),
      lln: round(fev1Metric.lln, 3),
      uln: round(fev1Metric.uln, 3),
      zScore: round(fev1Metric.zScore, 2),
    },
    fvc: {
      ...fvcMetric,
      measured: round(fvcMetric.measured, 3),
      predicted: round(fvcMetric.predicted, 3),
      percentPredicted: round(fvcMetric.percentPredicted, 1),
      lln: round(fvcMetric.lln, 3),
      uln: round(fvcMetric.uln, 3),
      zScore: round(fvcMetric.zScore, 2),
    },
    ratio: {
      ...ratioMetric,
      measured: round(ratioMetric.measured, 4),
      predicted: round(ratioMetric.predicted, 4),
      percentPredicted: round(ratioMetric.percentPredicted, 1),
      lln: round(ratioMetric.lln, 4),
      uln: round(ratioMetric.uln, 4),
      zScore: round(ratioMetric.zScore, 2),
      measuredPercent: round(ratioMetric.measuredPercent, 1),
      predictedPercent: round(ratioMetric.predictedPercent, 1),
    },
    pattern: pattern.id,
    patternLabel: pattern.label,
    obstructionSeverity: severity.id,
    obstructionSeverityLabel: severity.label,
    notes,
  };
}

export function formatZ(z: number): string {
  const sign = z > 0 ? "+" : "";
  return `${sign}${z.toFixed(2)}`;
}

export function formatLiters(n: number): string {
  return `${n.toFixed(2)} L`;
}

export function formatPercent(n: number): string {
  return `${n.toFixed(1)}%`;
}
