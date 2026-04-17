import { useState, useEffect } from 'react';
import { FaMusic, FaMicrophone, FaTrophy, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const highlights = [
  { icon: FaMusic, title: 'Classical Arts', desc: 'Carnatic music, classical dance, and folk arts nurtured through dedicated performances and competitions.' },
  { icon: FaMicrophone, title: 'Cultural Events', desc: 'Annual cultural festivals, inter-college competitions, talent shows, and department cultural associations.' },
  { icon: FaTrophy, title: 'Competitions', desc: 'Students participate in intra and inter-collegiate cultural competitions winning prizes and recognition.' },
  { icon: FaStar, title: 'Carnatic Music Assoc.', desc: 'Dedicated Carnatic Music Association since October 2012 with Carnatic Music as an add-on course.' },
];

const images = [
  'images/culturals/cult_img_1.JPG',
  'images/culturals/cult_img_2.JPG',
  'images/culturals/cult_img_3.JPG',
  'images/culturals/cult_img_4.JPG',
  'images/culturals/cult_img_5.JPG',
  'images/culturals/cult_img_6.JPG',
  'images/culturals/cult_img_7.JPG',
  'images/culturals/cult_img_4.JPG',
];

export default function CulturalsPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

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

          <SectionHeading
            title="Cultural Activities"
            subtitle="A vibrant platform for students to showcase their artistic talents"
          />

          {/* ✅ CONTENT BLOCK */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 space-y-6">

              <div>
                <h3 className="font-bold text-primary-800 mb-2">About the Cultural Fest</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  The annual cultural celebration at SSKV College of Arts and Science for Women is one of the most anticipated events of the academic year. It promotes creativity, teamwork, leadership, and cultural appreciation among students.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-primary-800 mb-2">Key Activities</h3>
                <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-1">
                  <li>Music, dance, and drama performances</li>
                  <li>Literary and fine arts competitions</li>
                  <li>Fashion shows and cultural exhibitions</li>
                  <li>Fun events and interactive activities</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-primary-800 mb-2">Impact on Students</h3>
                <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-1">
                  <li>Builds confidence and stage presence</li>
                  <li>Enhances teamwork and leadership</li>
                  <li>Encourages creativity and innovation</li>
                  <li>Promotes cultural awareness</li>
                </ul>
              </div>

            </div>
          </AnimatedSection>

          {/* HIGHLIGHTS */}
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

          <div className="mt-10 space-y-6">

            {/* EXISTING CARDS */}
            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-bold text-primary-800 mb-2">Annual Cultural Celebration</h3>
                <p className="text-sm text-neutral-600">
                  The annual cultural celebration at SSKV College reflects the institution’s commitment to artistic excellence, teamwork, and cultural diversity.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-bold text-primary-800 mb-2">Impact on Students</h3>
                <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                  <li>Builds confidence and stage presence</li>
                  <li>Enhances teamwork and communication skills</li>
                  <li>Develops leadership and responsibility</li>
                  <li>Encourages creativity and cultural awareness</li>
                </ul>
              </div>
            </AnimatedSection>

            {/* ✅ IMAGE SLIDER RESTORED */}
            <AnimatedSection>
              <div className="relative mt-6">

                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={images[current]}
                    alt="Cultural Event"
                    className="w-full h-[600px] object-cover transition-all duration-700"
                  />
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                >
                  <FaChevronLeft />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
                >
                  <FaChevronRight />
                </button>

                {/* ✅ FIXED BUG HERE */}
                <div className="flex justify-center mt-3 gap-2">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                        current === index ? 'bg-primary-700' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

              </div>
            </AnimatedSection>

          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-8 bg-primary-50 rounded-2xl p-6 border border-primary-100 text-center">
              <p className="text-neutral-500 text-sm">
                Detailed cultural event reports and gallery are being updated. Check back soon.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner
        title="Express. Perform. Shine."
        subtitle="SSKV College provides a vibrant stage for every student's artistic expression."
      />
    </>
  );
}