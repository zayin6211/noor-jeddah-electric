import { SERVICE_CATALOG } from './services.js'

const DEFAULT_SITE_URL =
  'https://noor-jeddah-electric.vercel.app'

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

export const DEFAULT_SOCIAL_IMAGE =
  '/og-image.webp'

export const DEFAULT_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const NOINDEX_ROBOTS =
  'noindex, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

function normalizeText(value) {
  if (
    typeof value !== 'string'
  ) {
    return ''
  }

  return value.trim()
}

function normalizePath(value) {
  const normalized =
    normalizeText(value)

  if (!normalized) {
    return '/'
  }

  if (
    /^https?:\/\//i.test(
      normalized,
    )
  ) {
    return normalized
  }

  const withLeadingSlash =
    normalized.startsWith('/')
      ? normalized
      : `/${normalized}`

  if (
    withLeadingSlash === '/'
  ) {
    return '/'
  }

  return withLeadingSlash.replace(
    /\/+$/,
    '',
  )
}

function normalizeImagePath(value) {
  const normalized =
    normalizeText(value)

  if (!normalized) {
    return ''
  }

  return normalized
}

function normalizeSiteUrl(value) {
  const candidate =
    typeof value === 'string' &&
    value.trim()
      ? value.trim()
      : DEFAULT_SITE_URL

  const withProtocol =
    /^https?:\/\//i.test(
      candidate,
    )
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

export const GOOGLE_SITE_VERIFICATION =
  typeof import.meta.env
    ?.VITE_GOOGLE_SITE_VERIFICATION ===
    'string'
    ? import.meta.env.VITE_GOOGLE_SITE_VERIFICATION.trim()
    : ''

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

export function absoluteUrl(
  path = '/',
) {
  const normalized =
    normalizeText(path)

  if (
    /^https?:\/\//i.test(
      normalized,
    )
  ) {
    return normalized
  }

  const normalizedPath =
    normalizePath(
      normalized || '/',
    )

  if (
    normalizedPath === '/'
  ) {
    return `${SITE_URL}/`
  }

  return `${SITE_URL}${normalizedPath}`
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
    normalizeText(title)

  const normalizedDescription =
    normalizeText(description)

  const normalizedPath =
    normalizePath(path)

  const normalizedImage =
    normalizeImagePath(image)

  if (!normalizedTitle) {
    throw new Error(
      'createPageMeta: title is required.',
    )
  }

  if (!normalizedDescription) {
    throw new Error(
      'createPageMeta: description is required.',
    )
  }

  if (
    typeof indexable !== 'boolean'
  ) {
    throw new Error(
      'createPageMeta: indexable must be boolean.',
    )
  }

  const canonical =
    absoluteUrl(
      normalizedPath,
    )

  const meta = [
    {
      title:
        normalizedTitle,
    },

    {
      name:
        'description',

      content:
        normalizedDescription,
    },

    {
      name:
        'robots',

      content:
        indexable
          ? DEFAULT_ROBOTS
          : NOINDEX_ROBOTS,
    },

    {
      tagName:
        'link',

      rel:
        'canonical',

      href:
        canonical,
    },

    {
      property:
        'og:type',

      content:
        normalizeText(type) ||
        'website',
    },

    {
      property:
        'og:locale',

      content:
        'ar_SA',
    },

    {
      property:
        'og:site_name',

      content:
        BUSINESS_NAME,
    },

    {
      property:
        'og:title',

      content:
        normalizedTitle,
    },

    {
      property:
        'og:description',

      content:
        normalizedDescription,
    },

    {
      property:
        'og:url',

      content:
        canonical,
    },

    {
      name:
        'twitter:card',

      content:
        normalizedImage
          ? 'summary_large_image'
          : 'summary',
    },

    {
      name:
        'twitter:title',

      content:
        normalizedTitle,
    },

    {
      name:
        'twitter:description',

      content:
        normalizedDescription,
    },
  ]

  if (normalizedImage) {
    const imageUrl =
      absoluteUrl(
        normalizedImage,
      )

    meta.push(
      {
        property:
          'og:image',

        content:
          imageUrl,
      },

      {
        property:
          'og:image:secure_url',

        content:
          imageUrl,
      },

      {
        property:
          'og:image:alt',

        content:
          `${BUSINESS_NAME} - خدمات الكهرباء المنزلية في جدة`,
      },

      {
        name:
          'twitter:image',

        content:
          imageUrl,
      },

      {
        name:
          'twitter:image:alt',

        content:
          `${BUSINESS_NAME} - خدمات الكهرباء المنزلية في جدة`,
      },
    )
  }

  return meta
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

  availableLanguage: [
    'ar',
  ],

  contactPoint: {
    '@type':
      'ContactPoint',

    telephone:
      BUSINESS_PHONE_INTERNATIONAL,

    contactType:
      'customer service',

    areaServed:
      BUSINESS_CITY,

    availableLanguage: [
      'ar',
    ],
  },
}

export function createWebPageSchema({
  name,
  description,
  path = '/',
  type = 'WebPage',
}) {
  const normalizedName =
    normalizeText(name)

  const normalizedDescription =
    normalizeText(description)

  const normalizedPath =
    normalizePath(path)

  if (!normalizedName) {
    throw new Error(
      'createWebPageSchema: name is required.',
    )
  }

  if (!normalizedDescription) {
    throw new Error(
      'createWebPageSchema: description is required.',
    )
  }

  return {
    '@context':
      'https://schema.org',

    '@type':
      normalizeText(type) ||
      'WebPage',

    '@id':
      `${absoluteUrl(normalizedPath)}#webpage`,

    url:
      absoluteUrl(
        normalizedPath,
      ),

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
    normalizeText(name)

  const normalizedDescription =
    normalizeText(description)

  if (
    typeof path !== 'string' ||
    !path.trim()
  ) {
    throw new Error(
      'createServiceSchema: path is required.',
    )
  }

  const normalizedPath =
    normalizePath(path)

  if (!normalizedName) {
    throw new Error(
      'createServiceSchema: name is required.',
    )
  }

  if (!normalizedDescription) {
    throw new Error(
      'createServiceSchema: description is required.',
    )
  }

  const serviceUrl =
    absoluteUrl(
      normalizedPath,
    )

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

    availableLanguage: [
      'ar',
    ],
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
      'createBreadcrumbSchema: items are required.',
    )
  }

  const itemList =
    items.map(
      (
        item,
        index,
      ) => {
        const name =
          normalizeText(
            item?.name,
          )

        const rawPath =
          item?.path

        if (
          typeof rawPath !==
            'string' ||
          !rawPath.trim()
        ) {
          throw new Error(
            `createBreadcrumbSchema: invalid path at position ${index + 1}.`,
          )
        }

        const path =
          normalizePath(
            rawPath,
          )

        if (!name) {
          throw new Error(
            `createBreadcrumbSchema: invalid item at position ${index + 1}.`,
          )
        }

        return {
          '@type':
            'ListItem',

          position:
            index + 1,

          name,

          item:
            absoluteUrl(
              path,
            ),
        }
      },
    )

  return {
    '@context':
      'https://schema.org',

    '@type':
      'BreadcrumbList',

    itemListElement:
      itemList,
  }
}