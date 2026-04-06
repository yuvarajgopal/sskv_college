import { FaShoppingCart, FaBalanceScale, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaBalanceScale, title: 'Consumer Rights Awareness', desc: 'Workshops and seminars on consumer protection laws, rights, and responsibilities under the Consumer Protection Act.' },
  { icon: FaShieldAlt, title: 'Safe Consumption Practices', desc: 'Awareness about product quality, food safety, expiry dates, and how to identify counterfeit products.' },
  { icon: FaFileAlt, title: 'Financial Literacy', desc: 'Sessions on budgeting, savings, digital payments, and understanding financial products for everyday decision-making.' },
  { icon: FaShoppingCart, title: 'Consumer Day Celebrations', desc: 'Special programmes on World Consumer Rights Day and National Consumer Day with competitions and awareness activities.' },
];

export default function ConsumerClubPage() {
  return (
    <>
      <Hero title="Consumer Club" subtitle="Awareness on consumer rights, ethical consumption, and financial literacy" height="medium" breadcrumb="Activities › Clubs › Consumer Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Consumer Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Consumer Club at SSKV College creates awareness about consumer rights, ethical consumption, and financial literacy among students. Through workshops, seminars, and special day celebrations, students learn about consumer protection laws, safe consumption practices, and responsible financial decision-making.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the Consumer Club" />
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
      <CTABanner title="Know Your Rights" subtitle="Be an informed consumer — knowledge is the best protection." />
    </>
  );
}
