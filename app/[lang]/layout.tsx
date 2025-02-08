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
// Define the correct type for the layout props
type LayoutProps = {
  children: React.ReactNode
  params: {
    lang: string
  }
}
export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default function RootLayout({
  children,
  params: { lang },
}: LayoutProps) {
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
