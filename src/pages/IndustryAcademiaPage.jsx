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
          <SectionHeading title="Strengthening Industry-Academia Collaboration" />

          <AnimatedSection>
            <p className="max-w-4xl mx-auto">
              At SSKV, we believe that fostering strong partnerships between academia and industry is essential for driving innovation, enhancing student employability, and contributing to societal growth. Our commitment to bridging the gap between theoretical knowledge and practical application is exemplified through our active collaborations with leading industry partners.
            </p>
             <p className="max-w-4xl mx-auto">
              We are proud to announce the signing of a landmark Memorandum of Understanding (MoU) with Infosys, a global leader in technology and consulting services. This five-year partnership aims to create a vibrant ecosystem for skill development, research, and industry-oriented projects. Through this collaboration, students will gain access to real-world projects, internships, and training programs tailored to industry requirements. Faculty members will benefit from industry insights, joint research initiatives, and knowledge exchange sessions.
            </p>
             <p className="max-w-4xl mx-auto">
              Our industry-academia partnership with Infosys underscores our dedication to preparing students for the evolving demands of the digital economy. Together, we strive to foster innovation, nurture talent, and contribute to building a skilled workforce ready to meet the challenges of the future.
              Join us on this exciting journey as we bridge academia and industry for a brighter, more innovative tomorrow.
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
