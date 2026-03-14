import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const members = [
  { sl: 1, designation: 'Secretary',                      name: 'Dr. C. K. Raman',          role: 'President',        contact: '' },
  { sl: 2, designation: 'Principal',                      name: 'Dr. K. Thirumamagal',       role: 'Vice President',   contact: '9994745157' },
  { sl: 3, designation: 'HOD – Computer Applications',   name: 'Ms. R. K. Ramya',           role: 'Secretary',        contact: '9940749481' },
  { sl: 4, designation: 'HOD – Tamil',                   name: 'Dr. B. Valli',              role: 'Co-opted Member',  contact: '8508625526' },
  { sl: 5, designation: 'HOD – Business Administration', name: 'Dr. P. Revathi',            role: 'Co-opted Member',  contact: '9944394596' },
  { sl: 6, designation: 'HOD – Mathematics',             name: 'Ms. J. Suganthi',           role: 'Co-opted Member',  contact: '9444759527' },
  { sl: 7, designation: 'HOD – English',                 name: 'Ms. H. Anusha',             role: 'Co-opted Member',  contact: '9894285506' },
  { sl: 8, designation: 'HOD – Computer Science',        name: 'Ms. R. Ramya',              role: 'Co-opted Member',  contact: '9790566753' },
  { sl: 9, designation: 'HOD – Commerce',                name: 'Ms. P. Anandhalakshmi',     role: 'Co-opted Member',  contact: '' },
];

const purpose = {
  intro: 'The purpose of the Executive Committee Meeting of the college is to provide strategic leadership, policy direction, and effective governance to ensure the smooth functioning and long-term development of the institution. The committee serves as a decision-making body that reviews key academic, administrative, financial, and infrastructural matters, enabling timely and informed actions in alignment with the college\'s mission and regulatory requirements.',
  points: [
    'Review institutional performance and progress toward academic and strategic goals',
    'Formulate and approve policies, plans, and initiatives',
    'Ensure compliance with affiliating universities, accreditation bodies, and government regulations',
    'Facilitate coordination among departments and stakeholders',
    'Address challenges and make decisions critical to institutional growth and quality enhancement',
  ],
};

const vision = {
  intro: 'The vision of the Executive Committee Meeting is to foster a culture of excellence, transparency, accountability, and innovation within the college. The committee envisions guiding the institution toward academic distinction, holistic student development, and societal contribution through visionary leadership and collaborative decision-making.',
  points: [
    'Promote high standards in teaching, learning, research, and administration',
    'Encourage strategic planning and sustainable institutional growth',
    'Strengthen governance through participatory and ethical leadership',
    'Support continuous quality improvement and innovation',
    'Align institutional objectives with national educational priorities and global best practices',
  ],
};

export default function ExecutiveCommitteePage() {
  return (
    <>
      <Hero
        title="Executive Committee"
        subtitle="The executive body responsible for the governance and strategic management of SSKV College"
        height="medium"
        breadcrumb="Administration › Executive Committee"
      />

      {/* Purpose & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <AnimatedSection delay={0}>
              <div className="bg-primary-50 border-l-4 border-primary-700 rounded-r-xl p-6 h-full">
                <h3 className="text-lg font-bold text-primary-800 font-heading mb-3">Purpose</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{purpose.intro}</p>
                <ul className="space-y-2">
                  {purpose.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-neutral-700">
                      <span className="font-bold text-primary-700 flex-shrink-0">{i + 1}.</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-accent-50 border-l-4 border-accent-400 rounded-r-xl p-6 h-full">
                <h3 className="text-lg font-bold text-primary-800 font-heading mb-3">Vision</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{vision.intro}</p>
                <ul className="space-y-2">
                  {vision.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-neutral-700">
                      <span className="font-bold text-accent-600 flex-shrink-0">{i + 1}.</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Committee Members"
            subtitle="Conjeevaram Hindu Educational Society"
          />

          {members.length > 0 ? (
            <AnimatedSection>
              <div className="overflow-x-auto rounded-xl shadow border border-neutral-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold font-heading w-10">Sl.</th>
                      <th className="px-4 py-3 text-left font-semibold font-heading">Designation</th>
                      <th className="px-4 py-3 text-left font-semibold font-heading">Name</th>
                      <th className="px-4 py-3 text-left font-semibold font-heading">Role</th>
                      <th className="px-4 py-3 text-left font-semibold font-heading">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((m, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-4 py-3 text-neutral-500">{m.sl}</td>
                        <td className="px-4 py-3 text-neutral-600">{m.designation}</td>
                        <td className="px-4 py-3 font-semibold text-primary-800">{m.name}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-accent-50 text-accent-700 text-xs font-semibold rounded-full whitespace-nowrap">
                            {m.role}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-neutral-500 text-xs">{m.contact || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              <div className="text-center py-16 text-neutral-400">Content coming soon.</div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <CTABanner
        title="Strong Governance, Clear Vision"
        subtitle="Our executive committee ensures purposeful and transparent institutional governance."
      />
    </>
  );
}
