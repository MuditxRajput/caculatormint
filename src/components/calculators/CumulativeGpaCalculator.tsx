"use client";

import { useId, useState } from "react";

type GpaView = "cumulative" | "middle-school";

interface CourseRow {
  id: string;
  name: string;
  grade: string; // letter grade e.g. "A", "B+" or percentage
  credits: string; // e.g. "3", "4", "1"
  type: "regular" | "honors" | "ap"; // for weighted
}

interface MiddleSchoolRow {
  id: string;
  subject: string;
  grade: string; // "A+", "A", "A-", "B+", etc.
}

const GRADE_POINTS: Record<string, number> = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  F: 0.0,
};

const GRADE_OPTIONS = [
  { label: "A+ (97–100%)", value: "A+" },
  { label: "A (93–96%)", value: "A" },
  { label: "A- (90–92%)", value: "A-" },
  { label: "B+ (87–89%)", value: "B+" },
  { label: "B (83–86%)", value: "B" },
  { label: "B- (80–82%)", value: "B-" },
  { label: "C+ (77–79%)", value: "C+" },
  { label: "C (73–76%)", value: "C" },
  { label: "C- (70–72%)", value: "C-" },
  { label: "D+ (67–69%)", value: "D+" },
  { label: "D (60–66%)", value: "D" },
  { label: "F (Below 60%)", value: "F" },
];

