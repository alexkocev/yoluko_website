import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yoluko.com';
  const pages = ['', '/success'];
  const languages = ['en', 'fr'];

  const sitemapEntries = pages.flatMap(page => {
    const isHomePage = page === '';
    return languages.map(lang => {
      const url = isHomePage ? `${baseUrl}/${lang}` : `${baseUrl}/${lang}${page}`;
      const alternates: { [key: string]: string } = {};
      languages.forEach(altLang => {
        alternates[altLang] = isHomePage ? `${baseUrl}/${altLang}` : `${baseUrl}/${altLang}${page}`;
      });

      return {
        url,
        lastModified: new Date(),
        alternates: {
          languages: {
            ...alternates,
            'x-default': isHomePage ? `${baseUrl}/en` : `${baseUrl}/en${page}`,
          },
        },
      };
    });
  });

  return sitemapEntries;
} 