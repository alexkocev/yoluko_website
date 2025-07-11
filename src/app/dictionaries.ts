import 'server-only';
import type en from '@/messages/en.json';

type Dictionary = typeof en;

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  fr: () => import('@/messages/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Fallback to 'en' if the locale is not supported
  const dictionaryLoader = dictionaries[locale] || dictionaries.en;
  return dictionaryLoader();
}; 