import type { Metadata } from 'next'
import { Anuphan, Manrope } from 'next/font/google'
import './globals.css'
import Nav from '~components/nav'
import Footer from '~components/footer'
import { locales } from '~config/i18n'

const anuphan = Anuphan({
  weight: ['400', '700'],
  subsets: ['thai'],
  display: 'swap',
})

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Accredited Counselors of Thailand (ACT) | Professional Counseling Standards',
  description: 'ACT is a non-profit initiative under the LEAF foundation, dedicated to promoting professional counseling standards and fostering a community of accredited counselors in Thailand committed to excellence and ethical practice.',
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
      <body
        className={`${(await params).lang == 'th-TH' ? anuphan.className : manrope.className
          } antialiased`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
