import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className='h-screen flex justify-center items-center bg-slate-200'>
      <div>
        Thank you for your application. You will receive an email with further
        instructions.
        <button className='block mt-10 mx-auto px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-transparent border-2 border-transparent hover:border-teal-500'>
          <Link href='/'>Back to homepage</Link>
        </button>
      </div>
    </div>
  )
}
