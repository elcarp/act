'use client'
import React, { useState, JSX } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { cn } from '~lib/utils'

const FAQs = [
  {
    question: 'Why should I become a member of ACT?',
    answer: (
      <p>
        Joining ACT is essential for counselors in Thailand who are committed to
        maintaining professional standards, ethical practice, and accountability
        in their work. By becoming a member, you ensure that you are part of a
        network dedicated to upholding the highest standards in counseling,
        gaining access to resources that enhance your practice and ensuring your
        clients that you are qualified.
      </p>
    ),
  },
  {
    question: 'Can I become a counselor by taking a short online course?',
    answer: (
      <p>
        While there are many short courses available internationally due to the
        growing interest in mental health, becoming a{' '}
        <strong>qualified counselor</strong> involves years of education,
        practice, proper supervision, and accountability.
      </p>
    ),
  },
  {
    question: 'Why do I need a counseling network?',
    answer: (
      <ul className='list-disc pl-5'>
        <li>Share knowledge and insights.</li>
        <li>Continuous learning and professional growth.</li>
        <li>Expand your network for partnerships and referrals.</li>
      </ul>
    ),
  },
  {
    question: 'How much does it cost to become a licensed counselor?',
    answer: (
      <p>
        ACT keeps membership fees affordable thanks to the support of the
        <strong> LEAF Foundation</strong>. Our annual prices for each membership
        tier are listed below:
      </p>
    ),
  },
  {
    question:
      "What's the difference between a psychologist, psychiatrist, and a counselor? Do they all need licenses?",
    answer: (
      <p>
        Psychologists, psychiatrists, and counselors all work in the mental
        health field, but they have different roles, training, and ways of
        helping people.
      </p>
    ),
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div className='mx-auto grid w-full'>
      <div className='mx-auto mt-10 w-full max-w-3xl'>
        {FAQs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            open={open}
            setOpen={setOpen}
          />
        ))}
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
  answer: string | JSX.Element
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
                className='overflow-hidden text-neutral-500 dark:text-neutral-400 mt-2'>
                {typeof answer === 'string' ? (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}>
                    {answer}
                  </motion.p>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}>
                    {React.Children.map(answer, (child, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}>
                        {child}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
