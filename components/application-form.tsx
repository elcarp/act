'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Dictionary {
  nav: {
    organizational_member: string
    junior_member: string
    associate_member: string
    registered_counselor: string
    accredited_counselor: string
    fellow_member: string
  }
}

export function ApplicationForm() {
  const params = useParams()
  const locale = params && params.lang

  const lang = locale?.includes('en') ? 'en' : 'th'
  const [dict, setDict] = useState<Dictionary | null>(null)

  useEffect(() => {
    async function loadDict() {
      const dictionary = await import(`~dictionaries/${lang}.json`).then(
        (mod) => mod.default
      )
      setDict(dictionary)
    }

    loadDict()
  }, [lang])

  if (!dict) return null

  const disabledFieldClass =
    'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 disabled:opacity-75 disabled:placeholder:text-gray-400 disabled:shadow-none'
  const fieldLabelClass = 'block text-sm font-medium text-gray-600'

  return (
    <div className='bg-gray-100 w-full flex items-center justify-center'>
      <div className='flex relative px-4 z-20 items-center w-full justify-center py-10'>
        <div className='mx-auto w-full max-w-lg bg-gray-50 px-4 md:px-10 py-8 shadow-input rounded-3xl'>
          <div className='py-10'>
            <div>
              <form
                action='https://public.herotofu.com/v1/97949cc0-aa75-11f0-a72d-cfd53f2c1510'
                method='POST'
                className='space-y-4'>
                <label htmlFor='name' className={fieldLabelClass}>
                  {locale == 'th-TH' ? 'ชื่อ' : 'Full Name'}
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  disabled
                  placeholder='Your full name here'
                  className={`block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input ${disabledFieldClass}`}
                />

                <label htmlFor='email' className={fieldLabelClass}>
                  {locale == 'th-TH' ? 'อีเมล' : 'Email address'}
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  disabled
                  placeholder='hello@johndoe.com'
                  className={`block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input ${disabledFieldClass}`}
                />

                <label className={fieldLabelClass}>
                  {locale == 'th-TH'
                    ? 'ประเภทสมาชิกที่สนใจสมัคร '
                    : 'Membership Level'}
                </label>
                <div className='space-y-2'>
                  {[
                    { value: 'JM', label: `${dict.nav.junior_member}` },
                    { value: 'AM', label: `${dict.nav.associate_member}` },
                    { value: 'RC', label: `${dict.nav.registered_counselor}` },
                    { value: 'AC', label: `${dict.nav.accredited_counselor}` },
                    { value: 'FM', label: `${dict.nav.fellow_member}` },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className='flex items-center space-x-2 text-sm text-gray-600 cursor-not-allowed select-none'>
                      <input
                        type='checkbox'
                        name='membership'
                        value={option.value}
                        disabled
                        className='form-checkbox disabled:opacity-50 disabled:cursor-not-allowed disabled:border-gray-300'
                      />
                      <span className='text-gray-500'>{option.label}</span>
                    </label>
                  ))}
                </div>

                <label htmlFor='message' className={`${fieldLabelClass} pt-8`}>
                  {locale == 'th-TH'
                    ? 'คำถามหรือข้อสงสัย'
                    : 'Questions or concerns'}
                </label>
                <textarea
                  rows={5}
                  id='message'
                  name='message'
                  disabled
                  placeholder='Enter your message here'
                  className={`block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input resize-none ${disabledFieldClass}`}
                />

                <input
                  type='submit'
                  disabled
                  value='Submit'
                  className='bg-black hover:bg-black/90 text-white text-sm font-medium rounded-full px-4 py-2 w-full disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-200 disabled:hover:bg-gray-400'
                />
                <div
                  style={{
                    textIndent: '-99999px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    position: 'absolute',
                  }}
                  aria-hidden='true'>
                  <input
                    type='text'
                    name='_gotcha'
                    tabIndex={-1}
                    autoComplete='off'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
