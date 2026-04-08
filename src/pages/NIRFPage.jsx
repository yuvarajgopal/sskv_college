import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const reports = [
  { label: 'NIRF Report 2023-2024', pdf: '/pdfs/nirf-report-2023-24.pdf' },
  { label: 'NIRF Report 2024-2025', pdf: '/pdfs/nirf-report-2024-25.pdf' },
];

export default function NIRFPage() {
  return (
    <>
      <Hero
        title="NIRF"
        subtitle="National Institutional Ranking Framework"
        height="medium"
        breadcrumb="Academics › IQAC › NIRF"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="NIRF Reports" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The National Institutional Ranking Framework (NIRF) was approved by the Ministry of Education, Government of India. SSKV College of Arts & Science for Women participates in the NIRF ranking process, demonstrating its commitment to transparency, accountability, and continuous improvement in higher education quality.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reports.map((r, i) => (
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

      <CTABanner title="Striving for Excellence" subtitle="SSKV College is committed to achieving national recognition through quality and transparency." />
    </>
  );
}
