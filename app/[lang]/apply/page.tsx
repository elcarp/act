'use client'
import { ApplicationForm } from '~components/application-form'
import { DocumentDownloads } from '~components/document-downloads'
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
          {locale == 'th-TH' ? (
            <div className='mt-6'>
              <p>
                ACT ยังไม่รับขึ้นทะเบียนหรือรับรองนักจิตวิทยาการปรึกษาที่พำนักอยู่นอกประเทศไทย
                สำหรับผู้สมัครที่พำนักอยู่นอกประเทศไทยและประสงค์จะมีส่วนร่วมกับ ACT
                สามารถเลือกสมัครได้ดังนี้
              </p>
              <ul className='mt-3 list-disc pl-6 space-y-1'>
                <li>
                  สมัครเป็นสมาชิกระดับต้น (Junior Member) –
                  สำหรับผู้ปฏิบัติงานด้านการให้คำปรึกษาและผู้ที่ได้รับการศึกษาด้านการให้คำปรึกษา
                  หรือ
                </li>
                <li>
                  สมัครเป็นสมาชิกสมทบ (Associate Member) –
                  สำหรับผู้ที่ไม่ได้ปฏิบัติงานด้านการให้คำปรึกษา
                  แต่อยู่ในสาขาที่เกี่ยวข้องกับจิตวิทยาหรือการให้คำปรึกษา
                </li>
              </ul>
              <p className='mt-3'>
                ผู้สมัครจากต่างประเทศในประเภทดังกล่าวจะได้รับสถานะ JM-International
                หรือ AM-International หากได้รับการอนุมัติ
              </p>
            </div>
          ) : (
            <div className='mt-6'>
              <p>
                ACT does not yet register or accredit counselors who reside
                outside of Thailand. For applicants residing outside of Thailand
                who wish to become involved, the available options are:
              </p>
              <ul className='mt-3 list-disc pl-6 space-y-1'>
                <li>
                  to apply to be a Junior Member – for practitioners and persons
                  with counseling education; or
                </li>
                <li>
                  to apply to be an Associate Member – for non-practitioners in a
                  field adjacent to psychology or counseling.
                </li>
              </ul>
              <p className='mt-3'>
                International applicants to these categories will be eligible for
                JM-International or AM-International status if approved.
              </p>
            </div>
          )}
          <DocumentDownloads />
          <div className='mt-8'>
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}
