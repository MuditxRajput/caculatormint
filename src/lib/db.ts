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
    await pool.query(`
      CREATE TABLE IF NOT EXISTS pro_waitlist (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        feature VARCHAR(100),
        trade VARCHAR(100),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    isInitialized = true;
  } catch (err) {
    console.warn("[DB] Note: Could not auto-create pro_waitlist table (will retry on next request):", err);
  }
}
