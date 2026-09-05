export default function handler(req, res) {
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

  res.status(200).json({
    ok: true,
    hasDatabaseUrl: Boolean(databaseUrl),
    hasDatabaseUrlUnpooled: Boolean(databaseUrlUnpooled),
    pooledHost: getHost(databaseUrl),
    unpooledHost: getHost(databaseUrlUnpooled),
  });
}