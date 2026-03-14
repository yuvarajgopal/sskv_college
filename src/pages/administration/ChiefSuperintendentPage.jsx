import { useState } from 'react';
import { FaUserTie, FaClipboardCheck, FaUsers } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const person = {
  name: 'Dr. K. Thirumamagal',
  qualification: 'M.Com., M.Phil., NET., Ph.D.',
  designation: 'Chief Superintendent of Examination',
  additionalRole: 'Principal, SSKV College',
  photo: '/images/administration/principal.jpg',
  responsibilities: [
    'Overall supervision and conduct of university and internal examinations',
    'Ensuring integrity, fairness, and smooth administration of all examination processes',
    'Coordinating with the affiliating university (University of Madras) on examination schedules and regulations',
    'Overseeing continuous assessment and end-of-semester examination procedures',
    'Maintaining examination records and result documentation',
    'Monitoring adherence to examination rules and addressing malpractice',
  ],
};

const coordinators = [
  { name: 'Ms. A. Ezhilarasi', qualification: 'M.Sc., M.Phil., B.Ed.', role: 'Coordinator of Examinations' },
  { name: 'Ms. D. Chithra',    qualification: 'M.A., M.Phil., NET.',    role: 'Coordinator of Examinations' },
];

function PersonPhoto({ src, name }) {
  const [failed, setFailed] = useState(false);
  if (!failed) {
    return (
      <img src={src} alt={name} onError={() => setFailed(true)}
        className="w-full h-full object-cover object-top" />
    );
  }
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-50">
      <FaUserTie className="text-6xl text-primary-300" />
    </div>
  );
}

export default function ChiefSuperintendentPage() {
  return (
    <>
      <Hero
        title="Chief Superintendent of Examination"
        subtitle="Overseeing the integrity, conduct, and administration of all examinations at SSKV College"
        height="medium"
        breadcrumb="Administration › Chief Superintendent of Examination"
      />

      {/* ── CHIEF SUPERINTENDENT ────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* Photo */}
            <AnimatedSection direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-xs mx-auto bg-primary-50">
                <PersonPhoto src={person.photo} name={person.name} />
              </div>
              <div className="mt-5 text-center">
                <h2 className="text-xl font-bold text-primary-800 font-heading">{person.name}</h2>
                <p className="text-accent-600 font-semibold text-sm mt-1">{person.designation}</p>
                <p className="text-neutral-500 text-xs mt-0.5">{person.qualification}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full border border-primary-100">
                  {person.additionalRole}
                </span>
              </div>
            </AnimatedSection>

            {/* Responsibilities */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <FaClipboardCheck className="text-primary-700 text-lg" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 font-heading">Key Responsibilities</h3>
                </div>
                <div className="space-y-3">
                  {person.responsibilities.map((r, i) => (
                    <div key={i} className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                      <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm text-neutral-700 leading-relaxed">{r}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXAMINATION COORDINATORS ────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-3xl">
          <SectionHeading
            title="Examination Coordinators"
            subtitle="Faculty members assisting in the coordination of examinations"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coordinators.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-primary-600 text-lg" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-800 font-heading text-base">{c.name}</p>
                    <p className="text-accent-600 text-xs font-semibold mt-0.5">{c.role}</p>
                    <p className="text-neutral-400 text-xs mt-0.5">{c.qualification}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Committed to Examination Excellence"
        subtitle="Ensuring fair, transparent, and efficient conduct of all academic examinations at SSKV College."
      />
    </>
  );
}
