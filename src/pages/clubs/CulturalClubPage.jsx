import { FaPalette, FaMusic, FaTheaterMasks, FaAward } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaMusic, title: 'Music & Dance Performances', desc: 'Organising classical, folk, and contemporary music and dance events during college celebrations and festivals.' },
  { icon: FaTheaterMasks, title: 'Drama & Theatre', desc: 'Skits, one-act plays, and mime performances that showcase students\' dramatic talents and social awareness.' },
  { icon: FaAward, title: 'Inter-College Competitions', desc: 'Students represent SSKV in cultural competitions, winning prizes and bringing laurels to the institution.' },
  { icon: FaPalette, title: 'Festival Celebrations', desc: 'Organising Pongal, Navaratri, Margazhi Peruvizha, and other cultural festivals with traditional performances.' },
];

export default function CulturalClubPage() {
  return (
    <>
      <Hero title="Cultural Club" subtitle="Celebrating arts, dance, music, and cultural expression" height="medium" breadcrumb="Activities › Clubs › Cultural Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Cultural Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Cultural Club at SSKV College is a vibrant platform for students to explore and express their artistic talents. The club organises cultural events, festival celebrations, and inter-college competitions, providing students with opportunities to showcase their skills in music, dance, drama, and traditional arts.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Cultural Club" />
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
      <CTABanner title="Express Yourself" subtitle="Join the Cultural Club and showcase your artistic talents." />
    </>
  );
}
