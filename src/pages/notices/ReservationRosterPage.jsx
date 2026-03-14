import { FaListOl, FaDownload, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';

// ── Add reservation roster PDFs here: { title, year, file, available } ───────
const rosters = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function ReservationRosterPage() {
  return (
    <>
      <Hero title="Reservation Roster" subtitle="Transparency in reservation policy implementation at SSKV College" height="medium" breadcrumb="Notices › Reservation Roster" />
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-3xl">
          <SectionHeading title="Reservation Roster" subtitle="Year-wise roster documents as per UGC / Government reservation norms" />
          {rosters.length > 0 ? (
            <div className="space-y-3">
              {rosters.map((r, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="flex items-center justify-between gap-4 bg-white rounded-xl px-5 py-4 border border-neutral-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <FaFilePdf className="text-primary-700" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary-800 text-sm">{r.title}</p>
                        <p className="text-neutral-400 text-xs mt-0.5">{r.year}</p>
                      </div>
                    </div>
                    {r.available ? (
                      <a href={`/pdfs/roster/${r.file}`} download className="flex items-center gap-1.5 px-4 py-2 bg-primary-800 text-white text-xs font-bold rounded-lg whitespace-nowrap"><FaDownload className="text-[10px]" /> Download</a>
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
                <FaListOl className="text-4xl text-neutral-200 mx-auto mb-3" />
                <p className="text-neutral-400 text-sm">Reservation roster documents will be published here.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
