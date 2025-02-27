'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const defaultLocale = 'en-US'
const locales = ['en-US', 'th-TH'] as const

export default function LanguageSwitcher() {
  const pathname = usePathname()

  // Function to get the current language
  const getCurrentLang = (path: string): (typeof locales)[number] => {
    const segments = path.split('/')
    return locales.includes(segments[1] as (typeof locales)[number])
      ? (segments[1] as (typeof locales)[number])
      : defaultLocale
  }

  // Function to get the path without the language prefix
  const getPathWithoutLang = (path: string, currentLang: string) => {
    return currentLang === defaultLocale
      ? path
      : path.replace(`/${currentLang}`, '') || '/'
  }

  const currentLang = getCurrentLang(pathname)
  const pathWithoutLang = getPathWithoutLang(pathname, currentLang)

  return (
    <div className='text-sm'>
      <Link
        href={pathWithoutLang}
        className={currentLang === defaultLocale ? 'font-bold' : ''}>
        English
      </Link>
      {' | '}
      <Link
        href={`/th-TH${pathWithoutLang}`}
        className={currentLang === 'th-TH' ? 'font-bold' : ''}>
        ไทย
      </Link>
    </div>
  )
}
