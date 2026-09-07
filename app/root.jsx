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
  GOOGLE_SITE_VERIFICATION,
} from '../src/lib/seo'

import '../src/index.css'

export function Layout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
    >
      <head>
        <meta charSet="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
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
          href="/favicon.svg"
          type="image/svg+xml"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {GOOGLE_SITE_VERIFICATION ? (
          <meta
            name="google-site-verification"
            content={
              GOOGLE_SITE_VERIFICATION
            }
          />
        ) : null}

        <Meta />

        <Links />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                businessSchema,
              ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                websiteSchema,
              ),
          }}
        />
      </head>

      <body>
        <Header />

        <main id="main-content">
          {children}
        </main>

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