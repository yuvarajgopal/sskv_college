import { FaBus, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

// ── Add bus routes here ────────────────────────────────────────────────────────
const routes = [];
// ─────────────────────────────────────────────────────────────────────────────

export default function TransportPage() {
  return (
    <>
      <Hero
        title="College Transport"
        subtitle="Reliable, safe, and affordable transport connecting students to SSKV College"
        height="medium"
        breadcrumb="Infrastructure › College Transport"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Transport Facilities" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl">
              SSKV College operates a fleet of buses to ensure students from distant villages and towns can commute safely and on time. The management runs a large number of buses, enabling students from various parts of Kanchipuram district to access quality education without the burden of transportation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { icon: FaBus,           label: 'College Buses',       desc: 'Multiple buses covering Kanchipuram and surrounding areas' },
              { icon: FaMapMarkerAlt,  label: 'Wide Coverage',       desc: 'Routes connecting distant villages and rural areas' },
              { icon: FaClock,         label: 'Timely Service',       desc: 'Scheduled to match Shift I and Shift II college timings' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-primary-50 rounded-2xl p-5 text-center border border-primary-100">
                  <item.icon className="text-primary-700 text-2xl mx-auto mb-2" />
                  <p className="font-bold text-primary-800 font-heading text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {routes.length > 0 ? (
            <>
              <SectionHeading title="Bus Routes" />
              <div className="space-y-3">
                {routes.map((r, i) => (
                  <AnimatedSection key={i} delay={i * 0.05}>
                    <div className="flex items-center gap-4 bg-neutral-50 rounded-xl px-5 py-4 border border-neutral-100">
                      <FaBus className="text-primary-600 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-semibold text-primary-800 text-sm">{r.route}</p>
                        {r.stops && <p className="text-neutral-400 text-xs mt-0.5">{r.stops}</p>}
                      </div>
                      {r.timing && <span className="text-xs font-semibold text-neutral-500 whitespace-nowrap">{r.timing}</span>}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </>
          ) : (
            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 text-center">
                <p className="text-neutral-400 text-sm">Detailed bus route information will be published here. Contact the college office for transport enquiries.</p>
                <div className="flex items-center justify-center gap-2 mt-3 text-sm font-semibold text-primary-700">
                  <FaPhone className="text-xs" /> 27277880 / 27277900
                </div>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <CTABanner title="Travel Safe. Arrive on Time." subtitle="SSKV College transport ensures every student can access quality education, regardless of distance." />
    </>
  );
}
