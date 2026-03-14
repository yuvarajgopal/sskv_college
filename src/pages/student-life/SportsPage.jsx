import { FaTrophy, FaRunning, FaMedal, FaUniversity } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const achievements = [
  {
    year: 'September 2023',
    title: 'AZONE Women\'s Tournament',
    desc: 'College enrolled in the AZONE Women\'s Tournament of the University of Madras. Winners went on to represent at the state level in sports.',
  },
  {
    year: 'June 2024',
    title: 'Nodal College for Placement Drives',
    desc: 'Selected as a Nodal College by the Government of Tamil Nadu — reflecting the overall strength and reputation of the institution including sports activities.',
  },
];

const facilities = [
  { icon: FaRunning,    label: 'Athletic Track'         },
  { icon: FaTrophy,     label: 'Indoor Sports'          },
  { icon: FaMedal,      label: 'Inter-College Competitions' },
  { icon: FaUniversity, label: 'University Tournaments'  },
];

export default function SportsPage() {
  return (
    <>
      <Hero
        title="Sports"
        subtitle="Building champions — on the field and in life — at SSKV College"
        height="medium"
        breadcrumb="Student Life › Sports"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Sports at SSKV College" subtitle="A tradition of athletic excellence and competitive spirit" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {facilities.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="bg-primary-50 rounded-2xl p-5 text-center border border-primary-100">
                  <f.icon className="text-primary-700 text-2xl mx-auto mb-2" />
                  <p className="text-sm font-semibold text-primary-800 font-heading">{f.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <SectionHeading title="Recent Achievements" />
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <span className="inline-block px-3 py-1 bg-primary-800 text-accent-400 text-xs font-bold rounded-full whitespace-nowrap flex-shrink-0 mt-0.5">{a.year}</span>
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

      <CTABanner title="Play. Compete. Excel." subtitle="Sports at SSKV College develop discipline, teamwork, and the spirit of excellence." />
    </>
  );
}
