import Features from '~components/features'
import Hero from '~components/hero'
import Introduction from '~components/introduction'
import LatestNews from '~components/latest-news'
import * as contentful from 'contentful'

export default async function Home() {
  const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: 'master', // defaults to 'master' if not set
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })

  client
    .getEntry('6dj8bjEslrpGFqW2oZHnYK')
    .then((entry: any) => console.log(entry))
    .catch(console.error)

  const response = await client.getEntries({
    content_type: 'blogPost',
  })

  console.log(response)
  return (
    <>
      <Hero />
      <Introduction />
      <Features />
      <LatestNews />
    </>
  )
}
