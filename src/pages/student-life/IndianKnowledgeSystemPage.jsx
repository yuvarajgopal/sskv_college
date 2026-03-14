import { FaOm, FaLeaf, FaBook, FaStar } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const pillars = [
  { icon: FaBook,  title: 'Classical Literature',   desc: 'Study of Tamil Sangam literature, Sanskrit texts, and other classical works that form the foundation of Indian knowledge tradition.' },
  { icon: FaOm,    title: 'Philosophy & Ethics',     desc: 'Exposure to Indian philosophical schools, ethical frameworks, and value systems rooted in ancient wisdom.' },
  { icon: FaLeaf,  title: 'Traditional Sciences',    desc: 'Introduction to traditional Indian sciences including Ayurveda, mathematics (zero, infinity), astronomy, and architecture.' },
  { icon: FaStar,  title: 'Cultural Heritage',       desc: 'Appreciation of India\'s diverse arts, music, dance, and cultural traditions as living knowledge systems.' },
];

export default function IndianKnowledgeSystemPage() {
  return (
    <>
      <Hero
        title="Indian Knowledge System"
        subtitle="Reconnecting with India's rich intellectual and cultural heritage"
        height="medium"
        breadcrumb="Student Life › Indian Knowledge System"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Indian Knowledge System (IKS)" subtitle="As per the National Education Policy 2020 framework" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
              In alignment with the National Education Policy 2020, SSKV College integrates the Indian Knowledge System into academic life — fostering pride in India's intellectual heritage while building a global outlook rooted in traditional wisdom.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 h-full flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <p.icon className="text-amber-600 text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 font-heading text-base mb-1">{p.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Rooted in Tradition. Ready for Tomorrow." subtitle="IKS at SSKV College bridges ancient wisdom with modern education." />
    </>
  );
}
