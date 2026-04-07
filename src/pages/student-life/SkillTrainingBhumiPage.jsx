import { FaLightbulb, FaUsers, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const highlights = [
  { icon: FaLightbulb, title: 'Life Skills Training', desc: 'Sessions on communication, leadership, teamwork, problem-solving, and time management to prepare students for professional life.' },
  { icon: FaChalkboardTeacher, title: 'Expert Facilitators', desc: 'Training delivered by experienced facilitators from Bhumi, a leading youth volunteer non-profit organisation in India.' },
  { icon: FaUsers, title: 'Interactive Workshops', desc: 'Hands-on workshops and group activities that build confidence, collaboration, and practical career skills.' },
  { icon: FaBriefcase, title: 'Career Readiness', desc: 'Focus on employability skills including resume building, interview preparation, and professional etiquette.' },
];

export default function SkillTrainingBhumiPage() {
  return (
    <>
      <Hero
        title="Skill Training Programme by Bhumi"
        subtitle="Empowering students with life skills and career readiness through expert-led training"
        height="medium"
        breadcrumb="Student Life › Skill Training › Bhumi"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Programme" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Inauguration of Skill Training and Job Readiness Programme conducted in association with "BHUMI" , 
              India's largest Independent Youth Volunteer Non- Profit Organisation.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              Dr. Reetha Dinesh, Senior Consultant Trainer, Ignite Skill-Ed, Bhumi, gave a special talk on "Youth Skill Upgradation."
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Programme Highlights" subtitle="What students gain from the Bhumi Skill Training Programme" />
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

      <CTABanner title="Build Skills for the Future" subtitle="Bhumi's training programmes equip SSKV students with the skills employers value most." />
    </>
  );
}
