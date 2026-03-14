import { FaBuilding, FaHandshake, FaUserTie, FaChalkboardTeacher } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const activities = [
  { icon: FaHandshake,         title: 'Industry MoUs',           desc: 'Formal partnerships with leading companies including Infosys to facilitate placements, internships, and joint training programmes.' },
  { icon: FaChalkboardTeacher, title: 'Guest Lectures',           desc: 'Industry professionals and experts deliver guest lectures, workshops, and skill development sessions to students.' },
  { icon: FaBuilding,          title: 'Industrial Visits',        desc: 'Organised visits to industries and corporate offices to provide students with real-world exposure to work environments.' },
  { icon: FaUserTie,           title: 'Expert Mentoring',         desc: 'Industry mentors guide students on career paths, professional skills, and industry expectations.' },
];

export default function IndustryAcademiaPage() {
  return (
    <>
      <Hero
        title="Industry Academia Collaboration"
        subtitle="Building bridges between education and the professional world"
        height="medium"
        breadcrumb="Activities › Industry Academia Collaboration"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Industry-Academia Collaboration" subtitle="Strengthening the link between academic learning and industry practice" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              SSKV College actively fosters industry-academia collaboration through MoUs, guest lectures, industrial visits, and joint training programmes. These initiatives ensure that students are industry-ready and equipped with the skills and knowledge demanded by today's job market.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 h-full flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <a.icon className="text-primary-700 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-base mb-1">{a.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Where Education Meets Industry." subtitle="SSKV College builds future-ready professionals through strong industry partnerships." />
    </>
  );
}
