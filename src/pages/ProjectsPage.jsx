import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { FaExternalLinkAlt } from 'react-icons/fa';

// ── Drive file IDs for embedded documents ─────────────────────────────────────
// Projects page currently has no embedded documents — add Drive file IDs here when available
const documents = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <>
      <Hero
        title="Projects"
        subtitle="Student and faculty research projects driving innovation and applied learning"
        height="medium"
        breadcrumb="Research & Development › Projects"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading
            title="Research Projects"
            subtitle="Ongoing and completed projects by departments and research groups"
          />

          {documents.length > 0 ? (
            <div className="space-y-8">
              {documents.map((doc, i) => (
                <AnimatedSection key={doc.id} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
                      <p className="font-semibold text-primary-800 font-heading text-sm">{doc.label}</p>
                      <a
                        href={`https://drive.google.com/file/d/${doc.id}/view`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-primary-600 hover:text-accent-600 transition-colors"
                      >
                        Open in Drive <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                    <div className="w-full" style={{ height: '520px' }}>
                      <iframe
                        src={`https://drive.google.com/file/d/${doc.id}/preview`}
                        title={doc.label}
                        className="w-full h-full border-0"
                        allow="autoplay"
                      />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-16 bg-white rounded-2xl border border-neutral-100">
                <p className="text-neutral-400 text-sm">Project documents will be published here soon.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <CTABanner
        title="Explore & Innovate"
        subtitle="Our students and faculty work on meaningful projects that bridge classroom learning and real-world application."
      />
    </>
  );
}
