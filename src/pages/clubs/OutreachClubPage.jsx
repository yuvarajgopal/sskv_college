import { FaUsers, FaHandsHelping, FaHeart, FaGlobe } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaHandsHelping, title: 'Community Service', desc: 'Organising service visits to orphanages, old age homes, and underprivileged communities.' },
  { icon: FaHeart, title: 'Donation Drives', desc: 'Collecting and distributing food, clothing, books, and essential supplies to those in need.' },
  { icon: FaGlobe, title: 'Social Awareness Campaigns', desc: 'Awareness programmes on social issues such as education for all, hygiene, and gender equality.' },
  { icon: FaUsers, title: 'Village Adoption', desc: 'Engagement with nearby villages for educational support, cleanliness drives, and community development initiatives.' },
];

export default function OutreachClubPage() {
  return (
    <>
      <Hero title="Student Outreach Club" subtitle="Engaging students in community outreach and social responsibility" height="medium" breadcrumb="Activities › Clubs › Student Outreach Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Student Outreach Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Student Outreach Club at SSKV College encourages students to engage in community outreach, social responsibility, and volunteer activities. Through service visits, donation drives, and awareness campaigns, students develop empathy, social consciousness, and a sense of responsibility towards society.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Student Outreach Club" />
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
      <CTABanner title="Reach Out, Make a Difference" subtitle="Join the Student Outreach Club and contribute to positive change in your community." />
    </>
  );
}
