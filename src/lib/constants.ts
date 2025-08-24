// Central configuration for consistent URL handling
export const SITE_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://yoluko.com',
  name: 'Yoluko Solutions',
  locales: ['en', 'fr'] as const,
  defaultLocale: 'en' as const,
} as const;

export type Locale = typeof SITE_CONFIG.locales[number];
