import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Nav from '~components/nav'
import Footer from '~components/footer'
import { locales } from '~config/i18n'
import type { LayoutProps as NextLayoutProps } from '~/.next/types/app/[lang]/layout'

const archivo = Archivo({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ACT',
  description: 'ACT Thailand',
}

type Params = {
  lang: string
}

// Extend the Next.js generated LayoutProps
interface LayoutProps extends Omit<NextLayoutProps, 'params'> {
  params: Params | Promise<Params> | undefined
}

// Utility function to resolve params
async function resolveParams(params: LayoutProps['params']): Promise<Params> {
  if (!params) {
    throw new Error('Params are undefined')
  }
  return params instanceof Promise ? await params : params
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await resolveParams(params)

  return (
    <html lang={lang}>
      <body className={`${archivo.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
