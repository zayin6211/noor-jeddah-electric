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
  BUSINESS_DIRECTION,
  BUSINESS_LANGUAGE,
  GOOGLE_SITE_VERIFICATION,
  businessSchema,
  websiteSchema,
} from '../src/lib/seo'

import '../src/index.css'

export function Layout({
  children,
}) {
  return (
    <html
      lang={
        BUSINESS_LANGUAGE
      }
      dir={
        BUSINESS_DIRECTION
      }
    >
      <head>
        <meta
          charSet="utf-8"
        />

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