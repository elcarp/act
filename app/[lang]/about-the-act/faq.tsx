'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { cn } from '~lib/utils'

const FAQs = [
  {
    question: 'Why should I become a member of ACT?',
    answer:
      'Joining ACT is essential for counselors in Thailand who are committed to maintaining professional standards, ethical practice, and accountability in their work. By becoming a member, you ensure that you are part of a network dedicated to upholding the highest standards in counseling, gaining access to resources that enhance your practice and ensuring your clients that you are qualified.',
  },
  {
    question: 'Can I become a counselor by taking a short online course?',
    answer:
      "While there are many short courses available internationally due to the growing interest in mental health, becoming a qualified counselor involves years of education, practice, proper supervision, and accountability. Counseling is not just about theoretical knowledge; it requires practical skills, ethical standards, and professional oversight to ensure client safety. Taking shortcuts can harm not only your professional reputation but, more importantly, your client's mental and physical wellbeing.",
  },
  {
    question: 'Why do I need a counseling network?',
    answer:
      'Engaging with other professionals provides an invaluable opportunity to share knowledge, insights, and effective strategies from diverse perspectives, enabling you to improve your practice and grow as a counselor. This collaborative approach fosters continuous learning, enhances professional competency, encourages innovation in addressing challenges within the field, and opens doors to partnerships and referrals.',
  },
  {
    question: 'How much does it cost to become a licensed counselor?',
    answer:
      'ACT keeps membership fees affordable thanks to the  of the LEAF Foundation, making it accessible for counselors in Thailand to pursue licensure without undue financial burden. Please note that any external costs to maintain the license, such as Supervision or CPD courses, are to be covered by the applicants themselves. Our annual prices for each membership tier are listed below:',
  },
  {
    question:
      "What's the difference between a psychologist, psychiatrist, and a counselor? Do they all need licenses?",
    answer:
      'Psychologists, psychiatrists, and counselors all work in the mental health field, but they have different roles, training, and ways of helping people.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'You can track your order by logging into your account and visiting the order history page. You will also receive a tracking number via email once your order has shipped.',
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
  answer: string
  open: string | null
  setOpen: (open: string | null) => void
}) => {
  const isOpen = open === question

  return (
    <div
      className='mb-8 w-full cursor-pointer rounded-lg bg-white p-4 shadow-input dark:bg-neutral-900'
      onClick={() => {
        if (isOpen) {
          setOpen(null)
        } else {
          setOpen(question)
        }
      }}>
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
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className='overflow-hidden text-neutral-500 dark:text-neutral-400'>
                {answer.split('').map((line, index) => (
                  <motion.span
                    initial={{ opacity: 0, filter: 'blur(5px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.2,
                      ease: 'easeOut',
                      delay: index * 0.005,
                    }}
                    key={index}>
                    {line}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
