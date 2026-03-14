import { FaHeartbeat, FaUserMd, FaAmbulance, FaAppleAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const facilities = [
  { icon: FaHeartbeat, title: 'First Aid',          desc: 'Trained staff and first aid facilities available on campus for immediate response to medical needs.' },
  { icon: FaUserMd,    title: 'Medical Referrals',  desc: 'Students requiring specialist care are referred to reputed hospitals and medical centres in Kanchipuram.' },
  { icon: FaAmbulance, title: 'Emergency Response', desc: 'Emergency contact numbers and procedures in place to handle medical emergencies on campus swiftly.' },
  { icon: FaAppleAlt,  title: 'Health Awareness',   desc: 'Regular health awareness programmes, dental camps, and wellness sessions conducted for students and staff.' },
];

export default function HealthFacilitiesPage() {
  return (
    <>
      <Hero
        title="Health Facilities"
        subtitle="Caring for the well-being of every student at SSKV College"
        height="medium"
        breadcrumb="Student Life › Health Facilities"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Health & Wellness" subtitle="Supporting physical and mental well-being of our students" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              SSKV College is committed to the holistic well-being of its students. The college provides health support services, wellness awareness programmes, and a safe campus environment. A dedicated student counsellor is available to support students' mental health and personal well-being.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {facilities.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 h-full flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <f.icon className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-base mb-1">{f.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-6 bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h3 className="font-bold text-primary-800 font-heading text-base mb-2">Free Dental Camp</h3>
              <p className="text-sm text-neutral-600">The college has conducted free dental health camps in association with the NSS unit, providing dental check-ups and awareness to students at no cost.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Healthy Students. Bright Futures." subtitle="SSKV College prioritises the health and well-being of every student on campus." />
    </>
  );
}
