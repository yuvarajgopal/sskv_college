import { FaMusic, FaPaintBrush, FaPalette, FaUsers } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const highlights = [
  { icon: FaMusic, title: 'Music Training', desc: 'Students learn classical and folk music forms, devotional singing, and instrumental basics as part of the value-added curriculum.' },
  { icon: FaPaintBrush, title: 'Arts & Crafts', desc: 'Hands-on training in painting, drawing, rangoli, and various traditional and modern art forms to nurture creativity.' },
  { icon: FaPalette, title: 'Cultural Expression', desc: 'Opportunities to perform and showcase talents during college events, inter-college competitions, and cultural festivals.' },
  { icon: FaUsers, title: 'Holistic Development', desc: 'The programme fosters teamwork, creativity, and cultural appreciation, complementing academic learning with artistic growth.' },
];

export default function MusicArtsPage() {
  return (
    <>
      <Hero
        title="Music and Arts"
        subtitle="Value-Added Course — Nurturing creativity and cultural expression"
        height="medium"
        breadcrumb="Student Life › Value-Added Courses › Music and Arts"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Music and Arts Programme" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The Music and Arts value-added course at SSKV College is designed to nurture the creative talents of students beyond their regular academic curriculum. This programme offers structured training in music, painting, drawing, and various art forms, providing students with a well-rounded educational experience.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Students enrolled in this course get opportunities to perform during college events such as Culturals, Pongal celebrations, Navaratri festivals, and inter-college competitions. The programme is guided by experienced instructors who help students explore and refine their artistic abilities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Programme Highlights" subtitle="What students experience in the Music and Arts course" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {highlights.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <item.icon className="text-3xl text-primary-700 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Unleash Your Creativity" subtitle="Join the Music and Arts programme and discover your artistic potential at SSKV College." />
    </>
  );
}
