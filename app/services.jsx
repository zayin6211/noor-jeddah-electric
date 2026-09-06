import Services from '../src/pages/Services'

import {
  createBreadcrumbSchema,
  createPageMeta,
} from '../src/lib/seo'

export const meta = () =>
  createPageMeta({
    title:
      'خدمات الكهرباء المنزلية في جدة | نور جدة للكهرباء',

    description:
      'خدمات نور جدة للكهرباء تشمل تأسيس وتمديد وتشطيب الكهرباء المنزلية ونقاط الكهرباء والإنارة والمفاتيح والأفياش وإصلاح الأعطال في جميع مناطق جدة.',

    path:
      '/services',

    image:
      '/og-image.webp',
  })

export default function ServicesRoute() {
  const breadcrumbSchema =
    createBreadcrumbSchema({
      items: [
        {
          name: 'الرئيسية',
          path: '/',
        },
        {
          name: 'خدمات الكهرباء',
          path: '/services',
        },
      ],
    })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema,
            ),
        }}
      />

      <Services />
    </>
  )
}