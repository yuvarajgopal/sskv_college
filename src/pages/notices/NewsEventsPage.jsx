import { FaStar, FaCalendarAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { images } from '../../data/media';

// ── Add news & events here: { title, date, category, desc } ─────────────────
const items = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function NewsEventsPage() {
  return (
    <>
      <Hero title="News, Events & Achievements" subtitle="Celebrating milestones, events, and accomplishments at SSKV College" height="medium" breadcrumb="Notices › News & Events" bannerImage={images.about.banner} />
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-3xl">
          <SectionHeading title="News & Recent Achievements" />
          {items.length > 0 ? (
            <div className="space-y-4">
              {items.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-accent-50 text-accent-700 text-xs font-bold rounded-full">{item.category}</span>
                      <span className="text-neutral-400 text-xs flex items-center gap-1"><FaCalendarAlt className="text-[10px]" /> {item.date}</span>
                    </div>
                    <h3 className="font-bold text-primary-800 font-heading text-base mb-1">{item.title}</h3>
                    {item.desc && <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <div className="text-center py-16 bg-white rounded-2xl border border-neutral-100">
                <FaStar className="text-4xl text-neutral-200 mx-auto mb-3" />
                <p className="text-neutral-400 text-sm">News and event updates will be posted here.</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
