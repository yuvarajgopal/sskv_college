import { FaHandshake, FaUniversity, FaIndustry, FaLeaf } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

// ── MoU DATA ──────────────────────────────────────────────────────────────────
// Add more MoUs here as they are established
const mous = [
  {
    sl: 1,
    partner: 'Infosys',
    type: 'Industry',
    date: 'September 2024',
    purpose: 'Industry-academia collaboration enhancing placement opportunities and bridging the gap between academic learning and IT industry expectations.',
    icon: FaIndustry,
    color: '#0066cc',
  },
  {
    sl: 2,
    partner: 'BHUMI — India\'s Largest Youth Volunteer Organisation',
    type: 'Non-Profit / Social',
    date: 'December 2023',
    purpose: 'Strengthening social responsibility and community engagement among students through volunteer-driven programmes and outreach initiatives.',
    icon: FaLeaf,
    color: '#27ae60',
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const typeColors = {
  'Industry':          { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-100' },
  'Non-Profit / Social': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-100' },
  'Academic':          { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-100' },
  'Research':          { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-100' },
};

function TypeBadge({ type }) {
  const c = typeColors[type] ?? { bg: 'bg-neutral-50', text: 'text-neutral-600', border: 'border-neutral-200' };
  return (
    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text} border ${c.border}`}>
      {type}
    </span>
  );
}

export default function AcademicCollaborationsPage() {
  return (
    <>
      <Hero
        title="Academic Collaborations"
        subtitle="Bridging academia and industry through meaningful partnerships and MoUs"
        height="medium"
        breadcrumb="Academics › Academic Collaborations"
      />

      {/* ── INTRO ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="flex items-start gap-5 bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <div className="w-14 h-14 rounded-2xl bg-primary-800 flex items-center justify-center flex-shrink-0">
                <FaHandshake className="text-2xl text-accent-400" />
              </div>
              <p className="text-neutral-700 leading-relaxed text-base">
                Academic collaborations through Memoranda of Understanding (MoUs) play a significant role in enhancing the overall development of students. By establishing partnerships with reputed academic institutions, industries, and research organizations, the College facilitates opportunities for knowledge exchange, skill enhancement, internships, training programmes, and exposure to contemporary practices. These collaborations contribute meaningfully to bridging the gap between academic learning and industry expectations, thereby strengthening students' academic and professional competencies.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────────── */}
      <div className="bg-primary-900 py-4">
        <div className="container-custom mx-auto flex flex-wrap justify-center gap-10 text-center">
          <div>
            <div className="text-2xl font-bold text-accent-400 font-heading">{mous.length}</div>
            <div className="text-white/60 text-xs mt-0.5">Active MoUs</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent-400 font-heading">
              {[...new Set(mous.map((m) => m.type))].length}
            </div>
            <div className="text-white/60 text-xs mt-0.5">Partnership Types</div>
          </div>
        </div>
      </div>

      {/* ── MoU LIST ───────────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading
            title="Memoranda of Understanding (MoUs)"
            subtitle="Our institutional partnerships fostering collaborative growth"
          />

          <div className="space-y-5">
            {mous.map((mou, i) => (
              <AnimatedSection key={mou.sl} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${mou.color}15` }}
                    >
                      <mou.icon style={{ color: mou.color }} className="text-xl" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-xs text-neutral-400 font-medium">MoU {String(mou.sl).padStart(2, '0')}</span>
                          <h3 className="text-base font-bold text-primary-800 font-heading leading-snug mt-0.5">
                            {mou.partner}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <TypeBadge type={mou.type} />
                        </div>
                      </div>

                      <p className="text-sm text-neutral-600 leading-relaxed mb-3">{mou.purpose}</p>

                      <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-400 inline-block" />
                        Signed: {mou.date}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Collaborate With Us"
        subtitle="We welcome partnerships with institutions, industries, and organisations committed to advancing education."
      />
    </>
  );
}
