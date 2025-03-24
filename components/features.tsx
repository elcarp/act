'use client'
import { cn } from '~lib/utils'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface MembershipLevel {
  title: string
  excerpt: string
  order: number
}

export default function Features({
  membershipLevels,
}: {
  membershipLevels: MembershipLevel[]
}) {
  const sortedMembershipLevels = membershipLevels.sort(
    (a, b) => a.order - b.order
  )
  return (
    <div className='w-full max-w-7xl mx-auto my-20 px-4 md:px-8'>
      <h2 className=' text-bold text-xl text-center md:text-4xl font-bold tracking-tight text-neutral-8000'>
        Unlock Your Potential as a Registered Counselor
      </h2>

      <div className='mt-20 grid cols-1 md:grid-cols-3 gap-4'>
        {sortedMembershipLevels.map((item, index) => (
          <Link key={index} href={item.title}>
            <Card className='flex flex-col justify-between md:col-span-1'>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.excerpt}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
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
        'text-base font-medium tracking-tight text-neutral-700',
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
        ' max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500',
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
        'group isolate flex flex-col rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
        className
      )}>
      {children}
    </motion.div>
  )
}
