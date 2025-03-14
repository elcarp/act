'use client'
import Image from 'next/image'
import React from 'react'
import WobbleCard from '~components/ui/wobble-card'
import counseling from '~public/images/counseling.jpg'
import counseling2 from '~public/images/counseling2.jpg'
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input'

export default function Introduction() {
  const placeholders = [
    'Search for counselor here',
    "Enter counselor's first or last name",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <section className='py-20 gradient-background'>
      <div className='max-w-2xl mx-auto'>
        <p className='text-white text-center pb-10 text-lg px-5'>
          Welcome to the Accredited Counselors of Thailand (ACT), where we
          advocate for the importance of professional counseling standards. Join
          us in fostering a community of accredited counselors in Thailand
          dedicated to quality, excellence, and ethical practice.
        </p>
      </div>
      <div className='mb-20 px-5'>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-4xl mx-auto w-full px-3'>
        <WobbleCard
          containerClassName='col-span-1 lg:col-span-2 h-full bg-teal-800 min-h-[500px] lg:min-h-[300px]'
          className=''>
          <div className='max-w-xs'>
            <h2 className='text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
              Why Licensing Matters for Counselors
            </h2>
            <p className='mt-4 text-left  text-base/6 text-neutral-200'>
              Licensing ensures that counselors meet professional and
              international standards, providing clients with confidence in
              their care and promoting ethical practice and accountability.
              Licensing enhances your credibility by verifying that you are a
              qualified counselor.
            </p>
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
            Learn About Our Application Process
          </h2>
          <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
            Our application process meets international standards of recognition
            and certifies that you are a qualified counselor.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 lg:col-span-3 bg-teal-700 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]'>
          <div className='max-w-sm'>
            <h2 className='max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
              Discover ACT&apos;s Vision & Mission
            </h2>
            <p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
              Accredited Counselors of Thailand (ACT) is an independent,
              non-profit initiative established in 2024 under the LEAF
              Foundation, dedicated to offering Thai national and resident
              counselors the opportunity to obtain an internationally recognized
              counseling license through an extensive accreditation process both
              for individuals and organizations. Our mission is to make
              accreditation the standard practice in Thailand in order to
              improve the quality of counseling, ensure accountability, and
              provide both local and international support for counselors.
              Please note that while ACT is working towards transferable credits
              across the APAC region in the future, local laws and licensing
              rules always apply.
            </p>
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
