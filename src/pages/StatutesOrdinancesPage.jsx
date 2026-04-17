import { FaDownload, FaExternalLinkAlt, FaBookOpen, FaBalanceScale, FaFileAlt, FaFilePdf } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const links = [
  { label: 'CBCS Regulations', url: 'https://www.unom.ac.in/index.php?route=admission/cbcssyllabus', desc: 'Choice Based Credit System regulations and syllabus from the University of Madras.' },
  { label: 'CBCS — Academic Information', url: 'https://www.unom.ac.in/index.php?route=academic/cbcs', desc: 'Detailed academic information on CBCS implementation and guidelines.' },
];

const buttons = [
  { label: 'UG – Eligibility and Admission Guidelines', pdf: '/pdfs/ug-eligibility-admission-guidelines.pdf' },
  { label: 'Eligibility and Admission Guidelines', pdf: '/pdfs/ug-eligibility-admission-guidelines.pdf' },
];

export default function StatutesOrdinancesPage() {
  return (
    <>
      <Hero
        title="Statutes / Ordinances Pertaining to Admissions / Academics"
        subtitle="Regulatory framework pertaining to admissions and academics"
        height="medium"
        breadcrumb="Academics › Statutes / Ordinances"
      />

      {/* ── DOWNLOAD BUTTONS ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Statutes & Ordinances Pertaining to Admissions / Academics" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              SSKV College of Arts & Science for Women, affiliated to the University of Madras, follows the statutes, ordinances, and regulations laid down by the University for all academic and admission-related matters. The following resources provide detailed information on the regulatory framework governing our academic programmes.
            </p>
          </AnimatedSection>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {buttons.map((btn, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <a
                  href={btn.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-primary-900 text-white font-bold rounded-xl hover:bg-primary-800 transition-colors font-heading text-sm"
                >
                  <FaFilePdf className="text-accent-400 text-lg flex-shrink-0" />
                  {btn.label}
                  <FaExternalLinkAlt className="text-white/50 text-xs flex-shrink-0" />
                </a>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: FaBookOpen, title: 'University Statutes', desc: 'Rules and regulations governing the functioning of affiliated colleges under the University of Madras.' },
              { icon: FaBalanceScale, title: 'Ordinances', desc: 'Academic ordinances covering examinations, grading, attendance requirements, and student conduct.' },
              { icon: FaFileAlt, title: 'CBCS Framework', desc: 'Choice Based Credit System regulations for curriculum design, evaluation, and credit transfer.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <item.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMBEDDED PDF — UG ─────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="UG – Eligibility and Admission Guidelines" subtitle="View the full document below" />
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between bg-primary-900 px-6 py-3">
                <div className="flex items-center gap-3">
                  <FaFilePdf className="text-accent-400 text-lg" />
                  <span className="text-white font-heading font-bold text-sm">UG – Eligibility and Admission Guidelines</span>
                </div>
                <a
                  href="/pdfs/ug-eligibility-admission-guidelines.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-accent-400 text-primary-900 text-xs font-bold rounded-lg hover:bg-accent-300 transition-colors font-heading"
                >
                  <FaDownload /> Download
                </a>
              </div>
              <iframe
                src="/pdfs/ug-eligibility-admission-guidelines.pdf"
                title="UG Eligibility and Admission Guidelines"
                className="w-full border-0"
                style={{ height: '700px' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── EMBEDDED PDF — PG ─────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="PG – Eligibility and Admission Guidelines" subtitle="View the full document below" />
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between bg-primary-900 px-6 py-3">
                <div className="flex items-center gap-3">
                  <FaFilePdf className="text-accent-400 text-lg" />
                  <span className="text-white font-heading font-bold text-sm">PG – Eligibility and Admission Guidelines</span>
                </div>
                <a
                  href="/pdfs/ug-eligibility-admission-guidelines.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-accent-400 text-primary-900 text-xs font-bold rounded-lg hover:bg-accent-300 transition-colors font-heading"
                >
                  <FaDownload /> Download
                </a>
              </div>
              <iframe
                src="/pdfs/ug-eligibility-admission-guidelines.pdf"
                title="PG Eligibility and Admission Guidelines"
                className="w-full border-0"
                style={{ height: '700px' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── IMPORTANT LINKS ───────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Important Links" />
          <div className="space-y-4">
            {links.map((link, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-primary-50 border border-primary-100 rounded-xl px-6 py-4 hover:bg-primary-100 transition-colors group"
                >
                  <div>
                    <h4 className="font-heading font-bold text-primary-800 mb-1">{link.label}</h4>
                    <p className="text-neutral-600 text-sm">{link.desc}</p>
                  </div>
                  <FaExternalLinkAlt className="text-primary-400 group-hover:text-primary-600 flex-shrink-0 ml-4" />
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Academic Governance" subtitle="Ensuring compliance with University of Madras regulations for quality education." />
    </>
  );
}
