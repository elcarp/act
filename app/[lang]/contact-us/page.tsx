'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ContactUs() {
  const params = useParams()
  const locale = params && params.lang
  return (
    <>
      <section className='bg-slate-100 flex items-center justify-center h-screen'>
        <div className='max-w-xl px-4 text-center'>
          {locale == 'th-TH' ? (
            <>
              <p>
                หากมีข้อสงสัยเฉพาะหรือต้องการติดต่อโดยตรง กรุณาติดต่อ ACT ที่{' '}
                <a
                  href='mailto:actcounselors.info@gmail.com'
                  className='underline underline-offset-2'>
                  actcounselors.info@gmail.com
                </a>
              </p>
              <p className='mt-4'>
                ข้อมูลทั่วไปสามารถติดตามได้ที่ช่องทางโซเชียลมีเดียของเรา
              </p>
            </>
          ) : (
            <>
              <p>
                For direct or specific inquiries, please contact ACT at{' '}
                <a
                  href='mailto:actcounselors.info@gmail.com'
                  className='underline underline-offset-2'>
                  actcounselors.info@gmail.com
                </a>
                .
              </p>
              <p className='mt-4'>
                General information is also available at our social media
                channels.
              </p>
            </>
          )}
          <p className='text-center flex justify-center mt-10'>
            <Link
              href='https://www.facebook.com/share/15mtxxa6gg/?mibextid=wwXIfr'
              target='_blank'
              className='mx-2'>
              <FontAwesomeIcon icon={faFacebook} width={20} />
            </Link>
            <Link
              href='https://www.instagram.com/actcounselors?igsh=bjVuY2MyZ3Y5Njk='
              target='_blank'
              className='mx-2'>
              <FontAwesomeIcon icon={faInstagram} width={20} />
            </Link>
            <Link
              href='https://www.linkedin.com/company/accredited-counselors-of-thailand-act'
              target='_blank'
              className='mx-2'>
              <FontAwesomeIcon icon={faLinkedin} width={20} />
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
