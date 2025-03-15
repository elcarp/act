export default function Overview() {
  return (
    <div>
      <h3 className='text-lg mt-8 font-bold text-center'>Overview</h3>
      <div className='table rounded-xl bg-slate-200 mt-4 shadow-lg text-xs lg:text-base'>
        <div className='grid grid-cols-6 sticky top-0'>
          <div className='bg-gray-300 p-4 font-bold'>Membership Type</div>
          <div className='bg-gray-300 p-4 font-bold'>Junior Member (JM)</div>
          <div className='bg-gray-300 p-4 font-bold'>Associate Member (AM)</div>
          <div className='bg-gray-300 p-4 font-bold'>
            Registered Counselor (RC)
          </div>
          <div className='bg-gray-300 p-4 font-bold'>
            Accredited Counselor (AC)
          </div>
          <div className='bg-gray-300 p-4 font-bold'>Fellow Member (FM)</div>
        </div>
        <div className='grid grid-cols-6'>
          <div className='bg-white p-4 font-semibold'>Education Level</div>
          <div className='bg-white p-4'>
            Bachelor&apos;s or equivalent in Counseling, Psychology, Social
            Work, or a related field
          </div>
          <div className='bg-white p-4'>
            Bachelor&apos;s or equivalent in any field
          </div>
          <div className='bg-white p-4'>
            Master&apos;s or equivalent in Counseling, Psychology, Social Work,
            or a related field
          </div>
          <div className='bg-white p-4'>
            Master&apos;s or equivalent in Counseling, Psychology, Social Work,
            or a related field
          </div>
          <div className='bg-white p-4'>
            Master&apos;s or equivalent in Counseling, Psychology, Social Work,
            or a related field
          </div>

          <div className='bg-white p-4 font-semibold'>
            Minimum years in the field
          </div>
          <div className='bg-white p-4'>N/A</div>
          <div className='bg-white p-4'>N/A</div>
          <div className='bg-white p-4'>1</div>
          <div className='bg-white p-4'>5</div>
          <div className='bg-white p-4'>10+</div>

          <div className='bg-white p-4 font-semibold'>
            Minimum Training Hours (BA/MA coursework, internships, trainings,
            certifications, CPD)
            <em className='block mt-3'>Form B</em>
          </div>
          <div className='bg-white p-4'>
            No minimum hours, must be enrolled in a counseling-related study
          </div>
          <div className='bg-white p-4'>
            No minimum hours, must complete “Foundations of Counseling” course
            in the first year of membership
          </div>
          <div className='bg-white p-4'>300</div>
          <div className='bg-white p-4'>400</div>
          <div className='bg-white p-4'>
            Vast experience in the field and previous AC status of at least 3
            years. Must have at least one publication or notable contribution to
            the field.
          </div>

          <div className='bg-white p-4 font-semibold'>
            Client Contact Hours (face to face, phone, or online counseling)
            <em className='block mt-3'>Form C</em>
          </div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>200 (from the past 3 years)</div>
          <div className='bg-white p-4'>450 (from the past 3 years)</div>
          <div className='bg-white p-4'>-</div>

          <div className='bg-white p-4 font-semibold'>
            Non-Contact Hours (team reporting, readings, practicum, workshops)
            <em className='block mt-3'>Form D</em>
          </div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>100</div>
          <div className='bg-white p-4'>225</div>
          <div className='bg-white p-4'>-</div>

          <div className='bg-white p-4 font-semibold'>Interview</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>Required</div>
          <div className='bg-white p-4'>Required</div>
          <div className='bg-white p-4'>Nomination</div>

          <div className='bg-white p-4 font-semibold'>
            Supervision <em className='block mt-3'>Form E</em>
          </div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>30</div>
          <div className='bg-white p-4'>100</div>
          <div className='bg-white p-4'>-</div>

          <div className='bg-white p-4 font-semibold'>
            Supervisor reference <em className='block mt-3'>Form F</em>
          </div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>Required</div>
          <div className='bg-white p-4'>Required</div>
          <div className='bg-white p-4'>Nomination by other ACT members.</div>

          <div className='bg-white p-4 font-semibold'>
            Case study <em className='block mt-3'>Form G</em>
          </div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>Required</div>
          <div className='bg-white p-4'>Required</div>
          <div className='bg-white p-4'>-</div>

          <div className='bg-white p-4 font-semibold'>
            Reflective essay <em className='block mt-3'>Form H</em>
          </div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>Required</div>
          <div className='bg-white p-4'>Publication</div>

          <div className='bg-white p-4 font-semibold'>
            Annual Supervision <em className='block mt-3'>Form I-1</em>
          </div>
          <div className='bg-white p-4'>12</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>12</div>
          <div className='bg-white p-4'>12</div>
          <div className='bg-white p-4'>-</div>

          <div className='bg-white p-4 font-semibold'>
            Annual CPD <em className='block mt-3'>Form I-2</em>
          </div>
          <div className='bg-white p-4'>16</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>32</div>
          <div className='bg-white p-4'>40</div>
          <div className='bg-white p-4'>-</div>

          <div className='bg-white p-4 font-semibold'>
            Annual Activity <em className='block mt-3'>Form I-3</em>
          </div>
          <div className='bg-white p-4 col-span-5'>
            Attend at least one ACT workshop or networking event
          </div>

          <div className='bg-white p-4 font-semibold'>Audit</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>-</div>
          <div className='bg-white p-4'>Random</div>
          <div className='bg-white p-4'>Random</div>
          <div className='bg-white p-4'>-</div>
        </div>
      </div>
    </div>
  )
}
