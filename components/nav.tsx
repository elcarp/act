/* eslint-disable  @typescript-eslint/no-explicit-any */

'use client'
import { cn } from '~lib/utils'
import { IconChevronDown, IconMenu2, IconX } from '@tabler/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from '~public/images/act-logo.png'
import LanguageSwitcher from './language-switcher'
import { useRouter, useParams } from 'next/navigation'

interface Dictionary {
  nav: {
    what_is_act_accreditation: string
    act_membership_levels: string
    contact: string
    overview: string
    organizational_member: string
    junior_member: string
    associate_member: string
    registered_counselor: string
    accredited_counselor: string
    fellow_member: string
    partnerships: string
    faqs: string
    about: string
    apply: string
  }
}
export default function Nav() {
  return <Navbar />
}

const Navbar = () => {
  const params = useParams()
  const locale = params && params.lang
  const lang = locale?.includes('en') ? 'en' : 'th'

  const [dict, setDict] = useState<Dictionary | null>(null)

  useEffect(() => {
    async function loadDict() {
      const dictionary = await import(`~dictionaries/${lang}.json`).then(
        (mod) => mod.default
      )
      setDict(dictionary)
    }

    loadDict()
  }, [lang])

  if (!dict) return null

  const localeLink = locale == 'th-TH' ? `/th-TH` : ''

  const navItems = [
    {
      name: `${dict.nav.about}`,
      link: `${localeLink}/about-the-act`,
      children: [
        {
          name: `${dict.nav.what_is_act_accreditation}`,
          link: `${localeLink}/about-the-act`,
        },
        {
          name: `${dict.nav.faqs}`,
          link: `${localeLink}/about-the-act#faq`,
        },
        {
          name: `${dict.nav.partnerships}`,
          link: `${localeLink}/about-the-act#partnerships`,
        },
      ],
    },
    {
      name: `${dict.nav.act_membership_levels}`,
      link: `${localeLink}/act-membership-levels`,
      children: [
        {
          name: `${dict.nav.fellow_member}`,
          link: `${localeLink}/act-membership-levels#fellow-member`,
        },
        {
          name: `${dict.nav.accredited_counselor}`,
          link: `${localeLink}/act-membership-levels#accredited-counselor`,
        },
        {
          name: `${dict.nav.registered_counselor}`,
          link: `${localeLink}/act-membership-levels#registered-counselor`,
        },
        {
          name: `${dict.nav.associate_member}`,
          link: `${localeLink}/act-membership-levels#associate-member`,
        },
        {
          name: `${dict.nav.junior_member}`,
          link: `${localeLink}/act-membership-levels#junior-member`,
        },
        {
          name: `${dict.nav.organizational_member}`,
          link: `${localeLink}/act-membership-levels#organizational-member`,
        },
        {
          name: `${dict.nav.overview}`,
          link: `${localeLink}/act-membership-levels#overview`,
        },
      ],
    },
    {
      name: `${dict.nav.apply}`,
      link: `${localeLink}/apply`,
    },
    {
      name: `${dict.nav.contact}`,
      link: `${localeLink}/contact-us`,
    },
  ]

  return (
    <div className='w-full'>
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  )
}

const DesktopNav = ({ navItems }: any) => {
  const [active, setActive] = useState<string | null>(null)
  return (
    <motion.div
      className={cn(
        'hidden lg:flex flex-row self-start bg-white items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full',
        'sticky top-40 inset-x-0'
      )}>
      <Logo />
      <div className='lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200'>
        <Menu setActive={setActive}>
          {navItems.map((navItem: any) => {
            return (
              <MenuItem
                key={navItem.name}
                setActive={setActive}
                active={active}
                item={navItem.name}
                link={navItem.link}>
                {navItem.children && (
                  <div className={`flex flex-col space-y-4 text-sm`}>
                    {navItem.children.map(
                      ({ name, link }: { name: string; link: string }) => {
                        return (
                          <HoveredLink key={name} href={link}>
                            {name}
                          </HoveredLink>
                        )
                      }
                    )}
                  </div>
                )}
              </MenuItem>
            )
          })}
        </Menu>
      </div>
      <span className='block cursor-pointer'>
        <LanguageSwitcher />
      </span>
    </motion.div>
  )
}

