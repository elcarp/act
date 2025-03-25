import { MembershipLevelFields } from './page'

type Props = {
  membershipLevels: MembershipLevelFields[]
}

export default function Overview({ membershipLevels }: Props) {
  console.log(membershipLevels)
  return (
    <div>
      <h3 className='text-lg mt-8 font-bold text-center'>Overview</h3>
      <div className='table rounded-xl bg-slate-200 mt-4 shadow-lg text-xs lg:text-base'>
        <div className='grid grid-cols-6 sticky top-0'>
          <div className='bg-gray-300 p-4 font-bold'>Membership Type</div>
          {membershipLevels.map((item) => {
            return <div className='bg-gray-300 p-4 font-bold'>{item.title}</div>
          })}
        </div>
        <div className='grid grid-cols-6'>
          <div className='bg-white p-4 font-semibold'>Education Level</div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.educationLevel}</div>
          })}

          <div className='bg-white p-4 font-semibold'>
            Minimum years in the field
          </div>
          {membershipLevels.map((item) => {
            return (
              <div className='bg-white p-4'>{item.minimumYearsInTheField}</div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            Minimum Training Hours (BA/MA coursework, internships, trainings,
            certifications, CPD)
            <em className='block mt-3'>Form B</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div className='bg-white p-4'>{item.minimumTrainingHours}</div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            Client Contact Hours (face to face, phone, or online counseling)
            <em className='block mt-3'>Form C</em>
          </div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.clientContactHours}</div>
          })}

          <div className='bg-white p-4 font-semibold'>
            Non-Contact Hours (team reporting, readings, practicum, workshops)
            <em className='block mt-3'>Form D</em>
          </div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.nonContactHours}</div>
          })}

          <div className='bg-white p-4 font-semibold'>Interview</div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.interview}</div>
          })}

          <div className='bg-white p-4 font-semibold'>
            Supervision <em className='block mt-3'>Form E</em>
          </div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.supervision}</div>
          })}

          <div className='bg-white p-4 font-semibold'>
            Supervisor reference <em className='block mt-3'>Form F</em>
          </div>
          {membershipLevels.map((item) => {
            return (
              <div className='bg-white p-4'>{item.supervisorReference}</div>
            )
          })}

          <div className='bg-white p-4 font-semibold'>
            Case study <em className='block mt-3'>Form G</em>
          </div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.caseStudy}</div>
          })}

          <div className='bg-white p-4 font-semibold'>
            Reflective essay <em className='block mt-3'>Form H</em>
          </div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.reflectiveEssay}</div>
          })}

          <div className='bg-white p-4 font-semibold'>
            Annual Supervision <em className='block mt-3'>Form I-1</em>
          </div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.annualSupervision}</div>
          })}

          <div className='bg-white p-4 font-semibold'>
            Annual CPD <em className='block mt-3'>Form I-2</em>
          </div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.annualCpd}</div>
          })}

          <div className='bg-white p-4 font-semibold'>
            Annual Activity <em className='block mt-3'>Form I-3</em>
          </div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.annualActivity}</div>
          })}

          <div className='bg-white p-4 font-semibold'>Audit</div>
          {membershipLevels.map((item) => {
            return <div className='bg-white p-4'>{item.audit}</div>
          })}
        </div>
      </div>
    </div>
  )
}
