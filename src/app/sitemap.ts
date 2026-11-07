import { MetadataRoute } from 'next';
import { SOFTWARE_PROJECTS } from '@/data/portfolioData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://greatlightgroup.com';
  const lastModified = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/media`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/media/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/media/reviews`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/software`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/software/projects`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/software/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/software/reviews`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic project pages for Google Search Console indexing
  const projectRoutes: MetadataRoute.Sitemap = SOFTWARE_PROJECTS.map((project) => ({
    url: `${baseUrl}/software/projects/${project.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: project.featured ? 0.85 : 0.75,
  }));

  return [...staticRoutes, ...projectRoutes];
}
