import Home from '../src/pages/Home'

import {
  createPageMeta,
} from '../src/lib/seo'

export const meta = () =>
  createPageMeta({
    title: 'كهربائي منازل في جدة | نور جدة للكهرباء',
    description:
      'نور جدة للكهرباء يقدم أعمال تأسيس وتمديد وتشطيب الكهرباء للمنازل في جميع مناطق جدة، مع خبرة أكثر من 15 عامًا. اتصل مباشرة أو تواصل عبر واتساب.',
    path: '/',

    image:
      '/og-image.webp',
  })

export default function HomeRoute() {
  return <Home />
}