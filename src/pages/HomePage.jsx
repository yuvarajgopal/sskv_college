import { useEffect, useState } from 'react';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaHandshake,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';

import Button from '../components/shared/Button';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import Card from '../components/shared/Card';
import Marquee from '../components/shared/Marquee';
import StatsBar from '../components/sections/StatsBar';
import DepartmentGrid from '../components/sections/DepartmentGrid';
import CTABanner from '../components/sections/CTABanner';
import VideoEmbed from '../components/sections/VideoEmbed';
import EventsTimeline from '../components/sections/EventsTimeline';

import { events } from '../data/events';
import { videos, images } from '../data/media';

/* HERO IMAGES */
const heroImages = [
  '/images/home/home_1.jpg',
  '/images/home/home_2.jpg',
  '/images/home/home_3.jpg',
];

const features = [
  {
    icon: FaGraduationCap,
    title: 'Quality Education',
    description:
      'Affiliated to University of Madras with UGC-recognized programs following CBCS curriculum.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Experienced Faculty',
    description:
      '70+ dedicated faculty members with extensive academic and industry experience.',
  },
  {
    icon: FaHandshake,
    title: 'Industry Connections',
    description:
      '5 active MOUs with industry partners ensuring real-world exposure and placement opportunities.',
  },
  {
    icon: FaStar,
    title: 'Holistic Development',
    description:
      'NCC, NSS, sports, cultural clubs, and value-added courses for all-round personality growth.',
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  /* HERO AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  /* FIX NAVBAR COLOR ISSUE */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={heroImages[currentSlide]}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-primary-900/70 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SSKV College of Arts & Science for Women
          </h1>

          <p className="mb-6 text-lg">
            Empowering Women Through Quality Education — Affiliated to University of Madras, Kanchipuram
          </p>

          <div className="flex gap-4">
            <Button variant="gold" size="lg" href="/academics">
              Explore Programs
            </Button>
            <Button variant="outline" size="lg" href="/admissions">
              Apply Now
            </Button>
          </div>
        </div>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === i ? 'bg-accent-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <Marquee items={events.slice(0, 5)} />

      {/* ================= ABOUT ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-700 text-sm font-semibold rounded-full mb-4">
                Welcome to SSKV
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
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

            {/* IMAGE + OVERLAY */}
            <AnimatedSection direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images.home.welcomeSection}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY CONTENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-transparent to-transparent flex items-end">
                  <div className="text-center text-white p-6 w-full">
                    <FaGraduationCap className="text-5xl text-accent-400 mx-auto mb-3" />
                    <p className="text-xl font-bold">5 Institutions</p>
                    <p className="text-white/70">Under One Trusted Management</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ================= ACHIEVERS ================= */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Our Achievers" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl text-center shadow">
              <img src="/images/achiever/achiever_1.png" className="mx-auto mb-4 rounded-xl" />
              <h3 className="font-bold text-primary-800">University Rank Holder</h3>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow">
              <img src="/images/achiever/divine_award_1.jpg" className="mx-auto mb-4 rounded-xl" />
              <h3 className="font-bold text-primary-800">Placement Drive Record</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= UNNAT BHARAT ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="Unnat Bharat Abhiyan" />

          <div className="grid md:grid-cols-3 gap-6">
            
            <img src="" className="rounded-xl shadow" />
            <img src="/images/achiever/Unnat Bharat Abhiyan_1.png" className="rounded-xl shadow" />
            <img src="" className="rounded-xl shadow" />
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <StatsBar />

      {/* ================= PROGRAMS ================= */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Academic Programs" />
          <DepartmentGrid limit={8} />
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="Why Choose SSKV" light />

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card
                key={i}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <SectionHeading title="Campus Life" />
          <VideoEmbed videoId={videos.campusLife.id} />
        </div>
      </section>

      {/* ================= EVENTS ================= */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Upcoming Events" />
          <EventsTimeline limit={5} />
        </div>
      </section>

      <CTABanner />
    </>
  );
}