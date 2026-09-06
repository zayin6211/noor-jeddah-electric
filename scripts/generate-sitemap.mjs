import {
  mkdir,
  writeFile,
} from 'node:fs/promises'

import {
  join,
} from 'node:path'

const DEFAULT_SITE_URL =
  'https://noor-jeddah-electric.vercel.app'

function normalizeSiteUrl(value) {
  const candidate =
    typeof value === 'string' &&
    value.trim()
      ? value.trim()
      : DEFAULT_SITE_URL

  const withProtocol =
    /^https?:\/\//i.test(candidate)
      ? candidate
      : `https://${candidate}`

  return withProtocol.replace(
    /\/+$/,
    '',
  )
}

const SITE_URL =
  normalizeSiteUrl(
    process.env.VITE_SITE_URL ||
      process.env.SITE_URL,
  )

const BUILD_CLIENT =
  join(
    process.cwd(),
    'build',
    'client',
  )

const INDEXABLE_PATHS = [
  '/',
  '/services',

  '/services/electrical-foundation',
  '/services/electrical-wiring',
  '/services/electrical-finishing',
  '/services/lighting',
  '/services/electrical-repair',

  '/neighborhoods',

  '/contact',
]

function escapeXml(value) {
  return value
    .replaceAll(
      '&',
      '&amp;',
    )
    .replaceAll(
      '<',
      '&lt;',
    )
    .replaceAll(
      '>',
      '&gt;',
    )
    .replaceAll(
      '"',
      '&quot;',
    )
    .replaceAll(
      "'",
      '&apos;',
    )
}

function toSitemapUrl(path) {
  return encodeURI(
    `${SITE_URL}${path}`,
  )
}

const urls =
  INDEXABLE_PATHS
    .map(
      (path) => `
  <url>
    <loc>${escapeXml(
      toSitemapUrl(path),
    )}</loc>
  </url>`,
    )
    .join('')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`

const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`

await mkdir(
  BUILD_CLIENT,
  {
    recursive: true,
  },
)

await writeFile(
  join(
    BUILD_CLIENT,
    'sitemap.xml',
  ),
  sitemap,
  'utf8',
)

await writeFile(
  join(
    BUILD_CLIENT,
    'robots.txt',
  ),
  robots,
  'utf8',
)

console.log(
  `Generated sitemap.xml with ${INDEXABLE_PATHS.length} indexable URLs for ${SITE_URL}.`,
)