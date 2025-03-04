export default function FellowMember() {
  return (
    <div>
      <h3 className='text-lg mt-8 font-bold'>Fellow Member (FM)</h3>
      <p className='mt-3'>
        An FM is a retired counselor who previously held accredited counselor
        (AC) status and was nominated by other ACT members to be a Fellow Member
        in their retirement. Those nominated as an FM must have at least one
        publication or other notable contribution in the field of counseling.
        Fellow Members take few to no clients but remain involved in the field
        and in guiding other counselors through supervision or by giving
        workshops, courses, keynotes, seminars, etc.
        <span className='mt-3 block'>Annual fee: 1,000 THB</span>
      </p>
      <div className='table rounded-xl bg-slate-200 p-5 mt-4 shadow-lg'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <strong>Fellow Member (FM)</strong>
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
          <div className='bg-white p-4 rounded-xl'>10+</div>

          <div className='bg-white p-4 rounded-xl'>
            Minimum Training Hours (BA/MA degree coursework, internships,
            trainings, workshops, certifications, CPD)
            <em className='block mt-3'>Form B</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>
            Vast experience in the field and previous AC status of at least 3
            years. Must have at least one publication or notable contribution to
            the field.
          </div>

          <div className='bg-white p-4 rounded-xl'>
            Client Contact Hours (face to face, phone, or online counseling in
            an ongoing process)
            <em className='block mt-3'>Form C</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>-</div>

          <div className='bg-white p-4 rounded-xl'>
            Non-Contact Hours (intervision, team reporting, readings, practicum
            videos, team meetings, case referrals, emails, conducting
            workshops/trainings)
            <em className='block mt-3'>Form D</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>-</div>

          <div className='bg-white p-4 rounded-xl'>Interview</div>
          <div className='bg-white p-4 rounded-xl'>Nomination</div>

          <div className='bg-white p-4 rounded-xl'>
            Supervision <em className='block mt-3'>Form E</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>-</div>

          <div className='bg-white p-4 rounded-xl'>
            Supervisor reference <em className='block mt-3'>Form F</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>
            Nomination by other ACT members.
          </div>

          <div className='bg-white p-4 rounded-xl'>
            Case study <em className='block mt-3'>Form G</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>-</div>

          <div className='bg-white p-4 rounded-xl'>
            Reflective essay <em className='block mt-3'>Form H</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>Publication</div>

          <div className='bg-white p-4 rounded-xl'>
            Annual Supervision <em className='block mt-3'>Form I-1</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>-</div>

          <div className='bg-white p-4 rounded-xl'>
            Annual Continual Professional Development (CPD){' '}
            <em className='block mt-3'>Form I-2</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>-</div>

          <div className='bg-white p-4 rounded-xl'>
            Annual Activity <em className='block mt-3'>Form I-3</em>
          </div>
          <div className='bg-white p-4 rounded-xl'>
            Attend at least one ACT workshop or networking event
          </div>

          <div className='bg-white p-4 rounded-xl'>Audit</div>
          <div className='bg-white p-4 rounded-xl'>-</div>
        </div>
      </div>
    </div>
  )
}
