'use client'

import { cn } from '~lib/utils'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Features() {
  return (
    <div className='w-full max-w-7xl mx-auto my-20 px-4 md:px-8'>
      <h2 className=' text-bold text-xl text-center md:text-4xl font-bold tracking-tight text-neutral-8000 dark:text-neutral-100'>
        Unlock Your Potential as a Licensed Counselor
      </h2>

      <div className='mt-20 grid cols-1 md:grid-cols-3 gap-4'>
        {items.map((item, index) => (
          <Link key={index} href={item.link}>
            <Card
              className={cn('flex flex-col justify-between', item.className)}>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

const items = [
  {
    title: 'Fellow Member (FM)',
    description:
      'An FM is a retired counselor who previously held accredited counselor (AC) status and was nominated by other ACT members to be a Fellow Member in their retirement.',
    className: 'md:col-span-1',
    link: 'act-membership-levels#fellow-member',
  },
  {
    title: 'Accredited Counselor (AC)',
    description:
      'An AC is an advanced counselor with vast experience in the field and a deep understanding of all aspects of counseling. (Licensed)',
    className: 'md:col-span-1',
    link: 'act-membership-levels#accredited-counselor',
  },
  {
    title: 'Licensed Counselor (LC)',
    description:
      'An LC is an experienced counselor with a considerable number of client contact hours who has demonstrated their commitment to ethical, accountable practice. Members with LC status are listed in the ACT online registry. (Licensed)',

    className: 'md:col-span-1',
    link: 'act-membership-levels#licensed-counselor',
  },
  {
    title: 'Associate Member (AM)',
    description:
      'An AM is an individual in a field other than counseling with an interest in therapy, psychology, or mental health who has completed at least one ACT-approved course. (Not a license)',
    className: 'md:col-span-1',
    link: 'act-membership-levels#associate-member',
  },
  {
    title: 'Junior Member (JM)',
    description:
      'A JM is a novice counselor who is pursuing or has just completed their degree in Counseling or a related field and is interested in gaining experience and learning from other counselors. (Not a license)',
    className: 'md:col-span-1',
    link: 'act-membership-levels#junior-member',
  },
  {
    title: 'Organizational Member (OM)',
    description:
      'We are not accepting applications for OM this year, but details will be announced soon.',

    className: 'md:col-span-1',
    link: 'act-membership-levels#organizational-member',
  },
]

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
        'group isolate flex flex-col rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
        className
      )}>
      {children}
    </motion.div>
  )
}
