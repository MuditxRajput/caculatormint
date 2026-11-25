import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { pool, initDb, checkUserSubscription } from "@/lib/db";
import { verifySessionToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    await initDb();

    // 1. Check if user has session cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("cm_session")?.value;
    let userId: number | null = null;
    let userEmail: string | null = null;

    if (token) {
      const payload = verifySessionToken(token);
      if (payload) {
        userId = payload.id;
        userEmail = payload.email;
      }
    }

    // 2. Also accept email from body if guest or onboarding
    let body: { email?: string; plan?: string } = {};
    try {
      body = await request.json();
    } catch {}

    if (!userEmail && body.email) {
      userEmail = body.email.trim().toLowerCase();
    }

    if (!userEmail) {
      return NextResponse.json(
        { error: "Please log in or provide your email to activate Pro." },
        { status: 400 }
      );
    }

    // If userId not found yet, look it up by email
    if (!userId) {
      const uRes = await pool.query("SELECT id FROM users WHERE email = $1", [userEmail]);
      if (uRes.rows.length > 0) {
        userId = uRes.rows[0].id;
      }
    }

    // Prevent double paying: Check if this email is already paid or active Pro!
    const existing = await checkUserSubscription(userId, userEmail);
    if (existing.isPro) {
      return NextResponse.json(
        {
          error: "This email already has an active Pro subscription! You are already paid and do not need to pay again.",
          alreadyPaid: true,
          isPro: true,
        },
        { status: 400 }
      );
    }

    const plan = body.plan || "pro_monthly";

    // 3. Insert or update active subscription record into database
    await pool.query(
      `INSERT INTO subscriptions (user_id, user_email, status, plan, amount_cents, current_period_end)
       VALUES ($1, $2, 'active', $3, 1900, NOW() + INTERVAL '30 days')`,
      [userId, userEmail, plan]
    );

    // 4. Update user table if user exists
    if (userId) {
      await pool.query("UPDATE users SET is_pro = TRUE, updated_at = NOW() WHERE id = $1", [userId]);
    } else {
      await pool.query("UPDATE users SET is_pro = TRUE, updated_at = NOW() WHERE email = $1", [userEmail]);
    }

    const status = await checkUserSubscription(userId, userEmail);

    return NextResponse.json({
      success: true,
      isPro: true,
      message: "Subscription activated! You are now Pro.",
      subscription: status,
    });
  } catch (err: unknown) {
    console.error("[SUBSCRIPTION UPGRADE ERROR]", err);
    return NextResponse.json(
      { error: "Failed to process subscription upgrade. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("cm_session")?.value;

    if (!token) {
      return NextResponse.json({ isPro: false });
    }

    const payload = verifySessionToken(token);
    if (!payload) {
      return NextResponse.json({ isPro: false });
    }

    const status = await checkUserSubscription(payload.id, payload.email);
    return NextResponse.json(status);
  } catch {
    return NextResponse.json({ isPro: false });
  }
}
