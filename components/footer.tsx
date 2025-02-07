import { cn } from '~lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '~public/images/act-logo.png'

export default function Footer() {
  return (
    <div className='bg-gray-50 dark:bg-neutral-800'>
      <div className='mx-auto max-w-7xl px-4 py-10 md:px-8'>
        <div className='border-b border-neutral-200 pb-2 dark:border-neutral-700'>
          <div className='mb-10 max-w-xl'>
            <Logo className='justify-start' />
            <p className='mb-4 text-sm text-neutral-600 dark:text-neutral-400'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-10 border-b border-neutral-200 pb-10 pt-10 dark:border-neutral-700 md:grid-cols-4'>
          <ul className='text-base font-medium text-neutral-800 dark:text-neutral-200'>
            <li className='mb-4 text-sm font-bold text-black dark:text-white'>
              About the ACT
            </li>
            {ABOUT_ACT.map((item, idx) => (
              <li key={'first' + idx} className='mb-4 text-sm font-normal'>
                <Link
                  href={item.href}
                  className='text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='text-base font-medium text-neutral-800 dark:text-neutral-200'>
            <li className='mb-4 text-sm font-bold text-black dark:text-white'>
              Membership Benefits
            </li>
            {MEMBERSHIP.map((item, idx) => (
              <li key={'first' + idx} className='mb-4 text-sm font-normal'>
                <Link
                  href={item.href}
                  className='text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='text-base font-medium text-neutral-800 dark:text-neutral-200'>
            <li className='mb-4 text-sm font-bold text-black dark:text-white'>
              Contact
            </li>
            {CONTACT.map((item, idx) => (
              <li key={'first' + idx} className='mb-4 text-sm font-normal'>
                <Link
                  href={item.href}
                  className='text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className='mb-4 pt-10 text-sm text-neutral-600 dark:text-neutral-400'>
          &copy; {new Date().getFullYear()} ACT Reserved.
        </p>
      </div>
    </div>
  )
}

const MEMBERSHIP = [
  {
    title: 'Lorem ipsum',
    href: '#',
  },
  {
    title: 'Lorem ipsum',
    href: '#',
  },
  {
    title: 'Lorem ipsum',
    href: '#',
  },
]

const ABOUT_ACT = [
  {
    title: 'Lorem ipsum',
    href: '#',
  },
  {
    title: 'Lorem ipsum',
    href: '#',
  },
  {
    title: 'Lorem ipsum',
    href: '#',
  },
]

const CONTACT = [
  {
    title: 'Lorem ipsum',
    href: '#',
  },
  {
    title: 'Lorem ipsum',
    href: '#',
  },
  {
    title: 'Lorem ipsum',
    href: '#',
  },
]

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href='/'
      className={cn(
        'flex flex-shrink-0 items-center justify-center space-x-2 py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500 dark:text-gray-100',
        className
      )}>
      <div className='relative flex h-14 w-14 items-center justify-center rounded-md border text-sm text-white antialiased md:h-6 md:w-6'>
        <div className='absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl' />
        <div className='relative z-20 text-sm text-emerald-500'>
          <Image
            src={logo.src}
            height={100}
            width={100}
            alt='Logo'
            className='block dark:hidden'
          />
        </div>
      </div>
    </Link>
  )
}
