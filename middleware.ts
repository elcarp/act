import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en-US', 'th-TH']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
  // Implement your locale detection logic here
  // For example:
  const acceptLanguage = request.headers.get('accept-language')
  // Parse acceptLanguage and return the preferred locale
  // This is a placeholder implementation
  return acceptLanguage?.split(',')[0] || 'en-US'
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.rewrite(request.nextUrl)
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico).*)',
  ],
}
