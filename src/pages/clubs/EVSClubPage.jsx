import { FaLeaf, FaTree, FaRecycle, FaSeedling } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const activities = [
  { icon: FaTree, title: 'Tree Plantation Drives', desc: 'Regular tree planting initiatives on campus and in surrounding communities to increase green cover.' },
  { icon: FaRecycle, title: 'Waste Management Awareness', desc: 'Campaigns on waste segregation, recycling, and reducing plastic usage on campus.' },
  { icon: FaSeedling, title: 'Campus Garden Maintenance', desc: 'Students maintain garden spaces, growing fruits and vegetables as part of sustainable campus initiatives.' },
  { icon: FaLeaf, title: 'Environmental Awareness Programmes', desc: 'Workshops, seminars, and rallies on World Environment Day, Earth Day, and other environmental occasions.' },
];

export default function EVSClubPage() {
  return (
    <>
      <Hero title="EVS Club" subtitle="Environmental awareness and conservation initiatives" height="medium" breadcrumb="Activities › Clubs › EVS Club" />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the EVS Club" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The Environmental Science (EVS) Club at SSKV College promotes environmental awareness and conservation among students. The club organises tree plantation drives, waste management campaigns, and awareness programmes to foster a green and sustainable campus culture.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Activities" subtitle="Key initiatives of the EVS Club" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {activities.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md transition-shadow h-full">
                  <a.icon className="text-3xl text-green-600 mb-3" />
                  <h3 className="font-heading font-bold text-primary-800 mb-2">{a.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Go Green with EVS Club" subtitle="Join the movement towards a sustainable and eco-friendly campus." />
    </>
  );
}
