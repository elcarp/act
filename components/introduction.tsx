/* eslint-disable  @typescript-eslint/no-explicit-any */

'use client'
import Image from 'next/image'
import React from 'react'
import WobbleCard from '~components/ui/wobble-card'
import counseling from '~public/images/counseling.jpg'
import counseling2 from '~public/images/counseling2.jpg'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'


interface Props {
  document: Document
  blockTitles: string[]
  blockContent: Document[]
  counselors: Entry[]
}
export default function Introduction({
  document,
  blockTitles,
  blockContent,
  counselors,
}: Props) {
  const [counselor, setCounselor] = React.useState('')
  const [showResults, setShowResults] = React.useState(false)

  const placeholders = [
    'Search for counselor here',
    "Enter counselor's first or last name",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCounselor(e.target.value)
  }

  type ContentfulEntry = {
    fields?: Record<string, any>
  }

  function fieldContainsValue(
    entry: ContentfulEntry,
    searchTerm: string
  ): boolean {
    if (!entry || !entry.fields) return false

    const lowerSearch = searchTerm.toLowerCase()

    return Object.values(entry.fields).some((value) =>
      String(value).toLowerCase().includes(lowerSearch)
    )
  }

  const matchingCounselors = counselors.filter((entry) =>
    fieldContainsValue(entry, counselor)
  )

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowResults(true)
  }
  return (
    <section className='py-20 gradient-background'>
      <div className='max-w-2xl mx-auto text-white text-center pb-10 text-lg px-5'>
        {documentToReactComponents(document)}
      </div>
      <div className='mb-20 px-5'>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        {showResults && (
          <>
            {matchingCounselors.length > 0 ? (
              <div className='text-center mt-10'>
                {matchingCounselors.map((entry, i) => (
                  <div key={i} className='text-white'>
                    {String(entry.fields.firstName || '')} {String(entry.fields.lastName || '')} –{' '}
                    {String(entry.fields.city || '')}, {String(entry.fields.country || '')}
                  </div>
                ))}
              </div>
            ) : (
              <div className='text-white text-center mt-10'>
                No matching counselors found.
              </div>
            )}
          </>
        )}
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-4xl mx-auto w-full px-3'>
        <WobbleCard
          containerClassName='col-span-1 lg:col-span-2 h-full bg-teal-800 min-h-[500px] lg:min-h-[300px]'
          className=''>
          <div className='max-w-xs'>
            <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
              {blockTitles[0]}
            </h2>
            <div className='mt-4 text-left  text-base/6 text-neutral-200'>
              {documentToReactComponents(blockContent[0])}
            </div>
          </div>
          <Image
            src={counseling.src}
            width={450}
            height={450}
            alt='linear demo image'
            className='hidden lg:block absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl'
          />
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 min-h-[300px] bg-teal-900  '>
          <h2 className='max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
            {blockTitles[1]}
          </h2>
          <div className='mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200'>
            {documentToReactComponents(blockContent[1])}
          </div>
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-teal-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
          <div className='max-w-sm'>
            <h2 className='max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
              {blockTitles[2]}
            </h2>
            <div className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
              {documentToReactComponents(blockContent[2])}
            </div>
          </div>
          <Image
            src={counseling2.src}
            width={600}
            height={600}
            alt='linear demo image'
            className='hidden lg:block absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl'
          />
        </WobbleCard>
      </div>
    </section>
  )
}
