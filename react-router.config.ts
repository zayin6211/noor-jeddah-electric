import type { Config } from '@react-router/dev/config'

import {
  NEIGHBORHOOD_PATHS,
} from './src/lib/neighborhoods'

export default {
  ssr: false,

  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
    v8_viteEnvironmentApi: true,
  },

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