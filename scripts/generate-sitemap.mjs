import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { INDEXABLE_ROUTES } from '../src/lib/site-data.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT_DIR = path.resolve(__dirname, '..')
const PUBLIC_DIR = path.join(ROOT_DIR, 'public')

function normalizeSiteUrl(value) {
  const fallback =
    'https://noor-jeddah-electric.vercel.app'

  const candidate =
    typeof value === 'string' && value.trim()
      ? value.trim()
      : fallback

  const withProtocol =
    /^https?:\/\//i.test(candidate)
      ? candidate
      : `https://${candidate}`

  return withProtocol.replace(/\/+$/, '')
}

const SITE_URL = normalizeSiteUrl(
  process.env.VITE_SITE_URL,
)

const uniqueRoutes = Array.from(
  new Set(INDEXABLE_ROUTES),
)

const priorityForPath = (routePath) => {
  if (routePath === '/') return '1.0'
  if (routePath === '/services') return '0.9'
  if (routePath === '/contact') return '0.8'
  if (routePath === '/neighborhoods') return '0.8'

  if (routePath.startsWith('/services/')) {
    return '0.8'
  }

  return '0.5'
}

const changefreqForPath = (routePath) =>
  routePath === '/' ? 'weekly' : 'monthly'

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')

const toAbsoluteUrl = (routePath) =>
  routePath === '/'
    ? `${SITE_URL}/`
    : `${SITE_URL}${routePath}`

const urlEntries = uniqueRoutes
  .map(
    (routePath) => `  <url>
    <loc>${escapeXml(toAbsoluteUrl(routePath))}</loc>
    <changefreq>${changefreqForPath(routePath)}</changefreq>
    <priority>${priorityForPath(routePath)}</priority>
  </url>`,
  )
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`

fs.mkdirSync(PUBLIC_DIR, {
  recursive: true,
})

fs.writeFileSync(
  path.join(PUBLIC_DIR, 'sitemap.xml'),
  sitemap,
  'utf8',
)

fs.writeFileSync(
  path.join(PUBLIC_DIR, 'robots.txt'),
  robots,
  'utf8',
)

console.log(
  `Generated sitemap.xml with ${uniqueRoutes.length} indexable URLs for ${SITE_URL}`,
)