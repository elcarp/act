'use client'

import React from 'react'
import { useParams } from 'next/navigation'

export default function LatestNews() {
  const params = useParams()
  const locale = params && params.lang

  return (
    <div className='w-full max-w-7xl mx-auto my-20 px-4 md:px-8 bg-slate-200 rounded-xl p-20'>
      <h2 className='text-bold text-xl text-center md:text-4xl font-bold tracking-tight text-neutral-800'>
        {locale == 'th-TH' ? 'ข้อมูลข่าวสาร' : 'Latest News'}
      </h2>
      <p className='text-center mt-10'> {locale == 'th-TH' ? 'โปรดติดตาม' : 'Coming soon.'}</p>
    </div>
  )
}
