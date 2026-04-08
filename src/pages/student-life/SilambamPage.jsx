import { FaFistRaised, FaShieldAlt, FaHeartbeat, FaTrophy } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const highlights = [
  { icon: FaFistRaised, title: 'Traditional Martial Art', desc: 'Silambam is an ancient Tamil martial art involving the use of bamboo staffs, swords, and other traditional weapons in disciplined combat techniques.' },
  { icon: FaShieldAlt, title: 'Self-Defence Skills', desc: 'Students learn practical self-defence techniques that build confidence and personal safety awareness.' },
  { icon: FaHeartbeat, title: 'Physical Fitness', desc: 'Regular practice improves coordination, agility, strength, and overall physical health.' },
  { icon: FaTrophy, title: 'Competitions & Events', desc: 'Students participate in inter-college and state-level Silambam competitions, earning recognition and awards.' },
];

export default function SilambamPage() {
  return (
    <>
      <Hero
        title="Silambam"
        subtitle="Value-Added Course — Preserving Tamil heritage through traditional martial arts"
        height="medium"
        breadcrumb="Student Life › Value-Added Courses › Silambam"
      />

           <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="Silambam Training Programme" />
          <AnimatedSection>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">Vision</h3>
            <p className="text-neutral-600 leading-relaxed mb-8">
              To inspire and empower students to master Silambam, preserving Tamil heritage while fostering strength, discipline, and confidence. The vision is to see young learners grow into skilled, respectful, and resilient individuals who carry forward this ancient martial art with pride and honor.
            </p>
<h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">Mision</h3>
            <p className="text-neutral-600 leading-relaxed mb-8">
              To preserve and promote the ancient Tamil martial art of Silambam by training students in its techniques, discipline, and cultural values. The mission is to build physical fitness, mental focus, self-defense skills, and confidence while connecting youth to their heritage. It also aims to instill respect, perseverance, and teamwork through regular practice and competitions.
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 font-heading mb-5">Objectives</h3>
            <p className="text-neutral-600 leading-relaxed mb-8">
              To teach self-defense skills and build confidence.<br></br>
              To improve physical fitness, flexibility, and coordination.<br></br>
To preserve and promote Tamil cultural heritage.<br></br>
To instill discipline, focus, and mental strength.<br></br>
To encourage teamwork, respect, and leadership qualities.<br></br>
To prepare students for competitions and demonstrations at local, state, and national levels.<br></br>
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Programme Highlights" subtitle="Benefits of learning Silambam at SSKV College" />
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

      <CTABanner title="Honour Our Heritage" subtitle="Learn the ancient art of Silambam and build strength, discipline, and cultural pride." />
    </>
  );
}
