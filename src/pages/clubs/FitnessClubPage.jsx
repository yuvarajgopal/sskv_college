import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaRunning } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaRunning, title: 'Fitness Sessions', desc: 'Regular yoga, aerobics, and physical fitness sessions to promote an active and healthy lifestyle among students.' },
  { icon: FaAppleAlt, title: 'Healthy Food Awareness', desc: 'Under the theme "Healthy Youth, Healthy India," students are sensitised to the importance of cereals and millets.' },
  { icon: FaHeartbeat, title: 'Health Awareness Campaigns', desc: 'Awareness programmes on physical and mental health, stress management, and wellness practices.' },
  { icon: FaDumbbell, title: 'Millet Food Festival', desc: 'Students prepare healthy millet-based food items and sell them during Republic Day celebrations, combining health education with entrepreneurship.' },
];

export default function FitnessClubPage() {
  return (
    <>
      <Hero title="Fitness Club" subtitle="Encouraging physical fitness, wellness, and healthy lifestyle choices" height="medium" breadcrumb="Activities › Clubs › Fitness Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Fitness Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Fitness Club at SSKV College promotes the theme "Healthy Youth, Healthy India." The club encourages students to adopt healthy lifestyle practices through regular fitness sessions, health awareness campaigns, and nutritional education. Students are sensitised to the importance of cereals and millets, and as part of this initiative, they prepare healthy millet-based food during college celebrations.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Fitness Club" />
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
      <CTABanner title="Healthy Youth, Healthy India" subtitle="Stay active, eat well, and embrace a healthy lifestyle with the Fitness Club." />
    </>
  );
}
