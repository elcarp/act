import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <>
      <section className='bg-slate-100 flex items-center justify-center h-screen'>
        <div>
          If you have any questions or comments, please contact us via our
          social media channels.
          <p className='text-center flex justify-center mt-10'>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              className='mx-2'>
              <FontAwesomeIcon icon={faInstagram} width={20} />
            </Link>
            <Link
              href='https://www.instagram.com/'
              target='_blank'
              className='mx-2'>
              <FontAwesomeIcon icon={faFacebook} width={20} />
            </Link>
            <Link
              href='https://www.linkedin.com/'
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
