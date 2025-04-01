/* eslint-disable  @typescript-eslint/no-explicit-any */

import Features from '~components/features'
import Hero from '~components/hero'
import Introduction from '~components/introduction'
import LatestNews from '~components/latest-news'
import * as contentful from 'contentful'
import { Document } from '@contentful/rich-text-types'
import { locales } from '~config/i18n'

export const revalidate = 60
export const dynamicParams = true

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}


export default async function Home({ params }: any) {
  const locale = (await params).lang

  const finalLocale = locale.includes('en') ? 'en-US' : 'th-TH'

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

  const homepageContent = await client.getEntries({
    content_type: 'homepageContent',
    locale: finalLocale,
  })

  const membershipLevels = await client.getEntries({
    content_type: 'membershipLevel',
    locale: finalLocale,
  })

  const counselors = await client.getEntries({
    content_type: 'counselor',
    locale: finalLocale,
  })

  const heroText = homepageContent.items[0].fields.heroTitleWords as string[]
  const heroTextSecondLine = homepageContent.items[0].fields
    .heroTitleSecondLine as string

  const document = homepageContent.items[0].fields.introText as Document

  const blockTitles = [
    homepageContent.items[0].fields.blockTitle1,
    homepageContent.items[0].fields.blockTitle2,
    homepageContent.items[0].fields.blockTitle3,
  ] as string[]

  const blockContent = [
    homepageContent.items[0].fields.blockContent1,
    homepageContent.items[0].fields.blockContent2,
    homepageContent.items[0].fields.blockContent3,
  ] as Document[]

  const membershipLevelsData = membershipLevels.items.map((item) => ({
    title: typeof item.fields.title === 'string' ? item.fields.title : '',
    excerpt: typeof item.fields.excerpt === 'string' ? item.fields.excerpt : '',
    order: typeof item.fields.order === 'number' ? item.fields.order : 0,
  }))

  return (
    <>
      <Hero firstLine={heroText} secondLine={heroTextSecondLine} />
      <Introduction
        document={document}
        blockTitles={blockTitles}
        blockContent={blockContent}
        counselors={counselors.items}
      />
      <Features membershipLevels={membershipLevelsData} />
      <LatestNews />
    </>
  )
}
