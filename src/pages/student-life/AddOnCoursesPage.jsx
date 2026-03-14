import { FaBookOpen, FaCalculator, FaLaptopCode, FaUsers } from 'react-icons/fa';
import Hero from '../../components/shared/Hero';
import SectionHeading from '../../components/shared/SectionHeading';
import AnimatedSection from '../../components/shared/AnimatedSection';
import CTABanner from '../../components/sections/CTABanner';

const courses = [
  {
    icon: FaUsers,
    title: 'Basics in Human Resource Development',
    short: 'BHRD',
    desc: 'Introduces students to foundational HR concepts including recruitment, training, performance management, and workplace dynamics — preparing them for corporate roles.',
    dept: 'Department of Business Administration',
    color: '#3498db',
  },
  {
    icon: FaCalculator,
    title: 'Mathematics for Logical Reasoning',
    short: 'MLR',
    desc: 'Strengthens analytical and problem-solving skills through logical reasoning, quantitative aptitude, and mathematical applications essential for competitive exams.',
    dept: 'Department of Mathematics',
    color: '#8e44ad',
  },
  {
    icon: FaLaptopCode,
    title: 'Web Designing',
    short: 'WD',
    desc: 'Equips students with practical skills in HTML, CSS, and web layout design to create professional websites and digital content for personal and professional use.',
    dept: 'Departments of Computer Science & Computer Applications',
    color: '#27ae60',
  },
];

export default function AddOnCoursesPage() {
  return (
    <>
      <Hero
        title="Add-On Courses"
        subtitle="Skill enhancement programmes beyond the regular curriculum at SSKV College"
        height="medium"
        breadcrumb="Student Life › Add-On Courses"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <SectionHeading
            title="Add-On Courses Offered"
            subtitle="Certificate programmes designed to enhance employability and broaden students' skillsets"
          />
          <div className="space-y-5">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6 flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${c.color}15` }}>
                    <c.icon style={{ color: c.color }} className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-primary-800 font-heading text-base">{c.title}</h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: c.color }}>{c.short}</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-2 font-medium">{c.dept}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Learn Beyond the Classroom" subtitle="Add-on courses at SSKV College bridge the gap between academics and real-world skills." />
    </>
  );
}
