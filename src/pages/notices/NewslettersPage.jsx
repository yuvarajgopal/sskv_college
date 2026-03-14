import { FaNewspaper, FaDownload, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';

// ── Add newsletters here: { title, year, file, available } ──────────────────
const newsletters = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function NewslettersPage() {
  return (
    <>
      <Hero title="Newsletters" subtitle="The SSKV College newsletter — stories, achievements, and campus life" height="medium" breadcrumb="Notices › Newsletters" />
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-3xl">
          <SectionHeading title="College Newsletters" subtitle={`"Reflections" — the SSKV College magazine launched in February 2016`} />
          {newsletters.length > 0 ? (
            <div className="space-y-4">
              {newsletters.map((n, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="flex items-center justify-between gap-4 bg-white rounded-xl px-5 py-4 border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <FaFilePdf className="text-primary-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary-800 text-sm">{n.title}</p>
                        <p className="text-neutral-400 text-xs mt-0.5">{n.year}</p>
                      </div>
                    </div>
                    {n.available ? (
                      <a href={`/pdfs/newsletters/${n.file}`} download className="flex items-center gap-1.5 px-4 py-2 bg-primary-800 text-white text-xs font-bold rounded-lg whitespace-nowrap"><FaDownload className="text-[10px]" /> Download</a>
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
                <FaNewspaper className="text-4xl text-neutral-200 mx-auto mb-3" />
                <p className="text-neutral-400 text-sm">Newsletter issues will be uploaded here soon.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
