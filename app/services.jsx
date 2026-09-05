import Services from '../src/pages/Services'

import {
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
  return <Services />
}