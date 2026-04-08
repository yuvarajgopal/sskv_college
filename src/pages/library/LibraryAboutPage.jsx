import { FaBullseye, FaEye, FaRocket, FaCheckCircle, FaQuoteLeft, FaBook } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const motto = [
  'To facilitate and disseminate information and knowledge',
  'To help faculty and students identify and locate books and journals',
  'To liaise with book sellers and publishers to maximize economic advantage',
  'To popularize reading and make books more accessible',
];

const objectives = [
  { title: 'Information Access', detail: 'Provide seamless access to relevant information resources, including books, journals etc.' },
  { title: 'Literacy Promotion', detail: 'Encourage reading and literacy among students.' },
  { title: 'Research Assistance', detail: 'Offer guidance and support for students and faculty in finding and using information resources.' },
];

const galleryImages = [
  '/images/academics/library.jpg',
];

export default function LibraryAboutPage() {
  return (
    <>
      <Hero
        title="Library"
        subtitle="A gateway to knowledge — supporting academic excellence at SSKV College"
        height="medium"
        breadcrumb="Academics › Library › About"
      />

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Library" />
          <AnimatedSection>
            <div className="bg-primary-50 border-l-4 border-primary-700 rounded-r-xl p-6 mb-8">
              <FaQuoteLeft className="text-primary-300 text-2xl mb-3" />
              <p className="text-neutral-700 leading-relaxed italic">
                A College's attitude toward its library reflects its approach to education. How wonderful it would be if we were all like Prospero, able to view our library as our personal dukedom.
              </p>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Our library, currently home to 10,600 books, is steadily growing. However, what truly matters is not just the number of books, but how many are in circulation and how often students read them. The number of books should also be considered in relation to the total student population.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              With 1,400 students, we recognize the need to expand our collection, but our primary focus is on encouraging students to read. In today's world, more than ever, reading empowers students with knowledge — knowledge that is truly invaluable. We have succeeded in fostering an appreciation for reading among our students, and our vision of reaching 20,000 books in the library will soon be realized.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-12">
              {[
                { label: 'Books', value: '10,600+', icon: FaBook },
                { label: 'Students Served', value: '1,400+', icon: FaCheckCircle },
              ].map((s, i) => (
                <div key={i} className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-center text-white">
                  <s.icon className="text-2xl text-accent-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold font-heading">{s.value}</p>
                  <p className="text-white/60 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MOTTO ─────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Motto" />
          <div className="space-y-3">
            {motto.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-neutral-100">
                  <FaBullseye className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-neutral-700 leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ──────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white h-full">
                <FaEye className="text-3xl text-accent-400 mb-4" />
                <h3 className="font-heading font-bold text-lg mb-3">Vision</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  To be a vital and trusted partner in learning, supporting the academic pursuits of our students and faculty by providing access to relevant information and fostering a love for reading and learning.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-primary-800 to-primary-700 rounded-2xl p-8 text-white h-full">
                <FaRocket className="text-3xl text-accent-400 mb-4" />
                <h3 className="font-heading font-bold text-lg mb-3">Mission</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  To provide access to a vast collection of information resources, promoting literacy, reading, and lifelong learning to meet diverse academic needs, while creating a welcoming and inclusive environment for students and faculty.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Objectives" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold font-heading mb-4">{i + 1}</div>
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{obj.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{obj.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading title="Gallery" />
          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-md border border-neutral-100 aspect-[4/3]">
                  <img src={src} alt={`Library ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="Explore. Learn. Grow."
        subtitle="Visit the SSKV College Library and unlock a world of knowledge."
      />
    </>
  );
}
