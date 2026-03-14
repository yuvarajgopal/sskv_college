import { FaMusic, FaMicrophone, FaTrophy, FaStar } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const highlights = [
  { icon: FaMusic,      title: 'Classical Arts',       desc: 'Carnatic music, classical dance, and folk arts nurtured through dedicated performances and competitions.' },
  { icon: FaMicrophone, title: 'Cultural Events',       desc: 'Annual cultural festivals, inter-college competitions, talent shows, and department cultural associations.' },
  { icon: FaTrophy,     title: 'Competitions',          desc: 'Students participate in intra and inter-collegiate cultural competitions winning prizes and recognition.' },
  { icon: FaStar,       title: 'Carnatic Music Assoc.', desc: 'Dedicated Carnatic Music Association since October 2012 with Carnatic Music as an add-on course.' },
];

export default function CulturalsPage() {
  return (
    <>
      <Hero
        title="Culturals"
        subtitle="Celebrating creativity, tradition, and talent at SSKV College"
        height="medium"
        breadcrumb="Student Life › Culturals"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Cultural Activities" subtitle="A vibrant platform for students to showcase their artistic talents" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-neutral-50 rounded-2xl p-6 border border-neutral-100 h-full">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <h.icon className="text-primary-700 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-base mb-1">{h.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 bg-primary-50 rounded-2xl p-6 border border-primary-100 text-center">
              <p className="text-neutral-500 text-sm">Detailed cultural event reports and gallery are being updated. Check back soon.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner title="Express. Perform. Shine." subtitle="SSKV College provides a vibrant stage for every student's artistic expression." />
    </>
  );
}
