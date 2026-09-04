import Contact from '../src/pages/Contact'

const SITE_URL = 'https://noor-jeddah-electric.vercel.app'

export const meta = () => [
  {
    title: 'التواصل مع كهربائي في جدة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'تواصل مباشرة مع علي من نور جدة للكهرباء لطلب خدمات الكهرباء المنزلية والتشطيب في جميع مناطق جدة عبر الاتصال أو واتساب.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${SITE_URL}/contact`,
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
    content: 'التواصل مع كهربائي في جدة | نور جدة للكهرباء',
  },
  {
    property: 'og:description',
    content:
      'تواصل مباشرة مع علي من نور جدة للكهرباء لطلب خدمات الكهرباء المنزلية والتشطيب في جميع مناطق جدة عبر الاتصال أو واتساب.',
  },
  {
    property: 'og:url',
    content: `${SITE_URL}/contact`,
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content:
      'التواصل مع كهربائي في جدة | نور جدة للكهرباء',
  },
  {
    name: 'twitter:description',
    content:
      'اتصل مباشرة أو تواصل عبر واتساب مع نور جدة للكهرباء في جدة.',
  },
]

export default function ContactRoute() {
  return <Contact />
}