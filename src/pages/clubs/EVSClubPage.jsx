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
              The EVS (Environmental and Voluntary Service) Club in college focuses on raising awareness about environmental issues among students. It organizes activities like clean-up drives, tree plantation events, and recycling campaigns to promote eco-friendly habits. The club also conducts workshops and seminars to educate students about sustainability and conservation practices. Members actively participate in local environmental projects and volunteer for community service initiatives. The EVS Club encourages students to adopt sustainable lifestyles and reduce their carbon footprint. It provides a platform for students to collaborate on innovative ideas for environmental preservation. Through its efforts, the club aims to create a greener and healthier campus environment. It also promotes the importance of biodiversity and natural resource management. The club often partners with NGOs and government agencies for larger environmental campaigns. Overall, the EVS Club plays a crucial role in fostering environmental responsibility among the college community.
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
