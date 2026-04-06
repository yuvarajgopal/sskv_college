import { FaSyncAlt, FaHandsHelping, FaGlobe, FaHeart } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaHandsHelping, title: 'Community Service', desc: 'Regular community outreach programmes including health camps, donation drives, and village adoption initiatives.' },
  { icon: FaGlobe, title: 'Leadership Development', desc: 'Students develop leadership and organisational skills through planning and executing service projects.' },
  { icon: FaHeart, title: 'Social Awareness', desc: 'Awareness campaigns on health, hygiene, literacy, and social responsibility in collaboration with Rotary International.' },
  { icon: FaSyncAlt, title: 'Networking & Fellowship', desc: 'Opportunities to interact with Rotary members, professionals, and community leaders for personal growth.' },
];

export default function RotaryClubPage() {
  return (
    <>
      <Hero title="Rotary Club" subtitle="Community service, leadership, and social outreach" height="medium" breadcrumb="Activities › Clubs › Rotary Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Rotary Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Rotary Club at SSKV College operates in partnership with Rotary International, focusing on community service, leadership development, and social outreach. Members participate in service projects that make a real difference in local communities while developing valuable life skills.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Rotary Club" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <a.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{a.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Service Above Self" subtitle="Join the Rotary Club and make a positive impact in communities." />
    </>
  );
}
