import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  NEIGHBORHOOD_PATHS,
} from "../src/lib/neighborhoods.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

const SITE_URL = "https://noor-jeddah-electric.vercel.app";

const CORE_ROUTES = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/services",
    priority: "0.9",
    changefreq: "monthly",
  },
  {
    path: "/services/electrical-foundation",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/services/electrical-wiring",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/services/electrical-finishing",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/services/lighting",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/services/electrical-repair",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/neighborhoods",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/contact",
    priority: "0.8",
    changefreq: "monthly",
  },
];

const neighborhoodRoutes = NEIGHBORHOOD_PATHS.map((routePath) => ({
  path: routePath,
  priority: "0.6",
  changefreq: "monthly",
}));

const routes = [...CORE_ROUTES, ...neighborhoodRoutes];

const uniqueRoutes = Array.from(
  new Map(routes.map((route) => [route.path, route])).values(),
);

const escapeXml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const toAbsoluteUrl = (routePath) => {
  if (routePath === "/") {
    return SITE_URL;
  }

  return `${SITE_URL}${routePath}`;
};

const urlEntries = uniqueRoutes
  .map(
    ({ path: routePath, priority, changefreq }) => `  <url>
    <loc>${escapeXml(toAbsoluteUrl(routePath))}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urlEntries}
</urlset>
`;

fs.mkdirSync(PUBLIC_DIR, { recursive: true });

const sitemapPath = path.join(PUBLIC_DIR, "sitemap.xml");

fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log(
  `Generated sitemap.xml with ${uniqueRoutes.length} indexable URLs for ${SITE_URL}`,
);