'use client'

import { cn } from '~lib/utils'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import credibility from '~public/images/image1.jpg'
import opportunities from '~public/images/opportunities.jpg'
import benefits from '~public/images/image3.jpg'

export default function Features() {
  return (
    <div className='w-full max-w-7xl mx-auto my-20 px-4 md:px-8'>
      <h2 className=' text-bold text-xl text-center md:text-4xl font-bold tracking-tight text-neutral-8000 dark:text-neutral-100'>
        Unlock Your Potential as a Licensed Counselor
      </h2>

      <div className='mt-20  grid cols-1 md:grid-cols-3 gap-4 md:auto-rows-[25rem]'>
        {items.map((item, index) => (
          <Card
            key={index}
            className={cn('flex flex-col justify-between', item.className)}>
            <CardContent className='h-40'>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardSkeletonBody>{item.header}</CardSkeletonBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

const items = [
  {
    title: 'Professional Credibility',
    description:
      'Gain recognition and trust from clients and peers in the counseling community internationally..',
    header: (
      <Image
        src={credibility.src}
        alt='Bento grid 1'
        width={500}
        height={500}
        className='w-full object-cover rounded-lg ml-6'
      />
    ),
    className: 'md:col-span-1',
  },
  {
    title: 'Expanded Opportunities',
    description:
      'Access a wide range of new opportunities both in Thailand and across borders by enhancing your credibility.',
    header: (
      <Image
        src={opportunities.src}
        alt='Bento grid 2'
        width={500}
        height={500}
      />
    ),
    className: 'md:col-span-1',
  },
  {
    title: 'Membership Benefits',
    description:
      'Membership provides exclusive access to resources and networking opportunities.',
    header: (
      <Image
        src={benefits.src}
        alt='Bento grid 3'
        width={500}
        height={500}
        className='rounded-lg -ml-6 object-cover -mt-4 md:-mt-0'
      />
    ),
    className: 'md:col-span-1',
  },
]

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('overflow-hidden', className)}>{children}</div>
}

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn('p-6', className)}>{children}</div>
}

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
    },
  }
  return (
    <motion.h3
      variants={variants}
      transition={{
        type: 'easeOut',
        duration: 0.2,
      }}
      className={cn(
        'text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100',
        className
      )}>
      {children}
    </motion.h3>
  )
}
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 15,
    },
  }
  return (
    <motion.p
      variants={variants}
      transition={{
        type: 'easeOut',
        duration: 0.2,
      }}
      className={cn(
        ' max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400',
        className
      )}>
      {children}
    </motion.p>
  )
}

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <motion.div
      whileHover='animate'
      className={cn(
        'group isolate flex flex-col rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden',
        className
      )}>
      {children}
    </motion.div>
  )
}
