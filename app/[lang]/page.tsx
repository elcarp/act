/* eslint-disable  @typescript-eslint/no-explicit-any */

import Features from '~components/features'
import Hero from '~components/hero'
import Introduction from '~components/introduction'
import LatestNews from '~components/latest-news'
import * as contentful from 'contentful'

export const revalidate = 60
export const dynamicParams = true

export default async function Home({ params }: any) {
  const resolvedParams = await params

  const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: 'master',
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })

  try {
    await client.getEntry('6dj8bjEslrpGFqW2oZHnYK')
  } catch (error) {
    console.error(error)
  }

  const response = await client.getEntries({
    content_type: 'homepageContent',
    locale: resolvedParams.lang,
  })

  const heroText = response.items[0].fields.heroTitleWords as string[]
  const heroTextSecondLine = response.items[0].fields
    .heroTitleSecondLine as string

  const document = response.items[0].fields.introText

  return (
    <>
      <Hero firstLine={heroText} secondLine={heroTextSecondLine} />
      <Introduction document={document} />
      <Features />
      <LatestNews />
    </>
  )
}
