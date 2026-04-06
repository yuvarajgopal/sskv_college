import { FaHandshake, FaChalkboardTeacher, FaSeedling, FaBriefcase } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const highlights = [
  { icon: FaHandshake, title: 'Industry Partnership', desc: 'Hand in Hand Academy is a renowned training and capacity-building organisation with extensive experience in skill development across India.' },
  { icon: FaChalkboardTeacher, title: 'Professional Training', desc: 'Expert-led sessions covering entrepreneurship, digital literacy, financial literacy, and vocational skills.' },
  { icon: FaSeedling, title: 'Entrepreneurship Focus', desc: 'Special emphasis on developing entrepreneurial mindset, business planning, and self-employment opportunities for women.' },
  { icon: FaBriefcase, title: 'Employability Enhancement', desc: 'Training on workplace readiness, communication skills, customer service, and professional development.' },
];

export default function HandInHandPage() {
  return (
    <>
      <Hero
        title="Training Session by Hand in Hand Academy"
        subtitle="Professional skill development through industry-recognised training partners"
        height="medium"
        breadcrumb="Student Life › Skill Training › Hand in Hand Academy"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading title="About the Training" />
          <AnimatedSection>
            <p className="text-neutral-600 leading-relaxed mb-4">
              SSKV College collaborates with Hand in Hand Academy to provide professional training sessions for students. Hand in Hand is a well-established organisation known for its work in education, skill training, job creation, and women's empowerment across India.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              The training sessions focus on developing practical skills that complement classroom learning, including entrepreneurship development, digital skills, financial literacy, and workplace readiness. These sessions are designed to enhance the employability of students and encourage self-employment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom mx-auto">
          <SectionHeading title="Training Highlights" subtitle="Key areas covered in the Hand in Hand training sessions" />
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

      <CTABanner title="Skill Development for Women" subtitle="Hand in Hand Academy's training empowers SSKV students with real-world skills and entrepreneurial spirit." />
    </>
  );
}
