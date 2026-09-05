import type { Config } from '@react-router/dev/config'

import {
  NEIGHBORHOOD_PATHS,
} from './src/lib/neighborhoods'

export default {
  ssr: false,

  prerender: [
    '/',
    '/services',

    '/services/electrical-foundation',
    '/services/electrical-wiring',
    '/services/electrical-finishing',
    '/services/lighting',
    '/services/electrical-repair',

    '/neighborhoods',
    ...NEIGHBORHOOD_PATHS,

    '/contact',
  ],
} satisfies Config