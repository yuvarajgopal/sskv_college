import { FaFilePdf, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const reports = [
  { label: 'Annual Report 2024-2025', pdf: '/pdfs/library-annual-report-2024-25.pdf' },
];

export default function LibraryAnnualReportPage() {
  return (
    <>
      <Hero
        title="Annual Report — Library"
        subtitle="Yearly progress and achievements of the SSKV College Library"
        height="medium"
        breadcrumb="Academics › Library › Annual Report"
      />

      {/* ── DOWNLOAD BUTTON ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Library Annual Reports" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Library Annual Report documents the year's acquisitions, services, usage statistics, and initiatives undertaken to support academic excellence at SSKV College of Arts & Science for Women.
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {reports.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a
                  href={r.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-5 bg-primary-900 text-white rounded-xl hover:bg-primary-800 transition-colors group"
                >
                  <FaFilePdf className="text-2xl text-accent-400 flex-shrink-0" />
                  <span className="font-heading font-bold text-sm">{r.label}</span>
                  <FaExternalLinkAlt className="text-white/40 group-hover:text-accent-400 text-xs flex-shrink-0 transition-colors" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMBEDDED PDF ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Annual Report 2024-2025" subtitle="View the full report below" />
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between bg-primary-900 px-6 py-3">
                <div className="flex items-center gap-3">
                  <FaFilePdf className="text-accent-400 text-lg" />
                  <span className="text-white font-heading font-bold text-sm">Library Annual Report 2024-2025</span>
                </div>
                <a
                  href="/pdfs/library-annual-report-2024-25.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-accent-400 text-primary-900 text-xs font-bold rounded-lg hover:bg-accent-300 transition-colors font-heading"
                >
                  <FaDownload /> Download
                </a>
              </div>
              <iframe
                src="/pdfs/library-annual-report-2024-25.pdf"
                title="Library Annual Report 2024-2025"
                className="w-full border-0"
                style={{ height: '700px' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Explore. Learn. Grow."
        subtitle="Visit the SSKV College Library and unlock a world of knowledge."
      />
    </>
  );
}
