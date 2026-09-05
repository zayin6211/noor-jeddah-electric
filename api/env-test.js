export default async function handler() {
  const databaseUrl = globalThis.process?.env?.DATABASE_URL;
  const databaseUrlUnpooled = globalThis.process?.env?.DATABASE_URL_UNPOOLED;

  let pooledHost = null;
  let unpooledHost = null;

  try {
    pooledHost = databaseUrl ? new URL(databaseUrl).hostname : null;
  } catch {
    pooledHost = "invalid-url";
  }

  try {
    unpooledHost = databaseUrlUnpooled
      ? new URL(databaseUrlUnpooled).hostname
      : null;
  } catch {
    unpooledHost = "invalid-url";
  }

  return new Response(
    JSON.stringify({
      ok: true,
      hasDatabaseUrl: Boolean(databaseUrl),
      hasDatabaseUrlUnpooled: Boolean(databaseUrlUnpooled),
      pooledHost,
      unpooledHost,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  );
}