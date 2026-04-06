import { FaHandsHelping, FaGraduationCap, FaRupeeSign, FaBook } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const objectives = [
  'Identify and support students from socio-economically disadvantaged backgrounds.',
  'Facilitate access to government scholarships and financial aid schemes.',
  'Provide academic mentoring, remedial coaching, and career guidance.',
  'Ensure equal participation in all academic and co-curricular activities.',
  'Create awareness about welfare schemes and educational entitlements.',
  'Conduct counselling sessions to address academic and personal challenges.',
];

const initiatives = [
  { icon: FaRupeeSign, title: 'Scholarship Assistance', desc: 'Guidance for availing state and central government scholarships including BC/MBC/SC/ST scholarships and first-generation graduate schemes.' },
  { icon: FaBook, title: 'Remedial Coaching', desc: 'Additional academic support through remedial classes and peer learning programmes for students who need extra assistance.' },
  { icon: FaGraduationCap, title: 'Career Guidance', desc: 'Special career counselling sessions, competitive exam coaching, and soft skills training for holistic development.' },
  { icon: FaHandsHelping, title: 'Mentoring Programme', desc: 'One-on-one mentoring by faculty members to guide students through academic and personal challenges.' },
];

export default function SEDGCellPage() {
  return (
    <>
      <Hero
        title="Socio Economically Disadvantaged Group Cell"
        subtitle="Empowering students from disadvantaged backgrounds through support and opportunities"
        height="medium"
        breadcrumb="Student Life › SEDG Cell"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the SEDG Cell" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Socio Economically Disadvantaged Group (SEDG) Cell at SSKV College is committed to ensuring that students from economically weaker sections, first-generation learners, and socially disadvantaged communities receive the support they need to succeed in higher education. The cell works in coordination with government agencies, NGOs, and institutional bodies to provide comprehensive support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Our Initiatives" subtitle="Programmes and support systems for disadvantaged students" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {initiatives.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <item.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Objectives" />
          <div className="space-y-3">
            {objectives.map((o, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-3 bg-neutral-50 rounded-xl px-4 py-3 border border-neutral-100">
                  <span className="w-6 h-6 rounded-full bg-primary-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{o}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="No Student Left Behind" subtitle="SSKV College ensures every student has the support to achieve their academic potential." />
    </>
  );
}
