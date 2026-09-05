import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import {
  businessSchema,
  websiteSchema,
  DEFAULT_ROBOTS,
  GOOGLE_SITE_VERIFICATION,
} from '../src/lib/seo'

import '../src/index.css'

export const meta = () => [
  {
    name: 'robots',
    content: DEFAULT_ROBOTS,
  },
  {
    name: 'google-site-verification',
    content: GOOGLE_SITE_VERIFICATION,
  },
]

export function Layout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <meta
          name="theme-color"
          content="#ffffff"
        />

        <meta
          name="format-detection"
          content="telephone=yes"
        />

        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />

        <Meta />
        <Links />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body suppressHydrationWarning>
        <Header />

        {children}

        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}