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
      <p>
        Engaging with other professionals provides an invaluable opportunity to
        share knowledge, insights, and effective strategies from diverse
        perspectives, enabling you to improve your practice and grow as a
        counselor. This collaborative approach fosters continuous learning,
        enhances professional competency, encourages innovation in addressing
        challenges within the field, and opens doors to partnerships and
        referrals.
      </p>
    ),
  },
  {
    question: 'How much does it cost to become an accredited counselor?',
    answer: (
      <div>
        ACT keeps membership fees affordable thanks to the support of the
        <strong> LEAF Foundation</strong>. Our annual prices for each membership
        tier are listed below:
        <ul className='list-disc ml-4 mt-4'>
          <li>Fellow Member (FM) - 1,000 THB (no application fee)</li>
          <li>
            Accredited Counselor (AC) - 4,000 THB (2,500 THB application fee)
          </li>
          <li>
            Registered Counselor (RC) - 2,000 THB (1,000 THB application fee)
          </li>
          <li>Associate Member (AM) - 1,000 THB (no application fee)</li>
          <li>Junior Member (JM) - Free of charge (no application fee)</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What's the difference between a psychologist, psychiatrist, and a counselor? Do they all need licenses?",
    answer: (
      <>
        <p>
          Psychologists, psychiatrists, and counselors all work in the mental
          health field, but they have different roles, training, and ways of
          helping people.
        </p>
        <ul className='list-disc ml-4 mt-4'>
          <li className='mb-4'>
            Psychologists have a doctoral degree (Ph.D. or Psy.D.) in
            psychology. They are trained to assess, diagnose, and treat mental
            health issues through talk therapy, often using specific therapeutic
            techniques. They don&apos;t prescribe medication but may work with
            psychiatrists or other healthcare providers for that. They need a
            license to practice, which usually requires passing a national exam.
            Clinical psychologists in Thailand must be licensed with the
            Department of Mental Health (DMH).{' '}
          </li>

          <li className='mb-4'>
            Psychiatrists are medical doctors (MD or DO) who specialize in
            mental health. They can prescribe medications, offer therapy, and
            diagnose mental illnesses. Their medical training allows them to
            understand the physical aspects of mental health issues, like how
            brain chemistry impacts behavior. In Thailand, psychiatrists must be
            licensed with the Medical Council of Thailand (TMC).{' '}
          </li>

          <li className='mb-4'>
            Counselors typically have a master&paos;s degree in counseling or a
            related field. They focus on providing support and therapy for
            issues like stress, anxiety, or relationship problems. Some
            counselors may specialize in specific areas (e.g. marriage,
            addiction, disordered eating), and they may use a range of
            therapeutic tools such as CBT, EMDR, somatic approach,
            person-centered therapy, and more. Counselors don&apos;t prescribe
            medication but may work with psychiatrists or other healthcare
            providers for that. Like psychologists, they also need to be
            licensed, which involves completing a specific number of supervised
            hours and professional development. In Thailand, there is currently
            no licensing mandate for counselors, but with ACT&apos;s new
            licensing board, this may change soon.{' '}
          </li>
        </ul>
        <p>
          In short, while they all work with mental health, psychologists and
          psychiatrists have more extensive medical training, and counselors
          tend to provide more direct support for everyday issues. And yes, all
          of them need licenses to practice, though the requirements can vary by
          country.
        </p>
      </>
    ),
  },
  {
    question: "What's the difference between a coach and a counselor?",
    answer:
      'While both coaches and counselors support personal growth, their roles differ significantly. Counselors are trained to address emotional and psychological issues, often working with clients to overcome trauma, mental health challenges, or relational conflicts. This requires formal education, accreditation, and adherence to ethical standards. Coaches, on the other hand, focus on helping clients achieve specific goals, such as career advancement or personal development, and are not equipped to address complex mental health issues.',
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
