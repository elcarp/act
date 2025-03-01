import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Nav from '~components/nav'
import Footer from '~components/footer'
import { locales } from '~config/i18n'

const archivo = Archivo({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ACT',
  description: 'ACT Thailand',
}
type LayoutProps = {
  children: React.ReactNode
  params: Params
}

type Params = Promise<{ lang: string }>

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({ children, params }: LayoutProps) {
  return (
    <html lang={(await params).lang}>
      <body className={`${archivo.className} antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
