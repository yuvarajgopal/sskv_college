import { FaHandshake, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const mouReports = [
  { label: 'MOU 2023-2024', pdf: '/pdfs/mou-2023-24.pdf' },
  { label: 'MOU 2024-2025', pdf: '/pdfs/mou-2024-25.pdf' },
  { label: 'MOU 2025-2026', pdf: '/pdfs/mou-2025-26.pdf' },
];

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
          <SectionHeading title="Academic Collaborations" />
          <AnimatedSection>
            <div className="flex items-start gap-5 bg-primary-50 rounded-2xl p-8 border border-primary-100 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-primary-800 flex items-center justify-center flex-shrink-0">
                <FaHandshake className="text-2xl text-accent-400" />
              </div>
              <p className="text-neutral-700 leading-relaxed text-base">
                Academic collaborations through Memoranda of Understanding (MoUs) play a significant role in enhancing the overall development of students. By establishing partnerships with reputed academic institutions, industries, and research organizations, the College facilitates opportunities for knowledge exchange, skill enhancement, internships, training programmes, and exposure to contemporary practices. These collaborations contribute meaningfully to bridging the gap between academic learning and industry expectations, thereby strengthening students' academic and professional competencies.
              </p>
            </div>
          </AnimatedSection>

          {/* ── MOU BUTTONS ────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mouReports.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a
                  href={r.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-6 py-5 bg-primary-900 text-white rounded-xl hover:bg-primary-800 transition-colors group"
                >
                  <FaFilePdf className="text-2xl text-accent-400 flex-shrink-0" />
                  <span className="font-heading font-bold text-sm flex-grow">{r.label}</span>
                  <FaExternalLinkAlt className="text-white/40 group-hover:text-accent-400 text-xs flex-shrink-0 transition-colors" />
                </a>
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
