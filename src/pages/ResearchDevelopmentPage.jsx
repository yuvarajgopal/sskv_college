import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { FaExternalLinkAlt } from 'react-icons/fa';

// ── Drive file IDs for embedded documents ─────────────────────────────────────
const documents = [
  { id: '1ssOrTRREebHSg-RoXQt8VKYc88cMV7Xc', label: 'Reports 2022-23' },
  { id: '1pVe89jkJc1vJb580I1r_0hc4Vs-61OsL', label: 'Reports 2023-24' },
  { id: '1nZ6hNR0ddprkHo9gNczd0qYKDWb1rexP', label: 'Reports 2024-25' },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function ResearchDevelopmentPage() {
  return (
    <>
      <Hero
        title="Research & Development"
        subtitle="Fostering a culture of inquiry, innovation, and scholarly excellence at SSKV College"
        height="medium"
        breadcrumb="Research & Development › Overview"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading
            title="Research & Development"
            subtitle="Documents and reports from the Research & Development Cell"
          />

          {/* ── CONTENT SECTION ─────────────────────────────────────────── */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm mb-10">
              <p className="text-neutral-600 leading-relaxed mb-4">
                The Research & Development Cell of the institution is committed to fostering a vibrant research culture among faculty and students. It serves as a platform to promote innovation, critical thinking, and academic excellence across disciplines.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The institution has taken a significant step forward by applying for recognition of Research Departments in Commerce and Tamil, aiming to strengthen scholarly activities and contribute meaningfully to the academic community. This initiative is expected to open new avenues for advanced research, publications, and collaborative projects.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                The R&D Cell actively encourages faculty members and students to undertake research projects, publish in reputed journals, and participate in seminars, conferences, and workshops. It also facilitates guidance for funding opportunities, interdisciplinary research, and industry-academia collaboration.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                With a focus on quality and relevance, the Cell strives to nurture young researchers and create a dynamic environment that supports knowledge creation and dissemination.
              </p>
            </div>
          </AnimatedSection>

          {/* ── DOCUMENTS SECTION ───────────────────────────────────────── */}
          <div className="space-y-8">
            {documents.map((doc, i) => (
              <AnimatedSection key={doc.id} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
                    <p className="font-semibold text-primary-800 font-heading text-sm">
                      {doc.label}
                    </p>
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

        </div>
      </section>

      <CTABanner
        title="Research. Innovate. Excel."
        subtitle="SSKV College encourages faculty and students to engage in meaningful research and scholarly activities."
      />
    </>
  );
}