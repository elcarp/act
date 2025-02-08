import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of all supported locales
const locales = ['en-US', 'th-TH']

// Get the preferred locale from headers or default to en-US
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  return acceptLanguage?.split(',')?.[0] || 'en-US'
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
