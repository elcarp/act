import AccreditedCounselor from './accredited-counselor'
import AssociatedMember from './associated-member'
import FellowMember from './fellow-member'
import LicensedCounselor from './licensed-counselor'
import OrganizationalMember from './organizational-member'
import Overview from './overview'
import StudentMember from './student-member'

export default function MembershipLevels() {
  return (
    <>
      <section className='py-20 bg-slate-100'>
        <div className='max-w-3xl mx-auto px-10'>
          <h1 className='text-2xl md:text-5xl lg:text-6xl'>
            ACT Membership Levels
          </h1>
          <div id='fellow-member' className='py-10'>
            <FellowMember />
          </div>
          <div id='accredited-counselor' className='py-10'>
            <AccreditedCounselor />
          </div>
          <div id='licensed-counselor' className='py-10'>
            <LicensedCounselor />
          </div>
          <div id='associated-member' className='py-10'>
            <AssociatedMember />
          </div>
          <div id='student-member' className='py-10'>
            <StudentMember />
          </div>
          <div id='organizational-member' className='py-10'>
            <OrganizationalMember />
          </div>
        </div>
        <div id='overview' className='container mx-auto p-3 md:p-10'>
          <Overview />
        </div>
      </section>
    </>
  )
}
