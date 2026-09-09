import type { Config } from '@react-router/dev/config'

import {
  PRERENDER_ROUTES,
} from './src/lib/site-data'

export default {
  ssr: false,

  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
    v8_viteEnvironmentApi: true,
  },

  prerender: PRERENDER_ROUTES,
} satisfies Config