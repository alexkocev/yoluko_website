import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const pages = ['', '/success'];
  const languages = ['en', 'fr'];

  const sitemapEntries = pages.flatMap(page => 
    languages.map(lang => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          'en': `${baseUrl}/en${page}`,
          'fr': `${baseUrl}/fr${page}`,
        },
      },
    }))
  );

  return sitemapEntries;
} 