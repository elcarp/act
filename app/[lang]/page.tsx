import Features from '~components/features'
import Hero from '~components/hero'
import Introduction from '~components/introduction'
import LatestNews from '~components/latest-news'

export default async function Home() {
  const contentful = require('contentful')

  const client = contentful.createClient({
    space: 'mtdj6x8wk5bh',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'iwxZVZvv04tCvaFtvahaUFwIJgdZ1bZlt6qlaxhx7Cs',
  })

  client
    .getEntry('6dj8bjEslrpGFqW2oZHnYK')
    .then((entry: any) => console.log(entry))
    .catch(console.error)

  const response = await client.getEntries({
    content_type: 'blogPost',
  })


  return (
    <>
      <Hero />
      <Introduction />
      <Features />
      <LatestNews />
    </>
  )
}
