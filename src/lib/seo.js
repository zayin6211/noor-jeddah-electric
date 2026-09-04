export const SITE_URL =
  'https://noor-jeddah-electric.vercel.app'

export const BUSINESS_NAME =
  'نور جدة للكهرباء'

export const BUSINESS_NAME_EN =
  'Noor Jeddah Electricity'

export const BUSINESS_PHONE =
  '0546856974'

export const BUSINESS_PHONE_INTERNATIONAL =
  '+966546856974'

export const WHATSAPP_URL =
  'https://wa.me/966546856974'

export const GOOGLE_SITE_VERIFICATION =
  'P1R0C4WNtdGsXOhpf6SD9Rxoeuf2wIWgE8mpPcPbb-4'

export const DEFAULT_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const NOINDEX_ROBOTS =
  'noindex, follow'

export const SERVICE_PATHS = {
  electricalFoundation:
    '/services/electrical-foundation',

  electricalWiring:
    '/services/electrical-wiring',

  electricalFinishing:
    '/services/electrical-finishing',

  lighting:
    '/services/lighting',
}

export const SERVICES = [
  {
    name: 'تأسيس الكهرباء',
    path: SERVICE_PATHS.electricalFoundation,
  },
  {
    name: 'التمديدات الكهربائية',
    path: SERVICE_PATHS.electricalWiring,
  },
  {
    name: 'تشطيب الكهرباء',
    path: SERVICE_PATHS.electricalFinishing,
  },
  {
    name: 'الإنارة',
    path: SERVICE_PATHS.lighting,
  },
  {
    name: 'نقاط الكهرباء',
    path: null,
  },
  {
    name: 'المفاتيح والأفياش',
    path: null,
  },
  {
    name: 'إصلاح الأعطال الكهربائية',
    path: null,
  },
  {
    name: 'أعمال الكهرباء المنزلية',
    path: null,
  },
]

export function absoluteUrl(path = '/') {
  const normalizedPath = path.startsWith('/')
    ? path
    : `/${path}`

  return `${SITE_URL}${normalizedPath}`
}

export function createPageMeta({
  title,
  description,
  path = '/',
  image = null,
  indexable = true,
}) {
  const canonicalUrl = absoluteUrl(path)

  const descriptors = [
    {
      title,
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'robots',
      content: indexable
        ? DEFAULT_ROBOTS
        : NOINDEX_ROBOTS,
    },
    {
      name: 'google-site-verification',
      content: GOOGLE_SITE_VERIFICATION,
    },
    {
      tagName: 'link',
      rel: 'canonical',
      href: canonicalUrl,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:locale',
      content: 'ar_SA',
    },
    {
      property: 'og:site_name',
      content: BUSINESS_NAME,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:url',
      content: canonicalUrl,
    },
    {
      name: 'twitter:card',
      content: image
        ? 'summary_large_image'
        : 'summary',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ]

  if (image) {
    const imageUrl = absoluteUrl(image)

    descriptors.push(
      {
        property: 'og:image',
        content: imageUrl,
      },
      {
        property: 'og:image:alt',
        content: BUSINESS_NAME,
      },
      {
        name: 'twitter:image',
        content: imageUrl,
      },
      {
        name: 'twitter:image:alt',
        content: BUSINESS_NAME,
      },
    )
  }

  return descriptors
}

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': `${SITE_URL}/#business`,

  name: BUSINESS_NAME,

  alternateName: BUSINESS_NAME_EN,

  description:
    'خدمات الكهرباء المنزلية وتشطيب الكهرباء للمنازل في جميع مناطق جدة.',

  telephone:
    BUSINESS_PHONE_INTERNATIONAL,

  url: absoluteUrl('/'),

  areaServed: {
    '@type': 'City',
    name: 'جدة',
  },

  serviceType: SERVICES.map(
    (service) => service.name,
  ),

  contactPoint: {
    '@type': 'ContactPoint',
    telephone:
      BUSINESS_PHONE_INTERNATIONAL,
    contactType: 'customer service',
    availableLanguage: ['ar'],
  },
}

export function createServiceSchema({
  name,
  description,
  path,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,

    name,

    description,

    serviceType: name,

    url: absoluteUrl(path),

    provider: {
      '@id': `${SITE_URL}/#business`,
    },

    areaServed: {
      '@type': 'City',
      name: 'جدة',
    },
  }
}

export function createBreadcrumbSchema({
  items,
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: items.map(
      (item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      }),
    ),
  }
}