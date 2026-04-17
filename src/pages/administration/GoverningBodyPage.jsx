import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const members = [
  { sl: 1, name: 'Dr. Nandita Krishna, M.A., Ph.D.',                                                                  designation: 'President, Conjeevaram Hindu Educational Society',        role: 'President' },
  { sl: 2, name: 'Mrs. Umadevi, M.A.',                                                                                designation: 'Vice President, Conjeevaram Hindu Educational Society',   role: 'Vice President' },
  { sl: 3, name: 'Dr. C.K. Raman, M.A., B.L., Ph.D.',                                                               designation: 'Secretary, Conjeevaram Hindu Educational Society',        role: 'Secretary' },
  { sl: 4, name: 'Dr. Sumanth C. Raman, M.D.D.CH.',                                                                 designation: 'Joint Secretary, Conjeevaram Hindu Educational Society',  role: 'Joint Secretary' },
  { sl: 5, name: 'Dr. Prasanth Krishna, M.A., Ph.D.',                                                               designation: 'Treasurer, Conjeevaram Hindu Educational Society',        role: 'Treasurer' },
  { sl: 6, name: 'Dr. Chinni Krishna, M.Sc., Ph.D.',                                                                designation: 'Member',                                                  role: 'Member' },
  { sl: 7, name: 'Dr. K. Thirumamagal, M.Com., M.Phil., NET., Ph.D.',                                               designation: 'Principal, SSKV College of Arts & Science for Women',    role: 'Principal' },
  { sl: 8, name: 'Dr.K.Sivakumari,, M.sc., M.Phil., Ph.D. Faz.', designation: ' Principal Dr.Ambedkar Governemnt  Arts College(Autonomous), Vyarsarpadi,  – 600 116', role: 'University Nominee' },
];

export default function GoverningBodyPage() {
  return (
    <>
      <Hero
        title="College Governing Body"
        subtitle="The governing board that oversees the administration and strategic direction of SSKV College"
        height="medium"
        breadcrumb="Administration › College Governing Body"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Members of the Governing Body"
            subtitle="Conjeevaram Hindu Educational Society"
          />

          {members.length > 0 ? (
            <AnimatedSection>
              <div className="overflow-x-auto rounded-xl shadow border border-neutral-100">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary-900 text-white">
                      <th className="px-5 py-3 text-left font-semibold font-heading w-12">Sl.</th>
                      <th className="px-5 py-3 text-left font-semibold font-heading">Name</th>
                      <th className="px-5 py-3 text-left font-semibold font-heading">Designation</th>
                      <th className="px-5 py-3 text-left font-semibold font-heading">Role in Body</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((m, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        <td className="px-5 py-3 text-neutral-500">{m.sl}</td>
                        <td className="px-5 py-3 font-semibold text-primary-800">{m.name}</td>
                        <td className="px-5 py-3 text-neutral-600">{m.designation}</td>
                        <td className="px-5 py-3">
                          <span className="px-2 py-1 bg-accent-50 text-accent-700 text-xs font-semibold rounded-full">
                            {m.role}
                          </span>
                        </td>
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
        title="Guided by Distinguished Leadership"
        subtitle="Our governing body ensures the highest standards of administration and academic quality."
      />
    </>
  );
}
