import Home from '../src/pages/Home'

import {
  createPageMeta,
} from '../src/lib/seo'

export const meta = () =>
  createPageMeta({
    title:
      'كهربائي منازل في جدة | تأسيس وتمديد وتشطيب الكهرباء | نور جدة',
    description:
      'كهربائي منازل في جدة لتنفيذ تأسيس وتمديد وتشطيب الكهرباء للمنازل والشقق في جميع مناطق جدة، مع خبرة أكثر من 15 عامًا. اتصل مباشرة أو تواصل عبر واتساب.',
    path: '/',
    image: '/og-image.webp',
  })

export default function HomeRoute() {
  return <Home />
}