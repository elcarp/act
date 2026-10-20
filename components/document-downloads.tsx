'use client'
import { IconDownload, IconFileTypePdf } from '@tabler/icons-react'
import { useParams } from 'next/navigation'

const documents = [
  {
    lang: 'en',
    href: '/documents/act-application-overview-en.pdf',
    title: 'ACT Application Overview',
    description: 'English version (PDF, 8.7 MB)',
  },
  {
    lang: 'th',
    href: '/documents/act-application-overview-th.pdf',
    title: 'ภาพรวมการสมัคร ACT',
    description: 'ฉบับภาษาไทย (PDF, 9.2 MB)',
  },
]

export function DocumentDownloads() {
  const params = useParams()
  const locale = params && params.lang
  const isThai = locale == 'th-TH'

  // Show the document in the visitor's language first
  const sorted = isThai ? [...documents].reverse() : documents

  return (
    <div className='mt-8'>
      <h2 className='text-lg font-bold'>
        {isThai ? 'ดาวน์โหลดเอกสาร' : 'Download the Application Overview'}
      </h2>
      <div className='mt-4 grid gap-4 sm:grid-cols-2'>
        {sorted.map((doc) => (
          <a
            key={doc.lang}
            href={doc.href}
            download
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center gap-4 bg-gray-50 px-5 py-4 rounded-3xl shadow-input transition hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/15'>
            <IconFileTypePdf
              className='h-10 w-10 shrink-0 text-red-600'
              stroke={1.5}
            />
            <div className='flex-1 min-w-0'>
              <p className='font-medium text-gray-900'>{doc.title}</p>
              <p className='text-sm text-gray-500'>{doc.description}</p>
            </div>
            <IconDownload className='h-5 w-5 shrink-0 text-gray-400 transition group-hover:text-gray-900' />
          </a>
        ))}
      </div>
    </div>
  )
}
