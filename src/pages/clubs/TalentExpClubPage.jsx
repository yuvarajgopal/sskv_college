import { FaStar, FaMicrophone, FaPaintBrush, FaLightbulb } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaMicrophone, title: 'Talent Shows', desc: 'Regular talent showcases where students perform singing, dancing, mimicry, and other performing arts.' },
  { icon: FaPaintBrush, title: 'Creative Exhibitions', desc: 'Art exhibitions, craft fairs, and creative displays that highlight students\' diverse artistic abilities.' },
  { icon: FaLightbulb, title: 'Innovation Showcase', desc: 'Platform for students to present innovative ideas, projects, and entrepreneurial concepts.' },
  { icon: FaStar, title: 'Inter-College Representation', desc: 'Identifying and nurturing talented students to represent the college in various inter-college competitions.' },
];

export default function TalentExpClubPage() {
  return (
    <>
      <Hero title="Students Talent Exp Club" subtitle="Discovering and showcasing diverse student talents" height="medium" breadcrumb="Activities › Clubs › Students Talent Exp Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Students Talent Exp Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Students Talent Exploration Club at SSKV College provides a platform to discover and showcase the diverse talents of students in arts, performance, innovation, and creativity. The club organises talent shows, creative exhibitions, and inter-college competitions to help students express themselves and build confidence.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Talent Exp Club" />
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
      <CTABanner title="Discover Your Talent" subtitle="Every student has a unique talent — find yours at the Students Talent Exp Club." />
    </>
  );
}
