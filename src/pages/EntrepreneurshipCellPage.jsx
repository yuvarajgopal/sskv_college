import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';
import { FaExternalLinkAlt } from 'react-icons/fa';

// ── Drive file IDs for embedded documents ─────────────────────────────────────
const documents = [
  { id: '116DGd9srNsKOicepw4kn3nqeokGdEalS', label: 'Entrepreneurship Cell — Document 1' },
  { id: '1No5Rz1L8g70A3K9B4L90h1AnCz_p5BpO', label: 'Entrepreneurship Cell — Document 2' },
  { id: '1k-0E9FRhbwy-7lH9mQDffmljB69EDEHu', label: 'Entrepreneurship Cell — Document 3' },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function EntrepreneurshipCellPage() {
  return (
    <>
      <Hero
        title="Entrepreneurship Cell"
        subtitle="Nurturing entrepreneurial spirit and innovation among students at SSKV College"
        height="medium"
        breadcrumb="Research & Development › Entrepreneurship Cell"
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading
            title="Entrepreneurship Development Cell"
            subtitle="Activities, programmes, and initiatives fostering entrepreneurship"
          />

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
        </div>
      </section>

      <CTABanner
        title="Start Your Entrepreneurial Journey"
        subtitle="SSKV College is a Spoke Institution of the University of Madras Entrepreneurial Development Cell."
      />
    </>
  );
}
