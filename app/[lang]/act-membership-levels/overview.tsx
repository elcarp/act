'use client'
import { useParams } from 'next/navigation'
import { MembershipLevelFields } from './page'
import { useEffect, useState } from 'react'
import { MembershipLevelsProps } from './page'

type Props = {
  membershipLevels: MembershipLevelFields[]
}

export default function Overview({ membershipLevels }: Props) {
  const params = useParams()
  const locale = params && params.lang
  const lang = locale?.includes('en') ? 'en' : 'th'
  const [dict, setDict] = useState<MembershipLevelsProps | null>(null)

  useEffect(() => {
    async function loadDict() {
      const dictionary = await import(`~dictionaries/${lang}.json`).then(
        (mod) => mod.default
      )
      setDict(dictionary)
    }

    loadDict()
  }, [lang])

  if (!dict) return null
  console.log(dict, 'overview')
  return (
    <div>
      <h3 className='text-lg mt-8 font-bold text-center'>
        {locale == 'th-TH' ? 'ภาพรวม' : 'Overview'}
      </h3>
      <div className='table rounded-xl bg-slate-200 mt-4 shadow-lg text-xs lg:text-base'>
        <div className='grid grid-cols-6 sticky top-0'>
          <div className='bg-gray-300 p-4 font-bold'>
            {dict.membership_levels.membership_type}
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-gray-300 p-4 font-bold'>
                {item.title}
              </div>
            )
          })}
        </div>
        <div className='grid grid-cols-6'>
          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.education_levels}
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.educationLevel}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.minimum_years_in_the_field}
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.minimumYearsInTheField}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {
              dict.membership_levels
                .minimum_training_hours_ba_ma_degree_coursework_internships_trainings_workshops_certifications_cpd
            }
            <em className='block mt-3'>{dict.membership_levels.form_b}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.minimumTrainingHours}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {
              dict.membership_levels
                .client_contact_hours_face_to_face_phone_or_online_counseling_in_an_ongoing_process
            }
            <em className='block mt-3'>{dict.membership_levels.form_c}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.clientContactHours}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {
              dict.membership_levels
                .non_contact_hours_intervision_team_reporting_readings_practicum_videos_team_meetings_case_referrals_emails_conducting_workshops_trainings
            }
            <em className='block mt-3'>{dict.membership_levels.form_d}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.nonContactHours}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.interview}
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.interview}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.supervision}{' '}
            <em className='block mt-3'>{dict.membership_levels.form_e}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.supervision}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.supervisor_reference}{' '}
            <em className='block mt-3'>{dict.membership_levels.form_f}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.supervisorReference}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.case_study}{' '}
            <em className='block mt-3'>{dict.membership_levels.form_g}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.caseStudy}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.reflective_essay}{' '}
            <em className='block mt-3'>{dict.membership_levels.form_h}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.reflectiveEssay}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.annual_supervision}{' '}
            <em className='block mt-3'>{dict.membership_levels.form_i_1}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.annualSupervision}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {
              dict.membership_levels
                .annual_continual_professional_development_cpd
            }{' '}
            <em className='block mt-3'>{dict.membership_levels.form_i_2}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.annualCpd}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.annual_activity}{' '}
            <em className='block mt-3'>{dict.membership_levels.form_i_3}</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.annualActivity}
              </div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            {dict.membership_levels.audit}
          </div>
          {membershipLevels.map((item) => {
            return (
              <div key={item.order} className='bg-white p-4'>
                {item.audit}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
