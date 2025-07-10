/* eslint-disable  @typescript-eslint/no-explicit-any */

'use client'
import Image from 'next/image'
import React from 'react'
import WobbleCard from '~components/ui/wobble-card'
import counseling from '~public/images/counseling.jpg'
import counseling2 from '~public/images/counseling2.jpg'
import innovationAward from '~public/images/innovation-award.png'
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
      <Image src={innovationAward} className='mx-auto' alt='innovation award' width={250} height={250} />
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
              <div className='max-w-4xl mx-auto mt-10'>
                <div className='text-center mb-6'>
                  <h3 className='text-2xl font-semibold text-white mb-2'>
                    Found {matchingCounselors.length} Counselor{matchingCounselors.length !== 1 ? 's' : ''}
                  </h3>
                  <p className='text-neutral-200 text-sm'>
                    Showing results for "{counselor}"
                  </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                  {matchingCounselors.map((entry, i) => (
                    <div
                      key={i}
                      className='bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105'
                    >
                      <div className='flex items-center justify-between mb-3'>
                        <div className='w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center'>
                          <svg className='w-6 h-6 text-teal-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                          </svg>
                        </div>
                        <span className='px-3 py-1 bg-teal-600/30 text-teal-200 text-xs font-medium rounded-full border border-teal-500/30'>
                          {String(entry.fields.membershipLevel || 'Member')}
                        </span>
                      </div>
                      <h4 className='text-lg font-semibold text-white mb-1'>
                        {String(entry.fields.firstName || '')} {String(entry.fields.lastName || '')}
                      </h4>
                      {entry.fields.specialization && (
                        <p className='text-neutral-300 text-sm mb-3'>
                          {String(entry.fields.specialization)}
                        </p>
                      )}
                      {entry.fields.location && (
                        <div className='flex items-center text-neutral-300 text-sm'>
                          <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                          </svg>
                          {String(entry.fields.location)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className='text-center mt-10'>
                <div className='bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-md mx-auto'>
                  <div className='w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg className='w-8 h-8 text-red-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33' />
                    </svg>
                  </div>
                  <h3 className='text-xl font-semibold text-white mb-2'>
                    No Counselors Found
                  </h3>
                  <p className='text-neutral-300 text-sm'>
                    No matching counselors found for "{counselor}". Try searching with a different name or check your spelling.
                  </p>
                </div>
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
