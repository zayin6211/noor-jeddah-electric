import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import '../src/index.css'
import '../src/App.css'

const SITE_URL = 'https://noor-jeddah-electric.vercel.app'

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': `${SITE_URL}/#business`,
  name: 'نور جدة للكهرباء',
  description:
    'خدمات الكهرباء المنزلية وتشطيب الكهرباء للمنازل في جميع مناطق جدة.',
  telephone: '+966546856974',
  url: `${SITE_URL}/`,
  areaServed: {
    '@type': 'City',
    name: 'جدة',
  },
  serviceType: [
    'تأسيس الكهرباء',
    'التمديدات الكهربائية',
    'تشطيب الكهرباء',
    'تركيب الإنارة',
    'تركيب المفاتيح والأفياش',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+966546856974',
    contactType: 'customer service',
    availableLanguage: ['ar'],
  },
}

export const meta = () => [
  {
    name: 'robots',
    content:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  {
    name: 'google-site-verification',
    content:
      'P1R0C4WNtdGsXOhpf6SD9Rxoeuf2wIWgE8mpPcPbb-4',
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
      </head>

      <body>
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