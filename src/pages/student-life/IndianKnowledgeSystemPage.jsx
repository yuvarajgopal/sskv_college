import { FaOm, FaBook, FaFilePdf, FaUserShield } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const topics = [
  'Foundations of Indian philosophy and ethics',
  'Introduction to Yoga, Ayurveda, and wellness practices',
  'Vedic mathematics and ancient scientific perspectives',
  'Cultural heritage and literature from the Indian tradition',
];

const reports = [
  { label: 'IKS Report 2022–2023', href: '/pdfs/iks-2022-2023.pdf' },
  { label: 'IKS Report 2023–2024', href: '/pdfs/iks-2023-2024.pdf' },
  { label: 'IKS Report 2024–2025', href: '/pdfs/iks-2024-2025.pdf' },
  { label: 'IKS Report 2025–2026', href: '/pdfs/iks-2025-2026.pdf' },
];

export default function IndianKnowledgeSystemPage() {
  return (
    <>
      <Hero
        title="Indian Knowledge System"
        subtitle="Preserving and promoting India's rich intellectual heritage through education"
        height="medium"
        breadcrumb="Student Life › Indian Knowledge System"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="Indian Knowledge Systems (IKS)" />

          {/* INTRO */}
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Indian Knowledge Systems (IKS) at SSKV College of Arts &amp; Science for Women reflects the
              college&apos;s alignment with national educational goals to expose students to India&apos;s traditional
              knowledge and cultural legacy — through curriculum integration, value education, and academic
              activities, giving students exposure to India&apos;s traditional wisdom and how it connects with
              contemporary life and thought. This could include:
            </p>
          </AnimatedSection>

          {/* TOPICS */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-8">
              <ul className="space-y-3">
                {topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaOm className="text-accent-400 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-10">
              These elements help students appreciate India&apos;s long-standing intellectual traditions
              alongside their regular academics.
            </p>
          </AnimatedSection>

          {/* IKS REPORTS */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-4">IKS Reports</h3>
              <div className="flex flex-wrap gap-3">
                {reports.map((report) => (
                  <a
                    key={report.href}
                    href={report.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-800 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors"
                  >
                    <FaFilePdf />
                    {report.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* NATIONAL TASK FORCE SURVEY */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">National Task Force</h3>
              <p className="text-sm text-neutral-600">
                Survey on Students Mental Health
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner
        title="Discover India's Heritage"
        subtitle="Explore the richness of Indian knowledge traditions at SSKV College."
      />
    </>
  );
}
