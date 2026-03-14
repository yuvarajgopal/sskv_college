import { FaFirstAid, FaHeart, FaHandsHelping, FaAward } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const coordinator = { name: 'Ms. A. Ezhilarasi', qualification: 'M.Sc., M.Phil., B.Ed., Assistant Professor', dept: 'Department of Mathematics' };

const activities = [
  { icon: FaFirstAid,     title: 'First Aid Training',      desc: 'Students receive training in basic first aid, emergency response, and life-saving techniques.' },
  { icon: FaHeart,        title: 'Blood Donation Camps',     desc: 'Organizing voluntary blood donation drives to support hospitals and save lives in the community.' },
  { icon: FaHandsHelping, title: 'Community Outreach',       desc: 'Health awareness campaigns, visits to old age homes, orphanages, and rural health education.' },
  { icon: FaAward,        title: 'YRC Competitions',         desc: 'Participation in inter-college and university-level Youth Red Cross competitions and events.' },
];

export default function YrcPage() {
  return (
    <>
      <Hero
        title="Youth Red Cross (YRC)"
        subtitle="Compassion in action — humanizing the world through service and care"
        height="medium"
        breadcrumb="Student Life › YRC"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Youth Red Cross Unit" subtitle="A unit dedicated to humanitarian service and health awareness" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <a.icon className="text-red-500 text-base" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-sm mb-1">{a.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <FaFirstAid className="text-2xl text-red-400" />
              </div>
              <div>
                <p className="text-accent-400 text-xs font-bold uppercase tracking-wide mb-0.5">YRC Coordinator</p>
                <h3 className="text-base font-bold font-heading">{coordinator.name}</h3>
                <p className="text-white/60 text-xs mt-0.5">{coordinator.qualification}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Care. Serve. Heal." subtitle="The Youth Red Cross at SSKV College instils the values of humanity, compassion, and service." />
    </>
  );
}
