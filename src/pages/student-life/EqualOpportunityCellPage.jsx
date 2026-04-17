import { FaBalanceScale, FaUsers, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const objectives = [
  'To ensure equity and equal opportunities for all members of the college community.',
  'To enhance diversity among students, teaching, and non-teaching staff while eliminating all forms of discrimination.',
'To create a socially congenial atmosphere that supports academic interaction and healthy interpersonal relationships.',
'To address and resolve grievances of students belonging to disadvantaged sections through amicable and just solutions.',
'To assist individuals or groups facing issues related to social exclusion or discrimination.',
'To disseminate information on welfare schemes, scholarships, and government programmes for socially weaker sections.',
'To simplify admission and registration procedures and ensure barrier-free access for disadvantaged groups.',
'To coordinate with government bodies and other agencies to mobilize academic and financial resources.',
'To organize periodic meetings to monitor the implementation and progress of various welfare schemes.',
'To ensure due representation and utilization of opportunities by SC/ST communities in admissions and recruitment.',
'To sensitize the college community on issues faced by SC/ST and other disadvantaged groups and promote social awareness.',
];

export default function EqualOpportunityCellPage() {
  return (
    <>
      <Hero
        title="Equal Opportunity Cell"
        subtitle="Ensuring every student has an equal chance to learn, grow, and succeed"
        height="medium"
        breadcrumb="Student Life › Equal Opportunity Cell"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Equal Opportunity Cell (EOC)" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Equal Opportunity Cell at SSKV College is established to uphold the principles of equality, inclusion, and non-discrimination. It ensures that students from all backgrounds — including SC/ST, minority communities, economically weaker sections, and differently abled students — have access to the full range of academic and co-curricular opportunities.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To create an inclusive, equitable, and socially just academic environment that nurtures diversity, eliminates discrimination, and empowers students and staff from disadvantaged and marginalized sections of society to achieve their full potential.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
               <li> To ensure the effective implementation of institutional and government policies and programmes meant for disadvantaged groups.</li>
               <li> To provide academic, financial, social, and emotional guidance and counselling to students belonging to socially weaker sections.</li>
              <li>To promote social inclusion, mutual respect, and harmonious relationships among students and staff from diverse social backgrounds.</li>
               <li> To sensitize the academic community towards the challenges and aspirations of marginalized communities and foster a discrimination-free campus.</li>

              </ul>
            </div>
          </AnimatedSection>
          

          <SectionHeading title="Objectives" />
          <div className="space-y-3">
            {objectives.map((o, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{o}</p>
                </div>
              </AnimatedSection>
            ))}
             {/* TABLE */}
                      <AnimatedSection>
                        <div className="overflow-x-auto mb-8">
                          <table className="w-full border border-neutral-300 rounded-xl overflow-hidden">
                            <thead className="bg-primary-900 text-white text-sm">
                              <tr>
                                <th className="p-3 text-left">Name</th>
                                <th className="p-3 text-left">Designation</th>
                                <th className="p-3 text-left">Role</th>
                                <th className="p-3 text-left">Contact</th>
                              </tr>
                            </thead>
                            <tbody className="text-sm text-neutral-700">
                              <tr className="border-t">
                                <td className="p-3">Dr. K. Thirumamagal</td>
                                <td className="p-3">Principal</td>
                                <td className="p-3 font-semibold">Chairperson</td>
                                <td className="p-3">9994745157</td>
                              </tr>
                              <tr className="border-t">
                                <td className="p-3">Ms. M. Mahalakshmi</td>
                                <td className="p-3">SC/ST Scholarship Coordinator</td>
                                <td className="p-3 font-semibold">Member</td>
                                <td className="p-3">9566441320</td>
                              </tr>
                              <tr className="border-t">
                                <td className="p-3">Ms. M. Lavanya</td>
                                <td className="p-3">Faculty</td>
                                <td className="p-3 font-semibold">Member</td>
                                <td className="p-3">9994502098</td>
                              </tr>
                              <tr className="border-t">
                                <td className="p-3">Mr. Paneerselvam</td>
                                <td className="p-3">Founder, Sarvam Trust (NGO)</td>
                                <td className="p-3 font-semibold">External Member</td>
                                <td className="p-3">9500218240</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </AnimatedSection>
          </div>
        </div>
        
      </section>
      

      <CTABanner title="Equal Opportunities. Unlimited Potential." subtitle="SSKV College believes every student deserves an equal chance to realise their full potential." />
    </>
  );
}
