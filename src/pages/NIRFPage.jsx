import { FaCheckCircle, FaChartLine, FaGraduationCap, FaBriefcase, FaUniversity, FaGlobe } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const parameters = [
  { icon: FaChartLine, label: 'Teaching, Learning & Resources (TLR)', desc: 'Student strength, faculty-student ratio, financial resources, and combined metric.' },
  { icon: FaGraduationCap, label: 'Research and Professional Practice (RP)', desc: 'Publications, patents, projects, and professional practice metrics.' },
  { icon: FaBriefcase, label: 'Graduation Outcomes (GO)', desc: 'Placement, higher studies, median salary, and university examinations.' },
  { icon: FaGlobe, label: 'Outreach and Inclusivity (OI)', desc: 'Regional and gender diversity, economically and socially challenged students.' },
  { icon: FaUniversity, label: 'Perception (PR)', desc: 'Peer perception, employer feedback, and competitiveness.' },
];

export default function NIRFPage() {
  return (
    <>
      <Hero
        title="NIRF"
        subtitle="National Institutional Ranking Framework — Ministry of Education, Government of India"
        height="medium"
        breadcrumb="Academics › NIRF"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About NIRF" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The National Institutional Ranking Framework (NIRF) was approved by the Ministry of Education, Government of India, and launched in 2015. It outlines a methodology to rank institutions across the country based on objective criteria across several parameters.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              SSKV College of Arts & Science for Women participates in the NIRF ranking process, demonstrating its commitment to transparency, accountability, and continuous improvement in higher education quality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Ranking Parameters" subtitle="NIRF evaluates institutions across five broad parameters" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parameters.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <p.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2 text-sm">{p.label}</h3>
                  <p className="text-neutral-600 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Our Participation" />
          <AnimatedSection>
            <ul className="space-y-2">
              {[
                'Annual submission of institutional data to the NIRF portal',
                'Transparent disclosure of academic, financial, and placement data',
                'Continuous efforts to improve ranking parameters through quality initiatives',
                'Alignment of institutional goals with NIRF criteria for holistic improvement',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-600 text-sm">
                  <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Striving for Excellence" subtitle="SSKV College is committed to achieving national recognition through quality and transparency." />
    </>
  );
}
