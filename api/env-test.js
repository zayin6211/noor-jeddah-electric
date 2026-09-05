export default async function handler() {
  const databaseUrl = globalThis.process?.env?.DATABASE_URL;
  const databaseUrlUnpooled = globalThis.process?.env?.DATABASE_URL_UNPOOLED;

  const getHost = (value) => {
    if (!value) {
      return null;
    }

    try {
      return new URL(value).hostname;
    } catch {
      return "invalid-url";
    }
  };

  return new Response(
    JSON.stringify({
      ok: true,
      hasDatabaseUrl: Boolean(databaseUrl),
      hasDatabaseUrlUnpooled: Boolean(databaseUrlUnpooled),
      pooledHost: getHost(databaseUrl),
      unpooledHost: getHost(databaseUrlUnpooled),
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