const MobileNav = ({ navItems }: any) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  function handleClick(link: string) {
    router.push(link)
    setOpen(false)
  }

  return (
    <>
      <motion.div
        animate={{
          borderRadius: open ? '4px' : '2rem',
        }}
        key={String(open)}
        className='flex relative flex-col lg:hidden w-full justify-between items-center bg-white max-w-[calc(100vw-2rem)] mx-auto px-4 py-2'>
        <div className='flex flex-row justify-between items-center w-full'>
          <Logo />
          {open ? (
            <IconX className='text-black' onClick={() => setOpen(!open)} />
          ) : (
            <IconMenu2 className='text-black' onClick={() => setOpen(!open)} />
          )}
        </div>
        <div className='text-right w-full mt-1 mb-2'>
          <LanguageSwitcher />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='flex rounded-lg absolute top-16 bg-white inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8'>
              {navItems.map((navItem: any, idx: number) => (
                <div key={`navItem-${idx}`} className='w-full'>
                  {navItem.children ? (
                    <MobileChildNavItems navItem={navItem} />
                  ) : (
                    <Link
                      href={navItem.link}
                      onClick={() => handleClick(navItem.link)}
                      className='relative text-neutral-600 cursor-pointer'>
                      <motion.span className='block'>
                        {navItem.name}
                      </motion.span>
                    </Link>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

const MobileChildNavItems = ({ navItem }: { navItem: any }) => {
  const router = useRouter()
  function handleClick(link: string) {
    router.push(`/${link}`)
    setOpen(false)
  }
  const [open, setOpen] = useState(false)
  return (
    <motion.div className='overflow-hidden'>
      <button
        onClick={() => setOpen(!open)}
        className='relative text-neutral-600 flex w-full justify-between'>
        <motion.span className='block'>{navItem.name}</motion.span>
        <IconChevronDown className='text-neutral-700' />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0 }}
            className='pl-4'>
            {navItem.children.map((child: any, childIdx: number) => (
              <Link
                key={`child-${childIdx}`}
                onClick={() => handleClick(navItem.link)}
                href={child.link}
                className='relative text-neutral-600'>
                <motion.span className='block'>{child.name}</motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Logo = () => {
  return (
    <Link
      href='/'
      className='font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1  relative z-20'>
      <Image src={logo.src} alt='logo' width={30} height={30} />
    </Link>
  )
}

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

export const MenuItem = ({
  setActive,
  active,
  item,
  link,
  children,
}: {
  setActive: (item: string) => void
  active: string | null
  item: string
  link: string
  children?: React.ReactNode
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className='relative '>
      <motion.p
        transition={{ duration: 0.3 }}
        className='cursor-pointer text-neutral-700 hover:opacity-[0.9] '>
        <Link href={link}>{item}</Link>
      </motion.p>
      {active !== null && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div className='absolute top-[calc(100%_+_0.2rem)] left-1/2 transform -translate-x-1/2 pt-4'>
              <div className=''>
                <motion.div
                  transition={transition}
                  layoutId='active' // layoutId ensures smooth animation
                  className='bg-white mt-4 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl'>
                  <motion.div
                    layout // layout ensures smooth animation
                    className='w-max h-full p-4'>
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void
  children: React.ReactNode
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className='relative rounded-full bg-white flex justify-center space-x-4 px-4 py-3 '>
      {children}
    </nav>
  )
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string
  description: string
  href: string
  src: string
}) => {
  return (
    <Link href={href} className='flex gap-4'>
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className='flex-shrink-0 rounded-md shadow-2xl'
      />
      <div>
        <h4 className='text-base font-normal mb-1 text-black'>{title}</h4>
        <p className='text-neutral-700 text-sm max-w-[10rem]'>{description}</p>
      </div>
    </Link>
  )
}

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className='text-neutral-700 hover:text-black '>
      {children}
    </Link>
  )
}
