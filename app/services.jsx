import Services from '../src/pages/Services'

const SITE_URL = 'https://noor-jeddah-electric.vercel.app'

export const meta = () => [
  {
    title: 'خدمات الكهرباء المنزلية في جدة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'خدمات نور جدة للكهرباء تشمل تأسيس وتمديد وتشطيب الكهرباء المنزلية ونقاط الكهرباء والإنارة والمفاتيح والأفياش في جميع مناطق جدة.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${SITE_URL}/services`,
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
    content: 'خدمات الكهرباء المنزلية في جدة | نور جدة للكهرباء',
  },
  {
    property: 'og:description',
    content:
      'تأسيس وتمديد وتشطيب الكهرباء المنزلية ونقاط الكهرباء والإنارة والمفاتيح والأفياش في جدة.',
  },
  {
    property: 'og:url',
    content: `${SITE_URL}/services`,
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:title',
    content:
      'خدمات الكهرباء المنزلية في جدة | نور جدة للكهرباء',
  },
  {
    name: 'twitter:description',
    content:
      'خدمات تأسيس وتمديد وتشطيب الكهرباء المنزلية في جدة.',
  },
]

export default function ServicesRoute() {
  return <Services />
}