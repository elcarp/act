import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import FAQ from './faq'
import * as contentful from 'contentful'
import styles from './styles.module.css'
import { Document } from '@contentful/rich-text-types'

export interface FAQItem {
  fields: {
    order: number
    question: string
    answer: Document
  }
}

interface AboutPageContent {
  mainHeading: string
  content: Document
  partnershipsHeading: string
  partnershipsContent: Document
}

export const revalidate = 60
export const dynamicParams = true

export default async function About() {
  const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: 'master',
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })

  const FAQs = await client.getEntries({
    content_type: 'faq',
    locale: 'en-US',
  })

  const aboutPageContent = await client.getEntries<{
    fields: AboutPageContent
    contentTypeId: string
  }>({
    content_type: 'aboutPageContent',
    locale: 'en-US',
  })

  const sortedFAQs = FAQs.items
    .map((item) => ({
      fields: {
        order: item.fields.order as number,
        question: item.fields.question as string,
        answer: item.fields.answer as unknown as Document,
      },
    }))
    .sort((a, b) => (a.fields.order ?? 0) - (b.fields.order ?? 0))

  return (
    <>
      <section className={`${styles.aboutPage} py-20 bg-slate-100`}>
        <div className={`max-w-3xl mx-auto px-10`}>
          <h1 className='text-2xl md:text-5xl lg:text-6xl'>
            {aboutPageContent.items[0].fields.mainHeading}
          </h1>
          {aboutPageContent.items[0]?.fields?.content &&
            documentToReactComponents(aboutPageContent.items[0].fields.content)}
        </div>
      </section>
      <section id='faq' className='py-20'>
        <div className='max-w-3xl mx-auto px-10'>
          <h2 className='text-2xl md:text-5xl lg:text-6xl'>
            Frequently Asked Questions (FAQs) for ACT Membership
          </h2>
          <FAQ faqs={sortedFAQs} />
        </div>
      </section>
      <section className='py-20 bg-slate-100'>
        <div className='max-w-3xl mx-auto px-10'>
          <h2 className='text-2xl md:text-5xl lg:text-6xl'>
            {aboutPageContent.items[0].fields.partnershipsHeading}
          </h2>
          <div className='mt-10'>
            {aboutPageContent.items[0]?.fields?.partnershipsContent &&
              documentToReactComponents(
                aboutPageContent.items[0].fields.partnershipsContent
              )}
          </div>
        </div>
      </section>
    </>
  )
}
