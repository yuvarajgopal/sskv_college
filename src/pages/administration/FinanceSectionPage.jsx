import { FaUserTie, FaUserCog } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const management = [
  { 
    name: 'Dr. C.K. Raman', 
    designation: 'Secretary', 
    photo: '/images/management/secretary.jpg'
  },
  { 
    name: 'Dr. Sumanth C. Raman', 
    designation: 'Joint Secretary', 
    photo: '/images/management/joint-secretary.jpg'
  },
  { 
    name: 'Dr. Prasanth Krishna',   
    designation: 'Treasurer', 
    photo: '/images/management/prasanth.jpg'
  },
  { 
    name: 'Dr. K. Thirumamagal', 
    designation: 'Principal', 
    photo: '/images/management/principal.jpg'
  },
];

const staff = [
  { 
    name: 'Mr. T.V.Jaganath',  
    designation: 'Office Superindent', 
    photo: '/images/staff/jaganath.jpg'
  },
  { 
    name: 'Ms. S. Gayathri',           
    designation: 'Head Clerk', 
    photo: '/images/staff/gayathri.jpg'
  },
  { 
    name: 'Ms. S. Latha',   
    designation: 'Clerk — Account Section', 
    photo: '/images/staff/latha.jpg'
  },
  { 
    name: 'Ms. Radha',   
    designation: 'Clerk — Student Section / Admission', 
    photo: '/images/staff/radha.jpg'
  },
  { 
    name: 'Mr. Sanjay Kumar Acharya', 
    designation: 'Clerk — Accounts Section',
    photo: '/images/staff/sanjay.jpg'
  },
];

export default function FinanceSectionPage() {
  return (
    <>
      <Hero
        title="Finance Section"
        subtitle="Managing the financial operations and resources of SSKV College"
        height="medium"
        breadcrumb="Administration › Finance Section"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          {/* Management */}
          <SectionHeading title="Finance Management" subtitle="Senior management overseeing financial governance" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {management.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 0.08}>
                <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-xl p-6 text-white text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3">
  <img 
    src={m.photo} 
    alt={m.name} 
    className="w-full h-full object-cover"
  />
</div>
                  <h3 className="font-bold font-heading text-base leading-snug">{m.name}</h3>
                  <p className="text-accent-400 text-xs font-semibold mt-2">{m.designation}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Administrative Staff */}
          <SectionHeading title="Administrative Staff" subtitle="Office staff managing day-to-day finance operations" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {staff.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-neutral-50 hover:bg-accent-50 transition-colors duration-300 rounded-xl p-5 border border-neutral-100">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
  <img 
    src={s.photo} 
    alt={s.name} 
    className="w-full h-full object-cover"
  />
</div>
                  <div>
                    <h4 className="font-bold text-primary-800 text-sm font-heading">{s.name}</h4>
                    <p className="text-neutral-500 text-xs mt-0.5">{s.designation}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      <CTABanner
        title="Transparent Financial Administration"
        subtitle="Committed to responsible management of institutional resources."
      />
    </>
  );
}
