import { FaBalanceScale, FaEnvelope, FaUserShield, FaClipboardList } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const coordinator = { 
  name: 'Ms. H. Anusha', 
  qualification: 'M.A., M.Phil., SET., Assistant Professor, Head', 
  dept: 'Department of English' 
};

const process = [
  { step: '01', title: 'Submit Grievance', desc: 'Students may submit grievances in writing to the Grievance Redressal Committee or the designated coordinator.' },
  { step: '02', title: 'Acknowledgement', desc: 'The committee acknowledges receipt of the grievance and assigns it for review.' },
  { step: '03', title: 'Inquiry & Resolution', desc: 'A fair inquiry is conducted and appropriate resolution is communicated.' },
];

export default function GrievanceRedressalPage() {
  return (
    <>
      <Hero
        title="Student Grievance Redressal"
        subtitle="A fair and transparent mechanism to address student concerns at SSKV College"
        height="medium"
        breadcrumb="Student Life › Grievance Redressal"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="Grievance Redressal Committee" />

          {/* INTRO */}
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              SSKV College is committed to addressing student grievances promptly, fairly, and confidentially. 
              The Grievance Redressal Committee ensures that every student has a safe platform to raise concerns 
              related to academics, administration, or campus life.
            </p>
          </AnimatedSection>

          {/* PROCESS */}
          <div className="space-y-4 mb-10">
            {process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <div className="w-12 h-12 rounded-xl bg-primary-800 text-accent-400 font-bold text-lg flex items-center justify-center">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 text-base mb-1">{p.title}</h3>
                    <p className="text-sm text-neutral-600">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To create a safe, inclusive, and student-centric academic environment where grievances are addressed promptly, fairly, and transparently, ensuring the overall well-being and holistic development of students.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The Students Grievance Redressal Committee is committed to safeguarding the rights and dignity of students by providing an effective mechanism for receiving, examining, and resolving grievances. 
                It fosters trust, accountability, and harmony within the institution through fair practices and timely redressal.
              </p>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Provide a structured platform for students to voice grievances</li>
                <li>Ensure timely, impartial, and confidential resolution</li>
                <li>Promote a safe and discrimination-free environment</li>
                <li>Uphold institutional ethics and natural justice</li>
                <li>Enhance student confidence in the system</li>
                <li>Create awareness about grievance procedures</li>
                <li>Prevent recurrence through corrective actions</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Student Grievance Redressal Committee</h3>
              <table className="w-full text-sm text-left border border-neutral-200">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Designation</th>
                    <th className="px-4 py-2">Committee Role</th>
                    <th className="px-4 py-2">Contact Number</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. K. Thirumamagal</td>
                    <td className="px-4 py-2">Principal</td>
                    <td className="px-4 py-2">Chairperson</td>
                    <td className="px-4 py-2">9994745157</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. V. Suganthi</td>
                    <td className="px-4 py-2">HOD, Dept of BCA (Shift II)</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">9787414810</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. H. Anusha</td>
                    <td className="px-4 py-2">HOD, Dept of English</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">9894285506</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. D. Chitra</td>
                    <td className="px-4 py-2">Faculty</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">7207337005</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Dr. P. Priyadharshini</td>
                    <td className="px-4 py-2">Faculty</td>
                    <td className="px-4 py-2">Member</td>
                    <td className="px-4 py-2">8973050034</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2">Ms. S. Aarthi</td>
                    <td className="px-4 py-2">Student, Dept of AI</td>
                    <td className="px-4 py-2">Student Member</td>
                    <td className="px-4 py-2">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* COORDINATOR */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <FaUserShield className="text-2xl text-accent-400" />
              </div>
              <div>
                <p className="text-accent-400 text-xs font-bold uppercase">Committee Coordinator</p>
                <h3 className="text-base font-bold">{coordinator.name}</h3>
                <p className="text-white/60 text-xs">{coordinator.qualification}</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner 
        title="Your Voice Matters" 
        subtitle="SSKV College ensures every student grievance is heard and resolved fairly." 
      />
    </>
  );
}