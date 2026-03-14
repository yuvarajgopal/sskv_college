import { FaBalanceScale, FaUsers, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const objectives = [
  'Ensure equal access to educational opportunities for all students irrespective of caste, religion, gender, or economic status.',
  'Provide support and guidance to students from marginalized and disadvantaged communities.',
  'Facilitate scholarships, remedial classes, and special assistance programmes.',
  'Address discrimination, bias, and barriers to equal participation in campus life.',
  'Promote awareness of constitutional rights, social justice, and inclusive education.',
];

export default function EqualOpportunityCellPage() {
  return (
    <>
      <Hero
        title="Equal Opportunity Cell"
        subtitle="Ensuring every student has an equal chance to learn, grow, and succeed"
        height="medium"
        breadcrumb="Student Life › Equal Opportunity Cell"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Equal Opportunity Cell (EOC)" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Equal Opportunity Cell at SSKV College is established to uphold the principles of equality, inclusion, and non-discrimination. It ensures that students from all backgrounds — including SC/ST, minority communities, economically weaker sections, and differently abled students — have access to the full range of academic and co-curricular opportunities.
            </p>
          </AnimatedSection>

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

      <CTABanner title="Equal Opportunities. Unlimited Potential." subtitle="SSKV College believes every student deserves an equal chance to realise their full potential." />
    </>
  );
}
