/* eslint-disable  @typescript-eslint/no-explicit-any */

import OrganizationalMember from './organizational-member'
import Overview from './overview'
import * as contentful from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { Entry } from 'contentful'
import { locales } from '~config/i18n'

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

export interface MembershipLevelsProps {
  membership_levels: {
    membership_type: string
    education_levels: string
    minimum_years_in_the_field: string
    minimum_training_hours_ba_ma_degree_coursework_internships_trainings_workshops_certifications_cpd: string
    form_b: string
    client_contact_hours_face_to_face_phone_or_online_counseling_in_an_ongoing_process: string
    form_c: string
    non_contact_hours_intervision_team_reporting_readings_practicum_videos_team_meetings_case_referrals_emails_conducting_workshops_trainings: string
    form_d: string
    interview: string
    supervision: string
    form_e: string
    supervisor_reference: string
    form_f: string
    case_study: string
    form_g: string
    reflective_essay: string
    form_h: string
    annual_supervision: string
    form_i_1: string
    annual_continual_professional_development_cpd: string
    form_i_2: string
    annual_activity: string
    form_i_3: string
    audit: string
  }
}

export const revalidate = 60
export const dynamicParams = true

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function MembershipLevels({ params }: any) {
  const locale = (await params).lang

  const finalLocale = locale.includes('en') ? 'en-US' : 'th-TH'
  const lang = locale.includes('en') ? 'en' : 'th'
  const dict: Record<string, any> = await import(
    `~dictionaries/${lang}.json`
  ).then((module) => module.default)
  const client = contentful.createClient({
    space: `${process.env.CONTENTFUL_SPACE_ID}`,
    environment: 'master',
    accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  })
  const membershipLevels = await client.getEntries<MembershipLevelFields>({
    content_type: 'membershipLevel',
    locale: finalLocale,
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
            {finalLocale == 'th-TH' ? 'สมาชิก ACT' : 'ACT Membership Levels'}
          </h1>
          {finalMembershipLevels &&
            finalMembershipLevels.map((item: Entry<MembershipLevelFields>) => {
              const description = item.fields.fullDescription
              const formatLink = String(item.fields.title)
                .replace(/ /g, '-')
                .toLocaleLowerCase()
              const link = formatLink.slice(0, -5)
              return (
                <div key={item.sys.id} id={link}>
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
                        <strong>
                          {finalLocale == 'th-TH' ? 'ข้อกำหนด' : 'Requirements'}
                        </strong>
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.education_levels}
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.educationLevel) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.minimum_years_in_the_field}
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.minimumYearsInTheField) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {
                          dict.membership_levels
                            .minimum_training_hours_ba_ma_degree_coursework_internships_trainings_workshops_certifications_cpd
                        }

                        <em className='block mt-3'>
                          {dict.membership_levels.form_b}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.minimumTrainingHours) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {
                          dict.membership_levels
                            .client_contact_hours_face_to_face_phone_or_online_counseling_in_an_ongoing_process
                        }

                        <em className='block mt-3'>
                          {dict.membership_levels.form_c}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.clientContactHours) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {
                          dict.membership_levels
                            .non_contact_hours_intervision_team_reporting_readings_practicum_videos_team_meetings_case_referrals_emails_conducting_workshops_trainings
                        }

                        <em className='block mt-3'>
                          {dict.membership_levels.form_d}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.nonContactHours) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.interview}
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.interview) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.supervision}{' '}
                        <em className='block mt-3'>
                          {dict.membership_levels.form_e}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.supervision) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.supervisor_reference}
                        <em className='block mt-3'>
                          {dict.membership_levels.form_f}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.supervisorReference) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.case_study}{' '}
                        <em className='block mt-3'>
                          {dict.membership_levels.form_g}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.caseStudy) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.reflective_essay}{' '}
                        <em className='block mt-3'>
                          {dict.membership_levels.form_h}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.reflectiveEssay) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.annual_supervision}{' '}
                        <em className='block mt-3'>
                          {dict.membership_levels.form_i_1}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.annualSupervision) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {
                          dict.membership_levels
                            .annual_continual_professional_development_cpd
                        }
                        ){' '}
                        <em className='block mt-3'>
                          {dict.membership_levels.form_i_2}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.annualCpd) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.annual_activity}
                        <em className='block mt-3'>
                          {dict.membership_levels.form_i_3}
                        </em>
                      </div>
                      <div className='bg-white p-4 rounded-xl'>
                        {String(item.fields.annualActivity) || '-'}
                      </div>

                      <div className='bg-white p-4 rounded-xl'>
                        {dict.membership_levels.audit}
                      </div>
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
