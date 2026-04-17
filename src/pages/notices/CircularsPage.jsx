import { FaBell, FaFilePdf } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';

// ── Add circulars here ─────────────────────
const circulars = [];
// ──────────────────────────────────────────

// ✅ TC ISSUE DATA
const tcData = [
  { sno: 1, dept: 'M.A. (TAMIL)', date: '22-04-26' },
  { sno: 2, dept: 'M.A. (ENGLISH)', date: '22-04-26' },
  { sno: 3, dept: 'M.COM.', date: '22-04-26' },
  { sno: 4, dept: 'B.B.A.', date: '05-05-26' },
  { sno: 5, dept: 'B.COM. (GENERAL)', date: '08-05-26' },
  { sno: 6, dept: 'B.COM. (A & F)', date: '09-05-26' },
  { sno: 7, dept: 'B.COM. (C.S.)', date: '11-05-26' },
  { sno: 8, dept: 'B.SC. (MATHS)', date: '15-05-26' },
  { sno: 9, dept: 'B.A. (TAMIL)', date: '22-05-26' },
  { sno: 10, dept: 'B.A. (ENGLISH)', date: '24-05-26' },
  { sno: 11, dept: 'B.C.A.', date: '27-05-26' },
  { sno: 12, dept: 'B.SC. (C.S.)', date: '28-05-26' },
];

export default function CircularsPage() {
  return (
    <>
      <Hero 
        title="Circular & Notices" 
        subtitle="Official communications and notices from SSKV College" 
        height="medium" 
        breadcrumb="Notices › Circular & Notices" 
      />

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">

          {/* ✅ MAIN HEADING */}
          <SectionHeading title="Circulars & Notices" />

          {/* ✅ SUB SECTION: TC TABLE */}
          <SectionHeading 
            title="TC Issue Schedule" 
            subtitle="Academic Year 2025 – 2026" 
          />

          <AnimatedSection>
            <div className="overflow-x-auto mb-10">
              <table className="w-full border border-neutral-300 rounded-xl overflow-hidden">
                
                {/* HEADER */}
                <thead className="bg-[#0f172a] text-white text-sm">
                  <tr>
                    <th className="p-3 text-left">S.NO</th>
                    <th className="p-3 text-left">DEPARTMENT</th>
                    <th className="p-3 text-left">TC ISSUE DATE</th>
                  </tr>
                </thead>

                {/* BODY */}
                <tbody className="text-sm text-neutral-700 bg-white">
                  {tcData.map((item) => (
                    <tr key={item.sno} className="border-t">
                      <td className="p-3">{item.sno}</td>
                      <td className="p-3 font-medium">{item.dept}</td>
                      <td className="p-3">{item.date}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </AnimatedSection>

          {/* ✅ EXISTING CIRCULAR LIST */}
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
                      <a 
                        href={`/pdfs/notices/${c.file}`} 
                        download 
                        className="flex items-center gap-1.5 px-4 py-2 bg-primary-800 text-white text-xs font-bold rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="px-3 py-1.5 bg-neutral-100 text-neutral-400 text-xs font-semibold rounded-lg whitespace-nowrap">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-16 bg-white rounded-2xl border border-neutral-100">
                <FaBell className="text-4xl text-neutral-200 mx-auto mb-3" />
                <p className="text-neutral-400 text-sm">
                  No circulars or notices posted yet. Check back soon.
                </p>
              </div>
            </AnimatedSection>
          )}

        </div>
      </section>
    </>
  );
}