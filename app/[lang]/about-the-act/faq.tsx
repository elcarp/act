'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { cn } from '~lib/utils'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import styles from './faq.module.css'
import type { FAQItem } from './page'

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div className='mx-auto grid w-full'>
      <div className='mx-auto mt-10 w-full max-w-3xl'>
        {faqs.map((item) => {
          console.log(item)
          return (
            <FAQItem
              key={item.fields.order}
              question={item.fields.question}
              answer={item.fields.answer as unknown as Document}
              open={open}
              setOpen={setOpen}
            />
          )
        })}
      </div>
    </div>
  )
}

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string
  answer: Document
  open: string | null
  setOpen: (open: string | null) => void
}) => {
  const isOpen = open === question

  return (
    <div
      className='mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900'
      onClick={() => setOpen(isOpen ? null : question)}>
      <div className='flex items-start'>
        <div className='relative mr-4 mt-1 h-6 w-6 flex-shrink-0'>
          <IconChevronUp
            className={cn(
              'absolute inset-0 h-6 w-6 transform text-black transition-all duration-200 dark:text-white',
              isOpen && 'rotate-90 scale-0'
            )}
          />
          <IconChevronDown
            className={cn(
              'absolute inset-0 h-6 w-6 rotate-90 scale-0 transform text-black transition-all duration-200 dark:text-white',
              isOpen && 'rotate-0 scale-100'
            )}
          />
        </div>
        <div>
          <h3 className='text-lg font-medium text-neutral-700 dark:text-neutral-200'>
            {question}
          </h3>
          <AnimatePresence mode='wait'>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={`${styles.answer} overflow-hidden text-neutral-500 dark:text-neutral-400 mt-2`}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}>
                  {documentToReactComponents(answer)}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
