'use client'
import { ApplicationForm } from '~components/application-form'
import { useParams } from 'next/navigation'

export default function About() {
  const params = useParams()
  const locale = params && params.lang

  return (
    <>
      <section className='py-20 bg-slate-100'>
        <div className='max-w-3xl mx-auto px-10'>
          <h1 className='text-2xl md:text-5xl lg:text-6xl text-center'>
            {locale == 'th-TH' ? 'สมัครสมาชิก' : 'Apply'}
          </h1>
          <p className='mt-8'>
            {locale == 'th-TH'
              ? 'เรารับสมัครสมาชิกตลอดทั้งปี สำหรับระดับ AC และ LC เรากำหนดปิดรับสมัครวันที่ 15 พฤศจิกายนของทุกปี ผลการสมัครการรับรองมาตรฐานอาชีพจะประกาศภายในเดือนกุมภาพันธ์ของปีถัดไป กรุณากรอกแบบฟอร์มด้านล่างเพื่อเริ่มต้นการสมัคร เมื่อเราได้ตรวจสอบแบบฟอร์มเบื้องต้นแล้ว เราจะส่งอีเมลแจ้งรายละเอียดเกี่ยวกับเอกสารและแบบฟอร์มที่ต้องกรอกและส่งตามประเภทสมาชิกที่คุณสมัคร หากมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม กรุณาติดต่อเราทางอีเมลได้ตลอดเวลา'
              : 'We accept ongoing applications year-round. For AC and RC levels, the application deadline is November 15th annually. Results will be published by February of the following year. To start your application, please fill out the form below. Once we have reviewed this form, we will send you an email of the other forms and documents that need to be filled out and submitted according to your membership level. If you have any questions, please do not hesitate to get in touch with us by email.'}
          </p>
          <div className='mt-8'>
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}
