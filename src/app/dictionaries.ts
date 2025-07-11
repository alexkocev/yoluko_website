import 'server-only'

const dictionaries: any = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  fr: () => import('@/messages/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Fallback to 'en' if the locale is not supported
  const dictionaryLoader = dictionaries[locale] || dictionaries.en;
  return dictionaryLoader();
}; 