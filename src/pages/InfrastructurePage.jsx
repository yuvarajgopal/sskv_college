import { useState, useEffect } from 'react';
import { FaBuilding, FaDesktop, FaBook, FaUtensils, FaBus, FaMicrophone } from 'react-icons/fa'; 
import Hero from '../components/shared/Hero';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedSection from '../components/shared/AnimatedSection';
import CTABanner from '../components/sections/CTABanner';

const facilities = [
  { icon: FaDesktop, title: 'Computer Centre', desc: 'A large, well-equipped Computer Centre supporting all courses that require computer training and digital skills.' },
  { icon: FaBook, title: 'Library', desc: 'A growing library with over 10,600 books and a new dedicated building inaugurated in December 2022 with a lift facility.' },
  { icon: FaMicrophone, title: 'Auditoriums', desc: 'Two large, well-designed auditoriums providing space for lectures, cultural programmes, and academic events.' },
  { icon: FaUtensils, title: 'Canteen', desc: 'A hygienically maintained canteen serving food at near-subsidised rates for students coming from distant areas.' },
  { icon: FaBus, title: 'Transport', desc: 'A fleet of buses connecting the college to distant villages, ensuring timely and safe commute for students.' },
  { icon: FaBuilding, title: 'Campus — Kizhambi', desc: 'Located in a green, serene environment at Kizhambi, Krishnapuram Post, Kanchipuram — providing an ideal learning atmosphere.' },
];

// 🔹 IMAGE SLIDER DATA
const campusImages = [
  '/images/campus/campus_1.jpg',
  '/images/campus/campus_2.jpg',
  '/images/campus/campus_3.jpg',
];

export default function InfrastructurePage() {
  const [current, setCurrent] = useState(0);

  // 🔹 Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === campusImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Hero
        title="Infrastructure & Facilities"
        subtitle="A well-equipped campus designed to support excellence in education"
        height="medium"
        breadcrumb="Infrastructure › Facilities"
      />

      {/* EXISTING CONTENT */}
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

      {/* 🔥 NEW IMAGE SLIDER SECTION */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto max-w-5xl">
          <SectionHeading
            title="Campus Glimpses"
            subtitle="A visual tour of our vibrant campus environment"
          />

          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              
              {/* Image */}
              <img
                src={campusImages[current]}
                alt="Campus"
                className="w-full h-[350px] object-cover transition-all duration-700"
              />

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {campusImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      current === i ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABanner
        title="A Campus Built for Excellence."
        subtitle="SSKV College provides the infrastructure needed for students to learn, grow, and thrive."
      />
    </>
  );
}