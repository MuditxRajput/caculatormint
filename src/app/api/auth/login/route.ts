import { NextResponse } from "next/server";
import { pool, initDb, checkUserSubscription } from "@/lib/db";
import { verifyPassword, createSessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    await initDb();
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();

    const result = await pool.query(
      `SELECT id, email, password_hash, company_name, phone, license, trade, is_pro, logo_url
       FROM users WHERE email = $1`,
      [cleanEmail]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "No contractor account found with this email. Please sign up." },
        { status: 401 }
      );
    }

    const user = result.rows[0];
    const isMatch = verifyPassword(password, user.password_hash);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Incorrect password. Please try again." },
        { status: 401 }
      );
    }

    const sub = await checkUserSubscription(user.id, user.email);
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
        isPro: sub.isPro,
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
    console.error("[AUTH LOGIN ERROR]", err);
    return NextResponse.json(
      { error: "Failed to log in. Please try again." },
      { status: 500 }
    );
  }
}
