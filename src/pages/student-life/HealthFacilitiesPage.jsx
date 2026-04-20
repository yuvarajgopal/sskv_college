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
          
          <SectionHeading 
            title="Health & Wellness" 
            subtitle="Supporting physical and mental well-being of our students" 
          />

          <AnimatedSection>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-5">Vision</h3>
            <p className="text-neutral-600 mb-8 max-w-3xl">
              To foster a healthy academic environment by ensuring accessible, responsive and preventive healthcare support.
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-5">Mission</h3>
            <p className="text-neutral-600 mb-8 max-w-3xl">
              To provide immediate healthcare support, promote awareness, conduct medical camps, and ensure a safe campus.
            </p>

            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-5">Objectives</h3>
            <p className="text-neutral-600 mb-8 max-w-3xl">
              To maintain health facilities, respond to emergencies, promote hygiene, and educate students on health care.
            </p>
          </AnimatedSection>

          {/* 🔥 IMAGE SECTION (ROUNDED RECTANGLE STYLE) */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 items-center">

              {/* DOCTOR PROFILE */}
              <div className="text-center">
                <div className="w-60 mx-auto overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="/images/health/varalakshmi.jpg"
                    alt="Dr Varalakshmi"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                <h4 className="mt-4 text-lg font-semibold text-primary-800">
                  Dr. H. Varalakshmi
                </h4>

                <p className="text-sm text-neutral-600">
                 B.com., MBA., MD(acu), PhD., (A.M.) 
                </p>
              </div>

              {/* CERTIFICATE */}
              <div className="text-center">
                <div className="max-w-md mx-auto overflow-hidden rounded-2xl shadow-md border">
                  <img 
                    src="/images/health/ehho_certi.jpg"
                    alt="Health Certificate"
                    className="w-full object-cover"
                  />
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* FACILITIES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {facilities.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl p-6 border flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center">
                    <f.icon className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 mb-1">{f.title}</h3>
                    <p className="text-sm text-neutral-600">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* EXTRA */}
          <AnimatedSection delay={0.3}>
            <div className="mt-6 bg-primary-50 rounded-2xl p-6 border">
              <h3 className="font-bold text-primary-800 mb-2">Free Dental Camp</h3>
              <p className="text-sm text-neutral-600">
                The college conducts free dental health camps in association with NSS.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner 
        title="Healthy Students. Bright Futures." 
        subtitle="SSKV College prioritises the health and well-being of every student." 
      />
    </>
  );
}