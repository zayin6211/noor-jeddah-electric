import {
  NEIGHBORHOOD_PATHS,
} from './neighborhoods'

const CORE_INDEXABLE_ROUTES = [
  '/',
  '/services',

  '/services/electrical-foundation',
  '/services/electrical-wiring',
  '/services/electrical-finishing',
  '/services/lighting',
  '/services/electrical-repair',

  '/neighborhoods',

  '/contact',
]

export const INDEXABLE_ROUTES = [
  ...CORE_INDEXABLE_ROUTES,
  ...NEIGHBORHOOD_PATHS,
]

export const CORE_ROUTES =
  CORE_INDEXABLE_ROUTES

export const NEIGHBORHOOD_ROUTES =
  NEIGHBORHOOD_PATHS

export function isIndexableRoute(
  path,
) {
  return INDEXABLE_ROUTES.includes(
    path,
  )
}