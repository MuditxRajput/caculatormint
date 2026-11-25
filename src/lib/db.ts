import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL ||
  process.env.DIRECT_URL ||
  "postgresql://postgres.lnuzfjoilfmypgjvjzzb:calculatormint%402001@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres";

// Global pool cached across serverless invocations
declare global {
  // eslint-disable-next-line no-var
  var _pgPool: Pool | undefined;
}

export const pool =
  global._pgPool ||
  new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 10,
    connectionTimeoutMillis: 15000,
    idleTimeoutMillis: 30000,
  });

if (process.env.NODE_ENV !== "production") {
  global._pgPool = pool;
}

let isInitialized = false;

export async function initDb() {
  if (isInitialized) return;
  try {
    // 1. Pro Waitlist Leads
    await pool.query(`
      CREATE TABLE IF NOT EXISTS pro_waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        feature VARCHAR(100),
        trade VARCHAR(100),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // 2. Users Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        company_name VARCHAR(255),
        phone VARCHAR(50),
        license VARCHAR(100),
        trade VARCHAR(100),
        is_pro BOOLEAN DEFAULT FALSE,
        logo_url TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);

    // 3. Subscriptions Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        user_email VARCHAR(255) NOT NULL,
        status VARCHAR(50) NOT NULL DEFAULT 'active',
        plan VARCHAR(50) NOT NULL DEFAULT 'pro_monthly',
        amount_cents INTEGER DEFAULT 1900,
        currency VARCHAR(10) DEFAULT 'usd',
        current_period_start TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        current_period_end TIMESTAMP WITH TIME ZONE DEFAULT (NOW() + INTERVAL '30 days'),
        cancel_at_period_end BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
      CREATE INDEX IF NOT EXISTS idx_subscriptions_user_email ON subscriptions(user_email);
    `);

    isInitialized = true;
  } catch (err) {
    console.warn("[DB] Note: Could not auto-create tables:", err);
  }
}

export async function checkUserSubscription(
  userId?: number | null,
  email?: string | null
): Promise<{ isPro: boolean; plan?: string; currentPeriodEnd?: string }> {
  try {
    if (!userId && !email) return { isPro: false };

    await initDb();

    // 1. Check subscriptions table for active subscription
    const cleanEmail = email ? email.toLowerCase().trim() : null;
    let query = `
      SELECT status, plan, current_period_end
      FROM subscriptions
      WHERE (status = 'active' OR status = 'trialing')
        AND current_period_end > NOW()
    `;
    const params: (number | string)[] = [];

    if (userId && cleanEmail) {
      query += ` AND (user_id = $1 OR user_email = $2) ORDER BY current_period_end DESC LIMIT 1`;
      params.push(userId, cleanEmail);
    } else if (userId) {
      query += ` AND user_id = $1 ORDER BY current_period_end DESC LIMIT 1`;
      params.push(userId);
    } else if (cleanEmail) {
      query += ` AND user_email = $1 ORDER BY current_period_end DESC LIMIT 1`;
      params.push(cleanEmail);
    }

    const subRes = await pool.query(query, params);
    if (subRes.rows.length > 0) {
      const row = subRes.rows[0];
      return {
        isPro: true,
        plan: row.plan,
        currentPeriodEnd: row.current_period_end,
      };
    }

    // 2. Check legacy/direct is_pro flag on users table
    const userRes = await pool.query(
      `SELECT is_pro FROM users WHERE id = $1 OR email = $2 LIMIT 1`,
      [userId || -1, cleanEmail || ""]
    );
    if (userRes.rows.length > 0 && userRes.rows[0].is_pro) {
      return { isPro: true, plan: "pro_monthly" };
    }
  } catch (err) {
    console.warn("[DB] Error checking subscription:", err);
  }

  return { isPro: false };
}
