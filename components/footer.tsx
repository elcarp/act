import { cn } from '~lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '~public/images/act-logo.png'

export default function Footer() {
  return (
    <div className='bg-gray-50 text-center'>
      <div className='mb-10 max-w-xl mx-auto text-center'>
        <Logo className='justify-center' />
      </div>

      <p className='mb-4 pt-10 text-sm text-neutral-600'>
        &copy; {new Date().getFullYear()} ACT Reserved. Website designed and
        developed by{' '}
        <Link href='https://lisecarpenter.com/' target='_blank'>
          Lise Carpenter
        </Link>
        .
      </p>
    </div>
  )
}
const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href='/'
      className={cn(
        'flex items-center justify-center py-6 text-center text-2xl font-bold text-neutral-600 selection:bg-emerald-500',
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
            className='block'
          />
        </div>
      </div>
    </Link>
  )
}
