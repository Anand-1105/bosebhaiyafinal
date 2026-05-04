import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://souhardyabose.com'

  const routes = [
    '',
    '/experience',
    '/startups',
    '/podcasts',
    '/testimonials',
    '/video-testimonials',
    '/gallery',
    '/recommendations',
    '/patents-research',
    '/hire',
    '/content',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
