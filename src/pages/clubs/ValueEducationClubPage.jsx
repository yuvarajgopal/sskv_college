import { FaPray, FaHeart, FaHandsHelping, FaBookReader } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaHeart, title: 'Moral & Ethical Education', desc: 'Sessions on moral values, ethical conduct, honesty, integrity, and responsible citizenship.' },
  { icon: FaBookReader, title: 'Inspirational Talks', desc: 'Guest lectures by spiritual leaders, social workers, and motivational speakers on character building and values.' },
  { icon: FaHandsHelping, title: 'Service Learning', desc: 'Community service activities that instil compassion, empathy, and social responsibility among students.' },
  { icon: FaPray, title: 'Cultural & Spiritual Programmes', desc: 'Observance of national days, prayer sessions, and programmes that promote unity, peace, and cultural harmony.' },
];

export default function ValueEducationClubPage() {
  return (
    <>
      <Hero 
        title="Value Education Club" 
        subtitle="Instilling moral values, ethical conduct, and character development" 
        height="medium" 
        breadcrumb="Activities › Clubs › Value Education Club" 
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">

          <SectionHeading title="About the Value Education Club" />

          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Value Education Club at SSKV College is dedicated to nurturing morally responsible, socially committed, and ethically grounded individuals. 
              Through structured programmes, the club promotes integrity, empathy, and respect for human values, helping students grow into responsible citizens.
            </p>
          </AnimatedSection>

          {/* VISION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Vision</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                To nurture morally responsible, socially committed, and ethically grounded individuals who contribute positively to society through integrity, empathy, and respect for human values.
              </p>
            </div>
          </AnimatedSection>

          {/* MISSION */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Mission</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To promote ethical values, social responsibility, and character development among students.</li>
                <li>To create awareness of moral, cultural, and constitutional values through education and practice.</li>
                <li>To encourage students to lead meaningful lives guided by honesty, discipline, and service to society.</li>
              </ul>
            </div>
          </AnimatedSection>

          {/* OBJECTIVES */}
          <AnimatedSection>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 mb-10">
              <h3 className="font-bold text-primary-800 mb-2">Objectives</h3>
              <ul className="list-disc pl-5 text-sm text-neutral-600 space-y-2">
                <li>To promote ethical values and moral integrity among students.</li>
                <li>To develop social responsibility and commitment to community service.</li>
                <li>To create awareness about cultural, constitutional, and human values.</li>
                <li>To enhance students’ character, leadership skills, and emotional maturity.</li>
                <li>To encourage value-based living for holistic personality development.</li>
              </ul>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Value Education Club" />

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

      <CTABanner 
        title="Values Shape Lives" 
        subtitle="Building character, integrity, and social responsibility through value education." 
      />
    </>
  );
}