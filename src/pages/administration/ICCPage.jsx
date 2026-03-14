import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const about = [
  'The Internal Complaints Cell handles complaints of sexual harassment and ensures a safe and respectful environment. The ICC is mandated by the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, in India and ensures compliance with the law.',
  'In our college, the ICC plays a pivotal role in creating a conducive work environment that fosters dignity, respect and equality by focusing specifically on the well-being and safety of women staff and students. It ensures institutional accountability and provides a confidential and fair process for addressing complaints.',
];

const members = [
  { name: 'Dr. K. Thirumamagal', designation: 'Principal',                                          role: 'Presiding Officer', contact: '9994745157' },
  { name: 'R.K. Ramya',          designation: 'HOD, Department of BCA',                            role: 'Faculty Member',    contact: '9940749481' },
  { name: 'N. Ramya',            designation: 'Assistant Professor, Department of Mathematics',    role: 'Faculty Member',    contact: '9944561867' },
  { name: 'Mr. T.V. Jaganathan', designation: 'Office Superintendent',                             role: 'Non-Teaching Member', contact: '9381080510' },
  { name: 'Dr. H. Varalakshmi',  designation: 'Health & Safety Officer',                          role: 'Non-Teaching Member', contact: '8680023003' },
  { name: 'R. Aarthi',           designation: 'II Year AI',                                        role: 'Student Member',    contact: '—' },
  { name: 'M. Thaibunnisa',      designation: 'I MA English',                                      role: 'Student Member',    contact: '—' },
  { name: 'J. Ragini',           designation: 'II M.Com',                                          role: 'Student Member',    contact: '—' },
  { name: 'Mr. Pannerselvam',    designation: 'Founder – Sarvam Trust',                           role: 'NGO Member',        contact: '9500218240' },
  { name: 'Mr. G. Sridhar',      designation: 'Lawyer',                                            role: 'Legal Advisor',     contact: '9444087709' },
];

export default function ICCPage() {
  return (
    <>
      <Hero
        title="Internal Complaints Committee"
        subtitle="A statutory body ensuring a safe, respectful, and harassment-free environment for all"
        height="medium"
        breadcrumb="Administration › Internal Complaints Committee"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

              {about.length > 0 && (
            <AnimatedSection>
              <div className="bg-primary-50 border-l-4 border-accent-400 rounded-r-xl p-6 mb-10 space-y-3">
                {about.map((para, i) => (
                  <p key={i} className="text-neutral-700 leading-relaxed text-sm">{para}</p>
                ))}
              </div>
            </AnimatedSection>
          )}

          <SectionHeading title="Committee Members" />

          {members.length > 0 ? (
            <AnimatedSection>
              <div className="overflow-x-auto rounded-xl shadow border border-neutral-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold font-heading w-10">Sl.</th>
                      <th className="px-4 py-3 text-left font-semibold font-heading">Name</th>
                      <th className="px-4 py-3 text-left font-semibold font-heading">Designation</th>
                      <th className="px-4 py-3 text-left font-semibold font-heading">Role</th>
                      <th className="px-4 py-3 text-left font-semibold font-heading">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((m, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-4 py-3 text-neutral-500">{i + 1}</td>
                        <td className="px-4 py-3 font-semibold text-primary-800">{m.name}</td>
                        <td className="px-4 py-3 text-neutral-600 text-sm">{m.designation}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 bg-accent-50 text-accent-700 text-xs font-semibold rounded-full whitespace-nowrap">
                            {m.role}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-neutral-500 text-xs">{m.contact}</td>
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
        title="A Safe Campus for Every Student"
        subtitle="SSKV is committed to maintaining a dignified and harassment-free learning environment."
      />
    </>
  );
}