export function CumulativeGpaCalculator({
  initialView = "cumulative",
}: {
  initialView?: GpaView;
} = {}) {
  const [view, setView] = useState<GpaView>(initialView);

  // Cumulative Mode State
  const priorGpaId = useId();
  const priorCreditsId = useId();
  const [priorGpa, setPriorGpa] = useState<string>("3.45");
  const [priorCredits, setPriorCredits] = useState<string>("45");

  const [courses, setCourses] = useState<CourseRow[]>([
    { id: "1", name: "English 101 / Literature", grade: "A", credits: "3", type: "regular" },
    { id: "2", name: "Calculus / Pre-Calculus", grade: "B+", credits: "4", type: "honors" },
    { id: "3", name: "General Chemistry / Lab", grade: "A-", credits: "4", type: "regular" },
    { id: "4", name: "US History / Government", grade: "A", credits: "3", type: "ap" },
  ]);

  const [targetGpa, setTargetGpa] = useState<string>("3.60");
  const [targetFutureCredits, setTargetFutureCredits] = useState<string>("30");

  // Middle School Mode State
  const [msCourses, setMsCourses] = useState<MiddleSchoolRow[]>([
    { id: "1", subject: "Math (Pre-Algebra / Algebra 1)", grade: "A" },
    { id: "2", subject: "English Language Arts (ELA)", grade: "A-" },
    { id: "3", subject: "Science (Earth & Life Science)", grade: "B+" },
    { id: "4", subject: "Social Studies / US History", grade: "A" },
    { id: "5", subject: "Physical Education (P.E. & Health)", grade: "A" },
    { id: "6", subject: "Elective (Art / Band / Spanish)", grade: "A" },
  ]);

  // --- Calculations for Mode 1: Cumulative College / High School GPA ---
  const numPriorGpa = parseFloat(priorGpa) || 0;
  const numPriorCredits = parseFloat(priorCredits) || 0;
  const priorQualityPoints = numPriorGpa * numPriorCredits;

  let currentTermUnweightedPoints = 0;
  let currentTermWeightedPoints = 0;
  let currentTermCredits = 0;

  courses.forEach((c) => {
    const creds = parseFloat(c.credits) || 0;
    const basePts = GRADE_POINTS[c.grade] ?? 0;
    let weightAdd = 0;
    if (c.type === "honors") weightAdd = 0.5;
    if (c.type === "ap") weightAdd = 1.0;

    currentTermCredits += creds;
    currentTermUnweightedPoints += basePts * creds;
    currentTermWeightedPoints += (basePts + weightAdd) * creds;
  });

  const currentTermGpaUnweighted =
    currentTermCredits > 0 ? currentTermUnweightedPoints / currentTermCredits : 0;
  const currentTermGpaWeighted =
    currentTermCredits > 0 ? currentTermWeightedPoints / currentTermCredits : 0;

  const totalCreditsEarned = numPriorCredits + currentTermCredits;
  const newCumulativeUnweighted =
    totalCreditsEarned > 0
      ? (priorQualityPoints + currentTermUnweightedPoints) / totalCreditsEarned
      : 0;
  const newCumulativeWeighted =
    totalCreditsEarned > 0
      ? (priorQualityPoints + currentTermWeightedPoints) / totalCreditsEarned
      : 0;

  // Target GPA Planner
  const numTargetGpa = parseFloat(targetGpa) || 3.5;
  const numFutureCreds = parseFloat(targetFutureCredits) || 15;
  const requiredTotalPoints = numTargetGpa * (totalCreditsEarned + numFutureCreds);
  const currentTotalPoints = priorQualityPoints + currentTermUnweightedPoints;
  const neededFutureGpa =
    numFutureCreds > 0 ? (requiredTotalPoints - currentTotalPoints) / numFutureCreds : 0;

  // --- Calculations for Mode 2: Middle School GPA ---
  let msTotalPoints = 0;
  let msCount = 0;

  msCourses.forEach((c) => {
    if (c.grade && GRADE_POINTS[c.grade] !== undefined) {
      msTotalPoints += GRADE_POINTS[c.grade];
      msCount += 1;
    }
  });

  const msGpa = msCount > 0 ? msTotalPoints / msCount : 0;

  // Middle School Honor Roll Classification
  const getHonorRollStatus = (gpa: number) => {
    if (gpa >= 3.8) {
      return {
        title: "Principal's Honor Roll (High Honors)",
        badgeColor: "#4ade80",
        message: "Outstanding achievement! In the top academic tier for USA & Canada middle schools.",
      };
    }
    if (gpa >= 3.5) {
      return {
        title: "Honor Roll",
        badgeColor: "#60a5fa",
        message: "Great work! Solid academic standing qualifying for high school honors prep tracks.",
      };
    }
    if (gpa >= 3.0) {
      return {
        title: "Merit Roll / Good Standing",
        badgeColor: "#fb923c",
        message: "Solid work with B-average standing. Ready for standard high school coursework.",
      };
    }
    return {
      title: "Academic Standing",
      badgeColor: "#cbd5e1",
      message: "Room for growth. Focusing on core subjects will raise your cumulative GPA.",
    };
  };

  const msHonor = getHonorRollStatus(msGpa);

  return (
    <div className="calc-surface">
      {/* Mode Navigation Tabs */}
      <div className="calc-tabs" role="tablist" aria-label="GPA Calculation Modes">
        <button
          type="button"
          role="tab"
          aria-selected={view === "cumulative"}
          className={`calc-tab-btn ${view === "cumulative" ? "active" : ""}`}
          onClick={() => setView("cumulative")}
        >
          Cumulative GPA (College &amp; High School)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={view === "middle-school"}
          className={`calc-tab-btn ${view === "middle-school" ? "active" : ""}`}
          onClick={() => setView("middle-school")}
        >
          Middle School GPA (Grades 6–8)
        </button>
      </div>

      <div className="calc-grid">
        {/* =========================================================================
            MODE 1: CUMULATIVE GPA (COLLEGE / HIGH SCHOOL)
           ========================================================================= */}
        {view === "cumulative" && (
          <div className="calc-form">
            <h2 className="calc-heading">Calculate Cumulative GPA with Prior Credits</h2>
            <p className="calc-subheading">
              Combines your prior academic transcript with current semester coursework to determine
              your updated cumulative GPA on the standard 4.0 and 5.0 weighted scale.
            </p>

            {/* Prior Academic History */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                padding: "1rem 1.25rem",
                background: "#f8fafc",
                borderRadius: "0.85rem",
                border: "1px solid #e2e8f0",
                marginBottom: "1.25rem",
              }}
            >
              <div className="abv-field">
                <label htmlFor={priorGpaId} className="abv-label">
                  Current Cumulative GPA
                </label>
                <div className="input-group">
                  <input
                    id={priorGpaId}
                    type="number"
                    step="0.01"
                    min="0"
                    max="5.0"
                    value={priorGpa}
                    onChange={(e) => setPriorGpa(e.target.value)}
                    placeholder="3.45"
                  />
                  <span className="input-affix">GPA</span>
                </div>
                <span className="abv-help">From your existing official transcript.</span>
              </div>

              <div className="abv-field">
                <label htmlFor={priorCreditsId} className="abv-label">
                  Prior Completed Credits / Units
                </label>
                <div className="input-group">
                  <input
                    id={priorCreditsId}
                    type="number"
                    step="0.5"
                    min="0"
                    value={priorCredits}
                    onChange={(e) => setPriorCredits(e.target.value)}
                    placeholder="45"
                  />
                  <span className="input-affix">credits</span>
                </div>
                <span className="abv-help">Total graded credits completed so far.</span>
              </div>
            </div>

            {/* Current Semester Course List */}
            <h3 style={{ fontSize: "1.08rem", fontWeight: 700, margin: "0 0 0.65rem", color: "#09090b" }}>
              Current Semester Courses
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {courses.map((course, idx) => (
                <div
                  key={course.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.6fr 1.3fr 0.9fr 1.1fr auto",
                    gap: "0.45rem",
                    alignItems: "center",
                    background: "#f8fafc",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Course Name
                    </label>
                    <input
                      type="text"
                      value={course.name}
                      onChange={(e) => {
                        const updated = [...courses];
                        updated[idx].name = e.target.value;
                        setCourses(updated);
                      }}
                      placeholder={`Course ${idx + 1}`}
                      style={{ fontSize: "0.88rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Grade
                    </label>
                    <select
                      value={course.grade}
                      onChange={(e) => {
                        const updated = [...courses];
                        updated[idx].grade = e.target.value;
                        setCourses(updated);
                      }}
                      style={{ fontSize: "0.88rem", padding: "0.45rem 0.65rem" }}
                    >
                      {GRADE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Credits
                    </label>
                    <input
                      type="number"
                      step="0.5"
                      min="0.5"
                      max="10"
                      value={course.credits}
                      onChange={(e) => {
                        const updated = [...courses];
                        updated[idx].credits = e.target.value;
                        setCourses(updated);
                      }}
                      placeholder="3"
                      style={{ fontSize: "0.88rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Course Level
                    </label>
                    <select
                      value={course.type}
                      onChange={(e) => {
                        const updated = [...courses];
                        updated[idx].type = e.target.value as "regular" | "honors" | "ap";
                        setCourses(updated);
                      }}
                      style={{ fontSize: "0.85rem", padding: "0.45rem 0.5rem" }}
                    >
                      <option value="regular">Regular (4.0)</option>
                      <option value="honors">Honors (+0.5)</option>
                      <option value="ap">AP/IB (+1.0)</option>
                    </select>
                  </div>

                  <div style={{ paddingTop: "1.1rem" }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (courses.length > 1) {
                          setCourses(courses.filter((_, i) => i !== idx));
                        }
                      }}
                      disabled={courses.length <= 1}
                      title="Remove Course"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: courses.length <= 1 ? "#cbd5e1" : "#ef4444",
                        fontSize: "1.15rem",
                        cursor: courses.length <= 1 ? "not-allowed" : "pointer",
                        padding: "0.2rem 0.4rem",
                      }}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <button
                type="button"
                className="button button--ghost button--sm"
                onClick={() =>
                  setCourses([
                    ...courses,
                    {
                      id: Date.now().toString(),
                      name: `Course ${courses.length + 1}`,
                      grade: "A",
                      credits: "3",
                      type: "regular",
                    },
                  ])
                }
              >
                + Add Course
              </button>
            </div>

            {/* Target Cumulative GPA Solver */}
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem 1.25rem",
                background: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: "0.85rem",
              }}
            >
              <h4 style={{ margin: "0 0 0.5rem", color: "#9a3412", fontSize: "0.95rem", fontWeight: 700 }}>
                Target Graduation GPA Planner
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div>
                  <label className="abv-label" style={{ color: "#9a3412", fontSize: "0.75rem" }}>
                    Goal Cumulative GPA
                  </label>
                  <input
                    type="number"
                    step="0.05"
                    min="1.0"
                    max="4.0"
                    value={targetGpa}
                    onChange={(e) => setTargetGpa(e.target.value)}
                    style={{ padding: "0.45rem 0.65rem", fontSize: "0.9rem" }}
                  />
                </div>
                <div>
                  <label className="abv-label" style={{ color: "#9a3412", fontSize: "0.75rem" }}>
                    Future Credits Remaining
                  </label>
                  <input
                    type="number"
                    step="1"
                    min="1"
                    value={targetFutureCredits}
                    onChange={(e) => setTargetFutureCredits(e.target.value)}
                    style={{ padding: "0.45rem 0.65rem", fontSize: "0.9rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            MODE 2: MIDDLE SCHOOL GPA CALCULATOR (GRADES 6, 7, 8)
           ========================================================================= */}
        {view === "middle-school" && (
          <div className="calc-form">
            <h2 className="calc-heading">GPA Calculator for Middle Schoolers (Grades 6–8)</h2>
            <p className="calc-subheading">
              Designed specifically for USA &amp; Canada middle school students and parents.
              Calculate your report card GPA, check honor roll eligibility, and prepare for high school honors tracks.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {msCourses.map((row, idx) => (
                <div
                  key={row.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1.5fr auto",
                    gap: "0.75rem",
                    alignItems: "center",
                    background: "#f8fafc",
                    padding: "0.65rem 0.95rem",
                    borderRadius: "0.75rem",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Subject / Class {idx + 1}
                    </label>
                    <input
                      type="text"
                      value={row.subject}
                      onChange={(e) => {
                        const updated = [...msCourses];
                        updated[idx].subject = e.target.value;
                        setMsCourses(updated);
                      }}
                      style={{ fontSize: "0.92rem", padding: "0.45rem 0.65rem" }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#18181b", display: "block" }}>
                      Letter Grade
                    </label>
                    <select
                      value={row.grade}
                      onChange={(e) => {
                        const updated = [...msCourses];
                        updated[idx].grade = e.target.value;
                        setMsCourses(updated);
                      }}
                      style={{ fontSize: "0.92rem", padding: "0.45rem 0.65rem", fontWeight: 600 }}
                    >
                      {GRADE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ paddingTop: "1.1rem" }}>
                    <button
                      type="button"
                      onClick={() => {
                        if (msCourses.length > 1) {
                          setMsCourses(msCourses.filter((_, i) => i !== idx));
                        }
                      }}
                      disabled={msCourses.length <= 1}
                      title="Remove Class"
                      style={{
                        background: "transparent",
                        border: "none",
                        color: msCourses.length <= 1 ? "#cbd5e1" : "#ef4444",
                        fontSize: "1.15rem",
                        cursor: msCourses.length <= 1 ? "not-allowed" : "pointer",
                        padding: "0.2rem 0.4rem",
                      }}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <button
                type="button"
                className="button button--ghost button--sm"
                onClick={() =>
                  setMsCourses([
                    ...msCourses,
                    {
                      id: Date.now().toString(),
                      subject: `Elective / Class ${msCourses.length + 1}`,
                      grade: "A",
                    },
                  ])
                }
              >
                + Add Another Class
              </button>
              <button
                type="button"
                className="tip-btn"
                onClick={() =>
                  setMsCourses([
                    { id: "1", subject: "Math (Algebra 1)", grade: "A" },
                    { id: "2", subject: "English Language Arts", grade: "A" },
                    { id: "3", subject: "Physical Science", grade: "A" },
                    { id: "4", subject: "World Cultures & Geography", grade: "A" },
                    { id: "5", subject: "PE & Health", grade: "A" },
                    { id: "6", subject: "Spanish 1", grade: "A" },
                  ])
                }
              >
                Preset: Straight A&rsquo;s (4.0)
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            RESULTS PANEL
           ========================================================================= */}
        <div className="calc-result-box" aria-live="polite">
          {/* CUMULATIVE RESULTS */}
          {view === "cumulative" && (
            <div>
              <span className="calc-result-label">New Cumulative GPA</span>
              <div className="calc-result-value">
                {totalCreditsEarned > 0 ? newCumulativeUnweighted.toFixed(2) : "--"}
                <span style={{ fontSize: "1.2rem", marginLeft: "0.35rem", color: "#fdba74" }}>
                  / 4.0
                </span>
              </div>
              <span style={{ fontSize: "0.85rem", color: "#cbd5e1", display: "block", marginTop: "0.35rem" }}>
                {totalCreditsEarned > 0
                  ? `Weighted GPA: ${newCumulativeWeighted.toFixed(2)} (Across ${totalCreditsEarned} total cumulative credits)`
                  : "Enter prior academic history and courses"}
              </span>

              {totalCreditsEarned > 0 && (
                <div className="calc-result-summary-grid">
                  <div className="summary-row">
                    <span>Current Term GPA (Unweighted):</span>
                    <strong style={{ color: "#4ade80" }}>{currentTermGpaUnweighted.toFixed(2)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Current Term GPA (Weighted):</span>
                    <strong>{currentTermGpaWeighted.toFixed(2)}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Current Semester Credits:</span>
                    <strong>{currentTermCredits} credits</strong>
                  </div>
                  <div className="summary-row">
                    <span>Total Cumulative Credits:</span>
                    <strong>{totalCreditsEarned} credits</strong>
                  </div>

                  <div className="summary-divider" />

                  {/* Target Future GPA Planner Result */}
                  <div
                    style={{
                      background:
                        neededFutureGpa <= 4.0
                          ? "rgba(74, 222, 128, 0.12)"
                          : "rgba(239, 68, 68, 0.12)",
                      border: `1px solid ${
                        neededFutureGpa <= 4.0 ? "#4ade80" : "#ef4444"
                      }`,
                      padding: "0.85rem",
                      borderRadius: "0.65rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontWeight: 700,
                        color: neededFutureGpa <= 4.0 ? "#4ade80" : "#f87171",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      Target Goal: {numTargetGpa.toFixed(2)} Cumulative GPA
                    </span>
                    <div
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: neededFutureGpa <= 4.0 ? "#4ade80" : "#f87171",
                      }}
                    >
                      {neededFutureGpa <= 4.0
                        ? `Required: ${neededFutureGpa.toFixed(2)} Term GPA`
                        : "Mathematically Unreachable"}
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "#cbd5e1", margin: "0.3rem 0 0" }}>
                      {neededFutureGpa <= 4.0
                        ? `You must average a ${neededFutureGpa.toFixed(2)} GPA across your remaining ${numFutureCreds} future credits.`
                        : `Even with a perfect 4.0 across the next ${numFutureCreds} credits, the maximum possible cumulative GPA is ${(
                            (currentTotalPoints + 4.0 * numFutureCreds) /
                            (totalCreditsEarned + numFutureCreds)
                          ).toFixed(2)}.`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MIDDLE SCHOOL RESULTS */}
          {view === "middle-school" && (
            <div>
              <span className="calc-result-label">Middle School Report Card GPA</span>
              <div className="calc-result-value">
                {msCount > 0 ? msGpa.toFixed(2) : "--"}
                <span style={{ fontSize: "1.2rem", marginLeft: "0.35rem", color: "#fdba74" }}>
                  / 4.0
                </span>
              </div>

              {msCount > 0 && (
                <div className="calc-result-summary-grid">
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      border: `1px solid ${msHonor.badgeColor}`,
                      padding: "0.85rem 1rem",
                      borderRadius: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        textTransform: "uppercase",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        color: msHonor.badgeColor,
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {msHonor.title}
                    </span>
                    <p style={{ margin: 0, fontSize: "0.84rem", color: "#f8fafc", lineHeight: "1.5" }}>
                      {msHonor.message}
                    </p>
                  </div>

                  <div className="summary-row">
                    <span>Total Graded Classes:</span>
                    <strong>{msCount} subjects</strong>
                  </div>
                  <div className="summary-row">
                    <span>Total Grade Points Earned:</span>
                    <strong>
                      {msTotalPoints.toFixed(1)} / {msCount * 4} pts
                    </strong>
                  </div>
                  <div className="summary-row">
                    <span>High School Honors Placement:</span>
                    <strong style={{ color: msGpa >= 3.5 ? "#4ade80" : "#fb923c" }}>
                      {msGpa >= 3.5 ? "Qualified (Honors & AP)" : "Standard Track"}
                    </strong>
                  </div>

                  <div className="summary-divider" />
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      fontSize: "0.82rem",
                      color: "#f8fafc",
                    }}
                  >
                    <strong>Middle School GPA Equation:</strong>
                    <div style={{ fontFamily: "monospace", marginTop: "0.25rem", color: "#fdba74" }}>
                      GPA = Total Points ÷ Classes = {msTotalPoints.toFixed(1)} ÷ {msCount} ={" "}
                      {msGpa.toFixed(2)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
