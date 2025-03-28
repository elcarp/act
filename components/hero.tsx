'use client'
import React from 'react'
import ColourfulText from '~components/ui/colourful-text'
import { motion } from 'motion/react'
import hero from '~public/images/hero.jpg'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface Props {
  firstLine: string[]
  secondLine: string
}
export default function Hero({ firstLine, secondLine }: Props) {
  const params = useParams()
  const locale = params && params.lang
  return (
    <>
      <div className='h-screen-1/2 shadow-2xl w-full flex flex-wrap items-center justify-center relative overflow-hidden bg-teal-800'>
        <div>
          <motion.img
            src={hero.src}
            className='h-full w-full object-cover absolute inset-0 [mask-image:radial-gradient(circle,transparent,black_80%)] pointer-events-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
          />
          <h1
            className={`max-w-5xl text-2xl md:text-5xl ${
              locale == 'en-US' && 'lg:text-6xl'
            } text-center text-white relative z-2`}>
            {firstLine[0]}, {firstLine[1]},{' '}
            {locale == 'en-US' ? (
              <span className='font-extrabold'>
                <ColourfulText text={firstLine[2]} />
              </span>
            ) : (
              <span>{firstLine[2]}</span>
            )}{' '}
            <br /> {secondLine}
          </h1>
          <div className='mt-10 mx-auto flex w-96 justify-center'>
            <Link href='/about-the-act'>
              <button className='w-40 mx-2 px-8 py-2 rounded-md bg-transparent text-white font-bold transition duration-200 hover:bg-teal-500 border-2 border-teal-500'>
                Learn More
              </button>
            </Link>
            <Link href='/apply'>
              <button className='w-40 mx-2 px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-transparent border-2 border-transparent hover:border-teal-500'>
                Apply
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
