import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes = [
    '/',
    '/about',
    '/services',
    '/services/cartridge-cases',
    '/services/combustible-cartridge-cases',
    '/services/mechanical-fuzes',
    '/services/modular-charge-systems',
    '/contact',
  ];
  const now = new Date();
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}

