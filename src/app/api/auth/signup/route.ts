import { NextResponse } from "next/server";
import { pool, initDb, checkUserSubscription } from "@/lib/db";
import { hashPassword, createSessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    await initDb();
    const body = await request.json();
    const { email, password, companyName, phone, license, trade } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanCompany = companyName ? String(companyName).trim().slice(0, 255) : null;
    const cleanPhone = phone ? String(phone).trim().slice(0, 50) : null;
    const cleanLicense = license ? String(license).trim().slice(0, 100) : null;
    const cleanTrade = trade ? String(trade).trim().slice(0, 100) : "general";

    // Check if user already exists with this email
    const existing = await pool.query("SELECT id FROM users WHERE email = $1", [cleanEmail]);
    if (existing.rows.length > 0) {
      return NextResponse.json(
        {
          error: "This email is already registered. You cannot create a duplicate account with the same email. Please log in instead.",
          alreadyRegistered: true,
        },
        { status: 409 }
      );
    }

    // Check if this email already has a paid Pro subscription
    const subCheck = await checkUserSubscription(null, cleanEmail);
    const isProInitial = subCheck.isPro;

    const passwordHash = hashPassword(password);

    const result = await pool.query(
      `INSERT INTO users (email, password_hash, company_name, phone, license, trade, is_pro)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, email, company_name, phone, license, trade, is_pro, logo_url`,
      [cleanEmail, passwordHash, cleanCompany, cleanPhone, cleanLicense, cleanTrade, isProInitial]
    );

    const user = result.rows[0];
    const token = createSessionToken({ id: user.id, email: user.email });

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        companyName: user.company_name,
        phone: user.phone,
        license: user.license,
        trade: user.trade,
        isPro: isProInitial,
        logoUrl: user.logo_url,
      },
    });

    response.cookies.set("cm_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
    });

    return response;
  } catch (err: unknown) {
    console.error("[AUTH SIGNUP ERROR]", err);
    return NextResponse.json(
      { error: "Failed to create account. Please try again." },
      { status: 500 }
    );
  }
}
