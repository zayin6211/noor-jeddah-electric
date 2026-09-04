import Home from '../src/pages/Home'

const SITE_URL = 'https://noor-jeddah-electric.vercel.app'

export const meta = () => [
  {
    title: 'كهربائي منازل في جدة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'نور جدة للكهرباء يقدم أعمال تأسيس وتمديد وتشطيب الكهرباء للمنازل في جميع مناطق جدة، مع خبرة أكثر من 15 عامًا. اتصل مباشرة أو تواصل عبر واتساب.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${SITE_URL}/`,
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
    content: 'نور جدة للكهرباء',
  },
  {
    property: 'og:title',
    content: 'كهربائي منازل في جدة | نور جدة للكهرباء',
  },
  {
    property: 'og:description',
    content:
      'أعمال تأسيس وتمديد وتشطيب الكهرباء للمنازل في جميع مناطق جدة، مع خبرة أكثر من 15 عامًا.',
  },
  {
    property: 'og:url',
    content: `${SITE_URL}/`,
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content: 'كهربائي منازل في جدة | نور جدة للكهرباء',
  },
  {
    name: 'twitter:description',
    content:
      'أعمال الكهرباء المنزلية وتشطيب الكهرباء في جميع مناطق جدة.',
  },
]

export default function HomeRoute() {
  return <Home />
}