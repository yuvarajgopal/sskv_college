import { FaBalanceScale, FaEnvelope, FaUserShield, FaClipboardList } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const coordinator = { name: 'Ms. H. Anusha', qualification: 'M.A., M.Phil., SET., Assistant Professor, Head', dept: 'Department of English' };

const process = [
  { step: '01', title: 'Submit Grievance', desc: 'Students may submit grievances in writing to the Grievance Redressal Committee or the designated coordinator.' },
  { step: '02', title: 'Acknowledgement', desc: 'The committee acknowledges receipt of the grievance within a reasonable time and assigns it for review.' },
  { step: '03', title: 'Inquiry & Resolution', desc: 'A fair and transparent inquiry is conducted and appropriate resolution or corrective action is communicated to the student.' },
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

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              SSKV College is committed to addressing student grievances promptly, fairly, and confidentially. The Grievance Redressal Committee ensures that every student has a safe channel to raise concerns related to academics, administration, or campus life.
            </p>
          </AnimatedSection>

          <div className="space-y-4 mb-8">
            {process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <div className="w-12 h-12 rounded-xl bg-primary-800 text-accent-400 font-bold text-lg flex items-center justify-center flex-shrink-0 font-heading">{p.step}</div>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-base mb-1">{p.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <FaUserShield className="text-2xl text-accent-400" />
              </div>
              <div>
                <p className="text-accent-400 text-xs font-bold uppercase tracking-wide mb-0.5">Committee Coordinator</p>
                <h3 className="text-base font-bold font-heading">{coordinator.name}</h3>
                <p className="text-white/60 text-xs mt-0.5">{coordinator.qualification}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Your Voice Matters" subtitle="SSKV College ensures every student grievance is heard, respected, and resolved." />
    </>
  );
}
