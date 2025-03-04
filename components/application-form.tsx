'use client'

export function ApplicationForm() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    console.log(target)
  }

  return (
    <div className='bg-gray-50 dark:bg-neutral-900 w-full flex items-center justify-center'>
      <div className='flex relative px-4 z-20 items-center w-full justify-center py-10'>
        <div className='mx-auto w-full max-w-lg bg-white dark:bg-neutral-950 px-4 md:px-10 py-8 shadow-input rounded-3xl'>
          <div className='py-10'>
            <div>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400'>
                  Full Name
                </label>

                <div className='mt-2'>
                  <input
                    id='name'
                    type='name'
                    required
                    placeholder='Your full name here'
                    className='block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white'
                  />
                </div>

                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400'>
                  Email address
                </label>

                <div className='mt-2'>
                  <input
                    id='email'
                    type='email'
                    required
                    placeholder='hello@johndoe.com'
                    className='block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white'
                  />
                </div>

                <label
                  htmlFor='membership'
                  className='block text-sm font-medium leading-6 text-neutral-700 dark:text-neutral-400'>
                  Membership level you are interested in applying for (5 options
                  for them to choose from):
                </label>

                <div className='space-y-2'>
                  <label className='flex items-center space-x-2 text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox'
                      value='JM'
                    />
                    <span>Junior Member (JM)</span>
                  </label>

                  <label className='flex items-center space-x-2 text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox'
                      value='AM'
                    />
                    <span>Associate Member (AM)</span>
                  </label>

                  <label className='flex items-center space-x-2 text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox'
                      value='LC'
                    />
                    <span>Licensed Counselor (LC)</span>
                  </label>

                  <label className='flex items-center space-x-2 text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox'
                      value='AC'
                    />
                    <span>Accredited Counselor (AC)</span>
                  </label>

                  <label className='flex items-center space-x-2 text-sm'>
                    <input
                      type='checkbox'
                      className='form-checkbox'
                      value='FM'
                    />
                    <span>Fellow Member (FM)</span>
                  </label>
                </div>

                <label
                  htmlFor='message'
                  className='block text-sm font-bold leading-6 text-neutral-700 dark:text-neutral-400 mt-20'>
                  Questions or concerns
                </label>

                <div className='mt-2'>
                  <textarea
                    rows={5}
                    id='message'
                    placeholder='Enter your message here'
                    className='block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5  shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white'
                  />
                </div>

                <div>
                  <button className='bg-black relative z-10 hover:bg-black/90  text-white text-sm md:text-sm transition font-medium duration-200  rounded-full px-4 py-2  flex items-center justify-center w-full dark:text-black dark:bg-white dark:hover:bg-neutral-100 dark:hover:shadow-xl'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
