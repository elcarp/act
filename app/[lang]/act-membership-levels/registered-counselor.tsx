export default function RegisteredCounselor() {
  return (
    <div>
      <h3 className='text-lg mt-8 font-bold'>Registered Counselor (RC) </h3>
      <p className='mt-3'>
        An RC is an experienced counselor with a considerable number of client
        contact hours who has demonstrated their commitment to ethical,
        accountable practice. Members with RC status are licensed and listed in
        the ACT online registry.
        <span className='mt-3 block'>Annual fee: 2,000 THB </span>
        <span className='mt-3 block'>
          Application fee: 1,000 THB (one-time fee)
        </span>
      </p>
      <div className='table rounded-xl bg-slate-200 p-5 mt-4 shadow-lg'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <strong>Registered Counselor (RC)</strong>
          </div>
          <div>
            <strong>Requirements</strong>
          </div>

          <div className='bg-white p-4 rounded-xl'>Education Level</div>
          <div className='bg-white p-4 rounded-xl'>
            Master&apos;s or equivalent in Counseling, Psychology, Social Work,
            or a related field
          </div>

          <div className='bg-white p-4 rounded-xl'>
            Minimum years in the field
          </div>
          <div className='bg-white p-4 rounded-xl'>1</div>

          <div className='bg-white p-4 rounded-xl'>
            Minimum Training Hours (BA/MA degree coursework, internships,
            trainings, workshops, certifications, CPD)
            <em className='block mt-3'>Form B</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>300</div>

          <div className='bg-white p-4 rounded-xl'>
            Client Contact Hours (face to face, phone, or online counseling in
            an ongoing process)
            <em className='block mt-3'>Form C</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>
            200 (from the past 3 years)
          </div>

          <div className='bg-white p-4 rounded-xl'>
            Non-Contact Hours (intervision, team reporting, readings, practicum
            videos, team meetings, case referrals, emails, conducting
            workshops/trainings)
            <em className='block mt-3'>Form D</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>100</div>

          <div className='bg-white p-4 rounded-xl'>Interview</div>
          <div className='bg-white p-4 rounded-xl'>Required</div>

          <div className='bg-white p-4 rounded-xl'>
            Supervision <em className='block mt-3'>Form E</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>30</div>

          <div className='bg-white p-4 rounded-xl'>
            Supervisor reference <em className='block mt-3'>Form F</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>Required</div>

          <div className='bg-white p-4 rounded-xl'>
            Case study <em className='block mt-3'>Form G</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>Required</div>

          <div className='bg-white p-4 rounded-xl'>
            Reflective essay <em className='block mt-3'>Form H</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>-</div>

          <div className='bg-white p-4 rounded-xl'>
            Annual Supervision <em className='block mt-3'>Form I-1</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>12</div>

          <div className='bg-white p-4 rounded-xl'>
            Annual Continual Professional Development (CPD){' '}
            <em className='block mt-3'>Form I-2</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>32</div>

          <div className='bg-white p-4 rounded-xl'>
            Annual Activity <em className='block mt-3'>Form I-3</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>
            Attend at least one ACT workshop or networking event
          </div>

          <div className='bg-white p-4 rounded-xl'>Audit</div>
          <div className='bg-white p-4 rounded-xl'>Random</div>
        </div>
      </div>
    </div>
  )
}
