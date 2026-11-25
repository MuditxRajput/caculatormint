import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { pool, initDb, checkUserSubscription } from "@/lib/db";
import { verifySessionToken } from "@/lib/auth";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("cm_session")?.value;

    if (!token) {
      return NextResponse.json({ user: null });
    }

    const payload = verifySessionToken(token);
    if (!payload) {
      return NextResponse.json({ user: null });
    }

    await initDb();
    const result = await pool.query(
      `SELECT id, email, company_name, phone, license, trade, is_pro, logo_url
       FROM users WHERE id = $1`,
      [payload.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ user: null });
    }

    const user = result.rows[0];
    const sub = await checkUserSubscription(user.id, user.email);

    return NextResponse.json({
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
  } catch (err) {
    console.warn("[AUTH ME ERROR]", err);
    return NextResponse.json({ user: null });
  }
}
