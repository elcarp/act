export const defaultLocale = 'en-US'
export const locales = ['en-US', 'th-TH'] as const
export type ValidLocale = (typeof locales)[number]

// Add your translations here
export const dictionaries = {
  'en-US': () =>
    import('../dictionaries/en.json').then((module) => module.default),
  'th-TH': () =>
    import('../dictionaries/th.json').then((module) => module.default),
}
