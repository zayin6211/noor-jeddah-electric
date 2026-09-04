import Contact from '../src/pages/Contact'

import {
  createPageMeta,
} from '../src/lib/seo'

export const meta = () =>
  createPageMeta({
    title: 'التواصل مع كهربائي في جدة | نور جدة للكهرباء',
    description:
      'تواصل مباشرة مع علي من نور جدة للكهرباء لطلب خدمات الكهرباء المنزلية والتشطيب في جميع مناطق جدة عبر الاتصال أو واتساب.',
    path: '/contact',
  })

export default function ContactRoute() {
  return <Contact />
}