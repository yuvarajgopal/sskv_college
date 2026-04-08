import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const reports = [
  { label: 'AISHE Report 2021-22', pdf: '/pdfs/aishe-report-2021-22.pdf' },
  { label: 'AISHE Report 2022-23', pdf: '/pdfs/aishe-report-2022-23.pdf' },
  { label: 'AISHE Report 2023-24', pdf: '/pdfs/aishe-report-2023-24.pdf' },
  { label: 'AISHE Report 2024-25', pdf: '/pdfs/aishe-report-2024-25.pdf' },
];

export default function AISHEPage() {
  return (
    <>
      <Hero
        title="AISHE"
        subtitle="All India Survey on Higher Education"
        height="medium"
        breadcrumb="Academics › IQAC › AISHE"
      />

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About AISHE" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              At SSKV College of Arts and Science for Women, the All India Survey on Higher Education (AISHE) is diligently implemented in line with the guidelines of the Ministry of Education, Government of India. The College regularly submits accurate and comprehensive data on student enrolment, faculty strength, academic programmes, and infrastructure through the AISHE portal. This participation reflects SSKV College's commitment to transparency, effective institutional planning, and continuous quality enhancement in higher education.
            </p>
          </AnimatedSection>

          {/* ── REPORT BUTTONS ─────────────────────────────────────────────── */}
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

      <CTABanner title="Committed to Transparency" subtitle="SSKV College ensures timely and accurate submission of AISHE data every academic year." />
    </>
  );
}
