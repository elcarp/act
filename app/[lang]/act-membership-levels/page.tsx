import OrganizationalMember from './organizational-member'
import Overview from './overview'
import * as contentful from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'

export interface MembershipLevelFields extends contentful.EntrySkeletonType {
  title: string
  excerpt: string
  fullDescription?: Document
  annualFee: string
  applicationFee?: string
  educationLevel: string
  minimumYearsInTheField: string
  minimumTrainingHours: string
  clientContactHours: string
  nonContactHours: string
  interview: string
  supervision: string
  supervisorReference: string
  caseStudy?: string
  reflectiveEssay: string
  annualSupervision: string
  annualCpd: string
  annualActivity: string
  audit: string
  order: number
}

export default async function MembershipLevels() {
  const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: 'master',
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })

  const membershipLevels = await client.getEntries<MembershipLevelFields>({
    content_type: 'membershipLevel',
    locale: 'en-US',
  })
  const sortedMembershipLevels = membershipLevels.items.sort((a, b) => {
    return (Number(a.fields.order) ?? 0) - (Number(b.fields.order) ?? 0)
  })

  const finalMembershipLevels = sortedMembershipLevels.slice(0, -1)

  return (
    <>
      <section className='py-20 bg-slate-100'>
        <div className='max-w-3xl mx-auto px-10'>
          <h1 className='text-2xl md:text-5xl lg:text-6xl'>
            ACT Membership Levels
          </h1>
          {finalMembershipLevels &&
            finalMembershipLevels.map((item: Entry<MembershipLevelFields>) => {
              const description = item.fields.fullDescription
              return (
                <div key={item.sys.id}>
                  <h3 className='text-lg mt-8 font-bold'>
                    {String(item.fields.title || 'No Title')}
                  </h3>
                  <div className='mt-3'>
                    {description &&
                      documentToReactComponents(
                        description as unknown as Document
                      )}
                    {item.fields.annualFee && (
                      <span className='mt-3 block'>
                        Annual fee: {String(item.fields.annualFee || 'N/A')}
                      </span>
                    )}
                    {item.fields.applicationFee && (
                      <span className='mt-3 block'>
                        Application fee:{' '}
                        {String(item.fields.applicationFee || 'N/A')}
                      </span>
                    )}
                  </div>
                  <div className='table rounded-xl bg-slate-200 p-5 mt-4 shadow-lg'>
                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <strong>{String(item.fields.title) || '-'}</strong>
                      </div>
                      <div>
                        <strong>Requirements</strong>
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Education Level
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.educationLevel) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Minimum years in the field
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.minimumYearsInTheField) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Minimum Training Hours (BA/MA degree coursework,
                        internships, trainings, workshops, certifications, CPD)
                        <em className='block mt-3'>Form B</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.minimumTrainingHours) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Client Contact Hours (face to face, phone, or online
                        counseling in an ongoing process)
                        <em className='block mt-3'>Form C</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.clientContactHours) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Non-Contact Hours (intervision, team reporting,
                        readings, practicum videos, team meetings, case
                        referrals, emails, conducting workshops/trainings)
                        <em className='block mt-3'>Form D</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.nonContactHours) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>Interview</div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.interview) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Supervision <em className='block mt-3'>Form E</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.supervision) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Supervisor reference{' '}
                        <em className='block mt-3'>Form F</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.supervisorReference) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Case study <em className='block mt-3'>Form G</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.caseStudy) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Reflective essay <em className='block mt-3'>Form H</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.reflectiveEssay) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Annual Supervision{' '}
                        <em className='block mt-3'>Form I-1</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.annualSupervision) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Annual Continual Professional Development (CPD){' '}
                        <em className='block mt-3'>Form I-2</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.annualCpd) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        Annual Activity <em className='block mt-3'>Form I-3</em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.annualActivity) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>Audit</div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.audit) || '-'}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

          <div id='organizational-member' className='py-10'>
            <OrganizationalMember />
          </div>
        </div>
        <div id='overview' className='container mx-auto p-3 md:p-10'>
          <Overview
            membershipLevels={finalMembershipLevels.map(
              (item) => item.fields as unknown as MembershipLevelFields
            )}
          />
        </div>
      </section>
    </>
  )
}
