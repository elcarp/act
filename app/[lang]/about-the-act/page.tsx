import FAQ from './faq'

export default function About() {
  return (
    <>
      <section className='py-20 bg-slate-100'>
        <div className='max-w-3xl mx-auto px-10'>
          <h1 className='text-2xl md:text-5xl lg:text-6xl'>
            What is an ACT Counseling Accreditation?
          </h1>
          <h3 className='text-lg mt-8'>Purpose & Use</h3>
          <p className='mt-3'>
            An ACT counseling accreditation is a credential granted by the
            Accredited Counselors of Thailand (ACT) to qualified counselors in
            Thailand who meet the criteria. The purpose of obtaining an ACT
            counseling license is to ethically provide counseling services in
            accordance with international standards. A registered counselor
            refers to a professional who has met the standard requirements
            regarding education, training, and ethical standards in providing
            counseling services. An accredited counselor goes one step further:
            this is a highly experienced counselor who has held a license for at
            least five years and has made significant contributions to the
            mental health field.
          </p>
          <h3 className='text-lg mt-10'>
            Membership, License, and Accreditation
          </h3>
          <p className='mt-3'>
            ACT membership is open to any individuals and organizations in the
            counseling field, regardless of their accreditation status. ACT
            currently offers five membership levels for individuals: three
            designed to support both novice and experienced counselors as they
            begin or continue their accreditation journey, one for retired
            counselors who remain active in the field, and one for professionals
            from other fields with an interest in counseling. Each level has
            different requirements which reflect the counselor&apos;s experience
            and excellence in their field. The description and requirements can
            be found in the ACT Membership Levels tab
          </p>
        </div>
      </section>
      <section id='faq' className='py-20'>
        <div className='max-w-3xl mx-auto px-10'>
          <h2 className='text-2xl md:text-5xl lg:text-6xl'>
            Frequently Asked Questions (FAQs) for ACT Membership
          </h2>
          <FAQ />
        </div>
      </section>
      <section className='py-20 bg-slate-100'>
        <div className='max-w-3xl mx-auto px-10'>
          <h2 className='text-2xl md:text-5xl lg:text-6xl'>Partnerships</h2>
          <p className='mt-10'>Coming soon.</p>
        </div>
      </section>
    </>
  )
}
