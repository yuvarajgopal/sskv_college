import { useState } from 'react';
import { FaUserTie } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const faculty = [
  { name: 'Dr. E. Kalaiselvi', qualification: 'M.C.A., M.L.I.S., M.Phil., Ph.D.', designation: 'Librarian', photo: '/images/faculty/library/kalai_selvi.jpg' },
  { name: 'Ms. A. Liviya Kumari', qualification: 'B.B.A.', designation: 'Clerk', photo: '/images/faculty/library/ms-a-liviya-kumari.jpg' },
];

function StaffPhoto({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className="w-full h-full object-cover object-top"
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-primary-50">
      <FaUserTie className="text-4xl text-primary-300" />
    </div>
  );
}

export default function LibraryFacultyPage() {
  return (
    <>
      <Hero
        title="Library Staff"
        subtitle="Meet the dedicated team managing the SSKV College Library"
        height="medium"
        breadcrumb="Academics › Library › Faculty"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Library Staff" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {faculty.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] bg-neutral-100">
                    <StaffPhoto src={member.photo} name={member.name} />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-heading font-bold text-primary-800 text-lg">{member.name}</h3>
                    <p className="text-accent-600 font-semibold text-sm mt-1">{member.designation}</p>
                    <p className="text-neutral-500 text-xs mt-1">{member.qualification}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Explore. Learn. Grow."
        subtitle="Visit the SSKV College Library and unlock a world of knowledge."
      />
    </>
  );
}
