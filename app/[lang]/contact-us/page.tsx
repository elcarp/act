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
        <div>
          {locale == 'th-TH'
            ? 'หากคุณมีคำถามหรือข้อเสนอแนะ กรุณาติดต่อเราผ่านช่องทางโซเชียลมีเดียของเรา'
            : 'If you have any questions or comments, please contact us via oursocial media channels.'}
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
