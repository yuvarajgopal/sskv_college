import { FaBell, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';

// ── Add circulars here: { title, date, file, available } ─────────────────────
const circulars = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function CircularsPage() {
  return (
    <>
      <Hero title="Circular & Notices" subtitle="Official communications and notices from SSKV College" height="medium" breadcrumb="Notices › Circular & Notices" />
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-3xl">
          <SectionHeading title="Circulars & Notices" />
          {circulars.length > 0 ? (
            <div className="space-y-3">
              {circulars.map((c, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="flex items-center justify-between gap-4 bg-white rounded-xl px-5 py-4 border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <FaFilePdf className="text-primary-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary-800 text-sm">{c.title}</p>
                        <p className="text-neutral-400 text-xs mt-0.5">{c.date}</p>
                      </div>
                    </div>
                    {c.available ? (
                      <a href={`/pdfs/notices/${c.file}`} download className="flex items-center gap-1.5 px-4 py-2 bg-primary-800 text-white text-xs font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">Download</a>
                    ) : (
                      <span className="px-3 py-1.5 bg-neutral-100 text-neutral-400 text-xs font-semibold rounded-lg whitespace-nowrap">Coming Soon</span>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-16 bg-white rounded-2xl border border-neutral-100">
                <FaBell className="text-4xl text-neutral-200 mx-auto mb-3" />
                <p className="text-neutral-400 text-sm">No circulars or notices posted yet. Check back soon.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
