'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLang = pathname.split('/')[1]

  return (
    <div>
      <Link
        href={`/en-US${pathname.slice(6)}`}
        className={currentLang === 'en-US' ? 'font-bold' : ''}>
        English
      </Link>
      {' | '}
      <Link
        href={`/th-TH${pathname.slice(6)}`}
        className={currentLang === 'th-TH' ? 'font-bold' : ''}>
        ไทย
      </Link>
    </div>
  )
}
