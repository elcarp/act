import Features from '~components/features'
import Hero from '~components/hero'
import Introduction from '~components/introduction'
import LatestNews from '~components/latest-news'
import * as contentful from 'contentful'

// Define the type that matches what Next.js 15 expects
type PageProps = {
  params: Promise<{ lang: string }>
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Home({ params }: PageProps) {
  // Resolve the params Promise to get the actual values
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
    locale: resolvedParams.lang, // Use the resolved params
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
