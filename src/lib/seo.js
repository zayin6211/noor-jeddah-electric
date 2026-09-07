import { SERVICE_CATALOG } from './services'

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

export const SITE_URL =
  normalizeSiteUrl(
    import.meta.env?.VITE_SITE_URL,
  )

export const BUSINESS_NAME =
  'نور جدة للكهرباء'

export const BUSINESS_NAME_EN =
  'Noor Jeddah Electricity'

export const BUSINESS_PERSON =
  'علي'

export const BUSINESS_PHONE =
  '0546856974'

export const BUSINESS_PHONE_INTERNATIONAL =
  '+966546856974'

export const WHATSAPP_URL =
  'https://wa.me/966546856974'

export const BUSINESS_CITY =
  'جدة'

export const BUSINESS_REGION =
  'منطقة مكة المكرمة'

export const BUSINESS_COUNTRY =
  'SA'

export const BUSINESS_SERVICE_AREA =
  'جميع مناطق جدة'

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

/*
 * Google Search Console verification is intentionally
 * controlled by an environment variable.
 *
 * Do not hard-code a verification token in source code.
 */
export const GOOGLE_SITE_VERIFICATION =
  typeof import.meta.env
    ?.VITE_GOOGLE_SITE_VERIFICATION ===
    'string'
    ? import.meta.env.VITE_GOOGLE_SITE_VERIFICATION.trim()
    : ''

export const DEFAULT_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const NOINDEX_ROBOTS =
  'noindex, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const DEFAULT_SOCIAL_IMAGE =
  '/og-image.webp'

export const SERVICE_PATHS =
  Object.fromEntries(
    SERVICE_CATALOG.map(
      (service) => [
        service.id,
        service.path,
      ],
    ),
  )

export const SERVICES =
  SERVICE_CATALOG

export function absoluteUrl(path = '/') {
  if (
    typeof path === 'string' &&
    /^https?:\/\//i.test(path)
  ) {
    return path
  }

  const normalizedPath =
    typeof path === 'string' &&
    path.trim()
      ? path.trim()
      : '/'

  const pathWithLeadingSlash =
    normalizedPath.startsWith('/')
      ? normalizedPath
      : `/${normalizedPath}`

  return `${SITE_URL}${pathWithLeadingSlash}`
}

function normalizeMetaText(value) {
  return typeof value === 'string'
    ? value.trim()
    : ''
}

function normalizePath(value) {
  const path =
    typeof value === 'string' &&
    value.trim()
      ? value.trim()
      : '/'

  return path.startsWith('/')
    ? path
    : `/${path}`
}

function isValidImageValue(value) {
  return (
    typeof value === 'string' &&
    value.trim().length > 0
  )
}

export function createPageMeta({
  title,
  description,
  path = '/',
  image = DEFAULT_SOCIAL_IMAGE,
  indexable = true,
  type = 'website',
}) {
  const normalizedTitle =
    normalizeMetaText(title)

  const normalizedDescription =
    normalizeMetaText(description)

  const normalizedPath =
    normalizePath(path)

  if (!normalizedTitle) {
    throw new Error(
      'createPageMeta requires a non-empty title.',
    )
  }

  if (!normalizedDescription) {
    throw new Error(
      'createPageMeta requires a non-empty description.',
    )
  }

  if (
    typeof indexable !== 'boolean'
  ) {
    throw new Error(
      'createPageMeta requires indexable to be a boolean.',
    )
  }

  const canonicalUrl =
    absoluteUrl(normalizedPath)

  const normalizedImage =
    isValidImageValue(image)
      ? image.trim()
      : ''

  const descriptors = [
    {
      title: normalizedTitle,
    },

    {
      name: 'description',
      content: normalizedDescription,
    },

    {
      name: 'robots',
      content:
        indexable
          ? DEFAULT_ROBOTS
          : NOINDEX_ROBOTS,
    },

    {
      tagName: 'link',
      rel: 'canonical',
      href: canonicalUrl,
    },

    {
      property: 'og:type',
      content:
        typeof type === 'string' &&
        type.trim()
          ? type.trim()
          : 'website',
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
      content: normalizedTitle,
    },

    {
      property: 'og:description',
      content: normalizedDescription,
    },

    {
      property: 'og:url',
      content: canonicalUrl,
    },

    {
      name: 'twitter:card',
      content:
        normalizedImage
          ? 'summary_large_image'
          : 'summary',
    },

    {
      name: 'twitter:title',
      content: normalizedTitle,
    },

    {
      name: 'twitter:description',
      content: normalizedDescription,
    },
  ]

  if (normalizedImage) {
    const imageUrl =
      absoluteUrl(normalizedImage)

    descriptors.push(
      {
        property: 'og:image',
        content: imageUrl,
      },

      {
        property: 'og:image:secure_url',
        content: imageUrl,
      },

      {
        property: 'og:image:alt',
        content:
          `${BUSINESS_NAME} - خدمات الكهرباء المنزلية في جدة`,
      },

      {
        property: 'og:image:width',
        content: '1024',
      },

      {
        property: 'og:image:height',
        content: '768',
      },

      {
        name: 'twitter:image',
        content: imageUrl,
      },

      {
        name: 'twitter:image:alt',
        content:
          `${BUSINESS_NAME} - خدمات الكهرباء المنزلية في جدة`,
      },
    )
  }

  return descriptors
}

