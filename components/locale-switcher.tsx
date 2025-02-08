'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { locales } from '~config/i18n'

export default function LocaleSwitcher() {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1]

  return (
    <div>
      <p>Select Language</p>
      {locales.map((locale) => {
        const isActive = currentLocale === locale

        // Get the new path by replacing the locale segment
        const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`)

        return (
          <Link
            key={locale}
            href={newPath}
            className={isActive ? 'font-bold' : ''}>
            {locale === 'en-US' ? 'English' : 'ไทย'}
          </Link>
        )
      })}
    </div>
  )
}
