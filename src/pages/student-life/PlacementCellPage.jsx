import { FaBriefcase, FaBuilding, FaHandshake, FaChartLine } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const milestones = [
  {
    year: 'June 2024',
    title: 'Nodal College for Placement Drives',
    desc: 'SSKV College selected as a Nodal College by the Government of Tamil Nadu for conducting placement drives for final-year students across colleges in Kanchipuram district.',
  },
  {
    year: 'September 2024',
    title: 'MOU with Infosys',
    desc: 'Signed MOU with Infosys — one of India\'s leading IT companies — enhancing industry-academia collaboration and creating direct placement opportunities for students.',
  },
  {
    year: 'December 2023',
    title: 'MOU with BHUMI',
    desc: 'Partnership with BHUMI — India\'s Largest Youth Volunteer Organisation — strengthening student exposure to professional and social sector career paths.',
  },
];

const services = [
  { icon: FaBriefcase,  label: 'Campus Recruitment Drives' },
  { icon: FaBuilding,   label: 'Industry Visits & Exposure' },
  { icon: FaHandshake,  label: 'MOU with Industries' },
  { icon: FaChartLine,  label: 'Career Guidance & Counselling' },
];

export default function PlacementCellPage() {
  return (
    <>
      <Hero
        title="Placement Cell"
        subtitle="Connecting SSKV graduates with leading employers and career opportunities"
        height="medium"
        breadcrumb="Student Life › Placement Cell"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Placement Cell" subtitle="Bridging academic excellence and professional success" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="bg-primary-50 rounded-2xl p-5 text-center border border-primary-100 h-full">
                  <s.icon className="text-primary-700 text-2xl mx-auto mb-2" />
                  <p className="text-xs font-semibold text-primary-800 font-heading leading-snug">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <SectionHeading title="Key Milestones" />
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <span className="inline-block px-3 py-1 bg-primary-800 text-accent-400 text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0 mt-0.5 font-heading">{m.year}</span>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-base mb-1">{m.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Your Career Starts Here" subtitle="The SSKV Placement Cell is committed to preparing students for a successful professional journey." />
    </>
  );
}
