import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  const pages = ['', '/success'];
  const languages = SITE_CONFIG.locales;

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