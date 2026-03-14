import { FaBullhorn } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';

// ── Add announcements here: { title, date, content } ────────────────────────
const announcements = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function AnnouncementsPage() {
  return (
    <>
      <Hero title="Announcements" subtitle="Latest announcements from SSKV College" height="medium" breadcrumb="Notices › Announcements" />
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-3xl">
          <SectionHeading title="Announcements" />
          {announcements.length > 0 ? (
            <div className="space-y-4">
              {announcements.map((a, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                        <FaBullhorn className="text-accent-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-800 font-heading text-sm">{a.title}</h3>
                        <p className="text-neutral-400 text-xs mt-0.5">{a.date}</p>
                        {a.content && <p className="text-sm text-neutral-600 mt-2 leading-relaxed">{a.content}</p>}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-16 bg-white rounded-2xl border border-neutral-100">
                <FaBullhorn className="text-4xl text-neutral-200 mx-auto mb-3" />
                <p className="text-neutral-400 text-sm">No announcements at this time. Check back soon.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
