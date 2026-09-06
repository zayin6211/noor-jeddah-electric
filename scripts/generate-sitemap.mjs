import {
  mkdir,
  writeFile,
} from 'node:fs/promises'

import {
  join,
} from 'node:path'

import {
  NEIGHBORHOOD_PATHS,
} from '../src/lib/neighborhoods.js'

const SITE_URL =
  'https://noor-jeddah-electric.vercel.app'

const BUILD_CLIENT =
  join(
    process.cwd(),
    'build',
    'client',
  )

const STATIC_PATHS = [
  '/',
  '/services',

  '/services/electrical-foundation',
  '/services/electrical-wiring',
  '/services/electrical-finishing',
  '/services/lighting',
  '/services/electrical-repair',

  '/neighborhoods',

  ...NEIGHBORHOOD_PATHS,

  '/contact',
]

const uniquePaths =
  [...new Set(STATIC_PATHS)]

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function toSitemapUrl(path) {
  return encodeURI(
    `${SITE_URL}${path}`,
  )
}

const urls =
  uniquePaths
    .map((path) => {
      const loc =
        toSitemapUrl(path)

      return [
        '  <url>',
        `    <loc>${escapeXml(loc)}</loc>`,
        '  </url>',
      ].join('\n')
    })
    .join('\n')

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urls,
  '</urlset>',
  '',
].join('\n')

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

console.log(
  `Generated sitemap.xml with ${uniquePaths.length} URLs.`,
)