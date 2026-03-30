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
  { step: '02', title: 'Acknowledgement', desc: 'The committee acknowledges receipt and assigns it for review.' },
  { step: '03', title: 'Inquiry & Resolution', desc: 'A fair inquiry is conducted and resolution is communicated.' },
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
              SSKV College ensures that every student grievance is handled with fairness, transparency, and confidentiality.
              The committee provides a safe and supportive platform for addressing concerns effectively.
            </p>
          </AnimatedSection>

          {/* PROCESS */}
          <div className="space-y-4 mb-10">
            {process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <div className="w-12 h-12 rounded-xl bg-primary-800 text-accent-400 font-bold flex items-center justify-center">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800">{p.title}</h3>
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
              <p className="text-sm text-neutral-600">
                To create a safe, inclusive, and student-centric academic environment where grievances are addressed promptly, fairly, and transparently.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <p className="text-sm text-neutral-600">
                To safeguard student rights and dignity through effective grievance handling, ensuring trust, accountability, and harmony.
              </p>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>Provide a structured grievance platform</li>
                <li>Ensure timely and confidential resolution</li>
                <li>Promote a safe and fair environment</li>
                <li>Uphold ethics and justice</li>
                <li>Enhance student confidence</li>
                <li>Create awareness of grievance procedures</li>
                <li>Prevent recurrence through corrective actions</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* COMMITTEE TABLE */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 overflow-x-auto">
              <h3 className="font-bold text-primary-800 mb-4">Student Grievance Redressal Committee</h3>
              <table className="w-full text-sm border border-neutral-200">
                <thead className="bg-primary-800 text-white">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Designation</th>
                    <th className="px-4 py-2">Role</th>
                    <th className="px-4 py-2">Contact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t"><td className="px-4 py-2">Dr. K. Thirumamagal</td><td className="px-4 py-2">Principal</td><td className="px-4 py-2">Chairperson</td><td className="px-4 py-2">9994745157</td></tr>
                  <tr className="border-t"><td className="px-4 py-2">Ms. V. Suganthi</td><td className="px-4 py-2">HOD, BCA</td><td className="px-4 py-2">Member</td><td className="px-4 py-2">9787414810</td></tr>
                  <tr className="border-t"><td className="px-4 py-2">Ms. H. Anusha</td><td className="px-4 py-2">HOD, English</td><td className="px-4 py-2">Member</td><td className="px-4 py-2">9894285506</td></tr>
                  <tr className="border-t"><td className="px-4 py-2">Ms. D. Chitra</td><td className="px-4 py-2">Faculty</td><td className="px-4 py-2">Member</td><td className="px-4 py-2">7207337005</td></tr>
                  <tr className="border-t"><td className="px-4 py-2">Dr. P. Priyadharshini</td><td className="px-4 py-2">Faculty</td><td className="px-4 py-2">Member</td><td className="px-4 py-2">8973050034</td></tr>
                  <tr className="border-t"><td className="px-4 py-2">Ms. S. Aarthi</td><td className="px-4 py-2">Student (AI)</td><td className="px-4 py-2">Student Member</td><td className="px-4 py-2">—</td></tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>

          {/* 🔥 IKS REPORT BUTTONS */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 text-center">
              <h3 className="font-bold text-primary-800 mb-4">IKS Reports</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="/pdfs/iks-2022-2023.pdf" target="_blank" className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">IKS Report 2022–2023</a>
                <a href="/pdfs/iks-2023-2024.pdf" target="_blank" className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">IKS Report 2023–2024</a>
                <a href="/pdfs/iks-2024-2025.pdf" target="_blank" className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">IKS Report 2024–2025</a>
                <a href="/pdfs/iks-2025-2026.pdf" target="_blank" className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">IKS Report 2025–2026</a>
              </div>
            </div>
          </AnimatedSection>

          {/* COORDINATOR */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white flex items-center gap-5">
              <FaUserShield className="text-2xl text-accent-400" />
              <div>
                <p className="text-xs text-accent-400 font-bold">Coordinator</p>
                <h3 className="font-bold">{coordinator.name}</h3>
                <p className="text-xs text-white/60">{coordinator.qualification}</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner title="Your Voice Matters" subtitle="We ensure every concern is heard and resolved." />
    </>
  );
}