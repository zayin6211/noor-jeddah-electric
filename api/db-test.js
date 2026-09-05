import { sql } from "../src/lib/db.js";

export default async function handler() {
  try {
    const result = await sql`SELECT 1 AS connected`;

    return new Response(
      JSON.stringify({
        ok: true,
        result,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.error("Database test error:", error);

    return new Response(
      JSON.stringify({
        ok: false,
        error: "Database connection failed",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-store",
        },
      },
    );
  }
}