import { FaBuilding, FaDesktop, FaBook, FaUtensils, FaBus, FaMicrophone } from 'react-icons/fa';
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const facilities = [
  { icon: FaDesktop,    title: 'Computer Centre',      desc: 'A large, well-equipped Computer Centre supporting all courses that require computer training and digital skills.' },
  { icon: FaBook,       title: 'Library',              desc: 'A growing library with over 10,600 books and a new dedicated building inaugurated in December 2022 with a lift facility.' },
  { icon: FaMicrophone, title: 'Auditoriums',           desc: 'Two large, well-designed auditoriums providing space for lectures, cultural programmes, and academic events.' },
  { icon: FaUtensils,   title: 'Canteen',               desc: 'A hygienically maintained canteen serving food at near-subsidised rates for students coming from distant areas.' },
  { icon: FaBus,        title: 'Transport',             desc: 'A fleet of buses connecting the college to distant villages, ensuring timely and safe commute for students.' },
  { icon: FaBuilding,   title: 'Campus — Kizhambi',    desc: 'Located in a green, serene environment at Kizhambi, Krishnapuram Post, Kanchipuram — providing an ideal learning atmosphere.' },
];

export default function InfrastructurePage() {
  return (
    <>
      <Hero
        title="Infrastructure & Facilities"
        subtitle="A well-equipped campus designed to support excellence in education"
        height="medium"
        breadcrumb="Infrastructure › Facilities"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Campus Infrastructure" subtitle="Modern facilities supporting holistic education at SSKV College" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 h-full flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <f.icon className="text-primary-700 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-sm mb-1 leading-snug">{f.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="A Campus Built for Excellence." subtitle="SSKV College provides the infrastructure needed for students to learn, grow, and thrive." />
    </>
  );
}
