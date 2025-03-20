'use client'

export function ApplicationForm() {
  return (
    <div className='bg-gray-100 dark:bg-neutral-900 w-full flex items-center justify-center'>
      <div className='flex relative px-4 z-20 items-center w-full justify-center py-10'>
        <div className='mx-auto w-full max-w-lg bg-gray-50 dark:bg-neutral-950 px-4 md:px-10 py-8 shadow-input rounded-3xl'>
          <div className='py-10'>
            <div>
              <form
                action='https://public.herotofu.com/v1/cb9dd370-f976-11ef-896c-cb89bf5fb2e4'
                method='POST'
                className='space-y-4'>
                <label htmlFor='name' className='block text-sm font-medium'>
                  Full Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  placeholder='Your full name here'
                  className='block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input'
                />

                <label htmlFor='email' className='block text-sm font-medium'>
                  Email address
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='hello@johndoe.com'
                  className='block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input'
                />

                <label className='block text-sm font-medium'>
                  Membership Level
                </label>
                <div className='space-y-2'>
                  {[
                    { value: 'JM', label: 'Junior Member (JM)' },
                    { value: 'AM', label: 'Associate Member (AM)' },
                    { value: 'RC', label: 'Registered Counselor (RC)' },
                    { value: 'AC', label: 'Accredited Counselor (AC)' },
                    { value: 'FM', label: 'Fellow Member (FM)' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className='flex items-center space-x-2 text-sm'>
                      <input
                        type='checkbox'
                        name='membership'
                        value={option.value}
                        className='form-checkbox'
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>

                <label
                  htmlFor='message'
                  className='block text-sm font-medium pt-8'>
                  Questions or concerns
                </label>
                <textarea
                  rows={5}
                  id='message'
                  name='message'
                  placeholder='Enter your message here'
                  className='block w-full bg-white px-4 rounded-md border-0 py-1.5 shadow-input'
                />

                <input
                  type='submit'
                  value='Submit'
                  className='bg-black hover:bg-black/90 text-white text-sm font-medium rounded-full px-4 py-2 w-full'
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