export const websiteSchema = {
  '@context':
    'https://schema.org',

  '@type':
    'WebSite',

  '@id':
    `${SITE_URL}/#website`,

  name:
    BUSINESS_NAME,

  alternateName:
    BUSINESS_NAME_EN,

  url:
    absoluteUrl('/'),

  inLanguage:
    BUSINESS_LANGUAGE,

  publisher: {
    '@id':
      `${SITE_URL}/#business`,
  },
}

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
    'خدمات الكهرباء المنزلية وتأسيس وتمديد وتشطيب الكهرباء للمنازل في جميع مناطق جدة.',

  telephone:
    BUSINESS_PHONE_INTERNATIONAL,

  url:
    absoluteUrl('/'),

  image:
    absoluteUrl(
      DEFAULT_SOCIAL_IMAGE,
    ),

  areaServed: {
    '@type':
      'City',

    name:
      BUSINESS_CITY,

    containedInPlace: {
      '@type':
        'AdministrativeArea',

      name:
        BUSINESS_REGION,
    },
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

    areaServed:
      BUSINESS_CITY,

    availableLanguage:
      ['ar'],
  },
}

export function createWebPageSchema({
  name,
  description,
  path = '/',
  type = 'WebPage',
}) {
  const normalizedName =
    normalizeMetaText(name)

  const normalizedDescription =
    normalizeMetaText(description)

  const normalizedPath =
    normalizePath(path)

  if (!normalizedName) {
    throw new Error(
      'createWebPageSchema requires a non-empty name.',
    )
  }

  if (!normalizedDescription) {
    throw new Error(
      'createWebPageSchema requires a non-empty description.',
    )
  }

  return {
    '@context':
      'https://schema.org',

    '@type':
      typeof type === 'string' &&
      type.trim()
        ? type.trim()
        : 'WebPage',

    '@id':
      `${absoluteUrl(normalizedPath)}#webpage`,

    url:
      absoluteUrl(normalizedPath),

    name:
      normalizedName,

    description:
      normalizedDescription,

    inLanguage:
      BUSINESS_LANGUAGE,

    isPartOf: {
      '@id':
        `${SITE_URL}/#website`,
    },

    about: {
      '@id':
        `${SITE_URL}/#business`,
    },
  }
}

export function createServiceSchema({
  name,
  description,
  path,
}) {
  const normalizedName =
    normalizeMetaText(name)

  const normalizedDescription =
    normalizeMetaText(description)

  const normalizedPath =
    normalizePath(path)

  if (!normalizedName) {
    throw new Error(
      'createServiceSchema requires a non-empty name.',
    )
  }

  if (!normalizedDescription) {
    throw new Error(
      'createServiceSchema requires a non-empty description.',
    )
  }

  if (
    !path ||
    typeof path !== 'string'
  ) {
    throw new Error(
      'createServiceSchema requires a valid path.',
    )
  }

  const serviceUrl =
    absoluteUrl(normalizedPath)

  return {
    '@context':
      'https://schema.org',

    '@type':
      'Service',

    '@id':
      `${serviceUrl}#service`,

    name:
      normalizedName,

    description:
      normalizedDescription,

    serviceType:
      normalizedName,

    url:
      serviceUrl,

    mainEntityOfPage: {
      '@type':
        'WebPage',

      '@id':
        `${serviceUrl}#webpage`,
    },

    provider: {
      '@type':
        'Electrician',

      '@id':
        `${SITE_URL}/#business`,

      name:
        BUSINESS_NAME,

      telephone:
        BUSINESS_PHONE_INTERNATIONAL,

      url:
        absoluteUrl('/'),
    },

    areaServed: {
      '@type':
        'City',

      name:
        BUSINESS_CITY,

      containedInPlace: {
        '@type':
          'AdministrativeArea',

        name:
          BUSINESS_REGION,
      },
    },

    availableLanguage:
      ['ar'],
  }
}

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

  const normalizedItems =
    items.map(
      (item, index) => {
        const name =
          normalizeMetaText(
            item?.name,
          )

        const path =
          normalizePath(
            item?.path,
          )

        if (!name) {
          throw new Error(
            `createBreadcrumbSchema received an invalid name at position ${index + 1}.`,
          )
        }

        return {
          '@type':
            'ListItem',

          position:
            index + 1,

          name,

          item:
            absoluteUrl(path),
        }
      },
    )

  return {
    '@context':
      'https://schema.org',

    '@type':
      'BreadcrumbList',

    itemListElement:
      normalizedItems,
  }
}