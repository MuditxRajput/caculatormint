import { NextResponse } from "next/server";
import { pool, initDb } from "@/lib/db";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, feature, trade, companyName, phone } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanFeature = feature || "pro_early_access";
    const cleanTrade = trade || "general";
    const cleanCompany = companyName ? String(companyName).trim().slice(0, 255) : null;
    const cleanPhone = phone ? String(phone).trim().slice(0, 50) : null;

    // 1. Persist directly to Supabase PostgreSQL database
    let dbSuccess = false;
    try {
      await pool.query(
        `INSERT INTO pro_waitlist (email, feature, trade, company_name, phone) VALUES ($1, $2, $3, $4, $5)`,
        [cleanEmail, cleanFeature, cleanTrade, cleanCompany, cleanPhone]
      );
      dbSuccess = true;
      console.log("[SUPABASE DB] Successfully saved waitlist lead:", { cleanEmail, cleanCompany, cleanTrade, cleanFeature });
    } catch (dbErr) {
      console.error("[SUPABASE DB ERROR] Failed to save lead to database:", dbErr);
    }

    // 2. Also back up locally to disk (never lose a lead)
    try {
      const backupDir = path.join(process.cwd(), "data");
      const backupFile = path.join(backupDir, "pro_waitlist_leads.json");
      await fs.mkdir(backupDir, { recursive: true });
      let existing: unknown[] = [];
      try {
        const content = await fs.readFile(backupFile, "utf-8");
        existing = JSON.parse(content);
      } catch {}
      existing.push({
        email: cleanEmail,
        companyName: cleanCompany,
        phone: cleanPhone,
        feature: cleanFeature,
        trade: cleanTrade,
        savedToDb: dbSuccess,
        timestamp: new Date().toISOString(),
      });
      await fs.writeFile(backupFile, JSON.stringify(existing, null, 2));
    } catch (fsErr) {
      console.warn("[BACKUP WARN] Local file backup skipped:", fsErr);
    }

    if (!dbSuccess) {
      return NextResponse.json(
        { error: "Database connection failed. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You have been added to the CalculatorMint Pro priority access list!",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
