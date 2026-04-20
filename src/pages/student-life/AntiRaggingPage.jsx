import { FaShieldAlt, FaExclamationTriangle, FaPhone, FaFileAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const coordinator = { name: 'Dr. P. Meenakshi', qualification: 'M.Com., M.Phil., NET., M.B.A., Ph.D.', role: 'Coordinator — Ragging Redressal Committee & Nodal Officer', dept: 'Department of Commerce (CS)' };

const rules = [
  'Any form of ragging, done overtly or covertly, is a serious offence. Any student who feels she is ragged will report the matter to the principal.',
  'Ragging constitutes one or more of any of the following acts:',
  'Any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student.',
  'Indulging in rowdy or in-disciplined activities by any student or students which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student.',
  'Asking any student to do any act which such student will not in b) Indulging in rowdy or in-disciplined activities by any student or students which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student.the ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student.',
  'Any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or a fresher.',
  ' Any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts, gestures, causing bodily harm or any other danger to health or person.',
  'Any act or abuse by spoken words, emails, post, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfiture to fresher or any other student.',
'Any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher.',
'Any act of physical or mental abuse (including bullying and exclusion) targeted at another student (fresher or otherwise) on the ground of color, race, religion, caste, ethnicity, gender (including transgender), sexual orientation, appearance, nationality, regional origins, linguistic identity, place of birth, place of residence or economic background.',
];

export default function AntiRaggingPage() {
  return (
    <>
      <Hero
        title="Anti-Ragging Cell"
        subtitle="SSKV College is committed to maintaining a completely ragging-free campus"
        height="medium"
        breadcrumb="Student Life › Anti-Ragging Cell"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <AnimatedSection delay={0.1}>
            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center gap-4">
              <FaPhone className="text-amber-600 text-xl flex-shrink-0" />
              <div>
                <p className="font-bold text-amber-800 text-sm">UGC Anti-Ragging Helpline</p>
                <p className="text-amber-700 text-sm font-semibold mt-0.5">1800-180-5522 (Toll-Free)</p>
                <p className="text-amber-700 text-sm font-semibold mt-0.5">contact no- 9524598802</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex items-start gap-4 bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
              <FaExclamationTriangle className="text-red-500 text-2xl flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-800 font-heading text-base mb-1">Zero Tolerance Policy</h3>
                <p className="text-sm text-red-700 leading-relaxed">
                  SSKV College maintains a strict zero-tolerance policy towards ragging. Any form of ragging will result in immediate disciplinary action as per UGC regulations and applicable laws.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <SectionHeading title="Anti-Ragging Rules & Regulations" />
          <div className="space-y-3 mb-6">
            {rules.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{r} </p>
               
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Anti-Ragging Reports Buttons */}
          <AnimatedSection>
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-primary-700 mb-3">
                Anti-Ragging Reports
              </h4>
              

              <div className="flex flex-wrap gap-3">
                
                <a
                  href="/pdfs/anti_ragging/anti-ragging_23-24.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B5E3C] text-white text-sm font-medium hover:bg-[#6f472d] transition"
                >
                  <FaFileAlt />
                  Anti-Ragging report 2023-2024
                </a>

                <a
                  href="/pdfs/anti_ragging/anti-ragging_24-25.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B5E3C] text-white text-sm font-medium hover:bg-[#6f472d] transition"
                >
                  <FaFileAlt />
                  Anti-Ragging report 2024-2025
                </a>

                <a
                  href="/pdfs/anti_ragging/anti-ragging_25-26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B5E3C] text-white text-sm font-medium hover:bg-[#6f472d] transition"
                >
                  <FaFileAlt />
                  Anti-Ragging report 2025-2026
                </a>

              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <FaShieldAlt className="text-2xl text-accent-400" />
              </div>
              <div>
                <p className="text-accent-400 text-xs font-bold uppercase tracking-wide mb-0.5">Nodal Officer & Coordinator</p>
                <h3 className="text-base font-bold font-heading">{coordinator.name}</h3>
                <p className="text-white/70 text-xs mt-0.5">{coordinator.role}</p>
                <p className="text-white/50 text-xs mt-0.5">{coordinator.qualification}</p>
              </div>
            </div>
          </AnimatedSection>

          
        </div>
      </section>

      <CTABanner title="Safe Campus. Safe Future." subtitle="SSKV College ensures a dignified, respectful, and ragging-free environment for all students." />
    </>
  );
}