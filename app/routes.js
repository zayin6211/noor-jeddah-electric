import {
  index,
  route,
} from '@react-router/dev/routes'

export default [
  index('./home.jsx'),

  route(
    'services',
    './services.jsx',
  ),

  route(
    'services/:slug',
    './services.$slug.jsx',
  ),

  route(
    'neighborhoods',
    './neighborhoods.jsx',
  ),

  route(
    'neighborhoods/:slug',
    './neighborhood.$slug.jsx',
  ),

  route(
    'contact',
    './contact.jsx',
  ),

  route(
    '*',
    './not-found.jsx',
  ),
]