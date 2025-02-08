/* eslint-disable  @typescript-eslint/no-explicit-any */

import { locales, dictionaries } from '~config/i18n'

export const getDictionary = async (locale: string) => {
  if (!locales.includes(locale as any)) {
    return dictionaries['en-US']()
  }
  return dictionaries[locale as keyof typeof dictionaries]()
}
