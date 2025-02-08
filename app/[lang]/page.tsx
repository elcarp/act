import { locales } from '~config/i18n'
import Features from '~components/features'
import Hero from '~components/hero'
import Introduction from '~components/introduction'


export default function Home() {
  console.log(locales)
  return (
    <>
      <Hero />
      <Introduction />
      <Features />
    </>
  )
}
