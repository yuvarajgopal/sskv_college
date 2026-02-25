import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaHandshake, FaStar, FaArrowRight, FaUserTie } from 'react-icons/fa';
import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import Card from '../components/shared/Card';
import Marquee from '../components/shared/Marquee';
import StatsBar from '../components/sections/StatsBar';
import DepartmentGrid from '../components/sections/DepartmentGrid';
import CTABanner from '../components/sections/CTABanner';
import VideoEmbed from '../components/sections/VideoEmbed';
import HeroCarousel from '../components/sections/HeroCarousel';
import NoticeBoard from '../components/sections/NoticeBoard';
import QuickLinks from '../components/sections/QuickLinks';
import { events } from '../data/events';
import { videos, images } from '../data/media';

const features = [
  {
    icon: FaGraduationCap,
    title: 'Quality Education',
    description: 'Affiliated to University of Madras with UGC-recognized programs following CBCS curriculum.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Experienced Faculty',
    description: '70+ dedicated faculty members with extensive academic and industry experience.',
  },
  {
    icon: FaHandshake,
    title: 'Industry Connections',
    description: '5 active MOUs with industry partners ensuring real-world exposure and placement opportunities.',
  },
  {
    icon: FaStar,
    title: 'Holistic Development',
    description: 'NCC, NSS, sports, cultural clubs, and value-added courses for all-round personality growth.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Marquee ticker */}
      <Marquee items={events.slice(0, 5)} />

      {/* 3. Welcome / About section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
                Welcome to SSKV
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-800 mb-6">
                Shaping Future Leaders Since Inception
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                SSKV College of Arts and Science for Women, located in the historic city of Kanchipuram,
                is dedicated to providing quality higher education for women. Affiliated to the prestigious
                University of Madras, we offer a diverse range of undergraduate programs across Arts,
                Science, Commerce, and Professional streams.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                With a commitment to academic excellence, holistic development, and women&apos;s empowerment,
                our institution nurtures students to become confident, skilled, and socially responsible citizens.
              </p>
              <Button variant="primary" href="/about" icon={FaArrowRight}>
                Learn More About Us
              </Button>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={images.home.welcomeSection}
                    alt="SSKV College Campus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-transparent flex items-end">
                    <div className="text-center text-white p-8 w-full">
                      <FaGraduationCap className="text-6xl text-accent-400 mx-auto mb-4" />
                      <p className="text-2xl font-heading font-bold">5 Institutions</p>
                      <p className="text-white/60 mt-2">Under One Trusted Management</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-400/20 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. Stats Bar */}
      <StatsBar />

      {/* 5. Notice Board */}
      <NoticeBoard />

      {/* 6. Programs section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Academic Programs"
            subtitle="Choose from 11 undergraduate programs designed to prepare you for a successful career"
          />
          <DepartmentGrid limit={8} />
          <div className="text-center mt-10">
            <Button variant="outline-dark" href="/academics" icon={FaArrowRight}>
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Principal's Message */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <AnimatedSection direction="left" className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent-400 shadow-xl bg-primary-100 flex items-center justify-center">
                  <FaUserTie className="text-7xl text-primary-300" />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent-400 text-primary-900 text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow">
                  Principal
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="lg:col-span-2">
              <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
                From the Principal&apos;s Desk
              </span>
              <blockquote className="text-2xl md:text-3xl font-heading font-semibold text-primary-800 mb-6 leading-snug italic">
                &ldquo;Education is not the filling of a pail, but the lighting of a fire.&rdquo;
              </blockquote>
              <p className="text-neutral-600 leading-relaxed mb-4">
                At SSKV College, we believe in nurturing not just academic brilliance but also character,
                creativity, and compassion. Our dedicated faculty and vibrant campus environment ensure
                that every student reaches her fullest potential.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We remain committed to the vision of empowering women through holistic, value-based education
                that prepares them for the challenges of a dynamic world.
              </p>
              <div>
                <p className="font-heading font-bold text-primary-800">Dr. [Name]</p>
                <p className="text-neutral-500 text-sm">Principal, SSKV College of Arts & Science for Women</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 8. Why Choose SSKV */}
      <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Why Choose SSKV"
            subtitle="Discover what makes us a preferred choice for women's higher education"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <Card
                  variant="feature"
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Quick Links — external govt/UGC links */}
      <QuickLinks />

      {/* 10. Campus Life Video */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading
            title="Campus Life"
            subtitle="Take a glimpse into the vibrant life at SSKV College"
          />
          <VideoEmbed
            videoId={videos.campusLife.id}
            title={videos.campusLife.title}
          />
        </div>
      </section>

      {/* 11. CTA Banner */}
      <CTABanner />
    </>
  );
}
