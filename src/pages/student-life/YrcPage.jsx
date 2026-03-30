import { useState, useEffect } from 'react';
import { FaFirstAid, FaHeart, FaHandsHelping, FaAward } from 'react-icons/fa';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const coordinator = { 
  name: 'Ms. A. Ezhilarasi', 
  qualification: 'M.Sc., M.Phil., B.Ed., Assistant Professor', 
  dept: 'Department of Mathematics' 
};

const activities = [
  { icon: FaFirstAid, title: 'First Aid Training', desc: 'Students receive training in basic first aid, emergency response, and life-saving techniques.' },
  { icon: FaHeart, title: 'Blood Donation Camps', desc: 'Organizing voluntary blood donation drives to support hospitals and save lives.' },
  { icon: FaHandsHelping, title: 'Community Outreach', desc: 'Health awareness campaigns and social service activities.' },
  { icon: FaAward, title: 'YRC Competitions', desc: 'Participation in inter-college and university-level events.' },
];

export default function YrcPage() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '../../../public/images/yrc1.jpg',
    '../../../public/images/yrc2.jpg',
    '../../../public/images/yrc3.jpg',
    '../../../public/images/yrc4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO SLIDER */}
      <div className="relative w-full h-[320px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((img, i) => (
            <img key={i} src={img} alt="" className="w-full h-full object-cover flex-shrink-0" />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-2xl md:text-3xl font-bold font-heading">
            Youth Red Cross (YRC)
          </h1>
          <p className="text-sm md:text-base mt-2 max-w-xl">
            Compassion in action — humanizing the world through service and care
          </p>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                currentSlide === i ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading 
            title="Youth Red Cross Unit" 
            subtitle="A unit dedicated to humanitarian service and health awareness" 
          />

          {/* Activities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <a.icon className="text-red-500 text-base" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-800 text-sm mb-1">{a.title}</h3>
                    <p className="text-xs text-neutral-600">{a.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mission / Vision / Objectives */}
          <div className="space-y-5 mb-8">

            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
                <p className="text-sm text-neutral-600">
                  To promote humanitarian values among youth by encouraging voluntary service and social responsibility.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
                <p className="text-sm text-neutral-600">
                  To build a compassionate and service-oriented generation committed to humanitarian values.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
                <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                  <li>Promote humanitarian service</li>
                  <li>Encourage health awareness</li>
                  <li>Develop leadership and responsibility</li>
                  <li>Support community service activities</li>
                </ul>
              </div>
            </AnimatedSection>

          </div>

          {/* 🔥 DOCX REPORT BUTTONS */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10 text-center">
              <h3 className="font-bold text-primary-800 mb-4">YRC Annual Reports</h3>
              <div className="flex flex-wrap justify-center gap-3">

                <a href="/docs/yrc-2022-2023.docx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  YRC Annual Report 2022–23
                </a>

                <a href="/docs/yrc-2023-2024.docx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  YRC Annual Report 2023–24
                </a>

                <a href="/docs/yrc-2024-2025.docx" target="_blank"
                  className="px-4 py-2 bg-primary-800 text-white rounded-lg text-sm">
                  YRC Annual Report 2024–25
                </a>

              </div>
            </div>
          </AnimatedSection>

          {/* Coordinator */}
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <FaFirstAid className="text-2xl text-red-400" />
              </div>
              <div>
                <p className="text-accent-400 text-xs font-bold">YRC Coordinator</p>
                <h3 className="text-base font-bold">{coordinator.name}</h3>
                <p className="text-white/60 text-xs">{coordinator.qualification}</p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <CTABanner 
        title="Care. Serve. Heal." 
        subtitle="The Youth Red Cross at SSKV College instils compassion and service." 
      />
    </>
  );
}