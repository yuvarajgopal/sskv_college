import { FaBook, FaPen, FaMicrophone, FaFeatherAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaPen, title: 'Creative Writing', desc: 'Essay writing, poetry composition, and short story competitions that nurture literary talents and creative expression.' },
  { icon: FaMicrophone, title: 'Elocution & Debates', desc: 'Public speaking events, debates, and extempore sessions that build confidence and communication skills.' },
  { icon: FaBook, title: 'Book Reading Programmes', desc: 'Book reviews, reading circles, and literary discussions that promote a culture of reading among students.' },
  { icon: FaFeatherAlt, title: 'Literary Events', desc: 'Organising literary festivals, poetry recitals, and storytelling sessions during college events and special occasions.' },
];

export default function LiteraryClubPage() {
  return (
    <>
      <Hero title="Literary Club" subtitle="Promoting reading, writing, elocution, and creative expression" height="medium" breadcrumb="Activities › Clubs › Literary Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Literary Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Literary Club at SSKV College fosters a love for literature, creative writing, and public speaking among students. Through various activities like essay competitions, debates, poetry recitals, and book reading programmes, the club helps students develop strong communication skills and literary appreciation.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Literary Club" />
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
      <CTABanner title="Words Have Power" subtitle="Join the Literary Club and explore the world of literature and creative expression." />
    </>
  );
}
