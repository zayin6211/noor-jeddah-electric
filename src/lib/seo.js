import { SERVICE_CATALOG } from './services'

export const SITE_URL =
  'https://noor-jeddah-electric.vercel.app'

/**
 * =========================================================
 * BUSINESS IDENTITY
 * =========================================================
 */

export const BUSINESS_NAME =
  'نور جدة للكهرباء'

export const BUSINESS_NAME_EN =
  'Noor Jeddah Electricity'

export const BUSINESS_PERSON =
  'علي'

export const BUSINESS_TYPE =
  'Independent Residential Electrician'

export const BUSINESS_PHONE =
  '0546856974'

export const BUSINESS_PHONE_INTERNATIONAL =
  '+966546856974'

export const WHATSAPP_URL =
  'https://wa.me/966546856974'

export const BUSINESS_SERVICE_AREA =
  'جميع مناطق جدة'

export const BUSINESS_CITY =
  'جدة'

export const BUSINESS_REGION =
  'منطقة مكة المكرمة'

export const BUSINESS_COUNTRY =
  'SA'

export const BUSINESS_EXPERIENCE =
  '15+ عامًا من الخبرة'

export const BUSINESS_WORKING_DAYS =
  'جميع الأيام'

export const BUSINESS_WORKING_HOURS =
  'معظم ساعات الصباح'

export const BUSINESS_LANGUAGE =
  'ar'

export const BUSINESS_DIRECTION =
  'rtl'

/**
 * =========================================================
 * SEO CONFIGURATION
 * =========================================================
 */

export const GOOGLE_SITE_VERIFICATION =
  'P1R0C4WNtdGsXOhpf6SD9Rxoeuf2wIWgE8mpPcPbb-4'

export const DEFAULT_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const NOINDEX_ROBOTS =
  'noindex, follow'

/**
 * =========================================================
 * SERVICE PATHS
 * =========================================================
 */

export const SERVICE_PATHS =
  Object.fromEntries(
    SERVICE_CATALOG.map((service) => [
      service.id,
      service.path,
    ]),
  )

export const SERVICES =
  SERVICE_CATALOG

/**
 * =========================================================
 * URL HELPERS
 * =========================================================
 */

export function absoluteUrl(path = '/') {
  const normalizedPath =
    path.startsWith('/')
      ? path
      : `/${path}`

  return `${SITE_URL}${normalizedPath}`
}

/**
 * =========================================================
 * PAGE SEO
 * =========================================================
 */

export function createPageMeta({
  title,
  description,
  path = '/',
  image = null,
  indexable = true,
}) {
  if (!title || !description) {
    throw new Error(
      'createPageMeta requires both title and description.',
    )
  }

  const canonicalUrl =
    absoluteUrl(path)

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
    const imageUrl =
      absoluteUrl(image)

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

/**
 * =========================================================
 * BUSINESS STRUCTURED DATA
 * =========================================================
 */

export const businessSchema = {
  '@context':
    'https://schema.org',

  '@type':
    'Electrician',

  '@id':
    `${SITE_URL}/#business`,

  name:
    BUSINESS_NAME,

  alternateName:
    BUSINESS_NAME_EN,

  description:
    'خدمات الكهرباء المنزلية وتشطيب الكهرباء للمنازل في جميع مناطق جدة.',

  telephone:
    BUSINESS_PHONE_INTERNATIONAL,

  url:
    absoluteUrl('/'),

  areaServed: {
    '@type':
      'City',

    name:
      BUSINESS_CITY,
  },

  serviceType:
    SERVICE_CATALOG.map(
      (service) =>
        service.name,
    ),

  contactPoint: {
    '@type':
      'ContactPoint',

    telephone:
      BUSINESS_PHONE_INTERNATIONAL,

    contactType:
      'customer service',

    availableLanguage:
      ['ar'],
  },
}

/**
 * =========================================================
 * SERVICE STRUCTURED DATA
 * =========================================================
 */

export function createServiceSchema({
  name,
  description,
  path,
}) {
  if (
    !name ||
    !description ||
    !path
  ) {
    throw new Error(
      'createServiceSchema requires name, description, and path.',
    )
  }

  return {
    '@context':
      'https://schema.org',

    '@type':
      'Service',

    '@id':
      `${absoluteUrl(path)}#service`,

    name,

    description,

    serviceType:
      name,

    url:
      absoluteUrl(path),

    provider: {
      '@type':
        'Electrician',

      '@id':
        `${SITE_URL}/#business`,

      name:
        BUSINESS_NAME,
    },

    areaServed: {
      '@type':
        'City',

      name:
        BUSINESS_CITY,
    },
  }
}

/**
 * =========================================================
 * BREADCRUMB STRUCTURED DATA
 * =========================================================
 */

export function createBreadcrumbSchema({
  items,
}) {
  if (
    !Array.isArray(items) ||
    items.length === 0
  ) {
    throw new Error(
      'createBreadcrumbSchema requires a non-empty items array.',
    )
  }

  return {
    '@context':
      'https://schema.org',

    '@type':
      'BreadcrumbList',

    itemListElement:
      items.map(
        (item, index) => ({
          '@type':
            'ListItem',

          position:
            index + 1,

          name:
            item.name,

          item:
            absoluteUrl(
              item.path,
            ),
        }),
      ),
  }
}