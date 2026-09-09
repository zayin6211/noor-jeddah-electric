import {
  NEIGHBORHOOD_PATHS,
} from './neighborhoods.js'

import {
  SERVICE_CATALOG,
} from './services.js'

export const CORE_INDEXABLE_ROUTES = [
  '/',
  '/services',
  ...SERVICE_CATALOG.map(
    (service) =>
      `/services/${service.slug}`,
  ),
  '/neighborhoods',
  '/contact',
]

export const CORE_ROUTES =
  CORE_INDEXABLE_ROUTES

export const NEIGHBORHOOD_ROUTES =
  NEIGHBORHOOD_PATHS

/*
 * المسارات القابلة للفهرسة في محركات البحث.
 *
 * صفحات الأحياء مستبعدة حاليًا لأن محتواها
 * يحتاج إلى معلومات محلية أصلية ومتمايزة قبل
 * تحويلها إلى صفحات SEO مستقلة.
 */
export const INDEXABLE_ROUTES =
  CORE_INDEXABLE_ROUTES

/*
 * جميع المسارات التي ينبغي تجهيزها مسبقًا
 * لتوفير HTML جاهز عند الطلب، سواء كانت
 * قابلة للفهرسة أم لا.
 */
export const PRERENDER_ROUTES = [
  ...CORE_INDEXABLE_ROUTES,
  ...NEIGHBORHOOD_PATHS,
]