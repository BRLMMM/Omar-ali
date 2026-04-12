import { MetadataRoute } from 'next';
import { projectsList } from '@/data/projectsList';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://omar-ali.com';

  // 1. Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 2. Dynamic Project Routes from projectsList
  const projectRoutes: MetadataRoute.Sitemap = projectsList.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`, // using project.id which corresponds to the slug
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
