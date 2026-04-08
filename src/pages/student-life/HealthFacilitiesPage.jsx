import { FaHeartbeat, FaUserMd, FaAmbulance, FaAppleAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const facilities = [
  { icon: FaHeartbeat, title: 'First Aid', desc: 'Trained staff and first aid facilities available on campus for immediate response to medical needs.' },
  { icon: FaUserMd, title: 'Medical Referrals', desc: 'Students requiring specialist care are referred to reputed hospitals and medical centres in Kanchipuram.' },
  { icon: FaAmbulance, title: 'Emergency Response', desc: 'Emergency contact numbers and procedures in place to handle medical emergencies on campus swiftly.' },
  { icon: FaAppleAlt, title: 'Health Awareness', desc: 'Regular health awareness programmes, dental camps, and wellness sessions conducted for students and staff.' },
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
            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">Vision</h3>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              To foster a healthy academic environment by ensuring accessible, responsive and preventive healthcare support for all students and staff.
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">Mission</h3>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              To provide immediate primary healthcare and first-aid assistance within the campus.<br />
              To promote awareness on hygiene, nutrition, mental wellness and disease prevention.<br />
              To organize regular health check-ups and medical camps.<br />
              To ensure a safe and healthy campus environment.
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">Objectives</h3>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              To maintain a well-equipped health centre.<br />
              To provide timely medical attention during emergencies.<br />
              To promote hygiene and sanitation across campus.<br />
              To educate students on first aid and personal health care.
            </p>
          </AnimatedSection>

          {/* 🔥 NEW IMAGE SECTION */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              
              <img 
                src="/images/health/varalakshmi.jpg" 
                alt="Health Facility 1" 
                className="w-full h-70 object-cover rounded-2xl shadow-md"
              />

              <img 
                src="/images/health/ehho_certi.jpg" 
                alt="Health Facility 2" 
                className="w-full h-70 object-cover rounded-2xl shadow-md"
              />

            </div>
          </AnimatedSection>

          {/* Facilities */}
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
              <p className="text-sm text-neutral-600">
                The college has conducted free dental health camps in association with the NSS unit.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner 
        title="Healthy Students. Bright Futures." 
        subtitle="SSKV College prioritises the health and well-being of every student on campus." 
      />
    </>
  );
}