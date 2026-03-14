import { FaWheelchair, FaUniversalAccess, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const provisions = [
  { icon: FaWheelchair,       title: 'Accessible Infrastructure', desc: 'Campus facilities including ramps, accessible pathways, and adapted seating to ensure barrier-free movement.' },
  { icon: FaUniversalAccess,  title: 'Examination Accommodations', desc: 'Scribes, extra time, and adjusted seating arrangements for students with physical or visual impairments during examinations.' },
  { icon: FaHandsHelping,     title: 'Support & Counselling',      desc: 'Dedicated support from faculty and counsellors to address academic, personal, and logistical needs of differently abled students.' },
  { icon: FaGraduationCap,    title: 'Scholarship Assistance',     desc: 'Guidance in applying for government scholarships and financial assistance available exclusively for differently abled students.' },
];

export default function DifferentlyAbledPage() {
  return (
    <>
      <Hero
        title="Facilities for Differently Abled"
        subtitle="An inclusive campus that supports every student's journey at SSKV College"
        height="medium"
        breadcrumb="Student Life › Facilities for Differently Abled"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Inclusive Education" subtitle="SSKV College is committed to providing a fully inclusive learning environment" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              SSKV College recognises and respects the diverse needs of differently abled students. The institution provides appropriate facilities, accommodations, and support systems to ensure that every student — regardless of physical ability — can access quality education and participate fully in campus life.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {provisions.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 h-full flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <p.icon className="text-blue-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-base mb-1">{p.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ability Beyond Disability." subtitle="SSKV College ensures every differently abled student can thrive academically and personally." />
    </>
  );
}
