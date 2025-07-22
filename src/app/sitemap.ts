import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const pages = ['', '/success'];
  const languages = ['en', 'fr'];

  const sitemapEntries = pages.flatMap(page => 
    languages.map(lang => {
      const url = `${baseUrl}/${lang}${page}`;
      const alternates: { [key: string]: string } = {};
      languages.forEach(altLang => {
        alternates[altLang] = `${baseUrl}/${altLang}${page}`;
      });

      return {
        url,
        lastModified: new Date(),
        alternates: {
          languages: {
            ...alternates,
            'x-default': `${baseUrl}/en${page}`,
          },
        },
      };
    })
  );

  return sitemapEntries;
} 