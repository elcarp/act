import { ApplicationForm } from "~components/application-form";

export default function About() {
  return (
    <>
      <section className='py-20 bg-slate-100'>
        <div className='max-w-3xl mx-auto px-10'>
          <h1 className='text-2xl md:text-5xl lg:text-6xl text-center'>Apply</h1>
          <p className='mt-8'>
            We accept ongoing applications year-round. For AC and RC levels, the
            application deadline is November 15th annually. Results will be
            published by February of the following year. To start your
            application, please fill out the form below. Once we have reviewed
            this form, we will send you an email of the other forms and
            documents that need to be filled out and submitted according to your
            membership level. If you have any questions, please do not hesitate
            to get in touch with us by email.
          </p>
          <div className='mt-8'>
            <ApplicationForm/>
          </div>
        </div>
      </section>
    </>
  )
}
