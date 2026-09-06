import Contact from '../src/pages/Contact'

import {
  createBreadcrumbSchema,
  createPageMeta,
} from '../src/lib/seo'

export const meta = () =>
  createPageMeta({
    title:
      'التواصل مع كهربائي في جدة | نور جدة للكهرباء',

    description:
      'تواصل مباشرة مع علي من نور جدة للكهرباء لطلب خدمات الكهرباء المنزلية والتشطيب في جميع مناطق جدة عبر الاتصال أو واتساب.',

    path:
      '/contact',

    image:
      '/og-image.webp',
  })

export default function ContactRoute() {
  const breadcrumbSchema =
    createBreadcrumbSchema({
      items: [
        {
          name: 'الرئيسية',
          path: '/',
        },
        {
          name: 'التواصل',
          path: '/contact',
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

      <Contact />
    </>
  )
}