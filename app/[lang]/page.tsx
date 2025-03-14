import Features from '~components/features'
import Hero from '~components/hero'
import Introduction from '~components/introduction'
import LatestNews from '~components/latest-news'
import * as contentful from 'contentful'

type PageProps = {
  params: {
    lang?: string
    [key: string]: string | undefined
  }
  searchParams?: {
    [key: string]: string | string[] | undefined
  }
}

export default async function Home({ params }: PageProps) {
  const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: 'master',
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })

  client
    .getEntry('6dj8bjEslrpGFqW2oZHnYK')
    .then((entry) => console.log(entry))
    .catch(console.error)

  const response = await client.getEntries({
    content_type: 'homepageContent',
    locale: params.lang,
  })
  const heroText = response.items[0].fields.heroTitleWords as string[]
  const heroTextSecondLine = response.items[0].fields
    .heroTitleSecondLine as string

  return (
    <>
      <Hero firstLine={heroText} secondLine={heroTextSecondLine} />
      <Introduction />
      <Features />
      <LatestNews />
    </>
  )
}
